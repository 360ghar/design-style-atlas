import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function RetroInternetPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const display = `"Times New Roman", Georgia, serif`;
  const body = `Verdana, Arial, sans-serif`;
  const fs = {
    bar: large ? 10 : 6,
    title: large ? 34 : 15,
    tag: large ? 11 : 6.5,
    meta: large ? 9 : 5.5,
    btn: large ? 10 : 6,
    counter: large ? 11 : 6.5,
    foot: large ? 9 : 5.5,
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: "#FFF8DC", color: "#222222", fontFamily: body }}
      >
        <style>{`@keyframes retro-marquee { from { transform: translateX(100%); } to { transform: translateX(-100%); } } @media (prefers-reduced-motion: reduce) { .retro-marquee-inner { animation: none !important; transform: none !important; } }`}</style>

        {/* marquee guestbook bar */}
        <div
          style={{
            background: "#0000EE",
            color: "#FFFFFF",
            fontSize: fs.bar,
            padding: large ? "5px 8px" : "3px 6px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <div
            className="retro-marquee-inner"
            style={{ display: "inline-block", animation: "retro-marquee 14s linear infinite" }}
          >
            ★ welcome to sarah&rsquo;s homepage ★ sign my guestbook ★ last updated 08/14/1998 ★ best
            viewed at 800×600 ★&nbsp;&nbsp;★ welcome to sarah&rsquo;s homepage ★ sign my guestbook ★
          </div>
        </div>

        {/* tiled homepage hero with hit-counter */}
        <div
          className="flex flex-1 flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "radial-gradient(#77705F 1px, transparent 1px)",
            backgroundSize: large ? "14px 14px" : "10px 10px",
            padding: large ? "12px 16px" : "6px 10px",
            minHeight: 0,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "2px outset #77705F",
              padding: large ? "12px 20px 10px" : "6px 10px 5px",
              maxWidth: large ? 420 : 250,
              width: large ? "88%" : "94%",
            }}
          >
            <div style={{ color: "#FF0000", fontSize: fs.meta, fontWeight: 700 }}>
              ★ NEW! ★ poem #42 is up ★ NEW! ★
            </div>
            <div style={{ fontFamily: display, fontWeight: 700, fontSize: fs.title, lineHeight: 1.05, marginTop: large ? 6 : 3 }}>
              Sarah&rsquo;s Homepage
            </div>
            <div style={{ fontSize: fs.tag, marginTop: large ? 4 : 2 }}>
              poems, midi jukebox &amp; my cat —{" "}
              <a style={{ color: "#0000EE", textDecoration: "underline" }}>sign my guestbook</a>
            </div>
            <div style={{ color: "#77705F", fontSize: fs.meta, marginTop: large ? 4 : 2 }}>
              ❦ ★ ❦ &nbsp;est. 1997 · no frames, we promise&nbsp; ❦ ★ ❦
            </div>
            <div
              style={{
                display: "flex",
                gap: large ? 8 : 4,
                justifyContent: "center",
                marginTop: large ? 8 : 4,
                flexWrap: "wrap",
              }}
            >
              {["★ new poem", "♪ midi jukebox", "my cat"].map((b) => (
                <span
                  key={b}
                  style={{
                    fontSize: fs.btn,
                    fontWeight: 700,
                    background: "#FFFFFF",
                    border: "2px outset #77705F",
                    padding: large ? "6px 12px" : "2px 7px",
                    cursor: "pointer",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            {/* hit-counter well */}
            <div
              style={{
                marginTop: large ? 8 : 4,
                background: "#FFFFFF",
                border: "2px inset #77705F",
                padding: large ? "5px 8px" : "3px 6px",
                fontSize: fs.counter,
              }}
            >
              visitors since &rsquo;97:{" "}
              <span
                style={{
                  background: "#222222",
                  color: "#FFFFFF",
                  fontFamily: "Courier New, monospace",
                  fontWeight: 700,
                  letterSpacing: 2,
                  padding: "1px 6px",
                }}
              >
                00482133
              </span>{" "}
              <span style={{ color: "#77705F" }}>· you are visitor #483134!</span>
            </div>
          </div>
        </div>

        {/* webring footer */}
        <div style={{ flexShrink: 0, background: "#FFFFFF", borderTop: "2px outset #77705F" }}>
          <div
            style={{
              height: large ? 6 : 4,
              background: "repeating-linear-gradient(-45deg, #FF0000 0 8px, #222222 8px 16px)",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: large ? 10 : 6,
              fontSize: fs.foot,
              padding: large ? "6px 8px" : "3px 6px",
            }}
          >
            <a style={{ color: "#0000EE", textDecoration: "underline" }}>← prev</a>
            <span style={{ color: "#77705F" }}>friendship webring</span>
            <a style={{ color: "#0000EE", textDecoration: "underline" }}>random</a>
            <a style={{ color: "#0000EE", textDecoration: "underline" }}>next →</a>
            <span style={{ color: "#FF0000" }}>✉ guestbook</span>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
