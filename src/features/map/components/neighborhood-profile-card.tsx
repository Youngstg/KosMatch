"use client";

import {
  Bus,
  CreditCard,
  Footprints,
  Info,
  Landmark,
  MapPin,
  Pill,
  Shirt,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import type { NeighborhoodProfileResult } from "../services/neighborhood-service";
import { estimateFoodCost } from "@/domain/costing/food-cost-estimator";
import { formatRupiah } from "@/lib/currency";

export interface NeighborhoodProfileCardProps {
  readonly profile: NeighborhoodProfileResult | null;
  readonly loading?: boolean;
  readonly currentRadiusMeters: number;
  readonly onRadiusChange: (radiusMeters: number) => void;
  readonly campusId?: string;
  readonly area?: string;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "food":
      return <UtensilsCrossed size={15} color="#F97316" />;
    case "laundry":
      return <Shirt size={15} color="#06B6D4" />;
    case "convenience":
      return <Store size={15} color="#10B981" />;
    case "pharmacy":
      return <Pill size={15} color="#F43F5E" />;
    case "worship":
      return <Landmark size={15} color="#8B5CF6" />;
    case "bus_stop":
      return <Bus size={15} color="#EAB308" />;
    case "atm":
      return <CreditCard size={15} color="#3B82F6" />;
    default:
      return <MapPin size={15} color="var(--primary)" />;
  }
}

export function NeighborhoodProfileCard({
  profile,
  loading = false,
  currentRadiusMeters,
  onRadiusChange,
  campusId = "ui-depok",
  area = "",
}: NeighborhoodProfileCardProps) {
  const radiuses = [500, 800, 1200] as const;
  const foodItem = profile?.items.find((i) => i.category === "food");
  const foodEstimate =
    foodItem && foodItem.count > 0
      ? estimateFoodCost(campusId, area, foodItem.count, foodItem.nearestMeters)
      : null;

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

          {/* Tahap B Roadmap ML: Estimasi Biaya Makan Realistis per Area */}
          {foodEstimate && (
            <div
              style={{
                padding: "10px 12px",
                background: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                borderRadius: "var(--radius-control)",
                fontSize: "12px",
                display: "grid",
                gap: "4px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 600, color: "#EA580C" }}>
                  🍜 Estimasi Biaya Makan Sekitar
                </span>
                <span className="badge" style={{ fontSize: "10px", padding: "1px 6px" }}>
                  {foodEstimate.clusterLabel}
                </span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)" }}>
                {formatRupiah(foodEstimate.monthlyCostEstimate.min)} – {formatRupiah(foodEstimate.monthlyCostEstimate.max)}
                <span style={{ fontSize: "11px", fontWeight: "normal", color: "var(--text-muted)" }}> / bln</span>
              </div>
              <p style={{ margin: 0, fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.35 }}>
                {foodEstimate.explanation}
              </p>
            </div>
          )}

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
