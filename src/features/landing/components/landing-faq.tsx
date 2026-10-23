const faqs = [
  {
    question: "Apa itu KosMatch dan apa bedanya dengan aplikasi sewa kos biasa?",
    answer:
      "KosMatch bukan agen properti atau direktori sewa berbayar, melainkan Sistem Pendukung Keputusan (Decision Support System / DSS) independen. Aplikasi sewa biasa biasanya menonjolkan iklan sponsor dan harga sewa kamar semata. KosMatch membantu Anda membandingkan total pengeluaran riil (sewa + utilitas + transport harian) serta menguji pemenuhan kebutuhan wajib secara objektif.",
  },
  {
    question: "Bagaimana cara KosMatch menghitung total biaya kos?",
    answer:
      "KosMatch menjumlahkan biaya sewa kamar dengan seluruh biaya rutin bulanan yang sering terlupakan (listrik, air, internet/wifi, laundry, iuran sampah/keamanan), ditambah estimasi ongkos transportasi bulanan bolak-balik ke kampus atau kantor berdasarkan hari mobilitas rutin Anda.",
  },
  {
    question: "Apakah data dan catatan pribadi saya aman?",
    answer:
      "Sangat aman. KosMatch memproses seluruh komputasi dan analisis perbandingan Anda secara terproteksi. Data preferensi, anggaran, dan simulasi Anda dijaga kerahasiaannya dengan standar privasi modern tanpa manipulasi atau penjualan data ke pihak ketiga.",
  },
  {
    question: "Mengapa kos yang lebih murah tidak selalu berada di urutan teratas?",
    answer:
      "Karena lokasi yang murah bisa jadi jauh dari kampus atau kantor sehingga ongkos transportasi hariannya mahal, atau kos tersebut tidak memenuhi fasilitas wajib yang Anda butuhkan (seperti kamar mandi dalam atau jam malam bebas). KosMatch mengevaluasi trade-off secara seimbang antara biaya, perjalanan, fasilitas, dan aturan.",
  },
  {
    question: "Apakah KosMatch memungut biaya atau komisi?",
    answer:
      "Tidak. KosMatch 100% gratis digunakan sebagai alat bantu analisis mandiri bagi mahasiswa, pekerja perantau, maupun orang tua yang ingin mengambil keputusan tempat tinggal terbaik.",
  },
] as const;

export function LandingFaq() {
  return (
    <section className="container steps" aria-labelledby="faq-section-title">
      <div className="eyebrow">Tanya jawab</div>
      <h2 id="faq-section-title" className="section-title">
        Pertanyaan yang Sering Diajukan
      </h2>
      <p className="lead">
        Segala hal yang perlu Anda ketahui tentang cara kerja perhitungan, privasi, dan transparansi di KosMatch.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details className="faq-item" key={faq.question} open={index === 0}>
            <summary>{faq.question}</summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
