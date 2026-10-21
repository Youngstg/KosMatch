import { NextResponse } from "next/server";
import { z } from "zod";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { createSessionToken, verifyPassword } from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().trim().email("Format email tidak valid").toLowerCase(),
  password: z.string().min(1, "Kata sandi wajib diisi"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi gagal", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    if (!isDatabaseConfigured()) {
      // Mock login for offline / local preview mode
      const mockUser = {
        userId: "mock-user-1",
        email,
        role: "user" as const,
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

    // Ambil user berdasarkan email
    const queryRes = await pool.query<{
      id: string;
      email: string;
      password_hash: string | null;
      role: "user" | "owner" | "admin";
    }>("SELECT id, email, password_hash, role FROM public.users WHERE email = $1 LIMIT 1", [email]);

    const user = queryRes.rows[0];
    if (!user || !user.password_hash) {
      return NextResponse.json(
        { error: "Email atau kata sandi yang Anda masukkan salah." },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, user.password_hash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Email atau kata sandi yang Anda masukkan salah." },
        { status: 401 }
      );
    }

    const token = createSessionToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const res = NextResponse.json({
      success: true,
      user: {
        userId: user.id,
        email: user.email,
        role: user.role,
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
    console.error("Login error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan internal pada server" }, { status: 500 });
  }
}
