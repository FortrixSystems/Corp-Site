import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[ERROR] RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Fortrix Systems <onboarding@resend.dev>', // Will need to verify domain for production
      to: ['hello@fortrixsystems.com'],
      replyTo: email,
      subject: `Contact Form Submission from ${name}${organization ? ` - ${organization}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14222F;">New Contact Form Submission</h2>
          <div style="background-color: #F1F3F4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #14222F;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #F1F3F4; padding: 15px; border-radius: 8px;">${message}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
      `,
    });

    if (error) {
      console.error('[ERROR] Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
