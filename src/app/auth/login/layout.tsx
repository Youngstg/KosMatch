import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masuk",
  description:
    "Masuk atau daftar ke akun KosMatch Anda untuk menyimpan preferensi kos, analisis biaya hidup, dan perbandingan DSS.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "https://kosmatch.us.ci/auth/login",
  },
  openGraph: {
    title: "Masuk ke Akun | KosMatch",
    description: "Masuk atau daftar ke akun KosMatch Anda.",
    url: "https://kosmatch.us.ci/auth/login",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

