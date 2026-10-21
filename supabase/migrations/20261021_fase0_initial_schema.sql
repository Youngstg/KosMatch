-- KosMatch v2: Fase 0 - Initial Schema Migration
-- PostgreSQL + PostGIS + pgvector on Supabase
-- Verified schema for POIs, Listings, Commute Cache, and Campuses

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. CAMPUSES (Pilot & Reference Destinations)
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

-- 3. POIS (Points of Interest from OpenStreetMap)
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

-- 4. LISTINGS (Community & Owner Kos Listings)
CREATE TABLE IF NOT EXISTS public.listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  campus_id TEXT REFERENCES public.campuses(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  geom GEOGRAPHY(Point, 4326) NOT NULL,
  rent_monthly INTEGER NOT NULL CHECK (rent_monthly BETWEEN 0 AND 100000000),
  utilities JSONB NOT NULL DEFAULT '{}'::jsonb,
  facilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  rules JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT,
  embedding VECTOR(384),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected', 'stale')),
  last_confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS listings_geom_gix ON public.listings USING GIST (geom);
CREATE INDEX IF NOT EXISTS listings_status_idx ON public.listings (status);
CREATE INDEX IF NOT EXISTS listings_campus_idx ON public.listings (campus_id);
CREATE INDEX IF NOT EXISTS listings_owner_idx ON public.listings (owner_id);
CREATE INDEX IF NOT EXISTS listings_rent_idx ON public.listings (rent_monthly);

-- 5. COMMUTE CACHE (Route duration & distance cache to conserve free tier quota)
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

-- 6. AUTOMATIC UPDATED_AT TRIGGER
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

-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- Campuses
ALTER TABLE public.campuses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read campuses" ON public.campuses;
CREATE POLICY "Allow public read campuses" ON public.campuses
  FOR SELECT USING (true);

-- POIs
ALTER TABLE public.pois ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read pois" ON public.pois;
CREATE POLICY "Allow public read pois" ON public.pois
  FOR SELECT USING (true);

-- Listings
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read verified listings" ON public.listings;
CREATE POLICY "Allow public read verified listings" ON public.listings
  FOR SELECT USING (status = 'verified');

DROP POLICY IF EXISTS "Allow owners read own listings" ON public.listings;
CREATE POLICY "Allow owners read own listings" ON public.listings
  FOR SELECT TO authenticated USING (auth.uid() = owner_id);

DROP POLICY IF EXISTS "Allow authenticated insert listings" ON public.listings;
CREATE POLICY "Allow authenticated insert listings" ON public.listings
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);

DROP POLICY IF EXISTS "Allow owners update own listings" ON public.listings;
CREATE POLICY "Allow owners update own listings" ON public.listings
  FOR UPDATE TO authenticated USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

DROP POLICY IF EXISTS "Allow owners delete own listings" ON public.listings;
CREATE POLICY "Allow owners delete own listings" ON public.listings
  FOR DELETE TO authenticated USING (auth.uid() = owner_id);

-- Commute Cache
ALTER TABLE public.commute_cache ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read commute cache" ON public.commute_cache;
CREATE POLICY "Allow public read commute cache" ON public.commute_cache
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow authenticated insert commute cache" ON public.commute_cache;
CREATE POLICY "Allow authenticated insert commute cache" ON public.commute_cache
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update commute cache" ON public.commute_cache;
CREATE POLICY "Allow authenticated update commute cache" ON public.commute_cache
  FOR UPDATE TO authenticated USING (true);

-- 8. RPC FUNCTIONS
-- Neighborhood profile for an existing listing
CREATE OR REPLACE FUNCTION public.get_listing_neighborhood_profile(
  target_listing_id UUID,
  radius_meters DOUBLE PRECISION DEFAULT 800
)
RETURNS TABLE (
  category TEXT,
  count BIGINT,
  nearest_meters INTEGER
)
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT
    p.category,
    COUNT(*)::BIGINT AS count,
    ROUND(MIN(ST_Distance(p.geom, l.geom)))::INTEGER AS nearest_meters
  FROM public.listings l
  JOIN LATERAL (
    SELECT p_inner.category, p_inner.geom
    FROM public.pois p_inner
    WHERE ST_DWithin(p_inner.geom, l.geom, radius_meters)
  ) p ON true
  WHERE l.id = target_listing_id
  GROUP BY p.category;
$$;

-- Neighborhood profile for arbitrary point coordinates (e.g. while dragging map)
CREATE OR REPLACE FUNCTION public.get_point_neighborhood_profile(
  target_lat DOUBLE PRECISION,
  target_lng DOUBLE PRECISION,
  radius_meters DOUBLE PRECISION DEFAULT 800
)
RETURNS TABLE (
  category TEXT,
  count BIGINT,
  nearest_meters INTEGER
)
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  WITH point_geom AS (
    SELECT ST_SetSRID(ST_MakePoint(target_lng, target_lat), 4326)::geography AS geom
  )
  SELECT
    p.category,
    COUNT(*)::BIGINT AS count,
    ROUND(MIN(ST_Distance(p.geom, pt.geom)))::INTEGER AS nearest_meters
  FROM point_geom pt
  JOIN LATERAL (
    SELECT p_inner.category, p_inner.geom
    FROM public.pois p_inner
    WHERE ST_DWithin(p_inner.geom, pt.geom, radius_meters)
  ) p ON true
  GROUP BY p.category;
$$;

-- Semantic search with pgvector cosine distance
CREATE OR REPLACE FUNCTION public.match_listings(
  query_embedding VECTOR(384),
  match_threshold FLOAT DEFAULT 0.6,
  match_count INT DEFAULT 20
)
RETURNS TABLE (
  id UUID,
  name TEXT,
  rent_monthly INTEGER,
  similarity FLOAT
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    l.id,
    l.name,
    l.rent_monthly,
    (1 - (l.embedding <=> query_embedding))::FLOAT AS similarity
  FROM public.listings l
  WHERE l.status = 'verified'
    AND l.embedding IS NOT NULL
    AND (1 - (l.embedding <=> query_embedding)) > match_threshold
  ORDER BY l.embedding <=> query_embedding
  LIMIT match_count;
$$;
