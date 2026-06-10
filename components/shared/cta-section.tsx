import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
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
}: CtaSectionProps) {
  return (
    <section className="py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <Container>
        <div
          className="rounded-3xl px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 text-center"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}
        >
          <h2 className="text-display-2 text-balance" style={{ color: "var(--text)" }}>{title}</h2>
          {body && (
            <p className="mt-6 mx-auto max-w-2xl text-lg text-pretty" style={{ color: "var(--text-secondary)" }}>
              {body}
            </p>
          )}
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
