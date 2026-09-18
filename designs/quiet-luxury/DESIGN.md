---
slug: quiet-luxury
name: "Quiet Luxury"
description: "Restrained serif typography and whitespace for understated wealth."
category: Heritage Luxury
tags: [quiet-luxury, refined, understated]
related: [luxury-minimalism, post-brutalism, art-deco]
preview:
  bg: "#F7F5F0"
  surface: "#FFFFFF"
  ink: "#2B2926"
  muted: "#6F695F"
  accent: "#2B2926"
  accent2: "#8C6E3F"
  display: "Cormorant Garamond, EB Garamond, serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Quiet Luxury — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter interpretation.

## 1. Overall aesthetic

Stealth wealth rendered digital: perfect neutrals, exquisite serif headlines, cashmere-beige grounds, tiny tracked labels, no logos shouting. Quality legible only to those who know. For private banks, tailoring, skincare, and advisory.

**Three principles:**

- No logos-as-decoration; wordmarks whisper
- Beige, stone, ink — color is a rumor
- One perfect thing per view

## 2. Typography

- **Display:** Cormorant Garamond, EB Garamond, serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 32–48px serif, H2 24–30px, H3 19–21px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.
- **Weights:** display 400–500 serif; body 400; labels 500 with +0.12–0.2em tracking (never 700–900 poster blacks).
- **Rules:** flush-left serif headlines; centered only for single ceremonial statements; never justify body copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F5F0` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2B2926` | Headlines, body text |
| Muted | `#6F695F` | Captions, meta, secondary text |
| Accent | `#2B2926` | Primary actions, highlights |
| Accent 2 | `#8C6E3F` | Secondary moments only (thin rules, monograms, small tracked labels) — no gradients, no glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Old-money pacing: 140px+ sections, 720px measure, single objects per view

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Gallery-quiet: single-column statements, look-book imagery, private-client closers. Max-width 1100px.

## 6. Borders

Whisper rules: 1px #E5E0D5 hairlines; no boxes around content

## 7. Shadows

None — wealth doesn't elevate, it settles

## 8. Radius

0–4px; restraint in geometry

## 9. Buttons

Understated ink bars with tracked 12px labels; hover deepens slowly. Appointments over checkouts.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — framed plates with captions (image frames + 1px hairline, never boxed text). Services as quiet index rows. Never use `.ds-card` — use `.ds-plate` below.

## 11. Navigation

Whisper bar: small wordmark, three links, contact. Fades to hairline.

## 12. Imagery

Cashmere macro, stone interiors, tailored details, foggy landscapes. Desaturated warm grade.

## 13. Icons

Hairline glyphs, barely there. Monograms over pictograms.

## 14. Textures / Patterns

Cashmere, stone, paper at 3–5%. Restraint in opacity too.

## 15. Motion

Glacial: 600ms fades, slow image settles. Silence between moves.

Durations: micro 200–300ms, standard 400–600ms glacial fades, ceremonial up to 800ms. Easings: ease-out only; no springs, no mechanical linear snaps.

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

- Logos patterns or monogram wallpaper
- Gold or jewel tones (that's luxury-maximalism)
- Urgency or discounts
- Rounded playful geometry
- Explaining wealth (show, don't tell)

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F5F0;
  --surface: #FFFFFF;
  --ink: #2B2926;
  --muted: #6F695F;
  --accent: #2B2926;
  --accent-2: #8C6E3F;
  --font-display: Cormorant Garamond, EB Garamond, serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + plate in Quiet Luxury -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-plate">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/quiet-luxury/DESIGN.md`.*
