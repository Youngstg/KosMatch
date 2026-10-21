import { describe, expect, it } from "vitest";
import { createSessionToken, hashPassword, verifyPassword, verifySessionToken } from "@/lib/auth";

describe("VPS Authentication & Cryptography", () => {
  it("melakukan hash kata sandi dan memverifikasinya secara timing-safe", () => {
    const raw = "RahasiaKosMatch2026!";
    const hash = hashPassword(raw);

    expect(hash).toContain(":");
    expect(hash.split(":")).toHaveLength(2);

    expect(verifyPassword(raw, hash)).toBe(true);
    expect(verifyPassword("KataSandiSalah", hash)).toBe(false);
    expect(verifyPassword("", hash)).toBe(false);
    expect(verifyPassword(raw, "format:rusak:banget")).toBe(false);
  });

  it("membuat dan memverifikasi token sesi HMAC-SHA256 yang valid", () => {
    const user = {
      userId: "u-123456",
      email: "mahasiswa@ui.ac.id",
      role: "user" as const,
    };

    const token = createSessionToken(user, 7);
    expect(token).toContain(".");

    const session = verifySessionToken(token);
    expect(session).not.toBeNull();
    expect(session?.userId).toBe(user.userId);
    expect(session?.email).toBe(user.email);
    expect(session?.role).toBe("user");
    expect(session?.exp).toBeGreaterThan(Math.floor(Date.now() / 1000));
  });

  it("menolak token yang dimodifikasi atau rusak", () => {
    const user = {
      userId: "u-999",
      email: "owner@unand.ac.id",
      role: "owner" as const,
    };

    const token = createSessionToken(user, 1);
    const tampered = token.slice(0, -4) + "XXXX";

    expect(verifySessionToken(tampered)).toBeNull();
    expect(verifySessionToken("invalid-token-without-dot")).toBeNull();
  });

  it("menolak token yang sudah kedaluwarsa", () => {
    const user = {
      userId: "u-expired",
      email: "expired@kost.id",
      role: "user" as const,
    };

    // Buat token yang sudah expired (-1 hari)
    const token = createSessionToken(user, -1);
    expect(verifySessionToken(token)).toBeNull();
  });
});
