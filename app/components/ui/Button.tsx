import Link from "next/link";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = {
    primary: cn(
      "bg-[var(--primary)] text-[var(--primary-foreground)]",
      "hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)]",
      "active:scale-[0.97]"
    ),
    secondary: cn(
      "border border-[var(--border)] bg-white text-[var(--foreground)]",
      "hover:bg-[var(--surface-sunken)] hover:border-[var(--border-focus)]",
      "active:scale-[0.97]"
    ),
    ghost: cn(
      "bg-transparent text-[var(--foreground-secondary)]",
      "hover:bg-[var(--surface-sunken)] hover:text-[var(--foreground)]",
      "active:scale-[0.97]"
    ),
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200",
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
