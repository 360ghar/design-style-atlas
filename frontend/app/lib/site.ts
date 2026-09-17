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
 * Defaults below are real-looking placeholders — replace via env when the
 * final org/repo and domain are confirmed.
 */

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://design-styles.dev";
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ??
  "https://github.com/design-styles/design-styles";
