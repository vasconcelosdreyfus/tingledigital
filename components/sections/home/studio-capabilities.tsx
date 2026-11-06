"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Smartphone, Layers3, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/container";
const options = [
  { key: "app", Icon: Smartphone, brief: "briefApp" },
  { key: "platform", Icon: Layers3, brief: "briefPlatform" },
  { key: "experience", Icon: Sparkles, brief: "briefExperience" },
] as const;

export function StudioCapabilities() {
  const t = useTranslations("experience");
  const [selected, setSelected] = useState(0);
  const option = options[selected] ?? options[0];
  return (
    <section className="creation-lab" id="crie" aria-labelledby="creation-title">
      <Container size="xl">
        <div className="section-heading">
          <div>
            <p className="section-index">{t("labEyebrow")}</p>
            <h2 id="creation-title">{t("labTitle")}</h2>
          </div>
          <p>{t("labIntro")}</p>
        </div>
        <div className="creation-layout">
          <div className="creation-options" role="group" aria-label={t("labIntro")}>
            {options.map((item, i) => (
              <button
                className="creation-option"
                type="button"
                key={item.key}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <item.Icon aria-hidden />
                <span>
                  <strong>{t(item.key)}</strong>
                  <small>{t(`${item.key}Hint`)}</small>
                </span>
              </button>
            ))}
          </div>
          <div className="creation-output">
            <div className="creation-output-header">
              <span>
                <span className="signal-dot" />
                {t("outputLabel")}
              </span>
              <span>{t("outputMeta")}</span>
            </div>
            <ol className="creation-flow" aria-live="polite" aria-atomic="true">
              {[1, 2, 3].map((step) => (
                <li key={`${option.key}-${step}`}>
                  <h3>{t(`${option.key}Step${step}`)}</h3>
                  <p>{t(`${option.key}Body${step}`)}</p>
                </li>
              ))}
            </ol>
            <Link
              className="creation-cta"
              href={`/contato?ideia=${encodeURIComponent(t(option.brief))}`}
            >
              {t("briefCta")}
              <ArrowUpRight size={18} aria-hidden />
            </Link>
            <p className="creation-note">{t("briefNote")}</p>
          </div>
        </div>
        <div className="creation-service-links">
          <Link href="/consultoria">
            {t("consultingLink")}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          <Link href="/utilities">
            {t("energyLink")}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
