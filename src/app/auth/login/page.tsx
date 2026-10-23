"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  UserPlus,
  X,
} from "lucide-react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";
import { GoogleLogo } from "@/components/brand/google-logo";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "owner">("user");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [customGoogleEmail, setCustomGoogleEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Periksa parameter error dari URL (misal pengalihan dari callback Google)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlError = params.get("error");
      const setupParam = params.get("setup");
      const timer = setTimeout(() => {
        if (urlError) setErrorMsg(urlError);
        if (setupParam === "google") setShowGoogleModal(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload = mode === "login" ? { email, password } : { email, password, role };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Terjadi kesalahan saat memproses akun Anda");
        setLoading(false);
        return;
      }

      setSuccessMsg(
        mode === "login"
          ? "Berhasil masuk! Mengalihkan ke aplikasi..."
          : "Akun berhasil dibuat! Mengalihkan ke aplikasi..."
      );

      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const redirectParam = searchParams?.get("redirect");
      const targetUrl =
        redirectParam || (data.user?.role === "admin" || data.user?.role === "owner" ? "/admin" : "/explore");

      setTimeout(() => {
        router.push(targetUrl);
        router.refresh();
      }, 700);
    } catch {
      setErrorMsg("Koneksi gagal. Pastikan jaringan internet Anda aktif.");
      setLoading(false);
    }
  };

  /**
   * Handler untuk tombol Lanjutkan dengan Google:
   * 1. Mengecek apakah server telah memiliki kredensial resmi GOOGLE_CLIENT_ID
   * 2. Jika ada, langsung mengalihkan browser ke halaman login Google resmi (accounts.google.com)
   * 3. Jika belum diisi di .env.local, menampilkan panduan konfigurasi & opsi masuk instan dengan email pribadi
   */
  const handleGoogleClick = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setGoogleLoading(true);

    try {
      const checkRes = await fetch("/api/auth/google");
      const status = await checkRes.json();

      if (status.configured && status.clientId) {
        // Alihkan langsung ke Google OAuth 2.0 resmi (URL eksternal accounts.google.com)
        const appUrl = window.location.origin;
        const redirectUri = `${appUrl}/api/auth/google/callback`;
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${status.clientId}&redirect_uri=${encodeURIComponent(
          redirectUri
        )}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=select_account`;
        window.location.href = googleAuthUrl;
      } else {
        setGoogleLoading(false);
        setShowGoogleModal(true);
      }
    } catch {
      setGoogleLoading(false);
      setShowGoogleModal(true);
    }
  };

  const handleCustomGoogleEmailSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const targetEmail = customGoogleEmail.trim().toLowerCase();
    if (!targetEmail.includes("@")) {
      setErrorMsg("Harap masukkan alamat email yang valid");
      return;
    }

    setGoogleLoading(true);
    try {
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: targetEmail,
          name: targetEmail.split("@")[0].replace(".", " "),
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Gagal masuk dengan email tersebut");
        setGoogleLoading(false);
        return;
      }

      setSuccessMsg(`Berhasil masuk sebagai ${data.user.email}! Mengalihkan...`);
      setShowGoogleModal(false);

      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const redirectParam = searchParams?.get("redirect");
      const targetUrl =
        redirectParam || (data.user?.role === "admin" || data.user?.role === "owner" ? "/admin" : "/explore");

      setTimeout(() => {
        router.push(targetUrl);
        router.refresh();
      }, 700);
    } catch {
      setErrorMsg("Koneksi gagal saat menghubungi server");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      {/* Top Navigation */}
      <header className="topbar" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(28, 27, 25, 0.08)" }}>
        <div className="container header-inner" style={{ height: "64px" }}>
          <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}>
            <KosMatchLogo size={34} />
            <span style={{ fontSize: "17px", fontWeight: 750, letterSpacing: "-0.01em" }}>KosMatch</span>
          </Link>
          <div className="actions compact">
            <Link className="btn btn-ghost" href="/" style={{ fontSize: "13px", fontWeight: 600 }}>
              <ArrowLeft size={15} /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </header>

      {/* Main Authentication Area */}
      <main className="auth-main-area">
        <div className="auth-card">
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span className="auth-super-tag">Autentikasi &amp; Keanggotaan</span>
            <h1 className="auth-title">
              {mode === "login" ? "Masuk ke KosMatch" : "Daftar Akun Baru"}
            </h1>
            <p className="auth-sub">
              {mode === "login"
                ? "Akses hasil simulasi DSS, simpan kos favorit, atau kelola listing kos Anda."
                : "Bantu mahasiswa menemukan kos transparan dan hemat biaya hidup."}
            </p>
          </div>

          {/* Official Google Sign-In Button */}
          <button
            type="button"
            disabled={loading || googleLoading}
            onClick={handleGoogleClick}
            className="auth-google-btn"
          >
            <GoogleLogo size={20} />
            <span>{googleLoading ? "Menghubungkan ke Google..." : "Lanjutkan dengan Google"}</span>
          </button>

          {/* Hairline Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line" />
            <span className="auth-divider-text">atau dengan email &amp; sandi</span>
            <div className="auth-divider-line" />
          </div>

          {/* Mode Switcher Pill Tabs */}
          <div className="auth-pill-switcher">
            <button
              type="button"
              className={`auth-pill-tab ${mode === "login" ? "active" : ""}`}
              onClick={() => {
                setMode("login");
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              <LogIn size={15} /> Masuk
            </button>
            <button
              type="button"
              className={`auth-pill-tab ${mode === "register" ? "active" : ""}`}
              onClick={() => {
                setMode("register");
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              <UserPlus size={15} /> Daftar Baru
            </button>
          </div>

          {errorMsg && (
            <div
              style={{
                background: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#B91C1C",
                borderRadius: "14px",
                padding: "12px 14px",
                fontSize: "13px",
                lineHeight: "1.5",
                marginBottom: "18px",
              }}
            >
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#047857",
                borderRadius: "14px",
                padding: "12px 14px",
                fontSize: "13px",
                lineHeight: "1.5",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle2 size={16} /> {successMsg}
            </div>
          )}

          {/* Credentials Form */}
          <form onSubmit={handleSubmit}>
            {mode === "register" && (
              <div className="auth-field-group">
                <span className="auth-field-label">Tipe Akun Anda:</span>
                <div className="auth-role-picker">
                  <button
                    type="button"
                    className={`auth-role-btn ${role === "user" ? "active" : ""}`}
                    onClick={() => setRole("user")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <GraduationCap size={15} color="#186049" />
                      <span className="auth-role-title">Mahasiswa</span>
                    </div>
                    <span className="auth-role-desc">Pencari kos &amp; simulasi biaya</span>
                  </button>

                  <button
                    type="button"
                    className={`auth-role-btn ${role === "owner" ? "active" : ""}`}
                    onClick={() => setRole("owner")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Building2 size={15} color="#186049" />
                      <span className="auth-role-title">Pemilik Kos</span>
                    </div>
                    <span className="auth-role-desc">Kelola &amp; verifikasi kos</span>
                  </button>
                </div>
              </div>
            )}

            <div className="auth-field-group">
              <label className="auth-field-label" htmlFor="auth-email">
                Alamat Email:
              </label>
              <div className="auth-input-wrap">
                <span className="auth-input-icon">
                  <Mail size={16} />
                </span>
                <input
                  id="auth-email"
                  type="email"
                  required
                  className="auth-input"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="auth-field-group">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <label className="auth-field-label" htmlFor="auth-password" style={{ marginBottom: 0 }}>
                  Kata Sandi:
                </label>
                {mode === "login" && (
                  <span style={{ fontSize: "11.5px", color: "#186049", cursor: "pointer", fontWeight: 650 }}>
                    Lupa sandi?
                  </span>
                )}
              </div>
              <div className="auth-input-wrap">
                <span className="auth-input-icon">
                  <Lock size={16} />
                </span>
                <input
                  id="auth-password"
                  type="password"
                  required
                  minLength={6}
                  className="auth-input"
                  placeholder="Minimal 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="auth-submit-btn"
            >
              {loading ? (
                "Memproses..."
              ) : mode === "login" ? (
                <>
                  Masuk Sekarang <ArrowRight size={16} />
                </>
              ) : (
                <>
                  Daftar Akun Baru <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* =========================================================================
          MODAL: INFORMASI INTEGRASI GOOGLE OAUTH 2.0 RESMI
          (Ditampilkan jika kredensial GOOGLE_CLIENT_ID belum disetel di server)
      ========================================================================== */}
      {showGoogleModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(28, 27, 25, 0.65)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowGoogleModal(false)}
        >
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "32px",
              width: "100%",
              maxWidth: "520px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25)",
              border: "1px solid rgba(28, 27, 25, 0.1)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <GoogleLogo size={24} />
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1C1B19" }}>
                    Login Akun Google Resmi
                  </h3>
                  <span style={{ fontSize: "11.5px", color: "#186049", fontWeight: 700, letterSpacing: "0.5px" }}>
                    GOOGLE IDENTITY SERVICES (OAUTH 2.0)
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGoogleModal(false)}
                aria-label="Tutup"
                style={{
                  background: "#F4EFEB",
                  border: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1C1B19",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Explanation */}
            <div
              style={{
                background: "#FAF8F2",
                border: "1px solid rgba(24, 96, 73, 0.2)",
                borderRadius: "14px",
                padding: "14px 16px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <KeyRound size={18} color="#186049" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div style={{ fontSize: "12.5px", lineHeight: "1.55", color: "#4A4641" }}>
                  Google mewajibkan setiap aplikasi memiliki <strong>Client ID</strong> resmi agar browser dapat membuka jendela login <code>accounts.google.com</code> milik akun Gmail asli Anda.
                </div>
              </div>
            </div>

            {/* Steps to activate Google OAuth */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontSize: "12px", fontWeight: 750, color: "#1C1B19", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "8px" }}>
                Cara Mengaktifkan Google OAuth Asli:
              </span>
              <ol style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#5C5852", lineHeight: "1.6" }}>
                <li>
                  Buka{" "}
                  <a
                    href="https://console.cloud.google.com/apis/credentials"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#186049", fontWeight: 700, textDecoration: "underline" }}
                  >
                    Google Cloud Console <ExternalLink size={12} style={{ display: "inline" }} />
                  </a>
                </li>
                <li>
                  Buat <strong>OAuth 2.0 Client ID (Web Application)</strong> dengan Redirect URI:
                  <div
                    style={{
                      background: "#1C1B19",
                      color: "#E0A96D",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      fontFamily: "monospace",
                      fontSize: "11.5px",
                      marginTop: "4px",
                      marginBottom: "4px",
                      userSelect: "all",
                    }}
                  >
                    http://localhost:3000/api/auth/google/callback
                  </div>
                </li>
                <li>
                  Tambahkan <code>GOOGLE_CLIENT_ID</code> dan <code>GOOGLE_CLIENT_SECRET</code> ke file <code>.env.local</code>.
                </li>
              </ol>
            </div>

            {/* Direct Sign-In with Real Personal Gmail */}
            <div style={{ borderTop: "1px solid rgba(28, 27, 25, 0.08)", paddingTop: "18px" }}>
              <label htmlFor="custom-personal-email" style={{ fontSize: "12.5px", fontWeight: 700, display: "block", marginBottom: "6px", color: "#1C1B19" }}>
                Atau Masuk Instan dengan Email Pribadi Anda:
              </label>
              <p style={{ fontSize: "11.5px", color: "#78746D", margin: "0 0 10px" }}>
                Ketik alamat Gmail asli Anda untuk langsung masuk dan menguji seluruh fitur akun:
              </p>
              <form onSubmit={handleCustomGoogleEmailSubmit} style={{ display: "flex", gap: "8px" }}>
                <input
                  id="custom-personal-email"
                  type="email"
                  required
                  placeholder="nama.anda@gmail.com"
                  className="auth-input"
                  style={{ flex: 1, paddingLeft: "14px", height: "42px", fontSize: "13px" }}
                  value={customGoogleEmail}
                  onChange={(e) => setCustomGoogleEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!customGoogleEmail.includes("@") || googleLoading}
                  className="btn btn-primary"
                  style={{
                    background: "#186049",
                    borderColor: "#186049",
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "0 18px",
                    fontWeight: 700,
                    fontSize: "13px",
                    height: "42px",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  {googleLoading ? "Masuk..." : "Masuk Akun"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
