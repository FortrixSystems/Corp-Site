import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:4',message:'POST handler entry',data:{hasResendKey:!!process.env.RESEND_API_KEY,resendKeyLength:process.env.RESEND_API_KEY?.length||0,resendKeyPrefix:process.env.RESEND_API_KEY?.substring(0,3)||'none',nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  try {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:7',message:'Before parsing request body',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    const body = await request.json();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:10',message:'Request body parsed',data:{hasName:!!body.name,hasEmail:!!body.email,hasMessage:!!body.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:28',message:'Checking RESEND_API_KEY',data:{hasResendKey:!!process.env.RESEND_API_KEY,resendKeyLength:process.env.RESEND_API_KEY?.length||0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    if (!process.env.RESEND_API_KEY) {
      console.error('[ERROR] RESEND_API_KEY is not configured');
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:31',message:'RESEND_API_KEY missing - returning error',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Initialize Resend lazily (only when needed, not at module level)
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:38',message:'Before Resend initialization',data:{resendKeyPrefix:process.env.RESEND_API_KEY?.substring(0,3)||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    const resend = new Resend(process.env.RESEND_API_KEY);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:40',message:'Resend initialized successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    // Send email using Resend
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:43',message:'Before Resend API call',data:{to:'hello@fortrixsystems.com',from:'onboarding@resend.dev'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
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

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:75',message:'Resend API call completed',data:{hasError:!!error,hasData:!!data,errorName:error?.name||'none',errorMessage:error?.message?.substring(0,50)||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    if (error) {
      console.error('[ERROR] Resend API error:', error);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:78',message:'Resend API error - returning error response',data:{errorName:error?.name||'unknown',errorMessage:error?.message?.substring(0,100)||'unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.', debug: { errorName: error?.name, errorMessage: error?.message } },
        { status: 500 }
      );
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:85',message:'Email sent successfully',data:{emailId:data?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    return NextResponse.json(
      { message: 'Email sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:91',message:'Exception caught in catch block',data:{errorName:error?.name||'unknown',errorMessage:error?.message?.substring(0,100)||'unknown',errorStack:error?.stack?.substring(0,200)||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.', debug: { errorName: error?.name, errorMessage: error?.message } },
      { status: 500 }
    );
  }
}
