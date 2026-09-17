import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = (s: number, l: number) => (large ? l : s);
  const stories = [
    { kicker: "Fashion", title: "Velvet, Vinyl & Volume", lede: "Inside the ateliers dressing the new opera.", by: "By A. Okafor · 12 min" },
    { kicker: "Essays", title: "In Praise of Excess", lede: "Why restraint ran out of things to say.", by: "By M. Reyes · 8 min" },
    { kicker: "Archive", title: "148 Pages of Proof", lede: "Contact sheets from the issue that broke the grid.", by: "By Staff · Photos" },
  ];
  const visible = large ? stories : stories.slice(0, 2);
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full w-full flex-col overflow-hidden" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        {/* Masthead */}
        <div className="flex items-center justify-between" style={{ padding: large ? "10px 28px 6px" : "6px 10px 4px", fontSize: fs(5.5, 10), letterSpacing: "0.18em", fontWeight: 700, color: p.muted }}>
          <span>ISSUE Nº 42</span>
          <span style={{ color: p.accent }}>★ BREAKING — THE FASHION ISSUE</span>
          <span>{large ? "PARIS · MILAN · LAGOS — $14" : "$14"}</span>
        </div>
        <div style={{ textAlign: "center", fontFamily: p.display, fontWeight: 900, fontSize: fs(24, 64), lineHeight: 0.95, letterSpacing: "-0.01em" }}>
          The Maximalist
        </div>
        {/* thick-thin-thick rules */}
        <div style={{ padding: large ? "8px 28px 0" : "4px 10px 0" }}>
          <div style={{ borderTop: `4px solid ${p.ink}` }} />
          <div style={{ borderTop: `1px solid ${p.ink}`, marginTop: 2 }} />
          <div className="flex items-center justify-between" style={{ fontSize: fs(5, 10), letterSpacing: "0.22em", fontWeight: 700, padding: large ? "6px 2px" : "4px 0" }}>
            <span>FASHION</span>
            <span>CULTURE</span>
            <span style={{ color: p.accent }}>COVER STORY ●</span>
            <span>ESSAYS</span>
            <span>ARCHIVE</span>
          </div>
          <div style={{ borderTop: `2px solid ${p.ink}` }} />
        </div>

        {/* Oversized headline stack */}
        <div className="grid" style={{ gridTemplateColumns: large ? "1.2fr 0.8fr" : "1.2fr 0.8fr", gap: large ? 24 : 8, padding: large ? "18px 28px" : "8px 10px", alignItems: "start" }}>
          <div>
            <div style={{ color: p.accent, fontWeight: 800, fontSize: fs(6, 11), letterSpacing: "0.2em" }}>COVER STORY — MORE IS MORE</div>
            <h2 style={{ fontFamily: p.display, fontWeight: 900, fontSize: fs(20, 58), lineHeight: 0.92, margin: "4px 0 0" }}>
              The New
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 700 }}>Maximalists</span>
              <span style={{ display: "inline-block", fontStyle: "normal", fontSize: fs(10, 26), verticalAlign: "super", marginLeft: 6, color: p.accent2 }}>✳</span>
            </h2>
            <p style={{ fontSize: fs(6.5, 13), color: p.muted, marginTop: large ? 10 : 5, maxWidth: large ? 420 : undefined, lineHeight: 1.5 }}>
              Colliding headlines, piled images, red kickers — a 148-page argument against whispering.
            </p>
            <div className="flex items-center" style={{ gap: large ? 10 : 6, marginTop: large ? 14 : 7 }}>
              <span style={{ background: p.ink, color: p.surface, fontSize: fs(6, 11), fontWeight: 800, letterSpacing: "0.14em", padding: large ? "10px 18px" : "5px 9px" }}>READ THE ISSUE</span>
              <span style={{ fontSize: fs(6, 11), fontWeight: 800, letterSpacing: "0.14em", color: p.accent }}>❦ FOOTNOTES ↓</span>
            </div>
          </div>
          {/* Pull-quote block with hard offset shadow */}
          <figure style={{ background: p.surface, border: `2px solid ${p.ink}`, boxShadow: `8px 8px 0 ${p.ink}`, padding: large ? 18 : 8, transform: "rotate(1.5deg)", margin: 0 }}>
            <div style={{ color: p.accent, fontWeight: 800, fontSize: fs(5.5, 10), letterSpacing: "0.2em" }}>PULL QUOTE — P. 67</div>
            <blockquote style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 700, fontSize: fs(9, 21), lineHeight: 1.15, margin: large ? "8px 0" : "4px 0" }}>
              “Print never died. It multiplied.”
            </blockquote>
            <figcaption style={{ fontSize: fs(5.5, 10.5), color: p.muted, borderTop: `1px solid ${p.ink}`, paddingTop: large ? 8 : 4 }}>
              — Editor&apos;s letter · set in {large ? "Playfair Display 900" : "serif"} · folio 67
            </figcaption>
          </figure>
        </div>

        {/* Story grid cards */}
        <div className="grid" style={{ gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: large ? 16 : 6, padding: large ? "4px 28px 30px" : "2px 10px 22px" }}>
          {visible.map((s) => (
            <article key={s.title} style={{ background: p.surface, border: `2px solid ${p.ink}`, padding: large ? 16 : 7 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ background: p.accent, color: p.surface, fontSize: fs(5, 9.5), fontWeight: 800, letterSpacing: "0.16em", padding: large ? "3px 8px" : "2px 5px" }}>{s.kicker.toUpperCase()}</span>
                <span style={{ borderTop: `1px solid ${p.ink}`, flex: 1 }} />
                <span style={{ fontFamily: p.display, fontStyle: "italic", fontSize: fs(6, 11), color: p.muted }}>№{s.title.length}</span>
              </div>
              <h3 style={{ fontFamily: p.display, fontWeight: 800, fontSize: fs(8, 18), lineHeight: 1.1, margin: large ? "10px 0 6px" : "5px 0 3px" }}>{s.title}</h3>
              <p style={{ fontSize: fs(6, 12), color: p.muted, lineHeight: 1.45, margin: 0 }}>{s.lede}</p>
              <div style={{ borderTop: `1px solid ${p.ink}`, marginTop: large ? 12 : 6, paddingTop: large ? 8 : 4, fontSize: fs(5.5, 10), letterSpacing: "0.12em", fontWeight: 700, color: p.accent2 }}>{s.by.toUpperCase()}</div>
            </article>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
