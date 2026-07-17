import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
