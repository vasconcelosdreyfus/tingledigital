"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Pause, Play, ArrowDown, ArrowUp } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { testimonials } from "@/content/data/testimonials";

const entries = Object.values(testimonials);
function Quotes({
  items,
  duplicate = false,
}: {
  items: typeof entries;
  duplicate?: boolean;
}) {
  return (
    <div
      className="quote-group"
      aria-hidden={duplicate || undefined}
      data-duplicate={duplicate}
    >
      {items.map((t) => (
        <figure key={t.author} className="quote-card">
          <blockquote
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="quote-avatar" aria-hidden>
              {t.author
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span>
              <span className="block text-sm font-semibold">{t.author}</span>
              <span className="block text-xs" style={{ color: "var(--text-secondary)" }}>
                {t.role} · {t.company}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
export function TestimonialMarquee() {
  const t = useTranslations("testimonials");
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const half = Math.ceil(entries.length / 2);
  return (
    <section
      className="testimonial-section relative overflow-hidden py-24 lg:py-32"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--surface-elevated)",
      }}
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="text-display-2 text-balance">{t("title")}</h2>
        </div>
        <div className="quote-controls">
          <button
            type="button"
            className="quote-pause"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            disabled={expanded}
          >
            {paused ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
            {t(paused ? "resume" : "pause")}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="partner-quotes"
          >
            {t(expanded ? "collapse" : "readAll")}
            {expanded ? (
              <ArrowUp size={14} aria-hidden />
            ) : (
              <ArrowDown size={14} aria-hidden />
            )}
          </button>
        </div>
        <div
          id="partner-quotes"
          ref={ref}
          className="quote-viewport"
          data-expanded={expanded}
          data-paused={paused || !visible}
        >
          {[entries.slice(0, half), entries.slice(half)].map((items, i) => (
            <div key={i} className="quote-column">
              <div className="quote-track">
                <Quotes items={items} />
                <Quotes items={items} duplicate />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
