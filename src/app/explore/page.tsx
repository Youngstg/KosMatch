import type { Metadata } from "next";
import { MapExplorer } from "@/features/map";

export const metadata: Metadata = {
  title: "Peta Interaktif & Eksplorasi Lingkungan Kos",
  description:
    "Eksplorasi peta interaktif pilot Depok (Universitas Indonesia) dan Padang (Universitas Andalas). Cek radius kampus dan uji lokasi kos kandidat.",
  openGraph: {
    title: "Peta Interaktif & Eksplorasi Lingkungan Kos | KosMatch",
    description:
      "Eksplorasi radius kampus pilot UI Depok dan Unand Limau Manis pada peta OpenStreetMap interaktif.",
  },
};

export default function ExplorePage() {
  return <MapExplorer />;
}
