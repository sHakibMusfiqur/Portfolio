import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center shrink-0"
      style={{ width: "max-content", paddingLeft: 60, whiteSpace: "nowrap" }}
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
