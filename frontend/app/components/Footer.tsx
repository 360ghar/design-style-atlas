import Link from "next/link";
import { GITHUB_URL } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111110] bg-[#fafaf8]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            Design Styles
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#111110]/70">
            100 design styles for AI coding agents. Each style ships a
            copy-paste-ready{" "}
            <code className="font-mono text-[12px]">DESIGN.md</code> your agent
            can follow.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50">
            Use a style
          </p>
          <pre className="mt-3 overflow-x-auto border border-[#111110]/15 bg-[#111110] p-3 font-mono text-[11.5px] leading-relaxed text-[#ece9e0]">
            {`# copy a style into your project\ncp designs/neo-brutalism/DESIGN.md ./DESIGN.md\n\n# then tell your agent:\n"Follow @DESIGN.md for all UI work."`}
          </pre>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50">
            Project
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/#catalog" className="underline underline-offset-4">
                Browse all 100 styles
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                View on GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Contribute a style
              </a>
            </li>
          </ul>
          <p className="mt-4 font-mono text-[11px] text-[#111110]/50">
            MIT licensed. Open source.
          </p>
        </div>
      </div>
    </footer>
  );
}
