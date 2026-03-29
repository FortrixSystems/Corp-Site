import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  resolveGmailCredentials,
  resolveMailFromAddress,
} from '@/lib/gmail-credentials';
import { escapeHtml } from '@/lib/html-escape';
import { rateLimitAllow } from '@/lib/rate-limit-ip';
import {
  RESUME_MAX_BYTES,
  getResumeExtension,
  validateResumeBytes,
} from '@/lib/resume-validation';

export const runtime = 'nodejs';
/** Raise if Amplify/Lambda default 10s is too low (multipart + Gmail send). */
export const maxDuration = 30;

const DEFAULT_TO = 'hello@fortrixsystems.com';

/** Multipart overhead — reject early before buffering huge bodies. */
const MAX_REQUEST_BYTES = 6 * 1024 * 1024;

const MAX_NAME_LEN = 200;
const MAX_EMAIL_LEN = 254;
const MAX_LINKEDIN_LEN = 500;
const MAX_ABOUT_LEN = 10000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizePlainText(s: string, maxLen: number): string {
  return s
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .slice(0, maxLen)
    .trim();
}

function sanitizeFilename(name: string): string {
  const base = name.replace(/[/\\]/g, '').trim() || 'resume';
  return base.slice(0, 200);
}

export async function POST(request: NextRequest) {
  const contentLength = request.headers.get('content-length');
  if (contentLength) {
    const n = parseInt(contentLength, 10);
    if (Number.isFinite(n) && n > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: 'Request too large.' },
        { status: 413 }
      );
    }
  }

  const limited = rateLimitAllow(request, {
    keyPrefix: 'work-with-us',
    max: 5,
    windowMs: 15 * 60 * 1000,
  });
  if (!limited.allowed) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(limited.retryAfterSec),
        },
      }
    );
  }

  try {
    const formData = await request.formData();

    const honeypot = formData.get('_gotcha');
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const nameRaw = formData.get('name');
    const emailRaw = formData.get('email');
    const linkedinRaw = formData.get('linkedin');
    const aboutRaw = formData.get('about');
    const resume = formData.get('resume');

    if (typeof nameRaw !== 'string') {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    const name = sanitizePlainText(nameRaw, MAX_NAME_LEN);
    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (typeof emailRaw !== 'string' || !emailRaw.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const email = emailRaw.trim().slice(0, MAX_EMAIL_LEN);
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const linkedinStr =
      typeof linkedinRaw === 'string'
        ? sanitizePlainText(linkedinRaw, MAX_LINKEDIN_LEN)
        : '';
    const aboutStr =
      typeof aboutRaw === 'string'
        ? sanitizePlainText(aboutRaw, MAX_ABOUT_LEN)
        : '';

    if (!(resume instanceof File)) {
      return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 });
    }

    if (resume.size > RESUME_MAX_BYTES || resume.size === 0) {
      return NextResponse.json(
        {
          error:
            'Invalid resume. Upload a PDF or Word file (.doc, .docx) under 5 MB.',
        },
        { status: 400 }
      );
    }

    const ext = getResumeExtension(resume.name);
    if (!ext) {
      return NextResponse.json(
        {
          error:
            'Invalid resume. Use a .pdf, .doc, or .docx file.',
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await resume.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const validated = validateResumeBytes(ext, buffer, resume.size);
    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const creds = resolveGmailCredentials();
    if (!creds) {
      console.error('[work-with-us] Gmail credentials missing');
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: creds.user,
        pass: creds.password,
      },
    });

    const to =
      process.env['WORK_WITH_US_TO_EMAIL']?.trim() || DEFAULT_TO;
    const from = resolveMailFromAddress();
    const replyTo = email;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeLinkedin = linkedinStr ? escapeHtml(linkedinStr) : '';
    const safeAbout = escapeHtml(aboutStr);

    const filename = sanitizeFilename(resume.name);
    const subject = 'New application — Fortrix Systems';

    const nodeBuffer = Buffer.from(buffer);

    const mailOptions = {
      from,
      to,
      replyTo,
      subject,
      attachments: [
        {
          filename,
          content: nodeBuffer,
          contentType: resume.type || undefined,
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14222F;">New Work With Us application</h2>
          <div style="background-color: #F1F3F4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${safeEmail}</a></p>
            ${linkedinStr ? `<p><strong>LinkedIn:</strong> ${safeLinkedin}</p>` : ''}
          </div>
          ${
            aboutStr
              ? `<div style="margin: 20px 0;">
            <h3 style="color: #14222F;">About</h3>
            <p style="white-space: pre-wrap; background-color: #F1F3F4; padding: 15px; border-radius: 8px;">${safeAbout}</p>
          </div>`
              : ''
          }
          <p style="color: #5D6368; font-size: 14px;">Resume is attached to this message.</p>
        </div>
      `,
      text: [
        'New Work With Us application',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        linkedinStr ? `LinkedIn: ${linkedinStr}` : '',
        '',
        aboutStr ? `About:\n${aboutStr}\n` : '',
        '',
        `Resume attached: ${filename}`,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application received.' }, { status: 200 });
  } catch (error: unknown) {
    console.error('[work-with-us]', error);
    const err = error as { code?: string };
    let errorMessage = 'Failed to submit application. Please try again later.';
    if (err.code === 'EAUTH') {
      errorMessage =
        'Email authentication failed. Please contact the administrator.';
    } else if (err.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.';
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
