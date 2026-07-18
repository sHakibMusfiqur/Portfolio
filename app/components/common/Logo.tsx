import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex select-none shrink-0"
      style={{ width: 220, paddingLeft: 60 }}
    >
      <span
        className="text-white font-[700] leading-none tracking-[-0.02em]"
        style={{ fontSize: 22 }}
      >
        Musfiqur Shakib
      </span>
    </Link>
  );
}
