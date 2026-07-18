import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none text-[36px] font-[800] leading-none tracking-tight"
    >
      <span className="text-white">M</span>
      <span className="text-[#DC143C]">S</span>
    </Link>
  );
}
