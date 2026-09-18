---
slug: gothic-victorian
name: "Gothic Victorian"
description: "Baroque blackletter, candlelit burgundy, and haunted high-luxury drama."
category: Historical
tags: [dark, ornate, luxury]
related: [art-nouveau, fashion-editorial, quiet-luxury]
preview:
  bg: "#0F0D12"
  surface: "#17141C"
  ink: "#E8E0D0"
  muted: "#97889B"
  accent: "#8E1E2F"
  accent2: "#C9A227"
  display: "Cinzel Decorative, Georgia, serif"
  body: "EB Garamond, Georgia, serif"
---

# Gothic Victorian — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Gothic Victorian is haunted luxury: blackletter initials, burgundy velvet, gold filigree, and candlelit cathedral drama. Arched windows frame content; ornamental rules divide chapters like prayer-book borders. Opulent, melancholic, theatrical — beauty with a shadow.

**Three principles:**

- Ornament is structure: filigree rules, arches, and frames organize the page
- Candlelit contrast: bone parchment on abyssal black-purple, gold as light
- Drama with discipline: theatrical heroes, restrained body settings

## 2. Typography

- **Display:** Cinzel Decorative, Georgia, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 52–72px decorative serif, H2 30–38px, body 16–18px/1.7 Garamond, inscriptions 12–13px letterspaced.
- **Weights:** 400–700; blackletter/filigree for initials and seals only; body stays readable Garamond.
- **Rules:** centered ceremonial heroes; drop-cap blackletter initials; letterspaced small-caps labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0F0D12` | Page ground |
| Surface | `#17141C` | Cards, panels, wells |
| Ink | `#E8E0D0` | Headlines, body text |
| Muted | `#97889B` | Captions, meta, secondary text |
| Accent | `#8E1E2F` | Primary actions, highlights |
| Accent 2 | `#C9A227` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Burgundy #8E1E2F for velvet fills and CTAs; gold #C9A227 for filigree, rules, luxury marks.

## 4. Spacing

8px base; cards 28–36px; sections 96–128px; filigree divider bands between acts.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Cathedral symmetry: arched hero niche, nave-like centered column, side chapels (asymmetric panels) on desktop; max 1140px.

## 6. Borders

1px gold (#C9A22755) filigree frames; double rules; arched window frames for key imagery.

## 7. Shadows

Candle-depth: 0 24px 64px rgba(0,0,0,0.6); gold inner glow on seals; vignettes on heroes.

## 8. Radius

Arches for windows and heroes; 8–12px cards; circles for seals and lockets.

## 9. Buttons

Burgundy velvet (gold 1px ring) primary with serif letterspaced labels, 52px; ghost gold-outline secondary.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Obsidian panels with gold frames: roman-numeral chapter, serif title, Garamond excerpt, filigree footer.

## 11. Navigation

Black bar with gold crest wordmark; links small-caps letterspaced; CTA burgundy pill.

## 12. Imagery

Cathedrals, candelabras, velvet, ravens, roses, moonlit architecture; chiaroscuro grading.

## 13. Icons

Keys, bats, roses, candlesticks, gargoyles-in-miniature — gold line/fill 18–24px, engraved feel.

## 14. Textures / Patterns

Damask, velvet, marble, wrought iron, fog; film grain 6% for age.

## 15. Motion

Fog drifts 12s, candle flicker 2–3s, curtain reveals 500ms, bats cross on 404s; hover gold brightens.

Durations: 300–600ms reveals; 8–14s haunting loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Bright playful pastels
- Sans-serif body copy
- Flat startup minimalism
- Cheap Halloween clip-art (keep it luxury)
- Comic horror — dread, not jokes

## 20. Quick-start snippet

```css
:root {
  --bg: #0F0D12;
  --surface: #17141C;
  --ink: #E8E0D0;
  --muted: #97889B;
  --accent: #8E1E2F;
  --accent-2: #C9A227;
  --font-display: Cinzel Decorative, Georgia, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Gothic Victorian -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/gothic-victorian/DESIGN.md`.*
