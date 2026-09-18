---
slug: kawaii-pop
name: "Kawaii Pop"
description: "Pastel Harajuku stickers, chunky rounded type, and cute overload."
category: Playful
tags: [cute, pastel, playful]
related: [playful-maximalism, comic-pop-art, claymorphism]
preview:
  bg: "#FFF5FA"
  surface: "#FFFFFF"
  ink: "#5C2D52"
  muted: "#946186"
  accent: "#DF006C"
  accent2: "#7ED6FF"
  display: "Baloo 2, Quicksand, Helvetica Neue, sans-serif"
  body: "Quicksand, Helvetica Neue, Arial, sans-serif"
---

# Kawaii Pop — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Harajuku sticker-book design: pastel panels, chunky rounded type, smiling mascots, and star sprinkles on everything. Cards wobble, buttons squish, and every empty state apologizes with a crying-laughing mascot. Cute is load-bearing — approachability converts.

**Three principles:**

- Round everything: 20px+ radii, bubbly type, squishy controls
- Pastel stacks: pink + sky + cream + mint in soft layers
- Mascots emote: faces on states — happy success, sleepy loading, teary errors

## 2. Typography

- **Display:** Baloo 2, Quicksand, Helvetica Neue, sans-serif
- **Body:** Quicksand, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 44–64px chunky rounded, H2 28–34px, body 15–17px/1.6, labels 13–14px bold rounded.
- **Weights:** 600–800 display (Baloo ExtraBold energy); 500–700 body; soft, never sharp.
- **Rules:** centered heroes with wiggle; left product text; uppercase only for tiny sticker labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF5FA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#5C2D52` | Headlines, body text |
| Muted | `#946186` | Captions, meta, secondary text |
| Accent | `#DF006C` | Primary actions, highlights |
| Accent 2 | `#7ED6FF` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Deep bubblegum #DF006C primary (white labels clear 4.8:1 on it); sky #7ED6FF secondary for fills and decoration only; mint and lavender supporting pastels.

## 4. Spacing

8px base; cards 24–32px; sections 72–96px; sticker clusters with rotated overlaps.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Centered sticker-book: hero mascot + headline, feature sticker grid, pastel band sections; max 1080px.

## 6. Borders

3px solid ink-plum or white sticker rims (white 4px + soft shadow = die-cut sticker look).

## 7. Shadows

Soft puffy: 0 10px 28px rgba(255,111,181,0.28); sticker die-cut white rim + lift.

## 8. Radius

20–32px cards; pills for buttons and chips; circles for avatars and mascot badges.

## 9. Buttons

Chunky pastel pills, 48–56px, bold rounded text; hover squish (scale 1.04); active squish (0.95); white sticker rim.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Sticker cards with faces, sparkles, and pastel fills; tilted -2°/+2° alternation; tap to wobble.

## 11. Navigation

Pastel bar with chunky logo + mascot; pill links; cart/profile as sticker badges with counts.

## 12. Imagery

Mascots, plush renders, star/heart sprinkles, pastel food motifs; photos get sticker frames + doodles.

## 13. Icons

Thick rounded 2.5px icons with faces; hearts, stars, paws, bows; 22–28px, pastel filled.

## 14. Textures / Patterns

Polka dots, gingham, star sprinkles, scallop edges; pastel gradient washes.

## 15. Motion

Squish-and-stretch 200ms springs; mascot idle bounce 2s; sparkles twinkle; wobble on tap.

Durations: 150–300ms springs; 2s idle loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Sharp corners and hairline minimalism
- Dark moody palettes
- Corporate stock photography
- Sarcastic or edgy copy — kindness only
- Tiny low-contrast pastel text (keep plum ink)

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF5FA;
  --surface: #FFFFFF;
  --ink: #5C2D52;
  --muted: #946186;
  --accent: #DF006C;
  --accent-2: #7ED6FF;
  --font-display: Baloo 2, Quicksand, Helvetica Neue, sans-serif;
  --font-body: Quicksand, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Kawaii Pop -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/kawaii-pop/DESIGN.md`.*
