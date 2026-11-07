import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Pengelolaan Kos & Admin",
  description: "Portal pengelolaan dan verifikasi listing kos KosMatch untuk pemilik properti dan administrator.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://kosmatch.us.ci/admin",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

