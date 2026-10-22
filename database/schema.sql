-- KosMatch v2: PostgreSQL + PostGIS Schema for VPS Deployment
-- Compatible with PostgreSQL 15/16/17 + PostGIS on Ubuntu / Debian

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. USERS (Authentication & Role Management)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'owner', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. CAMPUSES (Pilot & Reference Destinations)
CREATE TABLE IF NOT EXISTS public.campuses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  short_name TEXT NOT NULL,
  city TEXT NOT NULL,
  geom GEOGRAPHY(Point, 4326) NOT NULL,
  is_pilot BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS campuses_geom_gix ON public.campuses USING GIST (geom);

-- 4. POIS (Points of Interest from OpenStreetMap)
CREATE TABLE IF NOT EXISTS public.pois (
  id BIGSERIAL PRIMARY KEY,
  osm_type CHAR(1) NOT NULL CHECK (osm_type IN ('N', 'W', 'R')),
  osm_id BIGINT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'food', 'laundry', 'convenience', 'pharmacy',
    'worship', 'bus_stop', 'atm', 'supermarket', 'marketplace'
  )),
  name TEXT,
  tags JSONB NOT NULL DEFAULT '{}'::jsonb,
  geom GEOGRAPHY(Point, 4326) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_pois_osm UNIQUE (osm_type, osm_id)
);

CREATE INDEX IF NOT EXISTS pois_geom_gix ON public.pois USING GIST (geom);
CREATE INDEX IF NOT EXISTS pois_cat_idx ON public.pois (category);

-- 5. LISTINGS (Kos Listings)
CREATE TABLE IF NOT EXISTS public.listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  campus_id TEXT REFERENCES public.campuses(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  geom GEOGRAPHY(Point, 4326) NOT NULL,
  rent_monthly INTEGER NOT NULL CHECK (rent_monthly BETWEEN 0 AND 100000000),
  utilities JSONB NOT NULL DEFAULT '{}'::jsonb,
  facilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  rules JSONB NOT NULL DEFAULT '{}'::jsonb,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'verified' CHECK (status IN ('pending', 'verified', 'rejected', 'stale')),
  last_confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS listings_geom_gix ON public.listings USING GIST (geom);
CREATE INDEX IF NOT EXISTS listings_status_idx ON public.listings (status);
CREATE INDEX IF NOT EXISTS listings_campus_idx ON public.listings (campus_id);
CREATE INDEX IF NOT EXISTS listings_rent_idx ON public.listings (rent_monthly);

-- 6. COMMUTE CACHE (Route duration & distance cache on VPS)
CREATE TABLE IF NOT EXISTS public.commute_cache (
  origin_cell TEXT NOT NULL,
  dest_id TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('walking', 'driving-car', 'cycling', 'motorcycle')),
  minutes REAL NOT NULL CHECK (minutes >= 0),
  distance_m INTEGER NOT NULL CHECK (distance_m >= 0),
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (origin_cell, dest_id, mode)
);

CREATE INDEX IF NOT EXISTS commute_cache_dest_idx ON public.commute_cache (dest_id, mode);

-- 7. AUTOMATIC UPDATED_AT TRIGGER
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_listings_updated_at ON public.listings;
CREATE TRIGGER tr_listings_updated_at
BEFORE UPDATE ON public.listings
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS tr_users_updated_at ON public.users;
CREATE TRIGGER tr_users_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 8. POSTGIS RPC FUNCTIONS
-- Profile lingkungan per titik koordinat bebas (radius meter)
CREATE OR REPLACE FUNCTION public.get_point_neighborhood_profile(
  target_lat DOUBLE PRECISION,
  target_lng DOUBLE PRECISION,
  radius_meters DOUBLE PRECISION DEFAULT 800.0
)
RETURNS TABLE (
  category TEXT,
  count BIGINT,
  nearest_meters DOUBLE PRECISION
)
LANGUAGE sql
STABLE
AS $$
  WITH target_pt AS (
    SELECT ST_SetSRID(ST_MakePoint(target_lng, target_lat), 4326)::geography AS g
  )
  SELECT
    p.category,
    COUNT(*)::BIGINT AS count,
    ROUND(MIN(ST_Distance(p.geom, t.g)))::DOUBLE PRECISION AS nearest_meters
  FROM public.pois p
  CROSS JOIN target_pt t
  WHERE ST_DWithin(p.geom, t.g, radius_meters)
  GROUP BY p.category
  ORDER BY count DESC;
$$;

-- Profile lingkungan untuk kos yang sudah terdaftar
CREATE OR REPLACE FUNCTION public.get_listing_neighborhood_profile(
  target_listing_id UUID,
  radius_meters DOUBLE PRECISION DEFAULT 800.0
)
RETURNS TABLE (
  category TEXT,
  count BIGINT,
  nearest_meters DOUBLE PRECISION
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    p.category,
    COUNT(*)::BIGINT AS count,
    ROUND(MIN(ST_Distance(p.geom, l.geom)))::DOUBLE PRECISION AS nearest_meters
  FROM public.pois p
  JOIN public.listings l ON l.id = target_listing_id
  WHERE ST_DWithin(p.geom, l.geom, radius_meters)
  GROUP BY p.category
  ORDER BY count DESC;
$$;

-- 9. PERMISSIONS (Grant access to application user)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'kosmatch') THEN
    GRANT ALL ON SCHEMA public TO kosmatch;
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO kosmatch;
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO kosmatch;
    GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO kosmatch;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO kosmatch;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO kosmatch;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO kosmatch;
  END IF;
END $$;
