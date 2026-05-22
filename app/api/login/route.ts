import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'rjg_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 días

export const runtime = 'nodejs';

// Comparación constante-time para evitar timing attacks
function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = String(body.password || '');
  const expected = process.env.APP_PASSWORD || '';

  if (!expected) {
    return NextResponse.json({ error: 'Configuración incompleta' }, { status: 500 });
  }

  if (!safeCompare(password, expected)) {
    // Pequeño delay aleatorio anti-bruteforce
    await new Promise((r) => setTimeout(r, 400 + Math.random() * 400));
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: '1',
    httpOnly: true,
    sameSite: 'lax',
    secure: req.nextUrl.protocol === 'https:',
    path: '/',
    maxAge: COOKIE_MAX_AGE
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: '',
    path: '/',
    maxAge: 0
  });
  return res;
}
