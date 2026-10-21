import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

describe("Supabase Schema & Configuration (Fase 0)", () => {
  it("mengembalikan false saat environment belum disetel", () => {
    expect(isSupabaseConfigured()).toBe(false);
    expect(getSupabaseClient()).toBeNull();
  });

  it("file migrasi SQL skema awal Fase 0 tersedia dan valid", () => {
    const migrationPath = resolve(process.cwd(), "supabase/migrations/20261021_fase0_initial_schema.sql");
    expect(existsSync(migrationPath)).toBe(true);

    const sql = readFileSync(migrationPath, "utf-8");

    // Extensions
    expect(sql).toContain("CREATE EXTENSION IF NOT EXISTS postgis");
    expect(sql).toContain("CREATE EXTENSION IF NOT EXISTS vector");

    // Tables
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.campuses");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.pois");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.listings");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.commute_cache");

    // Spatial & Vector Indexes
    expect(sql).toContain("USING GIST (geom)");
    expect(sql).toContain("USING GIST (geom)");

    // RLS
    expect(sql).toContain("ALTER TABLE public.campuses ENABLE ROW LEVEL SECURITY");
    expect(sql).toContain("ALTER TABLE public.pois ENABLE ROW LEVEL SECURITY");
    expect(sql).toContain("ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY");
    expect(sql).toContain("ALTER TABLE public.commute_cache ENABLE ROW LEVEL SECURITY");

    // Policies
    expect(sql).toContain("Allow public read verified listings");
    expect(sql).toContain("Allow owners read own listings");
    expect(sql).toContain("Allow authenticated insert listings");

    // RPC Functions
    expect(sql).toContain("get_listing_neighborhood_profile");
    expect(sql).toContain("get_point_neighborhood_profile");
    expect(sql).toContain("match_listings");

    // Consistency with MAX_FIELD_RUPIAH (Rp 100 juta)
    expect(sql).toContain("rent_monthly BETWEEN 0 AND 100000000");
  });

  it("file seed.sql tersedia dan memuat data kampus pilot", () => {
    const seedPath = resolve(process.cwd(), "supabase/seed.sql");
    expect(existsSync(seedPath)).toBe(true);

    const seedSql = readFileSync(seedPath, "utf-8");
    expect(seedSql).toContain("ui-depok");
    expect(seedSql).toContain("unand-limau-manis");
  });

  it("file OSM flex Lua configuration tersedia", () => {
    const luaPath = resolve(process.cwd(), "scripts/osm/poi.lua");
    expect(existsSync(luaPath)).toBe(true);

    const luaContent = readFileSync(luaPath, "utf-8");
    expect(luaContent).toContain("osm2pgsql.define_table");
    expect(luaContent).toContain("categorize");
  });
});
