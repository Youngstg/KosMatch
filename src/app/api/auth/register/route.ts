import { NextResponse } from "next/server";
import { z } from "zod";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { createSessionToken, hashPassword } from "@/lib/auth";
import {
  rateLimiter,
  getClientIp,
  createRateLimitResponse,
} from "@/lib/security/rate-limiter";

const registerSchema = z.object({
  email: z.string().trim().email("Format email tidak valid").toLowerCase(),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
  role: z.enum(["user", "owner"]).default("user"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi gagal", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password, role } = result.data;
    const clientIp = getClientIp(req);

    // Rate limiting: batasi registrasi per IP dan per email (3 percobaan per 10 menit)
    const ipCheck = rateLimiter.check(`register:ip:${clientIp}`, 3, 600);
    if (!ipCheck.allowed) {
      return createRateLimitResponse(ipCheck.resetAfterSec);
    }

    const emailCheck = rateLimiter.check(`register:account:${email}`, 3, 600);
    if (!emailCheck.allowed) {
      return createRateLimitResponse(emailCheck.resetAfterSec);
    }

    const passwordHash = hashPassword(password);

    if (!isDatabaseConfigured()) {
      // Mock account for offline / local preview mode
      const mockUser = {
        userId: "mock-" + Date.now(),
        email,
        role: role as "user" | "owner",
      };
      const token = createSessionToken(mockUser);
      const res = NextResponse.json({
        success: true,
        user: mockUser,
        notice: "Mode simulasi offline (database belum terhubung)",
      });
      res.cookies.set("kosmatch_session", token, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
      return res;
    }

    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Koneksi database tidak tersedia" }, { status: 500 });
    }

    // Periksa apakah email sudah terdaftar
    const existing = await pool.query<{ id: string }>(
      "SELECT id FROM public.users WHERE email = $1 LIMIT 1",
      [email]
    );

    if (existing.rows.length > 0) {
      return NextResponse.json(
        { error: "Pendaftaran tidak dapat diproses dengan informasi tersebut. Silakan masuk jika Anda telah memiliki akun atau hubungi bantuan." },
        { status: 409 }
      );
    }

    // Insert user baru
    const insertRes = await pool.query<{ id: string; email: string; role: "user" | "owner" | "admin" }>(
      `INSERT INTO public.users (email, password_hash, role)
       VALUES ($1, $2, $3)
       RETURNING id, email, role`,
      [email, passwordHash, role]
    );

    const newUser = insertRes.rows[0];
    if (!newUser) {
      return NextResponse.json({ error: "Gagal menyimpan akun pengguna" }, { status: 500 });
    }

    const token = createSessionToken({
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    const res = NextResponse.json({
      success: true,
      user: {
        userId: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    });

    res.cookies.set("kosmatch_session", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan internal pada server" }, { status: 500 });
  }
}
