import { NextResponse } from "next/server";

interface RateRecord {
  timestamps: number[];
}

/**
 * In-memory sliding window rate limiter
 * Menyimpan riwayat percobaan request per-kunci dengan pembersihan memori otomatis.
 */
class SlidingWindowRateLimiter {
  private store = new Map<string, RateRecord>();
  private lastCleanup = Date.now();
  private readonly CLEANUP_INTERVAL = 60 * 1000; // 1 menit

  private purgeExpired(now: number, maxWindowMs: number) {
    if (now - this.lastCleanup < this.CLEANUP_INTERVAL) return;
    this.lastCleanup = now;

    for (const [key, record] of this.store.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < maxWindowMs);
      if (record.timestamps.length === 0) {
        this.store.delete(key);
      }
    }
  }

  /**
   * Cek apakah aksi untuk key tertentu diizinkan dalam rentang window.
   * Jika diizinkan, otomatis mencatat percobaan baru.
   */
  check(
    key: string,
    limit: number,
    windowSeconds: number
  ): { allowed: boolean; remaining: number; resetAfterSec: number } {
    const now = Date.now();
    const windowMs = windowSeconds * 1000;
    this.purgeExpired(now, windowMs);

    let record = this.store.get(key);
    if (!record) {
      record = { timestamps: [] };
      this.store.set(key, record);
    }

    // Buang timestamp yang berada di luar jendela waktu
    record.timestamps = record.timestamps.filter((ts) => now - ts < windowMs);

    if (record.timestamps.length >= limit) {
      // Hitung sisa waktu hingga request tertua kedaluwarsa
      const oldest = record.timestamps[0];
      const resetAfterSec = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
      return {
        allowed: false,
        remaining: 0,
        resetAfterSec,
      };
    }

    record.timestamps.push(now);
    const remaining = limit - record.timestamps.length;
    return {
      allowed: true,
      remaining,
      resetAfterSec: windowSeconds,
    };
  }

  /**
   * Reset histori kunci tertentu (misal setelah login berhasil)
   */
  reset(key: string): void {
    this.store.delete(key);
  }

  /**
   * Kosongkan seluruh store (berguna untuk testing)
   */
  clear(): void {
    this.store.clear();
  }
}

// Instance global limiter
export const rateLimiter = new SlidingWindowRateLimiter();

/**
 * Ekstraksi IP klien secara andal dari header proxy (Cloudflare, Nginx, ALB, dsb.)
 */
export function getClientIp(request: Request | Headers): string {
  const headers = request instanceof Request ? request.headers : request;

  // 1. Cloudflare header
  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  // 2. Nginx real ip
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // 3. X-Forwarded-For (ambil IP pertama)
  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  // 4. Client-IP fallback
  const clientIp = headers.get("x-client-ip");
  if (clientIp) return clientIp.trim();

  return "127.0.0.1";
}

/**
 * Helper untuk membuat Response HTTP 429 Too Many Requests standar
 */
export function createRateLimitResponse(
  resetAfterSec: number,
  customMessage?: string
): NextResponse {
  const message =
    customMessage ||
    `Terlalu banyak percobaan. Demi keamanan, silakan coba lagi dalam ${resetAfterSec} detik.`;

  return NextResponse.json(
    {
      error: message,
      retryAfter: resetAfterSec,
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(resetAfterSec),
      },
    }
  );
}

