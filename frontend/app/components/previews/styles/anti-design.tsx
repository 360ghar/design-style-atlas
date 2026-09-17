import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AntiDesignPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="relative h-full overflow-hidden" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        {/* deliberately broken nav: misaligned links + clash */}
        <nav className="relative flex items-start overflow-hidden px-2 pt-1.5" style={{ gap: 8 * s }} aria-label="Broken">
          <a href="#" style={{ color: p.accent, textDecoration: "underline", fontSize: 8 * s, transform: "translateY(3px) rotate(-3deg)", display: "inline-block" }}>home</a>
          <a href="#" style={{ color: p.accent, textDecoration: "underline", fontSize: 10 * s, transform: "translateY(-1px)", display: "inline-block" }}>links</a>
          <a href="#" style={{ color: p.accent2, textDecoration: "underline", fontSize: 7.5 * s, transform: "translateY(5px) rotate(2deg)", display: "inline-block" }}>guestbook</a>
          <span className="pv-blink" style={{ background: "#FFFF00", color: p.ink, fontSize: 7 * s, padding: "0 3px", transform: "rotate(-2deg)", display: "inline-block" }}>NEW!!</span>
          <span className="ml-auto shrink-0" style={{ color: p.accent2, fontSize: 7 * s, transform: "translateY(4px)" }}>hits: 0001337</span>
        </nav>

        {/* overlapping rotated hero type */}
        <div className="relative overflow-hidden px-2" style={{ height: 62 * s, marginTop: 4 * s }}>
          <div style={{ fontFamily: p.display, fontWeight: 900, fontSize: 30 * s, lineHeight: 0.9, letterSpacing: "-0.02em", transform: "rotate(-4deg)", transformOrigin: "left top" }}>
            UGLY <span style={{ fontStyle: "italic", fontWeight: 400 }}>is</span>
          </div>
          <div
            style={{
              position: "absolute",
              top: 22 * s,
              left: 44 * s,
              fontFamily: p.display,
              fontWeight: 900,
              fontSize: 26 * s,
              lineHeight: 1,
              color: p.accent,
              textDecoration: "underline",
              transform: "rotate(3deg)",
              whiteSpace: "nowrap",
            }}
          >
            W0RKS!!!
          </div>
          <span
            style={{
              position: "absolute",
              top: 44 * s,
              left: 8 * s,
              background: "#FFFF00",
              color: p.ink,
              fontSize: 7.5 * s,
              padding: "1px 5px",
              border: `1px solid ${p.ink}`,
              transform: "rotate(-2deg)",
              whiteSpace: "nowrap",
            }}
          >
            ★ updated 1998 ★ no apologies
          </span>
          <span style={{ position: "absolute", top: 2 * s, right: 6 * s, fontSize: 12 * s, transform: "rotate(10deg)" }} aria-hidden="true">
            ☠
          </span>
        </div>

        {/* colliding boxes */}
        <div className="relative px-2" style={{ height: 44 * s }}>
          <fieldset
            style={{
              position: "absolute",
              left: 6 * s,
              top: 0,
              width: "58%",
              background: p.surface,
              border: `2px outset ${p.muted}`,
              fontSize: 7.5 * s,
              padding: "3px 6px 5px",
            }}
          >
            <legend style={{ fontSize: 7 * s, padding: "0 4px" }}>sign my guestbook</legend>
            <span style={{ border: `2px outset ${p.muted}`, background: p.surface, padding: "1px 12px", fontSize: 8 * s }}>OK</span>
            <span style={{ marginLeft: 6 * s, color: p.muted, textDecoration: "underline" }}>cancel</span>
          </fieldset>
          <div
            style={{
              position: "absolute",
              right: 4 * s,
              top: 12 * s,
              width: "52%",
              background: p.surface,
              border: `2px solid ${p.ink}`,
              outline: `2px solid ${p.accent2}`,
              outlineOffset: "-5px",
              fontSize: 7 * s,
              padding: "5px 6px",
              textAlign: "center",
              transform: "rotate(-1.5deg)",
            }}
          >
            <span style={{ color: p.accent2, fontWeight: 700 }}>UNDER CONSTRUCTION</span>
            <br />
            <span style={{ color: p.muted }}>best viewed at 800×600</span>
          </div>
        </div>

        {/* marquee footer */}
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden whitespace-nowrap"
          style={{ background: p.ink, color: "#008000", fontSize: 8 * s, padding: "3px 0", borderTop: `2px solid ${p.ink}` }}
        >
          <span className="pv-marquee" style={{ display: "inline-block" }}>
            ~~~ best viewed in netscape navigator ~~~ do not adjust your set ~~~ sign the guestbook ~~~&nbsp;
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
