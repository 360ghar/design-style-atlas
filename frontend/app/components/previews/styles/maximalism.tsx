import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const links = ["Salon", "Velvet", "Gilded", "Journal", "Soiree"];
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          overflow: "hidden",
        }}
      >
        {/* patterned ground: damask dots + velvet diagonal weave */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${p.accent2}55 1px, transparent 1.3px), repeating-linear-gradient(45deg, ${p.surface} 0px, ${p.surface} 6px, transparent 6px, transparent 12px)`,
            backgroundSize: large ? "16px 16px, auto" : "11px 11px, auto",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(140deg, transparent 20%, ${p.accent}26 52%, ${p.accent2}22 78%)`,
          }}
        />

        {/* top patterned trim */}
        <div style={{ position: "relative", height: large ? 7 : 5, background: `repeating-linear-gradient(90deg, ${p.accent2} 0 10px, ${p.accent} 10px 20px, ${p.surface} 20px 24px)`, borderBottom: `1px solid ${p.accent2}` }} />

        {/* dense ornate nav */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: large ? 10 : 6,
            padding: large ? "8px 12px" : "5px 7px",
            background: `${p.surface}F2`,
            borderBottom: `1px solid ${p.accent2}88`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 4 }}>
            <span
              style={{
                width: large ? 22 : 15,
                height: large ? 22 : 15,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: large ? 11 : 7.5,
                color: p.bg,
                background: `linear-gradient(135deg, ${p.accent2}, ${p.accent})`,
                border: `1px solid ${p.accent2}`,
                boxShadow: `0 0 12px ${p.accent2}66`,
                flexShrink: 0,
              }}
            >
              M
            </span>
            <span style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 10 : 6.5, letterSpacing: "0.08em" }}>
              MAISON
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 9 : 5 }}>
            {links.map((l, i) => (
              <span
                key={l}
                style={{
                  fontFamily: p.display,
                  fontSize: large ? 8.5 : 6,
                  fontWeight: 700,
                  color: i === 1 ? p.accent2 : p.ink,
                  borderBottom: i === 1 ? `1.5px solid ${p.accent2}` : `1px solid transparent`,
                  paddingBottom: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {l}
              </span>
            ))}
            <span
              style={{
                fontFamily: p.display,
                fontSize: large ? 8.5 : 6,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: p.bg,
                background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                padding: large ? "5px 11px" : "3px 7px",
                boxShadow: `0 0 14px ${p.accent2}55, 0 3px 10px rgba(0,0,0,0.45)`,
                whiteSpace: "nowrap",
              }}
            >
              SHOP GILDED
            </span>
          </div>
        </div>

        {/* overloaded hero */}
        <div style={{ position: "relative", textAlign: "center", padding: large ? "12px 18px 8px" : "7px 10px 5px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: large ? 7.5 : 5.5,
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: p.bg,
              background: p.accent2,
              borderRadius: 999,
              padding: large ? "3px 10px" : "2px 7px",
              border: `1px solid ${p.ink}`,
            }}
          >
            EST. MMXXIV — VELVET · DAMASK · GOLD
          </div>
          <div style={{ position: "relative", marginTop: large ? 6 : 3 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: large ? 44 : 28,
                color: "transparent",
                WebkitTextStroke: `1px ${p.accent2}44`,
                letterSpacing: "0.04em",
                transform: "translateY(-2px)",
              }}
            >
              OPULENCE
            </div>
            <h1
              style={{
                position: "relative",
                margin: 0,
                fontFamily: p.display,
                fontWeight: 900,
                lineHeight: 0.95,
                fontSize: large ? 32 : 20,
                letterSpacing: "-0.01em",
                textShadow: `2px 2px 0 ${p.accent}, 0 0 22px ${p.accent2}55`,
              }}
            >
              More is <em style={{ color: p.accent2, fontStyle: "italic" }}>more.</em>
            </h1>
          </div>
          <p style={{ margin: large ? "6px auto 0" : "4px auto 0", maxWidth: large ? 420 : 260, fontSize: large ? 9.5 : 6.5, lineHeight: 1.45, color: p.ink }}>
            Jewel tones, gilt frames &amp; tasselled trim —{" "}
            <span style={{ color: p.accent2, fontWeight: 800 }}>layer it on,</span> never whisper.
          </p>

          {/* stickers + badges */}
          <span
            style={{
              position: "absolute",
              top: large ? 26 : 16,
              right: large ? 18 : 10,
              transform: "rotate(12deg)",
              fontSize: large ? 8 : 5.5,
              fontWeight: 900,
              letterSpacing: "0.1em",
              color: p.bg,
              background: p.accent,
              border: `1.5px solid ${p.accent2}`,
              borderRadius: 999,
              padding: large ? "4px 9px" : "2.5px 6px",
              boxShadow: `0 4px 14px rgba(0,0,0,0.45)`,
            }}
          >
            ★ NEW DROP
          </span>
          <span
            style={{
              position: "absolute",
              top: large ? 52 : 32,
              left: large ? 16 : 8,
              transform: "rotate(-10deg)",
              fontSize: large ? 7.5 : 5,
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: p.accent2,
              background: p.surface,
              border: `1px solid ${p.accent2}`,
              borderRadius: 2,
              padding: large ? "3px 7px" : "2px 5px",
            }}
          >
            ◆ GILDED ◆
          </span>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: large ? 8 : 5, marginTop: large ? 8 : 5 }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: large ? 9 : 6.5,
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: p.bg,
                background: `linear-gradient(135deg, ${p.accent2}, ${p.accent})`,
                border: `1.5px solid ${p.accent2}`,
                borderRadius: 10,
                padding: large ? "7px 16px" : "4px 10px",
                boxShadow: `0 0 18px ${p.accent2}44, 0 6px 18px rgba(0,0,0,0.45)`,
              }}
            >
              Enter the Pile
            </span>
            <span
              style={{
                fontSize: large ? 9 : 6.5,
                fontWeight: 700,
                color: p.ink,
                border: `1.5px double ${p.accent2}`,
                borderRadius: 10,
                padding: large ? "6px 14px" : "3.5px 9px",
                background: `${p.surface}CC`,
              }}
            >
              Lookbook ✦
            </span>
            <span style={{ fontSize: large ? 7.5 : 5.5, fontWeight: 800, letterSpacing: "0.1em", color: p.muted }}>
              4.9 ★ 2.4k reviews
            </span>
          </div>
        </div>

        {/* signature component row */}
        <div style={{ position: "relative", display: "flex", gap: large ? 10 : 6, padding: large ? "8px 14px 4px" : "5px 8px 3px", marginTop: "auto" }}>
          <div style={{ flex: 1, background: `${p.surface}F5`, border: `1.5px solid ${p.accent2}`, borderRadius: 12, padding: large ? "9px 10px" : "5px 6px", boxShadow: "0 10px 28px rgba(0,0,0,0.45)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, fontSize: large ? 7 : 5, fontWeight: 900, color: p.bg, background: p.accent, padding: large ? "2px 8px" : "1.5px 5px", borderBottomLeftRadius: 8 }}>
              −20%
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 4 }}>
              <span style={{ width: large ? 26 : 17, height: large ? 26 : 17, borderRadius: "50%", border: `2px double ${p.accent2}`, background: `linear-gradient(135deg, ${p.accent}, ${p.surface})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: large ? 11 : 7, flexShrink: 0 }}>
                ❦
              </span>
              <div>
                <div style={{ fontSize: large ? 7 : 5, fontWeight: 800, letterSpacing: "0.16em", color: p.accent2 }}>ROUGE · $48</div>
                <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 11 : 7 }}>Velvet Cameo Set</div>
              </div>
            </div>
            <div style={{ marginTop: large ? 6 : 3, fontSize: large ? 8 : 5.5, color: p.muted }}>Silk fringe · gilt clasp · damask box</div>
          </div>

          <div style={{ flex: 1, background: `${p.surface}F5`, border: `1.5px solid ${p.accent2}`, borderRadius: 12, padding: large ? "9px 10px" : "5px 6px", boxShadow: "0 10px 28px rgba(0,0,0,0.45)" }}>
            <div style={{ fontSize: large ? 7 : 5, fontWeight: 800, letterSpacing: "0.16em", color: p.accent2 }}>TONIGHT · PRICE TABLE</div>
            {[
              ["Salon", "$24"],
              ["Soiree", "$48"],
              ["Gala", "$96"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: large ? 8.5 : 6, padding: large ? "3px 0" : "1.8px 0", borderBottom: `1px dotted ${p.muted}66` }}>
                <span style={{ color: p.ink }}>✦ {k}</span>
                <span style={{ fontWeight: 800, color: p.accent2 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, background: `${p.surface}F5`, border: `1.5px solid ${p.accent2}`, outline: `1px solid ${p.accent}66`, outlineOffset: 2, borderRadius: 12, padding: large ? "9px 10px" : "5px 6px", boxShadow: "0 10px 28px rgba(0,0,0,0.45)" }}>
            <div style={{ border: `2px double ${p.accent2}`, borderRadius: 8, height: large ? 44 : 26, background: `linear-gradient(135deg, ${p.accent}88, ${p.surface}, ${p.accent2}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: p.display, fontStyle: "italic", fontSize: large ? 10 : 6.5 }}>
              peacock hour
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: large ? 6 : 3, fontSize: large ? 7 : 5, fontWeight: 800, letterSpacing: "0.12em", color: p.muted }}>
              <span>◈ ◈ ◈</span>
              <span style={{ color: p.accent2 }}>GILT · No. 09</span>
            </div>
          </div>
        </div>

        {/* bottom fringe + caption */}
        <div style={{ position: "relative", marginTop: large ? 8 : 5, borderTop: `1px solid ${p.accent2}88`, background: `${p.surface}F2`, padding: large ? "6px 12px 14px" : "4px 8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: large ? 7.5 : 5.5, fontWeight: 800, letterSpacing: "0.18em", color: p.muted }}>
            ✦ DAMASK ✦ VELVET ✦ MARBLE ✦ FRINGE ✦
          </span>
          <span style={{ fontSize: large ? 7.5 : 5.5, fontWeight: 800, letterSpacing: "0.1em", color: p.accent2 }}>SHIMMER ON HOVER →</span>
        </div>
        <div style={{ position: "relative", height: large ? 6 : 4, background: `repeating-linear-gradient(90deg, ${p.accent} 0 6px, ${p.accent2} 6px 12px)` }} />
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
