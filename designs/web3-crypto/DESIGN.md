---
slug: web3-crypto
name: "Web3 Crypto"
description: "Wallet-first glassy dark surfaces with gradient balances and exchange-grade glow."
category: Fintech
tags: [dark, gradient, glow]
related: [cyberpunk, aurora-glow, gradient-design]
preview:
  bg: "#060A14"
  surface: "#0D1424"
  ink: "#F2F5FF"
  muted: "#8B94AD"
  accent: "#00E5A0"
  accent2: "#6C5CFF"
  display: "Space Grotesk, Inter, Helvetica Neue, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Web3 Crypto — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

The top-tier exchange aesthetic: deep-space navy-black, glassy panels, gradient numerals for portfolio value, and green/violet glows that pulse with the market. Connect-wallet is the front door; candlesticks are the wallpaper. Trust is built with real-time numbers and audited-looking precision.

**Three principles:**

- Wallet is identity: connect state drives the whole header
- Numbers are live: every figure looks ticking, precise to 2–8 decimals
- Glow means market: green up, red down, violet for protocol

## 2. Typography

- **Display:** Space Grotesk, Inter, Helvetica Neue, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** portfolio 40–64px Space Grotesk, pairs 20–28px, body 14–15px, tickers 12–13px mono.
- **Weights:** 500–700 display; tabular numerals everywhere; mono for addresses (0x…) and hashes.
- **Rules:** left dashboards; centered connect-wallet empty states; addresses truncated middle with copy button.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#060A14` | Page ground |
| Surface | `#0D1424` | Cards, panels, wells |
| Ink | `#F2F5FF` | Headlines, body text |
| Muted | `#8B94AD` | Captions, meta, secondary text |
| Accent | `#00E5A0` | Primary actions, highlights |
| Accent 2 | `#6C5CFF` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Mint #00E5A0 for gains/primary; violet #6C5CFF for protocol/premium; red #FF5C5C losses only.

## 4. Spacing

8px base; panels 20–24px; market rows 56–64px; terminal density on desktop.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Exchange grid: chart center, order book right, trade ticket far right; portfolio: balance hero + asset table; full-bleed dark.

## 6. Borders

1px rgba(255,255,255,0.08); gradient hairlines on featured panels; glass blur over chart grounds.

## 7. Shadows

Panel 0 16px 48px rgba(0,0,0,0.5); neon underglow on primary (mint at 25%); chart area glow.

## 8. Radius

16–20px panels; 12px inputs; pills for network selectors and asset chips.

## 9. Buttons

Gradient or mint primary (dark text), 12px radius, 48px; secondary glass; danger outlined red for destructive (revoke).

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Glassy asset rows: icon, name/symbol, sparkline, price, 24h chip; hover brightens 6%; click to pair page.

## 11. Navigation

Top bar: logo, markets/earn/NFT links, search pairs, network pill, connect-wallet button; ticker tape below.

## 12. Imagery

Candlestick/area charts as hero art; 3D coin renders; gradient orbs; identicon avatars for wallets.

## 13. Icons

Token glyphs in 32px circles; 18px line icons for actions; network badges overlaid bottom-right.

## 14. Textures / Patterns

Starfield dot grids; gradient mesh; scanline-free — clean glass over deep space.

## 15. Motion

Number tickers flash green/red 300ms; chart draws on load; connect modal springs 250ms; live pulse dot.

Durations: 150–300ms UI; price flashes 300ms; ambient glows 4s. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Flat daylight banking aesthetics
- Hiding fees and spreads
- Meme-coin chaos as the default voice
- Tiny unreadable chart labels
- Fake guaranteed-return promises in copy

## 20. Quick-start snippet

```css
:root {
  --bg: #060A14;
  --surface: #0D1424;
  --ink: #F2F5FF;
  --muted: #8B94AD;
  --accent: #00E5A0;
  --accent-2: #6C5CFF;
  --font-display: Space Grotesk, Inter, Helvetica Neue, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Web3 Crypto -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/web3-crypto/DESIGN.md`.*
