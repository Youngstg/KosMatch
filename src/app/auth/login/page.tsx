"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lock, LogIn, Mail, Sparkles, UserPlus, X } from "lucide-react";
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
        setErrorMsg(data.error || "Terjadi kesalahan saat memproses akun");
        setLoading(false);
        return;
      }

      setSuccessMsg(
        mode === "login"
          ? "Berhasil masuk! Mengalihkan..."
          : "Akun berhasil dibuat! Mengalihkan..."
      );

      const targetUrl =
        data.user?.role === "admin" || data.user?.role === "owner" ? "/admin" : "/explore";

      setTimeout(() => {
        router.push(targetUrl);
        router.refresh();
      }, 900);
    } catch {
      setErrorMsg("Koneksi gagal. Pastikan jaringan internet Anda aktif.");
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (selectedEmail?: string) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setGoogleLoading(true);

    try {
      const targetEmail = selectedEmail || "mahasiswa.ui@gmail.com";
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: targetEmail,
          name: targetEmail.split("@")[0].replace(".", " ").toUpperCase(),
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Gagal masuk dengan Akun Google");
        setGoogleLoading(false);
        return;
      }

      setSuccessMsg(`Berhasil masuk dengan Google (${data.user.email})! Mengalihkan...`);
      setShowGoogleModal(false);

      const targetUrl =
        data.user?.role === "admin" || data.user?.role === "owner" ? "/admin" : "/explore";

      setTimeout(() => {
        router.push(targetUrl);
        router.refresh();
      }, 900);
    } catch {
      setErrorMsg("Koneksi gagal saat menghubungi otentikasi Google.");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar">
        <div className="container header-inner">
          <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}>
            <KosMatchLogo size={36} />
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
        <div className="panel" style={{ width: "100%", maxWidth: "440px", padding: "var(--space-6)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
            <div className="eyebrow">Fase 2 · Akun &amp; Komunitas</div>
            <h1 style={{ fontSize: "22px", margin: "6px 0 6px" }}>
              {mode === "login" ? "Masuk ke Akun KosMatch" : "Daftar Akun Baru"}
            </h1>
            <p className="muted" style={{ fontSize: "13px", margin: 0 }}>
              {mode === "login"
                ? "Kelola kos favorit, bandingkan di DSS, atau kelola kos Anda."
                : "Bantu mahasiswa menemukan kos transparan dan hemat biaya hidup."}
            </p>
          </div>

          {/* Quick Google Sign-In Button */}
          <button
            type="button"
            disabled={loading || googleLoading}
            onClick={() => setShowGoogleModal(true)}
            className="btn btn-secondary"
            style={{
              width: "100%",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontWeight: 700,
              fontSize: "14px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              cursor: "pointer",
              marginBottom: "var(--space-4)",
            }}
          >
            <GoogleLogo size={20} />
            <span>{googleLoading ? "Menghubungkan ke Google..." : "Lanjutkan dengan Google"}</span>
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-4)" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span className="muted" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              atau dengan email &amp; sandi
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Mode Switcher Tabs */}
          <div className="chips" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "var(--space-4)" }}>
            <button
              type="button"
              className={`chip ${mode === "login" ? "selected" : ""}`}
              style={{ justifyContent: "center", minHeight: "36px" }}
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
              className={`chip ${mode === "register" ? "selected" : ""}`}
              style={{ justifyContent: "center", minHeight: "36px" }}
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
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div
              className="panel"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                borderColor: "#10B981",
                color: "#059669",
                padding: "10px 14px",
                fontSize: "13px",
                marginBottom: "var(--space-4)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle2 size={16} /> {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "var(--space-3)" }}>
            <div>
              <label className="field-label" htmlFor="auth-email" style={{ fontSize: "13px" }}>
                Alamat Email:
              </label>
              <div style={{ position: "relative", marginTop: "4px" }}>
                <input
                  id="auth-email"
                  type="email"
                  required
                  className="field-input"
                  style={{ width: "100%", paddingLeft: "34px" }}
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail
                  size={16}
                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                />
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="auth-password" style={{ fontSize: "13px" }}>
                Kata Sandi:
              </label>
              <div style={{ position: "relative", marginTop: "4px" }}>
                <input
                  id="auth-password"
                  type="password"
                  required
                  className="field-input"
                  style={{ width: "100%", paddingLeft: "34px" }}
                  placeholder="Minimal 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock
                  size={16}
                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                />
              </div>
            </div>

            {mode === "register" && (
              <div>
                <span className="field-label" style={{ fontSize: "13px", display: "block", marginBottom: "4px" }}>
                  Tipe Akun:
                </span>
                <div className="chips" style={{ gap: "8px" }}>
                  <button
                    type="button"
                    className={`chip ${role === "user" ? "selected" : ""}`}
                    style={{ flex: 1, minHeight: "34px", justifyContent: "center" }}
                    onClick={() => setRole("user")}
                  >
                    Mahasiswa / Pencari Kos
                  </button>
                  <button
                    type="button"
                    className={`chip ${role === "owner" ? "selected" : ""}`}
                    style={{ flex: 1, minHeight: "34px", justifyContent: "center" }}
                    onClick={() => setRole("owner")}
                  >
                    Pemilik / Pengelola Kos
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="btn btn-primary"
              style={{ width: "100%", minHeight: "42px", marginTop: "var(--space-2)" }}
            >
              {loading ? "Memproses..." : mode === "login" ? "Masuk Sekarang" : "Buat Akun Baru"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "var(--space-4)", fontSize: "12px", color: "var(--text-muted)" }}>
            KosMatch menghargai privasi Anda. Kata sandi dienkripsi dengan standar scrypt.
          </div>
        </div>
      </main>

      {/* Google Account Selector Modal */}
      {showGoogleModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pilih Akun Google"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
          onClick={() => setShowGoogleModal(false)}
        >
          <div
            className="panel"
            style={{
              width: "100%",
              maxWidth: "420px",
              padding: "24px",
              background: "var(--surface)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              borderRadius: "16px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <GoogleLogo size={22} />
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 750 }}>Masuk dengan Google</h3>
              </div>
              <button
                type="button"
                className="btn-icon"
                onClick={() => setShowGoogleModal(false)}
                aria-label="Tutup"
                style={{ background: "transparent", border: 0, cursor: "pointer" }}
              >
                <X size={18} />
              </button>
            </div>

            <p className="muted" style={{ fontSize: "13px", lineHeight: "1.5", margin: "0 0 16px" }}>
              Pilih akun Google Anda untuk melanjutkan ke <strong>KosMatch</strong>. Data preferensi dan kos favorit Anda akan tersinkronisasi otomatis.
            </p>

            {/* Quick One-Click Accounts for UI / UNAND / ITERA Students */}
            <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
              {[
                { email: "mahasiswa.ui@gmail.com", campus: "Universitas Indonesia (Depok)", role: "user" as const },
                { email: "mahasiswa.unand@gmail.com", campus: "Universitas Andalas (Limau Manis)", role: "user" as const },
                { email: "mahasiswa.itera@gmail.com", campus: "Institut Teknologi Sumatera", role: "user" as const },
                { email: "pemilik.kost@gmail.com", campus: "Pemilik Kos Terdaftar", role: "owner" as const },
              ].map((acc) => (
                <button
                  key={acc.email}
                  type="button"
                  className="btn btn-secondary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    textAlign: "left",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                  }}
                  onClick={() => handleGoogleSignIn(acc.email)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(66, 133, 244, 0.15)",
                        color: "#4285F4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "13px",
                      }}
                    >
                      {acc.email[0].toUpperCase()}
                    </div>
                    <div>
                      <strong style={{ fontSize: "13px", display: "block" }}>{acc.email}</strong>
                      <span className="muted" style={{ fontSize: "11px" }}>{acc.campus}</span>
                    </div>
                  </div>
                  <Sparkles size={14} color="#F59E0B" />
                </button>
              ))}
            </div>

            {/* Or custom Google Email */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "14px" }}>
              <label htmlFor="custom-google-email" style={{ fontSize: "12px", display: "block", marginBottom: "6px" }} className="muted">
                Gunakan email Google lainnya:
              </label>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  id="custom-google-email"
                  type="email"
                  placeholder="akunanda@gmail.com"
                  className="field-input"
                  style={{ flex: 1, fontSize: "13px" }}
                  value={customGoogleEmail}
                  onChange={(e) => setCustomGoogleEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && customGoogleEmail.trim()) {
                      e.preventDefault();
                      void handleGoogleSignIn(customGoogleEmail.trim());
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  disabled={!customGoogleEmail.includes("@")}
                  onClick={() => handleGoogleSignIn(customGoogleEmail.trim())}
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
