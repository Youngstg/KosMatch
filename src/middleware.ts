import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSafeRedirectUrl } from "@/lib/auth/redirect";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("kosmatch_session")?.value;
  const { pathname } = request.nextUrl;

  // Rute terproteksi: seluruh fitur utama (eksplorasi peta, kalkulator DSS, input listing, dan admin) wajib login
  const isProtectedRoute =
    pathname.startsWith("/explore") ||
    pathname.startsWith("/calculator") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/listings/new");

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    const safeRedirect = getSafeRedirectUrl(pathname, "/explore");
    loginUrl.searchParams.set("redirect", safeRedirect);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/explore/:path*",
    "/calculator/:path*",
    "/admin/:path*",
    "/listings/new/:path*",
  ],
};
