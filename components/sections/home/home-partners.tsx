import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/primitives/container";
import { Reveal } from "@/components/motion/reveal";

const partners = [
  {
    name: "Hagg Soluções",
    href: "https://haggsolucoes.com/",
    logo: "/partners/hagg.png",
    width: 685,
    height: 308,
  },
  {
    name: "Agência NEL",
    href: "https://www.instagram.com/agencianel/",
    handle: "@agencianel",
  },
  {
    name: "Hubz",
    href: "https://www.hubz.com.br/",
    logo: "/partners/hubz.png",
    width: 1090,
    height: 435,
  },
  {
    name: "Agência Soma",
    href: "https://www.instagram.com/_agenciasoma/",
    handle: "@_agenciasoma",
  },
];

export async function HomePartners() {
  const t = await getTranslations("partners");

  return (
    <section
      id="parceiros"
      aria-labelledby="partners-title"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-eyebrow mb-4 text-[var(--text-secondary)]">
              {t("eyebrow")}
            </p>
            <h2
              id="partners-title"
              className="text-display-2 text-balance text-[var(--text)]"
            >
              {t("title")}
            </h2>
          </div>
          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("visit", { name: partner.name })}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text)]"
                >
                  <div className="flex h-28 items-center justify-center rounded-lg bg-white px-5">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        width={partner.width}
                        height={partner.height}
                        alt={partner.name}
                        sizes="200px"
                        className="h-auto max-h-20 w-auto max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-center text-2xl font-semibold tracking-tight text-neutral-900">
                        {partner.name}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3 text-sm text-[var(--text-secondary)]">
                    <span>{partner.handle ?? partner.name}</span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
