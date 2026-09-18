---
slug: fintech-neobank
name: "Neobank Fintech"
description: "Dark money dashboards, lime-on-black balances, and Revolut-grade premium edge."
category: Fintech
tags: [dark, premium, bold]
related: [linear-inspired, cyberpunk, corporate-saas]
preview:
  bg: "#0B0D0E"
  surface: "#15181A"
  ink: "#EDEFF0"
  muted: "#9BA1A6"
  accent: "#D4FF4F"
  accent2: "#7C5CFF"
  display: "Inter Tight, Inter, Helvetica Neue, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Neobank Fintech — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

The neobank look is money after dark: near-black grounds, oversized balance numerals, and one electric lime that means wealth in motion. Cards float like metal slabs, charts glow faintly, and every number uses tabular figures because cents matter. Premium, a little cocky, built for screenshots.

**Three principles:**

- Balance is the hero: biggest number on screen, tabular, lime-lit
- Dark is premium: black grounds, metal cards, neon sparingly
- Frictionless or death: one-tap actions, biometric confirmations, instant feedback

## 2. Typography

- **Display:** Inter Tight, Inter, Helvetica Neue, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** balance 48–72px tight, H2 24–32px, body 15–16px, mono numerals with tabular figures.
- **Weights:** 600–800 numerals; 400–500 prose; money is bold, explanations are light.
- **Rules:** left-aligned dashboards; centered auth; currency symbols smaller (0.7em) beside numerals.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0D0E` | Page ground |
| Surface | `#15181A` | Cards, panels, wells |
| Ink | `#EDEFF0` | Headlines, body text |
| Muted | `#9BA1A6` | Captions, meta, secondary text |
| Accent | `#D4FF4F` | Primary actions, highlights |
| Accent 2 | `#7C5CFF` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Lime #D4FF4F with black text for primary CTA, gains, active states; violet #7C5CFF for badges/decor only (3.77:1 — fails body text, never body copy).

## 4. Spacing

8px base; cards 20–24px; dashboard gaps 12–16px; thumb-zone CTAs 56px tall.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

App-first: greeting + balance card + quick actions row + transactions list; desktop adds right rail (cards, insights).

## 6. Borders

1px rgba(255,255,255,0.08) hairlines; metal card edges with gradient border; no heavy boxes.

## 7. Shadows

Card lift 0 12px 32px rgba(0,0,0,0.5); lime glow 0 0 24px rgba(212,255,79,0.25) on primary only.

## 8. Radius

16–24px cards; 16px buttons; pills for segmented controls and asset chips.

## 9. Buttons

Lime filled (black text) primary, 16px radius, 52–56px; secondary dark filled; haptic-feel press scale 0.98.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Dark slabs with balance, sparkline, and quick actions; virtual metal card visual with chip and number masking.

## 11. Navigation

Bottom tab bar (mobile, 5 items, lime active); desktop top bar with search + notifications + avatar.

## 12. Imagery

3D metal card renders; glowing area charts; merchant logos in rounded tiles; no stock photography.

## 13. Icons

22px rounded line icons; category glyphs in tinted tiles; lime for active, gray for idle.

## 14. Textures / Patterns

Faint grid + noise 4% on heroes; gradient mesh behind balance card; brushed-metal card sheen.

## 15. Motion

Balance count-up on load; pull-to-refresh spin; card tilt on drag; 200ms springy sheet presentations.

Durations: 150–300ms UI; count-ups 800ms ease-out. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1099px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Light airy banking pastels
- Tiny low-contrast gray numerals
- Multi-step flows for one-tap actions
- Red/green-only signals without labels
- Cluttered cross-sell banners above money

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0D0E;
  --surface: #15181A;
  --ink: #EDEFF0;
  --muted: #9BA1A6;
  --accent: #D4FF4F;
  --accent-2: #7C5CFF;
  --font-display: Inter Tight, Inter, Helvetica Neue, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Neobank Fintech -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/fintech-neobank/DESIGN.md`.*
