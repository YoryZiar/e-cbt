import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
    const session = request.cookies.get('appwrite-session');
    const isLoggedIn = !!session;

    const isOnDashboard = request.nextUrl.pathname.startsWith('/admin/dashboard');
    const isOnUserDashboard = request.nextUrl.pathname.startsWith('/user/dashboard');
    const isOnAdminLogin = request.nextUrl.pathname.startsWith('/auth/login');
    const isOnUserLogin = request.nextUrl.pathname.startsWith('/login');

    if (isOnDashboard) {
        if (isLoggedIn) return NextResponse.next();
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    } else if (isOnUserDashboard) {
        if (isLoggedIn) return NextResponse.next();
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    } else if (isLoggedIn && isOnAdminLogin) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
    } else if (isLoggedIn && isOnUserLogin) {
        return NextResponse.redirect(new URL('/user/dashboard', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
