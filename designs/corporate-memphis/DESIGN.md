---
slug: corporate-memphis
name: "Corporate Memphis"
description: "Flat friendly vector people: big tech's geometric humanism, polished."
category: Handmade & Texture
tags: [flat, big-tech, friendly]
related: [memphis, illustration-led, corporate-saas]
preview:
  bg: "#FFFFFF"
  surface: "#F4F6FB"
  ink: "#1E2A3B"
  muted: "#627288"
  accent: "#2962FE"
  accent2: "#FF6B9D"
  display: "Inter, Plus Jakarta Sans, sans-serif"
  body: "Inter, system-ui, sans-serif"
---

# Corporate Memphis — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the friendlier, more blob-people interpretation — never edge into real memphis chaos.

## 1. Overall aesthetic

Big-tech humanism, executed with taste: flat geometric people with elongated limbs, purple-blue-coral palette, blob grounds, airy grids. Ubiquitous because it tests well — differentiate through copy and motion. For SaaS, fintech, HR, and health products.

**Three principles:**

- People in every hero: joy, teamwork, thumbs-up energy
- Purple-blue-coral palette; skin tones diverse and flat
- Blobs and dots organize; grids convert

## 2. Typography

- **Display:** Inter, Plus Jakarta Sans, sans-serif
- **Body:** Inter, system-ui, sans-serif
- **Scale:** hero 32–48px Inter/Plus Jakarta friendly sans, H2 24–32px, H3 19–21px, body 15–16px, meta/labels 12–13px medium.
- **Weights:** display 600–700 friendly; body 400–500; labels 600 with slight tracking.
- **Rules:** left-aligned friendly headlines beside flat spot illustrations; diverse-shape vignettes; never edgy, never dense.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F4F6FB` | Cards, panels, wells |
| Ink | `#1E2A3B` | Headlines, body text |
| Muted | `#627288` | Captions, meta, secondary text |
| Accent | `#2962FE` | Primary actions, highlights |
| Accent 2 | `#FF6B9D` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

SaaS-friendly: 88–110px sections, alternating white/tint grounds, 28px card padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Friendly funnel: hero (copy + people scene), logos, feature grid with spots, metric band, testimonial, CTA with waving group. Max-width 1200px.

## 6. Borders

None or hairline slate-200; color-block shapes instead of lines

## 7. Shadows

Friendly-soft: 0 8px 28px rgba(30,42,59,0.08); blob grounds with no shadow

## 8. Radius

16px cards, pill buttons, blob image masks

## 9. Buttons

Blue pills, white 15px semibold; hover lifts; secondary white-bordered. Rounded and reassuring.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White 16px cards with spot illustrations, icon chips, 2-line bodies; soft shadows.

## 11. Navigation

Clean white bar, friendly links, blue CTA pill. Announcement bar in tint.

## 12. Imagery

Flat vector people scenes (consistent library!), blob-masked photos of real customers for proof.

## 13. Icons

Rounded duotone chips with white glyphs; consistent geometric set.

## 14. Textures / Patterns

Flat tints, dot grids, blob shapes — minimal texture, maximum friendliness.

## 15. Motion

Gentle idle-only floats (5s, off under `prefers-reduced-motion`), wave loops on characters, 250ms lifts.

Durations: micro 150–250ms, standard 350–500ms UI transitions with gentle ease-in-out. Easings: gentle ease-in-out; harsh motion forbidden.

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

- Mixing illustration libraries
- Dark moody sections (this style lives in daylight)
- Cynical copy (commit to earnest)
- Photorealistic heroes
- Over-differentiation that breaks tested patterns

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F4F6FB;
  --ink: #1E2A3B;
  --muted: #627288;
  --accent: #2962FE;
  --accent-2: #FF6B9D;
  --font-display: Inter, Plus Jakarta Sans, sans-serif;
  --font-body: Inter, system-ui, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Corporate Memphis -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/corporate-memphis/DESIGN.md`.*
