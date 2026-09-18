<div align="center">

# 🎨 Design Style Atlas

**140 copy-paste visual directions for AI coding agents.** Pick a style, hand its `DESIGN.md` to your agent, get coherent UI.

[![MIT](https://img.shields.io/badge/license-MIT-green)](#-license)
![Styles](https://img.shields.io/badge/styles-140-blue)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![MCP ready](https://img.shields.io/badge/MCP-ready-purple)
![Node](https://img.shields.io/badge/node-%3E%3D20.9.0-339933?logo=node.js)

🌐 Live demo — https://design-styles.dev · [📖 Browse styles](#-browse-the-140-styles) · [🤝 Contribute](CONTRIBUTING.md)

</div>

---

## ⚡ Use a style in 30 seconds

```bash
# 1. copy a style into your project
cp designs/neo-brutalism/DESIGN.md ./DESIGN.md

# 2. tell your agent (Codex, Claude Code, Cursor, Windsurf):
"Follow @DESIGN.md for all UI work."
```

Or open the site, hit **Copy DESIGN.md** on any style, and paste it straight into your agent chat.

Raw files are also served over HTTP for agents that fetch URLs:

```
https://design-styles.dev/designs/neo-brutalism/DESIGN.md
```

Browse the index: https://design-styles.dev · machine index: https://design-styles.dev/api/styles.json · agent entry: https://design-styles.dev/llms.txt

---

## 📖 Browse the 140 styles

Every name links to its agent-ready spec. Most used first (same order as the site):

1. [Corporate SaaS](designs/corporate-saas/DESIGN.md) — Trust-first software marketing: gradient heroes, logos walls and ROI proof.
2. [Minimalism](designs/minimalism/DESIGN.md) — Restrained layouts, generous whitespace and quiet typography that lets content breathe.
3. [Apple Liquid Glass](designs/apple-liquid-glass/DESIGN.md) — Translucent specular layers, floating glass bars, and fluid Apple-grade restraint.
4. [Spatial Computing](designs/spatial-computing/DESIGN.md) — Volumetric frosted glass, 3D z-depth layering, eye-tracking glow, and floating optical surfaces.
5. [Bento Grid](designs/bento-grid/DESIGN.md) — Compartmentalized delight: varied-size tiles packing features into one view.
6. [Glassmorphism](designs/glassmorphism/DESIGN.md) — Translucent blurred surfaces floating over vibrant gradient fields.
7. [Neo-Brutalism](designs/neo-brutalism/DESIGN.md) — Bold borders, hard shadows, saturated colors and deliberately raw interfaces.
8. [Brutalism](designs/brutalism/DESIGN.md) — Raw concrete honesty: system type, exposed structure and zero decoration.
9. [Aurora / Glow](designs/aurora-glow/DESIGN.md) — Northern-light interfaces: dark skies, luminous ribbons and soft radiance.
10. [Y2K](designs/y2k/DESIGN.md) — Chrome, glossy surfaces and optimistic early-2000s digital futurism.

Order follows `frontend/app/lib/popularity.json`, the same ranking the site uses. Re-rank by editing that file.

<!-- STYLES:START -->

<details>
<summary><strong>Minimal & Calm (18)</strong></summary>

- [Minimalism](designs/minimalism/DESIGN.md) — Restrained layouts, generous whitespace and quiet typography that lets content breathe.
- [Flat Design](designs/flat-design/DESIGN.md) — Bold color blocks, zero shadows, and honest two-dimensional clarity.
- [Geist Minimal](designs/geist-minimal/DESIGN.md) — Razor-thin developer minimalism with Vercel-grade restraint and mono precision.
- [Product Minimalism](designs/product-minimalism/DESIGN.md) — Linear-grade restraint: quiet chrome, one blue accent and keyboard-first density.
- [Functional Minimalism](designs/functional-minimalism/DESIGN.md) — Utilitarian clarity: system type, visible structure and zero ornament for tools.
- [Swiss Design](designs/swiss-design/DESIGN.md) — International Typographic Style — asymmetric Helvetica grid, flush-left type, single red accent.
- [Editorial Minimalism](designs/editorial-minimalism/DESIGN.md) — Quiet magazine restraint: serif headlines, rules, and footnotes over empty space.
- [Scandinavian](designs/scandinavian/DESIGN.md) — Light woods, soft neutrals and functional warmth with hygge approachability.
- [Japanese Minimalism](designs/japanese-minimalism/DESIGN.md) — Ma-inspired negative space, muted natural tones and quiet wabi-sabi restraint.
- [Monochrome](designs/monochrome/DESIGN.md) — Single-hue discipline: black, white and grays engineered into full interfaces.
- [Luxury Minimalism](designs/luxury-minimalism/DESIGN.md) — Whispered opulence: vast space, hairline gold, serif display and museum pacing.
- [Ultra-Minimalism](designs/ultra-minimalism/DESIGN.md) — Extreme reduction: tiny type, vast whitespace and almost no visible interface.
- [Japandi](designs/japandi/DESIGN.md) — Japanese-Scandi fusion: warm minimalism, low lines and crafted calm.
- [Organic / Biophilic](designs/organic-biophilic/DESIGN.md) — Nature-shaped interfaces: leaf curves, earth tones and breathing whitespace.
- [Eco / Sustainable](designs/eco-sustainable/DESIGN.md) — Planet-first design: recycled textures, impact counters and honest green.
- [Wabi-Sabi](designs/wabi-sabi/DESIGN.md) — Perfect imperfection: asymmetry, cracks and weathered beauty, honored.
- [E-Ink Paper](designs/e-ink-paper/DESIGN.md) — Warm paper grounds, book serif, and distraction-free reading calm.
- [Papercut](designs/papercut/DESIGN.md) — Dimensional physical paper craft: stacked textured cardstock silhouettes with soft cast drop shadows.

</details>

<details>
<summary><strong>Brutalist & Raw (16)</strong></summary>

- [Neo-Brutalism](designs/neo-brutalism/DESIGN.md) — Bold borders, hard shadows, saturated colors and deliberately raw interfaces.
- [Brutalism](designs/brutalism/DESIGN.md) — Raw concrete honesty: system type, exposed structure and zero decoration.
- [Minimal Brutalism](designs/minimal-brutalism/DESIGN.md) — One black frame, one idea: gallery-spare layouts with brutalist conviction.
- [Playful Brutalism](designs/playful-brutalism/DESIGN.md) — Chunky friendly shapes, candy colors and wobbling stickers with structural bite.
- [Colorful Brutalism](designs/colorful-brutalism/DESIGN.md) — Rainbow concrete: clashing primaries inside heavy black structure.
- [Corporate Brutalism](designs/corporate-brutalism/DESIGN.md) — Boardroom concrete: heavy rules, tabular data and imposing institutional grids.
- [Editorial Brutalism](designs/editorial-brutalism/DESIGN.md) — Poster-scale headlines, raw rules and ink-heavy layouts with newsroom urgency.
- [Post-Brutalism](designs/post-brutalism/DESIGN.md) — Brutalism grown up: raw grids softened with refined type and restrained color.
- [Industrial Brutalism](designs/industrial-brutalism/DESIGN.md) — Factory-floor functionalism: safety yellow, stencil type and hazard-striped order.
- [Generative / Algorithmic](designs/generative-algorithmic/DESIGN.md) — Systems-made visuals: code-drawn patterns, live parameters and data beauty.
- [Anti-Design](designs/anti-design/DESIGN.md) — Deliberate wrongness: clashing type, broken grids and hostile charm.
- [Surrealism](designs/surrealism/DESIGN.md) — Dream-logic interfaces: floating objects, impossible scale and poetic dissonance.
- [Dreamcore](designs/dreamcore/DESIGN.md) — Liminal nostalgia: familiar places, hazy memory and VHS softness.
- [Liminal / Weirdcore](designs/liminal-weirdcore/DESIGN.md) — Threshold-space unease: empty corridors, low-fi text and strange comfort.
- [Raw HTML](designs/raw-html/DESIGN.md) — Radical web honesty: Times New Roman, default blue hyperlinks, beveled gray buttons, and raw HTML tables.
- [Deconstructivism](designs/deconstructivism/DESIGN.md) — Non-orthogonal architectural tension: colliding planes, 15° diagonal cuts, fragmented grids, and raw titanium.

</details>

<details>
<summary><strong>Maximalist & Playful (18)</strong></summary>

- [Gaming UI](designs/gaming-ui/DESIGN.md) — HUD-first interfaces: health bars, quest logs and reward-loop feedback.
- [Pixel / 8-Bit](designs/pixel-8bit/DESIGN.md) — Crisp chunky pixels: sprite logic, limited palettes and arcade honesty.
- [Typography Maximalism](designs/typography-maximalism/DESIGN.md) — Type as image: wall-to-wall letterforms, kinetic headlines, zero chrome.
- [Maximalism](designs/maximalism/DESIGN.md) — More is more: layered color, pattern and ornament in joyful overload.
- [Playful Maximalism](designs/playful-maximalism/DESIGN.md) — Confetti interfaces: stickers, squiggles and candy color at full volume.
- [Color Maximalism](designs/color-maximalism/DESIGN.md) — Unapologetic saturation: full-spectrum fields, clashing grounds, dopamine UX.
- [Digital Maximalism](designs/digital-maximalism/DESIGN.md) — Internet-native excess: gradients, glass, stickers, cursors and widgets everywhere.
- [Graphic Maximalism](designs/graphic-maximalism/DESIGN.md) — Poster-wall energy: bold shapes, duotones and oversized graphics edge to edge.
- [Editorial Maximalism](designs/editorial-maximalism/DESIGN.md) — Magazine excess: colliding headlines, pull quotes and image pile-ups.
- [Luxury Maximalism](designs/luxury-maximalism/DESIGN.md) — Baroque digital opulence: gold leaf, deep velvet and jewel-box density.
- [Psychedelic Maximalism](designs/psychedelic-maximalism/DESIGN.md) — Liquid swirls, melting type and kaleidoscopic color in full trip.
- [Comic / Pop Art](designs/comic-pop-art/DESIGN.md) — Halftone heroics: bold inks, burst captions and four-color excitement.
- [Graffiti / Streetwear](designs/graffiti-streetwear/DESIGN.md) — Concrete-culture edge: tags, drips and drop-model urgency.
- [Chaos Design](designs/chaos-design/DESIGN.md) — Controlled demolition: overlapping, rotated, colliding elements that still convert.
- [Kawaii Pop](designs/kawaii-pop/DESIGN.md) — Pastel Harajuku stickers, chunky rounded type, and cute overload.
- [McBling](designs/mcbling/DESIGN.md) — Rhinestone pink luxe, celebrity glamour, and Y2K maximalist sparkle.
- [Acid Graphics](designs/acid-graphics/DESIGN.md) — Distorted liquid chrome typography, high-voltage neon lime, tribal cyber sigils, and rave adrenaline.
- [Plasticine Clay](designs/plasticine-clay/DESIGN.md) — Chunky handmade claymation: soft matte plasticine volumes, finger-pressed indentations, and warm studio depth.

</details>

<details>
<summary><strong>Editorial, Print & Type (22)</strong></summary>

- [Editorial / Magazine](designs/editorial-magazine/DESIGN.md) — Magazine-inspired layouts driven by expressive typography and imagery.
- [Typography-First](designs/typography-first/DESIGN.md) — Reading-led design: exquisite measure, scale and hierarchy over decoration.
- [Memphis](designs/memphis/DESIGN.md) — Sottsass playfulness: squiggles, terrazzo and pastel geometry with attitude.
- [Bauhaus](designs/bauhaus/DESIGN.md) — Geometric forms and primary colors composed with modernist rigor.
- [Newspaper](designs/newspaper/DESIGN.md) — Broadsheet density: columns, headlines and datelines with ink urgency.
- [Fashion Editorial](designs/fashion-editorial/DESIGN.md) — Runway restraint: towering imagery, whisper typography and gallery pacing.
- [Swiss Poster](designs/swiss-poster/DESIGN.md) — Müller-Brockmann on screen: objective grids, red/black discipline, huge numerals.
- [Poster-Inspired](designs/poster-inspired/DESIGN.md) — Single-message impact: huge type, flat color and compositions that shout.
- [Oversized Typography](designs/oversized-typography/DESIGN.md) — Scale as spectacle: viewport-filling headlines that carry whole pages.
- [Variable Fonts](designs/variable-fonts/DESIGN.md) — Living letterforms: weight, width and optical size reacting to context.
- [Illustration-Led](designs/illustration-led/DESIGN.md) — Drawn worlds first: spot illustrations, scenes and characters carrying pages.
- [Hand-Drawn](designs/hand-drawn/DESIGN.md) — Wobbly human lines: marker strokes, doodles and imperfect warmth.
- [Corporate Memphis](designs/corporate-memphis/DESIGN.md) — Flat friendly vector people: big tech's geometric humanism, polished.
- [Collage](designs/collage/DESIGN.md) — Cut-and-paste energy: torn edges, tape and layered fragments with intent.
- [Grain / Noise](designs/grain-noise/DESIGN.md) — Analog warmth over digital: film grain, texture overlays and tactile depth.
- [Halftone](designs/halftone/DESIGN.md) — Print-dot drama: comic dots, duotone pops and Ben-Day patterned depth.
- [Risograph](designs/risograph/DESIGN.md) — Soy-ink print charm: misregistered layers, grain and limited spot palettes.
- [Zine / Punk](designs/zine-punk/DESIGN.md) — Xeroxed rebellion: cut letters, harsh contrast and photocopied fury.
- [Scrapbook](designs/scrapbook/DESIGN.md) — Memory-keeping warmth: photos, tickets and handwritten notes in keepsake grids.
- [De Stijl](designs/de-stijl/DESIGN.md) — Pure geometric harmony: primary red, blue, and yellow anchored by thick black orthogonal grids.
- [Constructivism](designs/constructivism/DESIGN.md) — Revolutionary dynamic diagonals, stark cadmium red wedges, and industrial typographic power.
- [Duotone](designs/duotone/DESIGN.md) — Electric two-color posterization: high-voltage contrasting color fields with bold editorial weight.

</details>

<details>
<summary><strong>Retro, Nostalgia & Internet (12)</strong></summary>

- [Y2K](designs/y2k/DESIGN.md) — Chrome, glossy surfaces and optimistic early-2000s digital futurism.
- [Synthwave](designs/synthwave/DESIGN.md) — Night-drive neon: outrun grids, chrome suns and analog-synth glow.
- [Vaporwave](designs/vaporwave/DESIGN.md) — Hazy mall-at-dusk melancholy: washed sunset gradients, marble statues, and VHS grain.
- [Retro Internet](designs/retro-internet/DESIGN.md) — Early-web warmth: tiled backgrounds, guestbooks and dial-up sincerity.
- [Frutiger Aero](designs/frutiger-aero/DESIGN.md) — Glossy aqua bubbles, dewy nature-tech, and optimistic 2000s glass futurism.
- [90s Retro](designs/90s-retro/DESIGN.md) — Nickelodeon kid-TV 1993: boombox blocks, checkerboard and slime-squiggle energy.
- [80s Retro](designs/80s-retro/DESIGN.md) — Miami-VHS nostalgia: chrome script, palm silhouettes and sunset grids.
- [70s Retro](designs/70s-retro/DESIGN.md) — Warm analog groove: burnt orange, harvest gold and curvy mushroom type.
- [Webcore](designs/webcore/DESIGN.md) — Early-internet aesthetics using browser chrome, hyperlinks and deliberately primitive UI.
- [Cassette Futurism](designs/cassette-futurism/DESIGN.md) — Analog 1970s/80s high-tech: chunky beige chassis, amber phosphor displays, and rocker switches.
- [Game Boy DMG](designs/game-boy-dmg/DESIGN.md) — Iconic 4-shade pea-soup olive LCD matrix, dot-grid ghosting, and chunky 8-bit handheld charm.
- [Glitch Art](designs/glitch-art/DESIGN.md) — Digital signal degradation: chromatic aberration, horizontal displacement slices, scanlines, and VHS drift.

</details>

<details>
<summary><strong>Atmospheric, Soft & Immersive (19)</strong></summary>

- [Glassmorphism](designs/glassmorphism/DESIGN.md) — Translucent blurred surfaces floating over vibrant gradient fields.
- [Gradient Design](designs/gradient-design/DESIGN.md) — Color in transition: mesh washes, aurora fields and glow-led hierarchy.
- [Aurora / Glow](designs/aurora-glow/DESIGN.md) — Northern-light interfaces: dark skies, luminous ribbons and soft radiance.
- [Claymorphism](designs/claymorphism/DESIGN.md) — Puffy 3D clay: inflated pastel forms with chunky inner highlights.
- [Neumorphism](designs/neumorphism/DESIGN.md) — Soft extruded plastic: dual shadows sculpting controls from the background.
- [Skeuomorphism](designs/skeuomorphism/DESIGN.md) — Lifelike materials: leather, metal and glass rendered with loving realism.
- [Scrollytelling](designs/scrollytelling/DESIGN.md) — Narrative scroll: pinned graphics, stepped chapters and data that unfolds.
- [Immersive](designs/immersive/DESIGN.md) — Full-bleed worlds: scroll-driven scenes, sound-off cinema and total absorption.
- [3D Web Design](designs/3d-web-design/DESIGN.md) — Dimensional product storytelling: depth, lighting and spatial scenes around content.
- [Cyberpunk](designs/cyberpunk/DESIGN.md) — Neon-drenched dystopia: rain, chrome and high-tech low-life interfaces.
- [Kinetic Typography](designs/kinetic-typography/DESIGN.md) — Type in motion: words that slide, scramble and perform the message.
- [Parallax](designs/parallax/DESIGN.md) — Layered depth scrolling: foreground, midground and skies drifting apart.
- [Sci-Fi UI](designs/sci-fi-ui/DESIGN.md) — Starship consoles: holographic frames, telemetry and systematic wonder.
- [Futurism](designs/futurism/DESIGN.md) — Speed-worship modernism: diagonals, motion lines and machine-age optimism.
- [Holographic](designs/holographic/DESIGN.md) — Iridescent foil surfaces: shifting rainbows, light-streak cards and prism play.
- [Liquid Chrome](designs/liquid-chrome/DESIGN.md) — Molten metal interfaces: flowing silver, mirror reflections and Y2K luxury.
- [Solarpunk](designs/solarpunk/DESIGN.md) — Sunlit eco-futurism, leafy greens, and optimistic post-carbon abundance.
- [Bioluminescence](designs/bioluminescence/DESIGN.md) — Deep midnight abyss illuminated by ethereal glowing jellyfish cyan, marine violet, and fluid light.
- [Analog Hi-Fi](designs/analog-hifi/DESIGN.md) — Brushed anodized aluminum faceplates, warm amber backlit VU needle meters, and knurled knobs.

</details>

<details>
<summary><strong>Heritage, Culture & Craft (11)</strong></summary>

- [Quiet Luxury](designs/quiet-luxury/DESIGN.md) — Restrained serif typography and whitespace for understated wealth.
- [Art Deco](designs/art-deco/DESIGN.md) — Geometric luxury ornament: gold fans, sunbursts and Gatsby-era glamour.
- [Mid-Century Modern](designs/mid-century-modern/DESIGN.md) — Eames-era optimism: starbursts, tapered lines and warm atomic geometry.
- [Art Nouveau](designs/art-nouveau/DESIGN.md) — Flowing botanical ornament: whiplash curves, stained glass and Mucha grace.
- [Afrofuturism](designs/afrofuturism/DESIGN.md) — Cosmic gold, ancestral pattern, and interstellar Black imagination.
- [Dark Academia](designs/dark-academia/DESIGN.md) — Oxford libraries, oxblood leather, and candlelit scholarly romance.
- [Cottagecore](designs/cottagecore/DESIGN.md) — Gingham warmth, wildflower palettes, and slow romantic rural craft.
- [Gothic Victorian](designs/gothic-victorian/DESIGN.md) — Baroque blackletter, candlelit burgundy, and haunted high-luxury drama.
- [Heritage Classic](designs/heritage-classic/DESIGN.md) — Savile Row distinction: British racing green, gold foil serif crests, warm parchment, and quiet pedigree.
- [Steampunk](designs/steampunk/DESIGN.md) — Victorian brass clockwork, interlocking bronze gears, riveted copper seams, and aged mahogany.
- [Botanical Herbarium](designs/botanical-herbarium/DESIGN.md) — 19th-century naturalist archives: pressed floral specimens, Latin taxonomy italics, tea-stained parchment, and ink rules.

</details>

<details>
<summary><strong>Product, Systems & OS (24)</strong></summary>

- [Corporate SaaS](designs/corporate-saas/DESIGN.md) — Trust-first software marketing: gradient heroes, logos walls and ROI proof.
- [Stripe-Inspired](designs/stripe-inspired/DESIGN.md) — Gradient precision: airy pastels, developer clarity and weight-300 elegance.
- [Linear-Inspired](designs/linear-inspired/DESIGN.md) — Ultra-minimal precision: dark restraint, purple glow and keyboard-first craft.
- [Notion-Inspired](designs/notion-inspired/DESIGN.md) — Warm minimal workspace: serif warmth, soft blocks and template friendliness.
- [Material Expressive](designs/material-expressive/DESIGN.md) — Springy rounded shapes, bold tonal color, and playful Google-grade motion.
- [Fluent Design](designs/fluent-design/DESIGN.md) — Acrylic depth, soft light, and calm Microsoft-grade enterprise clarity.
- [Bento Grid](designs/bento-grid/DESIGN.md) — Compartmentalized delight: varied-size tiles packing features into one view.
- [Card-Based UI](designs/card-based-ui/DESIGN.md) — Contained modularity: bordered content units in browsable grids and feeds.
- [Apple Liquid Glass](designs/apple-liquid-glass/DESIGN.md) — Translucent specular layers, floating glass bars, and fluid Apple-grade restraint.
- [Neobank Fintech](designs/fintech-neobank/DESIGN.md) — Dark money dashboards, lime-on-black balances, and Revolut-grade premium edge.
- [Conversational AI](designs/ai-conversational/DESIGN.md) — Chat-first bubbles, streaming answers, and calm Claude-grade intelligence.
- [Carbon Enterprise](designs/carbon-enterprise/DESIGN.md) — Dense data tables, strict IBM-grade grids, and no-nonsense enterprise precision.
- [Polaris Commerce](designs/polaris-commerce/DESIGN.md) — Trust-building product grids, honest pricing, and Shopify-grade checkout polish.
- [Terminal](designs/terminal/DESIGN.md) — Monospace truth: prompts, carets and green-on-black developer honesty.
- [Hacker Aesthetic](designs/hacker-aesthetic/DESIGN.md) — Matrix-green paranoia: data rain, glitch type and security-theater chrome.
- [Mac OS](designs/mac-os/DESIGN.md) — Classic Mac warmth: pinstripes, platinum and friendly Aqua geometry.
- [Windows 95](designs/windows-95/DESIGN.md) — Gray-beveled perfection: title bars, taskbars and start-menu logic.
- [Desktop UI](designs/desktop-ui/DESIGN.md) — Windowed nostalgia: draggable-feeling panels, menus and desktop metaphors.
- [Web3 Crypto](designs/web3-crypto/DESIGN.md) — Wallet-first glassy dark surfaces with gradient balances and exchange-grade glow.
- [Dataviz Terminal](designs/dataviz-terminal/DESIGN.md) — Bloomberg-grade dense tables, sparklines, and monospace market precision.
- [Raycast Inspired](designs/raycast-inspired/DESIGN.md) — Hyper-fast obsidian command surfaces, glowing ruby hotkeys, and keyboard-first precision.
- [Spatial Computing](designs/spatial-computing/DESIGN.md) — Volumetric frosted glass, 3D z-depth layering, eye-tracking glow, and floating optical surfaces.
- [Blueprint](designs/blueprint/DESIGN.md) — Architectural cyanotype precision: crisp white drafting schematics on deep Prussian blue grids.
- [Racing Telemetry](designs/racing-telemetry/DESIGN.md) — High-g cockpit telemetry: carbon fiber weave, digital tachometer rev-counter redline, and lap split telemetry.

</details>

<!-- STYLES:END -->

---

## ✨ What each style gives your agent

Every [`DESIGN.md`](designs/neo-brutalism/DESIGN.md) covers 20 sections with concrete values (hex, px, durations) — no guessing:

- **Look:** aesthetic, typography, colors, spacing, layout, borders, shadows, radius
- **Pieces:** buttons, cards, navigation, imagery, icons, textures
- **Behavior:** motion, interactions, responsive, accessibility, what to avoid, quick-start CSS snippet

Frontmatter carries the machine-readable contract (`slug`, `category`, `tags`, `related`, `preview` palette).

---

## 🛠️ Remix, compare, export

- **Vibe filters** (dark/light, saturated/muted, serif/sans/mono) + `⤨ Shuffle`, `/` focuses search, `←/→` walks pages
- **Compare any two:** `+ vs` on cards → `/compare?compare=neo-brutalism,swiss-design` (shareable URL)
- **Playground per style:** Tokens editor, Mix slider (blend two styles), Export (CSS vars / Tailwind / slim prompt / `REMIX-DESIGN.md`)

---

## 🤖 Agent API (static JSON, no server)

| Endpoint | Returns |
|---|---|
| `GET /api/styles.json` | Index of all styles (meta, vibes, urls) |
| `GET /api/<slug>.json` | One style: `slim` (<1500 tokens), `full` spec, `tokens`, `vibes`, `urls` |
| `GET /api/<slug>.contract.json` | Machine token contract (palette, fonts, radius, shadows, borders) — the audit target |
| `GET /llms.txt` | Agent entry point listing every style + format |

Each style page has **Copy as** buttons: Full / Slim / Tailwind / CSS vars / JSON.

MCP server (`mcp/server.mjs`, zero deps, stdio) exposes `list_styles`, `get_style`, `match_vibe`, `get_contract` plus the `verify_style` prompt:

```json
{ "mcpServers": { "design-styles": { "command": "node", "args": ["/path/to/design-style-atlas/mcp/server.mjs"] } } }
```

---

## 🚨 Enforce a style (agents drift, contracts don't)

Handing an agent a DESIGN.md is a suggestion. The audit CLI makes it a contract:

1. **Declare** the style at your repo root — `DESIGN.lock` (also read from `.well-known/design-style.json`):

   ```json
   { "style": "neo-brutalism", "version": "1.0.0" }
   ```

2. **Audit** the codebase against the style's token contract:

   ```bash
   node /path/to/design-style-atlas/cli/audit.mjs .            # report only
   node /path/to/design-style-atlas/cli/audit.mjs . --ci       # exit 1 on violations
   ```

   Checks: off-palette hex/rgb colors, foreign primary fonts, border-radius outside the style's range, blurred shadows on hard-shadow styles, hairline borders on thick-border styles. Flags `--style <slug>` skip the lockfile.

3. **Verify in the loop** — agents can self-check before declaring done via the MCP `verify_style` prompt and `get_contract` tool.

Contracts are generated per style from the DESIGN.md body (`frontend/scripts/build-api.mjs`); `null` fields mean "not checkable" and those checks are skipped. Run `npm run test:cli` for the audit smoke tests.

---

## 💻 Local dev (about 5 min first run)

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → frontend/out (all pages + raw files)
npm run start      # serve the built frontend/out export
npm run mcp        # stdio MCP server
```

Requires Node 20.9 or newer (Next.js 16 requires `>=20.9.0`).

<details>
<summary><strong>Repo structure</strong></summary>

```text
/
├── designs/                  ← source of truth (one folder per style)
│   ├── neo-brutalism/
│   │   └── DESIGN.md         ← frontmatter + 20-section agent spec
│   └── ...119 more
├── frontend/                 ← Next.js + TS + Tailwind site (static export)
│   ├── app/
│   │   ├── page.tsx          ← hero + catalog + search
│   │   ├── compare/          ← side-by-side 2-up (?compare=a,b)
│   │   ├── styles/[slug]/    ← detail: specimen, tokens, rendered md, actions
│   │   ├── components/previews/  ← HTML/CSS specimens (generated from DESIGN.md)
│   │   └── lib/styles.ts     ← fs index over ../designs (no duplicated content)
│   └── scripts/              ← generators (style-definitions, api) + validate
├── mcp/                      ← stdio MCP server (zero deps, reads public/api)
├── cli/                      ← audit CLI (zero deps) + fixture tests
├── README.md
└── CONTRIBUTING.md
```

`app/lib/styles.ts` reads `../designs` at build time; `next.config.ts` copies raw files into `public/designs/` so `/designs/<slug>/DESIGN.md` works live.

</details>

---

## 🤝 Contribute a style (about 30 min)

1. Create `designs/<your-slug>/DESIGN.md` from [`designs/neo-brutalism/DESIGN.md`](designs/neo-brutalism/DESIGN.md) (keep all 20 sections, concrete values only)
2. Add the preview specimen per [`CONTRIBUTING.md`](CONTRIBUTING.md)
3. Run `npx tsc --noEmit && npm run build`, open a PR — the catalog markers above regenerate from frontmatter

Slug notes: `generative-algorithmic` shortens "Generative/Algorithmic Design"; `pixel-8bit` shortens "Pixel/8-Bit". Both canonical.

---

## 📄 License

MIT — use the styles in anything, attribute if you're kind. If this saves you a prompt, give it a ⭐.
