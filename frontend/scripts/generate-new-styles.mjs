// One-shot scaffolding: generated 20 DESIGN.md files (the 100 -> 120 batch).
// Run: node scripts/generate-new-styles.mjs
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "designs");

const STYLES = [
  {
    slug: "apple-liquid-glass", name: "Apple Liquid Glass",
    desc: "Translucent specular layers, floating glass bars, and fluid Apple-grade restraint.",
    cat: "Design System", tags: ["glass", "premium", "minimal"], related: ["glassmorphism", "mac-os", "minimalism"],
    bg: "#F5F7FA", surface: "#FFFFFF", ink: "#1D1D1F", muted: "#6E6E73", accent: "#0071E3", accent2: "#A259FF",
    display: "SF Pro Display, Inter, Helvetica Neue, sans-serif", body: "SF Pro Text, Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Liquid Glass is Apple's 2025 design language: interface as a physical material. Translucent bars float above content, refracting what scrolls beneath; specular highlights trace rounded edges like light on real glass. Everything is calm, spacious, and confident — color is used sparingly so the material itself carries the luxury.",
    principles: ["Content stays hero — chrome floats above it, never competes", "Every surface refracts: translucency with blur, never flat opacity", "Motion is fluid physics: springy, interruptible, 60fps or nothing"],
    scale: "hero 56–72px semibold tight (-0.02em), H2 32–40px, H3 22–24px, body 17px/1.5, captions 13px.",
    weights: "display 600–700; body 400–500; never black weights — elegance over loudness.",
    typeRules: "centered heroes with generous air; left-aligned app text; sentence case everywhere, never all-caps shouting.",
    accentRule: "Accent is for key actions and links only; large fills stay white or glass.",
    spacing: "8px base; cards 24–32px padding; sections 96–128px; glass bars float with 16–24px insets from viewport edges.",
    layout: "Full-bleed imagery with floating glass nav and tab bars; content max-width 1120px; rounded 20–28px containers layered over photography.",
    borders: "1px translucent white keylines (rgba(255,255,255,0.4)) on glass; hairlines (1px #1D1D1F14) on light surfaces.",
    shadows: "Soft ambient: 0 8px 32px rgba(0,0,0,0.12) under glass; inset 0 1px 0 rgba(255,255,255,0.5) specular edge.",
    radius: "20–28px cards and sheets; pills (999px) for controls and tab bars; 12px for small elements.",
    buttons: "Glassy pills with blur, blue filled primary (#0071E3, white text); hover deepens to #0077ED with 150ms ease; 44px targets.",
    cards: "Frosted cards (backdrop-blur 20px, saturate 180%) over imagery; title in semibold 20px; quiet hairline separators.",
    nav: "Floating frosted nav pill centered or full-width glass bar; SF symbols; search field embedded in glass.",
    imagery: "Full-bleed photography and gradient wallpapers; content scrolls visibly beneath translucent bars — imagery is the background.",
    icons: "SF-symbol style: 1.8px rounded strokes, medium weight, enclosed in frosted circles when on imagery.",
    textures: "None printed — depth comes from live blur and refraction; subtle mesh gradients only as wallpaper.",
    motion: "Spring physics (stiffness ~300, damping ~30); sheets slide 300ms spring; interruptible gestures; parallax restraint under 8px.",
    durations: "120–300ms springs; no linear fades.",
    avoid: ["Flat opaque gray boxes where glass belongs", "Heavy black borders or hard offset shadows", "All-caps shouting or ultra-black type", "More than one saturated accent per screen", "Static translucency without backdrop blur"],
  },
  {
    slug: "material-expressive", name: "Material Expressive",
    desc: "Springy rounded shapes, bold tonal color, and playful Google-grade motion.",
    cat: "Design System", tags: ["colorful", "playful", "rounded"], related: ["corporate-saas", "card-based-ui", "playful-maximalism"],
    bg: "#FEF7FF", surface: "#F3EDF7", ink: "#1D1B20", muted: "#49454F", accent: "#6750A4", accent2: "#EFB8C8",
    display: "Google Sans, Roboto, Helvetica Neue, sans-serif", body: "Roboto, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Material 3 Expressive is Google's bouncy, emotional design language: supersized rounded shapes, tonal color containers, and motion with personality. FABs morph, cards pop with springy emphasis, and color comes in coordinated tonal families rather than single loud accents. Friendly, chunky, and unmistakably alive.",
    principles: ["Shape carries emotion: big radii, pill morphs, playful geometry", "Tonal color families, not lone accents — containers in related hues", "Motion overshoots: springs and emphasis scales make taps feel joyful"],
    scale: "hero 44–64px Google Sans medium, H2 28–36px, body 16px/1.5, labels 14px medium.",
    weights: "display 500–700; body 400–500; rounded warmth over sharp authority.",
    typeRules: "left-aligned app type; centered only for empty states; dynamic-color aware headings.",
    accentRule: "Primary #6750A4 for actions; tonal containers (#EADDFF family) for emphasis blocks.",
    spacing: "8px base; cards 20–24px; sections 64–96px; FAB 16px from edges, 56–96px sizes.",
    layout: "Single-column app flows with edge-to-edge tonal headers; cards 16–28px radius in 12–16px gutters; nav rail or bottom bar.",
    borders: "None — separation via tonal fills; 1px outline (#79747E at 20%) only on outlined inputs.",
    shadows: "Tonal elevation: level-1 0 1px 3px rgba(0,0,0,0.12); FAB level-3 with colored tint shadow (accent at 30%).",
    radius: "16–28px cards; pills for buttons, chips, FABs; 4px only for data tables.",
    buttons: "Pill buttons, 40–56px tall; filled tonal primary; hover adds 8% overlay + emphasis scale 1.02; ripple on press.",
    cards: "Tonal filled cards (surface-container tones), 20px radius, no border; headline 20–24px medium; icon in tonal circle.",
    nav: "Navigation bar (bottom, 80px) or rail (left, 80px) with pill indicators; large FAB docked; search as rounded field.",
    imagery: "Rounded illustrations in tonal washes; photos in 16–24px rounded frames; dynamic-color hero art.",
    icons: "Rounded Material Symbols, filled for active / outlined for idle, 24px optical, in tonal containers.",
    textures: "Tonal washes and soft blobs; dot grids at 6% in empty states; no grain.",
    motion: "Emphasized springs: 300–500ms with slight overshoot; shared-element morphs between screens; ripple 200ms.",
    durations: "200–500ms expressive springs; exiting 150ms.",
    avoid: ["Sharp corners and thin hairline borders everywhere", "Single-accent flat minimalism with no tonal range", "Stiff linear motion with no spring", "iOS-style translucency and blur", "Uppercase micro-labels as primary voice"],
  },
  {
    slug: "fluent-design", name: "Fluent Design",
    desc: "Acrylic depth, soft light, and calm Microsoft-grade enterprise clarity.",
    cat: "Design System", tags: ["enterprise", "clean", "subtle"], related: ["corporate-saas", "desktop-ui", "minimalism"],
    bg: "#F3F2F1", surface: "#FFFFFF", ink: "#201F1E", muted: "#605E5C", accent: "#0078D4", accent2: "#8764B8",
    display: "Segoe UI, Inter, Helvetica Neue, sans-serif", body: "Segoe UI, Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Microsoft Fluent 2 is calm enterprise depth: acrylic panels with subtle luminosity, soft directional light, and restrained reveal highlights that follow the pointer. It feels like a well-lit office — professional, accessible, quietly dimensional. Nothing shouts; everything is findable.",
    principles: ["Depth through light: acrylic, elevation, and soft shadows — never flat gray", "Reveal on hover: light follows intent, guiding without noise", "One accent, used sparingly: blue means actionable, always"],
    scale: "hero 40–56px semibold, H2 28–32px, body 14–16px/1.5, captions 12px.",
    weights: "display 600; body 400–600; semibold for emphasis, never black.",
    typeRules: "left-aligned; sentence case; Segoe's humanist warmth at UI sizes.",
    accentRule: "Blue #0078D4 reserved for interactive elements; purple accent2 for illustration only.",
    spacing: "4px base (dense enterprise); cards 16–24px; sections 64–96px; command bars 44–48px tall.",
    layout: "App shell: left nav (240–300px), top command bar, content grid 12-col max 1280px; panels slide over, never full-page takeovers.",
    borders: "1px #201F1E10 hairlines; acrylic edges get 1px rgba(255,255,255,0.5) top light.",
    shadows: "Elevation scale: 4/8/16/64 — 0 4px 16px rgba(0,0,0,0.12) standard; flyouts deeper with soft spread.",
    radius: "4–8px controls and cards; 0px for window chrome dividers; pills only for tags and personas.",
    buttons: "4px buttons, 32px default height; primary blue filled; hover reveal-lightens; focus is 2px blue outline offset 1px.",
    cards: "White 8px cards with hairline + elevation-8; header semibold 16px; compound buttons as clickable rows.",
    nav: "Left nav with 4px accent indicator on selected; collapsible to 48px icons; top command bar with contextual actions.",
    imagery: "Abstract light-trail hero art; product screenshots in browser frames; people photography natural, never duotone.",
    icons: "Fluent outline icons 20px, 1.5px strokes; filled variant for selected states; consistent optical padding.",
    textures: "Acrylic noise at 3–5% + luminosity; mica washes on app backgrounds; no grain overlays.",
    motion: "Fast and purposeful: 100–200ms ease-out; fade+scale 150ms for flyouts; connected animations for navigation.",
    durations: "100–250ms; standard curve cubic-bezier(0.1,0.9,0.2,1).",
    avoid: ["Consumer-grade gradients and neon glows", "Centered marketing layouts inside product UI", "More than two accent hues per view", "Slow 500ms+ transitions on frequent actions", "Custom icon styles mixed with Fluent icons"],
  },
  {
    slug: "carbon-enterprise", name: "Carbon Enterprise",
    desc: "Dense data tables, strict IBM-grade grids, and no-nonsense enterprise precision.",
    cat: "Design System", tags: ["enterprise", "data", "functional"], related: ["corporate-saas", "functional-minimalism", "terminal"],
    bg: "#FFFFFF", surface: "#F4F4F4", ink: "#161616", muted: "#525252", accent: "#0F62FE", accent2: "#002D9C",
    display: "IBM Plex Sans, Inter, Helvetica Neue, sans-serif", body: "IBM Plex Sans, Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "IBM Carbon is the uniform of serious software: a strict 2x grid, 16px mini-units, dense data tables with zebra discipline, and blue that means exactly one thing. No decoration survives review. The beauty is in density done right — more rows, less chrome, every pixel accountable.",
    principles: ["Density is a feature: 32–48px rows, 16px gutters, zero wasted chrome", "Blue is action: #0F62FE reserved for interactive, never decoration", "Grid law: everything aligns to the 16px mini-unit and 2x grid"],
    scale: "page titles 28–32px, section 20px, body 14px/1.4, helper 12px, code/mono 12–13px.",
    weights: "400 body, 600 headings; Plex's engineered neutrality; tabular numerals for data.",
    typeRules: "left-aligned always; sentence case; Plex Mono for IDs, timestamps, code.",
    accentRule: "Blue for links, buttons, focus, active states — never for illustration fills.",
    spacing: "16px mini-unit base; table cells 16px horizontal; page gutters 32px; side nav 256px fixed.",
    layout: "Shell: 48px header, 256px left nav, fluid content with 16-col grid; dashboards of data-table cards; max 1584px.",
    borders: "1px #16161615 dividers; table row bottom hairlines; no card borders — background bands separate.",
    shadows: "Minimal: layer-01 0 1px 2px rgba(0,0,0,0.1); modals layer-02; restraint is the aesthetic.",
    radius: "0px — Carbon is square; 2px only for tags; pills only for status dots.",
    buttons: "Square 40–48px buttons; primary blue; secondary 1px outline; danger red #DA1E28; ghost for tertiary.",
    cards: "Flat white tiles on gray-10 ground, 16px padding, header with 16px semibold + overflow menu; data first.",
    nav: "Top 48px ui-shell header (product switcher, search, profile); left nav with category labels and counters.",
    imagery: "Geometric data-viz (Plex-coded charts); empty states with line illustrations; photos rare, documentary style.",
    icons: "Carbon pictograms 16/20px, 1.5px strokes, square optical frame; status dots 8px colored.",
    textures: "None — flat grays; subtle 16px grid visible only in design specs, never in product.",
    motion: "150ms ease-out micro-transitions; skeleton loading for tables; no parallax, no delight animation.",
    durations: "100–200ms; functional only.",
    avoid: ["Rounded cards and pill buttons", "Marketing gradients inside product surfaces", "Centered layouts wasting horizontal data space", "Decorative illustration as primary content", "Low-contrast gray text below 4.5:1"],
  },
  {
    slug: "polaris-commerce", name: "Polaris Commerce",
    desc: "Trust-building product grids, honest pricing, and Shopify-grade checkout polish.",
    cat: "E-commerce", tags: ["commerce", "clean", "trustworthy"], related: ["corporate-saas", "card-based-ui", "product-minimalism"],
    bg: "#FFFFFF", surface: "#F6F6F7", ink: "#202223", muted: "#6D7175", accent: "#008060", accent2: "#FFC453",
    display: "Shopify Sans, Inter, Helvetica Neue, sans-serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Shopify Polaris is commerce you can trust: honest price typography, forgiving forms, product cards with generous white space, and a checkout so calm it converts. Green means go and money; everything else gets out of the merchant's way. Boring in the best way — every element earns its place by selling.",
    principles: ["Trust is the UI: real prices, real reviews, real shipping info up front", "Merchant empathy: forgiving forms, plain language, no jargon", "Green is money: reserved for price, CTA, and success"],
    scale: "product titles 20–28px, price 20–24px semibold, body 15–16px, microcopy 13–14px.",
    weights: "500–700 for price and CTA; 400 for descriptions; clarity over character.",
    typeRules: "left-aligned; prices never truncated; sale prices pair red strikethrough with green current.",
    accentRule: "Green #008060 for CTAs, price highlights, success; gold accent2 for stars and badges only.",
    spacing: "20px base (Polaris space-5); product grid gaps 16–24px; page max 1200px; checkout single column 560px.",
    layout: "Product grid 2–4 cols with sticky filters; PDP: gallery left, buy panel right sticky; cart drawer slides from right.",
    borders: "1px #20222315 card borders; 8px radius; focused inputs 2px green outline.",
    shadows: "Card rest 0 1px 4px rgba(0,0,0,0.08); hover lifts to 0 8px 24px; drawer 0 0 40px rgba(0,0,0,0.16).",
    radius: "8px cards and buttons; 4px inputs; pills for badges and swatches rings.",
    buttons: "8px radius, 44–52px tall, green filled primary with white semibold; secondary white with border; full-width on mobile.",
    cards: "White product cards: 1:1 imagery, 12px padding, title 15px, price row, star rating, quick-add on hover.",
    nav: "Announcement bar (gold or black), logo left, search center, cart right with count badge; category row below.",
    imagery: "1:1 product shots on light gray; lifestyle second image on hover; zoom on PDP; badges (Sale/Bestseller) top-left.",
    icons: "Rounded outline 20px: cart, search, star (filled gold), truck, shield-check for trust rows.",
    textures: "None — clean studio backgrounds; subtle paper texture only in brand storytelling sections.",
    motion: "200ms ease-out hovers; image crossfade on hover; drawer slides 250ms; cart badge pops on add.",
    durations: "150–300ms; checkout steps instant.",
    avoid: ["Dark-pattern urgency (fake countdowns, stock lies)", "Tiny low-contrast prices", "Cluttered mega-menus over search", "Hiding shipping costs until checkout", "Auto-playing video with sound"],
  },
  {
    slug: "geist-minimal", name: "Geist Minimal",
    desc: "Razor-thin developer minimalism with Vercel-grade restraint and mono precision.",
    cat: "Minimalist", tags: ["minimal", "developer", "monochrome"], related: ["ultra-minimalism", "linear-inspired", "functional-minimalism"],
    bg: "#FFFFFF", surface: "#FAFAFA", ink: "#171717", muted: "#666666", accent: "#0070F3", accent2: "#7928CA",
    display: "Geist Sans, Inter, Helvetica Neue, sans-serif", body: "Geist Sans, Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Vercel's Geist is minimalism with a pulse: near-monochrome surfaces, one electric blue, hairline dividers, and monospace details that whisper 'built by engineers'. Generous whitespace, tiny precise labels, and gradients used like laser beams — rare, diagonal, unforgettable. The fastest-looking design on the internet.",
    principles: ["Monochrome first: black, white, grays — color is an event", "Hairlines, not boxes: 1px dividers create structure without weight", "Mono for metadata: labels, badges, and footnotes in monospace uppercase"],
    scale: "hero 48–80px tight tracking (-0.04em), H2 32px, body 16px/1.6, mono micro-labels 12–13px uppercase.",
    weights: "500–700 display with tight tracking; 400 body; mono 400–500.",
    typeRules: "centered heroes; left docs; generous line-length caps (65ch); tracking tightens as size grows.",
    accentRule: "Blue #0070F3 for primary actions and links; conic-gradient beams for hero moments only.",
    spacing: "8px base; heroes 120–160px vertical; cards 24px; docs measure 700px; whitespace is the brand.",
    layout: "Centered hero + logo cloud + 3-up features + code block; docs with left sidebar; max 1024px (1200 heroes).",
    borders: "1px #17171710 hairlines; gradient border beams (conic) on featured cards; dots grid for hero grounds.",
    shadows: "Nearly none: 0 0 0 + subtle 0 8px 30px rgba(0,0,0,0.06) on floating panels; glow only on gradient beams.",
    radius: "8–12px cards; 6–8px buttons; pills for badges and status.",
    buttons: "8px radius, black primary (white text) or blue; 40px height; hover inverts or brightens 150ms; ⌘K hint chips.",
    cards: "Hairline-bordered white cards, 12px radius, 24px padding; hover border darkens; featured card gets gradient beam top edge.",
    nav: "56–64px hairline-bottom bar; logo left, links center, deploy CTA right; docs sidebar with mono section labels.",
    imagery: "Dark code blocks with traffic dots; diagonal gradient beams; monochrome product screenshots; triangle motif sparingly.",
    icons: "16–20px 1.5px-stroke line icons (triangle, lightning, globe); mono text used as iconography.",
    textures: "Dot grids and line grids at 5–8%; conic gradient beams; no photography textures.",
    motion: "150ms fades and 200ms rises on scroll; beam shimmer 3s loop; counters tick; restraint everywhere.",
    durations: "100–250ms UI; 2–4s ambient loops.",
    avoid: ["Heavy shadows and 3D bevels", "Rainbow multi-accent palettes", "Rounded-3xl playful blobs", "Marketing fluff above the fold — show the product", "Custom fonts when system/geist stack works"],
  },
  {
    slug: "fintech-neobank", name: "Neobank Fintech",
    desc: "Dark money dashboards, lime-on-black balances, and Revolut-grade premium edge.",
    cat: "Fintech", tags: ["dark", "premium", "bold"], related: ["linear-inspired", "cyberpunk", "corporate-saas"],
    bg: "#0B0D0E", surface: "#15181A", ink: "#EDEFF0", muted: "#9BA1A6", accent: "#D4FF4F", accent2: "#7C5CFF",
    display: "Inter Tight, Inter, Helvetica Neue, sans-serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "The neobank look is money after dark: near-black grounds, oversized balance numerals, and one electric lime that means wealth in motion. Cards float like metal slabs, charts glow faintly, and every number uses tabular figures because cents matter. Premium, a little cocky, built for screenshots.",
    principles: ["Balance is the hero: biggest number on screen, tabular, lime-lit", "Dark is premium: black grounds, metal cards, neon sparingly", "Frictionless or death: one-tap actions, biometric confirmations, instant feedback"],
    scale: "balance 48–72px tight, H2 24–32px, body 15–16px, mono numerals with tabular figures.",
    weights: "600–800 numerals; 400–500 prose; money is bold, explanations are light.",
    typeRules: "left-aligned dashboards; centered auth; currency symbols smaller (0.7em) beside numerals.",
    accentRule: "Lime #D4FF4F for primary CTA, gains, active states; violet accent2 for premium/insurance tiers.",
    spacing: "8px base; cards 20–24px; dashboard gaps 12–16px; thumb-zone CTAs 56px tall.",
    layout: "App-first: greeting + balance card + quick actions row + transactions list; desktop adds right rail (cards, insights).",
    borders: "1px rgba(255,255,255,0.08) hairlines; metal card edges with gradient border; no heavy boxes.",
    shadows: "Card lift 0 12px 32px rgba(0,0,0,0.5); lime glow 0 0 24px rgba(212,255,79,0.25) on primary only.",
    radius: "16–24px cards; 16px buttons; pills for segmented controls and asset chips.",
    buttons: "Lime filled (black text) primary, 16px radius, 52–56px; secondary dark filled; haptic-feel press scale 0.98.",
    cards: "Dark slabs with balance, sparkline, and quick actions; virtual metal card visual with chip and number masking.",
    nav: "Bottom tab bar (mobile, 5 items, lime active); desktop top bar with search + notifications + avatar.",
    imagery: "3D metal card renders; glowing area charts; merchant logos in rounded tiles; no stock photography.",
    icons: "22px rounded line icons; category glyphs in tinted tiles; lime for active, gray for idle.",
    textures: "Faint grid + noise 4% on heroes; gradient mesh behind balance card; brushed-metal card sheen.",
    motion: "Balance count-up on load; pull-to-refresh spin; card tilt on drag; 200ms springy sheet presentations.",
    durations: "150–300ms UI; count-ups 800ms ease-out.",
    avoid: ["Light airy banking pastels", "Tiny low-contrast gray numerals", "Multi-step flows for one-tap actions", "Red/green-only signals without labels", "Cluttered cross-sell banners above money"],
  },
  {
    slug: "web3-crypto", name: "Web3 Crypto",
    desc: "Wallet-first glassy dark surfaces with gradient balances and exchange-grade glow.",
    cat: "Fintech", tags: ["dark", "gradient", "glow"], related: ["cyberpunk", "aurora-glow", "gradient-design"],
    bg: "#060A14", surface: "#0D1424", ink: "#F2F5FF", muted: "#8B94AD", accent: "#00E5A0", accent2: "#6C5CFF",
    display: "Space Grotesk, Inter, Helvetica Neue, sans-serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "The top-tier exchange aesthetic: deep-space navy-black, glassy panels, gradient numerals for portfolio value, and green/violet glows that pulse with the market. Connect-wallet is the front door; candlesticks are the wallpaper. Trust is built with real-time numbers and audited-looking precision.",
    principles: ["Wallet is identity: connect state drives the whole header", "Numbers are live: every figure looks ticking, precise to 2–8 decimals", "Glow means market: green up, red down, violet for protocol"],
    scale: "portfolio 40–64px Space Grotesk, pairs 20–28px, body 14–15px, tickers 12–13px mono.",
    weights: "500–700 display; tabular numerals everywhere; mono for addresses (0x…) and hashes.",
    typeRules: "left dashboards; centered connect-wallet empty states; addresses truncated middle with copy button.",
    accentRule: "Mint #00E5A0 for gains/primary; violet #6C5CFF for protocol/premium; red #FF5C5C losses only.",
    spacing: "8px base; panels 20–24px; market rows 56–64px; terminal density on desktop.",
    layout: "Exchange grid: chart center, order book right, trade ticket far right; portfolio: balance hero + asset table; full-bleed dark.",
    borders: "1px rgba(255,255,255,0.08); gradient hairlines on featured panels; glass blur over chart grounds.",
    shadows: "Panel 0 16px 48px rgba(0,0,0,0.5); neon underglow on primary (mint at 25%); chart area glow.",
    radius: "16–20px panels; 12px inputs; pills for network selectors and asset chips.",
    buttons: "Gradient or mint primary (dark text), 12px radius, 48px; secondary glass; danger outlined red for destructive (revoke).",
    cards: "Glassy asset rows: icon, name/symbol, sparkline, price, 24h chip; hover brightens 6%; click to pair page.",
    nav: "Top bar: logo, markets/earn/NFT links, search pairs, network pill, connect-wallet button; ticker tape below.",
    imagery: "Candlestick/area charts as hero art; 3D coin renders; gradient orbs; identicon avatars for wallets.",
    icons: "Token glyphs in 32px circles; 18px line icons for actions; network badges overlaid bottom-right.",
    textures: "Starfield dot grids; gradient mesh; scanline-free — clean glass over deep space.",
    motion: "Number tickers flash green/red 300ms; chart draws on load; connect modal springs 250ms; live pulse dot.",
    durations: "150–300ms UI; price flashes 300ms; ambient glows 4s.",
    avoid: ["Flat daylight banking aesthetics", "Hiding fees and spreads", "Meme-coin chaos as the default voice", "Tiny unreadable chart labels", "Fake guaranteed-return promises in copy"],
  },
  {
    slug: "ai-conversational", name: "Conversational AI",
    desc: "Chat-first bubbles, streaming answers, and calm Claude-grade intelligence.",
    cat: "Product", tags: ["minimal", "calm", "conversational"], related: ["notion-inspired", "product-minimalism", "minimalism"],
    bg: "#FAF9F5", surface: "#FFFFFF", ink: "#1F1E1D", muted: "#6F6E69", accent: "#D97757", accent2: "#5D8AA8",
    display: "Georgia, Times New Roman, serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "The AI-chat aesthetic is a quiet study: warm paper background, serif model voice, generous line length, and a composer bar that feels like good stationery. Streaming text with a soft blinking caret, artifact cards that slide in beside the thread, and zero chrome competing with the words. Intelligence you can read for hours.",
    principles: ["Words are the interface: typography quality beats decoration", "Streaming is alive: caret, fade-in lines, graceful artifact reveals", "Calm capability: suggest, never shout — starter prompts as gentle chips"],
    scale: "model prose 16–18px/1.7 serif, user 15px sans, headings 24–32px serif, composer 16px.",
    weights: "400–500 prose; 600 for headings; serif voice, sans UI — never swap them.",
    typeRules: "thread max 720px centered-left; generous paragraph rhythm; code in mono blocks with copy buttons.",
    accentRule: "Terracotta #D97757 for send, active, and key highlights; slate-blue accent2 for artifacts and citations.",
    spacing: "Thread padding 24px; message gaps 20–28px; composer floating with 16px margins, 56px tall.",
    layout: "Left sidebar (history, 260px collapsible) + centered thread + optional artifact panel right; mobile is thread + composer only.",
    borders: "Hairline #1F1E1D12 dividers; composer 1px border + soft shadow; artifact cards 1px + 12px radius.",
    shadows: "Composer float 0 8px 24px rgba(0,0,0,0.08); artifacts 0 4px 16px; messages flat (no bubbles war).",
    radius: "16–24px composer; 12px artifact cards and code blocks; pills for suggestion chips.",
    buttons: "Round terracotta send button (40px circle, arrow-up glyph); ghost icon buttons; suggestion chips outlined pill.",
    cards: "Artifact cards: title bar + rendered content + version/footer actions; code blocks dark with language tag + copy.",
    nav: "Slim sidebar with search, new-chat CTA, grouped history, model picker top-center as quiet dropdown.",
    imagery: "Almost none — typographic product; empty states get a sun/asterisk mark and three starter prompts.",
    icons: "18px 1.5px line icons: plus, mic, arrow-up, copy, check, sliders; asterisk/sun motif for the brand.",
    textures: "Warm paper flat; faint radial warmth behind composer; no grain, no gradients shouting.",
    motion: "Token fade-in per line (staggered 20ms); caret blink 1s; artifact slides 250ms; stop button morphs from send.",
    durations: "150–250ms UI; streaming lines stagger; reduced-motion shows full text instantly.",
    avoid: ["Chat bubbles war (both sides boxed and colored)", "Dark terminal hacker clichés", "Auto-playing marketing carousels", "Tiny 13px body copy for long answers", "Hiding the stop/disclaimer controls"],
  },
  {
    slug: "dataviz-terminal", name: "Dataviz Terminal",
    desc: "Bloomberg-grade dense tables, sparklines, and monospace market precision.",
    cat: "Data", tags: ["data", "dense", "mono"], related: ["terminal", "functional-minimalism", "corporate-saas"],
    bg: "#0A0E14", surface: "#11161F", ink: "#E6E9EF", muted: "#8A93A6", accent: "#FF9F0A", accent2: "#30D158",
    display: "JetBrains Mono, SF Mono, Menlo, monospace", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "The professional terminal: near-black blue-tinted ground, amber highlights, green/red market semantics, and data packed like a Bloomberg screen. Sparklines live inside table cells, heatmaps carry the color so text stays readable, and every millisecond has a timestamp. Ugly to outsiders; beautiful to anyone who trades on information.",
    principles: ["Density wins: 28–36px rows, 12px mono, maximum signal per viewport", "Color is data: amber alerts, green/red deltas, never decoration", "Mono for figures: tabular, aligned decimals, right-justified numbers"],
    scale: "headers 11–12px uppercase mono, cells 12–13px mono, titles 16–20px, KPI numerals 24–32px.",
    weights: "400–500 mono; 600–700 for KPIs and alerts; no light weights at small sizes.",
    typeRules: "right-align all numerals; left-align names; decimals aligned; timestamps in muted mono.",
    accentRule: "Amber #FF9F0A for focus/alerts/selection; green #30D158 up, red #FF453A down — always paired with ▲▼.",
    spacing: "4px base; cell padding 6–10px; panel gaps 8–12px; command bar 40px; status bar 28px.",
    layout: "Multi-pane grid: watchlist left, chart center, depth/ladder right, tape bottom; status bar with latency + clock; keyboard-first.",
    borders: "1px #E6E9EF12 cell dividers; selected row 1px amber inset; pane separators 1px solid.",
    shadows: "Almost none — separation via borders and bands; selected-row glow amber at 15%; modal floats with depth.",
    radius: "4px panels and tags; 2px inputs; pills only for session/status badges.",
    buttons: "4px mono uppercase buttons 32px; amber primary for execute; red outline for flatten/close; hotkey hints inline.",
    cards: "KPI tiles: label mono uppercase 11px, value 28px tabular, delta chip, 48px sparkline; alert rows flash amber.",
    nav: "Top command palette bar (⌘K) with symbol search; tabbed workspaces; bottom status bar: feed, latency, session.",
    imagery: "Charts are the imagery: candlesticks, depth heatmaps, sparklines, distribution curves; logos as 16px favicons.",
    icons: "12–14px mono glyphs and geometric marks (▲▼●◆); status dots; no illustrative icon sets.",
    textures: "Faint grid lines on charts; alternating row bands at 3%; scanlines never (readability first).",
    motion: "Cell flash on update (150ms); streaming appends; crosshair syncs across panes; number transitions 100ms.",
    durations: "80–150ms updates; alerts pulse 1s ×3 then settle.",
    avoid: ["Rounded playful cards and marketing gradients", "Left-aligned ragged numerals", "Color-only up/down signals (add ▲▼ + labels)", "Hiding latency and data timestamps", "Blocking the UI on streaming updates"],
  },
  {
    slug: "frutiger-aero", name: "Frutiger Aero",
    desc: "Glossy aqua bubbles, dewy nature-tech, and optimistic 2000s glass futurism.",
    cat: "Nostalgic", tags: ["glossy", "nostalgic", "optimistic"], related: ["y2k", "glassmorphism", "skeuomorphism"],
    bg: "#E8F7F1", surface: "#FFFFFF", ink: "#0B3B39", muted: "#4A6B68", accent: "#00A67E", accent2: "#2D9CDB",
    display: "Frutiger, Segoe UI, Helvetica Neue, sans-serif", body: "Segoe UI, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Frutiger Aero is the future we were promised: dewy grass, glass orbs, tropical fish in bubbles, and UI that looks perpetually hydrated. Glossy highlights, lens flares, aurora skies, and humanist sans type. Optimistic, clean, a little surreal — sustainability as a screensaver. The defining early-2000s techno-utopia, back in a big way.",
    principles: ["Everything is dewy: gloss highlights, droplets, lens flares, reflections", "Nature + tech in harmony: leaves, water, glass, light — never grimy", "Humanist clarity: Frutiger/Segoe voice, airy spacing, readable optimism"],
    scale: "hero 44–64px light humanist, H2 28–36px, body 15–17px/1.6, captions 13px.",
    weights: "300–600; light large headlines, regular body; airy over heavy.",
    typeRules: "left or centered with lots of air; sentence case; white type with soft shadow over imagery.",
    accentRule: "Aqua-green #00A67E primary; sky-blue accent2 for water/sky; gradients glassy, never muddy.",
    spacing: "8px base; cards 24–32px; sections 80–120px; floating glass panels with 24px viewport insets.",
    layout: "Wallpaper-bleed heroes (aurora meadow/ocean) with floating glass content panels; taskbar-like bottom docks; max 1140px.",
    borders: "1px glassy white (rgba(255,255,255,0.6)) + 1px inner highlight; pill and bubble shapes dominate.",
    shadows: "Soft dewy: 0 12px 40px rgba(0,120,100,0.18); inner top highlight inset 0 1px 0 white; orbs get inner glow.",
    radius: "Bubbles and pills: 24px–999px; panels 20–28px; sharp corners forbidden.",
    buttons: "Glossy aqua gel pills with top-half highlight; hover brightens + lifts; active squeezes; 48px tall.",
    cards: "Frosted glass panels over nature wallpaper; 24px radius; icon orbs (glossy spheres) as visual anchors.",
    nav: "Glass top bar with glossy orb logo; bottom dock with magnified-hover icons; search as dewy pill.",
    imagery: "Aurora skies, dewy leaves, koi/bubbles, lens flares, glass orbs; photos hyper-clean and saturated.",
    icons: "Glossy 3D-ish orbs and droplets; 20–24px with shine spots; Skeuomorphic-but-clean metaphors (drops, leaves).",
    textures: "Water caustics, bokeh, condensation dots, light rays; aurora gradient washes.",
    motion: "Buoyant 300ms ease-out floats; bubbles drift upward loop; hover gloss sweeps; page transitions ripple.",
    durations: "250–400ms UI; 6–10s ambient drifts.",
    avoid: ["Grunge, noise, or dystopian grit", "Flat monochrome minimalism", "Sharp brutalist corners and hard shadows", "Cynical copy — optimism is mandatory", "Tiny cramped layouts with no air"],
  },
  {
    slug: "flat-design", name: "Flat Design",
    desc: "Bold color blocks, zero shadows, and honest two-dimensional clarity.",
    cat: "Minimalist", tags: ["flat", "bold", "clean"], related: ["product-minimalism", "functional-minimalism", "swiss-design"],
    bg: "#FFFFFF", surface: "#F5F5F5", ink: "#2D2D2D", muted: "#757575", accent: "#3498DB", accent2: "#E74C3C",
    display: "Open Sans, Helvetica Neue, Arial, sans-serif", body: "Open Sans, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Classic 2013 flat: honest two-dimensional color blocks, long shadows only if any, crisp icon grids, and typography doing all the talking. Turquoise, emerald, sunflower, and alizarin in confident rectangles. No bevels, no gloss, no pretending — the web distilled to color, type, and grid.",
    principles: ["Zero decoration: no gradients, shadows, or textures — color and type only", "One idea per block: bold rectangles each with a single job", "Typography is the interface: big, light, letterspaced"],
    scale: "hero 48–72px light, H2 30–36px, body 16px/1.6, tile labels 14px uppercase letterspaced.",
    weights: "300–400 headlines; 400–600 UI; light large type is the signature.",
    typeRules: "centered heroes; left app text; generous letterspacing on labels (+0.1em).",
    accentRule: "Blue #3498DB links/CTAs; red accent2 sparingly for alerts and sale; section grounds rotate the palette.",
    spacing: "8px base; tiles 32–48px padding; sections 80–112px; tile grids gapless or 16px gutters.",
    layout: "Color-block sections alternating white and palette grounds; metro tile grids (square + wide); max 1140px.",
    borders: "None — edges are color changes; 2px white dividers inside colored blocks when needed.",
    shadows: "None. Depth via color contrast only; long-shadows forbidden in this interpretation (pure flat).",
    radius: "2–4px subtle on buttons; tiles square; pills only for avatars and toggles.",
    buttons: "Flat rectangles, 44–52px, uppercase 14px letterspaced; hover darkens 8%; no shadow, no gradient.",
    cards: "Flat color tiles: icon + title + one line; white cards on gray ground with zero shadow, 2px radius.",
    nav: "Flat colored top bar (white text) or white bar with colored logo; underline-free links, color-swap hover.",
    imagery: "Flat vector illustrations with long shadows; duotone hero shapes; photos rare, full-bleed with color overlay.",
    icons: "Glyph-style line icons, 2px strokes, single color (white on color, color on white), 24–48px in tiles.",
    textures: "None whatsoever — flat means flat.",
    motion: "Simple 150–200ms color fades and slides; tile flips on dashboards; no springs, no physics.",
    durations: "150–250ms ease; snappy and honest.",
    avoid: ["Gradients, gloss, and drop shadows", "Skeuomorphic textures (leather, metal, paper)", "More than 5 palette colors per view", "Thin unreadable light type below 16px", "Decorative animation with no function"],
  },
  {
    slug: "mcbling", name: "McBling",
    desc: "Rhinestone pink luxe, celebrity glamour, and Y2K maximalist sparkle.",
    cat: "Maximalist", tags: ["glam", "pink", "maximal"], related: ["y2k", "color-maximalism", "playful-maximalism"],
    bg: "#FFF0F6", surface: "#FFFFFF", ink: "#57102E", muted: "#A05C7E", accent: "#FF2E93", accent2: "#FFD700",
    display: "Didot, Bodoni MT, Playfair Display, Georgia, serif", body: "Helvetica Neue, Arial, sans-serif",
    aesthetic: "McBling is Y2K's rich older sister: hot pink velour, rhinestone crusts, gold chains, cherry motifs, and Juicy-era script declaring everything iconic. Leopard print meets luxury monogram; flip phones and limousines. Unapologetically femme, flashy, and fun — glamour as maximalism.",
    principles: ["More is more: rhinestones, foil, glitter, and shine stack without shame", "Pink is power: hot pink + gold is the luxury signal", "Script declares, sans explains: display voices attitude, body stays readable"],
    scale: "hero 52–80px high-contrast serif or script, H2 32–40px, body 15–17px, captions 12–13px uppercase.",
    weights: "700–900 display drama; 400 body; script accents for single words only.",
    typeRules: "centered glamorous heroes; left product text; italics and scripts for emphasis words.",
    accentRule: "Hot pink #FF2E93 for CTAs and headlines; gold #FFD700 for borders, stars, premium marks.",
    spacing: "8px base; cards 24–32px; sections 72–104px; glitter dividers (star rows) between chapters.",
    layout: "Centered boutique: hero with script headline + CTA, marquee ticker, product grid, testimonial wall; max 1140px.",
    borders: "2px gold or pink; rhinestone dot rows as dividers; scalloped edges on badges.",
    shadows: "Pink glows 0 0 24px rgba(255,46,147,0.35); soft 0 12px 32px rgba(87,16,46,0.18); glitter sparkles.",
    radius: "16–24px cards; pills for CTAs and tags; hearts and stars as shapes.",
    buttons: "Hot-pink pills with white bold text + gold 2px ring; hover glow intensifies; 48–56px tall.",
    cards: "White cards, pink borders, gold star ratings, product shots with sparkle overlays; 'iconic' ribbon badges.",
    nav: "Pink or black bar with script logo; links uppercase with sparkle hover; cart with heart badge.",
    imagery: "Glossy product shots, velour textures, chrome hearts, cherries, stars, limousines; heavy sparkle overlays.",
    icons: "Hearts, stars, cherries, lips, crowns — filled pink/gold, glossy, 20–28px.",
    textures: "Glitter, velour, leopard spots (restrained), foil shine sweeps, rhinestone grids.",
    motion: "Sparkle twinkles (1–2s), shine sweeps on hover 400ms, marquee tickers, bouncy 300ms pops.",
    durations: "200–400ms pops; 1–3s sparkle loops.",
    avoid: ["Muted minimalism and restraint lectures", "Corporate blue anywhere", "Tiny timid type", "Matte flatness with no shine", "Cynical anti-glam copy"],
  },
  {
    slug: "e-ink-paper", name: "E-Ink Paper",
    desc: "Warm paper grounds, book serif, and distraction-free reading calm.",
    cat: "Minimalist", tags: ["reading", "serif", "calm"], related: ["editorial-minimalism", "newspaper", "japanese-minimalism"],
    bg: "#F4F1EA", surface: "#FBFAF7", ink: "#1A1A18", muted: "#6B675E", accent: "#8C3B1B", accent2: "#2F5D50",
    display: "Charter, Georgia, Times New Roman, serif", body: "Georgia, Charter, Times New Roman, serif",
    aesthetic: "The Kindle-and-print aesthetic: warm paper grounds, book serif set at reading sizes, hairline rules, and absolutely nothing blinking. Progress is a thin line, chapters are the navigation, and the highest luxury is focus. Designed for three-hour sessions and zero eye strain.",
    principles: ["Reading is the product: 65ch measure, 1.7 line-height, true book serif", "Paper, not pixels: warm grounds, ink blacks, no pure white glare", "Silence is golden: no motion, no badges, no interruptions"],
    scale: "body 18–20px/1.7 serif, chapter titles 32–40px, headings 24px, footnotes 14px.",
    weights: "400 body; 600–700 headings; italics for emphasis, never bold shouting in prose.",
    typeRules: "justified or left prose at 60–70ch; drop caps for chapters; small-caps section labels.",
    accentRule: "Sepia #8C3B1B for links and progress; deep green accent2 for highlights and success.",
    spacing: "Margins generous: 24–32px page padding; paragraphs 1em apart; chapters start 25% down the page.",
    layout: "Single centered column 680px; slim progress hairline top; footnote margin notes on desktop; footer colophon.",
    borders: "Hairline rules (#1A1A1815) for headers, dividers, tables; double rules for chapter heads.",
    shadows: "None — paper has no drop shadows; e-ink flatness is the point.",
    radius: "2–4px minimal on buttons and highlights; reading surface square.",
    buttons: "Quiet text buttons and outlined 4px controls; sepia links with underline offset 3px; 44px targets.",
    cards: "Definition and pull-quote cards: paper surface, left sepia rule, serif italic quotes, citation small-caps.",
    nav: "Table of contents as the nav: chapter list with progress dots; top shows title + 1px progress line.",
    imagery: "Engraving-style illustrations, maps, diagrams; photos desaturated sepia; figures with small-caps captions.",
    icons: "Minimal 16px book glyphs: bookmark, pen, quote marks; sepia line icons only.",
    textures: "Paper grain at 3–5%; deckle-edge dividers on chapter art; no gloss anywhere.",
    motion: "Page-turn fades 150ms; highlight sweeps; essentially static — motion only for orientation.",
    durations: "100–200ms; stillness by default.",
    avoid: ["Pure-white glare backgrounds", "Sans-serif body copy", "Popups, badges, and streak gamification", "Autoplay or ambient animation", "Low-contrast gray text in prose"],
  },
  {
    slug: "kawaii-pop", name: "Kawaii Pop",
    desc: "Pastel Harajuku stickers, chunky rounded type, and cute overload.",
    cat: "Playful", tags: ["cute", "pastel", "playful"], related: ["playful-maximalism", "comic-pop-art", "claymorphism"],
    bg: "#FFF5FA", surface: "#FFFFFF", ink: "#5C2D52", muted: "#A87B9C", accent: "#FF6FB5", accent2: "#7ED6FF",
    display: "Baloo 2, Quicksand, Helvetica Neue, sans-serif", body: "Quicksand, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Harajuku sticker-book design: pastel panels, chunky rounded type, smiling mascots, and star sprinkles on everything. Cards wobble, buttons squish, and every empty state apologizes with a crying-laughing mascot. Cute is load-bearing — approachability converts.",
    principles: ["Round everything: 20px+ radii, bubbly type, squishy controls", "Pastel stacks: pink + sky + cream + mint in soft layers", "Mascots emote: faces on states — happy success, sleepy loading, teary errors"],
    scale: "hero 44–64px chunky rounded, H2 28–34px, body 15–17px/1.6, labels 13–14px bold rounded.",
    weights: "600–800 display (Baloo ExtraBold energy); 500–700 body; soft, never sharp.",
    typeRules: "centered heroes with wiggle; left product text; uppercase only for tiny sticker labels.",
    accentRule: "Bubblegum #FF6FB5 primary; sky #7ED6FF secondary; mint and lavender supporting pastels.",
    spacing: "8px base; cards 24–32px; sections 72–96px; sticker clusters with rotated overlaps.",
    layout: "Centered sticker-book: hero mascot + headline, feature sticker grid, pastel band sections; max 1080px.",
    borders: "3px solid ink-plum or white sticker rims (white 4px + soft shadow = die-cut sticker look).",
    shadows: "Soft puffy: 0 10px 28px rgba(255,111,181,0.28); sticker die-cut white rim + lift.",
    radius: "20–32px cards; pills for buttons and chips; circles for avatars and mascot badges.",
    buttons: "Chunky pastel pills, 48–56px, bold rounded text; hover squish (scale 1.04); active squish (0.95); white sticker rim.",
    cards: "Sticker cards with faces, sparkles, and pastel fills; tilted -2°/+2° alternation; tap to wobble.",
    nav: "Pastel bar with chunky logo + mascot; pill links; cart/profile as sticker badges with counts.",
    imagery: "Mascots, plush renders, star/heart sprinkles, pastel food motifs; photos get sticker frames + doodles.",
    icons: "Thick rounded 2.5px icons with faces; hearts, stars, paws, bows; 22–28px, pastel filled.",
    textures: "Polka dots, gingham, star sprinkles, scallop edges; pastel gradient washes.",
    motion: "Squish-and-stretch 200ms springs; mascot idle bounce 2s; sparkles twinkle; wobble on tap.",
    durations: "150–300ms springs; 2s idle loops.",
    avoid: ["Sharp corners and hairline minimalism", "Dark moody palettes", "Corporate stock photography", "Sarcastic or edgy copy — kindness only", "Tiny low-contrast pastel text (keep plum ink)"],
  },
  {
    slug: "solarpunk", name: "Solarpunk",
    desc: "Sunlit eco-futurism, leafy greens, and optimistic post-carbon abundance.",
    cat: "Futurist", tags: ["eco", "optimistic", "organic"], related: ["eco-sustainable", "organic-biophilic", "futurism"],
    bg: "#F2F7E9", surface: "#FFFFFF", ink: "#1E3A24", muted: "#5A7261", accent: "#3E9B4F", accent2: "#F2B705",
    display: "Fraunces, Georgia, serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Solarpunk is the optimistic future: greenhouse glass, solar geometry, mural greens and sun golds, food forests where parking lots were. Art-nouveau curves meet appropriate tech; every interface feels grown as much as built. Abundance, community, and open knowledge — the opposite of cyberpunk dread.",
    principles: ["Grow, don't extract: leafy imagery, living greens, sun golds", "Community tech: gardens, grids, and commons — show people thriving", "Craft futurism: nouveau curves + stained-glass geometry + open hardware"],
    scale: "hero 48–68px Fraunces soft serif, H2 30–38px, body 16–17px/1.6, labels 13px uppercase.",
    weights: "500–700 display with soft optical sizing; 400–500 body; warmth over precision.",
    typeRules: "left-aligned organic flow; centered manifestos; italic serif accents for hope-words.",
    accentRule: "Leaf green #3E9B4F primary; sun gold #F2B705 for highlights, badges, solar marks.",
    spacing: "8px base; cards 24–32px; sections 88–120px; vine-like divider flourishes between chapters.",
    layout: "Editorial-organic: arched image masks, staggered greenhouse grids, full-bleed garden photography; max 1180px.",
    borders: "2px deep-green on feature cards; arched (top-rounded 999px) frames for imagery; thin gold rules.",
    shadows: "Sun-soft: 0 16px 40px rgba(30,58,36,0.14); leaves cast dappled radial gradients, not hard shadows.",
    radius: "Arches (top 160–999px) for heroes and images; 16–24px cards; pills for tags.",
    buttons: "Leaf-green pills with cream text, gold hover ring; secondary outlined green; 48–52px.",
    cards: "Seed-packet cards: arched image top, serif title, green meta row, sun-gold badge for seasons.",
    nav: "Cream bar with green wordmark + leaf mark; links with growing-underline hover; join CTA green pill.",
    imagery: "Greenhouses, food forests, solar roofs, murals, community feasts; stained-glass sun motifs; Earth-from-garden views.",
    icons: "Leaf, sun, sprout, hexagon-grid, hand-heart — 2px rounded green line icons, 20–24px.",
    textures: "Leaf dapple, recycled paper 5%, stained-glass geometry, topographic garden lines.",
    motion: "Growing lines (path draw 800ms), sunrises on scroll, leaves drift 8s loops; 250ms gentle rises.",
    durations: "200–400ms UI; 6–10s ambient nature loops.",
    avoid: ["Chrome-and-neon dystopia", "Concrete-gray brutalism", "Scarcity-fear copy", "Plastic gloss and chrome text", "Monoculture minimalism with no life"],
  },
  {
    slug: "afrofuturism", name: "Afrofuturism",
    desc: "Cosmic gold, ancestral pattern, and interstellar Black imagination.",
    cat: "Cultural", tags: ["cosmic", "gold", "bold"], related: ["futurism", "psychedelic-maximalism", "graphic-maximalism"],
    bg: "#120D1E", surface: "#1E1533", ink: "#F5EDD8", muted: "#A89BC0", accent: "#E8B33D", accent2: "#00C2A8",
    display: "Marcellus, Georgia, serif", body: "Inter, Helvetica Neue, Arial, sans-serif",
    aesthetic: "Afrofuturism is Sun Ra's space program: cosmic purples, gold-leaf geometry, mudcloth and kente pattern systems, and portraiture crowned with light. Ancient and interstellar at once — pharaoh gold meets starship chrome. Majestic, rhythmic, and unapologetically Black; every layout moves like percussion.",
    principles: ["Gold is sacred: metallic gold for headlines, rules, and crowns — never flat yellow", "Pattern is language: mudcloth, kente, and cosmic geometry as structure", "Portraiture is monument: people large, lit, and central"],
    scale: "hero 52–76px majestic serif, H2 32–42px, body 16–17px/1.6, labels 12–13px letterspaced uppercase.",
    weights: "400–700 display (presence through scale, not blackness); 400–500 body.",
    typeRules: "centered monumental heroes; left editorial flow; gold italic accents; generous letterspacing on kickers.",
    accentRule: "Gold #E8B33D for headlines accents, rules, CTAs; teal accent2 for cosmic secondary and links.",
    spacing: "8px base; cards 28–36px; sections 96–128px; pattern bands divide chapters.",
    layout: "Monumental: full-bleed portrait heroes with gold frames, pattern-band dividers, symmetric ceremonial grids; max 1200px.",
    borders: "2px gold keylines; double gold rules; pattern-strip borders (8–16px tall) on section edges.",
    shadows: "Regal glow: gold 0 0 32px rgba(232,179,61,0.3); deep 0 20px 60px rgba(0,0,0,0.5); no cheap blurs.",
    radius: "8–16px restrained; circles for portraits and medallions; arches for shrines of content.",
    buttons: "Gold filled (black text) primary, 12px radius, 52px; secondary gold-outline; hover brightens with glow.",
    cards: "Deep-purple panels with gold keylines: portrait medallion, serif title, pattern footer strip.",
    nav: "Black-purple bar with gold wordmark; links uppercase letterspaced; CTA gold pill.",
    imagery: "Regal portraiture with halos/crowns, spacecraft over savanna, gold-leaf textures, nebula skies.",
    icons: "Sun discs, ankhs, cowrie shells, stars, Adinkra-inspired geometry — gold line/fill, 20–26px.",
    textures: "Mudcloth grids, kente strips, gold leaf, starfields, Ankara-inspired repeats at low opacity.",
    motion: "Slow majestic: 400ms rises, starfield drift 12s, gold shimmer sweeps 3s, drum-beat staggered reveals.",
    durations: "300–500ms reveals; 8–14s cosmic loops.",
    avoid: ["Beige minimalism and timid grays", "Flat yellow passed off as gold (use metallic gradients)", "Tribal-clip-art stereotypes — use researched geometry", "Tiny cramped layouts for monumental content", "Separating heritage from future — fuse them"],
  },
  {
    slug: "dark-academia", name: "Dark Academia",
    desc: "Oxford libraries, oxblood leather, and candlelit scholarly romance.",
    cat: "Cultural", tags: ["moody", "serif", "literary"], related: ["editorial-minimalism", "newspaper", "fashion-editorial"],
    bg: "#1E1A16", surface: "#2A241E", ink: "#EDE6D6", muted: "#A89C86", accent: "#B08D57", accent2: "#7A1F2B",
    display: "EB Garamond, Georgia, Times New Roman, serif", body: "Georgia, Times New Roman, serif",
    aesthetic: "Dark Academia is Dead Poets Society as UI: candlelit libraries, oxblood leather, brass lamps, and Garamond set like poetry. Latin epigraphs, margin annotations, wax-seal badges. Melancholy, romantic, and erudite — knowledge as candlelight against the dark.",
    principles: ["Candlelight palette: parchment ink on near-black umber, brass and oxblood only", "Typography is literature: Garamond, italics, epigraphs, footnotes", "Texture of age: paper grain, leather, marble, oil-painting darkness"],
    scale: "chapter 40–56px Garamond, H2 28px italic options, body 17–19px/1.75, marginalia 13–14px italic.",
    weights: "400–500 body; 500–600 headings; italics carry the romance.",
    typeRules: "centered chapter openings with epigraphs; justified-ish left prose; Latin/Greek accents welcome.",
    accentRule: "Brass #B08D57 for rules, seals, CTAs; oxblood #7A1F2B for stamps, wax seals, alerts.",
    spacing: "Margins like book pages: 28–40px; sections 88–120px; footnotes tucked with hairlines.",
    layout: "Book-like single column 680–760px for prose; library-grid for collections; oil-painting full-bleed heroes.",
    borders: "1px brass (#B08D5766) keylines; double rules for chapter heads; wax-seal circular badges.",
    shadows: "Candle-soft vignettes: inset darkening at edges; cards 0 16px 40px rgba(0,0,0,0.5); no neon.",
    radius: "4–8px restrained; circles for seals and portraits; arches for windows and niches.",
    buttons: "Brass-outlined or oxblood filled, 6px radius, 48px, letterspaced serif labels; hover deepens like lamplight.",
    cards: "Leather-dark panels with brass keyline: serif title, italic excerpt, footnote meta, wax-seal badge.",
    nav: "Dark bar with serif wordmark; roman-numeral sections; search as card-catalog drawer.",
    imagery: "Oil-dark libraries, marble busts, candles, ivy quads, handwritten letters; duotone umber treatment.",
    icons: "Quills, keys, columns, laurel, seals — brass line icons 18–22px, engraved style.",
    textures: "Paper grain 6%, leather, marble veins, oil-canvas darkness, dust motes in light beams.",
    motion: "Stillness with breath: candle-flicker 3s on glows, page fades 200ms, ink-underline draws on hover.",
    durations: "150–300ms; flicker loops 2–4s subtle.",
    avoid: ["Bright daylight palettes", "Sans-serif body copy", "Neon or chrome effects", "Rounded playful blobs", "Hustle-culture copy — contemplation only"],
  },
  {
    slug: "cottagecore", name: "Cottagecore",
    desc: "Gingham warmth, wildflower palettes, and slow romantic rural craft.",
    cat: "Cultural", tags: ["rustic", "romantic", "soft"], related: ["organic-biophilic", "scrapbook", "hand-drawn"],
    bg: "#FAF6EE", surface: "#FFFFFF", ink: "#3E3A2E", muted: "#8A8171", accent: "#C26D4B", accent2: "#7A9B6D",
    display: "Cormorant Garamond, Georgia, serif", body: "Georgia, Times New Roman, serif",
    aesthetic: "Cottagecore is a slow Sunday rendered as UI: gingham and calico, pressed wildflowers, handwritten recipe cards, and terracotta warmth. Scalloped edges, stitched borders, and sunlit kitchen photography. Romantic, gentle, handmade — the internet as a farmhouse table.",
    principles: ["Handmade over manufactured: stitches, scallops, deckles, honest imperfection", "Garden palette: cream, terracotta, sage, wildflower accents", "Slow pacing: long reads, seasonal rhythms, no urgency"],
    scale: "hero 44–60px Cormorant, H2 28–34px, body 16–18px/1.7, handwritten accents 20–24px.",
    weights: "500–600 display; 400 body; script/handwriting for single accent words.",
    typeRules: "centered romantic heroes; left journal prose; italic serif for quotes and recipes.",
    accentRule: "Terracotta #C26D4B CTAs and headlines; sage #7A9B6D secondary, borders, and growth metaphors.",
    spacing: "8px base; cards 24–32px; sections 80–112px; doily/scallop dividers between chapters.",
    layout: "Journal flow: hero with arched window photo, recipe-card grids, seasonal bands; max 1080px.",
    borders: "Dashed stitch borders (2px dashed terracotta); scalloped edges via radial-gradient; 1px hairlines for letters.",
    shadows: "Sun-soft: 0 12px 32px rgba(62,58,46,0.12); pressed-flower flatness elsewhere.",
    radius: "Arches for windows/hero images; 12–20px cards; scallops and circles for stickers.",
    buttons: "Terracotta 999px or stitched rectangles, 48px; hover darkens + tiny flower sprout; secondary sage outline.",
    cards: "Recipe cards: photo top with scallop edge, serif title, time/difficulty meta, sage tag row.",
    nav: "Cream bar with serif wordmark + flower mark; links with vine-underline hover; basket CTA.",
    imagery: "Sunlit kitchens, gardens, wildflowers, linen, pottery; film-like warmth, soft grain.",
    icons: "Flower, bee, mushroom, teapot, envelope — hand-drawn 2px terracotta/sage line icons, 20–24px.",
    textures: "Gingham, calico florals, linen weave, kraft paper, pressed flowers at 8–15%.",
    motion: "Gentle: 250ms sways, petals drift 9s, bee path loops; hover blooms (scale 1.03 + shadow).",
    durations: "200–350ms UI; 8–12s ambient drifts.",
    avoid: ["Neon, chrome, or cyber anything", "Sharp brutalist geometry", "Urgency copy and countdown timers", "Sterile pure-white minimalism", "Plastic gloss and 3D renders"],
  },
  {
    slug: "gothic-victorian", name: "Gothic Victorian",
    desc: "Baroque blackletter, candlelit burgundy, and haunted high-luxury drama.",
    cat: "Historical", tags: ["dark", "ornate", "luxury"], related: ["art-nouveau", "fashion-editorial", "quiet-luxury"],
    bg: "#0F0D12", surface: "#17141C", ink: "#E8E0D0", muted: "#97889B", accent: "#8E1E2F", accent2: "#C9A227",
    display: "Cinzel Decorative, Georgia, serif", body: "EB Garamond, Georgia, serif",
    aesthetic: "Gothic Victorian is haunted luxury: blackletter initials, burgundy velvet, gold filigree, and candlelit cathedral drama. Arched windows frame content; ornamental rules divide chapters like prayer-book borders. Opulent, melancholic, theatrical — beauty with a shadow.",
    principles: ["Ornament is structure: filigree rules, arches, and frames organize the page", "Candlelit contrast: bone parchment on abyssal black-purple, gold as light", "Drama with discipline: theatrical heroes, restrained body settings"],
    scale: "hero 52–72px decorative serif, H2 30–38px, body 16–18px/1.7 Garamond, inscriptions 12–13px letterspaced.",
    weights: "400–700; blackletter/filigree for initials and seals only; body stays readable Garamond.",
    typeRules: "centered ceremonial heroes; drop-cap blackletter initials; letterspaced small-caps labels.",
    accentRule: "Burgundy #8E1E2F for velvet fills and CTAs; gold #C9A227 for filigree, rules, luxury marks.",
    spacing: "8px base; cards 28–36px; sections 96–128px; filigree divider bands between acts.",
    layout: "Cathedral symmetry: arched hero niche, nave-like centered column, side chapels (asymmetric panels) on desktop; max 1140px.",
    borders: "1px gold (#C9A22755) filigree frames; double rules; arched window frames for key imagery.",
    shadows: "Candle-depth: 0 24px 64px rgba(0,0,0,0.6); gold inner glow on seals; vignettes on heroes.",
    radius: "Arches for windows and heroes; 8–12px cards; circles for seals and lockets.",
    buttons: "Burgundy velvet (gold 1px ring) primary with serif letterspaced labels, 52px; ghost gold-outline secondary.",
    cards: "Obsidian panels with gold frames: roman-numeral chapter, serif title, Garamond excerpt, filigree footer.",
    nav: "Black bar with gold crest wordmark; links small-caps letterspaced; CTA burgundy pill.",
    imagery: "Cathedrals, candelabras, velvet, ravens, roses, moonlit architecture; chiaroscuro grading.",
    icons: "Keys, bats, roses, candlesticks, gargoyles-in-miniature — gold line/fill 18–24px, engraved feel.",
    textures: "Damask, velvet, marble, wrought iron, fog; film grain 6% for age.",
    motion: "Fog drifts 12s, candle flicker 2–3s, curtain reveals 500ms, bats cross on 404s; hover gold brightens.",
    durations: "300–600ms reveals; 8–14s haunting loops.",
    avoid: ["Bright playful pastels", "Sans-serif body copy", "Flat startup minimalism", "Cheap Halloween clip-art (keep it luxury)", "Comic horror — dread, not jokes"],
  },
];

function yamlList(arr) {
  return `[${arr.join(", ")}]`;
}

function buildFile(s) {
  return `---
slug: ${s.slug}
name: "${s.name}"
description: "${s.desc}"
category: ${s.cat}
tags: ${yamlList(s.tags)}
related: ${yamlList(s.related)}
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

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

${s.aesthetic}

**Three principles:**

- ${s.principles[0]}
- ${s.principles[1]}
- ${s.principles[2]}

## 2. Typography

- **Display:** ${s.display}
- **Body:** ${s.body}
- **Scale:** ${s.scale}
- **Weights:** ${s.weights}
- **Rules:** ${s.typeRules}

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | \`${s.bg}\` | Page ground |
| Surface | \`${s.surface}\` | Cards, panels, wells |
| Ink | \`${s.ink}\` | Headlines, body text |
| Muted | \`${s.muted}\` | Captions, meta, secondary text |
| Accent | \`${s.accent}\` | Primary actions, highlights |
| Accent 2 | \`${s.accent2}\` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. ${s.accentRule}

## 4. Spacing

${s.spacing}

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

${s.layout}

## 6. Borders

${s.borders}

## 7. Shadows

${s.shadows}

## 8. Radius

${s.radius}

## 9. Buttons

${s.buttons}

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

${s.cards}

## 11. Navigation

${s.nav}

## 12. Imagery

${s.imagery}

## 13. Icons

${s.icons}

## 14. Textures / Patterns

${s.textures}

## 15. Motion

${s.motion}

Durations: ${s.durations} Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
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

*Source: Design Styles — design styles for AI coding agents. File: \`/designs/${s.slug}/DESIGN.md\`.*
`;
}

// Specs are hand-curated after generation, so regenerating one silently reverts
// accessibility fixes (see scripts/check-contrast.mjs). Never clobber an
// existing DESIGN.md unless --force is passed explicitly.
const FORCE = process.argv.includes("--force");
let n = 0;
let skipped = 0;
for (const s of STYLES) {
  const dir = join(root, s.slug);
  const file = join(dir, "DESIGN.md");
  if (existsSync(file) && !FORCE) {
    skipped++;
    continue;
  }
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, buildFile(s), "utf8");
  n++;
}
console.log(
  `[generate-new-styles] wrote ${n} styles into ${root}` +
    (skipped ? ` (skipped ${skipped} existing — pass --force to overwrite)` : "")
);
