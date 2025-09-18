import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input.replace(/[<>]/g, '');
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  
  if (realIP) {
    return realIP.trim();
  }
  
  return 'unknown';
}

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL || '',
      token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
    });

    const key = `rate_limit:ip:${ip}`;
    const limit = 3; // 3 emails per hour
    const window = 3600; // 1 hour in seconds

    // Get current count
    const current = await redis.get<number>(key) || 0;
    
    if (current >= limit) {
      const ttl = await redis.ttl(key);
      return {
        allowed: false,
        remaining: 0,
        resetTime: Date.now() + (ttl * 1000)
      };
    }

    // Increment counter
    const newCount = await redis.incr(key);
    
    // Set expiry only for the first request
    if (newCount === 1) {
      await redis.expire(key, window);
    }

    return {
      allowed: true,
      remaining: Math.max(0, limit - newCount),
      resetTime: Date.now() + (window * 1000)
    };
  } catch (error) {
    console.error('Redis rate limit check failed:', error);
    // Fail open - allow the request if Redis is down
    return {
      allowed: true,
      remaining: 2,
      resetTime: Date.now() + 3600000
    };
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactRequestBody;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
    }

    if (name.length > 200 || message.length > 5000) {
      return NextResponse.json({ success: false, error: 'Input too long' }, { status: 400 });
    }

    // Check rate limiting
    const clientIP = getClientIP(request);
    const rateLimitResult = await checkRateLimit(clientIP);

    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        { 
          success: false, 
          error: `Rate limit exceeded. You can send ${3} emails per hour. Try again at ${resetDate.toLocaleTimeString()}.`,
          rateLimitExceeded: true
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.floor(rateLimitResult.resetTime / 1000).toString(),
            'Retry-After': Math.floor((rateLimitResult.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // Rate limit passed - return success
    // Email will be sent by EmailJS on the client side

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      {
        headers: {
          'X-RateLimit-Limit': '3',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': Math.floor(rateLimitResult.resetTime / 1000).toString()
        }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}


