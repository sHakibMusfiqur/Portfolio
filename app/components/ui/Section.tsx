import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  "aria-labelledby": ariaLabelledBy,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("py-20 md:py-28", className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
