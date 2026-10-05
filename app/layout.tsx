import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const title = `${profile.name} | ${profile.title}`;
const description =
  "Portfolio d'Aurel, développeur web full-stack basé à Cotonou, Bénin. Laravel, PHP, MySQL, Next.js et Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: `Portfolio ${profile.name}`,
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${instrument.variable}`}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}