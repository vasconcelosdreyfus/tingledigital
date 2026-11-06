"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { testimonials } from "@/content/data/testimonials";

const quotes = Object.values(testimonials);
/** Manual navigation keeps real testimonials readable, including on mobile and reduced motion. */
export function TestimonialMarquee() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("immersive");
  const quote = quotes[index];
  if (!quote) return null;
  return (
    <section className="studio-testimonials">
      <Container size="xl">
        <div className="quote-layout">
          <p className="section-index">04 / {t("voicesLabel")}</p>
          <div>
            <div className="quote-content" aria-live="polite" aria-atomic="true">
              <blockquote>“{quote.quote}”</blockquote>
              <p className="quote-author">
                {quote.author}
                <span>
                  {quote.role} · {quote.company}
                </span>
              </p>
            </div>
            <div className="quote-navigation">
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(quotes.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setIndex((index - 1 + quotes.length) % quotes.length)}
                aria-label={t("previousQuote")}
              >
                <ArrowLeft size={20} aria-hidden />
              </button>
              <button
                onClick={() => setIndex((index + 1) % quotes.length)}
                aria-label={t("nextQuote")}
              >
                <ArrowRight size={20} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
