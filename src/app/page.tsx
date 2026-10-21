import { LandingJsonLd } from "@/features/landing";
import { KosMatchWorkspace } from "@/features/workspace/components/kosmatch-workspace";

export default function Home() {
  return (
    <>
      <LandingJsonLd />
      <KosMatchWorkspace />
    </>
  );
}
