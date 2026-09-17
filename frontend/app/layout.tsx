import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SITE_URL } from "./lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = SITE_URL;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Design Styles — 100 design styles for AI coding agents",
    template: "%s — Design Styles",
  },
  description:
    "100 ready-to-use DESIGN.md files for AI coding agents. Browse a visual style, preview it, and copy its complete instructions into Codex, Claude Code, Cursor, or Windsurf.",
  keywords: [
    "DESIGN.md",
    "design styles",
    "AI coding agents",
    "Codex",
    "Claude Code",
    "Cursor",
    "neo-brutalism",
    "swiss design",
    "web design styles",
  ],
  authors: [{ name: "Design Styles" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "Design Styles",
    title: "Design Styles — 100 design styles for AI coding agents",
    description:
      "Give your coding agent a reusable visual direction. Browse 100 styles, preview each one, copy its DESIGN.md.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Design Styles — 100 design styles for AI coding agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Styles — 100 design styles for AI coding agents",
    description:
      "100 ready-to-use DESIGN.md files for Codex, Claude Code, Cursor & Windsurf.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
