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
        "rounded-2xl border border-[var(--border-light)] bg-white p-6 shadow-[var(--shadow-xs)]",
        "transition-all duration-300",
        hover && "hover:border-[var(--border-focus)] hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      {children}
    </div>
  );
}
