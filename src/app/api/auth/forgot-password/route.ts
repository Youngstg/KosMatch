import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { sendPasswordResetEmail } from "@/lib/email/mailer";
import {
  rateLimiter,
  getClientIp,
  createRateLimitResponse,
} from "@/lib/security/rate-limiter";

const forgotSchema = z.object({
  email: z.string().trim().email("Format email tidak valid").toLowerCase(),
});

// Mock in-memory storage untuk mode lokal tanpa database aktif
interface MockTokenRecord {
  tokenHash: string;
  email: string;
  expiresAt: number;
  used: boolean;
}
const mockTokenStore: MockTokenRecord[] = [];

export function getMockTokenStore(): MockTokenRecord[] {
  return mockTokenStore;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = forgotSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Format email tidak valid", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email } = result.data;
    const clientIp = getClientIp(req);

    // Rate Limiting: 3 permintaan per IP dan per email dalam 15 menit (900 detik)
    const ipLimit = rateLimiter.check(`forgot:ip:${clientIp}`, 3, 900);
    if (!ipLimit.allowed) {
      return createRateLimitResponse(
        ipLimit.resetAfterSec,
        `Terlalu banyak permintaan reset kata sandi. Silakan tunggu ${ipLimit.resetAfterSec} detik.`
      );
    }

    const accountLimit = rateLimiter.check(`forgot:account:${email}`, 3, 900);
    if (!accountLimit.allowed) {
      return createRateLimitResponse(
        accountLimit.resetAfterSec,
        `Terlalu banyak permintaan untuk akun ini. Silakan tunggu ${accountLimit.resetAfterSec} detik.`
      );
    }

    // Buat token kriptografis acak 32-byte (64 hex characters)
    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 menit

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const resetUrl = `${appUrl}/auth/reset-password?token=${rawToken}`;

    const neutralResponse = {
      success: true,
      message:
        "Jika alamat email Anda terdaftar di sistem KosMatch, instruksi untuk mengatur ulang kata sandi telah dikirimkan ke kotak masuk Anda. Tautan berlaku selama 15 menit.",
    };

    if (!isDatabaseConfigured()) {
      // Mock flow
      mockTokenStore.push({
        tokenHash,
        email,
        expiresAt: expiresAt.getTime(),
        used: false,
      });
      await sendPasswordResetEmail({ to: email, resetUrl });
      return NextResponse.json(neutralResponse);
    }

    const pool = getDatabasePool();
    if (!pool) {
      // Return neutral message even on db error to avoid leakage, but log error internally
      console.error("Database pool tidak tersedia saat proses reset kata sandi.");
      return NextResponse.json(neutralResponse);
    }

    // Pastikan tabel password_reset_tokens ada secara idempotensial
    await pool.query(`
      CREATE TABLE IF NOT EXISTS public.password_reset_tokens (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
        token_hash TEXT NOT NULL UNIQUE,
        expires_at TIMESTAMPTZ NOT NULL,
        used_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      CREATE INDEX IF NOT EXISTS password_reset_tokens_hash_idx ON public.password_reset_tokens (token_hash);
    `);

    // Cari user berdasarkan email
    const userRes = await pool.query<{ id: string }>(
      "SELECT id FROM public.users WHERE email = $1 LIMIT 1",
      [email]
    );

    if (userRes.rows.length > 0) {
      const userId = userRes.rows[0].id;
      // Invalidate token lama yang belum terpakai untuk user ini
      await pool.query(
        "UPDATE public.password_reset_tokens SET used_at = now() WHERE user_id = $1 AND used_at IS NULL",
        [userId]
      );

      // Simpan token baru
      await pool.query(
        "INSERT INTO public.password_reset_tokens (user_id, token_hash, expires_at) VALUES ($1, $2, $3)",
        [userId, tokenHash, expiresAt.toISOString()]
      );

      // Kirim email
      await sendPasswordResetEmail({ to: email, resetUrl });
    } else {
      // User tidak ditemukan: jangan bocorkan info (Pesan Netral)
      // Jalankan hash dummy untuk mitigasi timing attack
      crypto.createHash("sha256").update(rawToken).digest("hex");
    }

    return NextResponse.json(neutralResponse);
  } catch (error) {
    console.error("Forgot password API error:", error);
    // Selalu kembalikan respons netral demi keamanan
    return NextResponse.json({
      success: true,
      message:
        "Jika alamat email Anda terdaftar di sistem KosMatch, instruksi untuk mengatur ulang kata sandi telah dikirimkan ke kotak masuk Anda.",
    });
  }
}

