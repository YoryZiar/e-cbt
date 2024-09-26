import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/admin/dashboard');
            const isOnUserDashboard = nextUrl.pathname.startsWith('/user/dashboard');
            const isOnAdminLogin = nextUrl.pathname.startsWith('/auth/login');
            const isOnUserLogin = nextUrl.pathname.startsWith('/login');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isOnUserDashboard) {
                if (isLoggedIn) return true;
                return Response.redirect(new URL('/login', nextUrl));
            } else if (isLoggedIn && isOnAdminLogin) {
                return Response.redirect(new URL('/admin/dashboard', nextUrl));
            } else if (isLoggedIn && isOnUserLogin) {
                return Response.redirect(new URL('/user/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;