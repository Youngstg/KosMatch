"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Play, Save, Sparkles } from "lucide-react";
import { LandingFaq } from "./landing-faq";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

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
      {/* =========================================================================
          HERO SECTION: FULLSCREEN ARCHITECTURAL CANVAS (RANTY REFERENCE STYLE)
          Full-bleed landscape background image with content layered directly on top
      ========================================================================== */}
      <section className="hero-editorial-fullscreen" aria-label="Beranda KosMatch">
        {/* Editorial Floating Glass Header */}
        <header className="topbar editorial-topbar">
          <div className="container header-inner">
            <Brand />
            <nav className="editorial-topbar-nav" aria-label="Navigasi Halaman">
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

        {/* Hero Body: Content layered over the full landscape */}
        <div className="container hero-editorial-body">
          {/* Top Hero Grid: Left Typography + Right Floating Architectural Card */}
          <div className="hero-editorial-grid">
            {/* Left Column: High-Fashion Serif Headline & DSS Actions */}
            <div className="hero-editorial-left">
              <div className="hero-pilot-pill editorial-pill">
                <span className="live-indicator" />
                <span>KATALOG KAMPUS TERPADU • UI • UNAND • ITERA</span>
              </div>

              <div className="hero-editorial-title-wrap">
                <span className="hero-editorial-super">THE PERFECT KOS®</span>
                <div className="hero-editorial-sub">/ Temukan &amp; Bandingkan Kos Terbaik /</div>
                <h1 className="hero-editorial-h1">Kos murah belum tentu paling hemat.</h1>
              </div>

              <p className="lead editorial-lead">
                Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan dan terukur berbasis PostGIS.
              </p>

              <div className="actions editorial-actions">
                <button className="btn btn-editorial-start" onClick={onStart}>
                  Mulai Perbandingan <ArrowRight size={18} />
                </button>
                <button className="btn btn-editorial-secondary" onClick={onDemo}>
                  <Sparkles size={16} /> Coba Data Contoh
                </button>
                <a className="btn btn-editorial-outline" href="/explore">
                  <Compass size={16} /> Buka Peta Kampus
                </a>
                {hasSaved && (
                  <button className="btn btn-editorial-ghost" onClick={onResume}>
                    <Save size={16} /> Lanjutkan proyek
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Floating Architectural Card with Hotspots & Roomtour */}
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
                  <h2 className="editorial-card-title">Desain Nyaman &amp; Efisiensi</h2>
                  <p className="editorial-card-subtitle">Dari blueprints hingga simulasi harian.</p>

                  {/* Hotspots & Roomtour Preview Overlay */}
                  <div className="editorial-hotspot-container">
                    {/* Interactive Hotspot 1: Roomtour */}
                    <div
                      className={`editorial-hotspot hotspot-roomtour ${activeHotspot === "roomtour" ? "active" : ""}`}
                      onClick={() => setActiveHotspot("roomtour")}
                    >
                      <span className="hotspot-pulse" />
                      <span className="hotspot-dot" />

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
                          <span className="callout-sub">AC &amp; Meja Belajar</span>
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
                        <span>🍲 Warung &amp; Laundry &lt; 100m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Trio (Directly layered on top of the foreground meadow) */}
          <div className="hero-editorial-trio">
            {/* Card 1: Warm Clay Brown Box with 3D Cutaway Diagram */}
            <div className="editorial-trio-card clay-card">
              <div className="clay-card-content">
                <h3 className="clay-card-title">Kebutuhan Wajib Terpenuhi!</h3>
                <p className="clay-card-sub">Material &amp; fasilitas kos terverifikasi tim survei.</p>
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
              <div className="stat-card-caption">Objektif &amp; Terverifikasi PostGIS</div>
              <div className="stat-card-sub">12k+ Simulasi Keputusan Kos</div>
            </div>

            {/* Card 3: Big Architectural Headline */}
            <div className="editorial-trio-card statement-card">
              <h3 className="statement-card-title">
                KAMI MEMADUKAN HARGA SEWA, WAKTU TEMPUH &amp; KENYAMANAN HIDUP
              </h3>
              <a href="/methodology" className="statement-card-link">
                PELAJARI METODOLOGI &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Clean FAQ Section */}
      <main>
        <div id="faq">
          <LandingFaq />
        </div>
      </main>

      {/* Refined Minimalist Editorial Footer */}
      <footer className="footer-note editorial-footer">
        <div className="container">
          <p>KosMatch adalah sistem pendukung keputusan pemilihan kos multi-kriteria berbasis geospatial PostGIS.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/methodology">
              Metodologi &amp; Batasan
            </a>
            <a className="btn btn-ghost" href="/admin" title="Masuk ke portal pengelolaan kos bagi pemilik dan admin">
              Portal Pemilik &amp; Admin
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
