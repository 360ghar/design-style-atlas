---
slug: ultra-minimalism
name: "Ultra-Minimalism"
description: "Extreme reduction: tiny type, vast whitespace and almost no visible interface."
category: Minimal
tags: [minimal, reduction, quiet]
related: [minimalism, swiss-design, japanese-minimalism]
preview:
  bg: "#FFFFFF"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#A3A3A3"
  accent: "#111111"
  accent2: "#0000EE"
  display: "Helvetica Neue, Inter, Arial, sans-serif"
  body: "Helvetica Neue, Inter, Arial, sans-serif"
---

# Ultra-Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter interpretation.

## 1. Overall aesthetic

Ultra-minimalism is minimalism taken to its limit: 13px type floating in oceans of white, hairline rules, and interfaces that seem embarrassed to exist. It suits portfolios, essays, and tools whose content is the entire point. Every pixel on screen should feel inevitable.

**Three principles:**

- If it can be removed without losing meaning, remove it
- Type size stays small; presence comes from position, not scale
- Gray text and hairlines before black text and boxes

## 2. Typography

- **Display:** Helvetica Neue, Inter, Arial, sans-serif
- **Body:** Helvetica Neue, Inter, Arial, sans-serif
- **Scale:** hero 20–28px max (presence from position, not scale), H2 17–20px, H3 15–16px, body 13–14px, meta/labels 12–13px plain.
- **Weights:** display 400–500; body 400; labels 400–500 with no wide tracking (never 700–900, never poster scale).
- **Rules:** left-aligned small type in a narrow centered column; never justify, never set large hero display type — centered micro-labels allowed only for gallery/art captions like the preview.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#A3A3A3` | Captions, meta, secondary text |
| Accent | `#111111` | Primary actions, highlights |
| Accent 2 | `#0000EE` | Text links only — sole color exception |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Base unit 4px; section padding 140–200px; paragraphs capped at 60ch; navigation floats in vast margins

Never let text touch a container edge; whitespace is separation — no cards, no wells.

## 5. Layout / Grid

Narrow centered column (640–760px) with enormous vertical rhythm. No grids, no sidebars, no cards — a vertical sequence of text blocks and hairline dividers.

## 6. Borders

Hairlines only: 1px solid #EDEDED to separate, never to decorate

## 7. Shadows

Zero shadows anywhere. Depth is forbidden; separation comes from space and hairlines

## 8. Radius

0px — sharp or borderless; pills never

## 9. Buttons

Text links, not buttons: 13–14px underlined or plain, turning solid on hover. A primary action may be a 1px-bordered rectangle, 40px tall, sharp corners.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards. Content blocks separated by 64px+ of space and occasionally a full-width hairline.

## 11. Navigation

A single row of tiny 12–13px links, often just a wordmark and 2–3 items. Fixed minimal footer with copyright and one email link.

## 12. Imagery

Almost none; when used, small and centered with wide margins. Black-and-white or heavily muted imagery only.

## 13. Icons

Avoid icons entirely. If unavoidable, 14px 1px-stroke glyphs in light gray.

## 14. Textures / Patterns

Pure flat white. No paper grain, no gradients — sterility is the point.

## 15. Motion

Nearly static. 200ms opacity fades at most; content should feel printed, not animated.

Durations: 200ms opacity fades at most; content feels printed, not animated. Easings: ease-out only on opacity; no springs, no slides, no ceremonial moves.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets.
- Tablet (768–1100px): same single narrow column, condensed nav, preserved section order — no grids.
- Desktop (1100px+): same single narrow column (640–760px), generous whitespace — no grids, no oversized type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Cards, shadows, rounded corners, or badges
- Hero sections or large display type
- Color — one blue link color is the entire palette
- Marketing patterns like logos walls or feature grids
- Bold weights above 500 for body content

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #A3A3A3;
  --accent: #111111;
  --accent-2: #0000EE;
  --font-display: Helvetica Neue, Inter, Arial, sans-serif;
  --font-body: Helvetica Neue, Inter, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: link + divider in Ultra-Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<hr class="ds-rule">
<p class="ds-meta">Caption or meta in 12px muted</p>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/ultra-minimalism/DESIGN.md`.*
