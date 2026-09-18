---
slug: cottagecore
name: "Cottagecore"
description: "Gingham warmth, wildflower palettes, and slow romantic rural craft."
category: Cultural
tags: [rustic, romantic, soft]
related: [organic-biophilic, scrapbook, hand-drawn]
preview:
  bg: "#FAF6EE"
  surface: "#FFFFFF"
  ink: "#3E3A2E"
  muted: "#7C7466"
  accent: "#AA5A3A"
  accent2: "#5D7852"
  display: "Cormorant Garamond, Georgia, serif"
  body: "Georgia, Times New Roman, serif"
---

# Cottagecore — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Cottagecore is a slow Sunday rendered as UI: gingham and calico, pressed wildflowers, handwritten recipe cards, and terracotta warmth. Scalloped edges, stitched borders, and sunlit kitchen photography. Romantic, gentle, handmade — the internet as a farmhouse table.

**Three principles:**

- Handmade over manufactured: stitches, scallops, deckles, honest imperfection
- Garden palette: cream, terracotta, sage, wildflower accents
- Slow pacing: long reads, seasonal rhythms, no urgency

## 2. Typography

- **Display:** Cormorant Garamond, Georgia, serif
- **Body:** Georgia, Times New Roman, serif
- **Scale:** hero 44–60px Cormorant, H2 28–34px, body 16–18px/1.7, handwritten accents 20–24px.
- **Weights:** 500–600 display; 400 body; script/handwriting for single accent words.
- **Rules:** centered romantic heroes; left journal prose; italic serif for quotes and recipes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAF6EE` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#3E3A2E` | Headlines, body text |
| Muted | `#7C7466` | Captions, meta, secondary text |
| Accent | `#AA5A3A` | Primary actions, highlights |
| Accent 2 | `#5D7852` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Terracotta #AA5A3A CTAs and headlines; sage #5D7852 secondary, borders, and growth metaphors.

## 4. Spacing

8px base; cards 24–32px; sections 80–112px; doily/scallop dividers between chapters.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Journal flow: hero with arched window photo, recipe-card grids, seasonal bands; max 1080px.

## 6. Borders

Dashed stitch borders (2px dashed terracotta); scalloped edges via radial-gradient; 1px hairlines for letters.

## 7. Shadows

Sun-soft: 0 12px 32px rgba(62,58,46,0.12); pressed-flower flatness elsewhere.

## 8. Radius

Arches for windows/hero images; 12–20px cards; scallops and circles for stickers.

## 9. Buttons

Terracotta 999px or stitched rectangles, 48px; hover darkens + tiny flower sprout; secondary sage outline.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Recipe cards: photo top with scallop edge, serif title, time/difficulty meta, sage tag row.

## 11. Navigation

Cream bar with serif wordmark + flower mark; links with vine-underline hover; basket CTA.

## 12. Imagery

Sunlit kitchens, gardens, wildflowers, linen, pottery; film-like warmth, soft grain.

## 13. Icons

Flower, bee, mushroom, teapot, envelope — hand-drawn 2px terracotta/sage line icons, 20–24px.

## 14. Textures / Patterns

Gingham, calico florals, linen weave, kraft paper, pressed flowers at 8–15%.

## 15. Motion

Gentle: 250ms sways, petals drift 9s, bee path loops; hover blooms (scale 1.03 + shadow).

Durations: 200–350ms UI; 8–12s ambient drifts. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Neon, chrome, or cyber anything
- Sharp brutalist geometry
- Urgency copy and countdown timers
- Sterile pure-white minimalism
- Plastic gloss and 3D renders

## 20. Quick-start snippet

```css
:root {
  --bg: #FAF6EE;
  --surface: #FFFFFF;
  --ink: #3E3A2E;
  --muted: #7C7466;
  --accent: #AA5A3A;
  --accent-2: #5D7852;
  --font-display: Cormorant Garamond, Georgia, serif;
  --font-body: Georgia, Times New Roman, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Cottagecore -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/cottagecore/DESIGN.md`.*
