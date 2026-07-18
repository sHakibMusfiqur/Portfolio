import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
