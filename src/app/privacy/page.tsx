import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Database, EyeOff, Server, Shield, UserCheck } from "lucide-react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Transparansi pengelolaan data, keamanan server dan basis data terenkripsi, serta perlindungan hak privasi pengguna di KosMatch.",
  alternates: {
    canonical: "https://kosmatch.us.ci/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar editorial-topbar">
        <div className="container header-inner">
          <Link href="/" className="brand editorial-brand">
            <KosMatchLogo size={36} />
            <div className="editorial-brand-text">
              <span className="editorial-brand-title">KOSMATCH</span>
              <span className="editorial-brand-badge">PRIVASI</span>
            </div>
          </Link>
          <nav className="editorial-topbar-nav" aria-label="Navigasi Halaman">
            <Link className="editorial-nav-link" href="/">
              <ArrowLeft size={14} /> Kembali ke Beranda
            </Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "40px 20px 80px", maxWidth: "860px" }}>
        <div style={{ marginBottom: "32px" }}>
          <span className="hero-editorial-super" style={{ color: "#E0A96D", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Transparansi Data &amp; Privasi
          </span>
          <h1 style={{ fontSize: "32px", margin: "8px 0 16px", color: "var(--foreground, #FFF)", lineHeight: 1.25 }}>
            Kebijakan Privasi KosMatch
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px", lineHeight: 1.6 }}>
            Terakhir diperbarui: 6 November 2026. Kami berkomitmen untuk melindungi data akun, preferensi hunian, dan simulasi keputusan Anda secara transparan pada infrastruktur server kami.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Ringkasan Konkret */}
          <div
            className="panel"
            style={{
              background: "rgba(224, 169, 109, 0.08)",
              border: "1px solid rgba(224, 169, 109, 0.25)",
              borderRadius: "14px",
              padding: "20px",
            }}
          >
            <h3 style={{ margin: "0 0 12px", fontSize: "17px", color: "#E0A96D", display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={18} /> Prinsip Privasi KosMatch Secara Singkat
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "rgba(255, 255, 255, 0.85)", fontSize: "14px", lineHeight: 1.7 }}>
              <li><strong>Penyimpanan Server Terproteksi (VPS):</strong> Akun pengguna, preferensi kos, proyek perbandingan DSS, kalkulasi biaya hidup nyata, listing kos terverifikasi, dan fasilitas lingkungan tersimpan secara aman di server database VPS terproteksi dan terenkripsi.</li>
              <li><strong>Autentikasi &amp; Isolasi Data Akun:</strong> Akses ke fitur peta kampus dan kalkulator DSS dihubungkan dengan akun terdaftar (Google OAuth atau Email/Sandi) sehingga data Anda terisolasi secara privat.</li>
              <li><strong>Bebas Iklan &amp; Pelacak Komersial:</strong> Kami tidak memasang pelacak iklan pihak ketiga, tidak menjual profil preferensi Anda ke calo atau agen, dan tidak memanipulasi peringkat kos secara berbayar.</li>
              <li><strong>Kendali Penuh:</strong> Anda dapat mengekspor data dalam format JSON, mengunduh ringkasan PDF, atau menghapus akun beserta seluruh data tersimpan kapan saja.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <Database size={18} color="#E0A96D" /> 1. Data yang Kami Kumpulkan
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              Jenis informasi yang dikumpulkan di KosMatch bergantung pada bagaimana Anda menggunakan layanan kami:
            </p>
            <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <strong style={{ color: "var(--foreground, #FFF)" }}>a. Pengunjung Tamu (Halaman Beranda &amp; Informasi Publik):</strong>
                <p style={{ margin: "4px 0 0", color: "rgba(255, 255, 255, 0.7)", fontSize: "13px" }}>
                  Pengunjung dapat membaca informasi panduan kampus, keunggulan fitur, dan FAQ secara bebas. Fitur eksplorasi peta interaktif dan kalkulator keputusan DSS memerlukan masuk akun gratis agar hasil perbandingan dan analisis tersimpan aman di akun server Anda.
                </p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <strong style={{ color: "var(--foreground, #FFF)" }}>b. Pengguna Masuk (Akun Pengguna):</strong>
                <p style={{ margin: "4px 0 0", color: "rgba(255, 255, 255, 0.7)", fontSize: "13px" }}>
                  Alamat email dan nama akun yang diberikan oleh Google OAuth, atau email dan kata sandi ter-hash (jika mendaftar via formulir). Seluruh proyek perbandingan, opsi kos, bobot preferensi AHP, dan simulasi pengeluaran disimpan di server terhubung ke akun Anda.
                </p>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <strong style={{ color: "var(--foreground, #FFF)" }}>c. Pemilik Kos / Pengelola Properti:</strong>
                <p style={{ margin: "4px 0 0", color: "rgba(255, 255, 255, 0.7)", fontSize: "13px" }}>
                  Nama properti kos, alamat, koordinat lokasi geografis, tarif sewa bulanan, fasilitas, aturan hunian, dan nomor kontak yang Anda cantumkan untuk verifikasi listing di database.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <Server size={18} color="#E0A96D" /> 2. Di Mana Data Disimpan dan Bagaimana Keamanannya?
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              Seluruh sistem KosMatch dijalankan secara terpusat pada infrastruktur server produksi:
            </p>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li><strong>Infrastruktur Server Terpusat:</strong> Layanan berjalan pada server terpusat yang diproteksi firewall ketat, reverse proxy, dan akses port terisolasi.</li>
              <li><strong>Basis Data Terenkripsi:</strong> Database dan ekstensi geospasial di-host secara mandiri pada server tanpa berbagi lingkungan dengan pihak ketiga yang tidak berwenang.</li>
              <li><strong>Protokol HTTPS &amp; Sesi HttpOnly:</strong> Seluruh komunikasi antar peramban dan server dienkripsi menggunakan sertifikat SSL/TLS modern. Sesi otentikasi dikelola lewat cookie bertanda <code>HttpOnly</code>, <code>SameSite=Lax</code>, dan <code>Secure</code>.</li>
              <li><strong>Hashing Kata Sandi:</strong> Kata sandi akun di-hash menggunakan algoritma modern sebelum disimpan ke database, sehingga kata sandi asli tidak pernah dapat dibaca oleh staf manapun.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <EyeOff size={18} color="#E0A96D" /> 3. Pembagian Data ke Pihak Ketiga
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              KosMatch <strong>tidak menjual, menyewakan, atau memperdagangkan</strong> data pribadi atau riwayat pencarian kos Anda kepada pengiklan atau pihak ketiga manapun. Kami hanya berinteraksi dengan layanan teknis esensial:
            </p>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li><strong>Google Identity Services:</strong> Digunakan semata-mata untuk proses masuk (login) akun Google Anda secara aman.</li>
              <li><strong>OpenStreetMap (OSM) &amp; OSRM:</strong> Digunakan untuk merender peta dan menghitung jarak rute jalan nyata ke kampus. Permintaan rute tidak memuat identitas akun pengguna.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <UserCheck size={18} color="#E0A96D" /> 4. Hak dan Kendali Pengguna
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              Anda memiliki hak mutlak atas data Anda di KosMatch:
            </p>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li><strong>Hak Akses &amp; Portabilitas:</strong> Anda dapat mengekspor seluruh proyek dan opsi kos Anda ke format file JSON kapan saja dari tab &quot;Data &amp; Backup&quot;.</li>
              <li><strong>Hak Hapus Data:</strong> Anda dapat menghapus proyek tertentu atau meminta penghapusan akun secara penuh melalui kontak bantuan kami.</li>
              <li><strong>Pengelolaan Sesi:</strong> Anda dapat keluar dari sesi kapan saja untuk mengakhiri akses aktif di perangkat yang digunakan.</li>
            </ul>
          </section>

          {/* Section 5: Kontak */}
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
              Ada pertanyaan seputar privasi atau ingin mengelola data Anda? Hubungi kami melalui{" "}
              <Link href="/contact" style={{ color: "#E0A96D", textDecoration: "underline" }}>
                Halaman Kontak
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="footer-note editorial-footer" style={{ marginTop: "auto" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ margin: 0 }}>&copy; 2026 KosMatch. Hak cipta dilindungi.</p>
          <div style={{ display: "flex", gap: "16px", fontSize: "13px" }}>
            <Link href="/terms" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Syarat &amp; Ketentuan</Link>
            <Link href="/contact" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Kontak</Link>
            <Link href="/" style={{ color: "#E0A96D", textDecoration: "none" }}>Beranda</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
