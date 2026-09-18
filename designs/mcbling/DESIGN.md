---
slug: mcbling
name: "McBling"
description: "Rhinestone pink luxe, celebrity glamour, and Y2K maximalist sparkle."
category: Maximalist
tags: [glam, pink, maximal]
related: [y2k, color-maximalism, playful-maximalism]
preview:
  bg: "#FFF0F6"
  surface: "#FFFFFF"
  ink: "#57102E"
  muted: "#9D5A7B"
  accent: "#DB006A"
  accent2: "#FFD700"
  display: "Didot, Bodoni MT, Playfair Display, Georgia, serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# McBling — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

McBling is Y2K's rich older sister: hot pink velour, rhinestone crusts, gold chains, cherry motifs, and Juicy-era script declaring everything iconic. Leopard print meets luxury monogram; flip phones and limousines. Unapologetically femme, flashy, and fun — glamour as maximalism.

**Three principles:**

- More is more: rhinestones, foil, glitter, and shine stack without shame
- Pink is power: hot pink + gold is the luxury signal
- Script declares, sans explains: display voices attitude, body stays readable

## 2. Typography

- **Display:** Didot, Bodoni MT, Playfair Display, Georgia, serif
- **Body:** Helvetica Neue, Arial, sans-serif
- **Scale:** hero 52–80px high-contrast serif or script, H2 32–40px, body 15–17px, captions 12–13px uppercase.
- **Weights:** 700–900 display drama; 400 body; script accents for single words only.
- **Rules:** centered glamorous heroes; left product text; italics and scripts for emphasis words.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF0F6` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#57102E` | Headlines, body text |
| Muted | `#9D5A7B` | Captions, meta, secondary text |
| Accent | `#DB006A` | Primary actions, highlights |
| Accent 2 | `#FFD700` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Hot pink #DB006A for CTAs and headlines; gold #FFD700 for borders, stars, premium marks.

## 4. Spacing

8px base; cards 24–32px; sections 72–104px; glitter dividers (star rows) between chapters.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Centered boutique: hero with script headline + CTA, marquee ticker, product grid, testimonial wall; max 1140px.

## 6. Borders

2px gold or pink; rhinestone dot rows as dividers; scalloped edges on badges.

## 7. Shadows

Pink glows 0 0 24px rgba(255,46,147,0.35); soft 0 12px 32px rgba(87,16,46,0.18); glitter sparkles.

## 8. Radius

16–24px cards; pills for CTAs and tags; hearts and stars as shapes.

## 9. Buttons

Hot-pink pills with white bold text + gold 2px ring; hover glow intensifies; 48–56px tall.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White cards, pink borders, gold star ratings, product shots with sparkle overlays; 'iconic' ribbon badges.

## 11. Navigation

Pink or black bar with script logo; links uppercase with sparkle hover; cart with heart badge.

## 12. Imagery

Glossy product shots, velour textures, chrome hearts, cherries, stars, limousines; heavy sparkle overlays.

## 13. Icons

Hearts, stars, cherries, lips, crowns — filled pink/gold, glossy, 20–28px.

## 14. Textures / Patterns

Glitter, velour, leopard spots (restrained), foil shine sweeps, rhinestone grids.

## 15. Motion

Sparkle twinkles (1–2s), shine sweeps on hover 400ms, marquee tickers, bouncy 300ms pops.

Durations: 200–400ms pops; 1–3s sparkle loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Muted minimalism and restraint lectures
- Corporate blue anywhere
- Tiny timid type
- Matte flatness with no shine
- Cynical anti-glam copy

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF0F6;
  --surface: #FFFFFF;
  --ink: #57102E;
  --muted: #9D5A7B;
  --accent: #DB006A;
  --accent-2: #FFD700;
  --font-display: Didot, Bodoni MT, Playfair Display, Georgia, serif;
  --font-body: Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in McBling -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/mcbling/DESIGN.md`.*
