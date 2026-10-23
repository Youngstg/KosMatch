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
  return (
    <section className="container steps" aria-labelledby="features-section-title">
      <div className="eyebrow">Fitur unggulan</div>
      <h2 id="features-section-title" className="section-title">
        Fitur Utama untuk Keputusan Kos yang Cerdas
      </h2>
      <p className="lead">
        Dirancang khusus untuk mahasiswa dan pekerja yang ingin memilih tempat tinggal secara rasional, terukur, dan objektif.
      </p>
      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-card" key={feature.title}>
              <div className="step-number" aria-hidden="true">
                <Icon size={18} />
              </div>
              <h3>{feature.title}</h3>
              <p className="muted">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
