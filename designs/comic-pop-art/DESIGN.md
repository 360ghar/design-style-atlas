---
slug: comic-pop-art
name: "Comic / Pop Art"
description: "Halftone heroics: bold inks, burst captions and four-color excitement."
category: Neon & Play
tags: [comic, pop-art, halftone]
related: [halftone, pixel-8bit, gaming-ui]
preview:
  bg: "#F5F0E6"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E675C"
  accent: "#E30613"
  accent2: "#FFD802"
  display: "Bangers, Archivo Black, sans-serif"
  body: "Comic Neue, Inter, sans-serif"
---

# Comic / Pop Art — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the POW!-louder interpretation.

## 1. Overall aesthetic

Silver-age comics as UX: panel grids with gutters, caption boxes narrating the journey, burst badges for offers, halftone shading. Reading order = user flow. For snacks, sports, kids, events, and challengers.

**Three principles:**

- Panels sequence the story — gutters pace the scroll
- Captions narrate; bursts exclaim; ration both
- Four colors + ink; dots do the rendering

## 2. Typography

- **Display:** Bangers, Archivo Black, sans-serif
- **Body:** Comic Neue, Inter, sans-serif
- **Scale:** hero 52–88px Bangers/Archivo Black burst type, H2 34–44px, H3 24px, body 16–17px comic lettering, meta/labels 12–14px burst labels.
- **Weights:** display 700–900 burst; body 400–500; labels 700–900 with outlines.
- **Rules:** burst-balloon headlines with ben-day dots (1.2px dots, 10px grid) and action lines; panels axis-aligned with 8px gutters; never quiet minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F0E6` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#FFD802` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Splash-page pacing: full-bleed splashes, 3–4 panel grids, burst interjections, section padding 72–96px

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Issue architecture: splash hero, panel-grid features, caption transitions, letters-page testimonials, next-issue CTA.

## 6. Borders

Ink-heavy: 3px panel frames (#141414), caption boxes with 2px ink frames on #FFD802 fill

## 7. Shadows

POW offsets: 4–6px 4–6px 0 #141414; no blur

## 8. Radius

0–6px; panels and bursts rectangular, sharp corners

## 9. Buttons

Rectangular burst buttons (3px ink frame, #E30613 or #FFD802 fill) and ink bars; hover scales to 1.04 in 150ms.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Comic panels: ink frames, caption box header, art middle, burst badge corner.

## 11. Navigation

Masthead bar: issue number, logo burst, section panels links.

## 12. Imagery

Comic art, halftone photos, action lines, onomatopoeia. Bold and flat.

## 13. Icons

Bursts, stars, arrows, pow-glyphs — Kirby energy, thick and few.

## 14. Textures / Patterns

Halftones, newsprint, action lines, ink splatter (rare).

## 15. Motion

Panel slams, burst pops, caption typewriter. Comic timing: fast beats, held poses.

Durations: instant–250ms POW slams with shake. Easings: springy slam cubic-bezier(0.34,1.56,0.64,1); slow fades forbidden.

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
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Muted palettes
- Thin lines
- Photorealistic seriousness
- Wall-of-text issues (show, don't tell)
- Burst inflation (save POWs)

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F0E6;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E675C;
  --accent: #E30613;
  --accent-2: #FFD802;
  --font-display: Bangers, Archivo Black, sans-serif;
  --font-body: Comic Neue, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Comic / Pop Art -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/comic-pop-art/DESIGN.md`.*
