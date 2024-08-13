// middleware.ts (ou middleware.js si vous utilisez JavaScript)
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Utilisez le secret pour obtenir le token JWT
  const token = await getToken({ req: request, secret });
  
  // Chemins protégés
  const protectedPaths = [
    '/dashboard',
    '/register',
    '/state',
    '/pay'
  ];

  // Vérifiez si la requête est pour un chemin protégé
  if (protectedPaths.some(path => url.pathname.startsWith(path))) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    if (!token) {
      url.pathname = '/'; // Page de connexion
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/register', '/state', '/pay'],
};
