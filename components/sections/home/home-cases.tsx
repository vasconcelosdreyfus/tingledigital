import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { ArrowUpRight } from "lucide-react";

interface CaseItem {
  slug: string;
  client: string;
  title: string;
  excerpt: string;
  resultLabel: string;
  resultValue: string;
}

interface HomeCasesProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cases: CaseItem[];
}

export function HomeCases({ eyebrow, title, subtitle, cases }: HomeCasesProps) {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E5E5E3]">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-eyebrow text-[#6B6B6B] mb-4">{eyebrow}</p>
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">{title}</h2>
          {subtitle && (
            <p className="mt-6 text-lg text-[#6B6B6B] text-pretty">{subtitle}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-[#E5E5E3] bg-[#FAFAF9] p-7 hover:border-[#D4D4D2] hover:bg-white transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider">
                  {c.client}
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#A0A0A0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0A0A0A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] text-balance">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed flex-1">
                {c.excerpt}
              </p>
              <div className="mt-8 pt-6 border-t border-[#E5E5E3]">
                <div className="text-xs uppercase tracking-wider text-[#A0A0A0]">
                  {c.resultLabel}
                </div>
                <div className="text-2xl font-bold text-[#0A0A0A] mt-1">
                  {c.resultValue}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
