import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--primary-muted)] bg-[var(--primary-muted)] px-4 py-1.5 text-sm font-medium text-[var(--primary)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
