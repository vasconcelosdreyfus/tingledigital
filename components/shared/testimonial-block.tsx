import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  eyebrow?: string;
  tone?: "default" | "elevated";
}

export function TestimonialBlock({
  testimonial,
  eyebrow,
  tone = "default",
}: TestimonialBlockProps) {
  return (
    <Section spacing="lg" tone={tone}>
      <Container size="md">
        {eyebrow && <Eyebrow className="mb-8">{eyebrow}</Eyebrow>}
        <blockquote className="text-display-3 text-balance">
          <span className="text-[--color-accent-yellow]">"</span>
          {testimonial.quote}
          <span className="text-[--color-accent-yellow]">"</span>
        </blockquote>
        <footer className="mt-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[--color-surface-elevated] border border-[--color-border] flex items-center justify-center text-[--color-text-muted] text-sm font-semibold">
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-[--color-text-muted]">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
