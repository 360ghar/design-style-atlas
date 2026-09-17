import type { StyleMeta } from "./styles";
import { getLuminance } from "./preview-theme";

export type VibeBrightness = "dark" | "light";
export type VibeSaturation = "saturated" | "muted";
export type VibeType = "serif" | "sans" | "mono";
export type VibeMood = "playful" | "serious";

export interface StyleVibes {
  brightness: VibeBrightness;
  saturation: VibeSaturation;
  type: VibeType;
  mood: VibeMood;
}

const SATURATED_HINTS = [
  "bold", "neon", "colorful", "vibrant", "psychedelic", "maximal",
  "playful", "y2k", "retro", "synth", "vapor", "comic", "graffiti",
  "gaming", "holographic", "chrome", "glow", "gradient", "aurora",
  "memphis", "pop", "punk", "brutal", "cyber", "chaos", "collage",
];
const MUTED_HINTS = [
  "minimal", "muted", "monochrome", "luxury", "editorial", "quiet",
  "swiss", "scandinavian", "japandi", "wabi", "corporate", "functional",
  "notion", "saas", "newspaper", "serif",
];
const PLAYFUL_HINTS = [
  "playful", "fun", "bold", "psychedelic", "comic", "graffiti", "punk",
  "y2k", "gaming", "maximal", "collage", "zine", "scrapbook", "memphis",
  "pop", "brutal", "chaos", "surreal", "dream",
];
const SERIOUS_HINTS = [
  "minimal", "corporate", "swiss", "editorial", "luxury", "functional",
  "saas", "bento", "card", "stripe", "linear", "notion", "newspaper",
];

function hayOf(s: StyleMeta): string {
  return `${s.name} ${s.description} ${s.category} ${s.tags.join(" ")} ${s.slug}`.toLowerCase();
}

export function getVibes(style: StyleMeta): StyleVibes {
  const hay = hayOf(style);

  // Brightness from actual bg luminance (source of truth).
  let brightness: VibeBrightness = "light";
  try {
    brightness = getLuminance(style.preview.bg) < 0.4 ? "dark" : "light";
  } catch {
    brightness = "light";
  }

  // Saturation: muted hints win over saturated hints for editorial/luxury/minimal.
  const satScore =
    SATURATED_HINTS.filter((h) => hay.includes(h)).length -
    MUTED_HINTS.filter((h) => hay.includes(h)).length;
  const saturation: VibeSaturation = satScore > 0 ? "saturated" : "muted";

  // Type from display font stack. Strip "sans-serif" / "sans serif" first
  // so the generic fallback never matches the "serif" substring check.
  const display = style.preview.display.toLowerCase().replace(/sans[\s-]?serif/g, "");
  let type: VibeType = "sans";
  if (
    display.includes("mono") ||
    display.includes("jetbrains") ||
    display.includes("courier") ||
    display.includes("terminal") ||
    display.includes("plex mono") ||
    display.includes("space mono")
  ) {
    type = "mono";
  } else if (
    display.includes("serif") ||
    display.includes("georgia") ||
    display.includes("times") ||
    display.includes("bodoni") ||
    display.includes("didot") ||
    display.includes("playfair") ||
    display.includes("newsreader") ||
    display.includes("garamond") ||
    display.includes("baskerville") ||
    display.includes("cormorant")
  ) {
    type = "serif";
  }

  // Mood: playful hints win unless strongly serious.
  const playful = PLAYFUL_HINTS.filter((h) => hay.includes(h)).length;
  const serious = SERIOUS_HINTS.filter((h) => hay.includes(h)).length;
  const mood: VibeMood = playful > serious ? "playful" : "serious";

  return { brightness, saturation, type, mood };
}

export function matchesVibes(
  style: StyleMeta,
  f: Partial<StyleVibes>,
  cache?: Map<string, StyleVibes>
): boolean {
  const v = cache?.get(style.slug) ?? getVibes(style);
  if (f.brightness && v.brightness !== f.brightness) return false;
  if (f.saturation && v.saturation !== f.saturation) return false;
  if (f.type && v.type !== f.type) return false;
  if (f.mood && v.mood !== f.mood) return false;
  return true;
}

/** Keyword vibe matcher for agents: "dark playful neon serif dashboard" -> ranked slugs. */
export function matchVibeQuery(
  all: StyleMeta[],
  query: string,
  limit = 5
): StyleMeta[] {
  const toks = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (toks.length === 0) return all.slice(0, limit);
  const scored = all.map((s) => {
    const hay = hayOf(s);
    const vibes = getVibes(s);
    const vibeHay = `${vibes.brightness} ${vibes.saturation} ${vibes.type} ${vibes.mood}`;
    let score = 0;
    for (const t of toks) {
      if (hay.includes(t)) score += 2;
      if (vibeHay.includes(t)) score += 3;
    }
    return { s, score };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.s);
}
