import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function EditorialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? "18px 22px" : "10px 12px";
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body, paddingBottom: large ? 28 : 20 }}>
        {/* masthead rule bar */}
        <div
          className="flex items-center justify-between uppercase"
          style={{ background: p.ink, color: p.surface, fontSize: large ? 10 : 6, fontWeight: 800, letterSpacing: "0.18em", padding: large ? "7px 22px" : "4px 12px" }}
        >
          <span>Issue N° 482 ★ Breaking</span>
          <span style={{ opacity: 0.75 }}>Tue 17 Sep 2026</span>
        </div>

        {/* wordmark */}
        <div style={{ borderBottom: `4px solid ${p.ink}`, padding: large ? "12px 22px 10px" : "7px 12px 6px" }}>
          <div style={{ fontFamily: p.display, fontWeight: 900, fontSize: large ? 30 : 15, lineHeight: 0.9, letterSpacing: "-0.01em", textTransform: "uppercase" }}>
            The Daily Loud
          </div>
        </div>

        {/* headline block */}
        <div style={{ padding: pad }}>
          <div className="flex items-center uppercase" style={{ gap: 8 }}>
            <span style={{ display: "inline-block", width: large ? 28 : 16, height: large ? 8 : 5, background: p.accent }} />
            <span style={{ color: p.accent, fontWeight: 900, fontSize: large ? 12 : 7, letterSpacing: "0.16em" }}>Front page — City Hall</span>
          </div>
          <h2 style={{ fontFamily: p.display, fontWeight: 900, textTransform: "uppercase", fontSize: large ? 76 : 32, lineHeight: 0.88, letterSpacing: "-0.02em", margin: large ? "12px 0 0" : "8px 0 0" }}>
            City votes
            <br />
            to go{" "}
            <span style={{ background: p.accent, color: p.surface, padding: "0 10px", boxDecorationBreak: "clone" }}>
              loud
            </span>
          </h2>
          <div style={{ borderTop: `3px solid ${p.ink}`, marginTop: large ? 14 : 8, paddingTop: large ? 10 : 6, fontSize: large ? 14 : 7.5, fontWeight: 500, maxWidth: large ? 520 : undefined }}>
            Council backs poster-scale headlines in 7–2 decision. Ink heavy, no whisper. <span style={{ fontWeight: 800 }}>→</span>
          </div>
        </div>

        {/* pull-quote + column meta */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            borderTop: `4px solid ${p.ink}`,
            borderBottom: `4px solid ${p.ink}`,
            marginTop: "auto",
          }}
        >
          <div style={{ borderRight: `3px solid ${p.ink}`, padding: large ? "14px 22px" : "8px 12px", background: p.surface }}>
            <div style={{ fontSize: large ? 10 : 6, fontWeight: 900, letterSpacing: "0.16em", color: p.accent, textTransform: "uppercase" }}>№ 01 — Pull quote</div>
            <p style={{ fontFamily: p.display, fontWeight: 900, fontSize: large ? 20 : 10, lineHeight: 1, textTransform: "uppercase", margin: large ? "8px 0 0" : "5px 0 0" }}>
              “Set it big or don’t set it at all.”
            </p>
          </div>
          <div style={{ padding: large ? "14px 22px" : "8px 12px" }}>
            <div style={{ fontSize: large ? 11 : 6.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>By M. Okafor ★ Newsroom</div>
            <div style={{ color: p.muted, fontSize: large ? 11 : 6.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginTop: large ? 8 : 4, borderTop: `2px solid ${p.ink}`, paddingTop: large ? 8 : 4 }}>
              P.01 — Rules / P.02 — Ticker
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
