"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import Container from "@/components/ui/Container";

import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-6 flex h-16 items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-[#DC143C]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="rounded-full bg-[#DC143C] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#b01030]">
            Resume
          </button>
        </nav>
      </Container>
    </header>
  );
}