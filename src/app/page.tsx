import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/auth";
import { LandingJsonLd } from "@/features/landing";
import { KosMatchWorkspace } from "@/features/workspace/components/kosmatch-workspace";

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
