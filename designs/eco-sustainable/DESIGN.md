---
slug: eco-sustainable
name: "Eco / Sustainable"
description: "Planet-first design: recycled textures, impact counters and honest green."
category: Organic & Calm
tags: [eco, sustainability, impact]
related: [organic-biophilic, japandi, wabi-sabi]
preview:
  bg: "#F4F5EF"
  surface: "#FFFFFF"
  ink: "#22301F"
  muted: "#556B53"
  accent: "#2E7D32"
  accent2: "#F2B705"
  display: "Fraunces, Inter Tight, sans-serif"
  body: "Inter, Karla, sans-serif"
---

# Eco / Sustainable — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the earthier, more honest interpretation.

## 1. Overall aesthetic

Patagonia-grade honesty: kraft and cream grounds, forest-green ink, impact counters (trees planted, CO₂ saved), certification stamps, recycled-paper texture. Claims backed by receipts. For sustainable brands, food, fashion resale, and energy.

**Three principles:**

- Show receipts: counters, certificates, supply-chain maps
- Kraft + forest + sun-yellow; green must be earned, not washed
- Stamps and tickets make virtue tangible

## 2. Typography

- **Display:** Fraunces, Inter Tight, sans-serif
- **Body:** Inter, Karla, sans-serif
- **Scale:** hero 36–56px Fraunces/Inter Tight rooted headlines, H2 26–34px, H3 20px, body 16–17px, meta/labels 12–13px recycled-paper labels.
- **Weights:** display 500–700; body 400–500; labels 600 with +0.08–0.12em tracking.
- **Rules:** left-aligned headlines with seed-paper textures and impact stats; kraft honesty; never glossy excess.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F5EF` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#22301F` | Headlines, body text |
| Muted | `#556B53` | Captions, meta, secondary text |
| Accent | `#2E7D32` | Primary actions, highlights |
| Accent 2 | `#F2B705` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Impact rhythm: counter bands, 88–110px sections, 24px card padding, receipt-style footprints

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Impact funnel: mission hero with counter, proof bands (certs), product with footprint labels, journal, pledge CTA. Max-width 1200px.

## 6. Borders

Recycled edges: 1–2px kraft keylines; stamp frames; dashed impact-ticket dividers

## 7. Shadows

Honest-soft: 0 8px 24px rgba(34,48,31,0.08); stamp ink offsets on badges

## 8. Radius

12–16px honest rounding; stamp badges round

## 9. Buttons

Forest `#2E7D32` fills with cream `#F4F5EF` labels (4.68:1); sun-yellow `#F2B705` fills with Ink `#22301F` labels (7.65:1) — cream on yellow is 1.7:1; stamped hover (ink edge appears).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Footprint cards: product + CO₂/origin tickets with dashed tear edges; cert stamp rows.

## 11. Navigation

Mission bar: leaf mark, impact counter pill, shop/learn links, pledge CTA.

## 12. Imagery

Hands in soil, forests, factories with daylight, package-unboxing in kraft. Honest, unretouched warmth.

## 13. Icons

Leaf, recycle, sun, drop, footprint glyphs — honest line style.

## 14. Textures / Patterns

Recycled kraft grain 8–12%, seed-paper flecks, stamp ink, twine dividers.

## 15. Motion

Counting-up impact numbers, growing progress rings, gentle leaf drift. Earnest 300ms ease-outs.

Durations: micro 150–250ms, standard 400–600ms grow-in reveals. Easings: organic ease-out; bouncy springs forbidden.

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

- Greenwashing gradients without proof
- Slick luxury finishes
- Hiding supply-chain info
- Vague eco-claims (quantify!)
- Plastic-gloss textures

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F5EF;
  --surface: #FFFFFF;
  --ink: #22301F;
  --muted: #556B53;
  --accent: #2E7D32;
  --accent-2: #F2B705;
  --font-display: Fraunces, Inter Tight, sans-serif;
  --font-body: Inter, Karla, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Eco / Sustainable -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/eco-sustainable/DESIGN.md`.*
