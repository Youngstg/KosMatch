import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken } from "@/lib/auth";
import { KosMatchWorkspace } from "@/features/workspace/components/kosmatch-workspace";

export const metadata: Metadata = {
  title: "Kalkulator DSS & Sistem Pendukung Keputusan Kos | KosMatch",
  description:
    "Bandingkan kos dengan kalkulator keputusan multi-kriteria berbasis AHP / TOPSIS, jarak riil ke kampus, dan simulasi biaya hidup total.",
  openGraph: {
    title: "Kalkulator DSS & Sistem Pendukung Keputusan Kos | KosMatch",
    description:
      "Bandingkan kos pilihan Anda dengan bobot kriteria personal dan estimasi biaya riil bulanan.",
  },
};

export default async function CalculatorPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("kosmatch_session")?.value;
  const user = token ? verifySessionToken(token) : null;

  if (!user) {
    redirect("/auth/login?redirect=/calculator");
  }

  return <KosMatchWorkspace currentUser={user} mode="calculator" />;
}
