import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none text-2xl font-extrabold tracking-tight"
    >
      <span className="text-slate-900">Musfiqur</span>
      <span className="text-[#DC143C]">.</span>
    </Link>
  );
}