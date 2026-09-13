import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KosMatch — Bandingkan biaya kos sebenarnya",
  description: "Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi secara transparan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
