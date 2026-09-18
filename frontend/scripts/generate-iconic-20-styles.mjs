// Generates the 20 iconic / famous / premium DESIGN.md files (the 120 -> 140 batch).
// Run: node scripts/generate-iconic-20-styles.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "designs");

const STYLES = [
  {
    slug: "raycast-inspired",
    name: "Raycast Inspired",
    desc: "Hyper-fast obsidian command surfaces, glowing ruby hotkeys, and keyboard-first precision.",
    cat: "Product & SaaS",
    tags: ["developer", "command-bar", "dark-mode", "hotkeys"],
    related: ["linear-inspired", "geist-minimal", "terminal"],
    bg: "#0B0D0E", surface: "#16191B", ink: "#EDEDED", muted: "#8B949E", accent: "#FF6363", accent2: "#FF9F43",
    display: "Inter, SF Pro Display, -apple-system, sans-serif",
    body: "Inter, SF Pro Text, -apple-system, sans-serif",
    aesthetic: "Raycast Inspired is the benchmark for modern power-user tools: an ultra-fast dark launcher interface where every action is a keystroke away. Deep obsidian backgrounds are framed by subtle metallic hairlines and electrified by coral-ruby neon glows. Compact command lists, dense hotkey badges, and zero-latency feedback make complex computing feel instant and weightless.",
    principles: [
      "Speed is the feature: instant list filtering, zero visual bloat, 0ms lag perception",
      "Keyboard-first clarity: hotkeys and action bars take prominence over pointer targets",
      "Obsidian with vivid punch: ultra-deep dark ground ignited by focused ruby/coral accents"
    ],
    scale: "hero 36–48px semibold tight (-0.02em), command input 18–22px, list items 13–14px, hotkey badges 11px mono.",
    weights: "display 600–700; body 400–500; hotkeys 500–600 monospace.",
    typeRules: "left-aligned command lists; right-aligned accessory text and shortcut badges; strict tabular figures for numbers.",
    accentRule: "Accent #FF6363 is reserved for active selection glows, primary actions, and destructive indicators.",
    spacing: "4px base grid; compact list rows 36–42px tall; command window max-width 720px; 12–16px inner padding.",
    layout: "Floating centered spotlight modal or fixed launcher shell; top search bar with pill category filter; scrollable dense action list; bottom status shortcut bar.",
    borders: "1px #FFFFFF14 subtle metallic keylines on surfaces; 1px #FF636366 active selection border with inner glow.",
    shadows: "Deep launcher elevation: 0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08); focused selection 0 0 20px #FF636333.",
    radius: "12–16px window modal; 6–8px list item highlights; 4px keyboard shortcut badges.",
    buttons: "Compact 28–32px pill or rounded rects; secondary #21262D with 1px border; primary ruby filled with white text; hotkey hints embedded.",
    cards: "Dark matte obsidian tiles (#16191B); hairline separators; active state receives glowing border and subtle 2% brightness boost.",
    nav: "Top pill filter breadcrumb inside search bar; bottom floating action bar with ↵ Open, ⌘K Actions, ⇥ Details.",
    imagery: "Vector monochrome icons, high-contrast product screenshots, dark-mode SVG telemetry graphs.",
    icons: "Crisp 14–16px vector glyphs; monochromatic muted gray; active item icons take accent color.",
    textures: "None printed — pure digital precision with subtle 1px grid guides and focused radial glow behind modals.",
    motion: "Snappy 100–150ms ease-out transitions; instant keyboard navigation with 0ms delay; smooth spring list expansion.",
    durations: "80–150ms micro-interactions; zero slow transitions.",
    avoid: [
      "Slow, floaty page transitions that impede keyboard speed",
      "Overly large, airy marketing margins inside product views",
      "Light-mode surfaces with poor contrast",
      "Hiding keyboard shortcuts behind nested dropdowns",
      "Cluttered multi-colored gradients across backgrounds"
    ]
  },
  {
    slug: "cassette-futurism",
    name: "Cassette Futurism",
    desc: "Analog 1970s/80s high-tech: chunky beige chassis, amber phosphor displays, and rocker switches.",
    cat: "Future & Sci-Fi",
    tags: ["analog", "retro-future", "tactile", "hardware"],
    related: ["cyberpunk", "70s-retro", "industrial-brutalism"],
    bg: "#E4DCBE", surface: "#D6CEAF", ink: "#1A1A18", muted: "#686355", accent: "#E05A2B", accent2: "#3C887E",
    display: "DIN Alternate, Space Mono, monospace",
    body: "IBM Plex Sans, Helvetica Neue, sans-serif",
    aesthetic: "Cassette Futurism is the retro-engineered future that never arrived: the world of Alien's Nostromo, 2001: A Space Odyssey, and Apollo-era mission control. Heavy almond-beige injection-molded plastics, glowing amber/green phosphor CRT displays, mechanical toggle switches, magnetic tape counters, and DIN industrial lettering convey rugged engineering durability.",
    principles: [
      "Tactile physical hardware: chunky bezels, raised plastic seams, recessed switch bays",
      "Cathode ray glow: amber or green phosphor readouts over deep scanline dark wells",
      "Functional utilitarian typography: DIN and monospace telemetry over decorative lettering"
    ],
    scale: "hero 32–44px DIN bold, display readout 18–24px mono, body 14–15px, telemetry labels 11–12px uppercase.",
    weights: "display 700; body 500; readouts 600 monospace.",
    typeRules: "uppercase tracked labels (+0.08em); left-aligned spec sheets; monospace numerical readouts with leading zeroes.",
    accentRule: "Safety orange (#E05A2B) for warnings and active breakers; teal (#3C887E) for status indicators.",
    spacing: "8px base; chunky 16–24px panel borders; recessed display wells with 12px padding; sections separated by stamped grooves.",
    layout: "Modular rack-mount layout; top telemetry readout bay; central control console with toggle matrices; side tape/drive status bay.",
    borders: "2px solid #544F43 outer panel borders; 1px inset groove shadows simulating molded plastic seams; double borders on CRT screens.",
    shadows: "Hard mechanical bevels: inset 2px 2px 0px #FFFFFF66, inset -2px -2px 0px #00000044; amber CRT glow 0 0 16px #FFB00044.",
    radius: "6–10px rounded exterior chassis corners; 2–4px for buttons and displays; sharp 0px for interior meter grids.",
    buttons: "Chunky mechanical keycaps; raised 3D bevels with travel state (:active translates down 2px); physical rocker switch components.",
    cards: "Recessed instrument bays with darker surface fill (#C4BC9E); stamped label plates; screw rivets in corners.",
    nav: "Rotary dial frequency selector or push-button rack-mount navigation with illuminated green status LEDs.",
    imagery: "Vector wireframe 3D schematics, monochrome green/amber vector plots, tape spool diagrams, technical cross-sections.",
    icons: "Industrial equipment symbols: power toggles, tape spools, waveform diagrams, safety hazard triangles.",
    textures: "Subtle matte plastic grain, CRT horizontal scanlines (2px repeat), phosphor noise overlay.",
    motion: "Simulated analog latency: 200ms mechanical click snaps; CRT power-on line flare; needle bounce on gauges.",
    durations: "150–250ms with step easing or mechanical recoil.",
    avoid: [
      "Ultra-thin glassy modern lines or floating pastel blur",
      "Sleek smartphone touch gestures where mechanical switches belong",
      "High-gloss pure white backgrounds",
      "Generic modern serif typography",
      "Frictionless instant fades without mechanical tactility"
    ]
  },
  {
    slug: "spatial-computing",
    name: "Spatial Computing",
    desc: "Volumetric frosted glass, 3D z-depth layering, eye-tracking glow, and floating optical surfaces.",
    cat: "Design System",
    tags: ["vision-os", "glass", "spatial", "3d-ui"],
    related: ["apple-liquid-glass", "glassmorphism", "3d-web-design"],
    bg: "#0B0E14", surface: "#1C2331", ink: "#F8FAFC", muted: "#94A3B8", accent: "#38BDF8", accent2: "#818CF8",
    display: "SF Pro Display, Inter, system-ui, sans-serif",
    body: "SF Pro Text, Inter, system-ui, sans-serif",
    aesthetic: "Spatial Computing brings interfaces into physical space: thick refractive glass panels floating in z-depth, illuminated by real-time ambient lighting. Circular app orbs, gaze-activated edge glows, and depth-tested specular reflections make digital surfaces feel tangible yet weightless, existing in room-scale harmony with the environment.",
    principles: [
      "Volumetric depth: surfaces float in 3D layers (z-axis separation 12–32px) with parallax",
      "Dynamic specular optics: light bends around rounded glass rims as the user moves",
      "Gaze and gesture cues: hover expands subtle concentric luminescence around targets"
    ],
    scale: "hero 48–64px bold, H2 32–40px, H3 20–24px, body 16px/1.5, floating labels 12–13px.",
    weights: "display 600–700; body 400–500; titles never heavy black — optical clarity over density.",
    typeRules: "centered spatial headlines; left-aligned panel text; generous letter-spacing on subheadings.",
    accentRule: "Cyan-blue (#38BDF8) indicates focus and active gaze; soft violet (#818CF8) for ambient dimensional backdrops.",
    spacing: "8px base; floating panel padding 24–36px; gap between spatial sheets 20–32px; ample negative space.",
    layout: "Freeform floating window panels over immersive environment; circular orb dock pinned to lower spatial anchor; multi-window canvas.",
    borders: "1px translucent specular keyline: border 1px solid rgba(255,255,255,0.22); top edge highlight rgba(255,255,255,0.5).",
    shadows: "Deep volumetric drop shadows: 0 20px 50px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4); gaze hover glow 0 0 28px rgba(56,189,248,0.35).",
    radius: "28–36px floating windows; pills (9999px) for buttons and dock bars; perfect circular 56px app icon orbs.",
    buttons: "Translucent frosted pills; backdrop-blur 30px; hover triggers specular shimmer and slight scale (1.04); active press creates depth compression.",
    cards: "Volumetric glass tiles with dual-layer backdrop filter (blur 32px, saturate 180%); subtle refraction bevels.",
    nav: "Floating spatial dock with circular orb icons; pinned close/back controls floating 16px outside the primary window.",
    imagery: "Spatial 3D stereoscopic photography, immersive panoramic wallpapers, floating rounded media tiles.",
    icons: "Smooth rounded SF-style glyphs, enclosed in translucent frosted circular badges.",
    textures: "Subtle specular refractive gradients; zero coarse printed grain; ambient light-field reactive highlights.",
    motion: "Fluid physics springs: stiffness 240, damping 26; floating windows have gentle ambient idle hover (2px floating oscillation).",
    durations: "200–400ms smooth spring curves; no linear mechanical jumps.",
    avoid: [
      "Flat opaque dark rectangles with zero optical blur",
      "Sharp 0px corners that break the optical lens metaphor",
      "High-contrast harsh borders without specular translucency",
      "Static 2D layouts that ignore depth and perspective",
      "Cluttered text-heavy layouts without spatial breathing room"
    ]
  },
  {
    slug: "de-stijl",
    name: "De Stijl",
    desc: "Pure geometric harmony: primary red, blue, and yellow anchored by thick black orthogonal grids.",
    cat: "Editorial & Print",
    tags: ["mondrian", "primary-colors", "geometric", "art-movement"],
    related: ["bauhaus", "swiss-design", "poster-inspired"],
    bg: "#F7F7F7", surface: "#FFFFFF", ink: "#111111", muted: "#777777", accent: "#E52521", accent2: "#0045A5",
    display: "Futura, Trebuchet MS, sans-serif",
    body: "Helvetica Neue, Arial, sans-serif",
    aesthetic: "De Stijl (The Style), pioneered by Piet Mondrian and Gerrit Rietveld in 1917, is the ultimate celebration of pure abstraction: rigid orthogonal black structural grids (4–8px), asymmetrical balance, and rectangular fields of pure primary colors (cadmium red, cobalt blue, yellow) against crisp white and light gray negative space.",
    principles: [
      "Orthogonal law: only strict horizontal and vertical lines; zero diagonals or curves",
      "Primary purity: color is restricted to pure red, blue, yellow, black, white, and gray",
      "Dynamic equilibrium: asymmetric rectangular proportions achieve perfect visual balance"
    ],
    scale: "hero 48–72px Futura bold uppercase, H2 28–36px, body 15–16px, labels 12px mono or caps.",
    weights: "display 700; body 400–500; structural headlines 700.",
    typeRules: "flush-left or justified block typography; strict adherence to grid intersections; uppercase display headings.",
    accentRule: "Cadmium Red (#E52521) for the dominant focal block; Cobalt Blue (#0045A5) and Yellow (#FED100) for counterbalance.",
    spacing: "8px base; heavy black gutters 4–8px wide; rectangular modules scaled in mathematical proportions (1:1, 1:2, 2:3).",
    layout: "Mondrian grid: 6–12 column asymmetric grid partitioned by continuous thick black border rules; content lives inside bounded color/white cells.",
    borders: "Heavy solid black lines: 4px to 8px solid #111111 between all layout blocks; no rounded corners anywhere.",
    shadows: "None — strictly flat 2D plane; zero elevation or ambient shading.",
    radius: "0px absolute — all corners are razor-sharp 90-degree right angles.",
    buttons: "Solid rectangular blocks with 4px black borders; hover shifts fill between white, red, and yellow with zero transition delay.",
    cards: "Bounded grid cells; solid white, pale gray (#EAEAEA), or primary color fills; headline locked to top-left grid intersection.",
    nav: "Top grid strip partitioned into black-bordered rectangular tabs; active tab filled with primary red or yellow.",
    imagery: "Strictly non-representational: architectural black-and-white photos or pure geometric compositions.",
    icons: "Minimal geometric icons constructed from right angles and lines; square bullets.",
    textures: "None — smooth flat matte surfaces; clean offset paper white.",
    motion: "Instantaneous or mechanical sliding along orthogonal axes; no rotation, no easing bounce, no diagonals.",
    durations: "100–180ms linear or step transitions.",
    avoid: [
      "Any curves, circles, rounded corners, or organic forms",
      "Secondary or tertiary colors (purple, green, orange, teal)",
      "Drop shadows, gradients, or 3D skeuomorphic lighting",
      "Diagonal lines or angled layouts",
      "Soft pastel washes or low-contrast borders"
    ]
  },
  {
    slug: "constructivism",
    name: "Constructivism",
    desc: "Revolutionary dynamic diagonals, stark cadmium red wedges, and industrial typographic power.",
    cat: "Editorial & Print",
    tags: ["avant-garde", "diagonal", "bold", "propaganda-poster"],
    related: ["bauhaus", "editorial-brutalism", "zine-punk"],
    bg: "#F0EADE", surface: "#E2DAC9", ink: "#121212", muted: "#6B655B", accent: "#D32F2F", accent2: "#1A1A1A",
    display: "Impact, Anton, Arial Black, sans-serif",
    body: "Arial, Helvetica, sans-serif",
    aesthetic: "Constructivism channels the raw momentum of the 1920s avant-garde (El Lissitzky, Rodchenko): dynamic 15° to 45° diagonal axes, forceful geometric wedges, stark dual-tone printing (cadmium red and pitch black), heavy industrial typography, and dramatic photomontage that treats the webpage as a visual manifesto.",
    principles: [
      "Dynamic diagonal energy: layouts tilt and thrust along 15°–45° action lines",
      "Cadmium red and pitch black: stark two-color poster palette over unbleached newsprint",
      "Typography as visual weapon: giant sans-serif characters integrated into geometric wedges"
    ],
    scale: "manifesto hero 54–84px condensed uppercase, H2 32–44px, body 14–16px, slogan callouts 20–24px bold.",
    weights: "display 800–900; body 600; extreme weight contrast.",
    typeRules: "slanted typography (transform: rotate(-3deg) to rotate(-15deg)); justified blocks; all-caps slogans with black exclamation accents.",
    accentRule: "Cadmium Red (#D32F2F) used for directional arrows, giant circle backgrounds, and banner bars.",
    spacing: "8px base; asymmetric dynamic margins; overlapping elements with tight negative margins; full-bleed diagonal banners.",
    layout: "Diagonal split grid; triangular geometric wedges; overlapping planes with photomontage cutouts; bold vertical and angled text columns.",
    borders: "Thick 3–6px solid black rules; diagonal slash dividers; heavy rectangular brackets.",
    shadows: "Flat solid offset shadows (4px 4px 0px #121212); zero blurred ambient drops.",
    radius: "0px absolute — razor-sharp geometric cuts, wedges, and rectangles.",
    buttons: "Solid red or black rectangular blocks; heavy 3px black border; hover inverts colors with stark punch; active state steps 3px down-right.",
    cards: "Newsprint surface tiles with thick black borders; red corner flags; bold numbered indices (01, 02, 03) in giant condensed numerals.",
    nav: "Angled header band with bold condensed nav links; active link encased in a red rectangular badge.",
    imagery: "High-contrast black-and-white duotone cutouts, industrial machinery, architectural angles, geometric ray bursts.",
    icons: "Heavy geometric arrows, lightning bolts, exclamation triangles, bold solid circles and stars.",
    textures: "Newsprint/kraft paper grain, coarse lithographic halftone dots, letterpress ink bleed.",
    motion: "Rapid forceful thrusts: elements slide in along diagonal paths with punchy snap; stamp-down entrance effects.",
    durations: "120–200ms snappy ease-out or step-end.",
    avoid: [
      "Soft pastel palettes or gentle gradients",
      "Rounded friendly pill shapes",
      "Delicate serif fonts or script lettering",
      "Centering content in peaceful symmetrical balance",
      "Gentle slow floating animations"
    ]
  },
  {
    slug: "blueprint",
    name: "Blueprint",
    desc: "Architectural cyanotype precision: crisp white drafting schematics on deep Prussian blue grids.",
    cat: "Data",
    tags: ["technical", "cad", "schematic", "grid", "engineering"],
    related: ["dataviz-terminal", "terminal", "carbon-enterprise"],
    bg: "#0A2540", surface: "#0F3356", ink: "#FFFFFF", muted: "#7FA8CC", accent: "#00E5FF", accent2: "#64FFDA",
    display: "Space Mono, Courier New, monospace",
    body: "Courier Prime, JetBrains Mono, monospace",
    aesthetic: "Blueprint is the timeless visual language of architectural drafts and engineering cyanotypes. Deep Prussian blue paper is etched with razor-sharp white and cyan millimeter grid lines, dimension arrows, drafting compass radii, coordinate callouts, and official drawing title blocks that exude structural authority.",
    principles: [
      "Drafting precision: every element is measured, annotated, and pinned to the millimeter grid",
      "Prussian blue ground: deep cyanotype blue background with crisp white and cyan vector lines",
      "Architectural typography: monospaced technical lettering with coordinates and spec callouts"
    ],
    scale: "sheet title 28–38px mono, drawing labels 16–20px uppercase, body 13–14px, dimension coordinates 10–11px.",
    weights: "display 600–700; body 400; numbers and labels 500 mono.",
    typeRules: "all-caps for titles and callouts (+0.06em tracking); technical decimal coordinate annotations (e.g., X: 420.00 Y: 180.50).",
    accentRule: "Electric Cyan (#00E5FF) for active dimension callouts, crosshairs, and primary drawing markers.",
    spacing: "10px/20px drafting grid; title block pinned to bottom-right corner; 24px margins with coordinate tick marks.",
    layout: "Drafting board canvas: outer border with numerical/alphabetical border grid (A–H, 1–8); main schematic viewport; bottom-right engineering revision stamp.",
    borders: "1px crisp solid white and cyan drafting lines; double 2px outer sheet border; dotted and dashed centerlines.",
    shadows: "None — blueprints are flat ink-on-paper prints; subtle 0 0 12px #00E5FF33 glow on active vector selections.",
    radius: "0px absolute — strict engineering right angles.",
    buttons: "Outlined drafting boxes with 1px cyan border; technical crosshairs at corners; hover fills with #00E5FF22 wash.",
    cards: "Schematic sub-drawing frames; title block in upper-left corner; dimension lines with arrows along container bounds.",
    nav: "Top coordinate toolbar with sheet numbers (DWG NO: 001/014, SCALE: 1:1, REV: B); monospace tab labels.",
    imagery: "Vector CAD line drawings, isometric wireframe building blocks, orthographic projection diagrams.",
    icons: "Drafting symbols: compass arcs, section arrows, centerlines, plumb bobs, dimension markers.",
    textures: "Subtle cyanotype paper grain; dual millimeter grid (10px minor white lines at 8% opacity, 50px major lines at 18%).",
    motion: "Draw-in vector stroke animations: SVG stroke-dasharray reveal; crosshair cursor tracking.",
    durations: "150–300ms precise mechanical transitions.",
    avoid: [
      "Warm earthy colors or commercial SaaS purple gradients",
      "Organic rounded blobs or soft diffuse shadows",
      "Decorative serif typefaces",
      "Messy asymmetric alignment that breaks grid registration",
      "Opaque cards that obscure the underlying drafting grid"
    ]
  },
  {
    slug: "acid-graphics",
    name: "Acid Graphics",
    desc: "Distorted liquid chrome typography, high-voltage neon lime, tribal cyber sigils, and rave adrenaline.",
    cat: "Neon & Play",
    tags: ["chrometype", "rave", "acid", "cyber-tribal", "subculture"],
    related: ["liquid-chrome", "y2k", "cyberpunk"],
    bg: "#08080A", surface: "#141419", ink: "#FFFFFF", muted: "#8E8E9F", accent: "#B6FF00", accent2: "#FF0055",
    display: "Syne, Impact, -apple-system, sans-serif",
    body: "Space Grotesk, Inter, sans-serif",
    aesthetic: "Acid Graphics captures the subversive energy of underground rave culture, chrome tribalism, and contemporary anti-aesthetic street design. Pitch-black voids collide with electric fluorescent lime (#B6FF00) and laser magenta (#FF0055), distorted melting chrometype typography, barbed cyber sigils, and high-octane visual adrenaline.",
    principles: [
      "Subversive hyper-contrast: radioactive neon lime and hot pink against impenetrable obsidian",
      "Liquid chrometype and tribal warp: typography that stretches, melts, and flows like molten metal",
      "Raw rave energy: dense sticker-bombing, barbed wire accents, and heavy optical impact"
    ],
    scale: "hero 56–96px distorted display, H2 32–48px, body 14–16px, rave badges 11–12px mono.",
    weights: "display 800–900; body 500; extreme weight polarization.",
    typeRules: "condensed, stretched, or warped display fonts; uppercase shout headings; high-contrast monospace microcopy.",
    accentRule: "Radioactive Lime (#B6FF00) dominates as the core voltage spark; Hot Magenta (#FF0055) handles secondary accents.",
    spacing: "8px base; intentional claustrophobic density; overlapping elements with z-index stacking.",
    layout: "Multi-layered rave flyer composition: floating cyber sigils; diagonal banner strips; dense sticker badges; asymmetric content columns.",
    borders: "1.5px solid neon lime (#B6FF00); serrated or spiked border trims; double high-contrast rules.",
    shadows: "High-intensity neon edge glows: 0 0 20px #B6FF0088, 0 0 40px #B6FF0033; metallic chrome specular gleams.",
    radius: "0px to 4px for brutal edges; pills (9999px) for glowing neon pill badges; cyber-shield angled bevels.",
    buttons: "Fluorescent acid lime filled buttons with pitch-black text; metallic hover shine; cyber-barbed border frames.",
    cards: "Dark void tiles (#141419) framed with radioactive neon borders; chrome emblem badges; holographic gradient headers.",
    nav: "Top ticker marquee bar with scrolling acid text; floating cyber-badge navigation icons.",
    imagery: "Liquid 3D chrome metallic blobs, distorted rave photography, iridescent chromatic aberration, 3D spiked cyber sigils.",
    icons: "Tribal barbwire motifs, four-point chrome stars, distorted smileys, biohazard and laser caution glyphs.",
    textures: "Subtle digital CRT scanlines, metallic noise, iridescent gradient sheens.",
    motion: "Hyper-kinetic micro-interactions: rapid strobe hover pulses, liquid distortion wave filters, glitch jitter on click.",
    durations: "80–180ms rapid pulses; high-energy spring recoil.",
    avoid: [
      "Calm corporate pastel tones (soft lavender, baby blue)",
      "Polite corporate-safe symmetry and wide calm margins",
      "Traditional academic serif typography",
      "Muted, low-contrast washed out grays",
      "Slow, polite, sleepy fade transitions"
    ]
  },
  {
    slug: "steampunk",
    name: "Steampunk",
    desc: "Victorian brass clockwork, interlocking bronze gears, riveted copper seams, and aged mahogany.",
    cat: "Future & Sci-Fi",
    tags: ["victorian", "clockwork", "brass", "gears", "industrial"],
    related: ["dark-academia", "gothic-victorian", "skeuomorphism"],
    bg: "#1C1510", surface: "#2A2018", ink: "#F5E8D3", muted: "#A89582", accent: "#D4A017", accent2: "#C86D3B",
    display: "Playfair Display, Georgia, serif",
    body: "Cinzel, Cormorant Garamond, serif",
    aesthetic: "Steampunk reimagines modern technology through 19th-century Victorian steam power and industrial romanticism. Deep oiled mahogany and dark leather foundations are adorned with burnished brass borders, interlocking gear wheels, copper rivets, analog pressure gauge needles, and ornate gilded serif typography.",
    principles: [
      "Victorian mechanical craft: exposed gears, copper tubing, and brass boiler plate rivets",
      "Warm metallic luster: burnished gold, antiqued brass (#D4A017), and aged copper (#C86D3B)",
      "Ornate classical typography: high-contrast Victorian serifs with decorative roman numeral accents"
    ],
    scale: "hero 40–56px Playfair Display bold, H2 28–36px, body 15–16px, gauge numerals 12–14px.",
    weights: "display 700; body 400–600; headings with ornate drop-caps.",
    typeRules: "centered chapter headings; justified body text; small-caps subheadings with letter-spacing (+0.1em).",
    accentRule: "Burnished Brass Gold (#D4A017) for borders, gear teeth, and primary actions; Copper (#C86D3B) for highlights.",
    spacing: "8px base; generous ornate borders (16–24px); decorative corner ornament insets; multi-tiered panels.",
    layout: "Architectural boiler-plate layout: ornamental top arch; central dials and apparatus panels; riveted copper sidebar; brass footer trim.",
    borders: "2px double brass border (solid #D4A017 with inner 1px hairline); decorative brass corner brackets with rivet dots.",
    shadows: "Deep Victorian warmth: 0 10px 30px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,215,0,0.25); warm amber dial glow.",
    radius: "4–8px for boiler plates; perfect circles for pressure dials and gear housing; ornamental bracket cuts.",
    buttons: "Heavy burnished brass buttons with metallic bevel: linear-gradient(180deg, #F0C450, #AA7C11); dark engraved text; active press 2px down.",
    cards: "Rich mahogany/dark leather panels with riveted copper frames; inset circular brass pressure dial; gilded header.",
    nav: "Brass pipe manifold nav bar with pressure valves; circular cog buttons for navigation items.",
    imagery: "Antique patent drawings, copperplate engravings of locomotives and airships, sepia-toned apparatus photos.",
    icons: "Ornate mechanical symbols: intermeshing gear wheels, pressure gauges, steam valves, Victorian compass roses.",
    textures: "Subtle crosshatched dark leather grain, brushed copper specular highlights, warm paper age patina.",
    motion: "Clockwork mechanical motion: ticking second-hand jumps (step easing), rotating gear wheels, steam-release gauge swings.",
    durations: "250–500ms mechanical clockwork cadence.",
    avoid: [
      "Cold digital blue or flat modern neon highlights",
      "Sleek minimalist white cards with zero ornamentation",
      "Modern geometric sans-serif typefaces (like Inter or Roboto)",
      "Flat borders lacking metallic bevel or rivet depth",
      "Ultra-fast frictionless transitions devoid of mechanical weight"
    ]
  },
  {
    slug: "analog-hifi",
    name: "Analog Hi-Fi",
    desc: "Brushed anodized aluminum faceplates, warm amber backlit VU needle meters, and knurled knobs.",
    cat: "Soft & Dimensional",
    tags: ["audio", "hifi", "vu-meter", "aluminum", "tactile"],
    related: ["skeuomorphism", "industrial-brutalism", "cassette-futurism"],
    bg: "#1E1F22", surface: "#2A2C31", ink: "#F0F2F5", muted: "#959CA6", accent: "#FF9E1B", accent2: "#4ADE80",
    display: "Helvetica Neue, Inter, sans-serif",
    body: "Inter, Roboto, sans-serif",
    aesthetic: "Analog Hi-Fi celebrates the golden age of high-end acoustic audio equipment (McIntosh, Marantz, Braun). Precision brushed anodized aluminum faceplates, warm amber-backlit analog VU meters with ballistic needle dynamics, solid machined knurled volume knobs, oiled walnut cabinet sides, and phosphor green frequency scales produce supreme tactile satisfaction.",
    principles: [
      "Audiophile material honesty: real brushed aluminum, knurled metal dials, and oiled walnut wood",
      "Backlit analog instrumentation: warm amber/incandescent illumination on calibrated meters",
      "Precision German/Japanese typography: clean Swiss sans-serif with technical decibel scales"
    ],
    scale: "hero 34–48px Helvetica bold, meter scale 10–12px mono, body 14–15px, knob indicators 9–10px.",
    weights: "display 600–700; body 400–500; technical labels 600.",
    typeRules: "left-aligned component labels; uppercase functional markers (PHONO, AUX, TAPE, TUNER); strict dB calibrations (-20dB to +3dB).",
    accentRule: "Warm Amber Glow (#FF9E1B) for the backlit meter window; Phosphor Green (#4ADE80) for stereo signal locks.",
    spacing: "8px base; heavy 24–32px chassis margins; rack-mount screw spacing (16px); balanced horizontal layout.",
    layout: "Hi-Fi receiver chassis: top dual VU meter bay; center frequency tuner dial band; bottom row of machined knobs and toggle switches.",
    borders: "1px #FFFFFF18 hairline edge bevels; machined chamfered faceplate borders; 1px inset groove around meter window.",
    shadows: "Tactile depth: 0 16px 40px rgba(0,0,0,0.6); inset 0 2px 4px rgba(0,0,0,0.4); warm incandescent inner glow inside VU meters.",
    radius: "2–4px subtle faceplate rounding; perfect circles for rotary dials; sharp 0px for meter glass frame.",
    buttons: "Solid aluminum push-buttons; latching toggle switches with satisfying physical throw; knurled rotary knobs with radial indicator line.",
    cards: "Machined aluminum component blocks; inset backlit meter displays; dark brushed anodized finish.",
    nav: "Rotary selector switch or push-button input array (TUNER / CD / STREAM / AUX) with illuminated amber LED pip.",
    imagery: "Macro photography of acoustic drivers, turntable cartridges, tube amplifiers, and machined metal details.",
    icons: "Audio engineering glyphs: sine waves, decibel bars, headphones, tape reels, balanced XLR pins.",
    textures: "Horizontal brushed aluminum grain, subtle glass reflections with incandescent lamp falloff.",
    motion: "Ballistic needle physics: rapid rise with gentle overshoot and smooth decay; tactile rotary knob detent clicks.",
    durations: "150–350ms ballistic spring curves.",
    avoid: [
      "Plastic-looking saturated RGB gaming colors",
      "Flat borderless SaaS cards with no physical material texture",
      "Decorative script or playful comic typefaces",
      "Digital pixelation where smooth analog needles belong",
      "Zero-thickness paper-flat interfaces"
    ]
  },
  {
    slug: "game-boy-dmg",
    name: "Game Boy DMG",
    desc: "Iconic 4-shade pea-soup olive LCD matrix, dot-grid ghosting, and chunky 8-bit handheld charm.",
    cat: "Retro & Internet",
    tags: ["nintendo", "gameboy", "lcd", "pixel", "chiptune"],
    related: ["pixel-8bit", "retro-internet", "gaming-ui"],
    bg: "#8BAC0F", surface: "#9BBC0F", ink: "#0F380F", muted: "#1E471E", accent: "#0F380F", accent2: "#306230",
    display: "Press Start 2P, Courier, monospace",
    body: "Silkscreen, monospace",
    aesthetic: "Game Boy DMG is the authentic nostalgia of Nintendo's 1989 handheld masterpiece. Built entirely upon the legendary 4-shade monochromatic pea-soup olive-green LCD palette (#0F380F, #306230, #8BAC0F, #9BBC0F), dot-matrix pixel grid overlays, authentic LCD pixel response ghosting, chunky beveled gray plastic framing, and magenta B/A action buttons.",
    principles: [
      "The sacred four shades: every element is built strictly using the 4 DMG green values",
      "Dot-matrix resolution: crisp pixel grids with authentic 1px pixel scanline spacing",
      "Chunky handheld ergonomics: rounded bezel borders, tactile directional pad, and slanted pills"
    ],
    scale: "hero 18–24px pixel font, subheadings 12–14px, body 8–10px pixel font, HUD stats 8px mono.",
    weights: "display 400 (pixel-rendered bold); body 400 pixel.",
    typeRules: "uppercase pixel headlines; strict baseline pixel alignment; zero anti-aliasing fuzziness.",
    accentRule: "Deepest Forest Green (#0F380F) acts as the primary ink and button color; Dark Olive (#306230) for active highlights.",
    spacing: "8px/16px pixel-aligned increments; 160x144 internal aspect-ratio screen viewport; 16px screen bezel padding.",
    layout: "Handheld console layout: top cartridge notch line; central green LCD viewport inside dark gray bezel; bottom D-pad and B/A button cluster.",
    borders: "3px solid #0F380F for in-game frames; 2px recessed bezel border; outer chassis molding seams.",
    shadows: "Hard 2px-4px offset pixel drop shadows: 4px 4px 0px #0F380F; zero blurred ambient drop shadows.",
    radius: "0px inside the LCD screen; 16px rounded outer handheld chassis corners; 20px pill battery indicator.",
    buttons: "Chunky 8-bit pixel buttons; slanted pill SELECT/START buttons; circular magenta or dark green action buttons.",
    cards: "Recessed LCD dialogue boxes; 2px black pixel border with double-line corners; typing dialogue text.",
    nav: "In-game menu selection cursor (▶ arrow) that steps between items with retro chiptune feedback.",
    imagery: "Authentic 4-shade 1-bit pixel art sprites, retro game maps, pixelated portraits, chiptune soundwaves.",
    icons: "8x8 and 16x16 pixel art icons: hearts, swords, potions, coins, directional arrows.",
    textures: "Dot-matrix LCD grid texture (1px pixel grid pattern with 4% gap), horizontal pixel scanlines.",
    motion: "Step-based 8-frame animations; LCD pixel ghosting trail on rapid scrolling; screen wipe transitions.",
    durations: "100–160ms step transitions (no smooth floating easing).",
    avoid: [
      "Any colors outside the 4-shade green spectrum in the primary viewport",
      "Smooth modern anti-aliased curved typography",
      "Blurred box-shadows or modern glossy glass filters",
      "Continuous smooth floating transitions",
      "High-resolution photographic images without 4-shade dithering"
    ]
  },
  {
    slug: "duotone",
    name: "Duotone",
    desc: "Electric two-color posterization: high-voltage contrasting color fields with bold editorial weight.",
    cat: "Editorial & Print",
    tags: ["spotify", "two-tone", "poster", "vibrant", "music"],
    related: ["swiss-poster", "gradient-design", "editorial-magazine"],
    bg: "#0C1B33", surface: "#14294E", ink: "#FFFFFF", muted: "#A5B8D8", accent: "#FF4071", accent2: "#00F5D4",
    display: "Montserrat, Syne, -apple-system, sans-serif",
    body: "Inter, Helvetica Neue, sans-serif",
    aesthetic: "Duotone is the high-energy branding phenomenon made iconic by Spotify and modern festival identities: extreme two-color photographic posterization. Deep midnight cobalt blue (#0C1B33) is mapped to shadows while scorching neon coral (#FF4071) or cyan floods the highlights. Massive geometric sans typography cuts across bold color fields with unmistakable visual punch.",
    principles: [
      "Strict two-color mapping: photos and surfaces are strictly converted into the primary dual-hue channel",
      "High-voltage optical contrast: deep shadow hue vs. ultra-vibrant highlight hue creates instant electricity",
      "Poster-scale typography: massive bold sans-serif headlines that dominate the viewport"
    ],
    scale: "hero 56–88px extra-bold, H2 36–48px, body 16px/1.5, track tags 13px bold.",
    weights: "display 800–900; body 500–600; strong weight presence throughout.",
    typeRules: "left-aligned heavy display headlines; tight line-height (0.95–1.05); uppercase track kicker labels.",
    accentRule: "Hot Neon Coral (#FF4071) for key calls-to-action, play buttons, and highlight overlays.",
    spacing: "8px base; generous full-bleed viewport sections; content containers max-width 1240px; 24–40px card padding.",
    layout: "Editorial poster grid: full-bleed duotone imagery with bold overlapping typographic headlines; split 50/50 hero blocks.",
    borders: "2px solid #FF4071 on featured cards; clean 1px white/20% dividers; zero fussy ornamentation.",
    shadows: "Punchy colored glow: 0 12px 32px rgba(255,64,113,0.35); crisp dark drop on text over imagery.",
    radius: "0px to 8px modern clean edges; full circular 48px play buttons.",
    buttons: "Solid neon coral pill or rounded rect; high-contrast white text; hover expands with colored bloom.",
    cards: "Duotone image-backed cards with CSS mix-blend-mode: multiply/screen; title in giant semibold type.",
    nav: "Minimal high-contrast header bar; transparent overlay on imagery; bold brand mark.",
    imagery: "Duotone-filtered portraits, crowd photography, album art rendered in strict 2-color gradient maps.",
    icons: "Clean 20–24px bold outline and filled glyphs: play, pause, waveform, shuffle, heart.",
    textures: "Halftone screen tint, subtle film grain over duotone imagery, clean color blocks.",
    motion: "Punchy kinetic hover reveals: color inversion crossfades (180ms), scale lift (1.03), image zoom on card hover.",
    durations: "150–250ms snappy cubic-bezier(0.2, 0.8, 0.2, 1).",
    avoid: [
      "Full-color unmapped realistic photography that breaks the two-tone identity",
      "Timid, pale pastel shades that lack visual punch",
      "Delicate thin-stroke serif fonts",
      "Muddy multi-colored gradient soups",
      "Cluttered busy layouts with low-contrast type"
    ]
  },
  {
    slug: "papercut",
    name: "Papercut",
    desc: "Dimensional physical paper craft: stacked textured cardstock silhouettes with soft cast drop shadows.",
    cat: "Handmade & Texture",
    tags: ["paper", "craft", "layered", "shadows", "tactile"],
    related: ["claymorphism", "hand-drawn", "organic-biophilic"],
    bg: "#F7F3EB", surface: "#FFFFFF", ink: "#2D2823", muted: "#7A7067", accent: "#D96B43", accent2: "#4E6E58",
    display: "Recoleta, Playfair Display, serif",
    body: "Inter, -apple-system, sans-serif",
    aesthetic: "Papercut transforms web layouts into tactile layered paper dioramas. Clean silhouette sheets of heavy cardstock appear stacked in dimensional physical space, separated by soft, realistic directional drop shadows. Flowing topographic contour curves, rich matte earthy swatches (terracotta, sage, cream), and fibrous textures create deep handcrafted warmth.",
    principles: [
      "Physical sheet depth: every layer casts realistic directional light shadows onto the surface beneath",
      "Organic contour cuts: sweeping curved cutouts inspired by topographic maps and paper art",
      "Matte cardstock palette: warm unbleached paper whites, terracotta, ochre, and deep forest greens"
    ],
    scale: "hero 44–64px warm serif, H2 30–40px, body 15–16px, craft labels 12–13px.",
    weights: "display 600–700; body 400–500; editorial warmth.",
    typeRules: "centered or left-aligned serif headlines; generous leading for body prose; sentence case everywhere.",
    accentRule: "Terracotta (#D96B43) for primary craft buttons; Sage Green (#4E6E58) for natural accents.",
    spacing: "8px base; generous layered sheet padding 32–48px; overlapping sheet offsets 16–32px.",
    layout: "Multi-layered z-indexed paper sheets: background topography wave; floating content cardstock; foreground decorative silhouette.",
    borders: "None — depth and edge separation is achieved entirely through physical cast drop shadows.",
    shadows: "Realistic directional paper shadows: 0 4px 12px rgba(45,40,35,0.08), 0 12px 28px rgba(45,40,35,0.12); multi-stage elevation.",
    radius: "16–24px for card sheets; continuous SVG bezier curves for organic contour waves; 12px for buttons.",
    buttons: "Tactile cardstock pills; subtle top inner highlight (inset 0 1px 0 rgba(255,255,255,0.6)); hover deepens shadow.",
    cards: "Thick matte paper cards (#FFFFFF) floating over warm beige ground (#F7F3EB); soft 20px cast shadow; deckle-edge accents.",
    nav: "Top paper ribbon with gentle curved bottom edge; clean serif logo; quiet text links.",
    imagery: "Layered vector paper silhouettes, botanical paper cuts, origami birds, tactile lifestyle photography.",
    icons: "Handcrafted line glyphs, scissors, folded paper planes, leaves, sun rays.",
    textures: "Fine cardstock fiber texture, unbleached linen grain, subtle watercolor washes.",
    motion: "Gentle physical parallax: background paper sheets drift slower than foreground; soft spring lift on card hover.",
    durations: "200–400ms smooth organic easing.",
    avoid: [
      "Hard neon glowing borders or cybernetic elements",
      "Glossy plastic reflections or high-specular glassmorphism",
      "Harsh 1px solid black wireframe borders",
      "Flat design with zero shadow depth",
      "Aggressive rapid glitch or strobe animations"
    ]
  },
  {
    slug: "heritage-classic",
    name: "Heritage Classic",
    desc: "Savile Row distinction: British racing green, gold foil serif crests, warm parchment, and quiet pedigree.",
    cat: "Minimal",
    tags: ["old-money", "luxury", "heritage", "serif", "gold"],
    related: ["quiet-luxury", "luxury-minimalism", "dark-academia"],
    bg: "#0B1E15", surface: "#122C20", ink: "#F5F2EA", muted: "#9FB3A6", accent: "#C5A869", accent2: "#E2D1A6",
    display: "Cinzel, Cormorant Garamond, Georgia, serif",
    body: "EB Garamond, Georgia, serif",
    aesthetic: "Heritage Classic embodies timeless Old Money distinction: bespoke Savile Row tailoring, vintage horology, and centuries-old country estates. Deep British racing green (#0B1E15) and warm parchment paper harmonize with embossed gold foil serif typography (#C5A869), subtle Roman numeral chapter markers, heraldic crests, and quiet aristocratic pedigree.",
    principles: [
      "Aristocratic restraint: luxury is whispered through materials and proportion, never shouted",
      "British racing green & gold: timeless heritage palette of deep dark forest green and gilded foil",
      "Classical typographic majesty: high-contrast Roman serif letterforms with wide letter-spacing"
    ],
    scale: "hero 42–60px Cinzel serif, H2 28–36px, body 16–17px/1.6, crest tags 11–12px tracked.",
    weights: "display 600; body 400; subheadings with regal tracking (+0.12em).",
    typeRules: "centered regal headlines; Roman numerals for section indices (I, II, III, IV); generous paragraph spacing.",
    accentRule: "Burnished Gold Foil (#C5A869) for crests, rules, monograms, and key button outlines.",
    spacing: "8px base; expansive section padding 96–128px; elegant thin gold separator rules with diamond center ornaments.",
    layout: "Symmetrical heritage layout: centered crest banner; grand serif title; two-column archival narrative; footer with hallmark certification.",
    borders: "1px delicate gold hairline (#C5A86944); double-line gold frame borders on product certificates.",
    shadows: "Subtle aristocratic depth: 0 16px 48px rgba(0,0,0,0.5); soft gold ambient warmth around featured pieces.",
    radius: "2–4px stately subtle rounding or 0px classic sharp edges; never oversized toy-like curves.",
    buttons: "Refined gold-bordered buttons (1px solid #C5A869); transparent or deep green background; gold tracked serif text; hover fills with warm gold wash.",
    cards: "Deep green velvet-like panels (#122C20); delicate gold border keylines; Roman numeral kicker; gold foil headline.",
    nav: "Centered heraldic monogram crest in nav header; spaced uppercase serif links; bespoke book-a-consultation link.",
    imagery: "Heritage horology close-ups, bespoke tailoring fabrics (cashmere, tweed), leather-bound archives, equestrian landscapes.",
    icons: "Heraldic crests, antique keys, fountain pen nibs, horological gears, compasses, wax seals.",
    textures: "Subtle vellum/parchment grain, fine herringbone fabric weave, gold leaf foil speckles.",
    motion: "Slow, dignified, confident transitions: graceful 400ms opacity dissolves; zero bouncy overshoots.",
    durations: "300–600ms dignified ease.",
    avoid: [
      "Trendy neon gradients, candy pastels, or cybernetic glow",
      "Casual slang, conversational AI jargon, or all-caps shouting",
      "Chunky rounded plastic pill buttons",
      "Fast snappy bouncy animations that destroy gravitas",
      "Cheap synthetic primary colors"
    ]
  },
  {
    slug: "bioluminescence",
    name: "Bioluminescence",
    desc: "Deep midnight abyss illuminated by ethereal glowing jellyfish cyan, marine violet, and fluid light.",
    cat: "Atmosphere & Gradient",
    tags: ["glow", "ocean", "bioluminescent", "neon", "ethereal"],
    related: ["aurora-glow", "gradient-design", "holographic"],
    bg: "#030712", surface: "#0A1128", ink: "#F3F4F6", muted: "#768BA3", accent: "#00F5D4", accent2: "#A855F7",
    display: "Plus Jakarta Sans, Outfit, sans-serif",
    body: "Inter, -apple-system, sans-serif",
    aesthetic: "Bioluminescence plunges into the pitch-black ocean abyss, where life illuminates the dark with ethereal organic light. Deep midnight navy backgrounds (#030712) come alive with glowing electric cyan (#00F5D4) and marine violet (#A855F7) fluid light trails, translucent aquatic cards, and soft ambient pulses that mimic deep-sea siphonophores.",
    principles: [
      "The abyssal void: deep black-indigo ocean waters provide infinite contrast for emitted light",
      "Self-luminous organic color: glowing cyan and violet gradients that appear to generate their own photons",
      "Fluid aquatic motion: smooth, floating, drifting movement like marine life in deep currents"
    ],
    scale: "hero 48–70px semibold, H2 32–44px, body 16px/1.5, aquatic captions 12–13px.",
    weights: "display 600–700; body 400; glow labels 500.",
    typeRules: "centered ambient hero text; luminous gradient headlines; generous leading for tranquil readability.",
    accentRule: "Bioluminescent Cyan (#00F5D4) for the hottest photon emissions and primary buttons; Marine Violet (#A855F7) for ambient fluid glow.",
    spacing: "8px base; spacious deep-sea padding 80–120px; generous gaps between floating luminous cards.",
    layout: "Fluid floating ecosystem layout: background radial glow orbs; floating translucent creature cards; drifting particle trails.",
    borders: "1px glowing translucent keyline: border 1px solid rgba(0,245,212,0.3); gradient border highlights.",
    shadows: "Radiant photon emission glows: 0 0 32px rgba(0,245,212,0.35), 0 0 64px rgba(168,85,247,0.2); deep ambient drop shadow.",
    radius: "20–28px flowing organic rounded cards; pill buttons with 9999px radius.",
    buttons: "Luminous cyan filled or translucent glowing pill; radial glow bloom on hover; white/deep teal text.",
    cards: "Translucent aquatic cards (#0A1128cc with backdrop-blur 20px); glowing perimeter keylines; soft ambient backlight.",
    nav: "Floating curved glass navigation bar; glowing status orb; translucent links that light up on hover.",
    imagery: "Deep-sea underwater photography, ethereal glowing jellyfish, microscopic plankton light, fluid caustics.",
    icons: "Flowing organic line glyphs, water droplets, spark stars, nautilus spirals, light rays.",
    textures: "Subtle underwater caustic light ripples, deep ocean particulate noise, soft mesh gradients.",
    motion: "Slow undulating breathing pulses: 3s to 5s infinite gentle breathing animations; floating card drifts; ripple waves.",
    durations: "300–600ms interactive transitions; 3000ms+ ambient breathing cycles.",
    avoid: [
      "Harsh angular brutalist cuts or jagged spiked shapes",
      "Flat dry matte paper textures with zero luminosity",
      "High-contrast jarring black-on-white text blocks",
      "Stiff mechanical linear transitions without organic easing",
      "Warm desert earth tones that break the deep ocean illusion"
    ]
  },
  {
    slug: "deconstructivism",
    name: "Deconstructivism",
    desc: "Non-orthogonal architectural tension: colliding planes, 15° diagonal cuts, fragmented grids, and raw titanium.",
    cat: "Experimental",
    tags: ["architectural", "broken-grid", "angles", "fragmented", "avant-garde"],
    related: ["anti-design", "chaos-design", "editorial-brutalism"],
    bg: "#141619", surface: "#20242A", ink: "#E6E9EE", muted: "#8B95A5", accent: "#FF2A55", accent2: "#4E5868",
    display: "Monument Extended, Space Grotesk, sans-serif",
    body: "Space Grotesk, Inter, sans-serif",
    aesthetic: "Deconstructivism channels the architectural rebellion of Zaha Hadid, Daniel Libeskind, and Peter Eisenman: deliberate fragmentation, non-orthogonal geometry (15°–30° shears), intersecting structural planes, controlled instability, and raw titanium/slate tones pierced by laser-crimson focal cuts.",
    principles: [
      "Non-orthogonal defiance: right angles are disrupted by 15°–30° diagonal cuts and skewed planes",
      "Fragmented structural planes: content cards intersect, collide, and float in controlled disequilibrium",
      "Titanium and laser crimson: architectural industrial slates ignited by razor-sharp red laser cuts"
    ],
    scale: "hero 52–80px wide structural bold, H2 32–42px, body 14–16px, coordinate tags 11px mono.",
    weights: "display 800–900; body 500; extreme architectural mass.",
    typeRules: "transform: skewX(-8deg) or rotate(3deg) on headline fragments; overlapping text over card boundaries.",
    accentRule: "Laser Crimson (#FF2A55) cuts through the monochromatic concrete and titanium surfaces.",
    spacing: "8px base; intentional asymmetric tensions; colliding negative margins (-24px to -48px); angular clip-paths.",
    layout: "Fragmented architectural canvas: skewed diagonal banner slices (clip-path polygon); floating angled cards; overlapping structural frames.",
    borders: "2px solid #4E5868; sharp laser-cut diagonal borders; 1.5px crimson accent rules at unexpected angles.",
    shadows: "High-contrast architectural plane shadows: 0 20px 48px rgba(0,0,0,0.7); 0 0 24px rgba(255,42,85,0.25).",
    radius: "0px absolute — pure crystalline facets and sheared polygon vertices.",
    buttons: "Angular polygon buttons using clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%); hover inverts sharply.",
    cards: "Fragmented titanium slate panels (#20242A); 15-degree corner chamfers; overlapping content layers with z-index tension.",
    nav: "Non-horizontal header with angled slice accents; fragmented architectural logo; monospace index coordinates.",
    imagery: "Deconstructivist architecture, angular titanium facades, raw concrete cantilevers, fragmented geometric 3D renders.",
    icons: "Sharp polygonal glyphs, compass deviation arrows, angular crosshairs, sheared coordinate grids.",
    textures: "Brushed titanium metal grain, architectural raw concrete aggregate, wireframe perspective meshes.",
    motion: "Aggressive geometric plane shifts: elements slide along 15-degree vector angles; fast structural snaps.",
    durations: "140–240ms snappy mechanical easing.",
    avoid: [
      "Boring predictable 12-column symmetrical box grids",
      "Soft rounded pill shapes or friendly bubbly forms",
      "Gentle romantic pastels or floral colors",
      "Slow polite fades that lack architectural tension",
      "Centering everything in passive symmetry"
    ]
  },
  {
    slug: "glitch-art",
    name: "Glitch Art",
    desc: "Digital signal degradation: chromatic aberration, horizontal displacement slices, scanlines, and VHS drift.",
    cat: "Experimental",
    tags: ["glitch", "datamosh", "vhs", "rgb-split", "artifacts"],
    related: ["hacker-aesthetic", "cyberpunk", "synthwave"],
    bg: "#0B0C10", surface: "#1F2833", ink: "#66FCF1", muted: "#8B9BAE", accent: "#FF0055", accent2: "#00FFFF",
    display: "VT323, Share Tech Mono, monospace",
    body: "Share Tech Mono, monospace",
    aesthetic: "Glitch Art celebrates the beauty of machine error and broadcast breakdown: RGB channel displacement (red/cyan chromatic aberration), horizontal scanline slice tearing, CRT phosphor flutter, VHS tracking drift timestamps (PLAY ▶ 00:42:19), corrupted digital memory buffers, and raw cyber telemetry.",
    principles: [
      "Embrace the malfunction: signal artifacts, horizontal line slices, and corrupted data are the aesthetic",
      "Chromatic displacement: text and shapes split into cyan, magenta, and yellow color-fringed twins",
      "Analog broadcast breakdown: VHS tracking lines, CRT raster scanlines, and audio-reactive stutter"
    ],
    scale: "hero 50–76px VT323 mono, H2 28–38px, body 14–15px mono, timestamp badges 12px.",
    weights: "display 400 (heavy mono); body 400; constant monospace rhythm.",
    typeRules: "glitch displacement layers (text-shadow: -2px 0 #FF0055, 2px 0 #00FFFF); all-caps error messaging; system hex dumps.",
    accentRule: "Electric Magenta (#FF0055) and Electric Cyan (#00FFFF) split across highlights and chromatic borders.",
    spacing: "4px/8px digital raster grid; tight telemetry readouts; offset glitch bands jumping 4–12px horizontally.",
    layout: "Security monitor or broadcast feed: top status telemetry line (REC ● [CH-04]); fragmented card grid with scanline breaks.",
    borders: "1px dashed or staggered cyan/magenta borders; broken border keylines simulating missing signal packets.",
    shadows: "Chromatic offset shadows: -3px 0 0 #FF0055, 3px 0 0 #00FFFF; neon phosphor CRT glow.",
    radius: "0px absolute — digital pixels have no rounded corners.",
    buttons: "Terminal-style command buttons; hover triggers rapid horizontal jitter keyframe and chromatic split; active flashes white.",
    cards: "Dark CRT buffer cards (#1F2833); horizontal scanline overlay; top corner timestamp; error code footers.",
    nav: "Top broadcast tracking bar with blinking REC dot, timecode (00:34:12), and corrupted channel switcher.",
    imagery: "Datamoshed video frames, corrupted JPEG macroblocks, distorted test-pattern bars, thermal camera views.",
    icons: "Video cassette tape icons, signal warning triangles, broken antenna bars, noise static boxes.",
    textures: "Scanlines (repeating linear gradient 2px), animated TV static noise, chromatic fringe filters.",
    motion: "Sudden jitter displacement: keyframe clip-path horizontal slices jumping every 2–4s; instant snap state changes.",
    durations: "50–120ms twitch / jitter cycles.",
    avoid: [
      "Clean corporate flat minimalism with polite rounded corners",
      "Soft pastel luxury colors with low contrast",
      "Traditional serif or elegant script typefaces",
      "Smooth slow corporate fades with zero digital bite",
      "Perfect symmetrical alignment that looks factory-clean"
    ]
  },
  {
    slug: "plasticine-clay",
    name: "Plasticine Clay",
    desc: "Chunky handmade claymation: soft matte plasticine volumes, finger-pressed indentations, and warm studio depth.",
    cat: "Soft & Dimensional",
    tags: ["claymation", "tactile", "stop-motion", "playful", "chunky"],
    related: ["claymorphism", "playful-maximalism", "comic-pop-art"],
    bg: "#F3EFE6", surface: "#FFFFFF", ink: "#2D2B28", muted: "#7A756D", accent: "#FF5E3A", accent2: "#38B6FF",
    display: "Fredoka, Nunito, -apple-system, sans-serif",
    body: "Nunito, -apple-system, sans-serif",
    aesthetic: "Plasticine Clay channels the tactile handmade charm of Aardman claymation and physical modeling clay. Chunky, pillowy, finger-molded 3D shapes with soft ambient contact shadows, matte non-glossy plasticine surfaces, subtle thumbprint curves, warm studio lighting, and friendly saturated primary colors.",
    principles: [
      "Handmade modeling clay: chunky pillowy volumes with soft rounded contours as if sculpted by fingers",
      "Matte physical depth: soft diffuse contact drop shadows and inner ambient occlusion — never glossy glass",
      "Playful warmth: cheerful stop-motion energy with bold primary colors (clay coral, cobalt, sunny yellow)"
    ],
    scale: "hero 44–64px rounded bold, H2 30–42px, body 16px/1.5, fun pill badges 13px.",
    weights: "display 700; body 600; plump friendly stroke weights.",
    typeRules: "centered or bouncy left-aligned rounded text; title case headlines; generous letter-spacing for friendliness.",
    accentRule: "Clay Coral (#FF5E3A) for primary chunky action buttons; Sky Blue (#38B6FF) and Mustard Yellow (#FFB800) for accents.",
    spacing: "8px base; generous plump padding 28–36px; 20–24px gaps between clay blocks.",
    layout: "Playful diorama layout: floating clay tiles with soft contact shadows; chunky action buttons; friendly sticker-style badges.",
    borders: "None or subtle 2px soft tonal border (#E6DEC8); depth comes from inner and outer diffuse clay shadows.",
    shadows: "Soft diffuse clay drop shadow: 0 12px 24px rgba(45,43,40,0.12), inset 0 3px 6px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.08).",
    radius: "24–36px extra-rounded chunky corners; full pills (9999px) for buttons and tags.",
    buttons: "Plump 3D clay pills; top white clay highlight; hover gives squishy spring bounce; active squishes down 3px with scale(0.97).",
    cards: "Molded clay tablets (#FFFFFF); ultra-soft rounded corners; deep contact shadow on warm beige table ground (#F3EFE6).",
    nav: "Floating clay pill bar; colorful spherical icon buttons with squishy hover response.",
    imagery: "Physical stop-motion clay sculptures, plasticine characters, miniature studio dioramas, colorful molded shapes.",
    icons: "Chunky rounded glyphs, smiling stars, heart badges, cloud shapes, molded speech bubbles.",
    textures: "Subtle matte clay grain, delicate thumbprint surface micro-texture, warm studio softbox illumination.",
    motion: "Squishy clay physics: springy overshoot on hover (scale 1.05); tactile squash-and-stretch on click.",
    durations: "200–350ms bouncy spring curves.",
    avoid: [
      "Sharp 0px corners, sharp knives, or technical wireframe lines",
      "Glossy mirror specular reflections or translucent glass blur",
      "Cold industrial dark-mode terminal palettes",
      "Stiff corporate enterprise tables",
      "Intimidating technical jargon"
    ]
  },
  {
    slug: "raw-html",
    name: "Raw HTML",
    desc: "Radical web honesty: Times New Roman, default blue hyperlinks, beveled gray buttons, and raw HTML tables.",
    cat: "Brutalist",
    tags: ["html", "indieweb", "minimal-web", "hyperlink", "purist"],
    related: ["brutalism", "minimalism", "newspaper"],
    bg: "#FFFFFF", surface: "#F0F0F0", ink: "#000000", muted: "#555555", accent: "#0000EE", accent2: "#551A8B",
    display: "Times New Roman, Times, serif",
    body: "Times New Roman, Times, serif",
    aesthetic: "Raw HTML is the purist manifesto of web honesty and the indie-web movement (championed by 'motherfuckingwebsite.com' and Berkshire Hathaway). Default serif browser typography (Times New Roman), raw unstyled royal blue hyperlinks (#0000EE), classic visited purple (#551A8B), beveled gray submit buttons (#C0C0C0), and explicit 1px HTML table borders provide unbeatable speed and radical authenticity.",
    principles: [
      "Radical default honesty: embrace the browser's native defaults rather than masking them with framework bloat",
      "Hyperlink sanctity: links are royal blue, underlined, and visited links turn purple — standard since 1993",
      "Speed & accessibility perfection: zero render-blocking bloat, 100% semantic HTML, readable everywhere"
    ],
    scale: "H1 32px standard bold serif, H2 24px, H3 18.7px, body 16px/1.4, microcopy 13px.",
    weights: "headings 700 bold; body 400 regular; pure browser defaults.",
    typeRules: "left-aligned default reading flow; underlined text is strictly for hyperlinks; standard browser heading scale.",
    accentRule: "Standard Browser Link Blue (#0000EE) for interactive links; Visited Link Purple (#551A8B) for history.",
    spacing: "Standard 8px browser margin; 16px paragraph margins; compact tables with cellpadding='6' cellspacing='0'.",
    layout: "Standard document flow: max-width 780px centered or left-aligned; sequential headings, paragraphs, lists, and tables; no grid gimmickry.",
    borders: "1px solid #808080 or inset/outset 2px system borders; default HTML table borders (border='1').",
    shadows: "None — flat 2D document space; classic 2px outset/inset button bevels.",
    radius: "0px absolute — standard system square buttons and inputs.",
    buttons: "Classic OS/browser beveled buttons: background #E0E0E0, border 2px outset #FFFFFF; active state border 2px inset #FFFFFF.",
    cards: "Classic HTML <fieldset> with <legend> label; or table-based data cells with 1px gray borders.",
    nav: "Horizontal bulleted list of blue hyperlinks separated by vertical bars (|) or simple bracketed links ([Home] [About] [Docs]).",
    imagery: "Unmodified inline images with 1px black border and visible alt text; classic technical diagram screenshots.",
    icons: "Unicode text glyphs: [?], [!], [x], [->], bullets (&bull;).",
    textures: "None — pure clean white background (#FFFFFF) with zero noise or gradients.",
    motion: "Instantaneous state changes; 0ms transitions; browser-native focus rings.",
    durations: "0ms instant.",
    avoid: [
      "Heavy CSS frameworks, Tailwind bloat, or complex animated canvas libraries",
      "Custom cursor trackers, parallax scrolls, or page loaders",
      "Removing default link underlines or hiding focus outlines",
      "Floating glass panels or blurred gradient orbs",
      "Low-contrast gray text on dark backgrounds"
    ]
  },
  {
    slug: "racing-telemetry",
    name: "Racing Telemetry",
    desc: "High-g cockpit telemetry: carbon fiber weave, digital tachometer rev-counter redline, and lap split telemetry.",
    cat: "Data",
    tags: ["automotive", "telemetry", "carbon-fiber", "cockpit", "racing"],
    related: ["dataviz-terminal", "sci-fi-ui", "gaming-ui"],
    bg: "#0A0B0E", surface: "#13161C", ink: "#F1F3F7", muted: "#848E9D", accent: "#FF1801", accent2: "#FFD32A",
    display: "Chakra Petch, Rajdhani, -apple-system, sans-serif",
    body: "Rajdhani, Inter, sans-serif",
    aesthetic: "Racing Telemetry channels the adrenaline-fueled precision of Formula 1 and GT3 supercar digital cockpits (Porsche, Ferrari, McLaren). Matte carbon fiber weave textures (#0A0B0E), blazing redline digital rev counters (#FF1801), circular tachometers, real-time G-force diamond meters, digital lap delta splits (-0.184s), and high-contrast telemetry dials.",
    principles: [
      "Cockpit ergonomics: high-contrast telemetry readable at 200mph in direct sunlight",
      "Redline intensity: racing red (#FF1801) and warning yellow (#FFD32A) command immediate driver focus",
      "Engineered carbon fiber: matte woven carbon surfaces framed by machined aluminum and LED shift bars"
    ],
    scale: "gear indicator 64–84px bold mono, tachometer readouts 32–44px, telemetry stats 18–22px, sensor tags 11–12px uppercase.",
    weights: "display 700; body 600; numbers tabular mono bold.",
    typeRules: "uppercase technical telemetry labels; tabular numerals for lap times and speed readouts (00:01:24.482); angled racing italics (font-style: italic).",
    accentRule: "Racing Red (#FF1801) for redline RPM limits, critical warning flags, and active lap deltas.",
    spacing: "8px base; compact HUD grid; 16–20px telemetry module padding; high density without clutter.",
    layout: "Cockpit HUD dashboard: top LED shift-light strip; central circular tachometer and gear indicator; flanking left/right telemetry cards (tire temps, delta splits, throttle/brake gauges).",
    borders: "1px #FFFFFF18 hairline borders on carbon tiles; 2px racing red active border; angled 45-degree chamfered corners.",
    shadows: "High-intensity cockpit LED glows: 0 0 20px #FF180166; 0 0 16px #FFD32A44 on shift lights; deep matte chassis drops.",
    radius: "4–6px subtle chamfers; circular arcs for tachometers and G-force sensors; angled 45° corner cuts.",
    buttons: "Steering wheel thumb buttons: chunky high-contrast push buttons with LED status rings; PIT / DRS / RADIO controls.",
    cards: "Matte carbon-fiber instrument tiles (#13161C) with subtle 45-degree carbon weave pattern; top sensor label; live telemetry graph.",
    nav: "Top telemetry mode selector (RACE / QUALY / PRACTICE / PIT) with illuminated color pips.",
    imagery: "Vector telemetry waveforms, throttle/brake bar graphs, track sector maps with mini delta flags, G-force coordinate plots.",
    icons: "Automotive telemetry icons: speedometer, checkered flag, oil temp, brake disc, tire pressure, stopwatch.",
    textures: "Subtle 45-degree carbon fiber twill weave pattern, matte cockpit anti-glare finish.",
    motion: "Rapid responsive needle sweeps: tachometer rev-up with RPM bounce; flashing sequential shift lights at redline (80ms flash).",
    durations: "60–180ms rapid high-g response.",
    avoid: [
      "Soft pastel luxury tones or cute cartoon illustrations",
      "Serif academic typography or decorative Victorian script",
      "Slow, sluggish 500ms marketing fades that feel laggy",
      "Low-contrast gray-on-gray numbers that are hard to read",
      "Casual unformatted text blocks"
    ]
  },
  {
    slug: "botanical-herbarium",
    name: "Botanical Herbarium",
    desc: "19th-century naturalist archives: pressed floral specimens, Latin taxonomy italics, tea-stained parchment, and ink rules.",
    cat: "Handmade & Texture",
    tags: ["botanical", "herbarium", "naturalist", "parchment", "vintage"],
    related: ["dark-academia", "cottagecore", "organic-biophilic"],
    bg: "#F5EFE1", surface: "#EFE8D6", ink: "#1F3024", muted: "#5C6B5C", accent: "#A0522D", accent2: "#556B2F",
    display: "Cormorant Garamond, Playfair Display, serif",
    body: "Eczar, Garamond, Georgia, serif",
    aesthetic: "Botanical Herbarium opens the weathered specimen drawers of 19th-century royal naturalists and botanical archives. Warm tea-stained parchment (#F5EFE1), deep forest moss-green ink (#1F3024), binomial Latin taxonomy italics, pressed dried floral specimens, fine copperplate engraving rules, and archival collection stamps.",
    principles: [
      "Naturalist archive reverence: scientific respect for botanical specimens, taxonomy, and flora discovery",
      "Organic parchment harmony: warm aged paper, moss ink, sienna terracotta, and olive leaf tones",
      "Copperplate editorial elegance: classical italic serifs with delicate engraving lines and specimen callout labels"
    ],
    scale: "specimen title 38–54px italic serif, Latin binomial 20–26px italic, body 15–16px/1.6, archival labels 11–12px.",
    weights: "display 600 italic; body 400; taxonomy labels 500.",
    typeRules: "binomial nomenclature in italics (*Monstera deliciosa* Liebm.); small caps for family groupings; fine archival margin annotations.",
    accentRule: "Sienna Earth (#A0522D) for archival seal stamps and specimen numbers; Olive Leaf (#556B2F) for secondary notes.",
    spacing: "8px base; generous archival margins 32–48px; delicate double-rule borders around plates.",
    layout: "Herbarium sheet layout: central mounted botanical specimen drawing; bottom-right museum mounting label with Latin taxonomy, collection date, and collector signature.",
    borders: "Delicate double hairline borders: 1px solid #1F302433 with 4px inner gap and 0.5px hairline; vintage stamp perforation borders.",
    shadows: "Soft natural paper shadow: 0 4px 16px rgba(31,48,36,0.08); slight lift on pressed specimen card.",
    radius: "2px subtle archival paper corners; sharp mounting label rectangles.",
    buttons: "Archival label buttons with 1px moss-green border; warm parchment fill; serif italic text; hover deepens to sienna brown.",
    cards: "Mounted herbarium specimen sheets (#EFE8D6); delicate border frame; Latin nameplate at bottom; corner photo mounts.",
    nav: "Top archival registry header: Folio number, Genus index, Herbarium collection catalog search.",
    imagery: "Hand-colored copperplate botanical engravings, dried pressed leaves and flowers, vintage seed packet prints, field notes.",
    icons: "Botanical line drawings: pressed leaves, fern fronds, magnifying glass, antique tweezers, ink quill.",
    textures: "Tea-stained aged paper grain, subtle deckle edge fiber, vintage ink bleed on paper fibers.",
    motion: "Gentle historical reveals: smooth 350ms opacity fades like turning the fragile pages of an archival folio.",
    durations: "250–500ms peaceful archival cadence.",
    avoid: [
      "Artificial neon cyan or fluorescent synthetic hues",
      "Cold industrial dark-mode cyber grids",
      "Aggressive modern sans-serif tech branding",
      "Glossy plastic buttons or animated neon glowing borders",
      "Strobe, glitch, or high-speed gaming animations"
    ]
  }
];

function buildFile(s) {
  return `---
slug: ${s.slug}
name: "${s.name}"
description: "${s.desc}"
category: ${s.cat}
tags: [${s.tags.join(", ")}]
related: [${s.related.join(", ")}]
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

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

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
| Surface | \`${s.surface}\` | Cards, panels, containers |
| Ink | \`${s.ink}\` | Headlines, primary text |
| Muted | \`${s.muted}\` | Secondary copy, metadata, borders |
| Accent | \`${s.accent}\` | Primary action, key highlights |
| Accent 2 | \`${s.accent2}\` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. ${s.accentRule}

## 4. Spacing

${s.spacing}

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

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

## 10. Cards

${s.cards}

## 11. Navigation

${s.nav}

## 12. Imagery

${s.imagery}

## 13. Icons

${s.icons}

## 14. Textures

${s.textures}

## 15. Motion

${s.motion}

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using Ink when accent is under 3:1 on the adjacent ground.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor \`prefers-reduced-motion\` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

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
<!-- Starter specimen: button + card in ${s.name} -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>${s.name} headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
\`\`\`

---

*Source: Design Styles — design styles for AI coding agents. File: \`/designs/${s.slug}/DESIGN.md\`.*
`;
}

let count = 0;
for (const s of STYLES) {
  const dir = join(root, s.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "DESIGN.md"), buildFile(s), "utf8");
  count++;
}
console.log(`[generate-iconic-20-styles] successfully wrote ${count} DESIGN.md files into ${root}`);
