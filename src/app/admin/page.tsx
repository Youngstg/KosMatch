"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  ExternalLink,
  Lock,
  LogIn,
  LogOut,
  MapPin,
  PlusCircle,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { PILOT_CONFIG } from "@/data/pilot-config";
import { formatRupiah } from "@/lib/currency";

interface UserProfile {
  userId: string;
  email: string;
  role: "user" | "owner" | "admin";
}

interface KosListingItem {
  id: string;
  name: string;
  campusId: string;
  rentMonthly: number;
  facilities: string[];
  status: "verified" | "pending" | "rejected";
  latitude?: number;
  longitude?: number;
  description?: string;
  createdAt?: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [listings, setListings] = useState<KosListingItem[]>([]);
  const [loadingListings, setLoadingListings] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "verified">("all");
  const [refreshKey, setRefreshKey] = useState(0);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  // Quick login states for gate
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // 1. Check current auth session
  useEffect(() => {
    let active = true;
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (data.user) {
          setUser(data.user);
        }
        setLoadingUser(false);
      })
      .catch(() => {
        if (active) setLoadingUser(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // 2. Fetch listings for admin / owner
  useEffect(() => {
    if (!user || (user.role !== "admin" && user.role !== "owner")) return;

    let active = true;
    fetch(`/api/listings?status=${statusFilter}`)
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (Array.isArray(data.listings)) {
          setListings(data.listings);
        }
        setLoadingListings(false);
      })
      .catch(() => {
        if (active) setLoadingListings(false);
      });

    return () => {
      active = false;
    };
  }, [user, statusFilter, refreshKey]);

  // Handle Quick Login
  const handleQuickLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || "Gagal masuk");
        setLoginLoading(false);
        return;
      }
      setUser(data.user);
      setLoginLoading(false);
    } catch {
      setLoginError("Terjadi gangguan jaringan.");
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.refresh();
  };

  // Admin action: Verify or Reject Listing
  const handleUpdateStatus = async (id: string, newStatus: "verified" | "rejected") => {
    try {
      const res = await fetch("/api/listings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (res.ok) {
        setActionMessage(
          newStatus === "verified"
            ? "Listing berhasil diverifikasi dan aktif di peta!"
            : "Listing ditolak."
        );
        setRefreshKey((k) => k + 1);
        setTimeout(() => setActionMessage(null), 4000);
      } else {
        alert(data.error || "Gagal memperbarui status");
      }
    } catch {
      alert("Koneksi gagal.");
    }
  };

  if (loadingUser) {
    return (
      <div className="shell landing-shell" style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", color: "var(--text-muted)" }}>
          <div className="hud-dashed-radius-badge" style={{ margin: "0 auto 12px", width: "24px", height: "24px" }} />
          <p>Memverifikasi hak akses portal...</p>
        </div>
      </div>
    );
  }

  // GATE: Not logged in or logged in as regular student user
  if (!user || (user.role !== "admin" && user.role !== "owner")) {
    return (
      <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header className="topbar">
          <div className="container header-inner">
            <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="logo">
                <Building2 size={20} />
              </span>
              <span>KosMatch Portal Pengelola</span>
            </Link>
            <div className="actions compact">
              <Link className="btn btn-ghost" href="/">
                <ArrowLeft size={16} /> Kembali ke Beranda
              </Link>
            </div>
          </div>
        </header>

        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6) var(--space-4)" }}>
          <div className="panel" style={{ width: "100%", maxWidth: "460px", padding: "var(--space-6)" }}>
            <div style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "#F59E0B",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 12px",
                }}
              >
                <Lock size={24} />
              </div>
              <div className="eyebrow">Akses Terbatas</div>
              <h1 style={{ fontSize: "22px", margin: "6px 0 6px" }}>Portal Pemilik & Administrator</h1>
              <p className="muted" style={{ fontSize: "13px", margin: 0 }}>
                Halaman ini khusus untuk mendaftarkan dan memverifikasi unit kos di sekitar kampus pilot UI & UNAND.
              </p>
            </div>

            {user?.role === "user" && (
              <div
                className="panel"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  borderColor: "#EF4444",
                  color: "#DC2626",
                  padding: "10px 14px",
                  fontSize: "13px",
                  marginBottom: "var(--space-4)",
                }}
              >
                Akun Anda terdaftar sebagai <strong>Mahasiswa / Pencari Kos</strong> ({user.email}). Silakan masuk dengan akun Pemilik Kos atau Administrator untuk mengakses portal ini.
              </div>
            )}

            {loginError && (
              <div
                className="panel"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  borderColor: "#EF4444",
                  color: "#DC2626",
                  padding: "10px 14px",
                  fontSize: "13px",
                  marginBottom: "var(--space-4)",
                }}
              >
                {loginError}
              </div>
            )}

            <form onSubmit={handleQuickLogin} style={{ display: "grid", gap: "var(--space-3)" }}>
              <div>
                <label className="field-label" htmlFor="portal-email" style={{ fontSize: "13px" }}>
                  Email Pengelola / Admin:
                </label>
                <input
                  id="portal-email"
                  type="email"
                  required
                  className="field-input"
                  style={{ width: "100%", marginTop: "4px" }}
                  placeholder="admin@kosmatch.id atau email pemilik"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="field-label" htmlFor="portal-pass" style={{ fontSize: "13px" }}>
                  Kata Sandi:
                </label>
                <input
                  id="portal-pass"
                  type="password"
                  required
                  className="field-input"
                  style={{ width: "100%", marginTop: "4px" }}
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="btn btn-primary"
                style={{ width: "100%", minHeight: "42px", marginTop: "var(--space-2)" }}
              >
                {loginLoading ? "Memverifikasi..." : <><LogIn size={16} /> Masuk ke Portal</>}
              </button>
            </form>

            <div style={{ textAlign: "center", marginTop: "var(--space-4)", fontSize: "12px" }}>
              <span className="muted">Belum memiliki akun pemilik kos? </span>
              <Link href="/auth/login" style={{ color: "var(--primary)", fontWeight: 700 }}>
                Daftar sebagai Pemilik
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // AUTHENTICATED: Admin or Owner Dashboard
  const isAdmin = user.role === "admin";
  const verifiedCount = listings.filter((l) => l.status === "verified").length;
  const pendingCount = listings.filter((l) => l.status === "pending").length;

  return (
    <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Topbar */}
      <header className="topbar">
        <div className="container header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
              <span className="logo">
                <Building2 size={20} />
              </span>
              <span>KosMatch</span>
            </Link>
            <span
              className="badge"
              style={{
                background: isAdmin ? "rgba(239, 68, 68, 0.15)" : "rgba(245, 158, 11, 0.15)",
                color: isAdmin ? "#EF4444" : "#F59E0B",
                fontWeight: 800,
                fontSize: "11px",
              }}
            >
              {isAdmin ? "ADMINISTRATOR" : "PORTAL PEMILIK"}
            </span>
          </div>

          <div className="actions compact">
            <Link className="btn btn-ghost highlight-pill" href="/explore">
              <Compass size={15} /> Peta Eksplorasi
            </Link>
            <Link className="btn btn-primary" href="/listings/new">
              <PlusCircle size={15} /> Tambah Kos Baru
            </Link>
            <button className="btn btn-ghost" onClick={handleLogout} title="Keluar dari sesi pengelola">
              <LogOut size={15} /> Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="container" style={{ padding: "var(--space-6) var(--space-4)", flex: 1 }}>
        {/* Welcome & Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "var(--space-5)" }}>
          <div>
            <div className="eyebrow">{isAdmin ? "Pusat Kontrol & Verifikasi" : "Manajemen Kos Saya"}</div>
            <h1 style={{ fontSize: "26px", margin: "4px 0" }}>
              {isAdmin ? "Dashboard Administrator" : "Daftar Kos Terdaftar"}
            </h1>
            <p className="muted" style={{ margin: 0, fontSize: "14px" }}>
              Masuk sebagai <strong>{user.email}</strong> · Akses:{" "}
              <span style={{ textTransform: "uppercase", color: "var(--primary)", fontWeight: 700 }}>
                {user.role}
              </span>
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <Link href="/listings/new" className="btn btn-primary">
              <PlusCircle size={16} /> Daftarkan Kos Baru
            </Link>
          </div>
        </div>

        {/* Action / Success Banner */}
        {actionMessage && (
          <div
            className="panel"
            style={{
              background: "rgba(16, 185, 129, 0.12)",
              borderColor: "#10B981",
              color: "#10B981",
              padding: "12px 16px",
              fontSize: "13px",
              marginBottom: "var(--space-4)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CheckCircle2 size={18} /> {actionMessage}
          </div>
        )}

        {/* Metrics Overview Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "var(--space-5)" }}>
          <div className="panel" style={{ padding: "16px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="muted" style={{ fontSize: "12px", fontWeight: 700 }}>TERVERIFIKASI (AKTIF)</span>
              <ShieldCheck size={18} color="#10B981" />
            </div>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#10B981" }}>{verifiedCount}</div>
            <div className="muted" style={{ fontSize: "11px", marginTop: "4px" }}>Muncul di peta eksplorasi mahasiswa</div>
          </div>

          <div className="panel" style={{ padding: "16px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="muted" style={{ fontSize: "12px", fontWeight: 700 }}>MENUNGGU REVIEW</span>
              <Clock size={18} color="#F59E0B" />
            </div>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#F59E0B" }}>{pendingCount}</div>
            <div className="muted" style={{ fontSize: "11px", marginTop: "4px" }}>
              {isAdmin ? "Perlu disetujui oleh admin" : "Sedang dalam tahap verifikasi"}
            </div>
          </div>

          <div className="panel" style={{ padding: "16px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="muted" style={{ fontSize: "12px", fontWeight: 700 }}>KAMPUS PILOT</span>
              <MapPin size={18} color="var(--primary)" />
            </div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--text)" }}>2 Area Kampus</div>
            <div className="muted" style={{ fontSize: "11px", marginTop: "4px" }}>UI Depok (4 km) & UNAND (5 km)</div>
          </div>
        </div>

        {/* Filters & Listing Area */}
        <div className="panel" style={{ padding: "var(--space-5)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "var(--space-4)" }}>
            <div className="chips">
              <button
                type="button"
                className={`chip ${statusFilter === "all" ? "selected" : ""}`}
                onClick={() => setStatusFilter("all")}
              >
                Semua Status ({listings.length})
              </button>
              <button
                type="button"
                className={`chip ${statusFilter === "pending" ? "selected" : ""}`}
                onClick={() => setStatusFilter("pending")}
              >
                <Clock size={13} /> Menunggu Verifikasi ({pendingCount})
              </button>
              <button
                type="button"
                className={`chip ${statusFilter === "verified" ? "selected" : ""}`}
                onClick={() => setStatusFilter("verified")}
              >
                <ShieldCheck size={13} /> Terverifikasi ({verifiedCount})
              </button>
            </div>
          </div>

          {loadingListings ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-muted)" }}>
              Memuat data listing...
            </div>
          ) : listings.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 16px" }}>
              <Building2 size={36} style={{ color: "var(--text-muted)", margin: "0 auto 12px" }} />
              <h3 style={{ fontSize: "16px", margin: "0 0 6px" }}>Belum Ada Listing Kos</h3>
              <p className="muted" style={{ fontSize: "13px", maxWidth: "400px", margin: "0 auto 16px" }}>
                {statusFilter === "pending"
                  ? "Tidak ada listing yang sedang menunggu verifikasi."
                  : "Mulai daftarkan kos Anda untuk diverifikasi dan ditampilkan di peta eksplorasi."}
              </p>
              <Link href="/listings/new" className="btn btn-primary">
                <PlusCircle size={16} /> Tambah Listing Sekarang
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "12px" }}>
              {listings.map((item) => {
                const campus = PILOT_CONFIG.allPilots.find((p) => p.id === item.campusId);
                const isPending = item.status === "pending";
                return (
                  <article
                    key={item.id}
                    className="panel"
                    style={{
                      padding: "16px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "14px",
                      borderLeft: `4px solid ${
                        item.status === "verified" ? "#10B981" : item.status === "pending" ? "#F59E0B" : "#EF4444"
                      }`,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <h3 style={{ margin: 0, fontSize: "16px" }}>{item.name}</h3>
                        <span
                          className="badge"
                          style={{
                            background:
                              item.status === "verified"
                                ? "rgba(16, 185, 129, 0.15)"
                                : item.status === "pending"
                                ? "rgba(245, 158, 11, 0.15)"
                                : "rgba(239, 68, 68, 0.15)",
                            color:
                              item.status === "verified"
                                ? "#10B981"
                                : item.status === "pending"
                                ? "#F59E0B"
                                : "#EF4444",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {item.status === "verified"
                            ? "✓ Terverifikasi"
                            : item.status === "pending"
                            ? "⏳ Menunggu Review"
                            : "✕ Ditolak"}
                        </span>
                      </div>

                      <div className="muted" style={{ fontSize: "13px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <span>📍 {campus?.campusName ?? item.campusId}</span>
                        <span>·</span>
                        <strong style={{ color: "var(--primary)" }}>{formatRupiah(item.rentMonthly)}/bln</strong>
                        {item.facilities && item.facilities.length > 0 && (
                          <>
                            <span>·</span>
                            <span>{item.facilities.length} fasilitas terdaftar</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Link
                        href="/explore"
                        className="btn btn-ghost"
                        style={{ fontSize: "12px", minHeight: "32px", padding: "4px 10px" }}
                      >
                        <ExternalLink size={13} /> Lihat di Peta
                      </Link>

                      {isAdmin && isPending && (
                        <>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ fontSize: "12px", minHeight: "32px", padding: "4px 12px", background: "#10B981" }}
                            onClick={() => handleUpdateStatus(item.id, "verified")}
                          >
                            <CheckCircle2 size={14} /> Verifikasi
                          </button>
                          <button
                            type="button"
                            className="btn btn-ghost"
                            style={{ fontSize: "12px", minHeight: "32px", padding: "4px 10px", color: "#EF4444" }}
                            onClick={() => handleUpdateStatus(item.id, "rejected")}
                          >
                            <XCircle size={14} /> Tolak
                          </button>
                        </>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
