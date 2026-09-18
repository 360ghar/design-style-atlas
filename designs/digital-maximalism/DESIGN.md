---
slug: digital-maximalism
name: "Digital Maximalism"
description: "Internet-native excess: gradients, glass, stickers, cursors and widgets everywhere."
category: Maximalist
tags: [y2k, stickers, internet]
related: [maximalism, playful-maximalism, editorial-maximalism]
preview:
  bg: "#0B0B18"
  surface: "#15152B"
  ink: "#F2F0FF"
  muted: "#8E8AB0"
  accent: "#00E5FF"
  accent2: "#FF4FD8"
  display: "Unbounded, Bungee, Impact, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Digital Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, more overloaded interpretation — chrome, glow, and widgets everywhere.

## 1. Overall aesthetic

A 2005 desktop, a Discord server, and a rave flyer merged: gradient meshes, glass widgets, sticker decals, custom cursors, marquees, and a live clock somewhere. Built for internet culture brands, creator tools, and games. Irony and sincerity coexist.

**Three principles:**

- Widgets over whitespace: clocks, players, chats, counters
- Gradients + glass + stickers in every viewport
- Nostalgia is a material: starfields, sparkles, pixel fonts as accents

## 2. Typography

- **Display:** Unbounded, Bungee, Impact, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 52–92px chrome display (Unbounded/Bungee), H2 34–46px, H3 24px, body 15–17px, meta/labels 12–14px bold tracked.
- **Weights:** display 700–900; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** centered glowing headlines over widget-dense dashboards; floating badges and tickers; never whitespace, never single-column calm.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0B18` | Page ground |
| Surface | `#15152B` | Cards, panels, wells |
| Ink | `#F2F0FF` | Headlines, body text |
| Muted | `#8E8AB0` | Captions, meta, secondary text |
| Accent | `#00E5FF` | Primary actions, highlights |
| Accent 2 | `#FF4FD8` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Widget-dense: overlapping floating panels, 16–20px card padding, 64–88px sections, always something blinking

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Desktop collage: floating widget panels over gradient-mesh space; sticker constellations; chat-style content blocks. Max-width 1280px.

## 6. Borders

Glowing 1–2px gradient borders; sticker white keylines; scanline overlays

## 7. Shadows

Neon stack: 0 0 24px cyan + 0 0 60px magenta at low alpha; hard sticker drop shadows on decals

## 8. Radius

16–24px bubbly; pills for chips and buttons

## 9. Buttons

Glossy gradient pills with glow; hover intensifies glow and scales 1.04. Download-style beveled buttons as accents.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Glass widgets with gradient borders and glow; sticker cards with white keylines; mini-player and chat-bubble variants.

## 11. Navigation

Floating pill nav with glass blur, sparkle logo, status dots, and a neon CTA.

## 12. Imagery

Sparkle GIFs energy in still form: chrome 3D, pixel art, screencap collages, webcam-style portraits with stickers.

## 13. Icons

Mixed-era set: pixel icons, glossy orbs, emoji-scale glyphs — unified by glow and white keylines.

## 14. Textures / Patterns

Starfields, grid floors, scanlines, sparkle overlays, gradient mesh — all at once, balanced by dark grounds.

## 15. Motion

Constant gentle life: blinking status, floating stickers, marquee tickers, gradient drift. Respect reduced-motion with a calm snapshot.

Durations: micro 100–200ms widget pops, standard 300–500ms glow pulses, ceremonial 800ms. Easings: cubic-bezier(.34,1.56,.64,1) for pops, ease-in-out for glow pulses; static minimalism forbidden.

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
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Minimal layouts or large empty areas
- Single typeface systems
- Flat matte surfaces everywhere
- Corporate blue-gray palettes
- Hiding the seams — show the collage

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0B18;
  --surface: #15152B;
  --ink: #F2F0FF;
  --muted: #8E8AB0;
  --accent: #00E5FF;
  --accent-2: #FF4FD8;
  --font-display: Unbounded, Bungee, Impact, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Digital Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/digital-maximalism/DESIGN.md`.*
