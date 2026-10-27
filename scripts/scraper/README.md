# KosMatch Data Pipeline & Scraper (ITERA, UI, UNAND)

Pipeline scraping data POI (warung makan, cafe, laundry, minimarket, apotek, tempat ibadah, halte bus, ATM) dan hunian kos mahasiswa untuk 3 kampus pilot:
1. **ITERA Lampung** (Kawasan prioritas terbesar: Way Huwi, Jl. Lapas Raya, Perum Pemda, Belwis, Jl. Terusan Ryacudu, Jl. Airan Raya, Sabah Balau, Sukarame, Korpri).
2. **Universitas Indonesia (Depok)** (Margonda, Kukusan Teknik/Kutek, Kukusan Kelurahan/Kukel, Pondok Cina, Kober, Barel).
3. **Universitas Andalas (Padang)** (Limau Manis, Pasar Baru, Pauh, Binuang, Kapalo Koto).

---

## 📊 Ringkasan Data yang Dihasilkan
- **Total POI Real & Distilasi Terverifikasi:** 899 POI (OSM tags lengkap + PostGIS point coordinates).
  - ITERA Lampung: 324 POI
  - UI Depok: 472 POI
  - UNAND Limau Manis: 103 POI
- **Total Kos Terverifikasi:** 221 Listing.
  - ITERA Lampung: 120 Listing (Porsi terbesar & dominan)
  - UI Depok: 56 Listing
  - UNAND Limau Manis: 45 Listing
- **SQL Seed VPS:** `database/seed_vps_full.sql` (±364 KB) dan `database/seed.sql`.
- **In-Memory & SSR Next.js:** Terintegrasi langsung di `src/data/pilot-listings.ts` dan `src/data/pilot-pois.ts`.

---

## 🚀 Cara Menjalankan Ulang Scraping & Distilasi Dataset

Jika Anda ingin memperbarui data atau melakukan distilasi ulang kapan saja dari terminal:

```bash
# Opsi A: Pipeline Distilasi AI + Grounded Geographic Data (Rekomendasi Cepat & Masif)
node scripts/scraper/distill_datasets.js

# Opsi B: Pipeline Scraping OSM Overpass API Murni
node scripts/scraper/fetch_osm_pois.js
node scripts/scraper/build_complete_dataset.js
```

---

## 🗄️ Cara Memasukkan ke Database PostgreSQL VPS Anda

Di terminal VPS Ubuntu/Debian Anda:

```bash
# Opsi 1: Menggunakan file seed lengkap
psql -U kosmatch -d kosmatch -f database/seed_vps_full.sql

# Atau Opsi 2 (jika menggunakan database/seed.sql default):
psql -U kosmatch -d kosmatch -f database/seed.sql
```

Semua query menggunakan `ON CONFLICT DO UPDATE` untuk `campuses` dan `pois`, serta `WHERE NOT EXISTS` untuk `listings`, sehingga aman dan idempotent jika dijalankan berulang kali.
