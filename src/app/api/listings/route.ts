import { NextResponse } from "next/server";
import { z } from "zod";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";
import { verifySessionToken } from "@/lib/auth";

const createListingSchema = z.object({
  name: z.string().trim().min(3, "Nama kos minimal 3 karakter"),
  campusId: z.string().min(1, "Kampus tujuan wajib dipilih"),
  latitude: z.number().min(-90).max(90, "Garis lintang tidak valid"),
  longitude: z.number().min(-180).max(180, "Garis bujur tidak valid"),
  rentMonthly: z
    .number()
    .int("Sewa bulanan harus berupa bilangan bulat")
    .min(0, "Sewa tidak boleh negatif")
    .max(100_000_000, "Sewa maksimal Rp 100.000.000"),
  utilities: z.record(z.string(), z.unknown()).default({}),
  facilities: z.array(z.string()).default([]),
  rules: z.record(z.string(), z.unknown()).default({}),
  description: z.string().max(1000).optional(),
});

const updateStatusSchema = z.object({
  id: z.string().min(1, "ID listing wajib diisi"),
  status: z.enum(["verified", "pending", "rejected"]),
});

export async function GET(req: Request) {
  try {
    let session = null;
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const match = cookieHeader.match(/kosmatch_session=([^;]+)/);
      if (match?.[1]) {
        session = verifySessionToken(match[1]);
      }
    }

    const { searchParams } = new URL(req.url);
    const campusId = searchParams.get("campusId");
    const statusParam = searchParams.get("status"); // 'verified' | 'pending' | 'all'
    const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit") || 50)));

    if (!isDatabaseConfigured()) {
      return NextResponse.json({
        listings: [],
        source: "simulated",
        message: "Database belum terhubung",
      });
    }

    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Database pool tidak tersedia" }, { status: 500 });
    }

    let query = `
      SELECT
        id,
        name,
        campus_id AS "campusId",
        rent_monthly AS "rentMonthly",
        facilities,
        utilities,
        rules,
        description,
        status,
        owner_id AS "ownerId",
        ST_Y(geom::geometry) AS latitude,
        ST_X(geom::geometry) AS longitude,
        created_at AS "createdAt"
      FROM public.listings
      WHERE 1=1
    `;
    const params: unknown[] = [];

    // Role-based visibility
    if (session?.role === "admin") {
      if (statusParam && statusParam !== "all") {
        params.push(statusParam);
        query += ` AND status = $${params.length}`;
      }
    } else if (session?.role === "owner") {
      params.push(session.userId);
      query += ` AND owner_id = $${params.length}`;
      if (statusParam && statusParam !== "all") {
        params.push(statusParam);
        query += ` AND status = $${params.length}`;
      }
    } else {
      // Public / Student: only verified listings
      query += ` AND status = 'verified'`;
    }

    if (campusId) {
      params.push(campusId);
      query += ` AND campus_id = $${params.length}`;
    }

    params.push(limit);
    query += ` ORDER BY created_at DESC LIMIT $${params.length}`;

    const res = await pool.query(query, params);
    return NextResponse.json({ listings: res.rows, source: "vps-postgres" });
  } catch (error) {
    console.error("Fetch listings error:", error);
    return NextResponse.json({ error: "Gagal mengambil daftar kos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    let session = null;
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const match = cookieHeader.match(/kosmatch_session=([^;]+)/);
      if (match?.[1]) {
        session = verifySessionToken(match[1]);
      }
    }

    const body = await req.json();
    const result = createListingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi formulir gagal", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Role check: Regular student user is forbidden from creating listings
    if (session && session.role !== "admin" && session.role !== "owner") {
      return NextResponse.json(
        {
          error: "Akses ditolak. Anda harus masuk sebagai Pemilik Kos atau Admin untuk menambahkan listing.",
          code: "UNAUTHORIZED_ROLE",
        },
        { status: 403 }
      );
    }

    // In production with database configured, require an active admin or owner session
    if (isDatabaseConfigured() && (!session || (session.role !== "admin" && session.role !== "owner"))) {
      return NextResponse.json(
        {
          error: "Akses ditolak. Anda harus masuk sebagai Pemilik Kos atau Admin untuk menambahkan listing.",
          code: "UNAUTHORIZED_ROLE",
        },
        { status: 403 }
      );
    }

    const { name, campusId, latitude, longitude, rentMonthly, utilities, facilities, rules, description } =
      result.data;

    if (!isDatabaseConfigured()) {
      return NextResponse.json({
        success: true,
        listingId: "mock-listing-" + Date.now(),
        status: session?.role === "admin" ? "verified" : "pending",
        notice: "Listing tersimpan dalam mode simulasi (database belum terhubung)",
      });
    }

    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Database pool tidak tersedia" }, { status: 500 });
    }

    const status = session?.role === "admin" ? "verified" : "pending";
    const ownerId = session?.userId ?? null;

    const insertRes = await pool.query<{ id: string; status: string }>(
      `INSERT INTO public.listings (
        owner_id,
        campus_id,
        name,
        geom,
        rent_monthly,
        utilities,
        facilities,
        rules,
        description,
        status
      ) VALUES (
        $1,
        $2,
        $3,
        ST_SetSRID(ST_MakePoint($4, $5), 4326)::geography,
        $6,
        $7::jsonb,
        $8::jsonb,
        $9::jsonb,
        $10,
        $11
      )
      RETURNING id, status`,
      [
        ownerId,
        campusId,
        name,
        longitude,
        latitude,
        rentMonthly,
        JSON.stringify(utilities),
        JSON.stringify(facilities),
        JSON.stringify(rules),
        description ?? null,
        status,
      ]
    );

    const created = insertRes.rows[0];
    return NextResponse.json({
      success: true,
      listingId: created?.id,
      status: created?.status,
      message:
        status === "verified"
          ? "Listing berhasil dipublikasikan!"
          : "Listing berhasil dikirimkan dan menunggu verifikasi admin.",
    });
  } catch (error) {
    console.error("Create listing error:", error);
    return NextResponse.json({ error: "Gagal menyimpan listing kos baru" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    let session = null;
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const match = cookieHeader.match(/kosmatch_session=([^;]+)/);
      if (match?.[1]) {
        session = verifySessionToken(match[1]);
      }
    }

    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { error: "Akses ditolak. Hanya Administrator yang dapat memverifikasi status listing." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const result = updateStatusSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validasi gagal", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { id, status } = result.data;

    if (!isDatabaseConfigured()) {
      return NextResponse.json({
        success: true,
        id,
        status,
        notice: "Status diperbarui dalam mode simulasi",
      });
    }

    const pool = getDatabasePool();
    if (!pool) {
      return NextResponse.json({ error: "Database pool tidak tersedia" }, { status: 500 });
    }

    const updateRes = await pool.query(
      `UPDATE public.listings SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING id, status`,
      [status, id]
    );

    if (updateRes.rowCount === 0) {
      return NextResponse.json({ error: "Listing tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      id,
      status,
      message: `Status listing berhasil diubah menjadi '${status}'.`,
    });
  } catch (error) {
    console.error("Update listing status error:", error);
    return NextResponse.json({ error: "Gagal memperbarui status listing" }, { status: 500 });
  }
}
