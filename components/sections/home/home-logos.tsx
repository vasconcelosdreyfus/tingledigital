import * as React from "react";
import { LogosMarquee } from "@/components/shared/logos-marquee";
import type { Client } from "@/content/data/clients";

interface HomeLogosProps {
  eyebrow: string;
  title?: string;
  clients: Client[];
}

export function HomeLogos({ eyebrow, title, clients }: HomeLogosProps) {
  return <LogosMarquee eyebrow={eyebrow} title={title} clients={clients} tone="default" />;
}
