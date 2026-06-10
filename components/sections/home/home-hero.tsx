"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundPaths } from "@/components/motion/background-paths";

interface HomeHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const ROTATING_WORDS = ["experiências.", "produtos.", "futuros.", "impacto."];

export function HomeHero({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  const [wordIdx, setWordIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
      <BackgroundPaths />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex"
          >
            <Link
              href="/cognita"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm shadow-sm transition-colors"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg)",
                color: "var(--text-secondary)",
              }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--text)" }} />
              <span>Lançamento Cognita 2025 — saiba mais</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-1 text-balance"
            style={{ color: "var(--text)" }}
          >
            <span>{titleLine1} {titleLine2}</span>{" "}
            <span className="relative inline-block min-w-[5ch] align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ROTATING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 mx-auto max-w-2xl text-lg text-pretty leading-relaxed sm:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
