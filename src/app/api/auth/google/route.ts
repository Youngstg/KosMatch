import { NextResponse } from "next/server";
import { z } from "zod";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { createSessionToken } from "@/lib/auth";

const googleAuthSchema = z.object({
  idToken: z.string().optional(),
  email: z.string().email("Format email tidak valid").optional(),
  name: z.string().optional(),
  role: z.enum(["user", "owner"]).default("user"),
});

/**
 * Endpoint Autentikasi Google (OAuth 2.0 / Google Identity Services)
 * Mendukung verifikasi ID Token Google resmi serta mode simulasi instan lokal/pengembangan.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const parsed = googleAuthSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validasi data autentikasi Google gagal", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    let userEmail: string = parsed.data.email ?? "mahasiswa.ui@gmail.com";
    const userName: string = parsed.data.name ?? "Mahasiswa KosMatch";
    const role: "user" | "owner" = parsed.data.role ?? "user";

    // 1. Jika idToken dikirim dan GOOGLE_CLIENT_ID dikonfigurasi, verifikasi ke endpoint Google
    if (parsed.data.idToken && process.env.GOOGLE_CLIENT_ID) {
      try {
        const verifyRes = await fetch(
          `https://oauth2.googleapis.com/tokeninfo?id_token=${parsed.data.idToken}`
        );
        if (!verifyRes.ok) {
          return NextResponse.json(
            { error: "ID Token Google tidak valid atau telah kadaluarsa" },
            { status: 401 }
          );
        }
        const tokenInfo = await verifyRes.json();
        if (tokenInfo.aud !== process.env.GOOGLE_CLIENT_ID) {
          return NextResponse.json(
            { error: "Audience token Google tidak sesuai" },
            { status: 401 }
          );
        }
        if (tokenInfo.email) {
          userEmail = tokenInfo.email.toLowerCase();
        }
      } catch (err) {
        console.error("Gagal memverifikasi token Google:", err);
        return NextResponse.json(
          { error: "Gagal terhubung ke layanan verifikasi Google" },
          { status: 502 }
        );
      }
    }

    // 2. Mode Simulasi / Offline (Database PostgreSQL belum aktif)
    if (!isDatabaseConfigured()) {
      const mockUser = {
        userId: `google-usr-${Math.abs(userEmail.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0))}`,
        email: userEmail.toLowerCase(),
        role: userEmail.includes("owner") ? ("owner" as const) : role,
      };

      const token = createSessionToken(mockUser);
      const res = NextResponse.json({
        success: true,
        user: mockUser,
        provider: "google",
        notice: "Berhasil masuk dengan Akun Google (Mode pratinjau lokal)",
      });

      res.cookies.set("kosmatch_session", token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 hari
      });

      return res;
    }

    // 3. Database PostgreSQL Aktif: Upsert user Google
    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Koneksi database tidak tersedia" }, { status: 500 });
    }

    const normalizedEmail = userEmail.toLowerCase();
    const existing = await pool.query<{
      id: string;
      email: string;
      role: "user" | "owner" | "admin";
    }>("SELECT id, email, role FROM public.users WHERE email = $1 LIMIT 1", [normalizedEmail]);

    let finalUser: { id: string; email: string; role: "user" | "owner" | "admin" };

    if (existing.rows.length > 0) {
      finalUser = existing.rows[0];
    } else {
      const insertRes = await pool.query<{
        id: string;
        email: string;
        role: "user" | "owner" | "admin";
      }>(
        "INSERT INTO public.users (email, role, created_at) VALUES ($1, $2, NOW()) RETURNING id, email, role",
        [normalizedEmail, role]
      );
      finalUser = insertRes.rows[0];
    }

    const token = createSessionToken({
      userId: finalUser.id,
      email: finalUser.email,
      role: finalUser.role,
    });

    const res = NextResponse.json({
      success: true,
      user: {
        userId: finalUser.id,
        email: finalUser.email,
        role: finalUser.role,
        name: userName,
      },
      provider: "google",
    });

    res.cookies.set("kosmatch_session", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch (error) {
    console.error("Google Auth error:", error);
    return NextResponse.json(
      { error: "Terjadi kegagalan server saat memproses login Google" },
      { status: 500 }
    );
  }
}

/**
 * Cek status konfigurasi Google OAuth atau inisialisasi pengalihan login ke Google
 */
export async function GET(req?: Request) {
  if (req && req.url) {
    try {
      const url = new URL(req.url);
      if (url.searchParams.get("action") === "login") {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

        if (!clientId) {
          return NextResponse.redirect(`${appUrl}/auth/login?setup=google`);
        }

        const redirectUri = `${appUrl}/api/auth/google/callback`;
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
          redirectUri
        )}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=select_account`;

        return NextResponse.redirect(googleAuthUrl);
      }
    } catch {
      // Abaikan parsing error, lanjutkan ke pengecekan status biasa
    }
  }

  const isConfigured = Boolean(process.env.GOOGLE_CLIENT_ID);
  return NextResponse.json({
    configured: isConfigured,
    clientId: isConfigured ? process.env.GOOGLE_CLIENT_ID : null,
  });
}
