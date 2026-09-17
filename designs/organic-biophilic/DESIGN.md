---
slug: organic-biophilic
name: "Organic / Biophilic"
description: "Nature-shaped interfaces: leaf curves, earth tones and breathing whitespace."
category: Organic & Calm
tags: [organic, nature, biophilic]
related: [eco-sustainable, japandi, wabi-sabi]
preview:
  bg: "#F6F4EC"
  surface: "#FFFFFF"
  ink: "#2E3A2F"
  muted: "#5F7261"
  accent: "#3E7C4F"
  accent2: "#C2703D"
  display: "Fraunces, Georgia, serif"
  body: "Inter, Karla, sans-serif"
---

# Organic / Biophilic — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the leafier, more breathing interpretation.

## 1. Overall aesthetic

A greenhouse you can click: arched imagery, moss and clay palette, leaf-curve dividers, serif headlines about growth, dappled light. Calm and alive. For wellness, food, travel, sustainability, and hospitality.

**Three principles:**

- Arches and leaf curves beat rectangles
- Earth palette: moss, clay, bark, cream — sky blue sparingly
- Light dapples: gradients feel like sun through leaves

## 2. Typography

- **Display:** Fraunces, Georgia, serif
- **Body:** Inter, Karla, sans-serif
- **Scale:** hero 36–56px Fraunces organic serif, H2 26–34px, H3 20–22px, body 16–17px generous leading, meta/labels 12–13px leaf-green labels.
- **Weights:** display 400–600 organic; body 400; labels 500–600 with +0.08–0.15em tracking.
- **Rules:** flush-left headlines flowing around botanical imagery and curved dividers; earthy asymmetry; never hard grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F6F4EC` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2E3A2F` | Headlines, body text |
| Muted | `#5F7261` | Captions, meta, secondary text |
| Accent | `#3E7C4F` | Primary actions, highlights |
| Accent 2 | `#C2703D` | Secondary moments, gradients, glows — decorative / large text only, never body text |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Grove rhythm: breathing 96–130px sections, arched image rooms, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Garden walk: arched hero image, grove feature rows, sunlit testimonial glade, rooted footer. Max-width 1240px.

## 6. Borders

Growing lines: 1–2px moss keylines; vine dividers (SVG); deckled leaf edges

## 7. Shadows

Forest-floor soft: 0 12px 32px green-black/10; sun-dapple highlights

## 8. Radius

Leaf shapes: asymmetric (4px 28px), arches, full blobs for imagery

## 9. Buttons

Seed buttons: moss fills with cream labels, arched 16px radius; hover grows (scale 1.03) like time-lapse.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Terrarium panels: arched image tops, cream bodies, moss keylines, growth-stat rows.

## 11. Navigation

Vine bar: leaf mark, earthy links, moss CTA pill. Sun-warm on scroll.

## 12. Imagery

Botanical photography, arched portraits, macro leaves, morning light. Green-graded warmth.

## 13. Icons

Leaf, sprout, sun, drop glyphs — organic strokes, round caps.

## 14. Textures / Patterns

Leaf veins, bark, linen, dappled-light gradients at 8–15%.

## 15. Motion

Growing: sprout-up reveals, leaf-sway idles (6s), sun-drift gradients. Photosynthesis pacing — slow.

Durations: micro 200–300ms, standard 500–800ms leaf-sway loops. Easings: slow ease-in-out breathing; mechanical snaps forbidden.

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

- Sharp corporate rectangles
- Neon or synthetic hues
- Dense packed layouts (let it breathe)
- Fast snappy motion
- Plastic or chrome textures

## 20. Quick-start snippet

```css
:root {
  --bg: #F6F4EC;
  --surface: #FFFFFF;
  --ink: #2E3A2F;
  --muted: #5F7261;
  --accent: #3E7C4F;
  --accent-2: #C2703D;
  --font-display: Fraunces, Georgia, serif;
  --font-body: Inter, Karla, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Organic / Biophilic -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/organic-biophilic/DESIGN.md`.*
