import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: "default" | "elevated" | "accent-yellow";
}

export function CtaSection({
  title,
  body,
  primaryCta,
  secondaryCta,
  tone = "elevated",
}: CtaSectionProps) {
  return (
    <Section spacing="xl" tone={tone}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-end">
          <div>
            <h2 className="text-display-2 text-balance">{title}</h2>
            {body && (
              <p className="mt-6 max-w-xl text-lg text-[--color-text-muted] text-pretty">
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Button asChild size="xl">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild size="xl" variant="ghost">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
