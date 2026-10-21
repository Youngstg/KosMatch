#!/usr/bin/env bash
# KosMatch v2 - OSM POI Extraction Pipeline for Pilot Areas
# Verifies tools, extracts bounding box, filters POI tags, and loads into Postgres/Supabase.
set -euo pipefail

PILOT_TARGET="${1:-depok}"
WORKDIR="${2:-./tmp-osm}"
mkdir -p "$WORKDIR"

echo "=== KosMatch OSM POI Pipeline: Target [$PILOT_TARGET] ==="

# Check requirements
for cmd in osmium wget osm2pgsql; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Warning: Required tool '$cmd' is not installed in current PATH."
  fi
done

# Pilot bounding boxes: minlon,minlat,maxlon,maxlat
case "$PILOT_TARGET" in
  depok|ui)
    BBOX="106.77,-6.42,106.87,-6.32"
    REGION_URL="https://download.geofabrik.de/asia/indonesia/java-latest.osm.pbf"
    REGION_FILE="$WORKDIR/java-latest.osm.pbf"
    ;;
  padang|unand)
    BBOX="100.35,-0.96,100.49,-0.86"
    REGION_URL="https://download.geofabrik.de/asia/indonesia/sumatra-latest.osm.pbf"
    REGION_FILE="$WORKDIR/sumatra-latest.osm.pbf"
    ;;
  *)
    echo "Unknown pilot target: $PILOT_TARGET. Choose 'depok' or 'padang'."
    exit 1
    ;;
esac

echo "1. Checking regional OSM extract ($REGION_FILE)..."
if [ ! -f "$REGION_FILE" ]; then
  echo "Downloading $REGION_URL..."
  wget -c "$REGION_URL" -O "$REGION_FILE"
else
  echo "Using existing $REGION_FILE"
fi

echo "2. Extracting pilot bounding box ($BBOX)..."
osmium extract -b "$BBOX" "$REGION_FILE" -o "$WORKDIR/$PILOT_TARGET-raw.osm.pbf" --overwrite

echo "3. Filtering relevant POI tags (food, laundry, convenience, worship, transport, pharmacy, atm)..."
osmium tags-filter "$WORKDIR/$PILOT_TARGET-raw.osm.pbf" \
  nwr/amenity=restaurant,cafe,fast_food,food_court,pharmacy,atm,bank,place_of_worship,marketplace,bus_station \
  nwr/shop=laundry,convenience,supermarket \
  nwr/highway=bus_stop \
  -o "$WORKDIR/$PILOT_TARGET-poi.osm.pbf" --overwrite

echo "POIs extracted: $WORKDIR/$PILOT_TARGET-poi.osm.pbf ($(du -h "$WORKDIR/$PILOT_TARGET-poi.osm.pbf" | cut -f1))"

TARGET_DB_URL="${DATABASE_URL:-${SUPABASE_DB_URL:-}}"
if [ -n "$TARGET_DB_URL" ]; then
  echo "4. Loading POIs into PostgreSQL database on VPS via osm2pgsql flex..."
  osm2pgsql -d "$TARGET_DB_URL" -O flex -S "$(dirname "$0")/poi.lua" "$WORKDIR/$PILOT_TARGET-poi.osm.pbf"
  echo "✅ POI ingestion completed!"
else
  echo "Notice: DATABASE_URL not set. Run with DATABASE_URL to load into PostgreSQL directly."
fi
