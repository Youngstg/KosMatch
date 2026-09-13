# KosMatch

KosMatch adalah MVP alat bantu keputusan untuk membandingkan pilihan kos berdasarkan biaya bulanan sebenarnya, perjalanan, fasilitas wajib, lingkungan, dan kecocokan aturan. KosMatch bukan marketplace dan tidak menentukan pilihan secara mutlak.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Validasi

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Cara kerja skor

Setiap kriteria menghasilkan skor 0–100. Skor akhir adalah rata-rata berbobot dari kriteria yang datanya diketahui. Nilai yang belum diketahui tidak dianggap nol dan dikeluarkan dari penyebut. Fasilitas wajib menentukan kelayakan secara terpisah dari skor. Keyakinan data tidak menambah skor.

Biaya bulanan terdiri dari sewa, utilitas/layanan berulang, serta biaya transportasi pulang-pergi dikalikan jumlah hari perjalanan. Deposit dan biaya administrasi ditampilkan sebagai biaya awal masuk, bukan dicampur ke biaya bulanan.

## Batasan MVP saat ini

- data proyek berjalan dalam state sesi; adapter repository in-memory tersedia untuk pengembangan dan pengujian;
- data demo sepenuhnya fiktif;
- belum ada akun, sinkronisasi cloud, scraping marketplace, booking, atau peta real-time;
- seluruh biaya dan ketersediaan harus dikonfirmasi langsung kepada pemilik kos.

Dokumen sumber produk dan teknis tersedia di `KosMatch-description.md`, `KosMatch-design.md`, dan `KosMatch-architecture.md`.
