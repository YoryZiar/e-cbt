import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // authorized({ auth, request: { nextUrl } }: any) {
        //     const isLoggedIn = !!auth?.user;
        //     const { pathname } = nextUrl;
        //     if (pathname.startsWith('/login') && isLoggedIn) {
        //         return Response.redirect(new URL('/dashboard', nextUrl));
        //     }

        //     return !!auth;
        // },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;