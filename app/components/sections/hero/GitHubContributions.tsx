"use client";

import { motion } from "framer-motion";
import { GitFork, Star, TrendingUp, Calendar } from "lucide-react";

import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const contributions = [
  { month: "Jan", count: 12 },
  { month: "Feb", count: 24 },
  { month: "Mar", count: 18 },
  { month: "Apr", count: 32 },
  { month: "May", count: 28 },
  { month: "Jun", count: 42 },
  { month: "Jul", count: 36 },
  { month: "Aug", count: 20 },
  { month: "Sep", count: 15 },
  { month: "Oct", count: 8 },
  { month: "Nov", count: 0 },
  { month: "Dec", count: 0 },
];

const stats = [
  { icon: GitFork, label: "Total Contributions", value: "235+" },
  { icon: Star, label: "Stars Earned", value: "48" },
  { icon: TrendingUp, label: "Streak", value: "14 days" },
];

const maxCount = Math.max(...contributions.map((c) => c.count));

export default function GitHubContributions() {
  return (
    <section
      aria-label="GitHub contributions"
      className="relative w-full pb-20"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-2xl shadow-[var(--shadow-lg)] sm:p-8"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
                <GitFork className="size-5 text-[var(--primary)]" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[var(--foreground)]">
                  GitHub Activity
                </h2>
                <p className="text-xs text-[var(--muted)]">
                  musfiqurshakib
                </p>
              </div>
            </div>

            {/* Year selector */}
            <div className="flex items-center gap-1 rounded-full border border-[var(--glass-border)] bg-[var(--surface-overlay)] p-1">
              {["2024", "2023", "2022"].map((year, i) => (
                <button
                  key={year}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                    i === 0
                      ? "bg-[var(--primary-muted)] text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground-secondary)]"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="flex items-end gap-1.5 sm:gap-2">
              {contributions.map((contrib, i) => (
                <div key={contrib.month} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-md transition-all duration-300 sm:rounded-lg"
                    style={{
                      height: `${contrib.count > 0 ? Math.max((contrib.count / maxCount) * 100, 8) : 4}px`,
                      backgroundColor:
                        contrib.count === 0
                          ? "var(--surface-sunken)"
                          : contrib.count > 30
                          ? "var(--primary)"
                          : contrib.count > 15
                          ? "rgba(220, 20, 60, 0.5)"
                          : "rgba(220, 20, 60, 0.25)",
                    }}
                  />
                  <span className="text-[10px] text-[var(--muted)]">{contrib.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-3 border-t border-[var(--glass-border)] pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--surface-sunken)]">
                  <stat.icon className="size-4 text-[var(--muted)]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
