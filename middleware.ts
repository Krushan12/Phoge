import { authMiddleware, redirectToSignIn } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhooks/stripe"],
  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Redirect logged-in users from the landing page to the home page
    if (auth.userId && req.nextUrl.pathname === '/') {
      const homeUrl = new URL('/home', req.url);
      return NextResponse.redirect(homeUrl);
    }

    // Allow users to visit public routes
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    '/home((?!.*\\.).*)', // protect everything under /home
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)'
  ],
};