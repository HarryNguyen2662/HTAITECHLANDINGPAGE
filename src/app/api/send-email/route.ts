import { NextResponse } from 'next/server';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website?: string; // honeypot
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll('\'', '&#39;');
}

function renderContactEmail(formData: ContactFormData) {
  const name = escapeHtml(formData.name);
  const email = escapeHtml(formData.email);
  const phone = escapeHtml(formData.phone);
  const service = escapeHtml(formData.service);
  const message = escapeHtml(formData.message).replaceAll('\n', '<br />');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New contact inquiry</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;line-height:1.6;background:#f7f8fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:24px auto;background:#ffffff;border:1px solid #e5e7eb;">
    <tr>
      <td style="padding:24px 28px;border-bottom:1px solid #e5e7eb;">
        <p style="margin:0;color:#0f766e;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">H&amp;T AI TECH</p>
        <h1 style="color:#12161c;margin:8px 0 0;font-size:22px;">New project inquiry</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:6px 0;color:#6b7280;width:120px;">Name</td><td style="padding:6px 0;color:#12161c;"><strong>${name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#0f766e;">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Phone</td><td style="padding:6px 0;"><a href="tel:${phone}" style="color:#12161c;">${phone}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Service</td><td style="padding:6px 0;color:#12161c;">${service}</td></tr>
        </table>
        <div style="background:#f7f8fa;padding:16px 18px;border-radius:8px;">
          <p style="margin:0 0 8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
          <p style="margin:0;color:#12161c;">${message}</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getConfig() {
  return {
    apiKey: process.env.BREVO_API_KEY?.trim() || '',
    senderEmail: process.env.VERIFIED_SENDER_EMAIL?.trim() || '',
    senderName: process.env.SENDER_NAME?.trim() || 'H&T AI TECH',
    toEmail: process.env.CONTACT_TO_EMAIL?.trim() || 'tainguyenhuu@htaitech.net',
    toName: process.env.CONTACT_TO_NAME?.trim() || 'H&T AI TECH',
  };
}

async function sendWithBrevo(formData: ContactFormData) {
  const config = getConfig();
  const missing = [
    !config.apiKey && 'BREVO_API_KEY',
    !config.senderEmail && 'VERIFIED_SENDER_EMAIL',
  ].filter(Boolean);

  if (missing.length > 0) {
    return {
      ok: false as const,
      status: 500,
      error: `Missing server env: ${missing.join(', ')}`,
    };
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': config.apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: config.senderName,
        email: config.senderEmail,
      },
      to: [{ email: config.toEmail, name: config.toName }],
      replyTo: { email: formData.email, name: formData.name },
      subject: `New Project Inquiry from ${formData.name}`,
      htmlContent: renderContactEmail(formData),
      tags: ['contact_form'],
    }),
  });

  if (!response.ok) {
    let detail = `Brevo error ${response.status}`;
    try {
      const body = await response.json();
      detail = body?.message || body?.error || detail;
    } catch {
      // ignore parse errors
    }
    return { ok: false as const, status: 502, error: detail };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  try {
    const formData = (await request.json()) as ContactFormData;

    // Honeypot: bots fill hidden "website" field
    if (formData.website) {
      return NextResponse.json({ success: true });
    }

    const required = ['name', 'email', 'phone', 'service', 'message'] as const;
    for (const key of required) {
      if (!formData[key] || !String(formData[key]).trim()) {
        return NextResponse.json(
          { success: false, error: `Missing field: ${key}` },
          { status: 400 },
        );
      }
    }

    const result = await sendWithBrevo(formData);
    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: result.status },
      );
    }

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
