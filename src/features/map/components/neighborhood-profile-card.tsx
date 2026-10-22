"use client";

import { Coffee, Footprints, Info, Landmark, MapPin, Navigation, ShoppingBag, ShoppingCart, Sparkles, Stethoscope, Utensils } from "lucide-react";
import type { NeighborhoodProfileResult } from "../services/neighborhood-service";

export interface NeighborhoodProfileCardProps {
  readonly profile: NeighborhoodProfileResult | null;
  readonly loading?: boolean;
  readonly currentRadiusMeters: number;
  readonly onRadiusChange: (radiusMeters: number) => void;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "food":
      return <Utensils size={15} color="var(--primary)" />;
    case "laundry":
      return <Sparkles size={15} color="var(--accent)" />;
    case "convenience":
      return <ShoppingCart size={15} color="#D97706" />;
    case "pharmacy":
      return <Stethoscope size={15} color="#DC2626" />;
    case "worship":
      return <Landmark size={15} color="#059669" />;
    case "bus_stop":
      return <Navigation size={15} color="#2563EB" />;
    case "atm":
      return <ShoppingBag size={15} color="#4F46E5" />;
    default:
      return <Coffee size={15} />;
  }
}

export function NeighborhoodProfileCard({
  profile,
  loading = false,
  currentRadiusMeters,
  onRadiusChange,
}: NeighborhoodProfileCardProps) {
  const radiuses = [500, 800, 1200] as const;

  return (
    <article className="panel" style={{ padding: "var(--space-4)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <div>
          <h3 style={{ fontSize: "16px", margin: "0 0 2px" }}>Profil Fasilitas Lingkungan</h3>
          <p className="muted" style={{ fontSize: "12px", margin: 0 }}>
            Kerapatan fasilitas harian di sekitar titik kos (radius jalan kaki lokal)
          </p>
        </div>
        {profile && (
          <span className={`badge ${profile.source === "vps-postgres" ? "good" : ""}`} style={{ fontSize: "11px" }}>
            {profile.source === "vps-postgres" ? "PostGIS VPS Live" : "Estimasi Pilot OSM"}
          </span>
        )}
      </div>

      {/* Radius Switcher */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", margin: "10px 0" }}>
        <span className="field-label" style={{ fontSize: "12px", marginRight: "4px" }}>
          Radius:
        </span>
        {radiuses.map((r) => (
          <button
            key={r}
            type="button"
            className={`chip ${currentRadiusMeters === r ? "selected" : ""}`}
            style={{ minHeight: "32px", padding: "4px 10px", fontSize: "12px" }}
            onClick={() => onRadiusChange(r)}
          >
            {r >= 1000 ? `${r / 1000} km` : `${r} m`}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ padding: "16px 0", display: "grid", gap: "8px" }}>
          <div className="skeleton" style={{ width: "100%", height: 36, borderRadius: "var(--radius-control)" }} />
          <div className="skeleton" style={{ width: "100%", height: 48, borderRadius: "var(--radius-control)" }} />
          <div className="skeleton" style={{ width: "100%", height: 48, borderRadius: "var(--radius-control)" }} />
        </div>
      ) : profile ? (
        <div style={{ display: "grid", gap: "10px" }}>
          {/* Score Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "var(--surface-subtle)",
              borderRadius: "var(--radius-control)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <span className="muted" style={{ fontSize: "11px", display: "block" }}>
                Skor Fasilitas
              </span>
              <strong style={{ fontSize: "20px", color: "var(--primary)" }}>
                {profile.scoreOutOf10.toFixed(1)}{" "}
                <small style={{ fontSize: "13px", fontWeight: "normal", color: "var(--text-muted)" }}>/ 10</small>
              </strong>
            </div>
            <div style={{ textAlign: "right" }}>
              <span className="muted" style={{ fontSize: "11px", display: "block" }}>
                Total POI
              </span>
              <strong style={{ fontSize: "16px" }}>{profile.totalPois} titik</strong>
            </div>
          </div>

          {/* Categories List */}
          <div style={{ display: "grid", gap: "6px" }}>
            {profile.items.map((item) => (
              <div
                key={item.category}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderBottom: "1px solid var(--surface-subtle)",
                  fontSize: "13px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {getCategoryIcon(item.category)}
                  <span>{item.categoryLabel}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontWeight: 750 }}>{item.count}</span>
                  {item.nearestMeters !== null && (
                    <span className="badge" style={{ fontSize: "11px", padding: "2px 6px" }}>
                      <Footprints size={11} style={{ display: "inline" }} /> {item.nearestMeters} m ({item.walkMinutes} mnt)
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="disclaimer" style={{ fontSize: "11px", margin: "4px 0 0" }}>
            <Info size={14} /> Fasilitas harian dalam radius jalan kaki ({currentRadiusMeters >= 1000 ? `${currentRadiusMeters / 1000} km` : `${currentRadiusMeters} m`}) sekitar kos (kecepatan 80 m/mnt), independen dari jarak ke kampus.
          </p>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "16px 0", color: "var(--text-muted)", fontSize: "13px" }}>
          <MapPin size={22} style={{ display: "block", margin: "0 auto 6px", color: "var(--primary)" }} />
          Pilih kos atau klik titik di peta untuk melihat fasilitas lingkungan terdekat.
        </div>
      )}
    </article>
  );
}
