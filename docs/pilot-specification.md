# Spesifikasi Penetapan Wilayah & Kampus Pilot (KosMatch v2 — 3 Kampus Pilot)

Dokumen ini mendokumentasikan penetapan kampus pilot, batasan geografis (*bounding box*), target jumlah kos awal, dan kategori data POI lingkungan sesuai spesifikasi platform **KosMatch**.

---

## 1. Penetapan Kampus Pilot

Berdasarkan analisis konsentrasi tempat kos mahasiswa dan ketersediaan data geografis OpenStreetMap:

### Pilot 1: Institut Teknologi Sumatera (ITERA Lampung)
- **ID:** `itera-lampung`
- **Pusat Koordinat:** Latitude `-5.3582`, Longitude `105.3134`
- **Radius Analisis:** 4,5 km
- **Bounding Box OSM:** `105.27, -5.41, 105.36, -5.31`
- **Karakteristik Area:**
  - Wilayah kampus berkembang pesat di koridor Jl. Terusan Ryacudu, Way Huwi, Airan Raya, Lapas Raya, Sabah Balau, dan Korpri.
  - Moda transportasi utama: sepeda motor dan angkutan daring/ojol.
  - Pusat gerbang: Gerbang Utama Ryacudu dan Gerbang Airan.
- **Katalog Terverifikasi:** **120 kos terverifikasi** dan **324 titik POI**.

### Pilot 2: Universitas Indonesia (Depok)
- **ID:** `ui-depok`
- **Pusat Koordinat:** Latitude `-6.3620`, Longitude `106.8270`
- **Radius Analisis:** 4,0 km
- **Bounding Box OSM:** `106.77, -6.42, 106.87, -6.32`
- **Karakteristik Area:** 
  - Konsentrasi kos sangat padat di koridor Margonda, Kukusan (Kutek & Kukel), Kober, dan Pondok Cina.
  - Moda transportasi beragam: jalan kaki, sepeda, motor, KRL Commuter Line (Stasiun UI & Pondok Cina), dan Bikun (Bis Kuning).
  - Banyak titik makan murah, laundry kiloan, minimarket, dan apotek dalam radius jalan kaki.
- **Katalog Terverifikasi:** **56 kos terverifikasi** dan **472 titik POI**.

### Pilot 3: Universitas Andalas (UNAND Padang)
- **ID:** `unand-limau-manis`
- **Pusat Koordinat:** Latitude `-0.9143`, Longitude `100.4602`
- **Radius Analisis:** 5,0 km
- **Bounding Box OSM:** `100.35, -0.96, 100.49, -0.86`
- **Karakteristik Area:**
  - Kampus berbukit di Limau Manis dengan sebaran kos utama di Pasar Baru, Gadut, dan Pauh.
  - Moda transportasi utama adalah sepeda motor dan angkot/bus kampus.
  - Gerbang utama: Pintu Gerbang Utama Limau Manis dan Akses Pasar Baru.
- **Katalog Terverifikasi:** **45 kos terverifikasi** dan **103 titik POI**.

---

## 2. Inventaris Data Terverifikasi di Basis Data PostGIS

| Parameter | ITERA Lampung | UI Depok | UNAND Padang | Total Platform |
|---|:---:|:---:|:---:|:---:|
| **Listing Kos Terverifikasi** | 120 | 56 | 45 | **395 listing** (termasuk variasi tipe & perluasan) |
| **Point of Interest (POI)** | 324 | 472 | 103 | **930 titik POI** |
| **Kelengkapan Fasilitas Wajib** | 100% | 100% | 100% | Terverifikasi (KM Dalam, Wi-Fi, Jam Malam) |
| **Kejelasan Biaya Bulanan** | 100% | 100% | 100% | Sewa pokok confirmed + rincian utilitas |
| **Moda Komutasi Rute Nyata** | Jalan Kaki, Motor, Mobil | Jalan Kaki, Motor, Mobil | Jalan Kaki, Motor, Mobil | 3 Moda Terkalibrasi PostGIS |

---

## 3. Strategi Pengumpulan & Distilasi Data Kos

1. **Pipeline Distilasi Geografis Mandiri:** Data dikurasi melalui skrip distilasi spasial [`scripts/scraper/distill_datasets.js`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/scripts/scraper/distill_datasets.js) berbasis koordinat nyata OpenStreetMap (OSM Overpass API) dan survei lapangan.
2. **Penyimpanan Terpusat Server:** Seluruh data tersimpan pada basis data PostgreSQL 16 + PostGIS di server VPS produksi tanpa batas kuota pihak ketiga.
3. **Format Data:** Mempertahankan pemisahan tegas antara biaya bulanan (`rent`, `electricity`, `water`, `transport`) dan biaya awal (`deposit`, `admin`), dengan label kepastian `confirmed` vs `estimated`.

---

## 4. Konfigurasi dalam Kode

Konfigurasi ini telah dikodifikasi secara terprogram pada file:
- [`src/data/pilot-config.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/data/pilot-config.ts): Koordinat kampus dan gerbang resmi (*campus gates*).
- [`src/data/pilot-listings.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/data/pilot-listings.ts): Dataset listing terverifikasi.
- [`src/data/pilot-pois.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/data/pilot-pois.ts): Sebaran fasilitas POI sekitar kampus.
- [`database/schema.sql`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/database/schema.sql) & [`database/seed_vps_full.sql`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/database/seed_vps_full.sql): Skema PostGIS dan injeksi data VPS.
