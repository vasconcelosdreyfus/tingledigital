import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import type { ServiceCase } from "@/content/data/service-cases";
import styles from "./service-cases.module.css";

export function ServiceCases({ cases, title, id = "projetos", eyebrow = "Projetos e resultados" }: {
  cases: ServiceCase[];
  title: string;
  id?: string;
  eyebrow?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{eyebrow}</p>
        <h2 className="text-display-2 mb-12 max-w-3xl text-balance">{title}</h2>
        <div className={styles.grid}>
          {cases.map((project) => {
            const external = project.link.href.startsWith("https://");
            return (
              <article key={project.slug} id={project.slug} data-service-case={project.slug} className={`${styles.card} scroll-mt-24 rounded-3xl border p-6 sm:p-8`} style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-elevated)" }}>
                <p className="text-xs font-medium tracking-wide" style={{ color: "var(--text-secondary)" }}>{project.category}</p>
                <div data-case-slot="heading">
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>{project.partners}</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-balance">{project.title}</h3>
                </div>
                <p data-case-slot="context" className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.context}</p>
                <div data-case-slot="delivery">
                  <h4 className="text-sm font-semibold mb-2">A atuação da Tingle</h4>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.delivery}</p>
                </div>
                <dl data-case-slot="results" className="grid grid-cols-2 gap-4 border-t pt-6" style={{ borderColor: "var(--border)" }}>
                  {project.results.map((result) => (
                    <div key={result.label} className="min-w-0">
                      <dt className="text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap">{result.value}</dt>
                      <dd className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{result.label}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={project.link.href} className="inline-flex items-start gap-2 text-sm font-medium hover:underline underline-offset-4" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {project.link.label}
                  {external ? <ArrowUpRight className="size-4 shrink-0 mt-0.5" aria-hidden /> : <ArrowRight className="size-4 shrink-0 mt-0.5" aria-hidden />}
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
