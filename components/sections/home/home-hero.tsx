"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight, ArrowDown, Pause, Play, Plus } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { CreativeSculpture } from "@/components/experience/creative-sculpture";

export function HomeHero() {
  const t = useTranslations("experience");
  const [mode, setMode] = useState(0);
  const [paused, setPaused] = useState(false);
  return (
    <section className="future-hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden />
      <div className="hero-art">
        <CreativeSculpture mode={mode} paused={paused} />
      </div>
      <Container size="xl" className="future-hero-content">
        <div className="future-eyebrow">
          <span className="signal-dot" />
          {t("eyebrow")}
          <span>{t("origin")}</span>
        </div>
        <div className="future-headline">
          <h1 id="hero-title">
            <span>{t("line1")}</span>
            <span>{t("line2")}</span>
            <span className="future-accent">{t("line3")}</span>
          </h1>
          <p>{t("intro")}</p>
          <div className="future-actions">
            <Link className="future-cta" href="#produtos">
              {t("explore")}
              <ArrowUpRight size={19} aria-hidden />
            </Link>
            <Link className="text-link" href="#crie">
              {t("create")}
              <ArrowDown size={16} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="scene-caption">
          <Plus size={16} aria-hidden />
          <span>{t("sceneCaption")}</span>
          <span className="scene-index">0{mode + 1} / 03</span>
        </div>
        <div className="scene-controls">
          <p>{t("shapePrompt")}</p>
          <div className="scene-buttons" role="group" aria-label={t("shapePrompt")}>
            {["imagine", "connect", "build"].map((key, i) => (
              <button
                type="button"
                key={key}
                aria-pressed={mode === i}
                onClick={() => setMode(i)}
              >
                <span>0{i + 1}</span>
                {t(key)}
              </button>
            ))}
            <button
              className="scene-pause"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? t("resume") : t("pause")}
              aria-pressed={paused}
            >
              {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
            </button>
          </div>
        </div>
        <div className="future-footer">
          <span>{t("disciplines")}</span>
          <a href="#produtos">
            {t("scroll")}
            <ArrowDown size={14} aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
