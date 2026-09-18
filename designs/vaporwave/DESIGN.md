---
slug: vaporwave
name: "Vaporwave"
description: "Hazy mall-at-dusk melancholy: washed sunset gradients, marble statues, and VHS grain."
category: Decades
tags: [vaporwave, aesthetic, nostalgic]
related: [retro-internet, 70s-retro, 80s-retro]
preview:
  bg: "#17102E"
  surface: "#241545"
  ink: "#F5EDFF"
  muted: "#B3A1D6"
  accent: "#FF71CE"
  accent2: "#7DF9FF"
  display: "Times New Roman, serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# Vaporwave — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the hazier, more mall-at-dusk interpretation.

## 1. Overall aesthetic

Dead-mall melancholy: gradient suns over grid oceans, marble busts, palm silhouettes, Japanese microtype, VHS grain. Nostalgia as critique as comfort. For music, fashion, art, and internet-native brands.

**Three principles:**

- Sunset gradient + grid + statue = the holy trinity
- Japanese microtype and shopping-mall signage as texture
- Melancholy pacing: slow, vast, empty on purpose

## 2. Typography

- **Display:** Times New Roman, serif
- **Body:** Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–80px Times with chrome-Japanese accents, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px ＡＥＳＴＨＥＴＩＣ labels.
- **Weights:** display 400–700 with chrome treatments; body 400; labels 500–700 with wide tracking.
- **Rules:** centered statues-and-sunset headlines with grid floors and kanji; VHS haze; never sharp corporate clarity.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#17102E` | Page ground |
| Surface | `#241545` | Cards, panels, wells |
| Ink | `#F5EDFF` | Headlines, body text |
| Muted | `#B3A1D6` | Captions, meta, secondary text |
| Accent | `#FF71CE` | Primary actions, highlights |
| Accent 2 | `#7DF9FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Mall-at-midnight pacing: vast sunset vistas, 100px+ pauses, floating windows

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Vista scroll: sunset hero with statue, floating 90s windows with content, grid-ocean interludes, midnight CTA.

## 6. Borders

Chrome keylines; grid-floor horizons; VHS frame edges

## 7. Shadows

Mall-glow: 0 0 40px pink/30; statue moonlight rims

## 8. Radius

0–8px; statues sharp, windows 90s-square

## 9. Buttons

Mall-kiosk pills: chrome gradients, serif labels; hover glows pink.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Floating windows: 90s chrome frames over vistas; statue cameos; VHS timestamps.

## 11. Navigation

Minimal over vista: ＡＥＳＴＨＥＴＩＣ tracked mark, window links, glowing CTA.

## 12. Imagery

Statues, grid suns, palms, malls, VHS stills. Pink-cyan grade, heavy grain.

## 13. Icons

Palms, suns, columns, floppy disks — mall-directory glyphs.

## 14. Textures / Patterns

VHS noise, grid floors, marble, chrome at 10–15%.

## 15. Motion

Slow drift: sun shimmer, grid crawl (20s), VHS tracking wobble (rare). Numb slowness is correct.

Durations: micro 200–300ms, standard 500–900ms slow VHS drifts. Easings: hazy ease-in-out loops; snappy motion forbidden.

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

- Bright daylight energy
- Outrun horsepower energy (see 80s-retro / synthwave); this lane is numb and hazy, never fast
- Corporate clarity
- Fast motion
- Explaining the joke
- Clean vector sterility

## 20. Quick-start snippet

```css
:root {
  --bg: #17102E;
  --surface: #241545;
  --ink: #F5EDFF;
  --muted: #B3A1D6;
  --accent: #FF71CE;
  --accent-2: #7DF9FF;
  --font-display: Times New Roman, serif;
  --font-body: Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Vaporwave -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/vaporwave/DESIGN.md`.*
