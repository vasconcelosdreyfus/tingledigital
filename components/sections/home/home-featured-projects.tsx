import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFormatter, getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { Reveal } from "@/components/motion/reveal";
import { apps } from "@/content/data/apps";
import styles from "./home-featured-projects.module.css";

const projects = [
  {
    key: "qbanho",
    image: "/cases/qbanho-trocador.webp",
    href: "/cases#trocadores-de-calor",
    creditHref: "https://www.qbanho.com.br/product",
  },
  {
    key: "rock",
    image: "/cases/rock-in-rio-espaco-plural.webp",
    href: "/cases#leitura-delas",
    values: apps
      .find((app) => app.slug === "leitura-delas")!
      .metrics!.slice(0, 2)
      .map((metric) => metric.value),
  },
  {
    key: "circuito",
    image: "/cases/circuito-musical-das-aguas.webp",
    href: "/cases#circuito-musical-das-aguas",
    creditHref:
      "https://pmspa.rj.gov.br/sao-pedro-da-aldeia-celebra-inauguracao-do-centro-esportivo-municipal-rei-pele/",
  },
] as const;

export async function HomeFeaturedProjects() {
  const t = await getTranslations("featuredProjects");
  const format = await getFormatter();
  return (
    <section
      id="projetos"
      aria-labelledby="featured-projects-title"
      className="border-t border-[var(--border)] bg-[var(--bg)] py-20 lg:py-24"
    >
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-eyebrow mb-4 text-[var(--text-secondary)]">{t("eyebrow")}</p>
          <h2 id="featured-projects-title" className="text-display-2 text-balance">
            {t("title")}
          </h2>
        </Reveal>
        <div className={`${styles.grid} mx-auto max-w-6xl`}>
          {projects.map((project, index) => (
            <article
              key={project.key}
              data-featured-project={project.key}
              className={`${styles.project} ${index === 0 ? styles.featured : ""}`}
            >
              <figure>
                <div
                  className={`${styles.media} ${project.key === "qbanho" ? styles.product : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={t(`${project.key}.alt`)}
                    fill
                    sizes={index === 0
                      ? "(min-width: 1280px) 600px, (min-width: 1024px) 52vw, 100vw"
                      : "(min-width: 1280px) 560px, (min-width: 768px) 46vw, 100vw"}
                    className={styles.photo}
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {"creditHref" in project ? (
                    <a
                      href={project.creditHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--border)] underline-offset-4 hover:decoration-current"
                    >
                      {t(`${project.key}.caption`)}
                    </a>
                  ) : (
                    t(`${project.key}.caption`)
                  )}
                </figcaption>
              </figure>
              <div className={styles.copy}>
                <div>
                  <p className="text-eyebrow mb-3 text-[var(--text-secondary)]">
                    {t(`${project.key}.category`)}
                  </p>
                  <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    {t(`${project.key}.title`)}
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-medium">{t(`${project.key}.lead`)}</p>
                  <p className="leading-relaxed text-[var(--text-secondary)]">
                    {t(`${project.key}.delivery`)}
                  </p>
                </div>
                <dl className={styles.results}>
                  {[0, 1].map((metric) => (
                    <div
                      key={metric}
                      className="flex flex-col gap-2"
                      data-project-metric={metric}
                    >
                      <dt className="order-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {t(`${project.key}.metric${metric}Label`)}
                      </dt>
                      <dd className="text-3xl font-semibold tracking-tight whitespace-nowrap tabular-nums sm:text-4xl">
                        {project.key === "rock"
                          ? format.number(
                              Number(project.values[metric]?.replace(/\./g, ""))
                            )
                          : project.key === "qbanho"
                            ? t(`scale.${metric === 0 ? "thousands" : "millions"}`)
                            : t(`${project.key}.metric${metric}Value`)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={project.href}
                  className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                >
                  {t("cta")}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
