import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { team } from "@/content/data/team";

export function PartnerExperience() {
  return (
    <section className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>A experiência dos sócios</p>
        <h2 className="text-display-2 max-w-3xl text-balance">Quem conhece a operação sabe onde transformar.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>A Tingle reúne trajetórias profissionais em distribuidoras de energia, empresas de serviços e projetos de eficiência energética.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
              <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{member.role}</p>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{member.experience}</p>
            </article>
          ))}
        </div>
        <Link href="/sobre#socios" className="mt-10 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4">Conheça a trajetória dos sócios <ArrowRight className="size-4" aria-hidden /></Link>
      </Container>
    </section>
  );
}
