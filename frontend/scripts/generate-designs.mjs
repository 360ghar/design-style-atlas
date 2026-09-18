import { stylesA } from "./style-data-1.mjs";
import { stylesB } from "./style-data-2.mjs";
import { stylesC } from "./style-data-3.mjs";
import { stylesD } from "./style-data-4.mjs";
import { stylesE } from "./style-data-5.mjs";
import { stylesF } from "./style-data-6.mjs";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const all = [...stylesA, ...stylesB, ...stylesC, ...stylesD, ...stylesE, ...stylesF];

console.log(`Total styles: ${all.length}`);
const slugs = new Set();
for (const s of all) {
  if (slugs.has(s.slug)) { console.error(`DUPLICATE SLUG: ${s.slug}`); process.exit(1); }
  slugs.add(s.slug);
}

function relatedFor(s, index) {
  const same = index.filter(
    (o) => o.slug !== s.slug && (o.category === s.category || o.tags.some((t) => s.tags.includes(t)))
  );
  return same.slice(0, 3).map((o) => o.slug);
}

const introOverride = {
  "terminal": "Follow every section. When in doubt, choose the more literal, terminal-native interpretation.",
  "quiet-luxury": "Follow every section. When in doubt, choose the quieter interpretation.",
  "brutalism": "Follow every section. When in doubt, choose the rawer, more literal interpretation — never add polish.",
  "ultra-minimalism": "Follow every section. When in doubt, choose the quieter interpretation.",
  "minimalism": "Follow every section. When in doubt, choose the quieter interpretation.",
  "swiss-design": "Follow every section. When in doubt, choose the more disciplined, grid-obedient interpretation.",
  "japanese-minimalism": "Follow every section. When in doubt, choose the quieter, more restrained interpretation — emptiness is the point.",
  "scandinavian": "Follow every section. When in doubt, choose the softer, quieter interpretation.",
  "monochrome": "Follow every section. When in doubt, choose the quieter, more restrained interpretation.",
  "editorial-minimalism": "Follow every section. When in doubt, choose the quieter, more disciplined interpretation.",
  "luxury-minimalism": "Follow every section. When in doubt, choose the quieter, more precise interpretation.",
  "product-minimalism": "Follow every section. When in doubt, choose the quieter, more confident interpretation.",
  "functional-minimalism": "Follow every section. When in doubt, choose the plainer, more functional interpretation.",
  "neo-brutalism": "Follow every section. When in doubt, choose the rawer, more confrontational interpretation — never soften it.",
  "playful-brutalism": "Follow every section. When in doubt, choose the louder, chunkier interpretation — never be subtle.",
  "corporate-brutalism": "Follow every section. When in doubt, choose the blunter, more literal interpretation — never decorate.",
  "editorial-brutalism": "Follow every section. When in doubt, choose the bigger, rawer interpretation — never whisper.",
  "minimal-brutalism": "Follow every section. When in doubt, choose the barer, more honest interpretation — never add anything.",
  "colorful-brutalism": "Follow every section. When in doubt, choose the louder, flatter interpretation — never gradient, never shadow-blur.",
  "anti-design": "Follow every section. When in doubt, choose the uglier, more hostile interpretation — tastefulness is failure.",
  "post-brutalism": "Follow every section. When in doubt, choose the rawer, more self-aware interpretation — polish is suspicion.",
  "industrial-brutalism": "Follow every section. When in doubt, choose the heavier, more utilitarian interpretation — never delicate.",
  "maximalism": "Follow every section. When in doubt, choose the bolder, more abundant interpretation — restraint is failure.",
  "playful-maximalism": "Follow every section. When in doubt, choose the sillier, more crowded interpretation.",
  "editorial-maximalism": "Follow every section. When in doubt, choose the grander, more operatic interpretation.",
  "psychedelic-maximalism": "Follow every section. When in doubt, choose the trippier, more molten interpretation.",
  "typography-maximalism": "Follow every section. When in doubt, choose the bigger, denser interpretation — type is the image.",
  "color-maximalism": "Follow every section. When in doubt, choose the more saturated interpretation — beige is the enemy.",
  "digital-maximalism": "Follow every section. When in doubt, choose the louder, more overloaded interpretation — chrome, glow, and widgets everywhere.",
  "chaos-design": "Follow every section. When in doubt, choose the messier, more overloaded interpretation — control is failure.",
  "luxury-maximalism": "Follow every section. When in doubt, choose the more opulent interpretation — excess is elegance.",
  "graphic-maximalism": "Follow every section. When in doubt, choose the louder, more poster-wall interpretation.",
  "editorial-magazine": "Follow every section. When in doubt, choose the more composed, spread-like interpretation.",
  "fashion-editorial": "Follow every section. When in doubt, choose the more dramatic, statuesque interpretation.",
  "poster-inspired": "Follow every section. When in doubt, choose the bolder, more screen-printed interpretation.",
  "swiss-poster": "Follow every section. When in doubt, choose the more disciplined, grid-obedient interpretation — geometry is beauty.",
  "bauhaus": "Follow every section. When in doubt, choose the more geometric, primary-colored interpretation.",
  "memphis": "Follow every section. When in doubt, choose the louder, more squiggly interpretation.",
  "y2k": "Follow every section. When in doubt, choose the glossier, more chrome-drenched interpretation.",
  "retro-internet": "Follow every section. When in doubt, choose the more faithfully 1998 interpretation — under-construction energy.",
  "webcore": "Follow every section. When in doubt, choose the more decaying-browser-chrome interpretation.",
  "desktop-ui": "Follow every section. When in doubt, choose the more literal operating-system interpretation.",
  "windows-95": "Follow every section. When in doubt, choose the more faithfully 1995 interpretation — gray bevels everywhere.",
  "mac-os": "Follow every section. When in doubt, choose the more faithfully Platinum-era interpretation — pinstripes and Chicago type.",
  "hacker-aesthetic": "Follow every section. When in doubt, choose the more paranoid-terminal interpretation.",
  "cyberpunk": "Follow every section. When in doubt, choose the louder, more neon-soaked interpretation.",
  "futurism": "Follow every section. When in doubt, choose the sleeker, more aerodynamic interpretation.",
  "sci-fi-ui": "Follow every section. When in doubt, choose the more literal starship-console interpretation.",
  "glassmorphism": "Follow every section. When in doubt, choose the more translucent, blur-forward interpretation — glass is the message.",
  "neumorphism": "Follow every section. When in doubt, choose the softer, more extruded-plastic interpretation.",
  "claymorphism": "Follow every section. When in doubt, choose the puffier, more squeezable interpretation.",
  "skeuomorphism": "Follow every section. When in doubt, choose the more literal real-world-material interpretation.",
  "bento-grid": "Follow every section. When in doubt, choose the tidier, more modular interpretation.",
  "card-based-ui": "Follow every section. When in doubt, choose the clearer, more card-forward interpretation.",
  "corporate-saas": "Follow every section. When in doubt, choose the clearer, more trustworthy interpretation.",
  "stripe-inspired": "Follow every section. When in doubt, choose the more precise, gradient-confident interpretation.",
  "linear-inspired": "Follow every section. When in doubt, choose the darker, more keyboard-driven interpretation.",
  "notion-inspired": "Follow every section. When in doubt, choose the plainer, more document-like interpretation.",
  "gradient-design": "Follow every section. When in doubt, choose the more fluid, gradient-drenched interpretation.",
  "aurora-glow": "Follow every section. When in doubt, choose the dreamier, more northern-lights interpretation.",
  "holographic": "Follow every section. When in doubt, choose the more iridescent, light-shifting interpretation.",
  "liquid-chrome": "Follow every section. When in doubt, choose the more molten-metal interpretation.",
  "3d-web-design": "Follow every section. When in doubt, choose the deeper, more dimensional interpretation — flat is failure.",
  "immersive": "Follow every section. When in doubt, choose the more enveloping, full-bleed interpretation.",
  "scrollytelling": "Follow every section. When in doubt, choose the more chapter-driven, scroll-choreographed interpretation.",
  "parallax": "Follow every section. When in doubt, choose the deeper, more layered interpretation.",
  "kinetic-typography": "Follow every section. When in doubt, choose the more kinetic interpretation — type must move.",
  "typography-first": "Follow every section. When in doubt, choose the more readerly, type-led interpretation.",
  "variable-fonts": "Follow every section. When in doubt, choose the more fluid, axis-shifting interpretation — show the variable range.",
  "collage": "Follow every section. When in doubt, choose the more torn, more layered interpretation.",
  "scrapbook": "Follow every section. When in doubt, choose the warmer, more handwritten interpretation.",
  "zine-punk": "Follow every section. When in doubt, choose the louder, more photocopied interpretation.",
  "risograph": "Follow every section. When in doubt, choose the grainier, more misregistered interpretation.",
  "halftone": "Follow every section. When in doubt, choose the dotter, more newsprint interpretation.",
  "grain-noise": "Follow every section. When in doubt, choose the grainier, more analog interpretation.",
  "hand-drawn": "Follow every section. When in doubt, choose the wobblier, more human interpretation.",
  "illustration-led": "Follow every section. When in doubt, choose the more storybook, illustration-first interpretation.",
  "corporate-memphis": "Follow every section. When in doubt, choose the friendlier, more blob-people interpretation — never edge into real memphis chaos.",
  "organic-biophilic": "Follow every section. When in doubt, choose the leafier, more breathing interpretation.",
  "eco-sustainable": "Follow every section. When in doubt, choose the earthier, more honest interpretation.",
  "japandi": "Follow every section. When in doubt, choose the calmer, more crafted interpretation.",
  "wabi-sabi": "Follow every section. When in doubt, choose the quieter, more imperfect interpretation — cracks are beauty.",
  "art-deco": "Follow every section. When in doubt, choose the more gilded, more symmetrical interpretation.",
  "art-nouveau": "Follow every section. When in doubt, choose the more whiplash-curved, botanical interpretation.",
  "mid-century-modern": "Follow every section. When in doubt, choose the more atomic, teak-and-mustard interpretation.",
  "70s-retro": "Follow every section. When in doubt, choose the groovier, more harvest-gold interpretation.",
  "80s-retro": "Follow every section. When in doubt, choose the more chrome-grid, more neon-sunset interpretation.",
  "90s-retro": "Follow every section. When in doubt, choose the more sticker-covered, more savage interpretation.",
  "vaporwave": "Follow every section. When in doubt, choose the hazier, more mall-at-dusk interpretation.",
  "synthwave": "Follow every section. When in doubt, choose the more midnight-drive, more neon-grid interpretation.",
  "pixel-8bit": "Follow every section. When in doubt, choose the more faithfully 8-bit interpretation — every pixel visible.",
  "gaming-ui": "Follow every section. When in doubt, choose the more HUD-forward, more ranked-ladder interpretation.",
  "comic-pop-art": "Follow every section. When in doubt, choose the POW!-louder interpretation.",
  "graffiti-streetwear": "Follow every section. When in doubt, choose the rawer, more tagged-up interpretation.",
  "surrealism": "Follow every section. When in doubt, choose the stranger, more dream-logic interpretation.",
  "dreamcore": "Follow every section. When in doubt, choose the hazier, more liminal-nostalgia interpretation.",
  "liminal-weirdcore": "Follow every section. When in doubt, choose the emptier, more uncanny interpretation — fluorescent unease.",
  "generative-algorithmic": "Follow every section. When in doubt, choose the more systematic, rule-visible interpretation — show the algorithm.",
};

const typeOverride = {
  "terminal": {
    scale: "hero 24–40px mono at 80-col measure (no viewport-scale poster type), H2 20–24px, H3 16–18px, body 13–15px mono at 1.6 line-height, meta/labels 12–13px mono.",
    weights: "display 400–700 mono; body 400; labels 400–700 with 0–0.05em tracking (no 900 poster blacks, no wide tracking).",
    rules: "monospace everywhere including headlines, left-aligned with ASCII dividers; never center headlines; never use proportional fonts in terminal zones.",
  },
  "quiet-luxury": {
    scale: "hero 32–48px serif, H2 24–30px, H3 19–21px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.",
    weights: "display 400–500 serif; body 400; labels 500 with +0.12–0.2em tracking (never 700–900 poster blacks).",
    rules: "flush-left serif headlines; centered only for single ceremonial statements; never justify body copy.",
  },
  "brutalism": {
    scale: "hero 28–44px system type, H2 22–28px, H3 18px, body 15–16px, meta/labels 12–13px plain (no tracked uppercase micro-labels, no 15vw poster scale).",
    weights: "display 400–700 system default; body 400; labels 400–700 with no added tracking (browser defaults are the point).",
    rules: "left-aligned system headlines; never center marketing copy; never use custom webfonts or ceremonial centered layouts.",
  },
  "oversized-typography": {
    scale: "hero 12vw minimum (14–22vw lines, 0.9 leading), H2 8–10vw, H3 32px, body 15–17px, meta/labels 12–13px mono tracked uppercase.",
    weights: "display 800–900 black condensed; body 400–500; labels 600–700 with +0.08–0.2em tracking.",
    rules: "flush-left monuments; 3–7 words per giant line (fill/outline/italic treatments max); never set paragraphs at display scale.",
  },
  "newspaper": {
    scale: "nameplate 48–72px blackletter/Old Style, headlines 28–56px Times, H3 20–24px, body 14–15px Georgia in narrow justified columns, agate/meta 11–12px.",
    weights: "display 700–900 Times; body 400; labels 600–700 small caps with +0.06–0.1em tracking.",
    rules: "justified narrow columns with hyphenation, ragged nothing; nameplate centered, headlines spanning columns; rules everywhere.",
  },
  "ultra-minimalism": {
    scale: "hero 20–28px max (presence from position, not scale), H2 17–20px, H3 15–16px, body 13–14px, meta/labels 12–13px plain.",
    weights: "display 400–500; body 400; labels 400–500 with no wide tracking (never 700–900, never poster scale).",
    rules: "left-aligned small type in a narrow centered column; never center blocks, never justify, never set hero display type.",
  },
  "minimalism": {
    scale: "hero 28–40px, H2 22–28px, H3 18–20px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.",
    weights: "display 400–500; body 400; labels 500 with +0.1–0.18em tracking (never 700–900 poster blacks).",
    rules: "flush-left headlines with generous whitespace; centered only for single quiet statements; never justify body copy.",
  },
  "swiss-design": {
    scale: "hero 40–64px Helvetica flush-left on the grid, H2 28–36px, H3 20px, body 15–16px ragged-right, meta/labels 11–12px tracked uppercase.",
    weights: "display 500–700 Helvetica; body 400; labels 500–700 with +0.1–0.2em tracking (never decorative blacks).",
    rules: "flush-left ragged-right on a strict grid with mathematical spacing; never center body copy; never justify.",
  },
  "japanese-minimalism": {
    scale: "hero 28–40px Mincho serif, H2 22–28px, H3 18px, body 15–16px with wide leading at a narrow measure, meta/labels 11–12px with wide tracking.",
    weights: "display 400–500; body 400; labels 400–500 with +0.15–0.25em tracking (never heavy poster weights).",
    rules: "left-aligned headlines with ma (negative space), vertical accents allowed; never crowd, never justify.",
  },
  "scandinavian": {
    scale: "hero 30–44px soft geometric sans, H2 24–30px, H3 18–20px, body 15–16px at comfortable measure, meta/labels 11–12px tracked uppercase.",
    weights: "display 400–600; body 400; labels 500 with +0.1–0.15em tracking (never harsh poster blacks).",
    rules: "flush-left warm headlines with airy spacing; centered only for single cozy statements; never dense or justified copy.",
  },
  "monochrome": {
    scale: "hero 32–48px grayscale headlines, H2 24–30px, H3 19–21px, body 15–16px, meta/labels 11–12px tracked uppercase.",
    weights: "display 500–700 grayscale; body 400; labels 500–600 with +0.08–0.15em tracking (contrast from tone, never color).",
    rules: "flush-left headlines graded by gray value alone; never color-tinted type, never decorative treatments.",
  },
  "editorial-minimalism": {
    scale: "hero 32–48px quiet serif, H2 24–30px, H3 19–21px, body 15–16px Georgia at 680px measure, meta/labels 11–12px tracked uppercase kickers.",
    weights: "display 400–600 serif; body 400; labels 600 with +0.12–0.2em tracking (never 800–900 poster blacks).",
    rules: "flush-left serif headlines on a calm column grid; centered only for single-statement covers; never justify body copy.",
  },
  "luxury-minimalism": {
    scale: "hero 32–48px Didot/Bodoni serif, H2 24–30px, H3 19–21px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.",
    weights: "display 400–500 high-contrast serif; body 400; labels 500 with +0.15–0.22em tracking (never heavy blacks).",
    rules: "flush-left refined serif headlines with vast whitespace; centered only for ceremonial single lines; never justify, never crowd.",
  },
  "product-minimalism": {
    scale: "hero 28–36px Inter tight, H2 22–26px, H3 17–19px, body 14–16px, meta/labels 12–13px medium gray.",
    weights: "display 500–600 Inter; body 400–500; labels 500–600 with no wide tracking (never poster blacks).",
    rules: "left-aligned quiet-confidence headlines in a narrow product column; never centered marketing monuments, never justified copy.",
  },
  "functional-minimalism": {
    scale: "hero 24–32px system type, H2 20–24px, H3 17–18px, body 14–15px, meta/labels 12–13px plain.",
    weights: "display 500–700 system default; body 400; labels 500–600 with no added tracking (browser honesty).",
    rules: "left-aligned plain system type; never decorative display faces, never centered marketing layouts.",
  },
  "neo-brutalism": {
    scale: "hero 48–72px Archivo Black, H2 32–40px, H3 22–24px, body 16–17px, meta/labels 12–14px bold uppercase with borders.",
    weights: "display 800–900; body 400–500; labels 700–900 with +0.04–0.08em tracking.",
    rules: "flush-left heavy headlines inside thick-bordered boxes; centered only for sticker badges; never delicate serif layouts.",
  },
  "playful-brutalism": {
    scale: "hero 44–68px chunky rounded bold (Baloo/Fredoka), H2 30–38px, H3 22px, body 16–17px, meta/labels 12–14px bold uppercase.",
    weights: "display 700–800 rounded bold; body 400–500; labels 700 with +0.04–0.08em tracking.",
    rules: "flush-left chunky headlines with sticker borders and rotations; centered only for badge bursts; never restrained minimalism.",
  },
  "corporate-brutalism": {
    scale: "hero 40–56px Helvetica Bold, H2 28–34px, H3 20–22px, body 15–16px, meta/labels 12–13px bold plain.",
    weights: "display 700 Helvetica Bold; body 400; labels 700 with no added tracking.",
    rules: "left-aligned blunt Helvetica headlines with hairline table rules; never centered hero marketing; never decorative faces.",
  },
  "editorial-brutalism": {
    scale: "hero 48–76px Arial Black column headlines, H2 30–38px, H3 22px, body 15–16px in tight columns, meta/labels 12–13px bold uppercase.",
    weights: "display 900 Arial Black; body 400–500; labels 700–900 with +0.04–0.08em tracking.",
    rules: "massive flush-left headlines colliding with column rules; centered layouts forbidden; never polite whitespace.",
  },
  "minimal-brutalism": {
    scale: "hero 36–52px plain grotesk, H2 26–32px, H3 20px, body 15–16px, meta/labels 12–13px plain.",
    weights: "display 500–700 plain grotesk; body 400; labels 500–700 with no added tracking.",
    rules: "left-aligned bare headlines with visible restraint; borders thin or absent; never decorative, never centered ceremony.",
  },
  "colorful-brutalism": {
    scale: "hero 48–72px Archivo Black on saturated grounds, H2 32–40px, H3 22px, body 16–17px, meta/labels 12–14px bold uppercase.",
    weights: "display 800–900; body 400–500; labels 700–900 with +0.04–0.08em tracking.",
    rules: "flush-left black headlines on loud flat grounds with thick black borders; centered only for badges; never gradients, never subtlety.",
  },
  "anti-design": {
    scale: "hero deliberately clashing sizes, H2 oversized default Times, H3 20–24px, body 16px default serif, meta/labels unstyled browser defaults.",
    weights: "whatever the browser gives; display unstyled Times bold; body 400; never refined tracking.",
    rules: "no alignment system — clash left, center, and justified on purpose; symmetry is the enemy; Comic Sans moments allowed.",
  },
  "post-brutalism": {
    scale: "hero 40–60px tight grotesk (Inter Tight), H2 28–36px, H3 20–22px, body 15–16px, meta/labels 12–13px tracked uppercase.",
    weights: "display 600–800 tight grotesk; body 400–500; labels 600–700 with +0.08–0.12em tracking.",
    rules: "flush-left confident headlines with raw grid edges; centered only for single statements; never nostalgic web-default ugliness.",
  },
  "industrial-brutalism": {
    scale: "hero 48–80px Anton/Oswald condensed uppercase, H2 30–40px, H3 20–22px, body 15–16px, meta/labels 12–13px stencil uppercase.",
    weights: "display 700–900 condensed; body 400–500; labels 700 stencil with +0.06–0.12em tracking.",
    rules: "uppercase condensed headlines like safety signage, left-aligned; stenciled labels; never lowercase softness, never centered ceremony.",
  },
  "maximalism": {
    scale: "hero 56–96px layered serif, H2 36–48px, H3 24–28px, body 16–17px, meta/labels 12–14px bold tracked uppercase.",
    weights: "display 700–900; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "layered centered and flush-left headlines colliding; symmetry optional; never empty space, never whisper.",
  },
  "playful-maximalism": {
    scale: "hero 52–88px bubbly display (Fredoka/Baloo), H2 34–44px, H3 24px, body 16–17px, meta/labels 12–14px bold uppercase.",
    weights: "display 700–800 rounded bold; body 400–500; labels 700 with +0.06–0.12em tracking.",
    rules: "centered bouncy headlines with sticker rotations; mixed alignments welcome; never corporate grids, never quiet columns.",
  },
  "editorial-maximalism": {
    scale: "hero 56–96px Didot/Playfair display, H2 36–48px, H3 24–28px, body 16–17px in rich columns, meta/labels 12–14px tracked uppercase.",
    weights: "display 700–900 high-contrast serif; body 400–500; labels 700 with +0.1–0.18em tracking.",
    rules: "centered and oversized serif headlines with pull-quotes and marginalia; justified accents allowed; never minimal whitespace worship.",
  },
  "psychedelic-maximalism": {
    scale: "hero 56–100px liquid display (Shrikhand/Bungee), H2 36–48px warped, H3 24px, body 16–17px, meta/labels 12–14px bold.",
    weights: "display 700–900 blobby; body 400–500; labels 700 with wavy baselines.",
    rules: "warped centered headlines melting across the grid; outlines, gradients, swirls stacked; never straight Swiss lines.",
  },
  "typography-maximalism": {
    scale: "hero 10–20vw condensed black (Anton/Archivo Black), H2 6–10vw, H3 28–32px, body 15–17px, meta/labels 12–13px mono uppercase.",
    weights: "display 800–900 condensed black; body 400–500; labels 600–700 with +0.08–0.15em tracking.",
    rules: "wall-to-wall flush-left type monuments filling every viewport; outlines and fills mixed; never small polite headlines, never image-led layouts.",
  },
  "color-maximalism": {
    scale: "hero 52–88px Archivo Black on hot grounds, H2 34–44px, H3 24px, body 16–17px, meta/labels 12–14px bold uppercase.",
    weights: "display 800–900; body 400–500; labels 700–900 with +0.06–0.12em tracking.",
    rules: "flush-left and centered black type on clashing saturated fields; color-block sections; never muted palettes, never thin weights.",
  },
  "digital-maximalism": {
    scale: "hero 52–92px chrome display (Unbounded/Bungee), H2 34–46px, H3 24px, body 15–17px, meta/labels 12–14px bold tracked.",
    weights: "display 700–900; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "centered glowing headlines over widget-dense dashboards; floating badges and tickers; never whitespace, never single-column calm.",
  },
  "chaos-design": {
    scale: "hero clashing 48–96px blocks, H2 oversized collisions, H3 22–28px, body 16px, meta/labels loud stickers.",
    weights: "display 800–900 clashing; body 400–700 mixed; labels 700–900 stickers.",
    rules: "no grid loyalty — overlap, rotate, collide headlines deliberately; alignment systems are the enemy; never tidy columns.",
  },
  "luxury-maximalism": {
    scale: "hero 52–88px grand serif (Cormorant/Playfair), H2 34–44px, H3 24px, body 16–17px, meta/labels 12–13px letterspaced gold.",
    weights: "display 600–800 high-contrast serif; body 400–500; labels 600–700 with +0.15–0.25em tracking.",
    rules: "centered ceremonial serif headlines with gold rules and crests; symmetrical grandeur; never casual left-aligned SaaS layouts.",
  },
  "graphic-maximalism": {
    scale: "hero 56–100px stacked poster blocks (Archivo/Anton), H2 36–48px, H3 24–28px, body 16–17px, meta/labels 12–14px bold.",
    weights: "display 800–900; body 400–500; labels 700–900 with +0.06–0.12em tracking.",
    rules: "full-bleed poster stacks with mixed fills, outlines, and rotations; grid-breaking collage; never timid centered cards.",
  },
  "editorial-magazine": {
    scale: "hero 44–72px Playfair/Georgia cover serif, H2 30–40px, H3 21–24px, body 15–16px at 660px measure, meta/labels 11–12px tracked uppercase kickers.",
    weights: "display 600–800 serif; body 400; labels 600–700 with +0.12–0.2em tracking.",
    rules: "cover-style headlines with drop-caps, pull-quotes, and column spans; centered covers allowed; body never justified except narrow columns.",
  },
  "fashion-editorial": {
    scale: "hero 48–84px Didot/Bodoni statuesque serif, H2 30–42px, H3 21–24px, body 15–16px, meta/labels 11–12px wide-tracked uppercase.",
    weights: "display 400–700 high-contrast serif; body 400; labels 500–600 with +0.2–0.3em tracking.",
    rules: "towering centered or flush-left serif statements with vast negative space; cropped full-bleed imagery; never dense UI grids.",
  },
  "poster-inspired": {
    scale: "hero 10–18vw Anton/Archivo Black poster lines, H2 6–9vw, H3 26–30px, body 15–17px, meta/labels 12–13px bold uppercase.",
    weights: "display 800–900; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "flush-left poster walls with stacked condensed lines; outline/fill mixes; never timid card grids, never justified copy.",
  },
  "swiss-poster": {
    scale: "hero 48–80px Helvetica Bold flush-left, H2 32–44px, H3 22px, body 15–16px ragged-right, meta/labels 11–12px tracked uppercase.",
    weights: "display 700 Helvetica Bold; body 400; labels 700 with +0.1–0.2em tracking.",
    rules: "strict asymmetric grid, flush-left headlines, geometric color blocks; centered layouts forbidden; never decorative serifs.",
  },
  "bauhaus": {
    scale: "hero 44–72px geometric sans (Futura/Poppins), H2 30–40px, H3 22px, body 15–16px, meta/labels 12–13px bold uppercase.",
    weights: "display 600–800 geometric; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "flush-left headlines locked to circles, triangles, and grid bars; primary-color blocks; never organic curves, never centered ceremony.",
  },
  "memphis": {
    scale: "hero 48–76px Archivo Black with squiggles, H2 32–42px, H3 22–24px, body 16–17px, meta/labels 12–14px bold.",
    weights: "display 800–900; body 400–500; labels 700 with +0.06–0.12em tracking.",
    rules: "flush-left or scattered headlines with terrazzo shapes and squiggle underlines; pastel clashes welcome; never corporate grids.",
  },
  "y2k": {
    scale: "hero 48–84px chrome Orbitron/Michroma, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px glowing uppercase.",
    weights: "display 700–900 chrome; body 400–500; labels 700 with +0.08–0.15em tracking and glow.",
    rules: "centered chrome headlines floating over starfield pods; bubble clusters; never matte minimalism, never sharp brutalism.",
  },
  "retro-internet": {
    scale: "hero 36–56px Times with tiled banners, H2 26–34px, H3 20px, body 15–16px Times, meta/labels 12px visitor-counter plain.",
    weights: "display 700 Times bold; body 400; labels 400–700 with web-safe honesty (never refined tracking).",
    rules: "left-aligned or centered guestbook headlines with dividers and badges; tiled backgrounds welcome; never modern SaaS minimalism.",
  },
  "webcore": {
    scale: "hero 36–60px default Times on tiled grounds, H2 26–34px, H3 20px, body 15–16px serif, meta/labels 12px plain.",
    weights: "display 700 serif default; body 400; labels 400–700 plain (never designed tracking).",
    rules: "browser-window frames and tiled desktop grounds; headlines as window titles; never clean modern grids.",
  },
  "desktop-ui": {
    scale: "hero 28–40px Tahoma/Verdana title-bar type, H2 22–28px, H3 18px, body 13–15px UI text, meta/labels 12px title-bar labels.",
    weights: "display 700 title-bar bold; body 400; labels 700 with no added tracking (OS honesty).",
    rules: "window-chrome frames with title bars and menu strips; left-aligned UI headlines; never editorial poster typography.",
  },
  "windows-95": {
    scale: "hero 28–40px pixel Tahoma/MS Sans, H2 22–28px, H3 18px, body 13–15px, meta/labels 12px beveled labels.",
    weights: "display 700 beveled bold; body 400; labels 700 with pixel honesty (never smooth tracking).",
    rules: "raised-bevel panels with navy title bars; left-aligned taskbar logic; never rounded modern cards, never blur.",
  },
  "mac-os": {
    scale: "hero 28–42px Chicago/Charcoal, H2 22–28px, H3 18px, body 13–15px Geneva, meta/labels 12px platinum labels.",
    weights: "display 700 Chicago bold; body 400; labels 700 with no added tracking.",
    rules: "platinum window frames with pinstripes and happy-mac warmth; left-aligned UI headlines; never brutalist rawness.",
  },
  "hacker-aesthetic": {
    scale: "hero 28–44px terminal mono (Share Tech Mono), H2 22–28px, H3 18px, body 13–15px mono at 1.6 leading, meta/labels 12–13px mono.",
    weights: "display 400–700 mono; body 400; labels 400–700 with 0–0.05em tracking (never poster blacks).",
    rules: "monospace everywhere with matrix rain and log streams; left-aligned; never proportional marketing typography.",
  },
  "cyberpunk": {
    scale: "hero 52–88px glitch display (Rajdhani/Orbitron), H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px neon uppercase.",
    weights: "display 700–900 with glitch treatments; body 400–500; labels 700 with +0.1–0.2em tracking and glow.",
    rules: "flush-left or skewed neon headlines over rain-slick grids; scanlines and kanji accents; never quiet minimalism.",
  },
  "futurism": {
    scale: "hero 48–80px streamlined Futura/Avant Garde, H2 32–44px, H3 22px, body 15–16px, meta/labels 12–13px tracked uppercase.",
    weights: "display 500–800 streamlined; body 400; labels 600–700 with +0.12–0.2em tracking.",
    rules: "flush-left speed-line headlines with diagonal motion; chrome accents; never nostalgic clutter, never centered ceremony.",
  },
  "sci-fi-ui": {
    scale: "hero 40–64px Michroma/Orbitron HUD type, H2 28–36px, H3 20px, body 14–16px HUD readouts, meta/labels 11–12px tracked uppercase telemetry.",
    weights: "display 700 HUD; body 400; labels 700 with +0.15–0.25em tracking and glow.",
    rules: "HUD-frame headlines with brackets and telemetry ticks; left-aligned console logic; never editorial serif layouts.",
  },
  "glassmorphism": {
    scale: "hero 36–56px light Inter over blur, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px soft uppercase.",
    weights: "display 500–700; body 400–500; labels 600 with +0.08–0.15em tracking (never harsh blacks over glass).",
    rules: "left-aligned or centered headlines floating on backdrop-blur 20px panels over aurora gradients; never opaque brutalist boxes.",
  },
  "neumorphism": {
    scale: "hero 32–48px soft embossed sans, H2 24–32px, H3 19–21px, body 15–16px, meta/labels 12–13px soft uppercase.",
    weights: "display 500–700 embossed; body 400–500; labels 600 with +0.06–0.12em tracking (never harsh contrast).",
    rules: "flush-left soft-emboss headlines on same-color grounds with dual shadows; never sharp borders, never flat minimalism.",
  },
  "claymorphism": {
    scale: "hero 36–56px bubbly Nunito/Quicksand, H2 26–34px, H3 20–22px, body 15–17px, meta/labels 12–13px chunky.",
    weights: "display 700–800 bubbly; body 400–600; labels 700 with +0.04–0.08em tracking.",
    rules: "flush-left or centered puffy headlines with thick inner highlights and clay blobs; never sharp Swiss grids.",
  },
  "skeuomorphism": {
    scale: "hero 36–56px stitched/leather realism type, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px engraved labels.",
    weights: "display 600–700 textured; body 400; labels 600 engraved with subtle tracking.",
    rules: "headlines as physical objects (stitched, brushed, engraved); left-aligned realism; never flat vector minimalism.",
  },
  "bento-grid": {
    scale: "hero 32–48px Inter in hero tile, H2 24–30px per tile, H3 18–20px, body 14–16px, meta/labels 12–13px medium gray.",
    weights: "display 600–700 Inter; body 400–500; labels 500–600 with no wide tracking.",
    rules: "left-aligned headlines inside rounded modular tiles; strict tile rhythm; never full-bleed poster chaos.",
  },
  "card-based-ui": {
    scale: "hero 28–40px Inter card headlines, H2 22–28px, H3 18px, body 14–16px, meta/labels 12–13px medium.",
    weights: "display 600 Inter; body 400–500; labels 500–600 with no wide tracking.",
    rules: "left-aligned card headlines in a tidy deck grid; consistent card anatomy; never poster monuments, never chaos.",
  },
  "corporate-saas": {
    scale: "hero 32–44px Inter/Plus Jakarta trustworthy sans, H2 24–30px, H3 18–20px, body 15–16px, meta/labels 12–13px semibold.",
    weights: "display 600–700; body 400–500; labels 600 with +0.02–0.06em tracking (never poster blacks).",
    rules: "left-aligned benefit headlines with logos-row proof; feature triads; never edgy chaos, never ceremonial centering.",
  },
  "stripe-inspired": {
    scale: "hero 36–52px Sohne/Inter gradient headlines, H2 26–34px, H3 19–21px, body 15–16px, meta/labels 12–13px medium.",
    weights: "display 600–700; body 400–500; labels 500–600 with slight tracking.",
    rules: "flush-left gradient headlines over diagonal mesh fields; code-window proof; never brutalist rawness, never kitsch.",
  },
  "linear-inspired": {
    scale: "hero 30–44px Inter tight on dark, H2 24–30px, H3 18–20px, body 14–16px, meta/labels 12–13px ⌘K labels.",
    weights: "display 500–600; body 400–500; labels 500 with subtle tracking (never poster blacks).",
    rules: "left-aligned cycle-velocity headlines with glow keycaps and issue-row proof; never light playful layouts.",
  },
  "notion-inspired": {
    scale: "hero 28–36px Georgia/Lyon document serif, H2 22–26px, H3 17–19px, body 15–16px document measure, meta/labels 12–13px gray.",
    weights: "display 600–700 document serif; body 400; labels 500–600 with no wide tracking.",
    rules: "left-aligned document headlines with toggle-block logic; emoji accents allowed; never poster monuments.",
  },
  "gradient-design": {
    scale: "hero 40–64px Outfit over mesh washes, H2 28–38px, H3 20–22px, body 15–17px, meta/labels 12–13px tracked uppercase.",
    weights: "display 600–800; body 400–500; labels 600 with +0.08–0.15em tracking.",
    rules: "flush-left or centered headlines dissolving into violet→magenta→cyan washes; glow-led hierarchy; never flat corporate boxes.",
  },
  "aurora-glow": {
    scale: "hero 40–64px Outfit/Sora under aurora veils, H2 28–38px, H3 20–22px, body 15–17px, meta/labels 12–13px glowing uppercase.",
    weights: "display 600–700; body 400–500; labels 600 with +0.1–0.18em tracking and glow.",
    rules: "centered or flush-left headlines beneath flowing aurora curtains; dark grounds mandatory; never daylight minimalism.",
  },
  "holographic": {
    scale: "hero 44–72px Unbounded holographic display, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px prismatic uppercase.",
    weights: "display 700–800; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "centered rainbow-foil headlines with tilt-reactive gradients; dark grounds; never matte flatness.",
  },
  "liquid-chrome": {
    scale: "hero 48–80px molten Unbounded/Michroma, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px chrome uppercase.",
    weights: "display 700–800 liquid metal; body 400–500; labels 700 with +0.08–0.15em tracking.",
    rules: "centered liquid-metal headlines with drip and reflection treatments; dark grounds; never matte minimalism.",
  },
  "3d-web-design": {
    scale: "hero 44–72px Space Grotesk/Sora over 3D scenes, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px floating labels.",
    weights: "display 600–800; body 400–500; labels 600–700 with +0.06–0.12em tracking.",
    rules: "headlines staged over perspective scenes with depth-of-field; floating UI chips; never flat poster walls.",
  },
  "immersive": {
    scale: "hero 56–96px Anton/Archivo full-bleed display, H2 36–48px, H3 24px, body 16–17px, meta/labels 12–14px overlay labels.",
    weights: "display 800–900; body 400–500; labels 700 with +0.08–0.15em tracking over media.",
    rules: "edge-to-edge media stages with overlaid headlines; scroll chapters; never boxed card grids.",
  },
  "scrollytelling": {
    scale: "hero 44–72px Inter Tight chapter headlines, H2 30–40px sticky steps, H3 22px, body 16–17px longform measure, meta/labels 12–13px progress labels.",
    weights: "display 600–800; body 400–500; labels 600–700 with +0.08–0.12em tracking.",
    rules: "sticky-step headlines pinned beside scrolling visuals; progress rails; never static brochure layouts.",
  },
  "parallax": {
    scale: "hero 44–72px Sora/Outfit layered headlines, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px depth labels.",
    weights: "display 600–800; body 400–500; labels 600 with +0.06–0.12em tracking.",
    rules: "multi-plane headlines drifting over layered scenes; depth cues everywhere; never single-plane flatness.",
  },
  "kinetic-typography": {
    scale: "hero 10–18vw Archivo Black/Anton kinetic lines, H2 6–9vw, H3 26px, body 15–17px, meta/labels 12–13px mono.",
    weights: "display 800–900 kinetic black; body 400–500; labels 600–700 with +0.06–0.12em tracking.",
    rules: "full-viewport moving type walls with marquees and scrubs; static headlines forbidden; never image-led layouts.",
  },
  "typography-first": {
    scale: "hero 40–64px Newsreader/Georgia readerly serif, H2 28–36px, H3 21px, body 17–18px at 680px measure, meta/labels 12–13px tracked.",
    weights: "display 500–700 serif; body 400–500; labels 600 with +0.08–0.15em tracking (never 900 poster blacks).",
    rules: "flush-left longform headlines with exquisite leading; pull-quotes and footnotes; never image-led or centered marketing layouts.",
  },
  "variable-fonts": {
    scale: "hero 44–80px variable display (Fraunces/Inter Variable), H2 30–42px, H3 22px, body 15–17px, meta/labels 12–13px with width-axis labels.",
    weights: "display variable 300–900 demonstrated; body 400–500; labels 500–600 with axis annotations.",
    rules: "headlines that morph weight, width, and optical size interactively; sliders welcome; never static single-weight layouts.",
  },
  "collage": {
    scale: "hero 48–80px mixed Archivo Black + Georgia ransom type, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px cut-out labels.",
    weights: "display 700–900 mixed faces; body 400–500; labels 700 cut-paper with rotations.",
    rules: "overlapping torn headlines with tape and ripped edges; mixed faces deliberate; never clean grids, never single-type discipline.",
  },
  "scrapbook": {
    scale: "hero 40–64px Caveat handwritten + Georgia, H2 28–36px, H3 20–22px, body 15–17px, meta/labels 12–13px washi-tape labels.",
    weights: "display 600–700 handwritten; body 400; labels 600 handwritten with tape rotations.",
    rules: "tilted photo-frame headlines with doodles and washi tape; left-aligned memory-book flow; never corporate straightness.",
  },
  "zine-punk": {
    scale: "hero 52–88px Impact/Arial Black cut-and-paste, H2 32–44px, H3 22–24px, body 15–17px typewritten, meta/labels 12–13px stamped labels.",
    weights: "display 800–900 punk black; body 400; labels 700–900 stamped.",
    rules: "ransom-note headlines with Xerox grain and safety-pin rotations; centered chaos welcome; never polished SaaS layouts.",
  },
  "risograph": {
    scale: "hero 44–76px Archivo Black riso headlines, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px soy-ink labels.",
    weights: "display 800–900; body 400–500; labels 700 with +0.06–0.12em tracking.",
    rules: "flush-left headlines with visible misregistration and grain overlays; limited soy-ink palette; never slick gradients.",
  },
  "halftone": {
    scale: "hero 48–80px Archivo Black/Anton dot-shaded, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px ben-day labels.",
    weights: "display 800–900; body 400–500; labels 700 with dot-pattern fills.",
    rules: "headlines with halftone-dot fills and pop-burst treatments; comic framing; never flat minimal type.",
  },
  "grain-noise": {
    scale: "hero 36–56px Inter Tight over film grain, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px film-frame labels.",
    weights: "display 500–700; body 400–500; labels 500–600 with +0.06–0.12em tracking.",
    rules: "flush-left headlines under animated grain overlays and vignettes; photographic warmth; never sterile vector cleanliness.",
  },
  "hand-drawn": {
    scale: "hero 40–64px Caveat/Kalam wobbly display, H2 28–36px, H3 20–22px, body 16–17px, meta/labels 12–13px doodled labels.",
    weights: "display 600–700 hand; body 400; labels 600 with hand-drawn underlines.",
    rules: "left-aligned wobbly headlines with arrow doodles and imperfect boxes; ruled-paper grounds; never geometric perfection.",
  },
  "illustration-led": {
    scale: "hero 40–64px Fraunces storybook serif, H2 28–36px, H3 21–22px, body 16–17px, meta/labels 12–13px caption labels.",
    weights: "display 600–700 storybook; body 400–500; labels 600 with gentle tracking.",
    rules: "headlines staged among spot illustrations and character vignettes; warm asymmetry; never data-dense dashboards.",
  },
  "corporate-memphis": {
    scale: "hero 32–48px Inter/Plus Jakarta friendly sans, H2 24–32px, H3 19–21px, body 15–16px, meta/labels 12–13px medium.",
    weights: "display 600–700 friendly; body 400–500; labels 600 with slight tracking.",
    rules: "left-aligned friendly headlines beside flat spot illustrations; diverse-shape vignettes; never edgy, never dense.",
  },
  "organic-biophilic": {
    scale: "hero 36–56px Fraunces organic serif, H2 26–34px, H3 20–22px, body 16–17px generous leading, meta/labels 12–13px leaf-green labels.",
    weights: "display 400–600 organic; body 400; labels 500–600 with +0.08–0.15em tracking.",
    rules: "flush-left headlines flowing around botanical imagery and curved dividers; earthy asymmetry; never hard grids.",
  },
  "eco-sustainable": {
    scale: "hero 36–56px Fraunces/Inter Tight rooted headlines, H2 26–34px, H3 20px, body 16–17px, meta/labels 12–13px recycled-paper labels.",
    weights: "display 500–700; body 400–500; labels 600 with +0.08–0.12em tracking.",
    rules: "left-aligned headlines with seed-paper textures and impact stats; kraft honesty; never glossy excess.",
  },
  "japandi": {
    scale: "hero 32–48px Cormorant/Inter Tight calm headlines, H2 24–32px, H3 19–21px, body 15–16px wide leading, meta/labels 11–12px tracked labels.",
    weights: "display 400–600; body 400; labels 500 with +0.12–0.2em tracking (never heavy blacks).",
    rules: "flush-left headlines with oak-and-linen calm, low furniture-like rhythm; never clutter, never loud color.",
  },
  "wabi-sabi": {
    scale: "hero 28–44px weathered Cormorant/Yu Mincho, H2 22–30px, H3 18–20px, body 15–16px wide leading, meta/labels 11–12px humble labels.",
    weights: "display 400–500 weathered; body 400; labels 400–500 with +0.1–0.18em tracking (never bold perfection).",
    rules: "asymmetric, intentionally off-center headlines with cracked and mended textures; never symmetry, never polish.",
  },
  "art-deco": {
    scale: "hero 44–72px Cinzel/Marcellus geometric caps, H2 30–40px, H3 22px, body 15–16px, meta/labels 11–12px wide-tracked gold labels.",
    weights: "display 600–700 deco caps; body 400; labels 600 with +0.2–0.3em tracking.",
    rules: "centered sunburst headlines with fan and chevron geometry; mirrored symmetry; never casual asymmetry.",
  },
  "art-nouveau": {
    scale: "hero 40–64px Cormorant/Playfair flowing serif, H2 28–36px, H3 21px, body 15–16px, meta/labels 11–12px organic labels.",
    weights: "display 400–600 flowing; body 400; labels 500–600 with +0.12–0.2em tracking.",
    rules: "centered or arching headlines inside vine borders and stained-glass frames; symmetry with curves; never hard grids.",
  },
  "mid-century-modern": {
    scale: "hero 40–60px Futura/Century Gothic clean geometric, H2 28–36px, H3 20–22px, body 15–16px, meta/labels 12–13px starburst labels.",
    weights: "display 500–700 geometric; body 400; labels 600 with +0.1–0.18em tracking.",
    rules: "flush-left headlines with boomerang and starburst motifs, tapered legs logic; never brutalist rawness, never kitsch overload.",
  },
  "70s-retro": {
    scale: "hero 48–76px Cooper Black/Shrikhand groovy, H2 32–42px, H3 22–24px, body 16–17px, meta/labels 12–13px rounded labels.",
    weights: "display 700–900 groovy; body 400–500; labels 700 with +0.04–0.1em tracking.",
    rules: "centered or flush-left bubbly headlines with rainbow stripes and shag textures; never minimal whitespace.",
  },
  "80s-retro": {
    scale: "hero 52–84px Monoton/Orbitron chrome display, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px neon labels.",
    weights: "display 700–900 chrome-neon; body 400–500; labels 700 with +0.08–0.15em tracking and glow.",
    rules: "centered chrome headlines over perspective grids and sunsets; VHS grain; never matte minimalism.",
  },
  "90s-retro": {
    scale: "hero 48–76px Archivo Black/Shrikhand sticker type, H2 32–42px, H3 22px, body 16–17px, meta/labels 12–14px sticker labels.",
    weights: "display 800–900; body 400–500; labels 700–900 sticker-bold.",
    rules: "slapped-sticker headlines with checkerboard and slime accents; overlapping chaos welcome; never corporate restraint.",
  },
  "vaporwave": {
    scale: "hero 48–80px Times with chrome-Japanese accents, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px ＡＥＳＴＨＥＴＩＣ labels.",
    weights: "display 400–700 with chrome treatments; body 400; labels 500–700 with wide tracking.",
    rules: "centered statues-and-sunset headlines with grid floors and kanji; VHS haze; never sharp corporate clarity.",
  },
  "synthwave": {
    scale: "hero 52–84px Orbitron/Monoton neon display, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px glowing grid labels.",
    weights: "display 700–900 neon; body 400–500; labels 700 with +0.1–0.2em tracking and glow.",
    rules: "centered neon headlines over outrun grids and chrome suns; scanlines; never daylight minimalism.",
  },
  "pixel-8bit": {
    scale: "hero 24–40px Press Start 2P (short lines only), H2 16–24px, H3 14–16px, body 14–16px VT323 readable, meta/labels 12px pixel labels.",
    weights: "display 400 pixel (weight is the grid); body 400; labels 400 with no anti-aliased smoothing.",
    rules: "left-aligned or centered pixel headlines with sprite frames; short lines (pixels eat width); never smooth vector type, never blur.",
  },
  "gaming-ui": {
    scale: "hero 44–68px Rajdhani/Chakra Petch HUD display, H2 30–40px, H3 22px, body 15–16px HUD text, meta/labels 12–13px XP-bar labels.",
    weights: "display 600–700 HUD; body 400–500; labels 700 with +0.06–0.12em tracking.",
    rules: "flush-left HUD headlines with health bars, XP meters, and rarity frames; never editorial longform layouts.",
  },
  "comic-pop-art": {
    scale: "hero 52–88px Bangers/Archivo Black burst type, H2 34–44px, H3 24px, body 16–17px comic lettering, meta/labels 12–14px burst labels.",
    weights: "display 700–900 burst; body 400–500; labels 700–900 with outlines.",
    rules: "burst-balloon headlines with ben-day dots and action lines; tilted panels; never quiet minimalism.",
  },
  "graffiti-streetwear": {
    scale: "hero 52–88px Permanent Marker/Archivo Black tags, H2 32–44px, H3 24px, body 16–17px, meta/labels 12–14px spray-stencil labels.",
    weights: "display 700–900 tagged; body 400–500; labels 700 with drip treatments.",
    rules: "wildstyle headlines with drips, arrows, and wheatpaste layers; wall logic; never gallery restraint.",
  },
  "surrealism": {
    scale: "hero 44–72px Cormorant/Georgia melting serif, H2 30–40px uncanny, H3 21–22px, body 16–17px, meta/labels 12–13px museum-placard labels.",
    weights: "display 400–700 uncanny serif; body 400; labels 500 with +0.1–0.18em tracking.",
    rules: "floating, melting, or doubled headlines in impossible scenes; placard captions; never rational grids.",
  },
  "dreamcore": {
    scale: "hero 36–60px Georgia/Times hazy headlines, H2 26–34px, H3 20px, body 15–17px, meta/labels 12–13px sleepy labels.",
    weights: "display 400–600 hazy; body 400; labels 500 with soft tracking.",
    rules: "softly doubled headlines in washed empty-room scenes; clouds and old-web artifacts; never sharp clarity.",
  },
  "liminal-weirdcore": {
    scale: "hero 28–48px plain Arial/Helvetica fluorescent headlines, H2 22–30px, H3 18–20px, body 14–16px, meta/labels 12px timestamp labels.",
    weights: "display 400–700 plain; body 400; labels 400–700 with no designed tracking (found-space honesty).",
    rules: "deadpan centered or left headlines in empty corridors and pools; timestamps; never designed beauty.",
  },
  "generative-algorithmic": {
    scale: "hero 40–64px Space Grotesk/IBM Plex Mono systematic headlines, H2 28–36px, H3 20px, body 14–16px mono-data, meta/labels 12px parameter labels.",
    weights: "display 500–700 systematic; body 400; labels 500–600 mono with parameter honesty.",
    rules: "grid-field headlines with visible rules, seeds, and plotter lines; data overlays; never organic decoration.",
  },
};

const durationsOverride = {
  "terminal": "Durations: micro instant–100ms, standard 100–200ms, no ceremonial long fades. Easings: linear or steps() for typing and caret; no springs, no ease-out flourishes.",
  "quiet-luxury": "Durations: micro 200–300ms, standard 400–600ms glacial fades, ceremonial up to 800ms. Easings: ease-out only; no springs, no mechanical linear snaps.",
  "brutalism": "Durations: effectively none — instant hover states up to 100ms; no ceremonial transitions. Easings: none (linear instant); no springs, no ease-out flourishes, no smooth-scroll theatrics.",
  "oversized-typography": "Durations: micro 150–250ms UI, standard 300–500ms damped line reveals, ceremonial scroll-scrubbed (clip-path) with char stagger. Easings: damped ease-out for monuments; no bouncy springs, no mechanical linear snaps.",
  "newspaper": "Durations: micro instant–150ms, standard 200ms ticker fades at most; no ceremonial transitions. Easings: linear for tickers and timestamps; no springs, no ease-out flourishes — news doesn't dance.",
  "ultra-minimalism": "Durations: 200ms opacity fades at most; content feels printed, not animated. Easings: ease-out only on opacity; no springs, no slides, no ceremonial moves.",
  "minimalism": "Durations: micro 150–250ms, standard 300–500ms soft fades, no ceremonial spectacle. Easings: ease-out only; no springs, no mechanical snaps.",
  "swiss-design": "Durations: micro 100–200ms, standard 250ms restrained fades. Easings: linear or ease-out; no springs, no playful bounces — Swiss motion is invisible.",
  "japanese-minimalism": "Durations: micro 200–300ms, standard 500–700ms slow fades with long stillness. Easings: ease-out only; no springs, no hurried motion.",
  "scandinavian": "Durations: micro 150–250ms, standard 350–500ms gentle fades. Easings: soft ease-out; no springs, no mechanical snaps.",
  "monochrome": "Durations: micro 150–250ms, standard 300–450ms tonal fades. Easings: ease-out only; no springs, no color-transition theatrics.",
  "editorial-minimalism": "Durations: micro 150–250ms, standard 300–500ms page-soft fades. Easings: ease-out only; no springs, no mechanical snaps.",
  "luxury-minimalism": "Durations: micro 200–300ms, standard 450–650ms glacial fades. Easings: ease-out only; no springs, no hurried motion.",
  "product-minimalism": "Durations: micro 100–200ms, standard 250–350ms crisp fades. Easings: ease-out; no springs, no ceremonial spectacle.",
  "functional-minimalism": "Durations: micro instant–150ms, standard 200ms functional fades. Easings: linear or ease-out; no springs, no ceremony.",
  "neo-brutalism": "Durations: instant–150ms hard cuts with thick shadow pops; no fades. Easings: none or steps(2); no springs, no smooth ease-outs.",
  "playful-brutalism": "Durations: instant–200ms sticker pops. Easings: snappy cubic-bezier(0.34,1.56,0.64,1) for sticker pops only; no slow fades.",
  "corporate-brutalism": "Durations: instant–150ms blunt state flips; no ceremonial motion. Easings: none (linear instant); no springs, no flourishes.",
  "editorial-brutalism": "Durations: instant–150ms hard cuts; marquees allowed. Easings: none or linear for marquees; no springs, no soft fades.",
  "minimal-brutalism": "Durations: instant–150ms; almost no motion. Easings: none (linear instant); no springs, no flourishes.",
  "colorful-brutalism": "Durations: instant–150ms flat color swaps with shadow pops. Easings: none or steps(2); no springs, no gradients animating.",
  "anti-design": "Durations: none or jarring instant swaps; marquees and blinks encouraged. Easings: none; smoothness is surrender.",
  "post-brutalism": "Durations: micro 100–200ms, standard 250ms sharp cuts. Easings: linear or none; no springs, no softness.",
  "industrial-brutalism": "Durations: instant–150ms mechanical snaps. Easings: linear or steps(2); machinery snaps, never bounces.",
  "maximalism": "Durations: micro 150–250ms, standard 350–550ms festive reveals, ceremonial 800–1000ms flourishes. Easings: bouncy springs cubic-bezier(0.34,1.56,0.64,1) welcome; never funereal fades.",
  "playful-maximalism": "Durations: micro 150–250ms, standard 350–500ms wobbles, ceremonial 800ms confetti. Easings: springs cubic-bezier(0.34,1.56,0.64,1) everywhere playful; linear forbidden.",
  "editorial-maximalism": "Durations: micro 150–250ms, standard 400–600ms curtain reveals, ceremonial up to 1000ms. Easings: theatrical ease-out; restrained springs for ornaments.",
  "psychedelic-maximalism": "Durations: micro 200–300ms, standard 500–800ms slow-morph loops, ceremonial endless. Easings: slow ease-in-out liquid loops; snappy motion forbidden — everything melts.",
  "typography-maximalism": "Durations: micro 150–250ms, standard 400–600ms scroll-scrubbed line reveals. Easings: damped ease-out; bouncy springs forbidden.",
  "color-maximalism": "Durations: micro 150–250ms, standard 350–500ms saturated panel swaps, ceremonial 800ms. Easings: punchy ease-out with spring pops; funereal fades forbidden.",
  "digital-maximalism": "Durations: micro 100–200ms widget pops, standard 300–500ms glow pulses, ceremonial 800ms. Easings: springy pops plus glow ease-in-out; static minimalism forbidden.",
  "chaos-design": "Durations: instant–250ms jarring cuts and shakes. Easings: none or harsh steps; smooth choreography forbidden.",
  "luxury-maximalism": "Durations: micro 200–300ms, standard 500–700ms curtain reveals, ceremonial 1000ms+. Easings: slow ceremonial ease-out; bouncy springs forbidden.",
  "graphic-maximalism": "Durations: micro 150–250ms, standard 400–600ms poster slams, ceremonial 800ms. Easings: punchy ease-out with hard cuts; gentle fades forbidden.",
  "editorial-magazine": "Durations: micro 150–250ms, standard 350–550ms page-turn fades. Easings: soft editorial ease-out; bouncy springs forbidden.",
  "fashion-editorial": "Durations: micro 200–300ms, standard 500–700ms runway fades, ceremonial 1000ms. Easings: slow ease-out; springs and snaps forbidden.",
  "poster-inspired": "Durations: micro 150–250ms, standard 350–550ms print-slam reveals. Easings: punchy ease-out; bouncy springs forbidden.",
  "swiss-poster": "Durations: micro 100–200ms, standard 250–350ms crisp cuts. Easings: linear or sharp ease-out; no springs, no softness.",
  "bauhaus": "Durations: micro 150–250ms, standard 300–450ms geometric slides. Easings: crisp ease-out with right angles; bouncy springs forbidden.",
  "memphis": "Durations: micro 150–250ms, standard 350–500ms shape-dance entrances. Easings: springy cubic-bezier(0.34,1.56,0.64,1); funereal fades forbidden.",
  "y2k": "Durations: micro 150–250ms, standard 400–700ms floaty orb drift (5–8s loops), shine sweeps on chrome. Easings: dreamy ease-in-out loops; harsh snaps forbidden.",
  "retro-internet": "Durations: instant–200ms; marquees and blinking GIFs encouraged. Easings: none or steps(); smooth choreography forbidden.",
  "webcore": "Durations: instant–200ms window pops. Easings: none or steps(2); smooth premium motion forbidden.",
  "desktop-ui": "Durations: instant–150ms window snaps. Easings: none or linear; springs and flourishes forbidden — windows snap.",
  "windows-95": "Durations: instant–150ms bevel-pressed snaps. Easings: none (steps welcome); smooth premium motion forbidden.",
  "mac-os": "Durations: instant–150ms with happy-mac playfulness. Easings: none or gentle ease-out; heavy springs forbidden.",
  "hacker-aesthetic": "Durations: micro instant–150ms, standard 200ms log-stream ticks. Easings: linear or steps() for rain and typing; no springs, no flourishes.",
  "cyberpunk": "Durations: micro 100–200ms glitch flickers, standard 300–500ms neon pulses. Easings: harsh steps() and linear for glitch; smooth springs forbidden.",
  "futurism": "Durations: micro 150–250ms, standard 350–550ms velocity slides. Easings: sharp ease-out like acceleration; bouncy springs forbidden.",
  "sci-fi-ui": "Durations: micro 100–200ms HUD blips, standard 300ms scans. Easings: linear and steps() for scans; springs forbidden — consoles blink, never bounce.",
  "glassmorphism": "Durations: micro 150–250ms, standard 350–550ms blur-settle drifts. Easings: soft ease-out on blur and glow; springs forbidden — glass drifts, never snaps.",
  "neumorphism": "Durations: micro 150–250ms, standard 350–500ms pillow presses. Easings: soft ease-out; springs and hard snaps forbidden.",
  "claymorphism": "Durations: micro 150–250ms, standard 350–550ms squash-and-settle. Easings: soft spring cubic-bezier(0.34,1.4,0.64,1) for clay wobble; harsh linear snaps forbidden.",
  "skeuomorphism": "Durations: micro 150–250ms switch flicks, standard 350ms dial turns. Easings: mechanical ease-out with clicks; bouncy digital springs forbidden.",
  "bento-grid": "Durations: micro 100–200ms tile hovers, standard 300ms tile lifts. Easings: crisp ease-out; springs forbidden — tiles lift, never wobble.",
  "card-based-ui": "Durations: micro 100–200ms card lifts, standard 300ms. Easings: crisp ease-out; no springs, no ceremony.",
  "corporate-saas": "Durations: micro 100–200ms, standard 250–350ms confident reveals. Easings: clean ease-out; no springs, no playfulness.",
  "stripe-inspired": "Durations: micro 100–200ms, standard 300–450ms gradient-drift reveals. Easings: polished ease-out; springs forbidden.",
  "linear-inspired": "Durations: micro 100–200ms ⌘K snaps, standard 300ms glow reveals. Easings: crisp ease-out; springs forbidden.",
  "notion-inspired": "Durations: micro 100–200ms toggle opens, standard 250ms. Easings: plain ease-out; no springs, no ceremony.",
  "gradient-design": "Durations: micro 150–250ms, standard 400–700ms mesh-drift loops. Easings: slow ease-in-out gradient flow; harsh snaps forbidden.",
  "aurora-glow": "Durations: micro 150–250ms, standard 500–900ms aurora-curtain drifts. Easings: slow ease-in-out; snappy motion forbidden.",
  "holographic": "Durations: micro 150–250ms tilt shimmers, standard 400–700ms foil shifts. Easings: fluid ease-in-out foil flow; harsh steps forbidden.",
  "liquid-chrome": "Durations: micro 150–250ms shine sweeps, standard 500–900ms molten drifts. Easings: slow liquid ease-in-out; bouncy springs forbidden.",
  "3d-web-design": "Durations: micro 150–250ms, standard 400–700ms parallax orbits, ceremonial scroll-driven. Easings: smooth ease-out with scroll-scrub; jarring snaps forbidden.",
  "immersive": "Durations: micro 150–250ms, standard 500–800ms scroll-chapter dissolves. Easings: cinematic ease-out; bouncy springs forbidden.",
  "scrollytelling": "Durations: scroll-scrubbed chapter pins (no timed fades); micro 150ms progress ticks. Easings: linear scroll-scrub; timed springs forbidden.",
  "parallax": "Durations: scroll-linked multi-speed drifts; micro 150ms layer ticks. Easings: linear scroll-link with soft ease-out landings; springs forbidden.",
  "kinetic-typography": "Durations: scroll-scrubbed and marquee loops; char-stagger entrances 400–600ms. Easings: damped ease-out with linear marquees; bouncy springs forbidden.",
  "typography-first": "Durations: micro 150–250ms, standard 350–500ms ink-settle fades. Easings: soft ease-out; springs forbidden — reading is calm.",
  "variable-fonts": "Durations: live axis interpolation 200–500ms; micro 100–200ms. Easings: smooth ease-out axis glides; bouncy springs forbidden.",
  "collage": "Durations: micro 150–250ms, standard 350–550ms paste-down drops. Easings: papery ease-out with slight rotate; smooth premium motion forbidden.",
  "scrapbook": "Durations: micro 150–250ms, standard 400–600ms sticker-peel entrances. Easings: gentle ease-out with tilt; harsh snaps forbidden.",
  "zine-punk": "Durations: instant–250ms Xerox slams. Easings: none or steps(2); smooth premium motion forbidden.",
  "risograph": "Durations: micro 150–250ms, standard 350–550ms grain-settle prints. Easings: papery ease-out; springs forbidden.",
  "halftone": "Durations: micro 150–250ms, standard 350–500ms dot-pop entrances. Easings: punchy ease-out; slow fades forbidden.",
  "grain-noise": "Durations: micro 150–250ms, standard 400–600ms grain-drift loops. Easings: filmic ease-in-out; snappy digital motion forbidden.",
  "hand-drawn": "Durations: micro 150–250ms, standard 400–600ms draw-on strokes. Easings: hand ease-out with wobble; mechanical linear forbidden.",
  "illustration-led": "Durations: micro 150–250ms, standard 400–600ms character-bob loops. Easings: soft ease-in-out storybook motion; harsh snaps forbidden.",
  "corporate-memphis": "Durations: micro 150–250ms, standard 350–500ms friendly floats. Easings: gentle ease-in-out; harsh motion forbidden.",
  "organic-biophilic": "Durations: micro 200–300ms, standard 500–800ms leaf-sway loops. Easings: slow ease-in-out breathing; mechanical snaps forbidden.",
  "eco-sustainable": "Durations: micro 150–250ms, standard 400–600ms grow-in reveals. Easings: organic ease-out; bouncy springs forbidden.",
  "japandi": "Durations: micro 200–300ms, standard 500–700ms still-air fades. Easings: ease-out only; springs and hurry forbidden.",
  "wabi-sabi": "Durations: micro 250–400ms, standard 600–900ms slow patina fades. Easings: barely-there ease-out; hurried or bouncy motion forbidden.",
  "art-deco": "Durations: micro 200–300ms, standard 500–700ms gold-shimmer reveals. Easings: ceremonial ease-out; bouncy springs forbidden.",
  "art-nouveau": "Durations: micro 200–300ms, standard 500–750ms vine-unfurl reveals. Easings: slow organic ease-out; mechanical snaps forbidden.",
  "mid-century-modern": "Durations: micro 150–250ms, standard 350–550ms starburst pops. Easings: crisp ease-out; bouncy springs forbidden.",
  "70s-retro": "Durations: micro 150–250ms, standard 400–600ms wavy groove loops. Easings: loopy ease-in-out; harsh snaps forbidden.",
  "80s-retro": "Durations: micro 150–250ms, standard 400–700ms grid-scroll loops. Easings: synthwave ease-in-out cruise; harsh steps forbidden.",
  "90s-retro": "Durations: micro 150–250ms sticker slaps, standard 350–500ms. Easings: springy slap cubic-bezier(0.34,1.56,0.64,1); funereal fades forbidden.",
  "vaporwave": "Durations: micro 200–300ms, standard 500–900ms slow VHS drifts. Easings: hazy ease-in-out loops; snappy motion forbidden.",
  "synthwave": "Durations: micro 150–250ms neon flickers, standard 500–900ms grid-cruise loops. Easings: cruise ease-in-out; jarring snaps forbidden.",
  "pixel-8bit": "Durations: instant–200ms frame flips. Easings: steps(2–4) frame animation; smooth tweening forbidden — sprites snap.",
  "gaming-ui": "Durations: micro 100–200ms hit-markers, standard 300–500ms level-up bursts. Easings: punchy ease-out with shake; slow fades forbidden.",
  "comic-pop-art": "Durations: instant–250ms POW slams with shake. Easings: springy slam cubic-bezier(0.34,1.56,0.64,1); slow fades forbidden.",
  "graffiti-streetwear": "Durations: instant–250ms spray hits and sticker slaps. Easings: none or hard steps; smooth premium motion forbidden.",
  "surrealism": "Durations: micro 200–300ms, standard 500–900ms slow levitation loops. Easings: dreamy ease-in-out; hurried or bouncy motion forbidden.",
  "dreamcore": "Durations: micro 250–400ms, standard 600–1000ms slow loops. Easings: sleepy ease-in-out; snappy motion forbidden.",
  "liminal-weirdcore": "Durations: micro 200–400ms fluorescent hum flickers, standard 600ms. Easings: linear hum or steps(); choreographed motion forbidden.",
  "generative-algorithmic": "Durations: micro 100–200ms, standard 400–700ms seeded redraws. Easings: linear and steps() for plotter logic; bouncy springs forbidden.",
};

function md(s, related) {
  return `---
slug: ${s.slug}
name: ${JSON.stringify(s.name)}
description: ${JSON.stringify(s.description)}
category: ${JSON.stringify(s.category)}
tags: [${s.tags.map((t) => JSON.stringify(t)).join(", ")}]
related: [${related.map((r) => JSON.stringify(r)).join(", ")}]
preview:
  bg: "${s.bg}"
  surface: "${s.surface}"
  ink: "${s.ink}"
  muted: "${s.muted}"
  accent: "${s.accent}"
  accent2: "${s.accent2}"
  display: "${s.display}"
  body: "${s.body}"
---

# ${s.name} — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. ${introOverride[s.slug] ?? "Follow every section. When in doubt, choose the bolder interpretation."}

## 1. Overall aesthetic

${s.aesthetic}

**Three principles:**

- ${s.principles[0]}
- ${s.principles[1]}
- ${s.principles[2]}

## 2. Typography

- **Display:** ${s.display}
- **Body:** ${s.body}
- **Scale:** ${(typeOverride[s.slug]?.scale) ?? "hero 48–96px (up to 15vw+ for poster styles), H2 32–40px, H3 24px, body 15–17px, meta/labels 12–13px tracked uppercase."}
- **Weights:** ${(typeOverride[s.slug]?.weights) ?? "display 700–900; body 400–500; labels 600–700 with +0.08–0.2em tracking."}
- **Rules:** ${(typeOverride[s.slug]?.rules) ?? "flush-left headlines for editorial and Swiss styles; centered only for ceremonial or playful styles. Never justify body copy except newspaper columns."}

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | \`${s.bg}\` | Page ground |
| Surface | \`${s.surface}\` | Cards, panels, wells |
| Ink | \`${s.ink}\` | Headlines, body text |
| Muted | \`${s.muted}\` | Captions, meta, secondary text |
| Accent | \`${s.accent}\` | Primary actions, highlights |
| Accent 2 | \`${s.accent2}\` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

${s.spacing}

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

${s.layout}

## 6. Borders

${s.border}

## 7. Shadows

${s.shadow}

## 8. Radius

${s.radius}

## 9. Buttons

${s.buttons}

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

${s.cards}

## 11. Navigation

${s.nav}

## 12. Imagery

${s.imagery}

## 13. Icons

${s.icons}

## 14. Textures / Patterns

${s.texture}

## 15. Motion

${s.motion}

${durationsOverride[s.slug] ?? "Durations: micro 100–200ms, standard 250–350ms, ceremonial 600–1000ms. Easings: ease-out for UI, springs (cubic-bezier(0.34,1.56,0.64,1)) for playful, linear for mechanical."}

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use Ink for the ring so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor \`prefers-reduced-motion\` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- ${s.avoid[0]}
- ${s.avoid[1]}
- ${s.avoid[2]}
- ${s.avoid[3]}
- ${s.avoid[4]}

## 20. Quick-start snippet

\`\`\`css
:root {
  --bg: ${s.bg};
  --surface: ${s.surface};
  --ink: ${s.ink};
  --muted: ${s.muted};
  --accent: ${s.accent};
  --accent-2: ${s.accent2};
  --font-display: ${s.display};
  --font-body: ${s.body};
}
\`\`\`

\`\`\`html
<!-- Copy-paste starter: button + card in ${s.name} -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
\`\`\`

---

*Source: Design Styles — 100 design styles for AI coding agents. File: \`/designs/${s.slug}/DESIGN.md\`.*
`;
}

let count = 0;
for (const s of all) {
  const dir = join(root, "designs", s.slug);
  mkdirSync(dir, { recursive: true });
  const rel = relatedFor(s, all);
  writeFileSync(join(dir, "DESIGN.md"), md(s, rel));
  count++;
}
console.log(`Wrote ${count} DESIGN.md files.`);
