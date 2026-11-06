import * as React from "react";
import { Container } from "@/components/primitives/container";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  eyebrow?: string;
}

export function TestimonialBlock({ testimonial, eyebrow }: TestimonialBlockProps) {
  return (
    <section
      className="py-24 lg:py-32"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--surface-elevated)",
      }}
    >
      <Container size="md">
        {eyebrow && (
          <p
            className="text-eyebrow mb-8 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            {eyebrow}
          </p>
        )}
        <blockquote className="text-center">
          <p
            className="text-display-3 leading-tight text-balance"
            style={{ color: "var(--text)" }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-10 flex items-center justify-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            >
              {testimonial.author
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="text-left">
              <p className="font-semibold" style={{ color: "var(--text)" }}>
                {testimonial.author}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
