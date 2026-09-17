"use client";

import { useTheme } from "./ThemeProvider";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`flex items-center gap-1 border border-[#111110]/20 dark:border-white/20 px-2 py-1 font-mono text-[11px] opacity-75 ${className}`}
        aria-hidden="true"
      >
        <span className="w-3.5 h-3.5 inline-block" />
        <span className="uppercase tracking-[0.12em]">Theme</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center border border-[#111110] dark:border-white/30 bg-white dark:bg-[#18181b] p-0.5 font-mono text-[10.5px] uppercase tracking-wider shadow-sm ${className}`}
      role="group"
      aria-label="Color theme switcher"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        title="Light theme"
        className={`flex items-center gap-1 px-2 py-1 transition-colors cursor-pointer ${
          theme === "light"
            ? "bg-[#111110] text-[#fafaf8] font-bold dark:bg-white dark:text-[#111110]"
            : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
        }`}
      >
        <span aria-hidden="true">☀️</span>
        <span className="hidden sm:inline">Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        title="Dark theme"
        className={`flex items-center gap-1 px-2 py-1 transition-colors cursor-pointer ${
          theme === "dark"
            ? "bg-[#111110] text-[#fafaf8] font-bold dark:bg-white dark:text-[#111110]"
            : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
        }`}
      >
        <span aria-hidden="true">🌙</span>
        <span className="hidden sm:inline">Dark</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        title="System preference"
        className={`flex items-center gap-1 px-1.5 py-1 transition-colors cursor-pointer ${
          theme === "system"
            ? "bg-[#111110] text-[#fafaf8] font-bold dark:bg-white dark:text-[#111110]"
            : "text-[#111110]/60 dark:text-white/60 hover:text-[#111110] dark:hover:text-white"
        }`}
      >
        <span aria-hidden="true">⚙️</span>
        <span className="hidden sm:inline">Auto</span>
      </button>
    </div>
  );
}
