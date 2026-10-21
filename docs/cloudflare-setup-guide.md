# Panduan Konfigurasi Cloudflare (KosMatch v2 — Fase 0)

Dokumen ini menjelaskan langkah-langkah memasang Cloudflare (Free Tier) di depan server KosMatch untuk perlindungan WAF, mitigasi DDoS, akselerasi CDN, dan analitik performa.

---

## 1. Konfigurasi DNS & Proxy

1. **Arahkan Nameserver Domain:**
   - Ubah nameserver registrar domain Anda ke nameserver Cloudflare yang diberikan (contoh: `alfa.ns.cloudflare.com` & `vera.ns.cloudflare.com`).
2. **Setup DNS Record:**
   - **Type:** `A` | **Name:** `@` | **IPv4 address:** `<IP_SERVER_TENCENT>` | **Proxy status:** **Proxied (Orange Cloud)**
   - **Type:** `CNAME` | **Name:** `www` | **Target:** `@` | **Proxy status:** **Proxied (Orange Cloud)**

---

## 2. Pengaturan SSL/TLS

1. **Encryption Mode:** Pilih **Full (Strict)**.
   - Nginx di server sudah memiliki sertifikat SSL Let's Encrypt yang valid.
   - Mode Full (Strict) menjamin enkripsi end-to-end dari browser ke Cloudflare dan dari Cloudflare ke server origin.
2. **Always Use HTTPS:** Aktifkan (**On**).
3. **Minimum TLS Version:** Set ke **TLS 1.2**.
4. **Automatic HTTPS Rewrites:** Aktifkan (**On**).

---

## 3. Caching & Edge Optimization

Next.js 16 App Router menghasilkan bundel statis dan hashing bawaan pada path `/_next/static/`.

1. **Browser Cache TTL:** Respect Existing Headers.
2. **Page Rules / Cache Rules (Prioritas Tinggi):**
   - **Rule 1: Static Chunks & Media**
     - Target: `*kosmatch.us.ci/_next/static/*` dan `*kosmatch.us.ci/screenshots/*`
     - Cache Level: **Cache Everything**
     - Edge Cache TTL: **30 days**
     - Browser Cache TTL: **30 days**
   - **Rule 2: Dynamic / Interactive Pages**
     - Target: `*kosmatch.us.ci/*`
     - Cache Level: **Standard**

---

## 4. Keamanan & WAF (Web Application Firewall)

1. **Security Level:** **Medium**.
2. **Bot Fight Mode:** Aktifkan (**On**) pada menu *Security > Bots*.
3. **HTTP DDoS Attack Protection:** Default (Managed by Cloudflare).
4. **Header Keamanan Asal (Origin):**
   - Server Next.js sudah mengonfigurasi header `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, dan `Permissions-Policy` via [`next.config.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/next.config.ts). Cloudflare akan meneruskan header-header ini secara utuh.

---

## 5. Web Analytics (Privasi-Ramah)

1. Aktifkan **Cloudflare Web Analytics** pada dashboard Cloudflare.
2. Layanan ini mengukur LCP, FID, CLS, dan jumlah kunjungan tanpa menggunakan cookie pelacak pihak ketiga atau data sensitif pengguna.
