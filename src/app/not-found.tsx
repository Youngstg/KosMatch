import Link from "next/link";

export default function NotFound() {
  return <main className="center-state"><h1>Halaman tidak ditemukan</h1><p className="muted">Tautan ini mungkin sudah berubah atau tidak tersedia.</p><Link className="btn btn-primary" href="/">Kembali ke KosMatch</Link></main>;
}
