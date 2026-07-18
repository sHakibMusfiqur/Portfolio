import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 shadow-[var(--shadow-sm)] backdrop-blur-xl",
        "transition-all duration-300",
        hover && "hover:border-[var(--glass-border-hover)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
