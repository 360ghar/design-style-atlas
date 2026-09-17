---
slug: linear-inspired
name: "Linear-Inspired"
description: "Ultra-minimal precision: dark restraint, purple glow and keyboard-first craft."
category: Product & SaaS
tags: [linear, dark, craft]
related: [bento-grid, card-based-ui, corporate-saas]
preview:
  bg: "#08090A"
  surface: "#101214"
  ink: "#F7F8F8"
  muted: "#8A8F98"
  accent: "#5E6AD2"
  accent2: "#8E8AFF"
  display: "Inter, SF Pro Display, sans-serif"
  body: "Inter, SF Pro Text, sans-serif"
---

# Linear-Inspired — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the darker, more keyboard-driven interpretation.

## 1. Overall aesthetic

Dark-room precision: near-black canvas, 13px Inter, hairline white/8 borders, one violet accent with aura glows, and keyboard shortcuts everywhere. Calm, fast, and obsessive. For devtools, AI products, and productivity tools that sell craft.

**Three principles:**

- Dark is the product: design dark-first, light rarely
- Violet glow marks what matters — ration it
- Shortcuts and ⌘K are navigation, not extras

## 2. Typography

- **Display:** Inter, SF Pro Display, sans-serif
- **Body:** Inter, SF Pro Text, sans-serif
- **Scale:** hero 30–44px Inter tight on dark, H2 24–30px, H3 18–20px, body 14–16px, meta/labels 12–13px ⌘K labels.
- **Weights:** display 500–600; body 400–500; labels 500 with subtle tracking (never poster blacks).
- **Rules:** left-aligned cycle-velocity headlines with glow keycaps and issue-row proof; never light playful layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#08090A` | Page ground |
| Surface | `#101214` | Cards, panels, wells |
| Ink | `#F7F8F8` | Headlines, body text |
| Muted | `#8A8F98` | Captions, meta, secondary text |
| Accent | `#5E6AD2` | Primary actions, highlights |
| Accent 2 | `#8E8AFF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Tight craft: 13px UI text, 16px panel padding, 96px marketing sections, 8px base grid (4px dense product UI)

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

App shell (sidebar + cycles + issue panes) for product; marketing = centered hero with aura + screenshot + feature grid. Max-width 1100px.

## 6. Borders

1px rgba(255,255,255,0.08) hairlines; gradient edge-highlights on hero panels

## 7. Shadows

Purple aura: 0 0 80px rgba(94,106,210,0.25) on heroes; panels 0 8px 30px black/50

## 8. Radius

8px panels, 6px buttons and inputs

## 9. Buttons

Violet primary (6px, 13px medium); ghost secondaries; kbd hints inside buttons where apt. Focus rings violet.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Dark panels with white/8 borders; feature cards pair icon + one-liner; keyboard-first empty states.

## 11. Navigation

Minimal dark bar: logo + product/changelog/customers + sign-in + CTA; ⌘K button in product chrome.

## 12. Imagery

Dark product screenshots with violet aura; gradient grid backdrops; customer logos in gray monochrome.

## 13. Icons

15px 1.75px-stroke set, gray-400; violet active; kbd chips for shortcuts.

## 14. Textures / Patterns

Gradient grid + noise on dark; aura meshes behind heroes; vignette to focus center.

## 15. Motion

Fast 100–150ms UI; hero aura breathes (8s); page transitions fade-slide 200ms; skeleton shimmer violet-gray.

Durations: micro 100–200ms ⌘K snaps, standard 300ms glow reveals. Easings: crisp ease-out; springs forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, oversized display type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Light-mode-first thinking
- Multiple bright accents
- Heavy marketing gradients
- Hiding shortcuts
- Large display type in the app UI

## 20. Quick-start snippet

```css
:root {
  --bg: #08090A;
  --surface: #101214;
  --ink: #F7F8F8;
  --muted: #8A8F98;
  --accent: #5E6AD2;
  --accent-2: #8E8AFF;
  --font-display: Inter, SF Pro Display, sans-serif;
  --font-body: Inter, SF Pro Text, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Linear-Inspired -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/linear-inspired/DESIGN.md`.*
