---
slug: polaris-commerce
name: "Polaris Commerce"
description: "Trust-building product grids, honest pricing, and Shopify-grade checkout polish."
category: E-commerce
tags: [commerce, clean, trustworthy]
related: [corporate-saas, card-based-ui, product-minimalism]
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F7"
  ink: "#202223"
  muted: "#6D7175"
  accent: "#008060"
  accent2: "#FFC453"
  display: "Shopify Sans, Inter, Helvetica Neue, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Polaris Commerce — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Shopify Polaris is commerce you can trust: honest price typography, forgiving forms, product cards with generous white space, and a checkout so calm it converts. Green means go and money; everything else gets out of the merchant's way. Boring in the best way — every element earns its place by selling.

**Three principles:**

- Trust is the UI: real prices, real reviews, real shipping info up front
- Merchant empathy: forgiving forms, plain language, no jargon
- Green is money: reserved for price, CTA, and success

## 2. Typography

- **Display:** Shopify Sans, Inter, Helvetica Neue, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** product titles 20–28px, price 20–24px semibold, body 15–16px, microcopy 13–14px.
- **Weights:** 500–700 for price and CTA; 400 for descriptions; clarity over character.
- **Rules:** left-aligned; prices never truncated; sale prices pair red strikethrough with green current.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F6F6F7` | Cards, panels, wells |
| Ink | `#202223` | Headlines, body text |
| Muted | `#6D7175` | Captions, meta, secondary text |
| Accent | `#008060` | Primary actions, highlights |
| Accent 2 | `#FFC453` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Green #008060 for CTAs, price highlights, success; gold accent2 for stars and badges only.

## 4. Spacing

20px base (Polaris space-5); product grid gaps 16–24px; page max 1200px; checkout single column 560px.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Product grid 2–4 cols with sticky filters; PDP: gallery left, buy panel right sticky; cart drawer slides from right.

## 6. Borders

1px #20222315 card borders; 8px radius; focused inputs 2px green outline.

## 7. Shadows

Card rest 0 1px 4px rgba(0,0,0,0.08); hover lifts to 0 8px 24px; drawer 0 0 40px rgba(0,0,0,0.16).

## 8. Radius

8px cards and buttons; 4px inputs; pills for badges and swatches rings.

## 9. Buttons

8px radius, 44–52px tall, green filled primary with white semibold; secondary white with border; full-width on mobile.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White product cards: 1:1 imagery, 12px padding, title 15px, price row, star rating, quick-add on hover.

## 11. Navigation

Announcement bar (gold or black), logo left, search center, cart right with count badge; category row below.

## 12. Imagery

1:1 product shots on light gray; lifestyle second image on hover; zoom on PDP; badges (Sale/Bestseller) top-left.

## 13. Icons

Rounded outline 20px: cart, search, star (filled gold), truck, shield-check for trust rows.

## 14. Textures / Patterns

None — clean studio backgrounds; subtle paper texture only in brand storytelling sections.

## 15. Motion

200ms ease-out hovers; image crossfade on hover; drawer slides 250ms; cart badge pops on add.

Durations: 150–300ms; checkout steps instant. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Dark-pattern urgency (fake countdowns, stock lies)
- Tiny low-contrast prices
- Cluttered mega-menus over search
- Hiding shipping costs until checkout
- Auto-playing video with sound

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F6F6F7;
  --ink: #202223;
  --muted: #6D7175;
  --accent: #008060;
  --accent-2: #FFC453;
  --font-display: Shopify Sans, Inter, Helvetica Neue, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Polaris Commerce -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/polaris-commerce/DESIGN.md`.*
