import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftarkan Kos Baru",
  description: "Formulir pendaftaran dan pemetaan fasilitas lingkungan kos baru di KosMatch.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://kosmatch.us.ci/listings/new",
  },
};

export default function NewListingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

