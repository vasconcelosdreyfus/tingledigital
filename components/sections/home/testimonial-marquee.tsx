"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/primitives/container";
import { testimonials } from "@/content/data/testimonials";

const allTestimonials = Object.values(testimonials);

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

function Column({ items, duration }: { items: TestimonialItem[]; duration: number }) {
  return (
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...items, ...items].map((t, i) => (
        <div
          key={i}
          className="p-7 rounded-2xl max-w-xs w-full transition-all hover:scale-[1.02]"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
            boxShadow: "0 2px 8px -2px color-mix(in srgb, var(--text) 6%, transparent)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="flex items-center gap-3 mt-6">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
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
  const t = useTranslations("testimonials");
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
          <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{t("eyebrow")}</p>
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>
            {t("title")}
          </h2>
        </div>
        <div
          className="flex justify-center gap-6 max-h-[600px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <Column items={col1} duration={40} />
          <div className="hidden md:block"><Column items={col2} duration={50} /></div>
        </div>
      </Container>
    </section>
  );
}
