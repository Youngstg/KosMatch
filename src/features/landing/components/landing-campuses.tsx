"use client";

import Link from "next/link";
import { CAMPUSES } from "@/data/campuses";
import { PILOT_CONFIG } from "@/data/pilot-config";
import { Compass, MapPin, Sparkles } from "lucide-react";

export function LandingCampuses() {
  const pilotCampusIds = [
    PILOT_CONFIG.primaryPilot.campusId,
    PILOT_CONFIG.secondaryPilot.campusId,
  ];

  return (
    <section id="campuses" className="container steps landing-campuses-section" aria-labelledby="campuses-section-title">
      <div className="eyebrow">Dukungan Multi-Kampus</div>
      <h2 id="campuses-section-title" className="section-title">
        Kampus yang Didukung KosMatch
      </h2>
      <p className="lead">
        KosMatch memetakan titik gerbang dan rute riil kampus agar mahasiswa perantau dapat mengukur jarak tempuh, ongkos harian, serta fasilitas lingkungan kos secara akurat.
      </p>

      {/* Pilot Highlights Banner */}
      <div
        className="panel"
        style={{
          background: "linear-gradient(135deg, rgba(224, 169, 109, 0.12) 0%, rgba(17, 18, 20, 0.8) 100%)",
          border: "1px solid rgba(224, 169, 109, 0.3)",
          borderRadius: "var(--radius-panel, 16px)",
          padding: "var(--space-5, 20px)",
          marginBottom: "var(--space-6, 24px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#E0A96D", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
            <Sparkles size={14} /> Peta Interaktif &amp; Profil Lingkungan Lengkap
          </div>
          <h3 style={{ margin: "0 0 6px", fontSize: "18px", color: "var(--foreground, #FFF)" }}>
            Pilot Khusus: UI Depok &amp; Unand Padang
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
            Tersedia katalog kos terverifikasi lengkap dengan titik gerbang kampus, rute pejalan kaki / motor, serta pemetaan fasilitas sekitar (warung makan, minimarket, laundry, dan ATM).
          </p>
        </div>
        <Link
          href="/explore"
          className="btn btn-editorial-start"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            fontSize: "13px",
            padding: "8px 18px",
            whiteSpace: "nowrap",
          }}
        >
          <Compass size={16} /> Buka Peta Kampus &rarr;
        </Link>
      </div>

      {/* Grid of All Supported Campuses */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
        }}
      >
        {CAMPUSES.map((campus) => {
          const isPilot = pilotCampusIds.includes(campus.id);

          return (
            <div
              key={campus.id}
              style={{
                background: "var(--surface, #18191c)",
                border: isPilot ? "1px solid rgba(224, 169, 109, 0.4)" : "1px solid var(--border, #2d2e33)",
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                transition: "transform 0.15s ease, border-color 0.15s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "14px",
                      color: isPilot ? "#E0A96D" : "var(--foreground, #FFF)",
                      background: isPilot ? "rgba(224, 169, 109, 0.15)" : "rgba(255, 255, 255, 0.06)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {campus.shortName}
                  </span>
                  {isPilot ? (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#E0A96D",
                        background: "rgba(224, 169, 109, 0.15)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontWeight: 600,
                      }}
                    >
                      Peta + POI
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255, 255, 255, 0.5)",
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      DSS Siap
                    </span>
                  )}
                </div>
                <h4 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: 600, color: "var(--foreground, #FFF)", lineHeight: 1.4 }}>
                  {campus.name}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}>
                  <MapPin size={12} />
                  <span>{campus.city}</span>
                </div>
              </div>

              <div style={{ paddingTop: "8px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)" }}>
                  {isPilot ? "Radius 3 km terpetakan" : "Titik koordinat terdaftar"}
                </span>
                <Link
                  href={isPilot ? `/explore` : `/calculator`}
                  style={{
                    fontSize: "12px",
                    color: "#E0A96D",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {isPilot ? "Lihat Peta \u2192" : "Pilih Kampus \u2192"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

