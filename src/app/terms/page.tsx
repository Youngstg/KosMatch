import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Scale, ShieldAlert } from "lucide-react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan sistem pendukung keputusan (DSS) dan peta eksplorasi hunian kampus KosMatch.",
  alternates: {
    canonical: "https://kosmatch.us.ci/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar editorial-topbar">
        <div className="container header-inner">
          <Link href="/" className="brand editorial-brand">
            <KosMatchLogo size={36} />
            <div className="editorial-brand-text">
              <span className="editorial-brand-title">KOSMATCH</span>
              <span className="editorial-brand-badge">KETENTUAN</span>
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
            Ketentuan Layanan
          </span>
          <h1 style={{ fontSize: "32px", margin: "8px 0 16px", color: "var(--foreground, #FFF)", lineHeight: 1.25 }}>
            Syarat &amp; Ketentuan Penggunaan
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px", lineHeight: 1.6 }}>
            Terakhir diperbarui: 6 November 2026. Harap membaca ketentuan ini secara saksama sebelum menggunakan platform KosMatch.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Section 1 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <Scale size={18} color="#E0A96D" /> 1. Sifat Layanan (Decision Support System)
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              KosMatch adalah <strong>alat bantu pendukung keputusan (Decision Support System / DSS) independen</strong> yang dirancang untuk membantu mahasiswa, pencari kos, dan orang tua membandingkan alternatif hunian secara objektif.
            </p>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li>KosMatch <strong>bukan agen properti, perantara sewa, atau pihak dalam transaksi sewa-menyewa</strong> antara penyewa dan pemilik kos.</li>
              <li>Seluruh transaksi sewa, pembayaran deposit, penandatanganan perjanjian, dan pengecekan fisik kamar dilakukan secara langsung antara pencari kos dan pemilik kos.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <BookOpen size={18} color="#E0A96D" /> 2. Estimasi Biaya &amp; Data Spasial
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              KosMatch menyediakan kalkulasi biaya hidup dan estimasi rute perjalanan:
            </p>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li><strong>Status Nilai Biaya:</strong> Biaya yang ditampilkan pada tabel perbandingan diberi label <em>Dikonfirmasi</em> (berdasarkan konfirmasi listing) atau <em>Estimasi</em> (perkiraan standar seperti token listrik, laundry, atau ongkos transport bensin/ojek).</li>
              <li><strong>Rute &amp; Waktu Tempuh:</strong> Dihitung berdasarkan jaringan jalan riil OpenStreetMap (OSRM). Kondisi kemacetan jalan raya, cuaca ekstrem, atau penutupan jalan sewaktu-waktu dapat memengaruhi waktu tempuh aktual.</li>
              <li>Pengguna dianjurkan untuk selalu mengonfirmasi ketersediaan kamar, tarif sewa mutakhir, dan aturan spesifik kepada pemilik kos sebelum melakukan pembayaran.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <ShieldAlert size={18} color="#E0A96D" /> 3. Kewajiban &amp; Tanggung Jawab Pengguna
            </h2>
            <ul style={{ paddingLeft: "20px", color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.7 }}>
              <li>Pengguna bertanggung jawab atas keakuratan data yang dimasukkan dalam simulasi manual dan kerahasiaan kredensial akun pribadi.</li>
              <li>Pemilik kos yang mendaftarkan properti wajib memberikan data tarif sewa, fasilitas nyata, aturan hunian, dan foto yang jujur serta tidak menyesatkan.</li>
              <li>Dilarang menyalahgunakan platform untuk aktivitas ilegal, penipuan uang muka/deposit fiktif, spam, atau scraping berlebihan yang membebani infrastruktur publik.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="panel" style={{ background: "var(--surface, #18191c)", border: "1px solid var(--border, #2d2e33)", borderRadius: "14px", padding: "24px" }}>
            <h2 style={{ fontSize: "20px", marginTop: 0, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
              <FileText size={18} color="#E0A96D" /> 4. Batasan Tanggung Jawab
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6 }}>
              KosMatch berusaha menyajikan algoritma penilaian dan data seakurat mungkin. Namun demikian, KosMatch disediakan atas dasar &quot;sebagaimana adanya&quot; (<em>as is</em>). KosMatch tidak bertanggung jawab atas perselisihan sewa-menyewa, kerugian finansial dari transaksi langsung antar pengguna, atau ketidaksesuaian fasilitas di lapangan tanpa konfirmasi langsung ke pemilik properti.
            </p>
          </section>
        </div>
      </main>

      <footer className="footer-note editorial-footer" style={{ marginTop: "auto" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ margin: 0 }}>&copy; 2026 KosMatch. Hak cipta dilindungi.</p>
          <div style={{ display: "flex", gap: "16px", fontSize: "13px" }}>
            <Link href="/privacy" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Kebijakan Privasi</Link>
            <Link href="/contact" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Kontak</Link>
            <Link href="/" style={{ color: "#E0A96D", textDecoration: "none" }}>Beranda</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

