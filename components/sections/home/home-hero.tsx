"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { BrandPlayground } from "@/components/brand/brand-playground";

export function HomeHero() {
  const t = useTranslations("immersive");
  return (
    <section className="studio-hero" aria-labelledby="hero-title">
      <Container size="xl">
        <div className="hero-kicker">
          <span className="brand-dot" />
          {t("eyebrow")}
          <span className="hero-location">{t("location")}</span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-title" className="studio-title">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
              <br />
              <span>{t("titleAccent")}</span>
            </h1>
            <p className="hero-description">{t("description")}</p>
            <div className="hero-actions">
              <Link className="studio-button" href="#produtos">
                {t("explore")}
                <ArrowDown size={17} aria-hidden />
              </Link>
              <Link className="text-link" href="/contato">
                {t("talk")}
                <ArrowUpRight size={17} aria-hidden />
              </Link>
            </div>
          </div>
          <BrandPlayground />
        </div>
        <div className="hero-footnote">
          <span>{t("signature")}</span>
          <a href="#produtos">
            {t("scroll")}
            <ArrowDown size={14} aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
