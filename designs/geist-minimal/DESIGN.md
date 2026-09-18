---
slug: geist-minimal
name: "Geist Minimal"
description: "Razor-thin developer minimalism with Vercel-grade restraint and mono precision."
category: Minimalist
tags: [minimal, developer, monochrome]
related: [ultra-minimalism, linear-inspired, functional-minimalism]
preview:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  ink: "#171717"
  muted: "#666666"
  accent: "#006EEE"
  accent2: "#7928CA"
  display: "Geist Sans, Inter, Helvetica Neue, sans-serif"
  body: "Geist Sans, Inter, Helvetica Neue, Arial, sans-serif"
---

# Geist Minimal — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Vercel's Geist is minimalism with a pulse: near-monochrome surfaces, one electric blue, hairline dividers, and monospace details that whisper 'built by engineers'. Generous whitespace, tiny precise labels, and gradients used like laser beams — rare, diagonal, unforgettable. The fastest-looking design on the internet.

**Three principles:**

- Monochrome first: black, white, grays — color is an event
- Hairlines, not boxes: 1px dividers create structure without weight
- Mono for metadata: labels, badges, and footnotes in monospace uppercase

## 2. Typography

- **Display:** Geist Sans, Inter, Helvetica Neue, sans-serif
- **Body:** Geist Sans, Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–80px tight tracking (-0.04em), H2 32px, body 16px/1.6, mono micro-labels 12–13px uppercase.
- **Weights:** 500–700 display with tight tracking; 400 body; mono 400–500.
- **Rules:** centered heroes; left docs; generous line-length caps (65ch); tracking tightens as size grows.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#FAFAFA` | Cards, panels, wells |
| Ink | `#171717` | Headlines, body text |
| Muted | `#666666` | Captions, meta, secondary text |
| Accent | `#006EEE` | Primary actions, highlights |
| Accent 2 | `#7928CA` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Blue #006EEE for primary actions and links; conic-gradient beams for hero moments only.

## 4. Spacing

8px base; heroes 120–160px vertical; cards 24px; docs measure 700px; whitespace is the brand.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Centered hero + logo cloud + 3-up features + code block; docs with left sidebar; max 1024px (1200 heroes).

## 6. Borders

1px #17171710 hairlines; gradient border beams (conic) on featured cards; dots grid for hero grounds.

## 7. Shadows

Nearly none: 0 0 0 + subtle 0 8px 30px rgba(0,0,0,0.06) on floating panels; glow only on gradient beams.

## 8. Radius

8–12px cards; 6–8px buttons; pills for badges and status.

## 9. Buttons

8px radius, black primary (white text) or blue; 40px height; hover inverts or brightens 150ms; ⌘K hint chips.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Hairline-bordered white cards, 12px radius, 24px padding; hover border darkens; featured card gets gradient beam top edge.

## 11. Navigation

56–64px hairline-bottom bar; logo left, links center, deploy CTA right; docs sidebar with mono section labels.

## 12. Imagery

Dark code blocks with traffic dots; diagonal gradient beams; monochrome product screenshots; triangle motif sparingly.

## 13. Icons

16–20px 1.5px-stroke line icons (triangle, lightning, globe); mono text used as iconography.

## 14. Textures / Patterns

Dot grids and line grids at 5–8%; conic gradient beams; no photography textures.

## 15. Motion

150ms fades and 200ms rises on scroll; beam shimmer 3s loop; counters tick; restraint everywhere.

Durations: 100–250ms UI; 2–4s ambient loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Heavy shadows and 3D bevels
- Rainbow multi-accent palettes
- Rounded-3xl playful blobs
- Marketing fluff above the fold — show the product
- Custom fonts when system/geist stack works

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #FAFAFA;
  --ink: #171717;
  --muted: #666666;
  --accent: #006EEE;
  --accent-2: #7928CA;
  --font-display: Geist Sans, Inter, Helvetica Neue, sans-serif;
  --font-body: Geist Sans, Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Geist Minimal -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/geist-minimal/DESIGN.md`.*
