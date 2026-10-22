import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { getDatabasePool, isDatabaseConfigured } from "@/lib/db";

describe("PostgreSQL + PostGIS VPS Database Schema & Configuration", () => {
  it("mengembalikan false dan null saat DATABASE_URL belum disetel", () => {
    expect(isDatabaseConfigured()).toBe(false);
    expect(getDatabasePool()).toBeNull();
  });

  it("file migrasi DDL database/schema.sql tersedia dan valid", () => {
    const schemaPath = resolve(process.cwd(), "database/schema.sql");
    expect(existsSync(schemaPath)).toBe(true);

    const sql = readFileSync(schemaPath, "utf-8");

    // Extensions
    expect(sql).toContain("CREATE EXTENSION IF NOT EXISTS postgis");
    expect(sql).toContain('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Tables
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.users");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.campuses");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.pois");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.listings");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS public.commute_cache");

    // Spatial Indexes
    expect(sql).toContain("USING GIST (geom)");

    // PostGIS Stored Functions
    expect(sql).toContain("get_listing_neighborhood_profile");
    expect(sql).toContain("get_point_neighborhood_profile");

    // Max field rupiah constraint (Rp 100 juta)
    expect(sql).toContain("rent_monthly BETWEEN 0 AND 100000000");
  });

  it("file database/seed.sql memuat kampus pilot dan data awal", () => {
    const seedPath = resolve(process.cwd(), "database/seed.sql");
    expect(existsSync(seedPath)).toBe(true);

    const seedSql = readFileSync(seedPath, "utf-8");
    expect(seedSql).toContain("ui-depok");
    expect(seedSql).toContain("unand-limau-manis");
    expect(seedSql).toContain("itera-lampung");
  });

  it("file setup script scripts/setup-vps-postgres.sh tersedia untuk otomasi VPS", () => {
    const scriptPath = resolve(process.cwd(), "scripts/setup-vps-postgres.sh");
    expect(existsSync(scriptPath)).toBe(true);

    const script = readFileSync(scriptPath, "utf-8");
    expect(script).toContain("postgresql");
    expect(script).toContain("postgis");
    expect(script).toContain("kosmatch");
  });

  it("file OSM flex Lua configuration scripts/osm/poi.lua tersedia", () => {
    const luaPath = resolve(process.cwd(), "scripts/osm/poi.lua");
    expect(existsSync(luaPath)).toBe(true);

    const luaContent = readFileSync(luaPath, "utf-8");
    expect(luaContent).toContain("osm2pgsql.define_table");
    expect(luaContent).toContain("categorize");
  });
});
