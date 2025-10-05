exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = new URLSearchParams(event.body);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      message: formData.get('message')
    };

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Here you would typically send an email or save to a database
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', data);

    // You can integrate with services like:
    // - SendGrid for email
    // - Airtable for data storage
    // - Zapier for automation
    // - Or any other service you prefer

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        data: data
      })
    };

  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
