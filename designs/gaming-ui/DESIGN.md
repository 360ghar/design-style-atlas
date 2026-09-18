---
slug: gaming-ui
name: "Gaming UI"
description: "HUD-first interfaces: health bars, quest logs and reward-loop feedback."
category: Neon & Play
tags: [gaming, hud, rewards]
related: [sci-fi-ui, pixel-8bit, comic-pop-art]
preview:
  bg: "#0B0E14"
  surface: "#12161F"
  ink: "#EDEFF5"
  muted: "#7C8698"
  accent: "#00E5FF"
  accent2: "#FFD802"
  display: "Rajdhani, Chakra Petch, sans-serif"
  body: "Inter, Rajdhani, sans-serif"
---

# Gaming UI — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more HUD-forward, more ranked-ladder interpretation.

## 1. Overall aesthetic

A AAA HUD wrapped around your product: XP bars, quest-tracked onboarding, rarity-tiered cards, kill-feed activity, loot-box reveals for rewards. Play is the engagement model. For fitness, education, fintech, and community products.

**Three principles:**

- Every action pays out: XP, bars, sounds-off flashes
- Rarity colors mean fixed tiers — document the loot table
- HUD persists: progress is always visible

## 2. Typography

- **Display:** Rajdhani, Chakra Petch, sans-serif
- **Body:** Inter, Rajdhani, sans-serif
- **Scale:** hero 44–68px Rajdhani/Chakra Petch HUD display, H2 30–40px, H3 22px, body 15–16px HUD text, meta/labels 12–13px XP-bar labels.
- **Weights:** display 600–700 HUD; body 400–500; labels 700 with +0.06–0.12em tracking.
- **Rules:** flush-left HUD headlines with health bars, XP meters, and rarity frames; never editorial longform layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0E14` | Page ground |
| Surface | `#12161F` | Cards, panels, wells |
| Ink | `#EDEFF5` | Headlines, body text |
| Muted | `#7C8698` | Captions, meta, secondary text |
| Accent | `#00E5FF` | Primary actions, highlights |
| Accent 2 | `#FFD802` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Command-center density: 12–16px panel padding, persistent HUD rails, 64–80px campaign chapters

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Command center: HUD header (level, XP, currency), quest rail left, main arena center, feed right. Campaign chapters for marketing.

## 6. Borders

HUD frames: 1–2px `color-mix(in srgb, #00E5FF 25%, transparent)` keylines + 8px corner brackets; rarity edges — Common `#8A8F98`, Rare `#00E5FF`, Legendary `#FFD802`

## 7. Shadows

Combat glow: `0 0 20px color-mix(in srgb, #00E5FF 25%, transparent)`; error vignette `#FF3B3B`; loot-gold glow `0 0 24px #FFD80255`

## 8. Radius

4–8px HUD panels; chamfered corners via clip-path

## 9. Buttons

Ability buttons: chamfered, keyed (Q/E/R hints), cooldown sweeps; primary glows. Big and thumb-ready.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Loot cards with rarity frames + tilt-reveal; quest cards with progress bars and reward rows.

## 11. Navigation

HUD header: avatar + level ring, nav tabs as zones, currency counters, settings cog.

## 12. Imagery

Splash-art heroes, 3D loot renders, map vistas, character portraits. Cinematic grade.

## 13. Icons

Ability glyphs, rank badges, currency coins — game-icon clarity at 16–48px.

## 14. Textures / Patterns

Hex grids, carbon, scanlines, particle embers at 6–10%.

## 15. Motion

Juice: XP bar tweens, damage shakes (subtle), loot reveals (500ms), level-up fanfares. Reduced-motion = instant results + toasts.

Durations: micro 100–200ms hit-markers, standard 300–500ms level-up bursts. Easings: `cubic-bezier(0.2, 0.9, 0.25, 1.2)` for pops, `ease-out` for bars; slow fades forbidden.

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

- Gamification without rewards (bars that never fill)
- Pay-to-win optics
- Obscuring real function behind game chrome
- Endless grinding with no rest states
- Motion that hides outcomes

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0E14;
  --surface: #12161F;
  --ink: #EDEFF5;
  --muted: #7C8698;
  --accent: #00E5FF;
  --accent-2: #FFD802;
  --font-display: Rajdhani, Chakra Petch, sans-serif;
  --font-body: Inter, Rajdhani, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Gaming UI -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/gaming-ui/DESIGN.md`.*
