import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";

interface HomeCtaProps {
  title: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HomeCta({ title, body, primaryCta, secondaryCta }: HomeCtaProps) {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E5E5E3]">
      <Container>
        <div className="rounded-3xl border border-[#E5E5E3] bg-[#FAFAF9] px-8 py-16 lg:px-16 lg:py-24 text-center">
          <h2 className="text-display-2 text-balance text-[#0A0A0A]">{title}</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-[#6B6B6B] text-pretty">{body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button size="lg" variant="secondary" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
