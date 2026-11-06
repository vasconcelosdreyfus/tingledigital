"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Plus } from "lucide-react";
import { Container } from "@/components/primitives/container";

export function StudioCapabilities() {
  const t = useTranslations("immersive");
  const services = [
    { key: "products", href: "/cases" },
    { key: "consulting", href: "/consultoria" },
    { key: "energy", href: "/utilities" },
  ];
  return (
    <section className="studio-services">
      <Container size="xl">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / {t("servicesLabel")}</p>
            <h2>{t("servicesTitle")}</h2>
          </div>
          <p>{t("servicesBody")}</p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <details name="studio-services" key={service.key} open={index === 0}>
              <summary>
                <span className="service-number">0{index + 1}</span>
                <h3>{t(`${service.key}Title`)}</h3>
                <Plus size={22} aria-hidden />
              </summary>
              <div className="service-description">
                <p>{t(`${service.key}Body`)}</p>
                <Link className="text-link" href={service.href}>
                  {t("learnMore")}
                  <ArrowUpRight size={17} aria-hidden />
                </Link>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
