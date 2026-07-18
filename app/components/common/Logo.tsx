import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none text-2xl font-extrabold tracking-tight"
    >
      <span className="text-[var(--foreground)]">Musfiqur</span>
      <span className="text-[var(--primary)]">.</span>
    </Link>
  );
}