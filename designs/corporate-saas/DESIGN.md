---
slug: corporate-saas
name: "Corporate SaaS"
description: "Trust-first software marketing: gradient heroes, logos walls and ROI proof."
category: Product & SaaS
tags: [saas, b2b, trust]
related: [product-minimalism, bento-grid, card-based-ui]
preview:
  bg: "#FFFFFF"
  surface: "#F8FAFC"
  ink: "#0F172A"
  muted: "#64748B"
  accent: "#2563EB"
  accent2: "#7C3AED"
  display: "Inter, Plus Jakarta Sans, sans-serif"
  body: "Inter, system-ui, sans-serif"
---

# Corporate SaaS — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the clearer, more trustworthy interpretation.

## 1. Overall aesthetic

The trusted B2B playbook executed well: gradient hero with dashboard screenshot, customer logo wall, metric proof band, feature grid, testimonial carousel, pricing, FAQ, big CTA. Familiar because it converts. For B2B tools selling to teams with budgets.

**Three principles:**

- Proof before claims: logos, metrics, quotes above the fold-fold
- One funnel, one CTA repeated with escalating commitment
- Screenshots beat illustrations for trust

## 2. Typography

- **Display:** Inter, Plus Jakarta Sans, sans-serif
- **Body:** Inter, system-ui, sans-serif
- **Scale:** hero 32–44px Inter/Plus Jakarta trustworthy sans, H2 24–30px, H3 18–20px, body 15–16px, meta/labels 12–13px semibold.
- **Weights:** display 600–700; body 400–500; labels 600 with +0.02–0.06em tracking (never poster blacks).
- **Rules:** left-aligned benefit headlines with logos-row proof; feature triads; never edgy chaos, never ceremonial centering.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F8FAFC` | Cards, panels, wells |
| Ink | `#0F172A` | Headlines, body text |
| Muted | `#64748B` | Captions, meta, secondary text |
| Accent | `#2563EB` | Primary actions, highlights |
| Accent 2 | `#7C3AED` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Funnel rhythm: 96–128px sections, logo wall 48px, 3-col feature grids, ROI band, FAQ, final CTA

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Funnel stack: nav → hero (copy left, dashboard right) → logos → metrics → features → testimonial → pricing → FAQ → CTA → footer. Max-width 1200px.

## 6. Borders

1px solid #E2E8F0 (slate-200) on cards, 1px #F1F5F9 inner dividers; hero panels use 1px gradient hairline (90deg, #2563EB → #7C3AED at 40% opacity) via border-image or 1px wrapper padding

## 7. Shadows

Polished B2B: hero dashboard 0 24px 80px rgba(37,99,235,0.18); cards 0 2px 12px slate/8

## 8. Radius

12px cards, 8px buttons, pills for badges

## 9. Buttons

Blue primary pills/8px, 16px semibold, arrow affordance; secondary demo-link; sticky mobile CTA.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Feature cards: icon chip + title + 2-line body; testimonial cards with photo + logo; pricing tiers with highlighted middle.

## 11. Navigation

Logo + product/solutions/pricing + sign-in + Get-started CTA; announcement bar optional; sticky blur.

## 12. Imagery

Dashboard screenshots in browser frames with glow; customer photos; abstract gradient covers for OG/social.

## 13. Icons

Duotone blue icon chips (20px); check circles for lists; star ratings gold.

## 14. Textures / Patterns

Hero gradient mesh (blue→violet) at 60% + grid overlay at 6%; section grounds alternate white/slate-50.

## 15. Motion

Polished 300ms reveals; dashboard parallax tilt on mouse; logo marquee; count-up metrics.

Durations: micro 100–200ms, standard 250–350ms confident reveals. Easings: clean ease-out; no springs, no playfulness.

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

- Hiding pricing (trust killer)
- Generic AI-gradient everything
- Walls of text without proof
- More than one primary CTA
- Dark patterns in trial language

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F8FAFC;
  --ink: #0F172A;
  --muted: #64748B;
  --accent: #2563EB;
  --accent-2: #7C3AED;
  --font-display: Inter, Plus Jakarta Sans, sans-serif;
  --font-body: Inter, system-ui, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Corporate SaaS -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/corporate-saas/DESIGN.md`.*
