import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  IBM_Plex_Mono,
  Source_Sans_3,
} from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

/* --- Font loading (only these four) --- */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "lighght — minimalist poetry studio",
  description:
    "A digital minimalist poetry museum and studio inspired by Aram Saroyan. Create, share, and explore the art of one-word poems.",
  openGraph: {
    title: "lighght",
    description: "Minimalist poetry museum and studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${ibmPlexMono.variable} ${sourceSans.variable}`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
