import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("kosmatch_session")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute =
    pathname.startsWith("/explore") ||
    pathname.startsWith("/calculator") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/listings/new");

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/explore/:path*", "/calculator/:path*", "/admin/:path*", "/listings/new/:path*"],
};
