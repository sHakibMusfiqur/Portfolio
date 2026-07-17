import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20",
    secondary:
      "border border-zinc-700 bg-transparent hover:bg-zinc-900 text-white",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
