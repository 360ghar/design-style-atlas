---
slug: afrofuturism
name: "Afrofuturism"
description: "Cosmic gold, ancestral pattern, and interstellar Black imagination."
category: Cultural
tags: [cosmic, gold, bold]
related: [futurism, psychedelic-maximalism, graphic-maximalism]
preview:
  bg: "#120D1E"
  surface: "#1E1533"
  ink: "#F5EDD8"
  muted: "#A89BC0"
  accent: "#E8B33D"
  accent2: "#00C2A8"
  display: "Marcellus, Georgia, serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Afrofuturism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Afrofuturism is Sun Ra's space program: cosmic purples, gold-leaf geometry, mudcloth and kente pattern systems, and portraiture crowned with light. Ancient and interstellar at once — pharaoh gold meets starship chrome. Majestic, rhythmic, and unapologetically Black; every layout moves like percussion.

**Three principles:**

- Gold is sacred: metallic gold for headlines, rules, and crowns — never flat yellow
- Pattern is language: mudcloth, kente, and cosmic geometry as structure
- Portraiture is monument: people large, lit, and central

## 2. Typography

- **Display:** Marcellus, Georgia, serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 52–76px majestic serif, H2 32–42px, body 16–17px/1.6, labels 12–13px letterspaced uppercase.
- **Weights:** 400–700 display (presence through scale, not blackness); 400–500 body.
- **Rules:** centered monumental heroes; left editorial flow; gold italic accents; generous letterspacing on kickers.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#120D1E` | Page ground |
| Surface | `#1E1533` | Cards, panels, wells |
| Ink | `#F5EDD8` | Headlines, body text |
| Muted | `#A89BC0` | Captions, meta, secondary text |
| Accent | `#E8B33D` | Primary actions, highlights |
| Accent 2 | `#00C2A8` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Gold #E8B33D for headlines accents, rules, CTAs; teal accent2 for cosmic secondary and links.

## 4. Spacing

8px base; cards 28–36px; sections 96–128px; pattern bands divide chapters.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Monumental: full-bleed portrait heroes with gold frames, pattern-band dividers, symmetric ceremonial grids; max 1200px.

## 6. Borders

2px gold keylines; double gold rules; pattern-strip borders (8–16px tall) on section edges.

## 7. Shadows

Regal glow: gold 0 0 32px rgba(232,179,61,0.3); deep 0 20px 60px rgba(0,0,0,0.5); no cheap blurs.

## 8. Radius

8–16px restrained; circles for portraits and medallions; arches for shrines of content.

## 9. Buttons

Gold filled (black text) primary, 12px radius, 52px; secondary gold-outline; hover brightens with glow.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Deep-purple panels with gold keylines: portrait medallion, serif title, pattern footer strip.

## 11. Navigation

Black-purple bar with gold wordmark; links uppercase letterspaced; CTA gold pill.

## 12. Imagery

Regal portraiture with halos/crowns, spacecraft over savanna, gold-leaf textures, nebula skies.

## 13. Icons

Sun discs, ankhs, cowrie shells, stars, Adinkra-inspired geometry — gold line/fill, 20–26px.

## 14. Textures / Patterns

Mudcloth grids, kente strips, gold leaf, starfields, Ankara-inspired repeats at low opacity.

## 15. Motion

Slow majestic: 400ms rises, starfield drift 12s, gold shimmer sweeps 3s, drum-beat staggered reveals.

Durations: 300–500ms reveals; 8–14s cosmic loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Beige minimalism and timid grays
- Flat yellow passed off as gold (use metallic gradients)
- Tribal-clip-art stereotypes — use researched geometry
- Tiny cramped layouts for monumental content
- Separating heritage from future — fuse them

## 20. Quick-start snippet

```css
:root {
  --bg: #120D1E;
  --surface: #1E1533;
  --ink: #F5EDD8;
  --muted: #A89BC0;
  --accent: #E8B33D;
  --accent-2: #00C2A8;
  --font-display: Marcellus, Georgia, serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Afrofuturism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/afrofuturism/DESIGN.md`.*
