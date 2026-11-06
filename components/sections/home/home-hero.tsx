"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Button } from "@/components/ui/button";
import { BackgroundPaths } from "@/components/motion/background-paths";
import { AnimatedTingleMark } from "@/components/brand/tingle-mark";

export function HomeHero() {
  const t = useTranslations("hero");
  const words = t.raw("rotatingWords") as string[];
  const [wordIdx, setWordIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const visible = useInView(section);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce !== false || paused || !visible) return;
    const timer = setInterval(() => {
      if (!document.hidden) setWordIdx((i) => (i + 1) % words.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [words.length, reduce, paused, visible]);

  return (
    <section
      ref={section}
      className="original-hero relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40"
    >
      <BackgroundPaths />
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedTingleMark className="mx-auto mb-8 h-20 w-auto sm:h-24" />
          <div className="hero-arrive mb-8 inline-flex">
            <Link
              href="/cases#leitura-delas"
              className="hero-news group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
              {t("pill")}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <h1
            className="text-display-1 hero-arrive text-balance"
            style={{ color: "var(--text)" }}
          >
            <span>{t("title")}</span> <span className="sr-only">{words[0]}</span>
            <span className="hero-rotator" aria-hidden>
              {words.map((word, i) => (
                <span key={word} data-active={i === wordIdx}>
                  {word}
                </span>
              ))}
            </span>
          </h1>
          <p
            className="hero-arrive mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("subtitle")}
          </p>
          <div className="hero-arrive mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="#projetos">
                {t("primaryCta")}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contato">{t("secondaryCta")}</Link>
            </Button>
          </div>
          <button
            type="button"
            className="hero-motion-control"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
          >
            {paused ? <Play size={12} aria-hidden /> : <Pause size={12} aria-hidden />}
            {t(paused ? "resume" : "pause")}
          </button>
        </div>
      </Container>
    </section>
  );
}
