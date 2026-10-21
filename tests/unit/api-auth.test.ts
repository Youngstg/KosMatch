import { describe, expect, it } from "vitest";
import { POST as registerHandler } from "@/app/api/auth/register/route";
import { POST as loginHandler } from "@/app/api/auth/login/route";
import { POST as logoutHandler } from "@/app/api/auth/logout/route";
import { GET as listingsGetHandler, POST as listingsPostHandler } from "@/app/api/listings/route";

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
});
