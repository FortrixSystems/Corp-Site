import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:4',message:'POST handler entry',data:{hasGmailUser:!!process.env.GMAIL_USER,hasGmailPassword:!!process.env.GMAIL_APP_PASSWORD,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
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

    // Check for Gmail environment variables
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:28',message:'Checking Gmail env vars',data:{hasGmailUser:!!process.env.GMAIL_USER,hasGmailPassword:!!process.env.GMAIL_APP_PASSWORD,gmailUserLength:process.env.GMAIL_USER?.length||0,gmailPasswordLength:process.env.GMAIL_APP_PASSWORD?.length||0,allEnvKeysCount:Object.keys(process.env).length,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Try multiple case variations (common AWS Amplify issue)
    // Check all possible variations including what's actually set in Amplify Console
    const gmailUser = process.env.GMAIL_USER 
      || process.env.gmail_user 
      || process.env.Gmail_User
      || process.env.Gmail_user; // Actual variable name in Amplify: Gmail_user
    
    const gmailPassword = process.env.GMAIL_APP_PASSWORD 
      || process.env.gmail_app_password 
      || process.env.Gmail_App_Password
      || process.env.Gmail_app_password; // Alternative naming pattern
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:33',message:'Gmail vars resolved',data:{gmailUserResolved:!!gmailUser,gmailPasswordResolved:!!gmailPassword},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    if (!gmailUser || !gmailPassword) {
      const allEnvKeys = Object.keys(process.env);
      const gmailRelatedKeys = allEnvKeys.filter(k => 
        k.toUpperCase().includes('GMAIL') || 
        k.toUpperCase().includes('MAIL')
      );
      console.error('[ERROR] Gmail credentials missing. Available env keys:', allEnvKeys.length, 'Gmail-related:', gmailRelatedKeys);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:40',message:'Gmail credentials missing - returning error',data:{allEnvKeysCount:allEnvKeys.length,gmailRelatedKeys:gmailRelatedKeys,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the administrator.',
          debug: {
            GMAIL_USER: process.env.GMAIL_USER ? 'SET' : 'MISSING',
            Gmail_user: process.env.Gmail_user ? 'SET' : 'MISSING',
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'SET' : 'MISSING',
            Gmail_app_password: process.env.Gmail_app_password ? 'SET' : 'MISSING',
            resolvedGmailUser: gmailUser ? 'FOUND' : 'MISSING',
            resolvedGmailPassword: gmailPassword ? 'FOUND' : 'MISSING',
            allEnvKeysCount: allEnvKeys.length,
            gmailRelatedKeys: gmailRelatedKeys,
            nodeEnv: process.env.NODE_ENV,
            timestamp: new Date().toISOString()
          }
        },
        { status: 500 }
      );
    }

    // Initialize nodemailer transporter
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:55',message:'Before creating transporter',data:{gmailUserDomain:gmailUser.split('@')[1]||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:63',message:'Transporter created successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    // Email content
    const mailOptions = {
      from: gmailUser,
      to: 'hello@fortrixsystems.com',
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
    };

    // Send email
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:95',message:'Before sending email',data:{to:'hello@fortrixsystems.com',from:gmailUser.split('@')[0]||'unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    await transporter.sendMail(mailOptions);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:98',message:'Email sent successfully',data:{success:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:103',message:'Exception caught in catch block',data:{errorName:error?.name||'unknown',errorMessage:error?.message?.substring(0,100)||'unknown',errorCode:error?.code||'none',errorStack:error?.stack?.substring(0,200)||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check Gmail credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.';
    }
    
    return NextResponse.json(
      { error: errorMessage, debug: { errorName: error?.name, errorCode: error?.code, errorMessage: error?.message } },
      { status: 500 }
    );
  }
}
