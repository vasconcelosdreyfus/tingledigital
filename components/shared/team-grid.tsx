import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/primitives/container";

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

interface TeamGridProps {
  eyebrow: string;
  title: string;
  members: TeamMember[];
}

export function TeamGrid({ eyebrow, title, members }: TeamGridProps) {
  return (
    <section id="socios" className="scroll-mt-24 py-24 lg:py-32" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface-elevated)" }}>
      <Container>
        <p className="text-eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>{eyebrow}</p>
        <h2 className="text-display-2 mb-12 max-w-3xl text-balance" style={{ color: "var(--text)" }}>{title}</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name}>
              <div
                className="relative aspect-square w-full overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
              >
                <Image
                  src={m.photo}
                  alt={`Foto de ${m.name}`}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 font-semibold" style={{ color: "var(--text)" }}>{m.name}</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{m.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
