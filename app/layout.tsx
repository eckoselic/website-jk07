import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SDN Jatinegara Kaum 07 Pagi",
    template: "%s — SDN Jatinegara Kaum 07 Pagi",
  },
  description:
    "Website resmi SDN Jatinegara Kaum 07 Pagi — profil sekolah, berita, kegiatan, dan informasi PPDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${workSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
