"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { FEATURED_PROJECTS, PROJECTS } from "@/components/data/projects";
import { fadeUp, viewport } from "@/lib/animations";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <Heading id="projects-heading" subtitle="Projects" title="Selected work" />
            <p className="mt-5 text-base text-[var(--muted)] sm:text-lg lg:text-xl">
              A selection of projects that showcase my approach to building
              scalable, user-focused software.
            </p>
          </div>

          <Link
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors duration-300 hover:text-[var(--primary-hover)]"
          >
            View all projects
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>

        {/* Featured projects */}
        <div className="flex flex-col gap-10">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Secondary projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
