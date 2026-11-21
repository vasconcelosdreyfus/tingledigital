import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { Reveal } from "@/components/motion/reveal";

interface FaqItem {
  question: string;
  answer: string;
}

const PRODUCT_LINKS: Record<string, string> = {
  Eter: "https://eter.social",
  "The Candidate": "https://thecandidate.app",
};

function renderAnswerWithProductLinks(answer: string) {
  const parts = answer.split(/\b(The Candidate|Eter)\b/g);
  return parts.map((part, index) => {
    const href = PRODUCT_LINKS[part];
    if (!href) {
      return <Fragment key={index}>{part}</Fragment>;
    }
    return (
      <a
        key={`${part}-${index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[var(--text)] underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        {part}
      </a>
    );
  });
}

export async function HomeFaq() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as FaqItem[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-[var(--border)] bg-[var(--bg)] py-20 lg:py-28"
    >
      <Container size="md">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-eyebrow mb-4 text-[var(--text-secondary)]">
              {t("eyebrow")}
            </p>
            <h2
              id="faq-title"
              className="text-display-2 text-balance text-[var(--text)]"
            >
              {t("title")}
            </h2>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] transition-colors open:border-[var(--border-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-[var(--text-secondary)] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {renderAnswerWithProductLinks(item.answer)}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
