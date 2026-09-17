import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SITE_URL } from "./lib/site";
import { getStyleCount } from "./lib/styles";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = SITE_URL;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf8",
};

export async function generateMetadata(): Promise<Metadata> {
  const count = getStyleCount();
  const title = `${count} DESIGN.md Files for AI Coding Agents — Design Styles`;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s — Design Styles",
    },
    description: `${count} ready-to-use DESIGN.md files for AI coding agents. Browse a visual style, preview it, and copy its complete instructions into Codex, Claude Code, Cursor, or Windsurf.`,
    keywords: [
      "DESIGN.md",
      "DESIGN.md for AI agents",
      "design styles for AI coding agents",
      "AI coding agents",
      "Codex",
      "Claude Code",
      "Cursor",
      "Windsurf",
      "v0",
      "Lovable",
      "neo-brutalism",
      "swiss design",
      "web design styles",
    ],
    authors: [{ name: "Design Styles" }],
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION after claiming the domain in
    // Search Console; empty string omits the tag.
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
    alternates: { canonical: siteUrl },
    openGraph: {
      type: "website",
      siteName: "Design Styles",
      title,
      description: `Give your coding agent a reusable visual direction. Browse ${count} styles, preview each one, copy its DESIGN.md.`,
      url: siteUrl,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `${count} ready-to-use DESIGN.md files for Codex, Claude Code, Cursor & Windsurf.`,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

import { ThemeProvider } from "./components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('design-styles-theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (supportDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--paper)] text-[var(--ink)]">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
