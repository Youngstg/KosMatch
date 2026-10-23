import { describe, expect, it } from "vitest";
import { POST as registerHandler } from "@/app/api/auth/register/route";
import { POST as loginHandler } from "@/app/api/auth/login/route";
import { POST as logoutHandler } from "@/app/api/auth/logout/route";
import { POST as googleAuthHandler, GET as googleGetHandler } from "@/app/api/auth/google/route";
import { GET as listingsGetHandler, POST as listingsPostHandler, PATCH as listingsPatchHandler } from "@/app/api/listings/route";
import { createSessionToken } from "@/lib/auth";

describe("API Auth & Listings Endpoints (Fase 2)", () => {
  it("menolak registrasi jika format email tidak valid", async () => {
    const req = new Request("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "bukan-email", password: "secretpassword" }),
    });

    const res = await registerHandler(req);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.error).toBe("Validasi gagal");
    expect(data.details.email).toBeDefined();
  });

  it("menolak registrasi jika kata sandi terlalu pendek (< 6 karakter)", async () => {
    const req = new Request("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@kosmatch.id", password: "123" }),
    });

    const res = await registerHandler(req);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.details.password).toBeDefined();
  });

  it("berhasil memproses register dalam mode simulasi saat DB belum disetel", async () => {
    const req = new Request("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "pilot@kosmatch.id", password: "password123", role: "owner" }),
    });

    const res = await registerHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.user.email).toBe("pilot@kosmatch.id");
    expect(data.user.role).toBe("owner");
    expect(res.headers.get("set-cookie")).toContain("kosmatch_session");
  });

  it("berhasil memproses login dalam mode simulasi saat DB belum disetel", async () => {
    const req = new Request("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "pilot@kosmatch.id", password: "password123" }),
    });

    const res = await loginHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(res.headers.get("set-cookie")).toContain("kosmatch_session");
  });

  it("berhasil memproses login dengan akun Google dan menghasilkan cookie sesi", async () => {
    const req = new Request("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "mahasiswa.ui@gmail.com", name: "Mahasiswa UI" }),
    });

    const res = await googleAuthHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.provider).toBe("google");
    expect(data.user.email).toBe("mahasiswa.ui@gmail.com");
    expect(res.headers.get("set-cookie")).toContain("kosmatch_session");
  });

  it("menolak login Google jika email tidak valid", async () => {
    const req = new Request("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "bukan-email-google" }),
    });

    const res = await googleAuthHandler(req);
    expect(res.status).toBe(400);
  });

  it("mengembalikan status konfigurasi Google OAuth pada metode GET", async () => {
    const res = await googleGetHandler();
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.configured).toBeDefined();
  });

  it("menghapus cookie sesi saat logout", async () => {
    const res = await logoutHandler();
    expect(res.status).toBe(200);
    expect(res.headers.get("set-cookie")).toContain("kosmatch_session=");
  });

  it("validasi formulir listing kos menolak sewa di atas Rp 100 juta", async () => {
    const req = new Request("http://localhost:3000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Kos Mewah Ekstrem",
        campusId: "ui-depok",
        latitude: -6.365,
        longitude: 106.828,
        rentMonthly: 100_000_001, // Melebihi batas Rp 100 juta
      }),
    });

    const res = await listingsPostHandler(req);
    expect(res.status).toBe(400);

    const data = await res.json();
    expect(data.details.rentMonthly).toBeDefined();
  });

  it("berhasil menerima listing kos komunitas yang valid", async () => {
    const req = new Request("http://localhost:3000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Kos Mahasiswa Sejahtera",
        campusId: "ui-depok",
        latitude: -6.368,
        longitude: 106.822,
        rentMonthly: 1200000,
        facilities: ["bathroom_inside", "wifi"],
      }),
    });

    const res = await listingsPostHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.listingId).toBeDefined();
  });

  it("mengembalikan list kos dengan status 200", async () => {
    const req = new Request("http://localhost:3000/api/listings?campusId=ui-depok");
    const res = await listingsGetHandler(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(Array.isArray(data.listings)).toBe(true);
  });

  it("menolak mahasiswa/user biasa untuk membuat listing kos (403 Forbidden)", async () => {
    const studentToken = createSessionToken({ userId: "stu-1", email: "student@ui.ac.id", role: "user" });
    const req = new Request("http://localhost:3000/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `kosmatch_session=${studentToken}`,
      },
      body: JSON.stringify({
        name: "Kos Coba Coba",
        campusId: "ui-depok",
        latitude: -6.368,
        longitude: 106.822,
        rentMonthly: 1200000,
      }),
    });

    const res = await listingsPostHandler(req);
    expect(res.status).toBe(403);
    const data = await res.json();
    expect(data.code).toBe("UNAUTHORIZED_ROLE");
  });

  it("menerima listing jika dikirim oleh akun dengan role owner (200 OK)", async () => {
    const ownerToken = createSessionToken({ userId: "owner-1", email: "juragan@kosmatch.id", role: "owner" });
    const req = new Request("http://localhost:3000/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `kosmatch_session=${ownerToken}`,
      },
      body: JSON.stringify({
        name: "Kos Graha Pemilik Resmi",
        campusId: "ui-depok",
        latitude: -6.368,
        longitude: 106.822,
        rentMonthly: 1500000,
      }),
    });

    const res = await listingsPostHandler(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.status).toBe("pending");
  });

  it("menolak permintaan PATCH status jika bukan admin (403)", async () => {
    const ownerToken = createSessionToken({ userId: "owner-1", email: "owner@kosmatch.id", role: "owner" });
    const req = new Request("http://localhost:3000/api/listings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `kosmatch_session=${ownerToken}`,
      },
      body: JSON.stringify({
        id: "mock-1",
        status: "verified",
      }),
    });

    const res = await listingsPatchHandler(req);
    expect(res.status).toBe(403);
  });

  it("mengizinkan admin memverifikasi listing dengan PATCH (200)", async () => {
    const adminToken = createSessionToken({ userId: "admin-1", email: "admin@kosmatch.id", role: "admin" });
    const req = new Request("http://localhost:3000/api/listings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `kosmatch_session=${adminToken}`,
      },
      body: JSON.stringify({
        id: "mock-1",
        status: "verified",
      }),
    });

    const res = await listingsPatchHandler(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.status).toBe("verified");
  });
});
