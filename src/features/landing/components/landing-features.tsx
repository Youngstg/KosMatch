import { Calculator, CheckCircle2, FileDown, Lock, Scale, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Hitung Biaya Hidup Nyata",
    description:
      "Bukan hanya harga sewa kamar. Gabungkan listrik, air, internet, laundry, dan estimasi ongkos transportasi bulanan bolak-balik.",
  },
  {
    icon: CheckCircle2,
    title: "Kebutuhan Wajib vs Fleksibel",
    description:
      "Tentukan syarat mutlak (kamar mandi dalam, AC, jam malam bebas) yang harus dipenuhi secara tegas, terpisah dari preferensi pelengkap.",
  },
  {
    icon: Scale,
    title: "Perbandingan Berdampingan",
    description:
      "Bandingkan hingga 3 pilihan kos sekaligus dalam satu tabel komparatif tanpa menyembunyikan data yang masih belum pasti.",
  },
  {
    icon: SlidersHorizontal,
    title: "Simulator Biaya & Skenario",
    description:
      "Uji bagaimana perubahan frekuensi kerja/kuliah atau kenaikan tarif listrik memengaruhi anggaran bulanan Anda sebelum bayar sewa.",
  },
  {
    icon: FileDown,
    title: "Ekspor PDF & Data Mandiri",
    description:
      "Cetak ringkasan keputusan tanpa catatan privat untuk ditunjukkan ke orang tua, atau cadangkan proyek dalam format JSON tervalidasi.",
  },
  {
    icon: Lock,
    title: "Aman, Terproteksi & Bebas Iklan",
    description:
      "Seluruh data perbandingan dan preferensi Anda terproteksi secara privat. Tanpa pelacakan komersial tersembunyi, tanpa spam, dan tanpa manipulasi rekomendasi calo.",
  },
] as const;

export function LandingFeatures() {
  const col1 = features.slice(0, 3);
  const col2 = features.slice(3, 6);

  return (
    <section className="container steps landing-features-section" aria-labelledby="features-section-title">
      <div className="eyebrow">Fitur unggulan</div>
      <h2 id="features-section-title" className="section-title">
        Fitur Utama untuk Keputusan Kos yang Cerdas
      </h2>
      <p className="lead">
        Dirancang khusus untuk mahasiswa dan pekerja yang ingin memilih tempat tinggal secara rasional, terukur, dan objektif.
      </p>

      <div className="features-stepped-grid">
        {/* Kolom Kiri: 1, 2, 3 */}
        <div className="features-stepped-col" role="list">
          {col1.map((feature, idx) => {
            const Icon = feature.icon;
            const stepNum = idx + 1;
            const isLast = idx === col1.length - 1;

            return (
              <article
                className={`feature-step-item ${isLast ? "is-last-in-col" : ""}`}
                key={feature.title}
                role="listitem"
              >
                <div className="feature-step-marker">
                  <div className="feature-step-badge" aria-label={`Langkah ${stepNum}`}>
                    {stepNum}
                  </div>
                  <div className="feature-step-line" aria-hidden="true" />
                </div>
                <div className="feature-step-body">
                  <div className="feature-step-head">
                    <span className="feature-step-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <h3 className="feature-step-title">{feature.title}</h3>
                  </div>
                  <p className="feature-step-desc">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Kolom Kanan: 4, 5, 6 */}
        <div className="features-stepped-col" role="list">
          {col2.map((feature, idx) => {
            const Icon = feature.icon;
            const stepNum = idx + 4;
            const isLast = idx === col2.length - 1;

            return (
              <article
                className={`feature-step-item ${isLast ? "is-last-in-col is-last-overall" : ""}`}
                key={feature.title}
                role="listitem"
              >
                <div className="feature-step-marker">
                  <div className="feature-step-badge" aria-label={`Langkah ${stepNum}`}>
                    {stepNum}
                  </div>
                  {!isLast && <div className="feature-step-line" aria-hidden="true" />}
                </div>
                <div className="feature-step-body">
                  <div className="feature-step-head">
                    <span className="feature-step-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <h3 className="feature-step-title">{feature.title}</h3>
                  </div>
                  <p className="feature-step-desc">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
