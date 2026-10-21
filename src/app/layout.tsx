import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kosmatch.us.ci"),
  title: {
    default: "KosMatch — Bandingkan Biaya Kos Sebenarnya & Sistem Pendukung Keputusan",
    template: "%s | KosMatch",
  },
  description:
    "Aplikasi pendukung keputusan (DSS) pemilihan kos transparan. Bandingkan biaya bulanan sebenarnya (sewa, listrik, ongkos transport harian), fasilitas wajib, dan aturan secara objektif tanpa sponsor.",
  keywords: [
    "cari kos",
    "bandingkan kos",
    "hitung biaya kos",
    "kos mahasiswa",
    "keputusan kos",
    "decision support system kos",
    "kalkulator kos",
    "kosmatch",
  ],
  authors: [{ name: "KosMatch" }],
  creator: "KosMatch",
  publisher: "KosMatch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kosmatch.us.ci",
    title: "KosMatch — Bandingkan Biaya Kos Sebenarnya",
    description:
      "Kalkulator biaya hidup dan alat bantu perbandingan kos transparan berbasis kebutuhan nyata dan privasi 100%.",
    siteName: "KosMatch",
    images: [
      {
        url: "/screenshots/landing-desktop-chromium.png",
        width: 1280,
        height: 720,
        alt: "Tampilan KosMatch Decision Support System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KosMatch — Bandingkan Biaya Kos Sebenarnya",
    description:
      "Kalkulator biaya hidup dan alat bantu perbandingan kos transparan berbasis kebutuhan nyata dan privasi 100%.",
    images: ["/screenshots/landing-desktop-chromium.png"],
  },
  alternates: {
    canonical: "https://kosmatch.us.ci",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
