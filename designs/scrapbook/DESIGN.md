---
slug: scrapbook
name: "Scrapbook"
description: "Memory-keeping warmth: photos, tickets and handwritten notes in keepsake grids."
category: Cut & Paste
tags: [scrapbook, memory, handmade]
related: [collage, zine-punk]
preview:
  bg: "#F3EDE2"
  surface: "#FFFDF6"
  ink: "#3B362E"
  muted: "#6F675E"
  accent: "#B3541E"
  accent2: "#5B7E6B"
  display: "Caveat, Georgia, serif"
  body: "Karla, Inter, sans-serif"
---

# Scrapbook — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the warmer, more handwritten interpretation.

## 1. Overall aesthetic

A family album as interface: polaroids with captions, ticket stubs, pressed flowers (CSS), washi tape, and one handwritten font used sparingly. Warm, personal, nostalgic. For weddings, travel, family brands, and community stories.

**Three principles:**

- White polaroid mats unify any photo mix
- One handwritten accent font; everything else highly legible
- Dates and captions ARE the content — write them well

## 2. Typography

- **Display:** Caveat, Georgia, serif
- **Body:** Karla, Inter, sans-serif
- **Scale:** hero 40–64px Caveat handwritten + Georgia, H2 28–36px, H3 20–22px, body 15–17px, meta/labels 12–13px washi-tape labels.
- **Weights:** display 600–700 handwritten; body 400; labels 600 handwritten with tape rotations.
- **Rules:** tilted photo-frame headlines with doodles and washi tape; left-aligned memory-book flow; never corporate straightness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F3EDE2` | Page ground |
| Surface | `#FFFDF6` | Cards, panels, wells |
| Ink | `#3B362E` | Headlines, body text |
| Muted | `#6F675E` | Captions, meta, secondary text |
| Accent | `#B3541E` | Primary actions, highlights |
| Accent 2 | `#5B7E6B` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Keepsake rhythm: overlapping mementos, 24px journal padding, 72–96px chapters

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Album spread: hero memory wall, timeline chapters with date tabs, guest-note margins. Max-width 1100px.

## 6. Borders

Keepsake frames: white polaroid mats, stitched dashes, washi-tape strips

## 7. Shadows

Keepsake lift: 0 6px 18px rgba(59,54,46,0.15) under photos; tape translucency

## 8. Radius

2–6px photos with white polaroid borders; tape corners

## 9. Buttons

Sticker and stamp buttons: rounded, warm fills, handwritten labels sparingly. RSVP/contribute CTAs prominent.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Memory cards: polaroid photo + caption + date stamp; ticket-stub dividers with perforation dashes.

## 11. Navigation

Keepsake bar: family/brand mark, chapter tabs (dates), contribute CTA. Doily-trim optional (one!).

## 12. Imagery

Personal photos in polaroid mats, scanned ephemera, pressed-flower CSS motifs, kraft envelopes.

## 13. Icons

Hearts, stars, stamps, scissors — keepsake glyphs, warm and few.

## 14. Textures / Patterns

Kraft paper, linen, washi patterns, photo grain at 6–10%.

## 15. Motion

Gentle: photo lift on hover, page-turn chapter transitions (400ms), falling-petal accent (once, subtle).

Durations: micro 150–250ms, standard 400–600ms sticker-peel entrances. Easings: gentle ease-out with tilt; harsh snaps forbidden.

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

- Slick stock photography
- Multiple script fonts
- Dark moody grading on memories
- Clutter that buries the captions
- Forgetting print/export (albums want printing)

## 20. Quick-start snippet

```css
:root {
  --bg: #F3EDE2;
  --surface: #FFFDF6;
  --ink: #3B362E;
  --muted: #6F675E;
  --accent: #B3541E;
  --accent-2: #5B7E6B;
  --font-display: Caveat, Georgia, serif;
  --font-body: Karla, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Scrapbook -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/scrapbook/DESIGN.md`.*
