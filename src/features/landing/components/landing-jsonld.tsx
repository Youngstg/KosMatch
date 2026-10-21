export function LandingJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "KosMatch",
        "applicationCategory": "DecisionSupportSystem",
        "operatingSystem": "Web Browser",
        "url": "https://kosmatch.us.ci",
        "description":
          "Aplikasi pendukung keputusan (DSS) pemilihan kos transparan berbasis total biaya bulanan nyata, waktu perjalanan, fasilitas wajib, dan aturan kos tanpa sponsor.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR",
        },
        "featureList": [
          "Kalkulasi total biaya hidup bulanan nyata (sewa, listrik, air, internet, transport)",
          "Penyaringan fasilitas wajib vs preferensi fleksibel",
          "Perbandingan berdampingan hingga 3 kos",
          "Simulator biaya dan skenario komutasi",
          "Penyimpanan lokal di browser (IndexedDB) yang aman dan privat",
          "Ekspor ringkasan keputusan PDF dan backup JSON",
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Apa itu KosMatch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KosMatch adalah alat bantu keputusan (Decision Support System) untuk membandingkan pilihan kos secara objektif berdasarkan total biaya bulanan sebenarnya, jarak dan waktu perjalanan, pemenuhan fasilitas wajib, serta kesesuaian aturan, tanpa sponsor atau promosi berbayar.",
            },
          },
          {
            "@type": "Question",
            "name": "Bagaimana KosMatch menghitung total biaya kos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KosMatch menggabungkan harga sewa kamar dengan biaya rutin bulanan (listrik, air, internet, laundry, biaya lain), biaya awal masuk (deposit, kunci/kebersihan), serta estimasi ongkos transportasi harian bolak-balik ke kampus atau kantor.",
            },
          },
          {
            "@type": "Question",
            "name": "Apakah data kos saya aman dan privat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, 100% data proyek dan catatan perbandingan kos Anda disimpan secara lokal di browser Anda menggunakan IndexedDB. Tidak ada data yang dikirim ke server tanpa tindakan sengaja dari Anda.",
            },
          },
          {
            "@type": "Question",
            "name": "Bagaimana skor kecocokan kos dihitung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Skor kecocokan dihitung secara transparan berdasarkan pembobotan preferensi Anda (biaya total, waktu perjalanan, fasilitas, lingkungan, dan aturan). Kos yang tidak memenuhi kebutuhan wajib ditandai secara jelas agar Anda tidak salah pilih.",
            },
          },
          {
            "@type": "Question",
            "name": "Apakah KosMatch mempromosikan kos tertentu (sponsored listing)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tidak. KosMatch dirancang sebagai alat pendukung keputusan yang netral dan independen, tanpa iklan berbayar atau komisi dari pemilik kos.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
