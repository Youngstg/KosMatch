"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Info, Play, Save, Sparkles } from "lucide-react";
import { LandingFaq } from "./landing-faq";
import { LandingFeatures } from "./landing-features";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";
import { PilotRadiusMockup } from "./pilot-radius-mockup";

export type LandingViewProps = {
  onStart: () => void;
  onDemo: () => void;
  hasSaved: boolean;
  onResume: () => void;
};

function Brand() {
  return (
    <Link href="/" className="brand editorial-brand">
      <KosMatchLogo size={36} />
      <div className="editorial-brand-text">
        <span className="editorial-brand-title">KOSMATCH</span>
        <span className="editorial-brand-badge">MULTI-KAMPUS</span>
      </div>
    </Link>
  );
}

export function LandingView({ onStart, onDemo, hasSaved, onResume }: LandingViewProps) {
  const [activeTab, setActiveTab] = useState<"kamar" | "fasilitas" | "3d">("kamar");
  const [activeHotspot, setActiveHotspot] = useState<"roomtour" | "access" | "amenity">("roomtour");

  return (
    <div className="shell landing-shell landing-editorial-theme">
      {/* Editorial Floating Glass Header */}
      <header className="topbar editorial-topbar">
        <div className="container header-inner">
          <Brand />
          <nav className="editorial-topbar-nav" aria-label="Navigasi Halaman">
            <a className="editorial-nav-link" href="#features">
              Fitur & DSS
            </a>
            <a className="editorial-nav-link highlight" href="/explore">
              <Compass size={14} /> Peta Eksplorasi
            </a>
            <a className="editorial-nav-link" href="/methodology">
              Metodologi
            </a>
            <a className="editorial-nav-link" href="#faq">
              Tanya Jawab
            </a>
          </nav>
          <div className="actions compact editorial-topbar-actions">
            <a className="btn btn-editorial-ghost" href="/auth/login">
              Akun
            </a>
            <button className="btn btn-editorial-pill" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =========================================================================
            HERO SECTION: ARCHITECTURAL EDITORIAL SHOWCASE (RANTY REFERENCE STYLE)
        ========================================================================== */}
        <section className="container hero-editorial-section">
          {/* Top Hero Grid: Left Typography + Right Floating Residence Card */}
          <div className="hero-editorial-grid">
            {/* Left Column: High-Fashion Serif Headline & DSS Actions */}
            <div className="hero-editorial-left">
              <div className="hero-pilot-pill editorial-pill">
                <span className="live-indicator" />
                <span>KATALOG KAMPUS TERPADU • UI • UNAND • ITERA</span>
              </div>

              <div className="hero-editorial-title-wrap">
                <span className="hero-editorial-super">THE PERFECT KOS®</span>
                <h1 className="hero-editorial-h1">Kos murah belum tentu paling hemat.</h1>
              </div>

              <p className="lead editorial-lead">
                Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan.
              </p>

              <div className="actions editorial-actions">
                <button className="btn btn-editorial-start" onClick={onStart}>
                  Mulai Perbandingan <ArrowRight size={18} />
                </button>
                <button className="btn btn-editorial-secondary" onClick={onDemo}>
                  <Sparkles size={16} /> Coba Data Contoh
                </button>
                <a className="btn btn-editorial-outline" href="/explore">
                  <Compass size={16} /> Buka Peta Pilot
                </a>
                {hasSaved && (
                  <button className="btn btn-editorial-ghost" onClick={onResume}>
                    <Save size={16} /> Lanjutkan proyek
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Floating Architectural Card with 3D House & Hotspots */}
            <div className="hero-editorial-right">
              <div className="editorial-card-wrapper">
                {/* Mode Pills on top of card */}
                <div className="editorial-card-header">
                  <div className="editorial-pills-row">
                    <button
                      type="button"
                      className={`editorial-filter-pill ${activeTab === "kamar" ? "active" : ""}`}
                      onClick={() => setActiveTab("kamar")}
                    >
                      Kamar
                    </button>
                    <button
                      type="button"
                      className={`editorial-filter-pill ${activeTab === "fasilitas" ? "active" : ""}`}
                      onClick={() => setActiveTab("fasilitas")}
                    >
                      Fasilitas
                    </button>
                    <button
                      type="button"
                      className={`editorial-filter-pill dark-pill ${activeTab === "3d" ? "active" : ""}`}
                      onClick={() => setActiveTab("3d")}
                    >
                      3D
                    </button>
                  </div>
                </div>

                <div className="editorial-card-body">
                  <h2 className="editorial-card-title">Desain Nyaman & Efisiensi</h2>
                  <p className="editorial-card-subtitle">Dari blueprints hingga simulasi harian.</p>

                  {/* Residence Visual Canvas */}
                  <div className="editorial-residence-canvas">
                    <Image
                      src="/images/landing-hero-residence.webp"
                      alt="Modern Architectural Student Residence"
                      width={960}
                      height={540}
                      priority
                      className="editorial-residence-img"
                    />

                    {/* Interactive Hotspot 1: Roomtour (Bedroom floor-to-ceiling window) */}
                    <div
                      className={`editorial-hotspot hotspot-roomtour ${activeHotspot === "roomtour" ? "active" : ""}`}
                      onClick={() => setActiveHotspot("roomtour")}
                    >
                      <span className="hotspot-pulse" />
                      <span className="hotspot-dot" />

                      {/* Floating Callout Card for ROOMTOUR */}
                      <div className="editorial-callout-roomtour">
                        <div className="callout-thumb-wrap">
                          <Image
                            src="/images/landing-roomtour-preview.webp"
                            alt="Roomtour Studio Preview"
                            width={54}
                            height={54}
                            className="callout-thumb"
                          />
                          <span className="callout-play-badge">
                            <Play size={10} fill="#fff" />
                          </span>
                        </div>
                        <div className="callout-meta">
                          <span className="callout-badge-title">ROOMTOUR</span>
                          <strong className="callout-name">Studio 3x4m</strong>
                          <span className="callout-sub">AC & Meja Belajar</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Hotspot 2: Akses & Radius Kampus */}
                    <div
                      className={`editorial-hotspot hotspot-access ${activeHotspot === "access" ? "active" : ""}`}
                      onClick={() => setActiveHotspot("access")}
                    >
                      <span className="hotspot-pulse" />
                      <span className="hotspot-dot" />
                      <div className="editorial-callout-pill">
                        <span className="hud-dashed-radius-badge" style={{ width: 8, height: 8 }} />
                        <span>3 Mnt ke Kampus · Radius 4 km</span>
                      </div>
                    </div>

                    {/* Interactive Hotspot 3: Fasilitas Sekitar */}
                    <div
                      className={`editorial-hotspot hotspot-amenity ${activeHotspot === "amenity" ? "active" : ""}`}
                      onClick={() => setActiveHotspot("amenity")}
                    >
                      <span className="hotspot-pulse" />
                      <span className="hotspot-dot" />
                      <div className="editorial-callout-pill">
                        <span>🍲 Warung & Laundry &lt; 100m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Trio (Directly below Hero - RANTY Reference Style) */}
          <div className="hero-editorial-trio">
            {/* Card 1: Warm Clay Brown Box with 3D Cutaway Diagram */}
            <div className="editorial-trio-card clay-card">
              <div className="clay-card-content">
                <h3 className="clay-card-title">Kebutuhan Wajib Terpenuhi!</h3>
                <p className="clay-card-sub">Material & fasilitas kos terverifikasi tim survei.</p>
                <div className="clay-card-badges">
                  <span className="clay-pill">Insulasi Suara</span>
                  <span className="clay-pill">Meja Belajar</span>
                  <span className="clay-pill">KM Dalam</span>
                </div>
              </div>
              <div className="clay-card-visual">
                <Image
                  src="/images/landing-isometric-cutaway.webp"
                  alt="Potongan 3D Kamar Kos"
                  width={140}
                  height={140}
                  className="clay-cutaway-img"
                />
              </div>
            </div>

            {/* Card 2: Social Proof & Avatars */}
            <div className="editorial-trio-card stat-card">
              <div className="stat-card-avatars">
                <Image
                  src="/images/landing-student-avatars.webp"
                  alt="Mahasiswa Pengguna KosMatch"
                  width={96}
                  height={54}
                  className="stat-avatars-img"
                />
              </div>
              <div className="stat-card-number">100%</div>
              <div className="stat-card-caption">Bebas Sponsor & Privat di Browser</div>
              <div className="stat-card-sub">12k+ Simulasi Keputusan Kos</div>
            </div>

            {/* Card 3: Big Architectural Headline */}
            <div className="editorial-trio-card statement-card">
              <h3 className="statement-card-title">
                KAMI MEMADUKAN HARGA SEWA, WAKTU TEMPUH & KENYAMANAN HIDUP
              </h3>
              <a href="/methodology" className="statement-card-link">
                PELAJARI METODOLOGI &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Why Rent Alone Is Not Enough */}
        <section className="container steps" aria-labelledby="rent-problem-title">
          <div className="eyebrow">Analisis Realistis</div>
          <h2 id="rent-problem-title" className="section-title">
            Kenapa harga sewa saja tidak cukup?
          </h2>
          <div className="step-grid">
            {[
              ["01", "Hitung biaya nyata", "Gabungkan sewa, biaya rutin, dan perjalanan bulanan."],
              ["02", "Periksa kebutuhan wajib", "Pisahkan syarat yang harus tersedia dari preferensi tambahan."],
              ["03", "Pahami trade-off", "Lihat alasan skor dan data yang masih perlu dikonfirmasi."],
            ].map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Pilot Map Interactive Showcase Feature */}
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
                <a href="/explore" className="btn btn-editorial-start">
                  Buka Peta Eksplorasi Sekarang <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="map-showcase-visual">
              <div className="map-showcase-mockup">
                <PilotRadiusMockup />
                <div className="mockup-caption">
                  <strong>UI Depok • UNAND Padang • ITERA Lampung</strong>
                  <span>Garis putus-putus menunjukkan radius survei pilot 4 km</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Transparent Score Explanations */}
        <section className="container steps" aria-labelledby="transparent-score-title">
          <div className="panel editorial-transparency-panel">
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

        {/* Section 5: Feature Cards */}
        <div id="features">
          <LandingFeatures />
        </div>

        {/* Section 6: FAQ Accordion */}
        <div id="faq">
          <LandingFaq />
        </div>

        {/* Section 7: Final CTA Banner */}
        <section className="container steps" aria-labelledby="cta-title">
          <div className="panel cta-banner editorial-cta-banner">
            <div className="eyebrow">Mulai sekarang</div>
            <h2 id="cta-title" className="section-title">
              Siap Mengambil Keputusan Kos yang Tepat?
            </h2>
            <p className="lead">
              Gunakan KosMatch secara gratis tanpa daftar akun. Simpan data di perangkat Anda dan buat keputusan terbaik hari ini.
            </p>
            <div className="actions">
              <button className="btn btn-editorial-start" onClick={onStart}>
                Mulai Perbandingan Sekarang <ArrowRight size={18} />
              </button>
              <button className="btn btn-editorial-secondary" onClick={onDemo}>
                <Sparkles size={18} /> Coba Data Contoh
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Refined Minimalist Editorial Footer */}
      <footer className="footer-note editorial-footer">
        <div className="container">
          <p>KosMatch adalah alat bantu keputusan, bukan jaminan kualitas atau ketersediaan kos.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/methodology">
              Metodologi & Batasan
            </a>
            <a className="btn btn-ghost" href="/admin" title="Masuk ke portal pengelolaan kos bagi pemilik dan admin">
              Portal Pemilik & Admin
            </a>
            <button className="btn btn-editorial-pill" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
