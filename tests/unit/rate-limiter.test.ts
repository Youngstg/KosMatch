import { describe, it, expect, beforeEach } from "vitest";
import { rateLimiter, getClientIp, createRateLimitResponse } from "@/lib/security/rate-limiter";

describe("Rate Limiter & Proxy IP Extraction", () => {
  beforeEach(() => {
    rateLimiter.clear();
  });

  describe("getClientIp", () => {
    it("memprioritaskan header cf-connecting-ip (Cloudflare)", () => {
      const headers = new Headers({
        "cf-connecting-ip": "203.0.113.195",
        "x-real-ip": "198.51.100.1",
        "x-forwarded-for": "192.0.2.1, 198.51.100.1",
      });
      expect(getClientIp(headers)).toBe("203.0.113.195");
    });

    it("menggunakan header x-real-ip jika cf-connecting-ip tidak ada", () => {
      const headers = new Headers({
        "x-real-ip": "198.51.100.2",
        "x-forwarded-for": "192.0.2.1",
      });
      expect(getClientIp(headers)).toBe("198.51.100.2");
    });

    it("mengambil IP klien pertama dari daftar x-forwarded-for jika header lain tidak ada", () => {
      const headers = new Headers({
        "x-forwarded-for": "203.0.113.50, 10.0.0.1, 172.16.0.1",
      });
      expect(getClientIp(headers)).toBe("203.0.113.50");
    });

    it("mengembalikan fallback 127.0.0.1 jika tidak ada header IP", () => {
      const headers = new Headers();
      expect(getClientIp(headers)).toBe("127.0.0.1");
    });
  });

  describe("rateLimiter.check", () => {
    it("mengizinkan request di bawah limit dan menghitung remaining secara tepat", () => {
      const key = "test-user-ip-1";
      const res1 = rateLimiter.check(key, 3, 60);
      expect(res1.allowed).toBe(true);
      expect(res1.remaining).toBe(2);

      const res2 = rateLimiter.check(key, 3, 60);
      expect(res2.allowed).toBe(true);
      expect(res2.remaining).toBe(1);

      const res3 = rateLimiter.check(key, 3, 60);
      expect(res3.allowed).toBe(true);
      expect(res3.remaining).toBe(0);
    });

    it("memblokir request saat batas terlampaui dan mengembalikan allowed: false", () => {
      const key = "test-bruteforce-key";
      for (let i = 0; i < 5; i++) {
        expect(rateLimiter.check(key, 5, 60).allowed).toBe(true);
      }

      // Request ke-6 harus ditolak
      const blocked = rateLimiter.check(key, 5, 60);
      expect(blocked.allowed).toBe(false);
      expect(blocked.remaining).toBe(0);
      expect(blocked.resetAfterSec).toBeGreaterThan(0);
    });

    it("dapat mereset histori kunci dengan reset()", () => {
      const key = "reset-key";
      rateLimiter.check(key, 1, 60);
      expect(rateLimiter.check(key, 1, 60).allowed).toBe(false);

      rateLimiter.reset(key);
      expect(rateLimiter.check(key, 1, 60).allowed).toBe(true);
    });
  });

  describe("createRateLimitResponse", () => {
    it("membuat NextResponse dengan status 429 dan header Retry-After", async () => {
      const res = createRateLimitResponse(45);
      expect(res.status).toBe(429);
      expect(res.headers.get("Retry-After")).toBe("45");

      const body = await res.json();
      expect(body.error).toContain("45 detik");
      expect(body.retryAfter).toBe(45);
    });
  });
});

