exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = new URLSearchParams(event.body);
    const data = {
      name: formData.get('name')?.trim(),
      email: formData.get('email')?.trim(),
      company: formData.get('company')?.trim(),
      projectType: formData.get('projectType')?.trim(),
      budget: formData.get('budget')?.trim(),
      message: formData.get('message')?.trim()
    };

    // Enhanced validation
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          error: 'Missing required fields',
          required: ['name', 'email', 'message']
        })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Log the submission with timestamp
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Contact form submission:`, {
      name: data.name,
      email: data.email,
      company: data.company || 'Not provided',
      projectType: data.projectType || 'Not specified',
      budget: data.budget || 'Not specified',
      message: data.message.substring(0, 100) + (data.message.length > 100 ? '...' : ''),
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'Unknown'
    });

    // TODO: Integrate with your preferred service:
    // - SendGrid for email notifications
    // - Airtable for data storage
    // - Zapier for automation
    // - EmailJS for client-side email sending
    // - Netlify Forms (if you want to use their built-in form handling)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        timestamp: timestamp
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'There was an error processing your request. Please try again later.'
      })
    };
  }
};
