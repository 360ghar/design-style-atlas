---
slug: stripe-inspired
name: "Stripe-Inspired"
description: "Gradient precision: airy pastels, developer clarity and weight-300 elegance."
category: Product & SaaS
tags: [stripe, gradient, developer]
related: [terminal, bento-grid, card-based-ui]
preview:
  bg: "#FFFFFF"
  surface: "#F6F9FC"
  ink: "#0A2540"
  muted: "#62748A"
  accent: "#635BFF"
  accent2: "#00D4FF"
  display: "Sohne, Inter, Helvetica Neue, sans-serif"
  body: "Sohne, Inter, Helvetica Neue, sans-serif"
---

# Stripe-Inspired — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more precise, gradient-confident interpretation.

## 1. Overall aesthetic

Weight-300 elegance over aurora color: pastel gradient bands sliced diagonally across white, navy-ink text (#0A2540), code samples beside prose, and docs that read like product. For payments, APIs, fintech, and developer-first brands.

**Three principles:**

- Aurora bands carry the color; content sits on white
- Navy ink (#0A2540), never pure black
- Code beside prose — developers decide here

## 2. Typography

- **Display:** Sohne, Inter, Helvetica Neue, sans-serif
- **Body:** Sohne, Inter, Helvetica Neue, sans-serif
- **Scale:** hero 36–52px Sohne/Inter gradient headlines, H2 26–34px, H3 19–21px, body 15–16px, meta/labels 12–13px medium.
- **Weights:** display 600–700; body 400–500; labels 500–600 with slight tracking.
- **Rules:** flush-left gradient headlines over diagonal mesh fields; code-window proof; never brutalist rawness, never kitsch.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F6F9FC` | Cards, panels, wells |
| Ink | `#0A2540` | Headlines, body text |
| Muted | `#62748A` | Captions, meta, secondary text |
| Accent | `#635BFF` | Primary actions, highlights |
| Accent 2 | `#00D4FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Airy precision: 128px hero, 96px sections, 24px card padding, 18px body at 1.6

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

1080px max-width, 12-col grid, 24px gutters (16px mobile); hero 2-col (headline 1.1fr + code window 0.9fr) under skewed bands; stack: logo wall → 60/40 code-feature splits → metrics band → docs CTA.

## 6. Borders

Hairlines #E6EBF1; gradient top-border on hero; code blocks bordered dark

## 7. Shadows

Stripe-lift: 0 6px 12px -2px rgba(10,37,64,0.08), 0 3px 7px -3px rgba(10,37,64,0.1); colored glows on hero

## 8. Radius

8px cards and buttons; pills for version badges

## 9. Buttons

Blurple (#635BFF) pills, white 15px medium; hover lifts + darkens; secondary as navy text link with arrow.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White, hairline borders, Stripe-lift shadows; code cards dark navy (#0A2540) with pastel syntax.

## 11. Navigation

Transparent over aurora → white blur on scroll; product links + developers + pricing + sign-in + CTA pill.

## 12. Imagery

Aurora meshes, 3D card renders, globe visualizations, code-window screenshots.

## 13. Icons

Minimal 20px slate glyphs; product icons as gradient tiles.

## 14. Textures / Patterns

Aurora mesh gradients + faint grid; angled clip dividers between bands.

## 15. Motion

Aurora slow-drift (20s), 300ms card lifts, code typing in hero window, scroll-triggered band reveals.

Durations: micro 100–200ms, standard 300–450ms gradient-drift reveals. Easings: polished ease-out; springs forbidden.

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

- Pure black text
- Heavy shadows or dark sections
- Hiding docs behind marketing
- Generic purple-blue SaaS gradient without the diagonal bands
- Small low-contrast gray text

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F6F9FC;
  --ink: #0A2540;
  --muted: #62748A;
  --accent: #635BFF;
  --accent-2: #00D4FF;
  --font-display: Sohne, Inter, Helvetica Neue, sans-serif;
  --font-body: Sohne, Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Stripe-Inspired -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/stripe-inspired/DESIGN.md`.*
