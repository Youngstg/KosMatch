import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken } from "@/lib/auth";
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

export default async function ExplorePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("kosmatch_session")?.value;
  const user = token ? verifySessionToken(token) : null;

  if (!user) {
    redirect("/auth/login?redirect=/explore");
  }

  return <MapExplorer />;
}
