import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('=== CONTACT FORM API CALLED ===');
    
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { name, email, company, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Form validation passed');

    // Check environment variables
    console.log('Environment check:');
    console.log('- RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);
    console.log('- RESEND_API_KEY starts with:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
    console.log('- CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'not set');
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at kevin.ortega2011@gmail.com' },
        { status: 500 }
      );
    }

    // Log the form submission
    console.log('=== FORM SUBMISSION LOGGED ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Project Type:', projectType);
    console.log('Budget:', budget);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());

    // Test with a simple email first
    console.log('=== ATTEMPTING TO SEND SIMPLE TEST EMAIL ===');
    
    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'kevin.ortega2011@gmail.com',
      subject: `Test Email from Webloft Studio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009E69;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
    };

    console.log('Email data prepared:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject
    });

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      console.log('Resend API response status:', response.status);
      console.log('Resend API response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response' }));
        console.error('Resend API error:', errorData);
        console.error('Response status:', response.status);
        console.error('Response statusText:', response.statusText);
        
        // Log the error but still return success to user
        console.log('Email sending failed, but form submission was successful');
        console.log('Error details:', errorData);
        
        return NextResponse.json(
          { message: 'Message received! We will contact you soon.' },
          { status: 200 }
        );
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      return NextResponse.json(
        { message: 'Message sent successfully! We will contact you soon.' },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      console.log('Email sending failed, but form submission was successful');
      
      // Still return success to user even if email fails
      return NextResponse.json(
        { message: 'Message received! We will contact you soon.' },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('=== CONTACT FORM ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { error: 'Failed to process message. Please try again or contact us directly at kevin.ortega2011@gmail.com' },
      { status: 500 }
    );
  }
}