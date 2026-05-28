import * as React from "react";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Marquee } from "@/components/motion/marquee";
import type { Client } from "@/content/data/clients";

interface LogosMarqueeProps {
  eyebrow?: string;
  title?: string;
  clients: Client[];
  tone?: "default" | "elevated";
}

const brandStyles: Record<string, { gradient: string; shape: string }> = {
  "Casa Brasil": { gradient: "from-[#FFEB00] to-[#FF9500]", shape: "rounded-md" },
  Hubz: { gradient: "from-[#B8FF00] to-[#00F0FF]", shape: "rounded-full" },
  QBanho: { gradient: "from-[#00F0FF] to-[#7A00FF]", shape: "rounded-md" },
  "Setor Energético": { gradient: "from-[#B8FF00] to-[#FFEB00]", shape: "rounded-full" },
  Cognita: { gradient: "from-[#00F0FF] to-[#5B8DEF]", shape: "rounded-md" },
  Eter: { gradient: "from-[#FF2D75] to-[#7A00FF]", shape: "rounded-full" },
  "The Town": { gradient: "from-[#FF2D75] to-[#FFEB00]", shape: "rounded-md" },
  "Tingle Studios": { gradient: "from-[#FFEB00] to-[#FF2D75]", shape: "rounded-full" },
};

export function LogosMarquee({
  eyebrow = "Confiam na Tingle",
  title,
  clients,
  tone = "elevated",
}: LogosMarqueeProps) {
  return (
    <Section spacing="md" tone={tone}>
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            {title && <h2 className="text-display-3 mt-4 max-w-2xl">{title}</h2>}
          </div>
        </div>
      </Container>
      <Marquee speed="slow" pauseOnHover className="border-y border-[#2A2A35] py-8">
        {clients.map((c) => {
          const style = brandStyles[c.name] ?? { gradient: "from-[#FFEB00] to-[#FF2D75]", shape: "rounded-md" };
          return (
            <div
              key={c.name}
              className="flex items-center gap-3 px-8 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className={`h-7 w-7 bg-gradient-to-br ${style.gradient} ${style.shape} flex items-center justify-center text-[10px] font-black text-[#0a0a0f]`}>
                {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <span className="text-2xl font-bold text-[#F5F5FA]">{c.name}</span>
            </div>
          );
        })}
      </Marquee>
    </Section>
  );
}
