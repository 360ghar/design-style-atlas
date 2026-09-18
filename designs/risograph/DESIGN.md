---
slug: risograph
name: "Risograph"
description: "Soy-ink print charm: misregistered layers, grain and limited spot palettes."
category: Handmade & Texture
tags: [riso, print, grain]
related: [editorial-maximalism, halftone, grain-noise]
preview:
  bg: "#F4F1EA"
  surface: "#FFFFFF"
  ink: "#232323"
  muted: "#716E66"
  accent: "#FF6655"
  accent2: "#0078BF"
  display: "Archivo Black, Space Grotesk, sans-serif"
  body: "Space Grotesk, Inter, sans-serif"
---

# Risograph — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the grainier, more misregistered interpretation.

## 1. Overall aesthetic

A riso print run, interactive: fluorescent pink + teal + black layers, visible misregistration, heavy soy-grain, paper tooth. Each scroll feels pulled from the drum. For illustrators, publishers, studios, and merch brands.

**Three principles:**

- 2–3 spot inks only — limitation is the look
- Misregister on purpose: 2–4px layer offsets
- Grain everywhere: 10–15% soy noise unifies

## 2. Typography

- **Display:** Archivo Black, Space Grotesk, sans-serif
- **Body:** Space Grotesk, Inter, sans-serif
- **Scale:** hero 44–76px Archivo Black riso headlines, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px soy-ink labels.
- **Weights:** display 800–900; body 400–500; labels 700 with +0.06–0.12em tracking.
- **Rules:** flush-left headlines with visible misregistration and grain overlays; limited soy-ink palette; never slick gradients.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F1EA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#232323` | Headlines, body text |
| Muted | `#716E66` | Captions, meta, secondary text |
| Accent | `#FF6655` | Primary actions, highlights |
| Accent 2 | `#0078BF` | Secondary moments, overprints, edition stamps |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Print rhythm: 72–100px gallery sections, 24px print padding, 16–24px card gaps

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Print gallery: hero duotone poster, process bands (layers separating on scroll!), edition grid, shop footer. Max-width 1240px.

## 6. Borders

Ink keylines in spot colors; registration-mark motifs; deckled dividers

## 7. Shadows

Print depth: multiply-layer offsets (red/blue split 3px) instead of shadows

## 8. Radius

0–10px; print-sharp with soft paper warmth

## 9. Buttons

Spot-ink blocks with misregistered echo on hover; edition-style numbered CTAs.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Print plates: duotone image + ink frame + edition numeral + price stamp.

## 11. Navigation

Studio bar: mark, ink-dot palette switcher (fun!), editions link, cart CTA.

## 12. Imagery

Duotone illustrations, grainy photos in spot inks, process separations as content.

## 13. Icons

Print-shop glyphs: drums, registration marks, ink drops — spot-colored.

## 14. Textures / Patterns

Soy grain 10–15%, paper tooth, misregistration, roller marks in margins.

## 15. Motion

Print process: layers slide into registration on scroll (scrubbed, delightful); hover misregisters. Reduced-motion = registered stills.

Durations: micro 150–250ms, standard 350–550ms grain-settle prints. Easings: papery ease-out; springs forbidden.

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

- Full CMYK photorealism
- Clean vector sterility
- More than 3 inks
- Shadows instead of layer offsets
- White sterile grounds (warm paper!)

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F1EA;
  --surface: #FFFFFF;
  --ink: #232323;
  --muted: #716E66;
  --accent: #FF6655;
  --accent-2: #0078BF;
  --font-display: Archivo Black, Space Grotesk, sans-serif;
  --font-body: Space Grotesk, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Risograph -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/risograph/DESIGN.md`.*
