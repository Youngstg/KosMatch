#!/usr/bin/env bash
# ==============================================================================
# KosMatch v2 - Setup PostgreSQL & PostGIS di VPS Tencent Cloud Lighthouse
# Menyiapkan database lokal di VPS (koneksi localhost, tanpa batas 500MB, tanpa pause 7 hari)
# ==============================================================================

set -e

echo "🚀 [1/5] Memperbarui paket sistem dan menginstall PostgreSQL + PostGIS..."
sudo apt update
sudo apt install -y postgresql postgresql-contrib postgis

DB_NAME="kosmatch"
DB_USER="kosmatch"
DB_PASS="kosmatch_secret_change_me"

echo "🔑 [2/5] Mengonfigurasi user dan database PostgreSQL..."
sudo -u postgres psql -tc "SELECT 1 FROM pg_user WHERE usename = '$DB_USER'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"

sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"

echo "🗺️ [3/5] Mengaktifkan ekstensi PostGIS & UUID..."
sudo -u postgres psql -d "$DB_NAME" -c "CREATE EXTENSION IF NOT EXISTS postgis;"
sudo -u postgres psql -d "$DB_NAME" -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCHEMA_FILE="$SCRIPT_DIR/../database/schema.sql"
SEED_FILE="$SCRIPT_DIR/../database/seed.sql"

echo "📜 [4/5] Menjalankan migrasi skema tabel dan PostGIS RPC..."
if [ -f "$SCHEMA_FILE" ]; then
  sudo -u postgres psql -d "$DB_NAME" -f "$SCHEMA_FILE"
  echo "✅ Skema berhasil diinisialisasi."
else
  echo "⚠️ File $SCHEMA_FILE tidak ditemukan."
fi

echo "🌱 [5/5] Memasukkan data awal (seed) kampus dan kos pilot..."
if [ -f "$SEED_FILE" ]; then
  sudo -u postgres psql -d "$DB_NAME" -f "$SEED_FILE"
  echo "✅ Seed berhasil dimasukkan."
fi

echo "=============================================================================="
echo "🎉 Setup PostgreSQL + PostGIS selesai!"
echo "Tambahkan baris berikut ke .env.local atau environment PM2 di VPS:"
echo "DATABASE_URL=\"postgresql://$DB_USER:$DB_PASS@localhost:5432/$DB_NAME\""
echo "=============================================================================="
