# Spesifikasi Penetapan Wilayah & Kampus Pilot (KosMatch v2 — Fase 0)

Dokumen ini mendokumentasikan penetapan kampus pilot, batasan geografis (*bounding box*), target jumlah kos awal, dan kategori data POI lingkungan sesuai keputusan **Fase 0 (Fondasi)**.

---

## 1. Penetapan Kampus Pilot

Berdasarkan analisis konsentrasi tempat kos mahasiswa dan ketersediaan data geografis awal:

### Pilot Utama: Universitas Indonesia (Depok)
- **ID:** `ui-depok`
- **Pusat Koordinat:** Latitude `-6.3620`, Longitude `106.8270`
- **Radius Analisis:** 4,0 km
- **Bounding Box OSM:** `106.77, -6.42, 106.87, -6.32`
- **Karakteristik Area:** 
  - Konsentrasi kos sangat padat di koridor Margonda, Kukusan (Kutek & Kukel), Kober, dan Pondok Cina.
  - Moda transportasi beragam: jalan kaki, sepeda, motor, KRL Commuter Line (Stasiun UI & Pondok Cina), dan Bikun (Bis Kuning).
  - Banyak titik makan murah, laundry kiloan, minimarket, dan apotek dalam radius jalan kaki.
- **Target Kos Awal:** **50 kos terverifikasi** (status `verified`).

### Pilot Sekunder: Universitas Andalas (Padang)
- **ID:** `unand-limau-manis`
- **Pusat Koordinat:** Latitude `-0.9143`, Longitude `100.4602`
- **Radius Analisis:** 5,0 km
- **Bounding Box OSM:** `100.35, -0.96, 100.49, -0.86`
- **Karakteristik Area:**
  - Kampus berbukit di Limau Manis dengan sebaran kos utama di Pasar Baru, Gadut, dan Pauh.
  - Moda transportasi utama adalah sepeda motor dan angkot/bus kampus.
  - Data koordinat kampus dan kos awal sudah ada pada basis data contoh dan pengujian sistem.
- **Target Kos Awal:** **30 kos terverifikasi** (status `verified`).

---

## 2. Target Kuantitatif Fase 0 & Transisi ke Fase 1

| Parameter | Target Minimum | Target Optimal | Catatan |
|---|---|---|---|
| **Listing Terverifikasi (UI Depok)** | 30 kos | 50 kos | Mencakup variasi harga < Rp 1 jt, Rp 1–2 jt, > Rp 2 jt |
| **Listing Terverifikasi (Unand Padang)** | 20 kos | 30 kos | Mencakup area Pasar Baru dan Limau Manis |
| **Kelengkapan Fasilitas Wajib** | 100% | 100% | Status KM dalam, Wi-Fi, dan jam malam terverifikasi |
| **Kejelasan Biaya Bulanan** | 100% | 100% | Nilai `rent` berstatus `confirmed`, listrik jelas (token/termasuk) |
| **POI OSM Kota Pilot** | ~2.000 POI | ~5.000 POI | Terkategori: makan, laundry, minimart, ibadah, halte |

---

## 3. Strategi Pengumpulan Data Kos Awal

Untuk menghindari scraping ilegal terhadap marketplace lain:
1. **Survei Lapangan Mandiri:** Pencatatan langsung 20–30 kos di sekitar kampus pilot (foto gerbang/spanduk, konfirmasi nomor telepon pemilik, harga resmi, fasilitas).
2. **Kontribusi Komunitas Mahasiswa:** Formulir tambah kos sederhana dengan validasi skema ketat. Data masuk berstatus `pending` hingga diverifikasi oleh tim/kontributor.
3. **Format Data:** Mempertahankan pemisahan tegas antara biaya bulanan (`rent`, `electricity`, `water`, `transport`) dan biaya awal (`deposit`, `admin`), dengan label kepastian `confirmed` vs `estimated`.

---

## 4. Konfigurasi dalam Kode

Konfigurasi ini telah dikodifikasi secara terprogram pada file [`src/data/pilot-config.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/data/pilot-config.ts), didaftarkan pada skema database Supabase [`supabase/migrations/20261021_fase0_initial_schema.sql`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/supabase/migrations/20261021_fase0_initial_schema.sql), dan disuntikkan ke basis data awal via [`supabase/seed.sql`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/supabase/seed.sql).
