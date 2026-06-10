"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { testimonials } from "@/content/data/testimonials";

const allTestimonials = Object.values(testimonials);

function Column({ items, duration }: { items: typeof allTestimonials; duration: number }) {
  return (
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...items, ...items].map((t, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl max-w-xs w-full"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="flex items-center gap-3 mt-6">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            >
              {t.author.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t.author}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role} · {t.company}</div>
            </div>
          </footer>
        </div>
      ))}
    </motion.div>
  );
}

export function TestimonialMarquee() {
  const half = Math.ceil(allTestimonials.length / 2);
  const col1 = allTestimonials.slice(0, half);
  const col2 = allTestimonials.slice(half);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--surface-elevated)",
      }}
    >
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>Quem confia</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            Parceiros que crescem com a gente.
          </h2>
        </div>
        <div
          className="flex justify-center gap-6 max-h-[600px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Column items={col1} duration={28} />
          <Column items={col2} duration={32} />
        </div>
      </Container>
    </section>
  );
}
