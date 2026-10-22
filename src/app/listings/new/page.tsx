"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, CheckCircle2, Compass, Lock, LogIn, MapPin, PlusCircle, Scale, Sparkles } from "lucide-react";
import { PILOT_CONFIG } from "@/data/pilot-config";
import { fetchPointNeighborhoodProfile, type NeighborhoodProfileResult } from "@/features/map/services/neighborhood-service";
import { NeighborhoodProfileCard } from "@/features/map/components/neighborhood-profile-card";
import { formatRupiah } from "@/lib/currency";

const FACILITY_OPTIONS = [
  { code: "bathroom_inside", label: "Kamar Mandi Dalam" },
  { code: "wifi", label: "WiFi Cepat" },
  { code: "ac", label: "Air Conditioner (AC)" },
  { code: "desk_chair", label: "Meja & Kursi Belajar" },
  { code: "closet", label: "Lemari Pakaian" },
  { code: "shared_kitchen", label: "Dapur Bersama" },
  { code: "access_24h", label: "Akses 24 Jam" },
  { code: "parking_motorcycle", label: "Parkir Motor Aman" },
  { code: "parking_car", label: "Parkir Mobil" },
  { code: "water_heater", label: "Water Heater" },
];

export default function NewListingPage() {
  const [user, setUser] = useState<{ userId: string; email: string; role: string } | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [name, setName] = useState("");
  const [campusId, setCampusId] = useState(PILOT_CONFIG.primaryPilot.id);
  const [rentMonthly, setRentMonthly] = useState<number>(1500000);
  const [facilities, setFacilities] = useState<string[]>(["bathroom_inside", "wifi"]);
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState<number>(PILOT_CONFIG.primaryPilot.centerCoordinates.latitude);
  const [longitude, setLongitude] = useState<number>(PILOT_CONFIG.primaryPilot.centerCoordinates.longitude);

  const [neighborhoodProfile, setNeighborhoodProfile] = useState<NeighborhoodProfileResult | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [radiusMeters, setRadiusMeters] = useState(800);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{ id: string; message: string } | null>(null);

  // Check auth session
  useEffect(() => {
    let active = true;
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (data.user) setUser(data.user);
        setLoadingUser(false);
      })
      .catch(() => {
        if (active) setLoadingUser(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // When campus changes, update default coordinates to campus area
  const handleCampusChange = (id: string) => {
    setCampusId(id);
    const pilot = PILOT_CONFIG.allPilots.find((p) => p.id === id);
    if (pilot) {
      setLoadingProfile(true);
      setLatitude(pilot.centerCoordinates.latitude);
      setLongitude(pilot.centerCoordinates.longitude);
    }
  };

  // Toggle facility selection
  const toggleFacility = (code: string) => {
    setFacilities((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  // Live neighborhood amenity profiling for candidate coordinates
  useEffect(() => {
    let active = true;

    void fetchPointNeighborhoodProfile(latitude, longitude, radiusMeters)
      .then((profile) => {
        if (active) {
          setNeighborhoodProfile(profile);
          setLoadingProfile(false);
        }
      })
      .catch(() => {
        if (active) setLoadingProfile(false);
      });

    return () => {
      active = false;
    };
  }, [latitude, longitude, radiusMeters]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const payload = {
        name,
        campusId,
        rentMonthly: Number(rentMonthly),
        facilities,
        latitude: Number(latitude),
        longitude: Number(longitude),
        description,
        utilities: {},
        rules: {},
      };

      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Gagal mengirimkan listing kos");
        setSubmitting(false);
        return;
      }

      setSuccessResult({
        id: data.listingId,
        message: data.message || "Listing berhasil disimpan!",
      });
      setSubmitting(false);
    } catch {
      setErrorMsg("Koneksi gagal. Pastikan jaringan internet Anda aktif.");
      setSubmitting(false);
    }
  };

  if (loadingUser) {
    return (
      <div className="shell landing-shell" style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", color: "var(--text-muted)" }}>
          <div className="hud-dashed-radius-badge" style={{ margin: "0 auto 12px", width: "24px", height: "24px" }} />
          <p>Memverifikasi hak akses pendaftaran kos...</p>
        </div>
      </div>
    );
  }

  // GATE: Require owner or admin role
  if (!user || (user.role !== "admin" && user.role !== "owner")) {
    return (
      <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header className="topbar">
          <div className="container header-inner">
            <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="logo">
                <Building2 size={20} />
              </span>
              <span>KosMatch</span>
            </Link>
            <div className="actions compact">
              <Link className="btn btn-ghost" href="/">
                <ArrowLeft size={16} /> Kembali ke Beranda
              </Link>
            </div>
          </div>
        </header>

        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6) var(--space-4)" }}>
          <div className="panel" style={{ width: "100%", maxWidth: "480px", padding: "var(--space-6)", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(245, 158, 11, 0.15)",
                color: "#F59E0B",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 14px",
              }}
            >
              <Lock size={24} />
            </div>
            <div className="eyebrow">Akses Terbatas</div>
            <h1 style={{ fontSize: "22px", margin: "6px 0 8px" }}>Pendaftaran Kos Khusus Pemilik & Admin</h1>
            <p className="muted" style={{ fontSize: "14px", margin: "0 0 20px" }}>
              Untuk menjaga integritas dan transparansi data, pendaftaran unit kos hanya dapat dilakukan oleh akun dengan peran <strong>Pemilik Kos</strong> atau <strong>Administrator</strong>.
            </p>

            <div style={{ display: "grid", gap: "10px" }}>
              <Link href="/admin" className="btn btn-primary" style={{ minHeight: "42px" }}>
                <LogIn size={16} /> Masuk ke Portal Pemilik / Admin
              </Link>
              <Link href="/auth/login" className="btn btn-ghost" style={{ minHeight: "38px" }}>
                Daftar Akun Pemilik Kos
              </Link>
              <Link href="/" className="btn btn-ghost" style={{ minHeight: "38px" }}>
                <ArrowLeft size={16} /> Kembali ke Beranda
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar">
        <div className="container header-inner">
          <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="logo">
              <Scale size={21} aria-hidden="true" />
            </span>
            <span>KosMatch</span>
          </Link>
          <div className="actions compact">
            <Link className="btn btn-ghost" href="/admin">
              <ArrowLeft size={16} /> Dashboard Pengelola
            </Link>
            <Link className="btn btn-ghost" href="/explore">
              <Compass size={16} /> Peta Eksplorasi
            </Link>
          </div>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "var(--space-6) var(--space-4)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "var(--space-5)" }}>
            <div className="eyebrow">Fase 2 · Kontribusi Komunitas</div>
            <h1 style={{ fontSize: "26px", margin: "4px 0 8px" }}>Tambah Listing Kos Baru</h1>
            <p className="muted" style={{ fontSize: "14px", margin: 0 }}>
              Bantu rekan mahasiswa mendapatkan informasi tempat tinggal yang transparan, jujur, dan terverifikasi di sekitar kampus pilot.
            </p>
          </div>

          {successResult ? (
            <article className="panel" style={{ padding: "var(--space-6)", textAlign: "center" }}>
              <CheckCircle2 size={48} color="var(--primary)" style={{ margin: "0 auto 12px" }} />
              <h2 style={{ fontSize: "20px", margin: "0 0 8px" }}>Terima Kasih atas Kontribusi Anda!</h2>
              <p className="muted" style={{ fontSize: "14px", maxWidth: "540px", margin: "0 auto 20px" }}>
                {successResult.message} Data titik lokasi telah tersimpan di basis data geospasial PostgreSQL VPS.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link className="btn btn-primary" href="/admin">
                  Kembali ke Dashboard Pengelola
                </Link>
                <Link className="btn btn-ghost" href="/explore">
                  Lihat di Peta Eksplorasi
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSuccessResult(null);
                    setName("");
                    setDescription("");
                  }}
                >
                  Tambah Kos Lainnya
                </button>
              </div>
            </article>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-5)", alignItems: "start" }}>
              {/* Form Input */}
              <form onSubmit={handleSubmit} className="panel" style={{ padding: "var(--space-5)", display: "grid", gap: "var(--space-4)" }}>
                {errorMsg && (
                  <div
                    className="panel"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      borderColor: "#EF4444",
                      color: "#DC2626",
                      padding: "10px 14px",
                      fontSize: "13px",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Nama Kos */}
                <div>
                  <label className="field-label" htmlFor="listing-name" style={{ fontSize: "13px" }}>
                    Nama Tempat Kos:
                  </label>
                  <input
                    id="listing-name"
                    type="text"
                    required
                    className="field-input"
                    style={{ width: "100%", marginTop: "4px" }}
                    placeholder="Contoh: Wisma Asri Kukusan Mandiri"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Pilihan Kampus Pilot */}
                <div>
                  <span className="field-label" style={{ fontSize: "13px", display: "block", marginBottom: "6px" }}>
                    Kampus Pilot Terdekat:
                  </span>
                  <div className="chips" style={{ gap: "6px" }}>
                    {PILOT_CONFIG.allPilots.map((pilot) => (
                      <button
                        key={pilot.id}
                        type="button"
                        className={`chip ${campusId === pilot.id ? "selected" : ""}`}
                        style={{ fontSize: "12px", minHeight: "32px" }}
                        onClick={() => handleCampusChange(pilot.id)}
                      >
                        <Building2 size={14} /> {pilot.campusName.split(" (")[0]} ({pilot.city})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sewa Bulanan */}
                <div>
                  <label className="field-label" htmlFor="listing-rent" style={{ fontSize: "13px" }}>
                    Sewa Bulanan Pokok (Rp):
                  </label>
                  <input
                    id="listing-rent"
                    type="number"
                    required
                    min={0}
                    max={100000000}
                    step={50000}
                    className="field-input"
                    style={{ width: "100%", marginTop: "4px" }}
                    value={rentMonthly}
                    onChange={(e) => setRentMonthly(Number(e.target.value))}
                  />
                  <span className="muted" style={{ fontSize: "12px", marginTop: "4px", display: "block" }}>
                    Terbaca: <strong>{formatRupiah(rentMonthly)} / bulan</strong>
                  </span>
                </div>

                {/* Fasilitas Checkbox Chips */}
                <div>
                  <span className="field-label" style={{ fontSize: "13px", display: "block", marginBottom: "6px" }}>
                    Fasilitas Tersedia:
                  </span>
                  <div className="chips" style={{ gap: "6px" }}>
                    {FACILITY_OPTIONS.map((fac) => {
                      const isSelected = facilities.includes(fac.code);
                      return (
                        <button
                          key={fac.code}
                          type="button"
                          className={`chip ${isSelected ? "selected" : ""}`}
                          style={{ fontSize: "11px", padding: "4px 8px", minHeight: "28px" }}
                          onClick={() => toggleFacility(fac.code)}
                        >
                          <Sparkles size={12} /> {fac.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Koordinat Geospasial */}
                <div>
                  <span className="field-label" style={{ fontSize: "13px", display: "block", marginBottom: "4px" }}>
                    Titik Koordinat (PostGIS WGS 84):
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <div>
                      <label htmlFor="geo-lat" style={{ fontSize: "11px", color: "var(--text-muted)" }}>Lintang (Lat):</label>
                      <input
                        id="geo-lat"
                        type="number"
                        step="any"
                        required
                        className="field-input"
                        style={{ width: "100%", fontFamily: "monospace", fontSize: "12px" }}
                        value={latitude}
                        onChange={(e) => setLatitude(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      <label htmlFor="geo-lng" style={{ fontSize: "11px", color: "var(--text-muted)" }}>Bujur (Lng):</label>
                      <input
                        id="geo-lng"
                        type="number"
                        step="any"
                        required
                        className="field-input"
                        style={{ width: "100%", fontFamily: "monospace", fontSize: "12px" }}
                        value={longitude}
                        onChange={(e) => setLongitude(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                {/* Deskripsi */}
                <div>
                  <label className="field-label" htmlFor="listing-desc" style={{ fontSize: "13px" }}>
                    Deskripsi & Catatan Verifikasi:
                  </label>
                  <textarea
                    id="listing-desc"
                    rows={3}
                    className="field-input"
                    style={{ width: "100%", marginTop: "4px" }}
                    placeholder="Contoh: Termasuk listrik 900W, dekat gerbang Kutek, lingkungan tenang untuk belajar..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ minHeight: "44px", marginTop: "var(--space-2)" }}
                >
                  <PlusCircle size={17} /> {submitting ? "Menyimpan ke VPS..." : "Kirim Listing Kos Komunitas"}
                </button>
              </form>

              {/* Live Spatial Amenities Preview */}
              <div>
                <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Compass size={16} color="var(--primary)" />
                  <strong style={{ fontSize: "14px" }}>Pratinjau Fasilitas Otomatis</strong>
                </div>
                <NeighborhoodProfileCard
                  profile={neighborhoodProfile}
                  loading={loadingProfile}
                  currentRadiusMeters={radiusMeters}
                  onRadiusChange={setRadiusMeters}
                />
                <p className="disclaimer" style={{ fontSize: "12px", marginTop: "8px" }}>
                  <MapPin size={14} style={{ display: "inline" }} /> Saat koordinat dimasukkan, PostGIS di VPS secara otomatis memprofilkan warung makan, laundry, dan minimarket terdekat dalam radius {radiusMeters} meter.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
