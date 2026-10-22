import { ArrowRight, Check, Compass, Info, Save, Sparkles } from "lucide-react";
import { LandingFaq } from "./landing-faq";
import { LandingFeatures } from "./landing-features";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export type LandingViewProps = {
  onStart: () => void;
  onDemo: () => void;
  hasSaved: boolean;
  onResume: () => void;
};

function Brand() {
  return (
    <div className="brand" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <KosMatchLogo size={38} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: 800, fontSize: "19px", letterSpacing: "-0.02em", lineHeight: 1.15 }}>KosMatch</span>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Pilot UI & UNAND</span>
      </div>
    </div>
  );
}

export function LandingView({ onStart, onDemo, hasSaved, onResume }: LandingViewProps) {
  return (
    <div className="shell landing-shell">
      <header className="topbar">
        <div className="container header-inner">
          <Brand />
          <div className="actions compact">
            <a className="btn btn-ghost highlight-pill" href="/explore">
              <Compass size={15} /> Peta Eksplorasi
            </a>
            <a className="btn btn-ghost" href="/methodology">
              Metodologi
            </a>
            <a className="btn btn-ghost" href="/auth/login">
              Akun
            </a>
            <button className="btn btn-primary" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="container hero">
          <div className="hero-content">
            <div className="hero-pilot-pill">
              <span className="live-indicator" />
              <span>PILOT FASE 1 • UI DEPOK & UNAND LIMAU MANIS</span>
            </div>
            <h1>Kos murah belum tentu paling hemat.</h1>
            <p className="lead">
              Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan.
            </p>
            <div className="actions">
              <button className="btn btn-primary" onClick={onStart}>
                Mulai Perbandingan <ArrowRight size={18} />
              </button>
              <a className="btn btn-explore" href="/explore">
                <Compass size={18} /> Buka Peta Pilot
              </a>
              <button className="btn btn-secondary" onClick={onDemo}>
                <Sparkles size={18} /> Coba Data Contoh
              </button>
              {hasSaved && (
                <button className="btn btn-ghost" onClick={onResume}>
                  <Save size={18} /> Lanjutkan proyek
                </button>
              )}
            </div>
          </div>
          <article className="hero-card" aria-label="Pratinjau hasil perbandingan">
            <div className="hero-card-header">
              <div className="hero-card-title">
                <p className="muted" style={{ margin: 0 }}>
                  <strong>Kos Anggrek 12</strong> · Menteng
                </p>
                <span className="hero-card-badge">Pilihan Teratas</span>
              </div>
              <div className="preview-score">86% cocok</div>
            </div>
            <p className="hero-card-price">
              <strong>Rp1.850.000 per bulan</strong>
            </p>
            <div className="preview-row">
              <span>Harga sewa</span>
              <strong>Rp1.650.000</strong>
            </div>
            <div className="preview-row">
              <span>Perjalanan</span>
              <strong>18 menit ke Kantor Kuningan</strong>
            </div>
            <div className="preview-row">
              <span>Kebutuhan wajib</span>
              <strong>
                <Check size={16} /> Terpenuhi
              </strong>
            </div>
          </article>
        </section>

        {/* Pilot Map Interactive Showcase Feature */}
        <section className="container map-showcase-section" aria-labelledby="map-showcase-title">
          <div className="map-showcase-card">
            <div className="map-showcase-content">
              <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="hud-dashed-radius-badge" aria-hidden="true" />
                <span>PETA EKSPLORASI KAMPUS</span>
              </div>
              <h2 id="map-showcase-title" className="section-title" style={{ marginTop: "8px" }}>
                Eksplorasi Radius 4 km & Fasilitas Sekitar Kampus
              </h2>
              <p className="lead" style={{ fontSize: "16px", marginBottom: "16px" }}>
                Peta dasar didukung oleh <strong>OpenStreetMap/CARTO</strong> dengan lingkaran putus-putus beradius 4 km. Hitung waktu tempuh jalan kaki & motor langsung ke gerbang kampus, serta periksa ketersediaan warung makan, laundry, dan minimarket di sekitar kos.
              </p>
              <div className="map-showcase-pills">
                <span className="showcase-pill">
                  <span className="hud-dashed-radius-badge" style={{ width: "12px", height: "12px" }} /> Radius Pilot 4 km
                </span>
                <span className="showcase-pill">
                  🗺️ CARTO & OSM Official
                </span>
                <span className="showcase-pill">
                  🛵 Rute Nyata Haversine & OSRM
                </span>
                <span className="showcase-pill">
                  🍜 Profil Fasilitas Sekitar
                </span>
              </div>
              <div style={{ marginTop: "20px" }}>
                <a href="/explore" className="btn btn-primary">
                  Buka Peta Eksplorasi Sekarang <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="map-showcase-visual">
              <div className="map-showcase-mockup">
                <KosMatchLogo size={140} style={{ borderRadius: "24px", boxShadow: "0 12px 30px rgba(0,0,0,0.5)" }} />
                <div className="mockup-caption">
                  <strong>UI Depok & UNAND Limau Manis</strong>
                  <span>Garis putus-putus menunjukkan radius survei pilot 4 km</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container steps" aria-labelledby="rent-problem-title">
          <h2 id="rent-problem-title" className="section-title">
            Kenapa harga sewa saja tidak cukup?
          </h2>
          <div className="step-grid">
            {[
              ["1", "Hitung biaya nyata", "Gabungkan sewa, biaya rutin, dan perjalanan bulanan."],
              ["2", "Periksa kebutuhan wajib", "Pisahkan syarat yang harus tersedia dari preferensi tambahan."],
              ["3", "Pahami trade-off", "Lihat alasan skor dan data yang masih perlu dikonfirmasi."],
            ].map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container steps" aria-labelledby="transparent-score-title">
          <div className="panel">
            <div className="eyebrow">Transparansi skor</div>
            <h2 id="transparent-score-title" className="section-title">
              Skor yang transparan, bukan sekadar rating
            </h2>
            <p className="lead">
              Setiap skor disertai alasan, kebutuhan wajib, tingkat keyakinan data, dan hal yang masih perlu diverifikasi.
            </p>
            <div className="preview-row">
              <span>Biaya total</span>
              <strong>100/100 · Sesuai anggaran</strong>
            </div>
            <div className="preview-row">
              <span>Perjalanan</span>
              <strong>92/100 · Sesuai batas waktu</strong>
            </div>
            <div className="preview-row">
              <span>Data belum lengkap</span>
              <strong>
                <Info size={16} /> Ditandai apa adanya
              </strong>
            </div>
          </div>
          <p className="disclaimer">
            <Info size={17} /> Nama, harga, alamat, dan ketersediaan pada data contoh ini bersifat fiktif.
          </p>
        </section>

        <LandingFeatures />

        <LandingFaq />

        <section className="container steps" aria-labelledby="cta-title">
          <div className="panel cta-banner">
            <div className="eyebrow">Mulai sekarang</div>
            <h2 id="cta-title" className="section-title">
              Siap Mengambil Keputusan Kos yang Tepat?
            </h2>
            <p className="lead">
              Gunakan KosMatch secara gratis tanpa daftar akun. Simpan data di perangkat Anda dan buat keputusan terbaik hari ini.
            </p>
            <div className="actions">
              <button className="btn btn-primary" onClick={onStart}>
                Mulai Perbandingan Sekarang <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={onDemo}>
                <Sparkles size={18} /> Coba Data Contoh
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-note">
        <div className="container">
          <p>KosMatch adalah alat bantu keputusan, bukan jaminan kualitas atau ketersediaan kos.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/methodology">
              Metodologi & Batasan
            </a>
            <a className="btn btn-ghost" href="/admin" title="Masuk ke portal pengelolaan kos bagi pemilik dan admin">
              Portal Pemilik & Admin
            </a>
            <button className="btn btn-primary" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
