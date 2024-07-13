import {NextRequest, NextResponse} from 'next/server';


export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const publicRoutes = ['/'];
    const path = request.nextUrl.pathname;

    // Allow access to public routes
    if (publicRoutes.includes(path)) {
        return NextResponse.next();
    }

    // If the token exists, redirect to /admin
    if (token) {
        if (path === '/auth') {
            // Avoid loop by not redirecting /auth to itself
            return NextResponse.redirect(new URL('/admin', request.url));
        }
        return NextResponse.next();
    } else {
        // No token, redirect to login
        return NextResponse.redirect(new URL('/auth', request.url));
    }
}

export const config = {
    matcher: ['/admin'],
};

