import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atur Ulang Kata Sandi",
  description: "Atur ulang kata sandi akun KosMatch Anda secara aman.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "https://kosmatch.us.ci/auth/reset-password",
  },
  openGraph: {
    title: "Atur Ulang Kata Sandi | KosMatch",
    description: "Atur ulang kata sandi akun KosMatch Anda secara aman.",
    url: "https://kosmatch.us.ci/auth/reset-password",
  },
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

