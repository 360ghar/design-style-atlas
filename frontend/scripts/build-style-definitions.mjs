import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "designs");
const dest = join(here, "..", "app", "lib", "style-definitions.ts");

const slugs = readdirSync(root).sort();

function getSection(content, num) {
  const re = new RegExp(`## ${num}\\.[^\\n]*\\n\\n([\\s\\S]*?)(?=\\n## |$)`);
  const m = content.match(re);
  return m ? m[1].trim() : "";
}

function resolveCardBorder(slug, bText, ink, muted, accent, bg) {
  const t = bText.toLowerCase();
  if (slug === "windows-95") return "2px outset #ffffff";
  if (slug === "claymorphism") return "none";
  if (slug === "neumorphism") return "none";
  if (slug === "cyberpunk" || slug === "sci-fi-ui") return `1.5px solid ${accent}`;
  if (slug === "glassmorphism") return "1px solid rgba(255, 255, 255, 0.35)";
  if (slug === "art-deco") return `2px double ${accent}`;
  if (slug === "neo-brutalism" || slug === "playful-brutalism" || slug === "colorful-brutalism" || slug === "comic-pop-art") {
    return "3px solid #111111";
  }
  if (slug === "brutalism" || slug === "corporate-brutalism" || slug === "editorial-brutalism" || slug === "industrial-brutalism") {
    return `2.5px solid ${ink}`;
  }
  if (slug === "pixel-8bit") return "3px solid #000000";
  if (t.includes("none") || t.includes("borderless")) return "none";
  if (t.includes("2–3px") || t.includes("2-3px") || t.includes("3px")) return `2.5px solid ${ink}`;
  if (t.includes("2px")) return `2px solid ${ink}`;
  if (t.includes("hairline") || t.includes("1px")) return `1px solid ${ink}22`;
  return `1px solid ${ink}1a`;
}

function resolveCardShadow(slug, sText, ink, accent, accent2) {
  const t = sText.toLowerCase();
  if (slug === "windows-95") return "2px 2px 0px #000000";
  if (slug === "neumorphism") return "6px 6px 14px rgba(163,177,198,0.6), -6px -6px 14px rgba(255,255,255,0.8)";
  if (slug === "claymorphism") {
    return "inset 2px 2px 4px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.12), 8px 12px 20px rgba(0,0,0,0.12)";
  }
  if (slug === "glassmorphism") return "0 10px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
  if (slug === "cyberpunk" || slug === "sci-fi-ui") return `0 0 18px ${accent}66, inset 0 0 12px ${accent}22`;
  if (slug === "synthwave" || slug === "vaporwave") return `0 0 24px ${accent}55, 0 8px 32px rgba(0,0,0,0.4)`;
  if (slug === "neo-brutalism" || slug === "playful-brutalism" || slug === "colorful-brutalism" || slug === "comic-pop-art") {
    return "4px 4px 0px #111111";
  }
  if (slug === "pixel-8bit") return "4px 4px 0px #000000";
  if (slug === "bento-grid" || slug === "card-based-ui" || slug === "corporate-saas") {
    return "0 4px 20px rgba(0,0,0,0.06)";
  }
  if (slug === "linear-inspired") return `0 0 40px ${accent}25, 0 8px 28px rgba(0,0,0,0.5)`;
  if (slug === "y2k") return `0 0 20px ${accent}66, 0 8px 24px rgba(0,0,0,0.3)`;
  if (slug === "aurora-glow" || slug === "holographic") return `0 12px 40px ${accent}44`;
  if (t.includes("none") || t.includes("flat") || t.includes("settles")) return "none";
  if (t.includes("hard offset") || t.includes("offset")) return `4px 4px 0px ${ink}`;
  if (t.includes("glow")) return `0 0 20px ${accent}55`;
  return "0 2px 8px rgba(0,0,0,0.05)";
}

function resolveRadius(slug, rText) {
  const t = rText.toLowerCase();
  if (slug === "windows-95" || slug === "swiss-design" || slug === "swiss-poster" || slug === "fashion-editorial" || slug === "newspaper" || slug === "bauhaus" || slug === "pixel-8bit") {
    return { card: "0px", btn: "0px", badge: "0px" };
  }
  if (slug === "claymorphism") {
    return { card: "28px", btn: "9999px", badge: "9999px" };
  }
  if (slug === "glassmorphism") {
    return { card: "20px", btn: "9999px", badge: "9999px" };
  }
  if (slug === "neumorphism") {
    return { card: "18px", btn: "9999px", badge: "9999px" };
  }
  if (slug === "bento-grid") {
    return { card: "18px", btn: "10px", badge: "9999px" };
  }
  if (slug === "linear-inspired") {
    return { card: "8px", btn: "6px", badge: "9999px" };
  }
  if (slug === "y2k") {
    return { card: "20px", btn: "9999px", badge: "9999px" };
  }
  if (slug === "neo-brutalism" || slug === "playful-brutalism" || slug === "colorful-brutalism") {
    return { card: "4px", btn: "4px", badge: "9999px" };
  }
  if (t.includes("0px") || t.includes("sharp") || t.includes("square")) {
    return { card: "0px", btn: "0px", badge: "0px" };
  }
  if (t.includes("pills") || t.includes("pill") || t.includes("9999px") || t.includes("999px")) {
    return { card: "16px", btn: "9999px", badge: "9999px" };
  }
  if (t.includes("24px") || t.includes("20px") || t.includes("16px")) {
    return { card: "16px", btn: "8px", badge: "9999px" };
  }
  if (t.includes("8px") || t.includes("6px") || t.includes("4px")) {
    return { card: "8px", btn: "6px", badge: "6px" };
  }
  return { card: "8px", btn: "6px", badge: "9999px" };
}

function resolveSignatureType(slug) {
  if (["terminal", "hacker-aesthetic"].includes(slug)) return "terminal";
  if (slug === "windows-95") return "windows95";
  if (slug === "mac-os") return "macos";
  if (["cyberpunk", "sci-fi-ui", "futurism"].includes(slug)) return "cyberpunk";
  if (["neo-brutalism", "playful-brutalism", "colorful-brutalism", "comic-pop-art"].includes(slug)) return "neobrutalism";
  if (["swiss-design", "swiss-poster", "poster-inspired"].includes(slug)) return "swiss";
  if (["glassmorphism", "liquid-chrome"].includes(slug)) return "glassmorphism";
  if (slug === "claymorphism") return "claymorphism";
  if (slug === "neumorphism") return "neumorphism";
  if (["fashion-editorial", "editorial-magazine", "editorial-minimalism"].includes(slug)) return "fashion";
  if (["bento-grid", "card-based-ui"].includes(slug)) return "bento";
  if (slug === "linear-inspired") return "linear";
  if (["stripe-inspired", "gradient-design", "aurora-glow", "holographic"].includes(slug)) return "stripe";
  if (["y2k", "retro-internet", "webcore"].includes(slug)) return "y2k";
  if (["vaporwave", "synthwave"].includes(slug)) return "vaporwave";
  if (slug === "pixel-8bit" || slug === "gaming-ui") return "pixel";
  if (slug === "notion-inspired") return "notion";
  if (slug === "newspaper") return "newspaper";
  if (slug === "bauhaus") return "bauhaus";
  if (slug === "memphis") return "memphis";
  if (["quiet-luxury", "luxury-minimalism", "luxury-maximalism"].includes(slug)) return "quietluxury";
  if (["art-deco", "art-nouveau", "gothic-victorian"].includes(slug)) return "artdeco";
  if (["apple-liquid-glass", "frutiger-aero"].includes(slug)) return "glassmorphism";
  if (["material-expressive", "web3-crypto"].includes(slug)) return "stripe";
  if (slug === "fintech-neobank") return "linear";
  if (slug === "kawaii-pop") return "claymorphism";
  if (slug === "mcbling") return "y2k";
  if (slug === "dark-academia") return "newspaper";
  if (slug === "ai-conversational") return "notion";
  if (slug === "dataviz-terminal") return "terminal";
  return "bento";
}

function resolveCopy(slug, name, cat, desc) {
  const c = cat.toLowerCase();
  let eyebrow = "01 / SPECIMEN";
  let headline = `${name}`;
  let subhead = desc;
  let navCta = "Get Started";
  let primaryCta = "Explore Specimen";
  let secondaryCta = "Read Spec";
  let featureTitle = "Core Principle";
  let featureDesc = "Disciplined design tokens executed with deliberate craft.";
  let metricValue = "100%";
  let metricLabel = "Style Fidelity";
  let metricDelta = "▲ Active";
  let planName = "Pro Edition";
  let planPrice = "$49";
  let planFeatures = ["Complete DESIGN.md Spec", "Full Component Tokens", "Commercial License"];

  if (slug === "neo-brutalism" || slug === "playful-brutalism" || slug === "colorful-brutalism") {
    eyebrow = "★ NEW DROP";
    headline = "LOUD. PROUD. SHIPPED.";
    subhead = "High-contrast borders, punchy offset shadows, and unapologetic saturation.";
    navCta = "Claim Drop";
    primaryCta = "Deploy Now";
    secondaryCta = "Inspect CSS";
    featureTitle = "Zero-Blur Shadows";
    featureDesc = "Hard 4px offset shadows with pure black borders that never compromise.";
    metricValue = "3.0px";
    metricLabel = "Border Weight";
    metricDelta = "★ Bold";
    planPrice = "$0";
    planFeatures = ["Zero subtle gradients", "Offset shadow stack", "Raw high-impact UI"];
  } else if (slug === "swiss-design" || slug === "swiss-poster") {
    eyebrow = "ZÜRICH · 1957";
    headline = "THE DISCIPLINE OF THE GRID.";
    subhead = "Asymmetric column structures, flush-left typography, and pure mathematical clarity.";
    navCta = "Index";
    primaryCta = "Order System";
    secondaryCta = "Documentation";
    featureTitle = "12-Column Rhythm";
    featureDesc = "Every typographic element aligns strictly to the underlying baseline grid.";
    metricValue = "12 Col";
    metricLabel = "Grid Precision";
    metricDelta = "● Pure";
    planPrice = "CHF 120";
    planFeatures = ["Flush-left ragged-right", "Pure Helvetica hierarchy", "Mathematical white space"];
  } else if (slug === "terminal" || slug === "hacker-aesthetic") {
    eyebrow = "SYS_PROMPT // 0x7F";
    headline = "INITIALIZE_AGENT.SH";
    subhead = "Monospace terminal streams, green-on-black phosphor glows, and ASCII dividers.";
    navCta = "EXEC";
    primaryCta = "run --prod";
    secondaryCta = "cat manual";
    featureTitle = "Stdio Streams";
    featureDesc = "Real-time telemetry and process logging directly in the browser canvas.";
    metricValue = "0.04ms";
    metricLabel = "Syscall Latency";
    metricDelta = "[ OK ]";
    planPrice = "0.00 BTC";
    planFeatures = ["Raw ANSI escape sequences", "Phosphor CRT blur effect", "Instant keyboard shortcut chrome"];
  } else if (slug === "windows-95") {
    eyebrow = "C:\\WINDOWS\\SYSTEM.INI";
    headline = "Welcome to the Desktop";
    subhead = "The definitive 3D bevel system: raised outset controls, recessed wells, and 16-color icons.";
    navCta = "Start";
    primaryCta = "OK";
    secondaryCta = "Cancel";
    featureTitle = "3D Outset Chrome";
    featureDesc = "Classic dual-tone beveled edges creating tangible spatial hierarchy without drop shadows.";
    metricValue = "32-bit";
    metricLabel = "OS Architecture";
    metricDelta = "Ready";
    planPrice = "$99";
    planFeatures = ["Classic 2px outset bevels", "Sunken inset text fields", "Dotted active focus rings"];
  } else if (slug === "mac-os") {
    eyebrow = "Finder · Version 10.0";
    headline = "Think Different.";
    subhead = "Platinum brushed metal, pulsating Aqua gel controls, and translucent menu drops.";
    navCta = "Install";
    primaryCta = "Launch App";
    secondaryCta = "Get Info";
    featureTitle = "Aqua Translucency";
    featureDesc = "Gelatinous rounded pills with glass highlights and buttery smooth drop shadows.";
    metricValue = "60 FPS";
    metricLabel = "Quartz Engine";
    metricDelta = "Aqua";
    planPrice = "$129";
    planFeatures = ["Red/Yellow/Green window lights", "Brushed metal and pin stripes", "Aqua drop reflection"];
  } else if (slug === "cyberpunk" || slug === "sci-fi-ui") {
    eyebrow = "NEO-SHINJUKU // 2077";
    headline = "NEURAL LINK ESTABLISHED";
    subhead = "Chamfered HUD keylines, high-voltage neon bleed, and scanline frequency grids.";
    navCta = "Override";
    primaryCta = "Jack In";
    secondaryCta = "Bypass Ice";
    featureTitle = "Chamfered Geometry";
    featureDesc = "Angled clip-path corners with 2px cyan & magenta glowing keylines.";
    metricValue = "99.98%";
    metricLabel = "Cyberdeck Sync";
    metricDelta = "OVERCLOCKED";
    planPrice = "¥8,400";
    planFeatures = ["Cyan/Magenta dual neon glows", "Angled chamfer corner clips", "Audio frequency visualizer"];
  } else if (slug === "glassmorphism") {
    eyebrow = "FROSTED CANVAS";
    headline = "Vivid Light, Captured in Glass";
    subhead = "Multi-layer translucent planes with backdrop-blur keylines floating above vibrant ambient gradients.";
    navCta = "Experience";
    primaryCta = "Explore Layers";
    secondaryCta = "Inspect Blur";
    featureTitle = "Backdrop Filter";
    featureDesc = "Specular reflections with inset white highlights creating physical depth.";
    metricValue = "18px";
    metricLabel = "Frosted Blur";
    metricDelta = "Ambient";
    planPrice = "$39";
    planFeatures = ["16px backdrop-filter blur", "1px translucent specular borders", "Vibrant ambient color orbs"];
  } else if (slug === "claymorphism") {
    eyebrow = "3D TACTILE";
    headline = "Soft, Playful, Dimensional.";
    subhead = "Puffy extruded clay surfaces with layered inner highlights and floating drop shadows.";
    navCta = "Play";
    primaryCta = "Touch Clay";
    secondaryCta = "View Models";
    featureTitle = "Clay Depth Stack";
    featureDesc = "Dual inner inset highlights paired with a deep, diffused drop shadow.";
    metricValue = "28px";
    metricLabel = "Puffy Radius";
    metricDelta = "Inflated";
    planPrice = "$29";
    planFeatures = ["Puffy rounded pill geometries", "Dual inner/outer clay shadows", "Tactile spring micro-interactions"];
  } else if (slug === "fashion-editorial") {
    eyebrow = "RUNWAY CHAPTER 04";
    headline = "Statuesque Whispers.";
    subhead = "Towering Bodoni serifs, hair-thin divider rules, and expansive runway negative space.";
    navCta = "Book Viewing";
    primaryCta = "Explore Lookbook";
    secondaryCta = "Private Access";
    featureTitle = "Runway Pacing";
    featureDesc = "Negative space serves as the primary stylist, letting imagery and typography breathe.";
    metricValue = "Look 12";
    metricLabel = "Autumn / Winter";
    metricDelta = "Exclusive";
    planPrice = "Private";
    planFeatures = ["High-contrast Didot serifs", "Ultra-thin 1px hairline dividers", "Generous editorial whitespace"];
  } else if (slug === "linear-inspired") {
    eyebrow = "CYCLE 42 · ACTIVE";
    headline = "Software Built for Speed.";
    subhead = "Dark mode keylines, subtle purple auras, ⌘K command palettes, and effortless keyboard navigation.";
    navCta = "Log In";
    primaryCta = "Start Trial";
    secondaryCta = "Command Menu";
    featureTitle = "Keyline Surfaces";
    featureDesc = "Subtle 1px border highlights over midnight foundations with zero visual clutter.";
    metricValue = "120ms";
    metricLabel = "Interaction Time";
    metricDelta = "▲ Optimized";
    planPrice = "$12";
    planFeatures = ["Keyboard-first command center", "Subtle purple gradient auras", "Cycle roadmaps & issue tracking"];
  } else if (slug === "y2k") {
    eyebrow = "MILLENNIUM BUG // 2000";
    headline = "DIGITAL DREAMSCAPE";
    subhead = "Liquid chrome gradients, holographic starbursts, and retro futuristic cyber-bubble aesthetics.";
    navCta = "Enter";
    primaryCta = "Launch Portal";
    secondaryCta = "Play Track";
    featureTitle = "Chrome Reflection";
    featureDesc = "Metallic gradient typography paired with glowing electric cyan borders.";
    metricValue = "2000 AD";
    metricLabel = "Retro Era";
    metricDelta = "★ Sparkle";
    planPrice = "$19.99";
    planFeatures = ["Metallic liquid chrome gradients", "Starburst sticker badges", "Glossy translucent bubble pills"];
  } else if (slug === "pixel-8bit") {
    eyebrow = "WORLD 1-1 // READY";
    headline = "PRESS START TO PLAY";
    subhead = "Stepped pixel borders, retro arcade typography, and classic 8-bit game health bars.";
    navCta = "Coin (0)";
    primaryCta = "Start Game";
    secondaryCta = "High Scores";
    featureTitle = "Stepped Geometry";
    featureDesc = "Zero smooth curves. Pure pixelated corners rendered with crisp aliased precision.";
    metricValue = "99990";
    metricLabel = "High Score";
    metricDelta = "★ 1UP";
    planPrice = "3 Coins";
    planFeatures = ["Stepped 4px box-shadow borders", "Classic 8-bit arcade HUD elements", "Authentic chiptune aesthetic"];
  } else if (slug === "notion-inspired") {
    eyebrow = "DOCS // ARCHIVE";
    headline = "All your ideas, organized.";
    subhead = "Restrained serif headings, clean monochrome lists, emoji callout banners, and drag-block precision.";
    navCta = "New Page";
    primaryCta = "Use Template";
    secondaryCta = "Duplicate";
    featureTitle = "Callout Banners";
    featureDesc = "Gentle surface washes with inline emoji icons and lightweight divider rules.";
    metricValue = "4,200";
    metricLabel = "Linked Notes";
    metricDelta = "● Synced";
    planPrice = "Free";
    planFeatures = ["Minimalist serif headlines", "Hover-reveal block handles", "Clean database table grids"];
  }

  return {
    eyebrow,
    headline,
    subhead,
    navCta,
    primaryCta,
    secondaryCta,
    featureTitle,
    featureDesc,
    metricValue,
    metricLabel,
    metricDelta,
    planName,
    planPrice,
    planFeatures,
  };
}

const definitions = {};

for (const slug of slugs) {
  const filePath = join(root, slug, "DESIGN.md");
  const raw = readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const bText = getSection(content, 6);
  const sText = getSection(content, 7);
  const rText = getSection(content, 8);
  const btnText = getSection(content, 9);

  const p = data.preview;
  const cardBorder = resolveCardBorder(slug, bText, p.ink, p.muted, p.accent, p.bg);
  const cardShadow = resolveCardShadow(slug, sText, p.ink, p.accent, p.accent2);
  const radius = resolveRadius(slug, rText);
  const sigType = resolveSignatureType(slug);
  const copy = resolveCopy(slug, data.name, data.category, data.description);

  definitions[slug] = {
    slug,
    name: data.name,
    category: data.category,
    description: data.description,
    tags: data.tags,
    preview: data.preview,
    cardBorder,
    cardShadow,
    cardRadius: radius.card,
    btnRadius: radius.btn,
    badgeRadius: radius.badge,
    signatureType: sigType,
    ...copy,
  };
}

const fileContent = `/**
 * Generated Design Style Definitions for every style in designs/.
 * Provides concrete visual rules, tokens, typography, and copy
 * for high-fidelity landing page previews and component specimen kits.
 */

export interface StyleDefinition {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  preview: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
    display: string;
    body: string;
  };
  cardBorder: string;
  cardShadow: string;
  cardRadius: string;
  btnRadius: string;
  badgeRadius: string;
  signatureType: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  navCta: string;
  primaryCta: string;
  secondaryCta: string;
  featureTitle: string;
  featureDesc: string;
  metricValue: string;
  metricLabel: string;
  metricDelta: string;
  planName: string;
  planPrice: string;
  planFeatures: string[];
}

export const STYLE_DEFINITIONS: Record<string, StyleDefinition> = ${JSON.stringify(definitions, null, 2)};

export function getStyleDefinition(slug: string): StyleDefinition {
  const def = STYLE_DEFINITIONS[slug];
  if (!def) {
    throw new Error(\`[style-definitions] Style definition not found for slug: "\${slug}"\`);
  }
  return def;
}
`;

writeFileSync(dest, fileContent, "utf8");
console.log(`Successfully generated definitions for ${Object.keys(definitions).length} styles into ${dest}`);
