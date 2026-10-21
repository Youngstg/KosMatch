import { ArrowRight, Check, Info, Save, Scale, Sparkles } from "lucide-react";
import { LandingFaq } from "./landing-faq";
import { LandingFeatures } from "./landing-features";

export type LandingViewProps = {
  onStart: () => void;
  onDemo: () => void;
  hasSaved: boolean;
  onResume: () => void;
};

function Brand() {
  return (
    <div className="brand">
      <span className="logo">
        <Scale size={21} aria-hidden="true" />
      </span>
      <span>KosMatch</span>
    </div>
  );
}

export function LandingView({ onStart, onDemo, hasSaved, onResume }: LandingViewProps) {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="container header-inner">
          <Brand />
          <div className="actions compact">
            <a className="btn btn-ghost" href="/explore">
              Peta Eksplorasi
            </a>
            <a className="btn btn-ghost" href="/methodology">
              Metodologi
            </a>
            <button className="btn btn-primary" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="container hero">
          <div>
            <h1>Kos murah belum tentu paling hemat.</h1>
            <p className="lead">
              Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan.
            </p>
            <div className="actions">
              <button className="btn btn-primary" onClick={onStart}>
                Mulai Perbandingan <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={onDemo}>
                <Sparkles size={18} /> Coba Data Contoh
              </button>
              {hasSaved && (
                <button className="btn btn-ghost" onClick={onResume}>
                  <Save size={18} /> Lanjutkan proyek
                </button>
              )}
            </div>
          </div>
          <article className="hero-card" aria-label="Pratinjau hasil perbandingan">
            <p className="muted">
              <strong>Kos Anggrek 12</strong> · Menteng
            </p>
            <div className="preview-score">86% cocok</div>
            <p>
              <strong>Rp1.850.000 per bulan</strong>
            </p>
            <div className="preview-row">
              <span>Harga sewa</span>
              <strong>Rp1.650.000</strong>
            </div>
            <div className="preview-row">
              <span>Perjalanan</span>
              <strong>18 menit ke Kantor Kuningan</strong>
            </div>
            <div className="preview-row">
              <span>Kebutuhan wajib</span>
              <strong>
                <Check size={16} /> Terpenuhi
              </strong>
            </div>
          </article>
        </section>

        <section className="container steps" aria-labelledby="rent-problem-title">
          <h2 id="rent-problem-title" className="section-title">
            Kenapa harga sewa saja tidak cukup?
          </h2>
          <div className="step-grid">
            {[
              ["1", "Hitung biaya nyata", "Gabungkan sewa, biaya rutin, dan perjalanan bulanan."],
              ["2", "Periksa kebutuhan wajib", "Pisahkan syarat yang harus tersedia dari preferensi tambahan."],
              ["3", "Pahami trade-off", "Lihat alasan skor dan data yang masih perlu dikonfirmasi."],
            ].map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container steps" aria-labelledby="transparent-score-title">
          <div className="panel">
            <div className="eyebrow">Transparansi skor</div>
            <h2 id="transparent-score-title" className="section-title">
              Skor yang transparan, bukan sekadar rating
            </h2>
            <p className="lead">
              Setiap skor disertai alasan, kebutuhan wajib, tingkat keyakinan data, dan hal yang masih perlu diverifikasi.
            </p>
            <div className="preview-row">
              <span>Biaya total</span>
              <strong>100/100 · Sesuai anggaran</strong>
            </div>
            <div className="preview-row">
              <span>Perjalanan</span>
              <strong>92/100 · Sesuai batas waktu</strong>
            </div>
            <div className="preview-row">
              <span>Data belum lengkap</span>
              <strong>
                <Info size={16} /> Ditandai apa adanya
              </strong>
            </div>
          </div>
          <p className="disclaimer">
            <Info size={17} /> Nama, harga, alamat, dan ketersediaan pada data contoh ini bersifat fiktif.
          </p>
        </section>

        <LandingFeatures />

        <LandingFaq />

        <section className="container steps" aria-labelledby="cta-title">
          <div className="panel cta-banner">
            <div className="eyebrow">Mulai sekarang</div>
            <h2 id="cta-title" className="section-title">
              Siap Mengambil Keputusan Kos yang Tepat?
            </h2>
            <p className="lead">
              Gunakan KosMatch secara gratis tanpa daftar akun. Simpan data di perangkat Anda dan buat keputusan terbaik hari ini.
            </p>
            <div className="actions">
              <button className="btn btn-primary" onClick={onStart}>
                Mulai Perbandingan Sekarang <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={onDemo}>
                <Sparkles size={18} /> Coba Data Contoh
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-note">
        <div className="container">
          <p>KosMatch adalah alat bantu keputusan, bukan jaminan kualitas atau ketersediaan kos.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/methodology">
              Metodologi & Batasan
            </a>
            <button className="btn btn-primary" onClick={onStart}>
              Mulai Perbandingan
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
