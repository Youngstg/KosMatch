import type { Metadata } from "next";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/auth";
import { LandingJsonLd } from "@/features/landing";
import { KosMatchWorkspace } from "@/features/workspace/components/kosmatch-workspace";

export const metadata: Metadata = {
  title: "KosMatch - Keputusan Hunian & Rekomendasi Kos Cerdas Kampus",
  description:
    "Platform pendukung keputusan (DSS) pemilihan kos mahasiswa berbasis kebutuhan nyata, estimasi biaya hidup, dan rute jarak riil ke kampus tanpa sponsor.",
  alternates: {
    canonical: "https://kosmatch.us.ci",
  },
  openGraph: {
    title: "KosMatch - Keputusan Hunian & Rekomendasi Kos Cerdas Kampus",
    description:
      "Bandingkan biaya bulanan sebenarnya, fasilitas wajib, dan jarak riil ke kampus secara transparan dan objektif.",
    url: "https://kosmatch.us.ci",
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("kosmatch_session")?.value;
  const user = token ? verifySessionToken(token) : null;

  return (
    <>
      <LandingJsonLd />
      <KosMatchWorkspace currentUser={user} mode="landing" />
    </>
  );
}
