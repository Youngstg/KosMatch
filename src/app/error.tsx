"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error("App error boundary caught error:", error);
  }, [error]);

  return (
    <main className="center-state" role="alert">
      <h1>Terjadi Kesalahan</h1>
      <p className="muted">
        Terjadi kendala saat memproses kalkulasi atau data kos. Silakan coba lagi.
      </p>
      <div className="actions" style={{ justifyContent: "center" }}>
        <button type="button" className="btn btn-primary" onClick={() => reset()}>
          Coba Lagi
        </button>
        <Link className="btn btn-secondary" href="/">
          Kembali ke KosMatch
        </Link>
      </div>
    </main>
  );
}
