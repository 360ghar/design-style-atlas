/**
 * Central site configuration for Design Styles.
 *
 * Maintainer overrides (no code changes needed):
 *   NEXT_PUBLIC_SITE_URL    → canonical origin, e.g. "https://design-styles.dev"
 *   NEXT_PUBLIC_GITHUB_URL  → repo URL, e.g. "https://github.com/<org>/<repo>"
 *
 * Set them in your shell / hosting env (Vercel → Project Settings → Environment
 * Variables) or in a local `.env.local` file:
 *   NEXT_PUBLIC_SITE_URL=https://design-styles.dev
 *   NEXT_PUBLIC_GITHUB_URL=https://github.com/<org>/<repo>
 *
 * Defaults below point at this project's real repository and demo domain so a
 * deploy without env vars still links somewhere correct.
 */

// `??` alone keeps an empty-string env var, and `new URL("")` throws in
// layout.tsx. Treat blank (and whitespace-only) values as unset.
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://design-styles.dev";
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
  "https://github.com/360ghar/design-style-atlas";
