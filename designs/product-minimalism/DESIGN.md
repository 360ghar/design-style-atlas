---
slug: product-minimalism
name: "Product Minimalism"
description: "Linear-grade restraint: quiet chrome, one blue accent and keyboard-first density."
category: Minimal
tags: [minimal, saas, product]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#F7F8FA"
  surface: "#FFFFFF"
  ink: "#23272F"
  muted: "#6B7280"
  accent: "#4D7CFE"
  accent2: "#7C5CFF"
  display: "Inter, SF Pro Text, Helvetica Neue, sans-serif"
  body: "Inter, SF Pro Text, Helvetica Neue, sans-serif"
---

# Product Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more confident interpretation.

## 1. Overall aesthetic

The modern developer-tool aesthetic: light gray canvas, white command surfaces, 13px Inter, one confident blue, and hairline structure everywhere. Nothing shouts; everything is findable. Keyboard shortcuts, command palettes, and empty states carry the personality.

**Three principles:**

- Density with clarity: small type, generous alignment, strict hierarchy
- One accent (blue/violet) reserved for actions and focus
- Chrome recedes; content and commands lead

## 2. Typography

- **Display:** Inter, SF Pro Text, Helvetica Neue, sans-serif
- **Body:** Inter, SF Pro Text, Helvetica Neue, sans-serif
- **Scale:** hero 28–36px Inter tight, H2 22–26px, H3 17–19px, body 14–16px, meta/labels 12–13px medium gray.
- **Weights:** display 500–600 Inter; body 400–500; labels 500–600 with no wide tracking (never poster blacks).
- **Rules:** left-aligned quiet-confidence headlines in a narrow product column; never centered marketing monuments, never justified copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F8FA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#23272F` | Headlines, body text |
| Muted | `#6B7280` | Captions, meta, secondary text |
| Accent | `#4D7CFE` | Primary actions, highlights |
| Accent 2 | `#7C5CFF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

4px base; dense 12–16px component padding; 24px panel gaps; 13–14px UI text for density

Use a 4px base unit (8px grid for marketing sections). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

App shell: 240px sidebar + main panel + optional inspector; marketing pages use 1200px center column with product screenshot bands.

## 6. Borders

1px solid #E5E7EB on surfaces; 1px #D1D5DB on inputs; inset dividers #EEF0F3

## 7. Shadows

Subtle product elevation: 0 1px 2px rgba(35,39,47,0.05), popovers 0 8px 24px rgba(35,39,47,0.10)

## 8. Radius

8px panels, 6px inputs and buttons

## 9. Buttons

36px blue primary (6px radius, 14px medium); ghost and outline secondaries; full keyboard focus rings (2px blue offset). Sizes xs/sm/md for density.

All buttons: 36px visual height on desktop, expanding to 44px minimum touch target on touch via padding; visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White panels with 1px borders and 8px radius; 16–20px padding; header row with title + actions; hover border-darken only.

## 11. Navigation

Sidebar with workspace switcher, ⌘K hint, sectioned 13px items with icons and counts; top bar with breadcrumbs + search + avatar.

## 12. Imagery

Product screenshots in browser frames with soft shadows; abstract pastel gradient covers for social/empty states; avatar stacks.

## 13. Icons

16px 1.75px-stroke set (Lucide-style), gray-500 default, blue-600 active. Kbd chips in mono for shortcuts.

## 14. Textures / Patterns

Near-flat; faint dot grid or gradient mesh only in marketing heroes at low opacity.

## 15. Motion

Fast and functional: 100–150ms ease-out; command menu scales 0.98→1; skeleton shimmer on loads; no decorative animation.

Durations: micro 100–150ms, standard 150–200ms crisp fades. Easings: ease-out; no springs, no ceremonial spectacle.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, restrained display type (max 36px per Typography).
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Marketing gradients inside the product UI
- More than two accent hues
- Large display type in app chrome
- Heavy shadows or 3D decoration
- Hiding keyboard shortcuts — surface them

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F8FA;
  --surface: #FFFFFF;
  --ink: #23272F;
  --muted: #6B7280;
  --accent: #4D7CFE;
  --accent-2: #7C5CFF;
  --font-display: Inter, SF Pro Text, Helvetica Neue, sans-serif;
  --font-body: Inter, SF Pro Text, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Product Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/product-minimalism/DESIGN.md`.*
