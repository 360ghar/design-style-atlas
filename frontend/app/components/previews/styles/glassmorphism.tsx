import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GlassmorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative h-full overflow-hidden"
        style={{ background: "#6C5CE7", fontFamily: "Inter, SF Pro Display, sans-serif" }}
      >
        {/* gradient orb ground */}
        <div style={{ position: "absolute", left: "-12%", top: "-18%", width: large ? 260 : 150, height: large ? 260 : 150, borderRadius: "50%", background: "#8B7CF0", filter: "blur(48px)" }} />
        <div style={{ position: "absolute", right: "-10%", top: "6%", width: large ? 220 : 130, height: large ? 220 : 130, borderRadius: "50%", background: "#00E5FF", opacity: 0.55, filter: "blur(56px)" }} />
        <div style={{ position: "absolute", left: "22%", bottom: "-24%", width: large ? 300 : 170, height: large ? 300 : 170, borderRadius: "50%", background: "#FFFFFF", opacity: 0.22, filter: "blur(60px)" }} />
        {/* scrim for text contrast */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(30,16,80,0.28), rgba(30,16,80,0.10) 55%, rgba(30,16,80,0.22))" }} />

        {/* frosted nav pill */}
        <div
          style={{
            position: "absolute",
            top: large ? 14 : 8,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: large ? 12 : 7,
            padding: large ? "7px 16px" : "4px 10px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30), 0 8px 32px rgba(0,0,0,0.18)",
            color: "#FFFFFF",
            fontSize: large ? 9 : 6,
            fontWeight: 600,
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: large ? 10 : 6, height: large ? 10 : 6, borderRadius: "50%", background: "#00E5FF" }} />
          <span>Aurora</span>
          <span style={{ opacity: 0.7 }}>Pay</span>
          <span style={{ opacity: 0.7 }}>Cards</span>
        </div>

        {/* glass hero card */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: large ? 28 : 14 }}>
          <div
            style={{
              width: large ? "64%" : "70%",
              borderRadius: 20,
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.30), 0 8px 32px rgba(0,0,0,0.18)",
              padding: large ? "18px 22px" : "10px 13px",
              color: "#FFFFFF",
            }}
          >
            <div style={{ fontSize: large ? 9 : 6, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.85)" }}>
              TOTAL BALANCE
            </div>
            <div style={{ fontSize: large ? 32 : 17, fontWeight: 700, lineHeight: 1.05, marginTop: 4 }}>$12,480.22</div>
            <div style={{ fontSize: large ? 10 : 6.5, marginTop: 4, color: "rgba(255,255,255,0.85)" }}>
              Frosted panels over an aurora field
            </div>
            <div style={{ display: "flex", gap: large ? 8 : 5, marginTop: large ? 12 : 8 }}>
              <span
                style={{
                  background: "#FFFFFF",
                  color: "#6C5CE7",
                  borderRadius: 999,
                  fontSize: large ? 10 : 6,
                  fontWeight: 700,
                  padding: large ? "7px 16px" : "4px 11px",
                  cursor: "pointer",
                }}
              >
                Send
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.20)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 999,
                  fontSize: large ? 10 : 6,
                  fontWeight: 600,
                  padding: large ? "7px 16px" : "4px 11px",
                  cursor: "pointer",
                }}
              >
                Request
              </span>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
