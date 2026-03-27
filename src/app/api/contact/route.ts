import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { resolveGmailCredentials } from '@/lib/gmail-credentials';
import { escapeHtml } from '@/lib/html-escape';
import { rateLimitAllow } from '@/lib/rate-limit-ip';

export const runtime = 'nodejs';
export const maxDuration = 30;

const MAX_NAME = 200;
const MAX_EMAIL_LEN = 254;
const MAX_ORG = 200;
const MAX_PHONE = 40;
const MAX_MESSAGE = 10000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizePlainText(s: string, maxLen: number): string {
  return s
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .slice(0, maxLen)
    .trim();
}

export async function POST(request: NextRequest) {
  const limited = rateLimitAllow(request, {
    keyPrefix: 'contact',
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
    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const name = sanitizePlainText(String(body.name ?? ''), MAX_NAME);
    const emailRaw = String(body.email ?? '').trim().slice(0, MAX_EMAIL_LEN);
    const organization = sanitizePlainText(
      String(body.organization ?? ''),
      MAX_ORG
    );
    const phone = sanitizePlainText(String(body.phone ?? ''), MAX_PHONE);
    const message = sanitizePlainText(String(body.message ?? ''), MAX_MESSAGE);

    if (!name || !emailRaw || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(emailRaw)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const creds = resolveGmailCredentials();
    if (!creds) {
      console.error('[contact] Gmail credentials missing');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(emailRaw);
    const safeOrg = organization ? escapeHtml(organization) : '';
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeMessage = escapeHtml(message);

    const mailOptions = {
      from: creds.user,
      to: 'hello@fortrixsystems.com',
      replyTo: emailRaw,
      subject: `Contact Form Submission from ${name.replace(/\r?\n/g, ' ').trim()}${
        organization
          ? ` - ${organization.replace(/\r?\n/g, ' ').trim()}`
          : ''
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14222F;">New Contact Form Submission</h2>
          <div style="background-color: #F1F3F4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(emailRaw)}">${safeEmail}</a></p>
            ${organization ? `<p><strong>Organization:</strong> ${safeOrg}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #14222F;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #F1F3F4; padding: 15px; border-radius: 8px;">${safeMessage}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${emailRaw}
${organization ? `Organization: ${organization}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('[contact] Error sending email:', error);
    const err = error as { code?: string };
    let errorMessage = 'Failed to send email. Please try again later.';
    if (err.code === 'EAUTH') {
      errorMessage =
        'Email authentication failed. Please contact the administrator.';
    } else if (err.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.';
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
