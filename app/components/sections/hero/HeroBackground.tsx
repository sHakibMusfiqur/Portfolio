"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";

import { fadeRight, spring } from "@/lib/animations";

const float = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

const codeLines = [
  { indent: 0, tokens: [{ text: "const ", color: "#c586c0" }, { text: "engineer", color: "#9cdcfe" }, { text: " = ", color: "#d4d4d4" }, { text: "{", color: "#d4d4d4" }] },
  { indent: 1, tokens: [{ text: "name", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: "\"Musfiqur Shakib\"", color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { indent: 1, tokens: [{ text: "role", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: "\"Software Engineer\"", color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { indent: 1, tokens: [{ text: "skills", color: "#9cdcfe" }, { text: ": [", color: "#d4d4d4" }, { text: "\"React\"", color: "#ce9178" }, { text: ", ", color: "#d4d4d4" }, { text: "\"Next.js\"", color: "#ce9178" }, { text: ", ", color: "#d4d4d4" }, { text: "\"Node\"", color: "#ce9178" }, { text: "],", color: "#d4d4d4" }] },
  { indent: 1, tokens: [{ text: "passion", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: "\"Building digital experiences\"", color: "#ce9178" }, { text: ",", color: "#d4d4d4" }] },
  { indent: 1, tokens: [{ text: "available", color: "#9cdcfe" }, { text: ": ", color: "#d4d4d4" }, { text: "true", color: "#569cd6" }, { text: ",", color: "#d4d4d4" }] },
  { indent: 0, tokens: [{ text: "};", color: "#d4d4d4" }] },
];

export default function HeroBackground() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
      className="relative hidden h-[580px] lg:block xl:h-[620px]"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/[0.06] blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-[250px] w-[250px] rounded-full bg-[var(--primary)]/[0.04] blur-[80px]" />
      </div>

      {/* ── Code Editor Card ── */}
      <motion.div
        animate={float(0)}
        className="absolute left-0 top-8 z-20 w-[380px]"
      >
        <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] shadow-[var(--shadow-xl)] backdrop-blur-2xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-2 flex items-center gap-1.5 rounded-lg bg-[var(--surface-overlay)] px-2.5 py-1">
                <Terminal className="size-3 text-[var(--muted)]" strokeWidth={2} />
                <span className="text-[10px] font-medium text-[var(--muted)]">
                  engineer.ts
                </span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex size-6 items-center justify-center rounded-md text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--surface-sunken)] hover:text-[var(--foreground-secondary)]"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="size-3.5 text-[var(--success)]" strokeWidth={2} />
              ) : (
                <Copy className="size-3.5" strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Code content */}
          <div className="p-4 font-mono text-[12px] leading-[1.8]">
            {codeLines.map((line, lineIdx) => (
              <div key={lineIdx} className="flex">
                <span className="mr-4 inline-block w-4 text-right text-[var(--muted-light)] select-none">
                  {lineIdx + 1}
                </span>
                <span>
                  {"  ".repeat(line.indent)}
                  {line.tokens.map((token, tokenIdx) => (
                    <span key={tokenIdx} style={{ color: token.color }}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Portrait Frame ── */}
      <motion.div
        animate={float(1.5)}
        className="absolute bottom-8 right-0 z-10"
      >
        <div className="relative">
          {/* Glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary)]/5 to-transparent blur-sm" />

          {/* Frame */}
          <div className="relative h-[280px] w-[220px] overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--surface-sunken)] shadow-[var(--shadow-2xl)]">
            {/* Empty portrait area — placeholder for user image */}
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[var(--surface-overlay)]">
                  <Sparkles className="size-6 text-[var(--muted-light)]" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-medium text-[var(--muted-light)]">
                  Your Photo
                </p>
              </div>
            </div>
          </div>

          {/* ── Availability Badge (floating on portrait) ── */}
          <motion.div
            animate={float(2.5)}
            className="absolute -left-6 bottom-6 z-30"
          >
            <div className="flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3.5 py-2 shadow-[var(--shadow-lg)] backdrop-blur-2xl">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--success)]" />
              </span>
              <span className="text-[11px] font-semibold text-[var(--foreground)]">
                Available
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Stats floating card ── */}
      <motion.div
        animate={float(3)}
        className="absolute bottom-32 left-8 z-30"
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] px-4 py-3 shadow-[var(--shadow-lg)] backdrop-blur-2xl">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
            <span className="text-xs font-bold text-[var(--primary)]">3+</span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-[var(--foreground)]">
              Years Exp.
            </p>
            <p className="text-[9px] text-[var(--muted)]">
              Building products
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
