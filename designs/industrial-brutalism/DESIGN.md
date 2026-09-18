---
slug: industrial-brutalism
name: "Industrial Brutalism"
description: "Factory-floor functionalism: safety yellow, stencil type and hazard-striped order."
category: Brutalist
tags: [industrial, utilitarian, stencil]
related: [brutalism, neo-brutalism, playful-brutalism]
preview:
  bg: "#2B2B2B"
  surface: "#3A3A3A"
  ink: "#F2F0EA"
  muted: "#A8A49A"
  accent: "#FFD802"
  accent2: "#FF5A1F"
  display: "Anton, Oswald, Arial Narrow, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Industrial Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the heavier, more utilitarian interpretation — never delicate.

## 1. Overall aesthetic

A control room crossed with a shipping crate: dark steel grounds, safety-yellow accents, condensed stencil headlines, riveted panels, and spec plates on every module. Built for hardware, logistics, devtools, and energy brands that want to feel heavy and reliable.

**Three principles:**

- Dark steel grounds; yellow means action or warning, nothing else
- Label everything like equipment: plates, serials, ratings
- Condensed uppercase type shouts efficiently

## 2. Typography

- **Display:** Anton, Oswald, Arial Narrow, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–80px Anton/Oswald condensed uppercase, H2 30–40px, H3 20–22px, body 15–16px, meta/labels 12–13px stencil uppercase.
- **Weights:** display 700–900 condensed; body 400–500; labels 700 stencil with +0.06–0.12em tracking.
- **Rules:** uppercase condensed headlines like safety signage, left-aligned; stenciled labels; never lowercase softness, never centered ceremony.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#2B2B2B` | Page ground |
| Surface | `#3A3A3A` | Cards, panels, wells |
| Ink | `#F2F0EA` | Headlines, body text |
| Muted | `#A8A49A` | Captions, meta, secondary text |
| Accent | `#FFD802` | Primary actions, highlights |
| Accent 2 | `#FF5A1F` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

Functional exceptions (not palette tokens): OK-status green `#7CFF6B` for LEDs/readouts only; recess black `#111` for meter wells and hazard-stripe dark bars; border grey `#555` for panel edges. Accent-2 `#FF5A1F` is reserved for heat/warning moments (over-temp, overload).

## 4. Spacing

Tight workmanlike: 16–24px panel padding, 48–72px sections, spec-plate labels on everything

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Modular equipment racks: bordered dark panels in strict rows, status LEDs, spec plates; dashboards read like control consoles. Max-width 1440px fluid.

## 6. Borders

2px solid `#555` on dark panels; hazard stripes (safety-yellow/black `#111` at 45°, 8/16px repeat) as dividers and warnings

## 7. Shadows

None; mass conveyed through dark tonal stacking (recessed wells `#111`–`#222` against surface `#3A3A3A`)

## 8. Radius

0px — machined edges only

## 9. Buttons

Yellow plates with black stencil labels and 2px light borders; secondary dark metal with yellow edge. Press states clunk (translate 2px, 100ms).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Steel panels: `#3A3A3A` fill, 2px `#555` border, recessed `#111` wells for meters, spec-plate header with mono serial (`ui-monospace, monospace`, 12–13px uppercase). Rivet dots in corners at large sizes; status LED dot (green `#7CFF6B` = nominal only, yellow = action/warning).

## 11. Navigation

Dark gantry bar with yellow wordmark plate, stencil links, and a live mono readout (`ui-monospace, monospace`) — green `#7CFF6B` ● NOMINAL is the single functional exception to the yellow-means-action rule.

## 12. Imagery

Machinery, warehouses, night infrastructure, macro metal. High contrast, warm sodium highlights, slight desaturation.

## 13. Icons

Stencil-cut pictograms, 2px strokes, yellow or bone on dark. Warning triangles and ISO-style glyphs welcome.

## 14. Textures / Patterns

Brushed metal gradients (subtle vertical), diamond plate at low opacity, rivets, hazard stripes, stencil overspray.

## 15. Motion

Mechanical: 100–150ms linear clunks, LED blinks, gauge sweeps. Servo sounds are a joke — do not add audio.

Durations: instant–150ms mechanical snaps. Easings: linear or steps(2); machinery snaps, never bounces.

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

- Light airy layouts or pastel color
- Rounded friendly anything
- Thin delicate typography
- Decorative animation or bounce easing
- Using yellow for passive decoration — it must mean something

## 20. Quick-start snippet

```css
:root {
  --bg: #2B2B2B;
  --surface: #3A3A3A;
  --ink: #F2F0EA;
  --muted: #A8A49A;
  --accent: #FFD802;
  --accent-2: #FF5A1F;
  --font-display: Anton, Oswald, Arial Narrow, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Industrial Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/industrial-brutalism/DESIGN.md`.*
