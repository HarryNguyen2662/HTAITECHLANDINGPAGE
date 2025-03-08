import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from '@sendinblue/client';
import { NextResponse } from 'next/server';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function renderContactEmail(formData: ContactFormData) {
  const { name, email, phone, service, message } = formData;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Inquiry Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 20px 30px; border-bottom: 2px solid #f0f0f0;">
        <h1 style="color: #333333; margin: 0; font-size: 24px;">New Project Inquiry</h1>
        <p style="color: #666666; margin: 5px 0 0; font-size: 18px;">Transform Your Vision into Reality</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <p style="margin: 0 0 20px; color: #444444;">Hi H&T AI TECH,</p>
        <p style="margin: 0 0 20px; color: #444444;">
          I'm excited to explore collaboration opportunities to bring impactful projects to life. Below are my details:
        </p>
        <table style="width: 100%; margin-bottom: 25px;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
        </table>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px;">
          <h3 style="margin: 0 0 15px;">Project Message:</h3>
          <p style="margin: 0; font-style: italic;">${message}</p>
        </div>
        <p style="margin: 25px 0;">
          I'd appreciate the opportunity to discuss how we can work together to achieve meaningful results.
        </p>
        <a href="mailto:${email}" style="background-color: #007bff; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 4px;">Schedule Discussion</a>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  const requiredEnvVars = {
    BREVO_API_KEY: process.env.BREVO_API_KEY || '',
    SENDER_EMAIL: process.env.VERIFIED_SENDER_EMAIL || '',
    SENDER_NAME: process.env.SENDER_NAME || '',
  };

  // Validate environment variables
  for (const [value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      );
    }
  }

  try {
    const formData: ContactFormData = await request.json();
    const { name, email } = formData;

    // Initialize API client with proper authentication using setApiKey
    const apiInstance = new TransactionalEmailsApi();
    apiInstance.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      requiredEnvVars.BREVO_API_KEY,
    );

    // Build email payload as a plain object so it serializes correctly
    const sendSmtpEmailPayload = {
      sender: {
        name: requiredEnvVars.SENDER_NAME,
        email: requiredEnvVars.SENDER_EMAIL,
      },
      to: [{ email: 'tainguyenhuu@htaitech.net', name: 'H&T AI Tech Team' }],
      replyTo: { email, name },
      subject: `New Project Inquiry from ${name}`,
      htmlContent: renderContactEmail(formData),
      headers: {
        'sender.ip': '1.2.3.4',
        'X-Mailin-custom': 'custom_contact_form',
      },
      tags: ['contact_form'],
    };

    // Send email
    await apiInstance.sendTransacEmail(sendSmtpEmailPayload);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Failed to send email',
      },
      { status: 500 },
    );
  }
}
