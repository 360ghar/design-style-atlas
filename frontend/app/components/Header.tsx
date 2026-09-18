import Link from "next/link";
import { GITHUB_URL } from "../lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#111110]/15 dark:border-white/15 bg-[#fafaf8]/95 dark:bg-[#0c0c0e]/95 backdrop-blur transition-colors">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            Design&nbsp;Styles
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em]">
            <Link
              href="/#catalog"
              className="border border-transparent px-2.5 sm:px-3 py-1.5 hover:border-[#111110] hover:bg-[#111110] hover:text-[#fafaf8] dark:hover:border-white dark:hover:bg-white dark:hover:text-[#0c0c0e] transition-colors"
            >
              Catalog
            </Link>
            <Link
              href="/categories/minimal"
              className="hidden px-3 py-1.5 hover:underline md:inline"
            >
              Categories
            </Link>
            <Link
              href="/guides/claude-code"
              className="hidden px-3 py-1.5 hover:underline md:inline"
            >
              Guides
            </Link>
            <Link
              href="/#usage"
              className="hidden px-3 py-1.5 hover:underline sm:inline"
            >
              Usage
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#111110] bg-[#111110] px-2.5 sm:px-3 py-1.5 text-[#fafaf8] hover:bg-transparent hover:text-[#111110] dark:border-white dark:bg-white dark:text-[#0c0c0e] dark:hover:bg-transparent dark:hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          </nav>
          <div className="border-l border-[#111110]/15 dark:border-white/15 pl-2 sm:pl-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
