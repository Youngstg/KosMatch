import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { getMockTokenStore } from "@/app/api/auth/forgot-password/route";
import {
  rateLimiter,
  getClientIp,
  createRateLimitResponse,
} from "@/lib/security/rate-limiter";

const resetSchema = z.object({
  token: z.string().min(1, "Token reset wajib disertakan"),
  password: z.string().min(6, "Kata sandi baru minimal 6 karakter"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = resetSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi gagal", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { token, password } = result.data;
    const clientIp = getClientIp(req);

    // Rate Limiting per IP: maksimal 5 percobaan reset dalam 15 menit
    const ipLimit = rateLimiter.check(`reset:ip:${clientIp}`, 5, 900);
    if (!ipLimit.allowed) {
      return createRateLimitResponse(ipLimit.resetAfterSec);
    }

    const tokenHash = crypto.createHash("sha256").update(token.trim()).digest("hex");
    const now = new Date();

    if (!isDatabaseConfigured()) {
      // Mock flow
      const store = getMockTokenStore();
      const record = store.find((r) => r.tokenHash === tokenHash);

      if (!record) {
        return NextResponse.json(
          { error: "Tautan pengaturan ulang kata sandi tidak valid atau tidak ditemukan." },
          { status: 400 }
        );
      }

      if (record.used) {
        return NextResponse.json(
          { error: "Tautan ini telah digunakan sebelumnya. Silakan ajukan permintaan baru." },
          { status: 400 }
        );
      }

      if (record.expiresAt < Date.now()) {
        return NextResponse.json(
          { error: "Tautan pengaturan ulang kata sandi telah kedaluwarsa (lebih dari 15 menit)." },
          { status: 400 }
        );
      }

      record.used = true;
      return NextResponse.json({
        success: true,
        message: "Kata sandi Anda berhasil diperbarui. Silakan masuk dengan kata sandi baru.",
      });
    }

    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Koneksi database tidak tersedia" }, { status: 500 });
    }

    // Ambil token dari database
    const tokenQuery = await pool.query<{
      id: string;
      user_id: string;
      expires_at: string;
      used_at: string | null;
    }>(
      "SELECT id, user_id, expires_at, used_at FROM public.password_reset_tokens WHERE token_hash = $1 LIMIT 1",
      [tokenHash]
    );

    if (tokenQuery.rows.length === 0) {
      return NextResponse.json(
        { error: "Tautan pengaturan ulang kata sandi tidak valid atau tidak ditemukan." },
        { status: 400 }
      );
    }

    const tokenRecord = tokenQuery.rows[0];

    // Cek apakah sudah pernah dipakai (Single-use token)
    if (tokenRecord.used_at !== null) {
      return NextResponse.json(
        { error: "Tautan ini telah digunakan sebelumnya. Silakan ajukan permintaan reset baru." },
        { status: 400 }
      );
    }

    // Cek masa berlaku (15 menit)
    if (new Date(tokenRecord.expires_at) < now) {
      return NextResponse.json(
        { error: "Tautan pengaturan ulang kata sandi telah kedaluwarsa (lebih dari 15 menit)." },
        { status: 400 }
      );
    }

    // Hash kata sandi baru
    const passwordHash = hashPassword(password);

    // Update kata sandi pengguna
    await pool.query(
      "UPDATE public.users SET password_hash = $1, updated_at = now() WHERE id = $2",
      [passwordHash, tokenRecord.user_id]
    );

    // Tandai token telah digunakan (hangus)
    await pool.query(
      "UPDATE public.password_reset_tokens SET used_at = now() WHERE id = $1",
      [tokenRecord.id]
    );

    return NextResponse.json({
      success: true,
      message: "Kata sandi Anda berhasil diperbarui. Silakan masuk menggunakan kata sandi baru.",
    });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal saat memperbarui kata sandi." },
      { status: 500 }
    );
  }
}

