import { NextResponse } from "next/server";
import { isDatabaseConfigured, query } from "@/lib/db";
import type { NeighborhoodProfileDbRow } from "@/lib/db/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get("lat") || "");
  const lng = parseFloat(searchParams.get("lng") || "");
  const radius = parseFloat(searchParams.get("radius") || "800");

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "Parameter lat dan lng harus berupa angka valid" }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ items: null, source: "offline-fallback" });
  }

  try {
    const res = await query<NeighborhoodProfileDbRow>(
      "SELECT category, count, nearest_meters FROM public.get_point_neighborhood_profile($1, $2, $3)",
      [lat, lng, radius]
    );

    if (!res || res.rows.length === 0) {
      return NextResponse.json({ items: [], source: "vps-postgres" });
    }

    const items = res.rows.map((row) => ({
      category: row.category,
      count: Number(row.count),
      nearest_meters: row.nearest_meters !== null ? Number(row.nearest_meters) : null,
    }));

    return NextResponse.json({ items, source: "vps-postgres" });
  } catch (err) {
    console.error("Gagal mengeksekusi get_point_neighborhood_profile di PostgreSQL:", err);
    return NextResponse.json({ items: null, source: "offline-fallback" });
  }
}
