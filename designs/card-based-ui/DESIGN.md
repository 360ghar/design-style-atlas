---
slug: card-based-ui
name: "Card-Based UI"
description: "Contained modularity: bordered content units in browsable grids and feeds."
category: Product & SaaS
tags: [cards, modular, feeds]
related: [bento-grid, corporate-saas, stripe-inspired]
preview:
  bg: "#F1F5F9"
  surface: "#FFFFFF"
  ink: "#0F172A"
  muted: "#64748B"
  accent: "#2563EB"
  accent2: "#7C3AED"
  display: "Inter, system-ui, sans-serif"
  body: "Inter, system-ui, sans-serif"
---

# Card-Based UI — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the clearer, more card-forward interpretation.

## 1. Overall aesthetic

The Pinterest-to-dashboard continuum: self-contained content units with media, title, meta, and actions — browsable, saveable, shareable. Scales from social feeds to analytics. For marketplaces, media, dashboards, and anything browsable.

**Three principles:**

- Cards are self-contained: media + title + meta + action, always scannable
- Uniform internal anatomy across varying content
- Hover reveals actions; rest state stays calm

## 2. Typography

- **Display:** Inter, system-ui, sans-serif
- **Body:** Inter, system-ui, sans-serif
- **Scale:** hero 28–40px Inter card headlines, H2 22–28px, H3 18px, body 14–16px, meta/labels 12–13px medium.
- **Weights:** display 600 Inter; body 400–500; labels 500–600 with no wide tracking.
- **Rules:** left-aligned card headlines in a tidy deck grid; consistent card anatomy; never poster monuments, never chaos.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F1F5F9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#0F172A` | Headlines, body text |
| Muted | `#64748B` | Captions, meta, secondary text |
| Accent | `#2563EB` | Primary actions, highlights |
| Accent 2 | `#7C3AED` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Feed rhythm: 16–20px card gaps, 20px card padding, 16:9 media, 64–88px sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Masonry or uniform grids (3–4 col desktop); list rows on mobile; filter bar + sort above; infinite or paged below. Max-width 1280px.

## 6. Borders

1px solid #E2E8F0; media separated by hairline; selected cards get 2px accent ring

## 7. Shadows

Feed-calm: 0 1px 3px rgba(15,23,42,0.08); hover 0 8px 24px rgba(15,23,42,0.12)

## 8. Radius

12px cards, 8px media, pills for tags

## 9. Buttons

Card actions: save/bookmark icon buttons, primary pills for conversion; hover-reveal secondary row.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Anatomy: 16:9 media top, 16px padding, title 15px semibold 2-line clamp, meta row (avatar + time + tag), action footer.

## 11. Navigation

Feed chrome: search + filter chips + view toggle; sticky with blur; saved/count indicators.

## 12. Imagery

Cover media per card (photos, thumbs, charts); avatar stacks; empty-state illustrations for zero results.

## 13. Icons

Bookmark, share, more (···), view-mode glyphs — 18px, gray-500, accent on active.

## 14. Textures / Patterns

Flat slate-50 ground; skeleton shimmer tiles while loading.

## 15. Motion

200ms hover lifts; layout animations on filter (FLIP); skeleton shimmer; pull-refresh on mobile.

Durations: micro 100–200ms card lifts, standard 300ms. Easings: crisp ease-out; no springs, no ceremony.

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

- Varying card anatomy per item
- Cramming full articles into cards (tease, link out)
- More than 2 actions visible at rest
- Autoplay media in cards
- Tiny tap targets on mobile cards

## 20. Quick-start snippet

```css
:root {
  --bg: #F1F5F9;
  --surface: #FFFFFF;
  --ink: #0F172A;
  --muted: #64748B;
  --accent: #2563EB;
  --accent-2: #7C3AED;
  --font-display: Inter, system-ui, sans-serif;
  --font-body: Inter, system-ui, sans-serif;
}
```

```html
<!-- Copy-paste starter: card grid in Card-Based UI -->
<div class="ds-grid">
  <article class="ds-card">
    <div class="ds-media"></div>
    <div class="ds-body">
      <h3>Card headline, max two lines</h3>
      <p class="ds-meta"><span class="ds-avatar"></span> Author · 4 min · <span class="ds-tag">Guide</span></p>
    </div>
    <footer class="ds-actions"><button class="ds-btn">Save</button><button class="ds-icon" aria-label="Bookmark">Bookmark</button></footer>
  </article>
</div>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/card-based-ui/DESIGN.md`.*
