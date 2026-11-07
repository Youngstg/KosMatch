import { describe, it, expect, beforeEach } from "vitest";
import { POST as forgotPasswordHandler } from "@/app/api/auth/forgot-password/route";
import { POST as resetPasswordHandler } from "@/app/api/auth/reset-password/route";
import { rateLimiter } from "@/lib/security/rate-limiter";
import { getMockTokenStore } from "@/app/api/auth/forgot-password/route";
import crypto from "crypto";

describe("Alur Pemulihan Kata Sandi (Password Reset Flow)", () => {
  beforeEach(() => {
    rateLimiter.clear();
  });

  describe("POST /api/auth/forgot-password", () => {
    it("menolak request dengan format email tidak valid (400)", async () => {
      const req = new Request("http://localhost:3000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "bukan-email-valid" }),
      });

      const res = await forgotPasswordHandler(req);
      expect(res.status).toBe(400);

      const body = await res.json();
      expect(body.error).toContain("Format email tidak valid");
    });

    it("mengembalikan respons netral (200) tanpa membocorkan eksistensi akun", async () => {
      const testEmail = `user-${Date.now()}@kosmatch.test`;
      const req = new Request("http://localhost:3000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: testEmail }),
      });

      const res = await forgotPasswordHandler(req);
      expect(res.status).toBe(200);

      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.message).toContain("Jika alamat email Anda terdaftar");
    });

    it("menerapkan rate limiting: request ke-4 diblokir dengan status 429", async () => {
      const email = `ratelimit-${Date.now()}@kosmatch.test`;
      const clientIp = "192.0.2.123";

      for (let i = 0; i < 3; i++) {
        const req = new Request("http://localhost:3000/api/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-real-ip": clientIp,
          },
          body: JSON.stringify({ email }),
        });
        const res = await forgotPasswordHandler(req);
        expect(res.status).toBe(200);
      }

      // Percobaan ke-4
      const req4 = new Request("http://localhost:3000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-real-ip": clientIp,
        },
        body: JSON.stringify({ email }),
      });
      const res4 = await forgotPasswordHandler(req4);
      expect(res4.status).toBe(429);
      expect(res4.headers.get("Retry-After")).toBeTruthy();
    });
  });

  describe("POST /api/auth/reset-password", () => {
    it("menolak request jika token kosong atau tidak valid (400)", async () => {
      const req = new Request("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: "token-fiktif-ngawur", password: "NewPassword2026!" }),
      });

      const res = await resetPasswordHandler(req);
      expect(res.status).toBe(400);

      const body = await res.json();
      expect(body.error).toContain("tidak valid atau tidak ditemukan");
    });

    it("menolak jika kata sandi baru kurang dari 6 karakter (400)", async () => {
      const req = new Request("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: "valid-looking-token", password: "123" }),
      });

      const res = await resetPasswordHandler(req);
      expect(res.status).toBe(400);
      const body = await res.json();
      expect(body.error).toContain("Validasi gagal");
    });

    it("memvalidasi token sekali pakai (single-use) dan menolak penggunaan ulang", async () => {
      const rawToken = crypto.randomBytes(32).toString("hex");
      const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

      // Simulasikan token di mock store
      const store = getMockTokenStore();
      store.push({
        tokenHash,
        email: "singleuse@kosmatch.test",
        expiresAt: Date.now() + 15 * 60 * 1000,
        used: false,
      });

      // Penggunaan pertama -> Sukses
      const req1 = new Request("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: rawToken, password: "NewPassword123!" }),
      });
      const res1 = await resetPasswordHandler(req1);
      expect(res1.status).toBe(200);
      const body1 = await res1.json();
      expect(body1.success).toBe(true);

      // Penggunaan kedua dengan token yang sama -> Ditolak (400)
      const req2 = new Request("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: rawToken, password: "AnotherPassword123!" }),
      });
      const res2 = await resetPasswordHandler(req2);
      expect(res2.status).toBe(400);
      const body2 = await res2.json();
      expect(body2.error).toContain("telah digunakan sebelumnya");
    });

    it("menolak token yang telah kedaluwarsa (> 15 menit)", async () => {
      const rawToken = crypto.randomBytes(32).toString("hex");
      const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

      const store = getMockTokenStore();
      store.push({
        tokenHash,
        email: "expired@kosmatch.test",
        expiresAt: Date.now() - 1000, // telah lewat
        used: false,
      });

      const req = new Request("http://localhost:3000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: rawToken, password: "NewPassword123!" }),
      });
      const res = await resetPasswordHandler(req);
      expect(res.status).toBe(400);
      const body = await res.json();
      expect(body.error).toContain("kedaluwarsa");
    });
  });
});

