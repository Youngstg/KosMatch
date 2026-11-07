import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken } from "@/lib/auth";
import { MapExplorer } from "@/features/map";

export const metadata: Metadata = {
  title: "Peta Kampus & Eksplorasi Lingkungan Kos",
  description:
    "Eksplorasi peta interaktif kos di sekitar kampus (UI Depok, Unand Padang, dll). Cek radius kampus, profil warung makan, laundry, dan rute perjalanan nyata.",
  alternates: {
    canonical: "https://kosmatch.us.ci/explore",
  },
  openGraph: {
    title: "Peta Kampus & Eksplorasi Lingkungan Kos | KosMatch",
    description:
      "Eksplorasi kos di sekitar radius kampus pada peta interaktif lengkap dengan rute dan fasilitas esensial.",
    url: "https://kosmatch.us.ci/explore",
  },
};

export default async function ExplorePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("kosmatch_session")?.value;
  const user = token ? verifySessionToken(token) : null;

  if (!user) {
    redirect("/auth/login?redirect=/explore");
  }

  return <MapExplorer currentUser={user} />;
}
