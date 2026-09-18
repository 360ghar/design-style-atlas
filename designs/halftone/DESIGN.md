---
slug: halftone
name: "Halftone"
description: "Print-dot drama: comic dots, duotone pops and Ben-Day patterned depth."
category: Handmade & Texture
tags: [halftone, dots, pop]
related: [risograph, grain-noise, hand-drawn]
preview:
  bg: "#F5F0E6"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E675C"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "Archivo Black, Anton, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Halftone — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the dotter, more newsprint interpretation.

## 1. Overall aesthetic

Lichtenstein meets the landing page: Ben-Day dot fields, duotone photo-pops, burst badges (POW pricing!), and ink-heavy frames. Dots do the shading. For comics, snacks, sports, and challenger brands with punch.

**Three principles:**

- Dots are shading: scale dot size with tone, never use gradients
- Duotone + dots + ink = complete image system
- Bursts and bangs punctuate — ration to conversion moments

## 2. Typography

- **Display:** Archivo Black, Anton, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–80px Archivo Black/Anton dot-shaded, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px ben-day labels.
- **Weights:** display 800–900; body 400–500; labels 700 with dot-pattern fills.
- **Rules:** headlines with halftone-dot fills and pop-burst treatments; comic framing; never flat minimal type.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F0E6` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Secondary moments, duotone fills, burst badges |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Pop rhythm: dot-field grounds, 24px panel padding, 72–96px chapters

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Pop sequence: dot-field hero with burst, feature rows with duotone thumbs, burst CTA finale. Max-width 1240px.

## 6. Borders

Ink frames 2–3px; Ben-Day dot dividers; burst badges

## 7. Shadows

Pop depth: hard 5px ink offsets; dot-gradient fades instead of blurs

## 8. Radius

0–12px; pop panels sharp, stickers round

## 9. Buttons

Burst and bar buttons: ink-bordered red/yellow blocks, POW hover scale (1.04, 120ms).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Pop panels: duotone image top, dot-fade edge, ink frame, burst price badges.

## 11. Navigation

Strip bar: logo burst, condensed links, red CTA block. Dot trim top.

## 12. Imagery

Duotone photography with dot overlays, comic illustrations, burst badges, onomatopoeia accents.

## 13. Icons

Burst stars, bangs, arrows — comic furniture, thick and few.

## 14. Textures / Patterns

Ben-Day dots 8–20%, newsprint grain, misregistration on display lines.

## 15. Motion

Pop physics: slam entrances, burst spins (slow), hover POWs. Snappy 120–200ms.

Durations: micro 150–250ms, standard 350–500ms dot-pop entrances. Easings: punchy ease-out; slow fades forbidden.

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

- Smooth gradients (dots only!)
- Muted corporate palettes
- Thin delicate anything
- Photorealistic un-dotoned heroes
- Burst overuse (save POWs for money moments)

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F0E6;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E675C;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: Archivo Black, Anton, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Halftone -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/halftone/DESIGN.md`.*
