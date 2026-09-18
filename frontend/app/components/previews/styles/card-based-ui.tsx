import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CardBasedUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const soft = (c: string, amt = 14) => `color-mix(in srgb, ${c} ${amt}%, ${p.surface})`;
  const line = `1px solid color-mix(in srgb, ${p.muted} 28%, ${p.surface})`;
  const shadow = `0 1px 3px color-mix(in srgb, ${p.ink} 10%, transparent)`;
  const fs = large
    ? { nav: 8, chip: 7.5, title: 11, meta: 7.5, btn: 8 }
    : { nav: 5.5, chip: 5, title: 7.5, meta: 5, btn: 5.5 };
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: large ? 7 : 5,
          padding: large ? 10 : 7,
        }}
      >
        {/* feed nav: search + saved + view toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              background: p.surface,
              border: line,
              borderRadius: 999,
              boxShadow: shadow,
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: large ? "5px 9px" : "3.5px 7px",
              fontSize: fs.nav,
              color: p.muted,
            }}
          >
            <svg width={large ? 10 : 7} height={large ? 10 : 7} viewBox="0 0 16 16" fill="none" stroke={p.muted} strokeWidth={2}>
              <circle cx={7} cy={7} r={4.5} />
              <path d="M10.5 10.5 14 14" strokeLinecap="round" />
            </svg>
            <span>Search cards…</span>
          </div>
          <div
            style={{
              background: soft(p.accent, 14),
              color: p.accent,
              borderRadius: 999,
              fontSize: fs.nav,
              fontWeight: 600,
              padding: large ? "5px 9px" : "3.5px 7px",
              whiteSpace: "nowrap",
            }}
          >
            ♥ 24 saved
          </div>
          <div style={{ display: "flex", background: p.surface, border: line, borderRadius: 7, overflow: "hidden" }}>
            {[true, false].map((on, i) => (
              <div
                key={i}
                style={{
                  background: on ? p.ink : "transparent",
                  padding: large ? 5 : 3.5,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div style={{ width: large ? 8 : 5, height: large ? 8 : 5, borderRadius: 1.5, background: on ? p.surface : p.muted, opacity: on ? 1 : 0.55 }} />
              </div>
            ))}
          </div>
        </div>

        {/* filter chips */}
        <div style={{ display: "flex", gap: 4 }}>
          {["All", "Guides", "Data"].map((c, i) => (
            <span
              key={c}
              style={{
                fontSize: fs.chip,
                fontWeight: 600,
                borderRadius: 999,
                padding: large ? "3px 8px" : "2px 6px",
                background: i === 0 ? p.accent : p.surface,
                color: i === 0 ? p.surface : p.muted,
                border: i === 0 ? `1px solid ${p.accent}` : line,
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* stacked card hero — §10 anatomy: 16:9 media, 16px pad, 15px semibold 2-line title, avatar+time+tag, action footer */}
        <article
          style={{
            background: p.surface,
            border: line,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: `0 8px 24px color-mix(in srgb, ${p.ink} 12%, transparent)`,
            transition: "transform 200ms ease-out, box-shadow 200ms ease-out",
          }}
        >
          <div style={{ aspectRatio: "16 / 9", background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`, position: "relative", padding: large ? 8 : 6, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 4 }}>
            <span
              style={{
                position: "absolute",
                top: large ? 7 : 5,
                left: large ? 7 : 5,
                background: p.surface,
                color: p.accent,
                fontSize: fs.meta,
                fontWeight: 700,
                borderRadius: 999,
                padding: large ? "2px 7px" : "1px 5px",
              }}
            >
              Featured
            </span>
            <span style={{ position: "absolute", top: large ? 7 : 5, right: large ? 7 : 5, background: `color-mix(in srgb, ${p.ink} 28%, transparent)`, color: p.surface, fontSize: fs.meta, borderRadius: 999, padding: large ? "2px 7px" : "1px 5px" }}>
              4 min
            </span>
            <div style={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
              {[42, 68, 52, 80].map((h, i) => (
                <div key={i} style={{ flex: 1, height: large ? h * 0.42 : h * 0.24, borderRadius: 3, background: `color-mix(in srgb, ${p.surface} 88%, transparent)`, opacity: i === 3 ? 1 : 0.75 }} />
              ))}
            </div>
          </div>
          <div style={{ padding: large ? 10 : 7 }}>
            <h3
              style={{
                fontFamily: p.display,
                fontWeight: 600,
                fontSize: fs.title,
                lineHeight: 1.3,
                margin: 0,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Design tokens, shipped as cards
            </h3>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: large ? 6 : 4, fontSize: fs.meta, color: p.muted }}>
              <span style={{ width: large ? 14 : 10, height: large ? 14 : 10, borderRadius: "50%", background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`, flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", color: p.surface, fontSize: large ? 8 : 5, fontWeight: 700 }}>
                A
              </span>
              <span style={{ fontWeight: 600, color: p.ink }}>Ava</span>
              <span>· 2h ago ·</span>
              <span style={{ background: soft(p.accent2, 12), color: p.accent2, borderRadius: 999, padding: large ? "1px 6px" : "1px 4px", fontWeight: 700 }}>
                Guide
              </span>
            </div>
            <footer style={{ display: "flex", alignItems: "center", gap: 6, marginTop: large ? 8 : 5, paddingTop: large ? 8 : 5, borderTop: line }}>
              <span style={{ background: p.accent, color: p.surface, fontSize: fs.btn, fontWeight: 700, borderRadius: 999, padding: large ? "4px 12px" : "3px 9px", cursor: "pointer" }}>
                Save
              </span>
              <span style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
                {["M6 3h4a1 1 0 0 1 1 1v9l-3-2-3 2V4a1 1 0 0 1 1-1Z", "M4 12 12 4M6 4h6v6", "M4 8h8M4 11h8"].map((d, i) => (
                  <svg key={i} width={large ? 13 : 9} height={large ? 13 : 9} viewBox="0 0 16 16" fill="none" stroke={i === 0 ? p.accent : p.muted} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                    {i === 2 && <circle cx={12.5} cy={4.5} r={1} fill={p.muted} stroke="none" />}
                  </svg>
                ))}
              </span>
            </footer>
          </div>
        </article>

        {/* filter footer */}
        <div
          style={{
            marginTop: "auto",
            background: p.surface,
            border: line,
            borderRadius: 8,
            boxShadow: shadow,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: large ? "6px 9px" : "4px 7px",
            fontSize: fs.meta,
            color: p.muted,
          }}
        >
          <span style={{ fontWeight: 600, color: p.ink }}>128 cards</span>
          <span>· Sorted: Top</span>
          <span style={{ marginLeft: "auto", background: soft(p.accent, 12), color: p.accent, borderRadius: 999, padding: large ? "2px 8px" : "1px 6px", fontWeight: 700 }}>
            Filter ✓
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
