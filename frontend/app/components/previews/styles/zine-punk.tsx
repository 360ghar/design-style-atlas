import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ZinePunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = {
    masthead: large ? 10 : 6.5,
    stamp: large ? 8 : 5,
    hero: large ? 30 : 16,
    kicker: large ? 9 : 6,
    gig: large ? 8.5 : 5.5,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* xerox masthead */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: large ? "7px 12px" : "5px 8px",
            borderBottom: `2px solid ${p.ink}`,
            background: p.surface,
          }}
        >
          <div
            style={{
              background: p.ink,
              color: p.surface,
              fontFamily: p.display,
              fontSize: fs.masthead,
              letterSpacing: "0.06em",
              padding: "2px 7px",
              transform: "rotate(-2deg)",
              lineHeight: 1,
            }}
          >
            RIOT PRESS
          </div>
          <div style={{ color: p.muted, fontSize: fs.stamp, letterSpacing: "0.12em" }}>
            ISSUE #07 — XEROXED MONTHLY
          </div>
          <div
            style={{
              border: `1.5px dashed ${p.ink}`,
              color: p.accent,
              fontSize: fs.stamp,
              fontWeight: 800,
              padding: "1px 6px",
              transform: "rotate(1.5deg)",
              lineHeight: 1.4,
            }}
          >
            ALL AGES
          </div>
        </div>

        {/* ransom-note hero */}
        <div
          className="relative flex flex-1 flex-col justify-center"
          style={{
            padding: large ? "12px 16px" : "8px 10px",
            backgroundImage: `radial-gradient(${p.ink}22 1px, transparent 1.2px)`,
            backgroundSize: large ? "6px 6px" : "5px 5px",
          }}
        >
          {/* tape strips */}
          <div
            style={{
              position: "absolute",
              top: large ? 8 : 5,
              left: "12%",
              width: large ? 54 : 34,
              height: large ? 11 : 7,
              background: p.accent2,
              opacity: 0.92,
              transform: "rotate(-7deg)",
              borderLeft: `1px dashed ${p.ink}`,
              borderRight: `1px dashed ${p.ink}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: large ? 10 : 6,
              right: "10%",
              width: large ? 22 : 14,
              height: large ? 22 : 14,
              borderRadius: "50%",
              border: `2px solid ${p.ink}`,
              background: p.surface,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: large ? 16 : 10,
              right: "12.5%",
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: p.ink,
            }}
          />
          <div
            style={{
              display: "inline-block",
              width: "fit-content",
              background: p.accent2,
              color: p.ink,
              fontSize: fs.kicker,
              fontWeight: 800,
              letterSpacing: "0.14em",
              padding: "1px 6px",
              transform: "rotate(-1deg)",
              marginBottom: 5,
            }}
          >
            CUT / PASTE / SCREAM
          </div>
          <div
            style={{
              display: "inline-block",
              width: "fit-content",
              background: p.ink,
              color: p.surface,
              fontFamily: p.display,
              fontSize: fs.hero,
              lineHeight: 1,
              letterSpacing: "0.01em",
              padding: "3px 10px 4px",
              transform: "rotate(-2deg)",
              boxShadow: `4px 4px 0 ${p.accent}`,
            }}
          >
            NO FUTURE?
          </div>
          <div
            style={{
              display: "inline-block",
              width: "fit-content",
              background: p.accent,
              color: p.surface,
              fontFamily: p.display,
              fontSize: fs.hero,
              lineHeight: 1,
              padding: "3px 10px 4px",
              transform: "rotate(1.5deg)",
              marginTop: 5,
            }}
          >
            MAKE ONE.
          </div>
          <div style={{ fontSize: fs.kicker, color: p.muted, marginTop: large ? 9 : 6 }}>
            3 chords · 1 copier · <span style={{ background: p.ink, color: p.surface, padding: "0 5px" }}>NO PERMISSION NEEDED</span>
          </div>
        </div>

        {/* gig-list footer */}
        <div
          style={{
            background: p.surface,
            borderTop: `2px solid ${p.ink}`,
            padding: large ? "7px 12px 8px" : "5px 8px 6px",
            fontSize: fs.gig,
            lineHeight: 1.7,
          }}
        >
          <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.ink}` }}>
            <span style={{ fontWeight: 800 }}>FRI 21 — BASEMENT SHOW</span>
            <span style={{ color: p.muted }}>$5 · 7PM</span>
          </div>
          <div className="flex items-center justify-between" style={{ color: p.muted, borderBottom: `1px solid ${p.ink}` }}>
            <s>SAT 22 — VFW HALL — SOLD OUT</s>
            <span> RIP</span>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <b>SUN 23 — MATINEE</b> · $5 ·{" "}
              <span style={{ background: p.ink, color: p.surface, padding: "0 5px", fontWeight: 800 }}>DIY OR DIE</span>
            </span>
            <span
              style={{
                width: large ? 44 : 30,
                height: large ? 10 : 7,
                background: `repeating-linear-gradient(90deg, ${p.ink} 0 2px, transparent 2px 4px)`,
              }}
            />
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
