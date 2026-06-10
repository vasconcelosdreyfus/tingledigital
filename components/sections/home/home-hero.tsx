"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundPaths } from "@/components/motion/background-paths";

export function HomeHero() {
  const t = useTranslations("hero");
  const words = t.raw("rotatingWords") as string[];
  const [wordIdx, setWordIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

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
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--text)" }}
              />
              <span>{t("pill")}</span>
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
            <span>{t("title")}</span>{" "}
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
                  {words[wordIdx]}
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
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="#produtos">{t("primaryCta")}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">{t("secondaryCta")}</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
