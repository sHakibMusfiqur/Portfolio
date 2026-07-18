"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  Clock,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { fadeUp, viewport } from "@/lib/animations";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/components/constants/socials";
import ContactForm from "./ContactForm";

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.location,
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: CONTACT_INFO.availability,
    href: null,
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.02] blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-[300px] w-[300px] rounded-full bg-[var(--accent)]/[0.02] blur-3xl" />
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
          <Heading subtitle="Contact" title="Get in touch" />
          <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
            Have a project in mind, a question, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-8"
          >
            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--border-light)] bg-white p-5 transition-all duration-300 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-sm)]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-sunken)]">
                    <item.icon
                      className="size-5 text-[var(--muted)]"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-0.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-[var(--foreground)]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-[var(--foreground-secondary)]">
                Find me online
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-[var(--border-light)] bg-white p-4 transition-all duration-300 hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-sm)]"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--surface-sunken)] transition-colors duration-300 group-hover:bg-[var(--primary-muted)]">
                      <link.icon
                        className="size-4 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className="size-3 text-[var(--muted-light)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                        strokeWidth={2}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center gap-4 rounded-2xl border border-[var(--border-light)] bg-[var(--surface)] p-5 transition-all duration-300",
                "hover:border-[var(--primary)]/20 hover:bg-[var(--primary-muted)] hover:shadow-[var(--shadow-sm)]"
              )}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--primary-muted)] transition-colors duration-300 group-hover:bg-[var(--primary)]">
                <Download
                  className="size-5 text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Download Resume
                </p>
                <p className="text-xs text-[var(--muted)]">
                  PDF &middot; Updated 2024
                </p>
              </div>
              <ArrowUpRight
                className="ml-auto size-4 text-[var(--muted-light)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                strokeWidth={2}
              />
            </Link>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="rounded-3xl border border-[var(--border-light)] bg-white p-7 shadow-[var(--shadow-xs)] sm:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Send a message
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Fill out the form and I&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
