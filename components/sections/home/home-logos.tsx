import * as React from "react";
import { Container } from "@/components/primitives/container";

interface HomeLogosProps {
  eyebrow: string;
  clients: { name: string }[];
}

export function HomeLogos({ eyebrow, clients }: HomeLogosProps) {
  return (
    <section className="bg-[#FAFAF9] py-20 border-y border-[#E5E5E3]">
      <Container>
        <p className="text-center text-sm font-medium text-[#6B6B6B] mb-10">
          {eyebrow}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((c) => (
            <span
              key={c.name}
              className="text-xl font-semibold text-[#A0A0A0] hover:text-[#6B6B6B] transition-colors tracking-tight"
            >
              {c.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
