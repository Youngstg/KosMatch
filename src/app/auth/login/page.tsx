"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lock, LogIn, Mail, Scale, UserPlus } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "owner">("user");
  const [loading, setLoading] = useState(false);
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
      }, 1000);
    } catch {
      setErrorMsg("Koneksi gagal. Pastikan jaringan internet Anda aktif.");
      setLoading(false);
    }
  };

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
            <Link className="btn btn-ghost" href="/">
              <ArrowLeft size={16} /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-6) var(--space-4)" }}>
        <div className="panel" style={{ width: "100%", maxWidth: "440px", padding: "var(--space-6)" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-5)" }}>
            <div className="eyebrow">Fase 2 · Akun & Komunitas</div>
            <h1 style={{ fontSize: "22px", margin: "6px 0 6px" }}>
              {mode === "login" ? "Masuk ke Akun KosMatch" : "Daftar Akun Baru"}
            </h1>
            <p className="muted" style={{ fontSize: "13px", margin: 0 }}>
              {mode === "login"
                ? "Kelola kos terdaftar atau sinkronisasi preferensi Anda."
                : "Bantu komunitas mahasiswa menemukan kos transparan dan objektif."}
            </p>
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
              disabled={loading}
              className="btn btn-primary"
              style={{ width: "100%", minHeight: "42px", marginTop: "var(--space-2)" }}
            >
              {loading ? "Memproses..." : mode === "login" ? "Masuk Sekarang" : "Buat Akun Baru"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "var(--space-4)", fontSize: "12px", color: "var(--text-muted)" }}>
            KosMatch menghargai privasi Anda. Kata sandi dienkripsi dengan standar scrypt di server VPS.
          </div>
        </div>
      </main>
    </div>
  );
}
