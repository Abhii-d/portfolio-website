import { NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input.replace(/[<>]/g, '');
}

export async function POST(request: Request) {
  try {
    const { name, email, message, captchaToken } = (await request.json()) as ContactRequestBody;

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
    }

    if (name.length > 200 || message.length > 5000) {
      return NextResponse.json({ success: false, error: 'Input too long' }, { status: 400 });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      return NextResponse.json({ success: false, error: 'Server misconfiguration: TURNSTILE_SECRET_KEY missing' }, { status: 500 });
    }

    // Verify Turnstile token with Cloudflare
    const ipHeader = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined;
    const remoteIp = ipHeader?.split(',')[0]?.trim();
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(captchaToken)}${remoteIp ? `&remoteip=${encodeURIComponent(remoteIp)}` : ''}`,
      // In case you're on edge runtimes, you might want: cache: 'no-store'
    });
    const verifyJson = (await verifyResponse.json()) as { success: boolean; 'error-codes'?: string[] };
    if (!verifyJson.success) {
      return NextResponse.json({ success: false, error: 'Captcha verification failed' }, { status: 400 });
    }

    // CAPTCHA verified successfully - return success
    // Email will be sent by EmailJS on the client side

    return NextResponse.json({ success: true, message: 'Message sent' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Unexpected server error' }, { status: 500 });
  }
}


