"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Calendar,
  FileText,
  ExternalLink,
  GraduationCap,
  Microscope,
  BrainCircuit,
  BarChart3,
  Network,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

/* ─── Data ─── */

const thesis = {
  title: "Natural Language Processing for Low-Resource Bengali Dialects",
  university: "University of Dhaka",
  year: "2023",
  description:
    "Developed transfer learning methods to improve NLP model performance on underrepresented Bengali dialects, achieving a 23% improvement in sentiment classification accuracy over baseline models.",
  tags: ["NLP", "Transfer Learning", "Low-Resource Languages", "Deep Learning"],
};

const interests = [
  {
    icon: BrainCircuit,
    title: "Natural Language Processing",
    description: "Low-resource languages, sentiment analysis, and text generation.",
    color: "#dc143c",
  },
  {
    icon: Microscope,
    title: "Applied Machine Learning",
    description: "Production ML systems, model optimization, and MLOps.",
    color: "#8b5cf6",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    description: "Scalable data pipelines, real-time analytics, and ETL design.",
    color: "#0ea5e9",
  },
  {
    icon: Network,
    title: "Platform Engineering",
    description: "Developer experience, infrastructure automation, and observability.",
    color: "#16a34a",
  },
];

const timeline = [
  {
    year: "2023",
    title: "B.Sc. in Computer Science",
    description: "Graduated with honors. Published thesis on NLP for Bengali dialects.",
    type: "education" as const,
  },
  {
    year: "2023",
    title: "Research Assistant — NLP Lab",
    description: "Contributed to ongoing research in multilingual language models.",
    type: "research" as const,
  },
  {
    year: "2022",
    title: "Published — Bengali Sentiment Analysis",
    description: "Presented findings at the departmental research symposium.",
    type: "publication" as const,
  },
  {
    year: "2021",
    title: "Started Research Journey",
    description: "Joined the NLP Lab at University of Dhaka as an undergraduate researcher.",
    type: "research" as const,
  },
];

const publications = [
  {
    title: "Transfer Learning for Low-Resource Bengali Sentiment Classification",
    venue: "University of Dhaka Research Symposium",
    year: "2022",
    status: "Published" as const,
  },
  {
    title: "A Survey of NLP Techniques for South Asian Languages",
    venue: "Department of CSE, University of Dhaka",
    year: "2022",
    status: "Published" as const,
  },
  {
    title: "Multilingual Embeddings for Bengali Dialect Identification",
    venue: "Ongoing",
    year: "2024",
    status: "In Review" as const,
  },
];

const typeConfig = {
  education: { color: "#8b5cf6", bg: "bg-purple-500/10" },
  research: { color: "#0ea5e9", bg: "bg-sky-500/10" },
  publication: { color: "#16a34a", bg: "bg-emerald-500/10" },
};

/* ─── Component ─── */

export default function Research() {
  return (
    <Section id="research" className="relative overflow-hidden bg-[var(--surface)]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/[0.02] blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-14">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl"
        >
          <Heading subtitle="Research" title="Academic work" />
          <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
            My research explores the intersection of natural language processing
            and real-world applications — focusing on making AI more accessible
            for underrepresented languages.
          </p>
        </motion.div>

        {/* Thesis card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white p-8 transition-all duration-300 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-lg)] sm:p-10">
            {/* Accent strip */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--primary)] via-rose-500 to-pink-500" />

            <div className="flex flex-col gap-6 pl-2">
              {/* Label */}
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
                  <GraduationCap className="size-4.5 text-[var(--primary)]" strokeWidth={2} />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
                  Thesis
                </span>
                <span className="text-xs text-[var(--muted)]">&middot;</span>
                <span className="text-xs text-[var(--muted)]">{thesis.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold leading-snug tracking-tight text-[var(--foreground)] sm:text-2xl">
                {thesis.title}
              </h3>

              {/* University */}
              <p className="text-sm font-medium text-[var(--foreground-secondary)]">
                {thesis.university}
              </p>

              {/* Description */}
              <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {thesis.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {thesis.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[var(--border-light)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research interests */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
              <Lightbulb className="size-4.5 text-[var(--primary)]" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Research Interests
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--border-light)] bg-white p-5 transition-all duration-300 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-sm)]"
              >
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon
                    className="size-5"
                    style={{ color: item.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two-column: Timeline + Publications */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
                <Calendar className="size-4.5 text-[var(--primary)]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Timeline
              </h3>
            </div>

            <div className="relative flex flex-col">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-3 bottom-3 w-px bg-[var(--border-light)]" />

              {timeline.map((item, i) => {
                const cfg = typeConfig[item.type];
                return (
                  <div key={i} className="relative flex gap-4 py-4">
                    {/* Dot */}
                    <div
                      className="relative z-10 mt-1.5 size-[9px] shrink-0 rounded-full border-2 bg-white"
                      style={{ borderColor: cfg.color }}
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-[var(--muted)]">
                          {item.year}
                        </span>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            cfg.bg
                          )}
                          style={{ color: cfg.color }}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--primary-muted)]">
                <BookOpen className="size-4.5 text-[var(--primary)]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Publications
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-[var(--border-light)] bg-white p-5 transition-all duration-300 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-sm)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-sunken)]">
                        <FileText className="size-4 text-[var(--muted)]" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-snug text-[var(--foreground)]">
                          {pub.title}
                        </p>
                        <p className="mt-1 text-xs text-[var(--muted)]">
                          {pub.venue} &middot; {pub.year}
                        </p>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                        pub.status === "Published"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-amber-500/10 text-amber-600"
                      )}
                    >
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Placeholder card */}
              <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/50 p-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-sunken)]">
                  <FileText className="size-4 text-[var(--muted-light)]" strokeWidth={2} />
                </div>
                <p className="text-sm text-[var(--muted-light)]">
                  More publications coming soon...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
