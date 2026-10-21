# KosMatch — Laporan Audit, Hasil Uji, UAT, dan Saran Pengembangan

**Situs:** https://kosmatch.mooo.com
**Repo:** https://github.com/Youngstg/KosMatch (commit `f70ef65`)
**Tanggal audit:** 21 Oktober 2026
**Stack:** Next.js 16.3.5 (App Router), React 19, TypeScript, Zod, IndexedDB (`idb`), Tailwind v4, Vitest, Playwright

> Laporan ini menggantikan draf sebelumnya yang hanya berbasis HTML situs. Sekarang ada akses ke kode, jadi sebagian besar temuan di bawah sudah **diuji sungguhan**. Beberapa asumsi di draf sebelumnya salah dan dikoreksi di Bagian 7.

---

## 0. Cakupan: apa yang benar-benar dijalankan

| Pengujian | Status | Hasil |
|---|---|---|
| `npm ci` | Dijalankan | Berhasil |
| `npm run typecheck` | Dijalankan | **Lulus**, 0 error |
| `npm run lint` | Dijalankan | **Lulus**, 0 temuan |
| `npm test` (Vitest) | Dijalankan | **Lulus: 9 file, 55 test** |
| `npm run build` | Dijalankan | **Berhasil**; 6 rute statis (`/`, `/_not-found`, `/methodology`, `/robots.txt`, `/sitemap.xml`) |
| `npm audit` | Dijalankan | **10 kerentanan (1 critical, 9 high)**; 3 di antaranya di dependensi produksi |
| Server produksi lokal (`next start`) + uji HTTP | Dijalankan | Lihat Bagian 2 |
| Probe rumus (skrip uji sementara, sudah dihapus) | Dijalankan | Lihat Bagian 3 |
| Tinjauan kode sumber | Dilakukan | ~3.900 baris TS/TSX |
| **E2E Playwright** | **TIDAK dijalankan** | Unduhan Chromium diblokir jaringan sandbox |
| **UAT interaktif manusia** | **TIDAK dijalankan** | Butuh browser dan penguji; kerangka disiapkan di Bagian 5 |
| Lighthouse, load test, OWASP ZAP | **TIDAK dijalankan** | Tidak ada browser/akses ke situs live dari sandbox |
| Header HTTP situs **live** (lewat Nginx) | **TIDAK diuji** | Yang diuji adalah server Next lokal, bukan Nginx produksi |

Semua angka di bawah berasal dari eksekusi di atas. Yang bersifat dugaan diberi label **[belum diverifikasi]**.

---

## 1. Ringkasan Eksekutif

**Kualitas rekayasa jauh di atas rata-rata proyek sejenis.** Ada arsitektur berlapis (domain / data / fitur), validasi Zod ketat, tipe `MoneyValue` yang memisahkan *confirmed / estimated / unknown*, rupiah sebagai integer, 55 unit test yang lulus, ekspor/impor tervalidasi, dan halaman `/methodology` yang jujur soal batasan.

**Namun ada lima masalah yang paling penting:**

1. **Dependensi produksi punya kerentanan *critical* (Next.js) dan *high*** (sharp, source-map-js), padahal situs di-*self-host* dengan `next start`.
2. **Pipeline CI/CD mendeploy ke produksi tanpa menjalankan satu pun test** (hanya typecheck, lint, build), bertentangan dengan klaim README.
3. **Halaman utama hanya berisi "Menyiapkan data lokal…" di HTML awal.** Tidak ada konten untuk crawler dan pratinjau tautan.
4. **Mesin skor punya dua kelemahan desain**: kos yang lebih murah tidak dinilai lebih baik selama masih di bawah anggaran, dan kos yang menyembunyikan seluruh data biaya tetap mendapat skor tinggi.
5. **Tidak ada header keamanan dari aplikasi**, dan `X-Powered-By` aktif. Padahal produk ini menjual klaim privasi yang bisa dibuktikan secara teknis lewat CSP.

---

## 2. Hasil Uji HTTP (server produksi lokal, build dari repo)

| Pemeriksaan | Hasil |
|---|---|
| `GET /` | 200, 9.973 byte, `Cache-Control: s-maxage=31536000`, prerender statis |
| Teks yang terlihat di HTML `/` | **Kosong** (hanya skrip dan state loading) |
| `GET /robots.txt` | 200, `Allow: /`, menyertakan sitemap |
| `GET /sitemap.xml` | 200; `lastmod` = waktu build (selalu berubah tiap deploy, bukan tanggal ubah konten) |
| `GET /methodology` | 200 |
| `GET /nonexistent` | 404 (halaman `not-found` kustom ada) |
| Header `X-Powered-By` | **Ada** (`Next.js`) |
| `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | **Tidak dikirim oleh aplikasi** |

Catatan: repo **tidak punya `next.config.*`**. Nginx di produksi mungkin menambahkan sebagian header; **[belum diverifikasi]**. Cek dengan `curl -sI https://kosmatch.mooo.com`.

---

## 3. Temuan Terverifikasi

Keparahan: **Tinggi** = perbaiki sebelum promosi/rilis lebih luas. **Sedang** = kuartal ini. **Rendah** = rapikan.

### V-01 — Dependensi produksi rentan · Tinggi
`npm audit --omit=dev`: 3 kerentanan (1 critical, 2 high).
- `next@16.3.5` termasuk rentang rentan (16.0.0–16.3.7). Advisori mencakup cache poisoning SSG/ISR pada aplikasi self-hosted, kebocoran konten Draft Mode, SSRF di image optimization, dan RCE di `next/og ImageResponse`. Relevansi tiap advisori ke aplikasi ini perlu dicek (aplikasi tidak tampak memakai `next/og`), tetapi **cache poisoning pada halaman statis self-hosted relevan** karena persis ini arsitektur Anda.
- `sharp <0.35.5` (high), `source-map-js` (high).
- Tersedia perbaikan lewat `npm audit fix`.

**Perbaikan:** naikkan Next ke versi di atas 16.3.7, jalankan `npm audit fix`, aktifkan Dependabot, dan tambahkan gerbang CI `npm audit --omit=dev --audit-level=high`. Sisa 7 temuan lain ada di dev-tooling (brace-expansion, vite, dll.), risiko rendah di produksi.

### V-02 — CI/CD mendeploy tanpa test · Tinggi
`.github/workflows/deploy.yml` hanya menjalankan `typecheck`, `lint`, `build`, lalu langsung `rsync --delete` ke server. **55 unit test dan e2e tidak pernah dijalankan.** README mengklaim "pipeline pengujian" dan "Comprehensive Testing".

Risiko tambahan di workflow yang sama:
- `StrictHostKeyChecking=no` membuka celah man-in-the-middle saat deploy. Pin host key lewat `known_hosts` di secret.
- `rsync --delete` langsung ke direktori yang sedang melayani trafik; tidak ada rilis atomik maupun rollback.
- Tidak ada health check setelah `pm2 restart`.
- Tidak ada trigger `pull_request` (kode baru tidak diuji sebelum merge).

**Perbaikan:** tambahkan `npm test` dan job Playwright (install browser di runner GitHub), jalankan CI di PR, deploy ke direktori rilis bertimestamp dengan symlink `current`, lakukan smoke test `curl` ke `/` dan `/methodology`, serta simpan rilis sebelumnya untuk rollback.

### V-03 — Landing kosong di HTML awal · Tinggi
`src/app/page.tsx` merender `KosMatchWorkspace` (komponen klien) yang menampilkan state *loading* sampai IndexedDB terbaca. Hasil prerender hanya berisi teks loading. Dampak: SEO lemah, pratinjau tautan/preview crawler tidak punya konten, dan pengguna melihat layar kosong dulu. Pencarian web untuk "KosMatch" juga tidak menemukan situs ini (konsisten dengan masalah ini, walau bukan satu-satunya penyebab).

**Perbaikan:** render landing sebagai Server Component statis (hero, cara kerja, FAQ, CTA) dan jadikan workspace sebuah *island* klien di bawahnya atau di rute `/app`. Ganti teks "Menyiapkan data lokal…" dengan skeleton.

### V-04 — Rumus melempar error pada input yang valid; tidak ada error boundary · Sedang
Setiap kolom uang boleh hingga Rp 100 miliar (`MAX_RUPIAH`), tetapi `calculateCost` memanggil `assertRupiah` pada **jumlah** yang bisa melebihi itu. **Terverifikasi:** sewa Rp 60 miliar + listrik Rp 60 miliar → `RangeError: Nilai Rupiah harus berupa integer antara 0 dan 100000000000`. Hal yang sama bisa terjadi pada biaya transport × hari. Tidak ada `error.tsx`, sehingga exception saat render berisiko membuat halaman gagal total.

Peluang terjadi kecil (nilainya tidak realistis), tetapi ini bug kontrak: validasi menerima input yang kemudian meledakkan kalkulasi. Pengguna bisa ketik angka ngawur (atau mengimpor JSON buatan sendiri) dan merusak tampilan.
**Perbaikan:** turunkan batas per kolom ke nilai realistis (mis. Rp 100 juta/bulan), validasi total di skema, dan tambahkan `src/app/error.tsx`.

### V-05 — Kos lebih murah tidak dinilai lebih baik · Sedang (desain)
Skor biaya = 100 untuk semua nilai di bawah anggaran. **Terverifikasi:** dengan anggaran Rp 5 juta, kos dengan sewa Rp 500 ribu dan kos dengan sewa Rp 1,4 juta sama-sama mendapat skor biaya **100** dan skor total **89,4**.

Untuk alat bernama "bandingkan biaya sebenarnya", ini membuat selisih biaya tidak memengaruhi peringkat selama di bawah anggaran. Ini terdokumentasi di `/methodology`, tetapi sebagian besar pengguna tidak akan membacanya.
**Perbaikan:** gunakan skor kontinu (mis. berbasis rasio terhadap anggaran atau min-max antar opsi yang dibandingkan), minimal pakai biaya sebagai *tie-breaker*, dan tampilkan "hemat Rp X/bulan dibanding opsi lain" di papan keputusan.

### V-06 — Data yang disembunyikan tidak menurunkan skor secara memadai · Sedang (desain)
Kriteria tanpa data dikeluarkan dari penyebut (terdokumentasi sebagai keputusan sengaja). **Terverifikasi:** kos yang seluruh biaya dan waktu perjalanannya *unknown* tetap `eligible` dan mendapat skor **81,3** (kos lengkap: **89,4**). Pada bobot yang menekankan lingkungan/fasilitas, opsi tanpa data biaya bisa mengalahkan yang lengkap. Di sisi lain, label *confidence* sengaja tidak memengaruhi skor, jadi urutannya hanya dipecah oleh confidence saat skor sama.

Ini rawan menyesatkan karena skor tampil sebagai satu angka.
**Perbaikan:** tampilkan **rentang skor** (skenario terburuk ↔ terbaik dengan data kosong diisi batas bawah/atas), beri label "skor sementara" bila kriteria berbobot tinggi (biaya/perjalanan) kosong, dan jangan izinkan opsi tanpa data biaya menjadi rekomendasi teratas tanpa peringatan.

### V-07 — Tidak ada header keamanan; `X-Powered-By` aktif · Sedang
Lihat Bagian 2. Produk ini mengklaim "privasi 100%" dan tidak membuat panggilan jaringan (pencarian `fetch(`, `localStorage`, `dangerouslySetInnerHTML`, `window.open` di `src/` tidak menemukan apa pun). Itu bagus, tetapi tanpa CSP klaim tersebut hanya janji, bukan jaminan browser.
**Perbaikan:** buat `next.config.ts` dengan `poweredByHeader: false` dan `headers()` yang memasang CSP (`default-src 'self'`; `connect-src 'self'`; `frame-ancestors 'none'`), HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, dan `Permissions-Policy` minimal. Dengan `connect-src 'self'`, browser sendiri mencegah kebocoran data.

### V-08 — Model data terlalu sempit untuk realitas kos Indonesia · Sedang (produk)
Hanya **6 fasilitas** (Wi-Fi, KM dalam, dapur, parkir, akses laundry, laundry dekat) dan **3 aturan**. Tidak ada AC/kipas, parkir motor vs mobil, keamanan/CCTV, ukuran kamar, kasur/lemari, token listrik vs termasuk sewa, jadwal kenaikan sewa, durasi kontrak minimum, kebijakan pengembalian deposit, risiko banjir, atau sinyal HP. Biaya transport berupa satu angka pulang-pergi, tanpa moda dan tanpa nilai waktu tempuh. Fasilitas dibatasi `z.enum` dan label harus persis sama, jadi menambah kriteria berarti ubah skema, migrasi, dan versi ekspor.
**Perbaikan:** jadikan daftar fasilitas/aturan sebagai data konfigurasi, tambah AC, ukuran kamar, kontrak dan kenaikan sewa, serta kolom "moda transport" dengan biaya per moda.

### V-09 — Ketahanan data lokal · Sedang
- Ekspor/impor JSON **sudah ada** dan tervalidasi, bagus. Tetapi impor memakai `file.text()` tanpa batas ukuran; berkas sangat besar bisa membekukan tab (hanya *self-DoS*, bukan celah server).
- Format ekspor dikunci `version: z.literal(1)`, DB `version = 1`: belum ada jalur migrasi. Perubahan skema berikutnya akan merusak impor/data lama kecuali dirancang sejak sekarang.
- Tidak ditemukan pemanggilan `navigator.storage.persist()` di komponen workspace **[belum dicek di seluruh `src/`]**. Safari/iOS bisa membuang data situs yang lama tak dibuka.
- Nama berkas ekspor memakai `replace(/[^a-z0-9]+/g,"-")`; nama proyek non-Latin menghasilkan `kosmatch-.json`.
**Perbaikan:** batas ukuran impor (mis. 5 MB), skema `version` dengan fungsi migrasi, `navigator.storage.persist()` + indikator kuota, pengingat backup berkala, nama berkas fallback.

### V-10 — Keterbacaan kode dan cakupan test komponen · Rendah–Sedang
- `kosmatch-workspace.tsx` (318 baris) dan `preferences-form.tsx` (628 baris) berisi JSX/logika dalam baris tunggal yang sangat panjang. Lulus lint, tetapi sulit direview dan di-*debug*.
- `@testing-library/react` dan `jsdom` terpasang, tetapi **tidak ada test komponen** (`tests/` hanya berisi `.ts`; environment Vitest `node`). UI hanya terlindungi oleh e2e.
- E2E memakai pola `Promise.race([...waitFor()])` lalu klik bersyarat. Itu tanda alur UI yang tidak deterministik dan berpotensi *flaky*.
- Tes e2e tidak memeriksa angka hasil perhitungan di layar terhadap nilai yang diharapkan.

### V-11 — Kebersihan repo dan klaim dokumentasi · Rendah
- `tsconfig.tsbuildinfo` (±157 KB) ter-commit walau ada di `.gitignore`; build lokal langsung mengubahnya.
- Nama paket `kostmatch` vs merek `KosMatch`.
- README memakai badge "Live Production" dan menyebut "Comprehensive Testing" serta "pipeline pengujian", yang belum sesuai (lihat V-02).
- `og:image` memakai tangkapan layar statis `public/screenshots/landing-desktop-chromium.png` (di-*commit* manual; konfigurasi Playwright tidak otomatis membuatnya). Karena UI berubah, gambar ini bisa usang dan menampilkan UI yang berbeda dari kenyataan.
- `meta keywords` tidak berguna untuk Google.
- `lastmod` sitemap selalu waktu build.

### V-12 — Domain gratis bersama (`mooo.com`) · Sedang (kredibilitas)
Subdomain FreeDNS bersama. Reputasi domain tidak sepenuhnya di tangan Anda, lebih rawan diblokir filter spam, dan kurang dipercaya untuk produk yang menjual "objektif & transparan". Pertimbangkan domain `.id` atau `.com` sendiri dengan 301 dari domain lama.

---

## 4. Yang Sudah Baik (terverifikasi)

- **Validasi data:** Zod `.strict()`, allowlist fasilitas/aturan, URL sumber hanya `http/https`, batas panjang, ID unik, konsistensi `updatedAt ≥ createdAt`, dan batas tanggal pemeriksaan ke depan.
- **Integritas impor:** ID diregenerasi saat impor, relasi favorit dan `projectId` divalidasi ulang, penyimpanan atomik (`saveProjectBundle`).
- **Penanganan data tidak lengkap:** `unknown` dijaga eksplisit, dihitung terpisah dari "biaya awal masuk" (deposit/administrasi/sewa pertama), dengan label "Estimasi minimum".
- **Rupiah sebagai integer** dengan `isSafeInteger`; fungsi bebas efek samping (ada test "tidak memutasi input").
- **Hasil verifikasi manual rumus (lewat unit test yang lulus):** data demo Kos Anggrek → bulanan Rp 2.435.000, transport Rp 440.000, biaya awal Rp 3.400.000; Kos Mentari → Rp 2.377.000 dengan `electricity` *unknown*.
- **Keamanan sisi klien:** tidak ada `dangerouslySetInnerHTML`, tautan eksternal memakai `rel="noopener noreferrer"`, dan tidak ada panggilan `fetch` dari `src/`.
- **Aksesibilitas & i18n dasar:** `<html lang="id">`, `role="alert"` pada state error, navigasi berlabel; Axe sudah diimpor di e2e.
- **Transparansi:** halaman `/methodology` menjelaskan rumus dan batasan dengan jujur, termasuk pernyataan bahwa belum ada riset pengguna.

---

## 5. Rencana UAT

**Tidak dijalankan oleh saya** (butuh browser dan penguji). Alur utama sudah ada sebagai e2e otomatis di `tests/e2e/core-flow.spec.ts`, tetapi e2e juga tidak bisa saya eksekusi di sini. Jalankan `npx playwright install --with-deps && npm run build && npm run test:e2e` di mesin Anda. Label tombol di bawah diambil dari kode.

**Persona:** P1 mahasiswa baru (HP Android, 4G labil) · P2 pekerja membandingkan 3–5 kos · P3 orang tua yang kurang melek teknologi.

| ID | Skenario | Langkah ringkas | Yang diharapkan | Dasar | Hasil |
|---|---|---|---|---|---|
| UAT-01 | Muat pertama | Buka URL, cache kosong | UI utama muncul < 3 dtk di 4G, tanpa error console | Manual | ☐ |
| UAT-02 | Tujuan jelas | P3 menjelaskan fungsi aplikasi setelah 10 dtk | Jawaban benar tanpa bantuan | Manual | ☐ |
| UAT-03 | JS mati | Nonaktifkan JS | Ada konten/pesan, bukan layar kosong | Diprediksi **GAGAL** (V-03) | ☐ |
| UAT-04 | Coba data contoh | Klik "Coba Data Contoh" | Proyek "Kos untuk Magang di Jakarta" tampil, label "Data contoh fiktif" | e2e | ☐ |
| UAT-05 | Buat proyek | "Mulai Perbandingan" → isi nama, tujuan, anggaran → "Buat proyek" | Proyek tersimpan, state kosong ramah | e2e | ☐ |
| UAT-06 | Simpan kos tidak lengkap | Isi nama saja → "Simpan pilihan" | Tersimpan; tampil "Belum diketahui:" | e2e | ☐ |
| UAT-07 | Rumus biaya | Kos Anggrek (demo) | Bulanan **Rp 2.435.000**, awal **Rp 3.400.000** | Unit test **lulus**; cek tampilan UI | ☐ |
| UAT-08 | Input ekstrem | Isi 0, negatif, `1e9`, 99.999.999.999 di dua kolom | Ditolak/dinormalisasi, tanpa `NaN`, tanpa crash | Diprediksi **GAGAL** untuk jumlah besar (V-04) | ☐ |
| UAT-09 | Format uang | `1.200.000`, `1200000`, `1,2jt`, `Rp 1.200.000` | Konsisten diparse atau ditolak jelas | Manual | ☐ |
| UAT-10 | Bandingkan | Tab "Bandingkan" | "Perbandingan berdampingan" rapi di 360 px | e2e + manual | ☐ |
| UAT-11 | Fasilitas wajib | Tandai "Kamar mandi dalam" wajib, pilih kos tanpa itu | Ditandai belum memenuhi; tidak jadi peringkat atas | Unit test | ☐ |
| UAT-12 | Ubah bobot | Naikkan bobot jarak | Peringkat berubah wajar | Unit test | ☐ |
| UAT-13 | Kos murah vs mahal | Dua kos selisih besar, keduanya di bawah anggaran | Yang murah seharusnya terlihat unggul | Diprediksi **GAGAL** (V-05) | ☐ |
| UAT-14 | Data biaya kosong | Kos tanpa biaya vs kos lengkap | Skor kos kosong tidak menyesatkan | Diprediksi **PERLU PERBAIKAN** (V-06) | ☐ |
| UAT-15 | Shortlist, favorit, catatan | Shortlist → "Jadikan favorit" → tambah kelebihan | Tersimpan, "Favorit saat ini" tampil | e2e | ☐ |
| UAT-16 | Simulator | "Hari perjalanan per bulan" = 10 → "Terapkan Perubahan" | "Selisih per bulan" tampil; tersimpan | e2e | ☐ |
| UAT-17 | Persistensi | Isi data, reload, "Lanjutkan proyek" | Data utuh | e2e | ☐ |
| UAT-18 | Ganti proyek | Buat proyek kedua, reload | Proyek aktif dipulihkan | e2e | ☐ |
| UAT-19 | Backup | "Data & backup" → "Unduh backup" | File `.json` terunduh | e2e | ☐ |
| UAT-20 | Restore | Impor file hasil backup | Pratinjau benar, proyek baru tersalin | Unit test | ☐ |
| UAT-21 | Impor rusak | Impor JSON invalid / versi lain / file 50 MB | Pesan jelas; tab tidak membeku | Diprediksi **berisiko** untuk file besar (V-09) | ☐ |
| UAT-22 | Hapus data situs | Clear site data → buka lagi | Pulih ke state awal, tanpa crash | Manual | ☐ |
| UAT-23 | Mode privat | Jalankan di incognito | Berfungsi, ada peringatan data tidak persisten | Manual | ☐ |
| UAT-24 | Cetak/PDF | Buka ringkasan cetak | Satu halaman; catatan privat dan URL mentah disensor | Manual | ☐ |
| UAT-25 | Keyboard saja | Tab/Enter/Esc di semua alur | Semua bisa dipakai, fokus terlihat | Manual + Axe | ☐ |
| UAT-26 | Screen reader | TalkBack/NVDA | Label dan hasil terbaca, angka rupiah benar | Manual | ☐ |
| UAT-27 | Perangkat | 320/360/768/1280 px; Chrome, Firefox, Safari iOS, Samsung Internet | Tanpa scroll horizontal, target sentuh ≥ 44 px | Manual | ☐ |

**Kriteria lulus:** nol defek Kritis/Tinggi terbuka, ≥ 90% skenario lulus, P3 menyelesaikan alur "buat proyek → tambah 2 kos → lihat rekomendasi" tanpa bantuan.

### Perintah untuk melengkapi uji non-fungsional (jalankan di mesin Anda)

```bash
# Header produksi sebenarnya (melalui Nginx)
curl -sI https://kosmatch.mooo.com
curl -sI http://kosmatch.mooo.com | head -5            # redirect http -> https?

# Request pihak ketiga & akurasi klaim privasi
npx playwright install --with-deps
npm run build && npm run test:e2e

# Performa & aksesibilitas
npx lighthouse https://kosmatch.mooo.com --view --only-categories=performance,accessibility,best-practices,seo

# Keamanan
docker run --rm -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://kosmatch.mooo.com
npm audit --omit=dev

# Beban (aset statis)
k6 run load.js
```

Tes Playwright untuk membuktikan klaim "tidak ada pelacak":

```ts
import { test, expect } from "@playwright/test";
test("tidak ada request ke pihak ketiga", async ({ page }) => {
  const external: string[] = [];
  page.on("request", r => {
    const u = new URL(r.url());
    if (!["localhost", "kosmatch.mooo.com"].includes(u.hostname) && u.protocol.startsWith("http")) external.push(r.url());
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Coba Data Contoh" }).click();
  await page.waitForLoadState("networkidle");
  expect(external).toEqual([]);
});
```

---

## 6. Saran Pengembangan (berurutan menurut prioritas)

### Minggu ini (P0)
1. **Perbarui Next.js dan dependensi produksi** (V-01), aktifkan Dependabot dan gerbang `npm audit` di CI.
2. **Perbaiki CI/CD** (V-02): jalankan `npm test` dan Playwright, CI pada PR, host key pinning, rilis atomik + rollback + smoke test.
3. **Header keamanan + CSP + matikan `X-Powered-By`** lewat `next.config.ts` (V-07). Verifikasi hasil akhirnya di domain live.
4. **Tambah `error.tsx` dan turunkan batas uang per kolom** (V-04).

### Bulan ini (P1)
5. **Prerender landing statis** dan pisahkan dari workspace (V-03). Tambahkan halaman konten SEO (biaya hidup kos per kota/kampus, daftar biaya tersembunyi, checklist survei), JSON-LD `WebApplication`/`FAQPage`, dan daftarkan di Search Console.
6. **Perbaiki mesin skor** (V-05, V-06): skor biaya kontinu atau berbasis perbandingan antar opsi, rentang skor saat data kosong, peringatan pada rekomendasi dengan data biaya kosong, dan sensitivitas peringkat terhadap bobot.
7. **Ketahanan data** (V-09): batas ukuran impor, migrasi versi skema, `navigator.storage.persist()`, pengingat backup.
8. **Domain sendiri** (V-12) dan gambar OG yang dirancang khusus (V-11).

### Kuartal ini (P2)
9. **Perluas model data** (V-08): AC, ukuran kamar, kenaikan sewa, kontrak, kebijakan deposit, biaya transport per moda, nilai waktu tempuh. Jadikan definisi fasilitas/aturan berbasis konfigurasi.
10. **Refaktor komponen besar dan tambah test komponen** (V-10). Stabilkan e2e tanpa klik bersyarat, dan tambahkan asersi angka hasil.
11. **PWA/offline** dengan service worker bertipe versi, untuk survei lapangan dengan sinyal buruk.
12. **Berbagi hasil tanpa server**: snapshot terkompresi di URL fragment atau PDF ringkasan, sebagai jalur berbagi ke orang tua dan pendorong pertumbuhan organik.
13. **Validasi dengan pengguna nyata**: `/methodology` sendiri menyebut belum ada riset pengguna. Jadwalkan 5–8 sesi usability dengan mahasiswa/pekerja, lalu ukur apakah mereka paham arti skor dan rekomendasi.
14. **Analitik privasi-ramah** (event agregat, tanpa identitas, atau self-hosted Plausible/Umami) agar perbaikan produk berbasis data tanpa melanggar klaim privasi.

---

## 7. Koreksi atas Draf Sebelumnya

Draf pertama hanya melihat HTML situs, dan beberapa dugaannya terbukti keliru setelah ada akses ke repo:

| Dugaan draf lama | Kenyataan |
|---|---|
| Belum ada ekspor/impor data | **Ada**, tervalidasi Zod, dengan pratinjau dan regenerasi ID |
| Belum ada unit test rumus | **Ada**, 55 test lulus (biaya, skor, batas, rupiah, repositori, IndexedDB) |
| Belum jelas apakah klaim privasi benar | Kode tidak melakukan `fetch`/storage selain IndexedDB; klaim **konsisten di level kode** (header live dan font/CSS eksternal **belum dicek**) |
| `og:image` dihasilkan otomatis dari test | Gambar di-*commit* manual di `public/screenshots/`; dugaan itu **keliru** |
| Perlu memisahkan landing dan tool | Satu rute memuat keduanya; akar masalah SEO ada di `page.tsx` merender workspace klien (V-03) |
| Rumus perlu rincian perhitungan | Rincian biaya dan kriteria **sudah ditampilkan** per kos; masalahnya ada pada desain skor (V-05, V-06) |

---

## 8. Yang Masih Perlu Anda Jalankan agar Audit Lengkap

1. `npm run test:e2e` di mesin Anda (butuh unduhan Chromium) dan laporkan hasilnya.
2. `curl -sI https://kosmatch.mooo.com` untuk melihat header yang benar-benar dikirim Nginx.
3. Lighthouse dan ZAP seperti di Bagian 5.
4. Sesi UAT dengan 3 persona; isi kolom **Hasil** di tabel UAT.

Dengan keluaran itu, saya bisa menyelesaikan kolom UAT, mengonfirmasi atau menggugurkan prediksi (UAT-03, 08, 13, 14, 21), dan memperbarui keparahan temuan berdasarkan bukti.
