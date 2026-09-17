import type { StyleDefinition } from "./style-definitions";

export type PreviewThemeMode = "default" | "light" | "dark";

/**
 * Calculates relative luminance of a HEX or RGB color.
 * Returns value between 0 (pure black) and 1 (pure white).
 */
export function getLuminance(color: string): number {
  let hex = color.trim();
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    } else if (hex.length === 8) {
      hex = hex.slice(0, 6);
    }
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const sRGB = [r, g, b].map((val) => {
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  }

  const rgbMatch = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10) / 255;
    const g = parseInt(rgbMatch[2], 10) / 255;
    const b = parseInt(rgbMatch[3], 10) / 255;
    const sRGB = [r, g, b].map((val) => {
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  }

  return 0.5;
}

/** Check whether a style's default canvas is dark. */
export function isStyleDark(def: StyleDefinition): boolean {
  return getLuminance(def.preview.bg) < 0.4;
}

/**
 * Handcrafted overrides for signature styles to guarantee maximum aesthetic delight in both themes.
 */
const SIGNATURE_THEME_OVERRIDES: Record<
  string,
  {
    dark?: Partial<StyleDefinition["preview"]> & {
      cardBorder?: string;
      cardShadow?: string;
    };
    light?: Partial<StyleDefinition["preview"]> & {
      cardBorder?: string;
      cardShadow?: string;
    };
  }
> = {
  "neo-brutalism": {
    dark: {
      bg: "#121214",
      surface: "#1D1E22",
      ink: "#FFFFFF",
      muted: "#A1A1AA",
      accent: "#FFE600",
      accent2: "#FF5C5C",
      cardBorder: "3px solid #FFFFFF",
      cardShadow: "4px 4px 0px #FFE600",
    },
  },
  "playful-brutalism": {
    dark: {
      bg: "#101015",
      surface: "#1C1D24",
      ink: "#FFFFFF",
      muted: "#94A3B8",
      accent: "#FF4081",
      accent2: "#00E5FF",
      cardBorder: "3px solid #FFFFFF",
      cardShadow: "4px 4px 0px #FF4081",
    },
  },
  "colorful-brutalism": {
    dark: {
      bg: "#0F1117",
      surface: "#1A1D27",
      ink: "#FFFFFF",
      muted: "#94A3B8",
      accent: "#00F5D4",
      accent2: "#7B2CBF",
      cardBorder: "3px solid #FFFFFF",
      cardShadow: "4px 4px 0px #00F5D4",
    },
  },
  "swiss-design": {
    dark: {
      bg: "#0A0A0B",
      surface: "#141416",
      ink: "#FFFFFF",
      muted: "#888890",
      accent: "#FF2B38",
      accent2: "#FFFFFF",
      cardBorder: "2.5px solid #FFFFFF",
      cardShadow: "none",
    },
  },
  "swiss-poster": {
    dark: {
      bg: "#09090A",
      surface: "#131315",
      ink: "#FFFFFF",
      muted: "#8A8A92",
      accent: "#FF3344",
      accent2: "#FFFFFF",
      cardBorder: "2.5px solid #FFFFFF",
      cardShadow: "none",
    },
  },
  "terminal": {
    light: {
      bg: "#F4F6F0",
      surface: "#FFFFFF",
      ink: "#14532D",
      muted: "#4D7C5D",
      accent: "#16A34A",
      accent2: "#15803D",
      cardBorder: "1.5px solid #16A34A",
      cardShadow: "0 0 16px rgba(22, 163, 74, 0.15)",
    },
  },
  "hacker-aesthetic": {
    light: {
      bg: "#F2F5F3",
      surface: "#FFFFFF",
      ink: "#052E16",
      muted: "#3F6212",
      accent: "#15803D",
      accent2: "#047857",
      cardBorder: "1.5px solid #15803D",
      cardShadow: "0 0 14px rgba(21, 128, 61, 0.18)",
    },
  },
  "cyberpunk": {
    light: {
      bg: "#F0F4F8",
      surface: "#FFFFFF",
      ink: "#0B0E14",
      muted: "#475569",
      accent: "#E11D48",
      accent2: "#0284C7",
      cardBorder: "2px solid #E11D48",
      cardShadow: "0 0 18px rgba(225, 29, 72, 0.25)",
    },
  },
  "linear-inspired": {
    light: {
      bg: "#F8FAFC",
      surface: "#FFFFFF",
      ink: "#0F172A",
      muted: "#64748B",
      accent: "#4F46E5",
      accent2: "#06B6D4",
      cardBorder: "1px solid rgba(15, 23, 42, 0.12)",
      cardShadow: "0 8px 30px rgba(79, 70, 229, 0.12)",
    },
  },
  "windows-95": {
    dark: {
      bg: "#121214",
      surface: "#242428",
      ink: "#F4F4F6",
      muted: "#9CA3AF",
      accent: "#3B82F6",
      accent2: "#00E5FF",
      cardBorder: "2px outset #52525B",
      cardShadow: "2px 2px 0px #000000",
    },
  },
  "notion-inspired": {
    dark: {
      bg: "#191919",
      surface: "#222222",
      ink: "#E3E2E0",
      muted: "#9B9A97",
      accent: "#2EAADC",
      accent2: "#EB5757",
      cardBorder: "1px solid rgba(255, 255, 255, 0.12)",
      cardShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
    },
  },
  "newspaper": {
    dark: {
      bg: "#111112",
      surface: "#18181A",
      ink: "#F4F4F5",
      muted: "#A1A1AA",
      accent: "#E11D48",
      accent2: "#FFFFFF",
      cardBorder: "1px solid rgba(255, 255, 255, 0.2)",
      cardShadow: "none",
    },
  },
  "minimal-editorial": {
    dark: {
      bg: "#0E0E10",
      surface: "#161619",
      ink: "#F8F8F9",
      muted: "#8E8E93",
      accent: "#FAFAFA",
      accent2: "#A1A1AA",
      cardBorder: "1px solid rgba(255, 255, 255, 0.12)",
      cardShadow: "none",
    },
  },
  "glassmorphism": {
    dark: {
      bg: "#0B0F19",
      surface: "rgba(255, 255, 255, 0.08)",
      ink: "#F8FAFC",
      muted: "#94A3B8",
      accent: "#38BDF8",
      accent2: "#A855F7",
      cardBorder: "1px solid rgba(255, 255, 255, 0.16)",
      cardShadow: "0 10px 32px rgba(0, 0, 0, 0.4)",
    },
  },
  "claymorphism": {
    dark: {
      bg: "#15161E",
      surface: "#212330",
      ink: "#F8FAFC",
      muted: "#94A3B8",
      accent: "#818CF8",
      accent2: "#F472B6",
      cardBorder: "none",
      cardShadow: "inset 2px 2px 4px rgba(255,255,255,0.1), inset -3px -3px 6px rgba(0,0,0,0.5), 8px 12px 24px rgba(0,0,0,0.4)",
    },
  },
};

/**
 * Resolves a StyleDefinition's visual tokens for the requested preview theme mode.
 * - "default": keeps the original DESIGN.md authentic palette.
 * - "light": guarantees a high-contrast light mode preview.
 * - "dark": guarantees a high-contrast dark mode preview.
 */
export function resolvePreviewTheme(
  def: StyleDefinition,
  mode: PreviewThemeMode = "default"
): StyleDefinition {
  if (mode === "default") return def;

  const currentlyDark = isStyleDark(def);

  // If already matches desired theme, return unmodified
  if (mode === "dark" && currentlyDark) return def;
  if (mode === "light" && !currentlyDark) return def;

  // Check custom signature overrides first
  const override = SIGNATURE_THEME_OVERRIDES[def.slug]?.[mode];
  if (override) {
    const { cardBorder, cardShadow, ...previewOverride } = override;
    return {
      ...def,
      preview: {
        ...def.preview,
        ...previewOverride,
      },
      cardBorder: cardBorder ?? def.cardBorder,
      cardShadow: cardShadow ?? def.cardShadow,
    };
  }

  const p = def.preview;

  if (mode === "dark") {
    // Transform light style -> dark style
    const darkBg = "#0E0E12";
    const darkSurface = "#17181F";
    const darkInk = "#F4F4F6";
    const darkMuted = "#94A3B8";

    // Adapt borders and shadows
    let nextBorder = def.cardBorder;
    if (def.cardBorder.includes("#111111") || def.cardBorder.includes("#000000") || def.cardBorder.includes("var(--ink)")) {
      nextBorder = def.cardBorder.replace(/#111111|#000000|var\(--ink\)/g, "#FFFFFF");
    } else if (def.cardBorder !== "none") {
      nextBorder = `1px solid rgba(255, 255, 255, 0.16)`;
    }

    let nextShadow = def.cardShadow;
    if (def.cardShadow.includes("#111111") || def.cardShadow.includes("#000000")) {
      nextShadow = def.cardShadow.replace(/#111111|#000000/g, p.accent || "#FFFFFF");
    } else if (def.cardShadow !== "none" && !def.cardShadow.includes("rgba")) {
      nextShadow = "0 8px 24px rgba(0, 0, 0, 0.4)";
    }

    return {
      ...def,
      preview: {
        ...p,
        bg: darkBg,
        surface: darkSurface,
        ink: darkInk,
        muted: darkMuted,
      },
      cardBorder: nextBorder,
      cardShadow: nextShadow,
    };
  }

  // Transform dark style -> light style
  const lightBg = "#F8FAFC";
  const lightSurface = "#FFFFFF";
  const lightInk = "#0F172A";
  const lightMuted = "#64748B";

  let nextBorder = def.cardBorder;
  if (def.cardBorder.includes("#FFFFFF") || def.cardBorder.includes("#fff")) {
    nextBorder = def.cardBorder.replace(/#FFFFFF|#fff/gi, "#0F172A");
  } else if (def.cardBorder !== "none") {
    nextBorder = `1px solid rgba(15, 23, 42, 0.14)`;
  }

  let nextShadow = def.cardShadow;
  if (def.cardShadow !== "none") {
    nextShadow = "0 6px 20px rgba(0, 0, 0, 0.08)";
  }

  return {
    ...def,
    preview: {
      ...p,
      bg: lightBg,
      surface: lightSurface,
      ink: lightInk,
      muted: lightMuted,
    },
    cardBorder: nextBorder,
    cardShadow: nextShadow,
  };
}
