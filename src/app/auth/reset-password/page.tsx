"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, CheckCircle2, AlertCircle, ArrowLeft, KeyRound } from "lucide-react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!token) {
    return (
      <div className="auth-card" style={{ maxWidth: "440px", margin: "2rem auto", textAlign: "center" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FEF3F2", color: "#B42318", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
          <AlertCircle size={24} />
        </div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#101828", marginBottom: "0.5rem" }}>
          Tautan Tidak Valid
        </h2>
        <p style={{ fontSize: "0.9rem", color: "#667085", lineHeight: 1.5, marginBottom: "1.5rem" }}>
          Tautan pengaturan ulang kata sandi tidak memiliki token verifikasi yang sah atau tautan telah rusak.
        </p>
        <Link href="/auth/login" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <ArrowLeft size={16} /> Kembali ke Halaman Masuk
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (password.length < 6) {
      setErrorMsg("Kata sandi baru minimal 6 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Gagal mengatur ulang kata sandi.");
        setLoading(false);
        return;
      }

      setSuccessMsg(data.message || "Kata sandi Anda berhasil diperbarui!");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2500);
    } catch {
      setErrorMsg("Koneksi gagal. Pastikan jaringan internet Anda aktif.");
      setLoading(false);
    }
  };

  return (
    <div className="auth-card" style={{ maxWidth: "440px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#EFF8FF", color: "#175CD3", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
          <KeyRound size={24} />
        </div>
        <h1 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#101828", margin: "0 0 0.5rem 0" }}>
          Atur Ulang Kata Sandi
        </h1>
        <p style={{ fontSize: "0.85rem", color: "#667085", margin: 0 }}>
          Masukkan kata sandi baru untuk akun KosMatch Anda. Tautan ini berlaku 15 menit dan hanya dapat dipakai satu kali.
        </p>
      </div>

      {errorMsg && (
        <div style={{ background: "#FEF3F2", border: "1px solid #FECDCA", borderRadius: "10px", padding: "12px", marginBottom: "1.25rem", color: "#B42318", fontSize: "0.85rem", display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg ? (
        <div style={{ background: "#ECFDF3", border: "1px solid #A6F4C5", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
          <CheckCircle2 size={32} color="#027A48" style={{ margin: "0 auto 8px" }} />
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#027A48", margin: "0 0 6px 0" }}>
            Berhasil Diperbarui!
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#344054", margin: "0 0 16px 0", lineHeight: 1.5 }}>
            {successMsg} Anda akan dialihkan ke halaman masuk secara otomatis...
          </p>
          <Link href="/auth/login" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Masuk Sekarang
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#344054", marginBottom: "6px" }}>
              Kata Sandi Baru
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#667085" }}>
                <Lock size={16} />
              </span>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                style={{ width: "100%", padding: "10px 12px 10px 38px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.95rem" }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#344054", marginBottom: "6px" }}>
              Ulangi Kata Sandi Baru
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#667085" }}>
                <Lock size={16} />
              </span>
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ketik ulang kata sandi baru"
                style={{ width: "100%", padding: "10px 12px 10px 38px", border: "1px solid #D0D5DD", borderRadius: "8px", fontSize: "0.95rem" }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "#184E77",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              marginTop: "0.5rem",
            }}
          >
            {loading ? "Menyimpan Kata Sandi..." : "Simpan Kata Sandi Baru"}
          </button>

          <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <Link href="/auth/login" style={{ fontSize: "0.85rem", color: "#184E77", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <ArrowLeft size={14} /> Batalkan dan Kembali ke Masuk
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="auth-page-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#F8F9FA" }}>
      <header className="topbar" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(28, 27, 25, 0.08)", padding: "12px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}>
            <KosMatchLogo size={34} />
            <span style={{ fontSize: "17px", fontWeight: 750, letterSpacing: "-0.01em" }}>KosMatch</span>
          </Link>
          <Link href="/auth/login" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
            Masuk
          </Link>
        </div>
      </header>
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <Suspense fallback={<div style={{ textAlign: "center", color: "#667085" }}>Memuat formulir pemulihan sandi...</div>}>
          <ResetPasswordContent />
        </Suspense>
      </main>
    </div>
  );
}
