import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Test endpoint to verify API route is accessible
export async function GET() {
  const allEnvKeys = Object.keys(process.env);
  const gmailRelatedKeys = allEnvKeys.filter(k => 
    k.toUpperCase().includes('GMAIL') || 
    k.toUpperCase().includes('MAIL') ||
    k.toUpperCase().includes('EMAIL')
  );
  
  return NextResponse.json({
    message: 'API route is working',
    environment: {
      nodeEnv: process.env.NODE_ENV,
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      gmailUserPreview: process.env.GMAIL_USER ? `${process.env.GMAIL_USER.substring(0, 5)}...` : 'undefined',
      gmailPasswordLength: process.env.GMAIL_APP_PASSWORD?.length || 0,
      allGmailKeys: gmailRelatedKeys,
      gmailKeyDetails: gmailRelatedKeys.map(k => ({ 
        key: k, 
        hasValue: !!process.env[k], 
        valueLength: process.env[k]?.length || 0,
        valuePreview: process.env[k] ? `${String(process.env[k]).substring(0, 5)}...` : 'undefined'
      })),
      totalEnvKeys: allEnvKeys.length
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:33',message:'POST handler entry',data:{nodeEnv:process.env.NODE_ENV,hasGmailUser:!!process.env.GMAIL_USER,hasGmailPassword:!!process.env.GMAIL_APP_PASSWORD,totalEnvKeys:Object.keys(process.env).length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Debug logging to console (will show in CloudWatch for AWS Amplify)
    const allEnvKeys = Object.keys(process.env);
    const gmailRelatedKeys = allEnvKeys.filter(k => 
      k.toUpperCase().includes('GMAIL') || 
      k.toUpperCase().includes('MAIL') ||
      k.toUpperCase().includes('EMAIL')
    );
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:40',message:'Environment keys analysis',data:{totalEnvKeys:allEnvKeys.length,gmailRelatedKeysCount:gmailRelatedKeys.length,gmailRelatedKeys:gmailRelatedKeys,hasGmailUser:!!process.env.GMAIL_USER,hasGmailPassword:!!process.env.GMAIL_APP_PASSWORD},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    
    console.log('[DEBUG] Environment check:', {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
      gmailUserValue: process.env.GMAIL_USER ? `${process.env.GMAIL_USER.substring(0, 5)}...` : 'undefined',
      gmailPasswordLength: process.env.GMAIL_APP_PASSWORD?.length || 0,
      gmailUserType: typeof process.env.GMAIL_USER,
      gmailPasswordType: typeof process.env.GMAIL_APP_PASSWORD,
      allGmailKeys: gmailRelatedKeys,
      allGmailKeyValues: gmailRelatedKeys.map(k => ({ key: k, hasValue: !!process.env[k], length: process.env[k]?.length || 0 })),
      nodeEnv: process.env.NODE_ENV,
      totalEnvKeys: allEnvKeys.length,
      sampleEnvKeys: allEnvKeys.slice(0, 10) // First 10 env keys for debugging
    });
    
    // Also check with different case variations (common AWS Amplify issue)
    console.log('[DEBUG] Case variations check:', {
      GMAIL_USER: !!process.env.GMAIL_USER,
      gmail_user: !!process.env.gmail_user,
      Gmail_User: !!process.env.Gmail_User,
      GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
      gmail_app_password: !!process.env.gmail_app_password,
    });
    
    // Check for environment variables - try multiple case variations
    const gmailUser = process.env.GMAIL_USER || process.env.gmail_user || process.env.Gmail_User;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD || process.env.gmail_app_password || process.env.Gmail_App_Password;
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:74',message:'Before env var check',data:{gmailUserResolved:!!gmailUser,gmailPasswordResolved:!!gmailPassword,gmailUserSource:process.env.GMAIL_USER?'GMAIL_USER':process.env.gmail_user?'gmail_user':process.env.Gmail_User?'Gmail_User':'none',gmailPasswordSource:process.env.GMAIL_APP_PASSWORD?'GMAIL_APP_PASSWORD':process.env.gmail_app_password?'gmail_app_password':'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    if (!gmailUser || !gmailPassword) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:78',message:'Environment variables missing - returning error',data:{gmailUserExists:!!process.env.GMAIL_USER,gmailPasswordExists:!!process.env.GMAIL_APP_PASSWORD,nodeEnv:process.env.NODE_ENV,allEnvKeysCount:allEnvKeys.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      const allEnvKeys = Object.keys(process.env);
      const gmailRelatedKeys = allEnvKeys.filter(k => 
        k.toUpperCase().includes('GMAIL') || 
        k.toUpperCase().includes('MAIL') ||
        k.toUpperCase().includes('EMAIL')
      );
      
      const errorDetails = {
        GMAIL_USER: process.env.GMAIL_USER ? 'SET (length: ' + process.env.GMAIL_USER.length + ')' : 'MISSING',
        gmail_user: process.env.gmail_user ? 'SET' : 'MISSING',
        Gmail_User: process.env.Gmail_User ? 'SET' : 'MISSING',
        GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'SET (length: ' + process.env.GMAIL_APP_PASSWORD.length + ')' : 'MISSING',
        gmail_app_password: process.env.gmail_app_password ? 'SET' : 'MISSING',
        resolvedGmailUser: gmailUser ? 'FOUND' : 'MISSING',
        resolvedGmailPassword: gmailPassword ? 'FOUND' : 'MISSING',
        allEnvKeysWithMail: gmailRelatedKeys,
        allEnvKeysCount: allEnvKeys.length,
        nodeEnv: process.env.NODE_ENV,
        sampleEnvKeys: allEnvKeys.slice(0, 30).join(', ')
      };
      
      console.error('[ERROR] Missing Gmail credentials - DETAILED:', JSON.stringify(errorDetails, null, 2));
      
      // Return error with debug details (safe - no passwords exposed, just names and lengths)
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the administrator.',
          debug: {
            ...errorDetails,
            timestamp: new Date().toISOString()
          }
        },
        { status: 500 }
      );
    }
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:20',message:'Environment variables found, proceeding',data:{gmailUserSet:true,gmailPasswordSet:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

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

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:38',message:'Creating transporter',data:{gmailUserFirstChar:process.env.GMAIL_USER?.charAt(0)||'none',gmailUserDomain:process.env.GMAIL_USER?.split('@')[1]||'none'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    // Create transporter using Gmail SMTP (use resolved variables)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

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

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:82',message:'Attempting to send email',data:{to:'hello@fortrixsystems.com',from:process.env.GMAIL_USER?.split('@')[0]||'unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:87',message:'Email sent successfully',data:{success:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/d90ceae2-77b8-4b2a-8d52-28547d9ade93',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:95',message:'Error caught',data:{errorCode:error?.code||'unknown',errorMessage:error?.message||'unknown',errorName:error?.name||'unknown',hasResponse:!!error?.response},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check Gmail credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.';
    } else if (error.response) {
      errorMessage = `Email server error: ${error.response}`;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
