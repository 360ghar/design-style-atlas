---
slug: claymorphism
name: "Claymorphism"
description: "Puffy 3D clay: inflated pastel forms with chunky inner highlights."
category: Soft & Dimensional
tags: [clay, 3d, puffy]
related: [glassmorphism, neumorphism, skeuomorphism]
preview:
  bg: "#FFE8F0"
  surface: "#FFF5F8"
  ink: "#4A3F55"
  muted: "#9A8FA8"
  accent: "#FF6B9D"
  accent2: "#7C5CFF"
  display: "Nunito, Quicksand, Baloo 2, sans-serif"
  body: "Nunito, Quicksand, sans-serif"
---

# Claymorphism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the puffier, more squeezable interpretation.

## 1. Overall aesthetic

Fresh modeling clay: inflated pastel blobs, chunky inner highlights, soft springy everything. Friendly to the point of squishable — dashboards feel like toys, banks feel like candy. For kids, fintech challengers, wellness, and education.

**Three principles:**

- Inflate everything: radius 24px+, shadows stacked 3-deep
- Pastel grounds with deeper-tint shadows (same hue family)
- No outlines — clay holds shape through light alone

## 2. Typography

- **Display:** Nunito, Quicksand, Baloo 2, sans-serif
- **Body:** Nunito, Quicksand, sans-serif
- **Scale:** hero 36–56px bubbly Nunito/Quicksand, H2 26–34px, H3 20–22px, body 15–17px, meta/labels 12–13px chunky.
- **Weights:** display 700–800 bubbly; body 400–600; labels 700 with +0.04–0.08em tracking.
- **Rules:** flush-left or centered puffy headlines with thick inner highlights and clay blobs; never sharp Swiss grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFE8F0` | Page ground |
| Surface | `#FFF5F8` | Cards, panels, wells |
| Ink | `#4A3F55` | Headlines, body text |
| Muted | `#9A8FA8` | Captions, meta, secondary text |
| Accent | `#FF6B9D` | Primary actions, highlights |
| Accent 2 | `#7C5CFF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Toy-box airy: 28px card padding, 32px+ gaps so puffs don't touch, 80–100px sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Toy shelf: puffy cards floating on pastel with big gaps; blob hero shapes; mascot moments. Max-width 1120px.

## 6. Borders

None — form comes from layered shadows, not outlines

## 7. Shadows

Clay stack: inset 2px 2px 4px white/80 + inset -2px -2px 6px color/20 + 8px 8px 16px color/25

## 8. Radius

24–32px puffy; fully round blobs and avatars

## 9. Buttons

Puffy pills with clay shadow stack; hover inflates (scale 1.03); press deflates to inset. Bold rounded labels.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Clay tiles: pastel fills, 28px radius, stacked shadows, 28px padding; icon blobs inset on top.

## 11. Navigation

Floating clay pill bar with puffy active states; mascot logo mark.

## 12. Imagery

3D clay renders (matching palette!), puffy illustrations, blob-masked photos.

## 13. Icons

Puffy filled icons with inner highlights; strictly rounded, strictly one set.

## 14. Textures / Patterns

Subtle clay fingerprint noise at 3%; matte finish — no gloss (that's Y2K).

## 15. Motion

Squishy springs: micro 150–250ms, standard 300–450ms squash-and-settle, cubic-bezier(0.34,1.56,0.64,1); hover inflate, press deflate; idle bob on mascots.

Easings: soft spring cubic-bezier(0.34,1.56,0.64,1) for clay wobble; harsh linear snaps forbidden.

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

- Outlines or borders on clay forms
- Dark moody grounds
- Sharp corners anywhere
- Flat minimal layouts (inflate or leave)
- Glossy Y2K highlights — clay is matte

## 20. Quick-start snippet

```css
:root {
  --bg: #FFE8F0;
  --surface: #FFF5F8;
  --ink: #4A3F55;
  --muted: #9A8FA8;
  --accent: #FF6B9D;
  --accent-2: #7C5CFF;
  --font-display: Nunito, Quicksand, Baloo 2, sans-serif;
  --font-body: Nunito, Quicksand, sans-serif;
}
.ds-btn {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font: 700 15px var(--font-display);
  padding: 14px 28px;
  border: none;
  border-radius: 999px;
  box-shadow: inset 2px 2px 4px rgba(255,255,255,.8), inset -2px -2px 6px rgba(255,107,157,.2), 8px 8px 16px rgba(255,107,157,.25);
}
.ds-card {
  background: var(--surface);
  color: var(--ink);
  border: none;
  border-radius: 28px;
  padding: 28px;
  box-shadow: inset 2px 2px 4px rgba(255,255,255,.8), inset -2px -2px 6px rgba(255,107,157,.2), 8px 8px 16px rgba(255,107,157,.25);
}
```

```html
<!-- Copy-paste starter: button + card in Claymorphism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/claymorphism/DESIGN.md`.*
