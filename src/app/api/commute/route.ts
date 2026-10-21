import { NextResponse } from "next/server";
import { isDatabaseConfigured, query } from "@/lib/db";
import type { CommuteCacheRow } from "@/lib/db/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const originCell = searchParams.get("origin_cell");
  const destId = searchParams.get("dest_id");
  const mode = searchParams.get("mode");

  if (!originCell || !destId || !mode) {
    return NextResponse.json({ error: "Parameter origin_cell, dest_id, dan mode wajib diisi" }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ cached: null });
  }

  try {
    const res = await query<CommuteCacheRow>(
      "SELECT origin_cell, dest_id, mode, minutes, distance_m FROM public.commute_cache WHERE origin_cell = $1 AND dest_id = $2 AND mode = $3",
      [originCell, destId, mode]
    );

    if (res && res.rows.length > 0) {
      return NextResponse.json({
        cached: {
          minutes: Number(res.rows[0].minutes),
          distanceMeters: Number(res.rows[0].distance_m),
        },
      });
    }

    return NextResponse.json({ cached: null });
  } catch (err) {
    console.error("Gagal membaca commute_cache dari PostgreSQL:", err);
    return NextResponse.json({ cached: null });
  }
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ saved: false });
  }

  try {
    const body = await request.json();
    const { origin_cell, dest_id, mode, minutes, distance_m } = body;

    if (!origin_cell || !dest_id || !mode || typeof minutes !== "number" || typeof distance_m !== "number") {
      return NextResponse.json({ error: "Payload tidak valid" }, { status: 400 });
    }

    await query(
      `INSERT INTO public.commute_cache (origin_cell, dest_id, mode, minutes, distance_m, fetched_at)
       VALUES ($1, $2, $3, $4, $5, now())
       ON CONFLICT (origin_cell, dest_id, mode)
       DO UPDATE SET minutes = EXCLUDED.minutes, distance_m = EXCLUDED.distance_m, fetched_at = now()`,
      [origin_cell, dest_id, mode, minutes, distance_m]
    );

    return NextResponse.json({ saved: true });
  } catch (err) {
    console.error("Gagal menyimpan commute_cache ke PostgreSQL:", err);
    return NextResponse.json({ saved: false });
  }
}
