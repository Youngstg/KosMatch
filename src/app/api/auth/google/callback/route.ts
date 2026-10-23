import { NextResponse } from "next/server";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { createSessionToken } from "@/lib/auth";

/**
 * Handler Callback Resmi Google OAuth 2.0 (Google Identity)
 * Menukar authorization code dari Google menjadi profil akun pengguna asli,
 * lalu membuat cookie sesi aman `kosmatch_session`.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  if (error) {
    console.error("Google OAuth error dari Google:", error);
    return NextResponse.redirect(
      `${appUrl}/auth/login?error=${encodeURIComponent("Akses autentikasi Google dibatalkan atau ditolak.")}`
    );
  }

  if (!code) {
    return NextResponse.redirect(
      `${appUrl}/auth/login?error=${encodeURIComponent("Kode otorisasi Google tidak ditemukan.")}`
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(
      `${appUrl}/auth/login?error=${encodeURIComponent("Konfigurasi GOOGLE_CLIENT_ID atau GOOGLE_CLIENT_SECRET belum lengkap di server.")}`
    );
  }

  try {
    const redirectUri = `${appUrl}/api/auth/google/callback`;

    // 1. Tukarkan kode otorisasi dengan token di Google OAuth 2.0 endpoint
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenRes.ok) {
      const errBody = await tokenRes.text().catch(() => "");
      console.error("Gagal menukar token dengan Google:", errBody);
      return NextResponse.redirect(
        `${appUrl}/auth/login?error=${encodeURIComponent("Verifikasi token dengan server Google gagal.")}`
      );
    }

    const tokens = await tokenRes.json();
    const accessToken = tokens.access_token;

    // 2. Ambil profil pengguna asli dari Google UserInfo API
    const userProfileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!userProfileRes.ok) {
      return NextResponse.redirect(
        `${appUrl}/auth/login?error=${encodeURIComponent("Gagal mengambil profil akun dari Google.")}`
      );
    }

    const profile = await userProfileRes.json();
    const userEmail = (profile.email || "").toLowerCase().trim();

    if (!userEmail) {
      return NextResponse.redirect(
        `${appUrl}/auth/login?error=${encodeURIComponent("Akun Google Anda tidak memiliki alamat email yang valid.")}`
      );
    }

    let finalUser: { id: string; email: string; role: "user" | "owner" | "admin" };

    if (!isDatabaseConfigured()) {
      // Mode Offline / Preview: buat user session dari profil asli Google
      finalUser = {
        id: `google-${profile.sub || Math.abs(userEmail.split("").reduce((a: number, b: string) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0))}`,
        email: userEmail,
        role: "user",
      };
    } else {
      // Mode Database PostgreSQL: simpan atau sinkronkan user
      const pool = getDatabasePool();
      if (!pool) {
        return NextResponse.redirect(
          `${appUrl}/auth/login?error=${encodeURIComponent("Koneksi database PostgreSQL tidak tersedia.")}`
        );
      }

      const existing = await pool.query<{
        id: string;
        email: string;
        role: "user" | "owner" | "admin";
      }>("SELECT id, email, role FROM public.users WHERE email = $1 LIMIT 1", [userEmail]);

      if (existing.rows.length > 0) {
        finalUser = existing.rows[0];
      } else {
        const insertRes = await pool.query<{
          id: string;
          email: string;
          role: "user" | "owner" | "admin";
        }>(
          "INSERT INTO public.users (email, role, created_at) VALUES ($1, $2, NOW()) RETURNING id, email, role",
          [userEmail, "user"]
        );
        finalUser = insertRes.rows[0];
      }
    }

    // 3. Buat cookie sesi aman
    const sessionToken = createSessionToken({
      userId: finalUser.id,
      email: finalUser.email,
      role: finalUser.role,
    });

    const targetRedirect = finalUser.role === "admin" || finalUser.role === "owner" ? "/admin" : "/explore";
    const res = NextResponse.redirect(`${appUrl}${targetRedirect}`);

    res.cookies.set("kosmatch_session", sessionToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch (err) {
    console.error("Unhandled Google OAuth callback error:", err);
    return NextResponse.redirect(
      `${appUrl}/auth/login?error=${encodeURIComponent("Terjadi kendala sistem saat memproses sesi Google Anda.")}`
    );
  }
}
