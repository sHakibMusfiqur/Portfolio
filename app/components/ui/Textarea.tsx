import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--foreground-secondary)]"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "min-h-[120px] rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--foreground)]",
            "placeholder:text-[var(--muted-light)]",
            "transition-all duration-200",
            "focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10",
            error && "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]/10",
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

Textarea.displayName = "Textarea";

export default Textarea;
