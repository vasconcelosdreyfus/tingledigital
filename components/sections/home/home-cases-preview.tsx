import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Pill } from "@/components/primitives/pill";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CasePillar } from "@/types/case";

interface CasePreviewItem {
  slug: string;
  client: string;
  title: string;
  excerpt: string;
  pillar: CasePillar;
  resultLabel: string;
  resultValue: string;
}

interface HomeCasesPreviewProps {
  eyebrow: string;
  title: string;
  cases: CasePreviewItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

const pillarPillColor: Record<CasePillar, "yellow" | "pink" | "cyan" | "lime"> = {
  produtos: "cyan",
  social: "yellow",
  utilities: "lime",
  marketing: "pink",
};

const pillarResultColor: Record<CasePillar, string> = {
  produtos: "text-[--color-accent-cyan]",
  social: "text-[--color-accent-yellow]",
  utilities: "text-[--color-accent-lime]",
  marketing: "text-[--color-accent-pink]",
};

export function HomeCasesPreview({
  eyebrow,
  title,
  cases,
  ctaHref = "/cases",
  ctaLabel = "Todos os cases",
}: HomeCasesPreviewProps) {
  return (
    <Section spacing="xl">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow color="pink">{eyebrow}</Eyebrow>
            <h2 className="text-display-2 mt-4 text-balance">{title}</h2>
          </div>
          <Link
            href={ctaHref}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent-yellow] hover:underline underline-offset-4"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group flex flex-col rounded-3xl border border-[--color-border] bg-[--color-surface]/40 p-7 transition-colors hover:bg-[--color-surface]"
            >
              <div className="flex items-center justify-between">
                <Pill color={pillarPillColor[c.pillar]}>{c.client}</Pill>
                <ArrowUpRight
                  className="h-5 w-5 text-[--color-text-muted] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--color-text]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-balance">{c.title}</h3>
              <p className="mt-3 text-sm text-[--color-text-muted] leading-relaxed">
                {c.excerpt}
              </p>
              <dl className="mt-auto pt-6 border-t border-[--color-border]">
                <dt className="text-eyebrow text-[--color-text-subtle]">
                  {c.resultLabel}
                </dt>
                <dd className={cn("text-2xl font-black mt-1", pillarResultColor[c.pillar])}>
                  {c.resultValue}
                </dd>
              </dl>
            </Link>
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent-yellow] hover:underline underline-offset-4"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
