import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--foreground-secondary)]"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "rounded-xl border border-[var(--glass-border)] bg-[var(--surface-overlay)] px-4 py-3 text-sm text-[var(--foreground)] backdrop-blur-sm",
            "placeholder:text-[var(--muted-light)]",
            "transition-all duration-300",
            "focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:shadow-[var(--shadow-glow-sm)]",
            error && "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
