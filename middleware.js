import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Si l'utilisateur est authentifié, permettre l'accès
  if (token) {
    return NextResponse.next();
  }

  // Redirection vers la page de connexion si non authentifié
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/register') || pathname.startsWith('/state') || pathname.startsWith('/pay')) {
    const url = new URL('/auth/signin', req.url);
    url.searchParams.set('callbackUrl', req.url);
    return NextResponse.redirect(url);
  }

  // Si aucune règle ne correspond, continuer
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard',
    '/register',
    '/state',
    '/pay',
  ],
};
