"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  Compass,
  DollarSign,
  Zap,
  Droplets,
  Wifi,
  Shirt,
  Calendar,
  Navigation,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Info,
} from "lucide-react";

interface CostState {
  rent: number;
  electricity: number;
  electricityIncluded: boolean;
  water: number;
  waterIncluded: boolean;
  internet: number;
  internetIncluded: boolean;
  laundry: number;
  laundrySelfWash: boolean;
  commuteDays: number;
  dailyTransportCost: number;
}

const DEFAULT_COST_STATE: CostState = {
  rent: 1200000,
  electricity: 150000,
  electricityIncluded: false,
  water: 50000,
  waterIncluded: false,
  internet: 100000,
  internetIncluded: false,
  laundry: 120000,
  laundrySelfWash: false,
  commuteDays: 22,
  dailyTransportCost: 14000,
};

const STORAGE_KEY = "kosmatch_manual_calculator_state";

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ManualCostCalculator({
  isGuest = false,
  onSaveToProject,
}: {
  isGuest?: boolean;
  onSaveToProject?: (optionData: {
    name: string;
    rent: number;
    electricity: number;
    water: number;
    internet: number;
    laundry: number;
    commuteDays: number;
    dailyTransportCost: number;
  }) => void;
}) {
  const [state, setState] = useState<CostState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...DEFAULT_COST_STATE, ...parsed };
        }
      } catch {
        // Fallback ke default
      }
    }
    return DEFAULT_COST_STATE;
  });
  const [optionName, setOptionName] = useState("Simulasi Kos Saya");

  // Simpan perubahan ke localStorage
  const updateState = (updater: Partial<CostState>) => {
    setState((prev) => {
      const next = { ...prev, ...updater };
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore storage error
        }
      }
      return next;
    });
  };

  const handleReset = () => {
    setState(DEFAULT_COST_STATE);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Kalkulasi Biaya Riil
  const calc = useMemo(() => {
    const rentAmount = Math.max(0, state.rent || 0);
    const elecAmount = state.electricityIncluded ? 0 : Math.max(0, state.electricity || 0);
    const waterAmount = state.waterIncluded ? 0 : Math.max(0, state.water || 0);
    const netAmount = state.internetIncluded ? 0 : Math.max(0, state.internet || 0);
    const laundryAmount = state.laundrySelfWash ? 0 : Math.max(0, state.laundry || 0);
    const utilitiesTotal = elecAmount + waterAmount + netAmount + laundryAmount;

    const days = Math.max(0, Math.min(31, state.commuteDays || 0));
    const transportDaily = Math.max(0, state.dailyTransportCost || 0);
    const transportTotal = days * transportDaily;

    const monthlyTotal = rentAmount + utilitiesTotal + transportTotal;
    const sixMonthsTotal = monthlyTotal * 6;
    const oneYearTotal = monthlyTotal * 12;

    const hiddenCostMonthly = utilitiesTotal + transportTotal;
    const markupPercent = rentAmount > 0 ? Math.round((hiddenCostMonthly / rentAmount) * 100) : 0;

    const rentPercent = monthlyTotal > 0 ? Math.round((rentAmount / monthlyTotal) * 100) : 0;
    const utilPercent = monthlyTotal > 0 ? Math.round((utilitiesTotal / monthlyTotal) * 100) : 0;
    const transPercent = monthlyTotal > 0 ? Math.max(0, 100 - rentPercent - utilPercent) : 0;

    return {
      rentAmount,
      elecAmount,
      waterAmount,
      netAmount,
      laundryAmount,
      utilitiesTotal,
      days,
      transportDaily,
      transportTotal,
      monthlyTotal,
      sixMonthsTotal,
      oneYearTotal,
      hiddenCostMonthly,
      markupPercent,
      rentPercent,
      utilPercent,
      transPercent,
    };
  }, [state]);

  return (
    <div className="manual-calculator-container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.5rem 1rem" }}>
      {/* Header Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #184E77 0%, #1A759F 100%)",
          borderRadius: "16px",
          padding: "2rem",
          color: "#FFFFFF",
          marginBottom: "2rem",
          boxShadow: "0 10px 25px -5px rgba(24, 78, 119, 0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              <Calculator size={15} /> Kalkulator Biaya Nyata (True Cost of Living) {isGuest && "· Tamu"}
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 700, margin: "0 0 0.5rem 0", lineHeight: 1.2 }}>
              Hitung Pengeluaran Asli Kos Anda
            </h1>
            <p style={{ margin: 0, opacity: 0.9, maxWidth: "620px", fontSize: "0.95rem", lineHeight: 1.5 }}>
              Harga sewa iklan bukan total pengeluaran Anda. Masukkan komponen biaya di bawah ini untuk melihat estimasi pengeluaran riil setiap bulan tanpa biaya tersembunyi.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              borderRadius: "10px",
              padding: "8px 14px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
        {/* Kolom Kiri: Form Input Komponen Biaya */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Card 1: Sewa Pokok */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 3px rgba(16, 24, 40, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#EFF8FF", color: "#175CD3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <DollarSign size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#101828" }}>Harga Sewa Pokok</h3>
                <span style={{ fontSize: "0.8rem", color: "#667085" }}>Biaya sewa kamar yang tertera di iklan / brosur</span>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "#344054", marginBottom: "6px" }}>
                Nama Opsi / Kos (Opsional)
              </label>
              <input
                type="text"
                value={optionName}
                onChange={(e) => setOptionName(e.target.value)}
                placeholder="Contoh: Kos Melati Dekat Gerbatama"
                style={{ width: "100%", padding: "10px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.95rem" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "#344054", marginBottom: "6px" }}>
                Sewa per Bulan (Rp)
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#667085", fontWeight: 600, fontSize: "0.9rem" }}>
                  Rp
                </span>
                <input
                  type="number"
                  min="0"
                  step="50000"
                  value={state.rent || ""}
                  onChange={(e) => updateState({ rent: Number(e.target.value) })}
                  style={{ width: "100%", padding: "10px 12px 10px 42px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "1rem", fontWeight: 600 }}
                />
              </div>
              <div style={{ display: "flex", gap: "6px", marginTop: "8px", flexWrap: "wrap" }}>
                {[800000, 1200000, 1600000, 2200000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => updateState({ rent: val })}
                    style={{ fontSize: "0.75rem", padding: "4px 8px", background: state.rent === val ? "#184E77" : "#F2F4F7", color: state.rent === val ? "#FFF" : "#344054", border: "none", borderRadius: "6px", cursor: "pointer" }}
                  >
                    {formatRupiah(val)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Biaya Utilitas Rutin */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 3px rgba(16, 24, 40, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#FEF6EE", color: "#B54708", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#101828" }}>Utilitas & Kebutuhan Rutin</h3>
                <span style={{ fontSize: "0.8rem", color: "#667085" }}>Listrik, air, internet, dan cuci baju</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Listrik */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 500, color: "#344054" }}>
                    <Zap size={15} color="#D97706" /> Listrik Bulanan
                  </label>
                  <label style={{ fontSize: "0.75rem", color: "#667085", display: "inline-flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={state.electricityIncluded}
                      onChange={(e) => updateState({ electricityIncluded: e.target.checked })}
                    />
                    Termasuk sewa
                  </label>
                </div>
                {!state.electricityIncluded && (
                  <input
                    type="number"
                    min="0"
                    step="25000"
                    value={state.electricity || ""}
                    onChange={(e) => updateState({ electricity: Number(e.target.value) })}
                    placeholder="Estimasi token listrik (Rp/bln)"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.9rem" }}
                  />
                )}
              </div>

              {/* Air */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 500, color: "#344054" }}>
                    <Droplets size={15} color="#0284C7" /> Air & Iuran Sampah
                  </label>
                  <label style={{ fontSize: "0.75rem", color: "#667085", display: "inline-flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={state.waterIncluded}
                      onChange={(e) => updateState({ waterIncluded: e.target.checked })}
                    />
                    Termasuk sewa
                  </label>
                </div>
                {!state.waterIncluded && (
                  <input
                    type="number"
                    min="0"
                    step="10000"
                    value={state.water || ""}
                    onChange={(e) => updateState({ water: Number(e.target.value) })}
                    placeholder="Estimasi iuran air (Rp/bln)"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.9rem" }}
                  />
                )}
              </div>

              {/* Internet */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 500, color: "#344054" }}>
                    <Wifi size={15} color="#7C3AED" /> Internet / Wi-Fi
                  </label>
                  <label style={{ fontSize: "0.75rem", color: "#667085", display: "inline-flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={state.internetIncluded}
                      onChange={(e) => updateState({ internetIncluded: e.target.checked })}
                    />
                    Wi-Fi Kos Gratis
                  </label>
                </div>
                {!state.internetIncluded && (
                  <input
                    type="number"
                    min="0"
                    step="25000"
                    value={state.internet || ""}
                    onChange={(e) => updateState({ internet: Number(e.target.value) })}
                    placeholder="Paket data / iuran internet (Rp/bln)"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.9rem" }}
                  />
                )}
              </div>

              {/* Laundry */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 500, color: "#344054" }}>
                    <Shirt size={15} color="#059669" /> Laundry Pakaian
                  </label>
                  <label style={{ fontSize: "0.75rem", color: "#667085", display: "inline-flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={state.laundrySelfWash}
                      onChange={(e) => updateState({ laundrySelfWash: e.target.checked })}
                    />
                    Cuci sendiri
                  </label>
                </div>
                {!state.laundrySelfWash && (
                  <input
                    type="number"
                    min="0"
                    step="20000"
                    value={state.laundry || ""}
                    onChange={(e) => updateState({ laundry: Number(e.target.value) })}
                    placeholder="Estimasi laundry kiloan (Rp/bln)"
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.9rem" }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Card 3: Biaya Mobilitas & Transportasi */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E4E7EC", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 3px rgba(16, 24, 40, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#FDF2FA", color: "#C11574", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Navigation size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#101828" }}>Transportasi ke Kampus/Tujuan</h3>
                <span style={{ fontSize: "0.8rem", color: "#667085" }}>Ongkos mobilitas bolak-balik per hari</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "#344054", marginBottom: "6px" }}>
                  <Calendar size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  Hari Kuliah/Kerja
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    min="0"
                    max="31"
                    value={state.commuteDays || ""}
                    onChange={(e) => updateState({ commuteDays: Number(e.target.value) })}
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.95rem" }}
                  />
                  <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "0.8rem", color: "#98A2B3" }}>
                    hari/bln
                  </span>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "#344054", marginBottom: "6px" }}>
                  Ongkos Bolak-Balik
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#667085", fontSize: "0.85rem" }}>
                    Rp
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="2000"
                    value={state.dailyTransportCost || ""}
                    onChange={(e) => updateState({ dailyTransportCost: Number(e.target.value) })}
                    style={{ width: "100%", padding: "8px 12px 8px 36px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.95rem" }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
              {[
                { label: "Jalan Kaki (Rp 0)", cost: 0 },
                { label: "Bensin Motor (Rp 6.000)", cost: 6000 },
                { label: "Angkot/Trans (Rp 8.000)", cost: 8000 },
                { label: "Ojek Online (Rp 18.000)", cost: 18000 },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => updateState({ dailyTransportCost: item.cost })}
                  style={{ fontSize: "0.75rem", padding: "4px 8px", background: state.dailyTransportCost === item.cost ? "#184E77" : "#F8F9FA", color: state.dailyTransportCost === item.cost ? "#FFF" : "#475467", border: "1px solid #EAECF0", borderRadius: "6px", cursor: "pointer" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Rangkuman Biaya Nyata Real-Time */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "2px solid #184E77",
              borderRadius: "16px",
              padding: "1.75rem",
              boxShadow: "0 10px 20px -3px rgba(24, 78, 119, 0.08)",
              position: "sticky",
              top: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#184E77", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Total Pengeluaran Asli
              </span>
              <span style={{ background: "#ECFDF3", color: "#027A48", fontSize: "0.75rem", fontWeight: 600, padding: "3px 8px", borderRadius: "12px" }}>
                Real-Time
              </span>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#101828", lineHeight: 1.1 }}>
                {formatRupiah(calc.monthlyTotal)}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#667085", marginTop: "4px" }}>
                per bulan (riil disiapkan)
              </div>
            </div>

            {/* Markup Alert (Highlight Biaya Tersembunyi) */}
            {calc.hiddenCostMonthly > 0 && (
              <div
                style={{
                  background: "#FEF3F2",
                  border: "1px solid #FECDCA",
                  borderRadius: "10px",
                  padding: "12px",
                  marginBottom: "1.5rem",
                  fontSize: "0.85rem",
                  color: "#B42318",
                  lineHeight: 1.45,
                }}
              >
                <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                  <Sparkles size={16} /> Biaya Tambahan di Luar Sewa:
                </div>
                Tambahan <strong>+{formatRupiah(calc.hiddenCostMonthly)}</strong>/bulan (+{calc.markupPercent}% dari harga sewa) untuk utilitas dan transportasi harian.
              </div>
            )}

            {/* Breakdown Visual Bar */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#667085", marginBottom: "6px" }}>
                <span>Proporsi Biaya</span>
                <span>{calc.rentPercent}% Sewa · {calc.utilPercent}% Utilitas · {calc.transPercent}% Transport</span>
              </div>
              <div style={{ height: "10px", borderRadius: "5px", background: "#EAECF0", display: "flex", overflow: "hidden" }}>
                <div style={{ width: `${calc.rentPercent}%`, background: "#184E77" }} title={`Sewa ${calc.rentPercent}%`} />
                <div style={{ width: `${calc.utilPercent}%`, background: "#F59E0B" }} title={`Utilitas ${calc.utilPercent}%`} />
                <div style={{ width: `${calc.transPercent}%`, background: "#EC4899" }} title={`Transport ${calc.transPercent}%`} />
              </div>
            </div>

            {/* Rincian Komponen Bulanan */}
            <div style={{ borderTop: "1px solid #F2F4F7", borderBottom: "1px solid #F2F4F7", padding: "1rem 0", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#475467" }}>Sewa Pokok Kamar:</span>
                <strong style={{ color: "#101828" }}>{formatRupiah(calc.rentAmount)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#475467" }}>Total Utilitas Rutin:</span>
                <span style={{ color: "#101828" }}>{formatRupiah(calc.utilitiesTotal)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#475467" }}>Transportasi ({calc.days} hari):</span>
                <span style={{ color: "#101828" }}>{formatRupiah(calc.transportTotal)}</span>
              </div>
            </div>

            {/* Proyeksi Jangka Panjang */}
            <div style={{ background: "#F8F9FA", borderRadius: "10px", padding: "12px", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#667085", textTransform: "uppercase" }}>
                Proyeksi Pengeluaran Total
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "6px" }}>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#475467" }}>Per 1 Semester (6 bln)</div>
                  <strong style={{ fontSize: "1rem", color: "#101828" }}>{formatRupiah(calc.sixMonthsTotal)}</strong>
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#475467" }}>Per 1 Tahun (12 bln)</div>
                  <strong style={{ fontSize: "1rem", color: "#101828" }}>{formatRupiah(calc.oneYearTotal)}</strong>
                </div>
              </div>
            </div>

            {/* Aksi / CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {onSaveToProject && (
                <button
                  type="button"
                  onClick={() =>
                    onSaveToProject({
                      name: optionName || "Simulasi Kos",
                      rent: calc.rentAmount,
                      electricity: calc.elecAmount,
                      water: calc.waterAmount,
                      internet: calc.netAmount,
                      laundry: calc.laundryAmount,
                      commuteDays: calc.days,
                      dailyTransportCost: calc.transportDaily,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#184E77",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  Simpan ke Proyek Perbandingan DSS <ArrowRight size={16} />
                </button>
              )}

              <Link
                href="/explore"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#F2F4F7",
                  color: "#344054",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Compass size={16} /> Cari & Pilih Kos di Peta Kampus
              </Link>
            </div>

            <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#98A2B3", display: "flex", alignItems: "center", gap: "6px" }}>
              <Info size={14} />
              Isian tersimpan otomatis di perangkat Anda (offline & aman).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
