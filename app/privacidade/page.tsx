import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/primitives/container";
import { SITE_URL, buildPageMetadata } from "@/lib/social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) === "en" ? "en" : "pt";
  return buildPageMetadata({
    title: locale === "en" ? "Privacy Policy" : "Política de Privacidade",
    description:
      locale === "en"
        ? "Learn how Tingle Digital handles personal data, cookies, theme storage and contact forms in compliance with LGPD."
        : "Saiba como a Tingle Digital trata dados pessoais, cookies, tema e formulário de contato em conformidade com a LGPD.",
    canonical: `${SITE_URL}/privacidade`,
    locale,
  });
}

export default async function PrivacidadePage() {
  const english = (await getLocale()) === "en";

  const sections = english
    ? [
        {
          title: "1. Data Controller",
          body: [
            "This Privacy Policy describes how Tingle Digital LTDA (CNPJ 33.486.049/0001-55), headquartered at Rua Visconde de Pirajá, 414, Sala 718, Ipanema, Rio de Janeiro/RJ, CEP 22410-002, Brazil, processes personal data on the website https://tingledigital.com in compliance with the Brazilian General Data Protection Law (LGPD, Law No. 13.709/2018).",
          ],
        },
        {
          title: "2. Language cookie (locale)",
          body: [
            "We use a single functional cookie named locale to remember your selected language (Portuguese or English). It is stored in your browser for up to 365 days with SameSite=Lax and does not track your activity across other websites.",
          ],
        },
        {
          title: "3. Theme preference (localStorage)",
          body: [
            "Your choice between light and dark theme is stored locally in your browser through localStorage. This information stays on your device and is not transmitted to our servers.",
          ],
        },
        {
          title: "4. Contact form and Resend",
          body: [
            "When you submit the contact form at /contato, we collect the details you provide: name, e-mail address, optional company name, project type and message. These data are processed by our API (/api/contact) and delivered by e-mail using Resend solely to evaluate your request and reply within 5 business days.",
            "We do not sell, rent or share your contact details with third parties for commercial or advertising lists.",
          ],
        },
        {
          title: "5. Analytics and absence of third-party ads",
          body: [
            "When Google Analytics 4 (GA4) is enabled in the production environment, aggregated navigation metrics (such as visited pages and device type) may be collected to improve site performance and content clarity. When not enabled, no analytics script is loaded.",
            "We do not display third-party advertisements and do not use retargeting pixels or advertising networks on this website.",
          ],
        },
        {
          title: "6. Data retention and security",
          body: [
            "Messages sent through the contact form are retained only for the period required to handle the business inquiry, fulfill legal obligations or maintain ongoing project communication, with appropriate technical and administrative safeguards.",
          ],
        },
        {
          title: "7. Your rights under LGPD",
          body: [
            "Under Article 18 of Law No. 13.709/2018, you may request confirmation of processing, access, correction of incomplete or outdated data, anonymization, deletion of unnecessary data, or information about data sharing at any time.",
            "To exercise your rights or clarify questions about privacy, write to our contact channel at dreyfus@tingledigital.com.",
          ],
        },
      ]
    : [
        {
          title: "1. Controlador dos dados",
          body: [
            "Esta Política de Privacidade explica como a Tingle Digital LTDA (CNPJ 33.486.049/0001-55), com sede na Rua Visconde de Pirajá, 414, Sala 718, Ipanema, Rio de Janeiro/RJ, CEP 22410-002, realiza o tratamento de dados pessoais no site https://tingledigital.com, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018).",
          ],
        },
        {
          title: "2. Cookie de idioma (locale)",
          body: [
            "Utilizamos apenas um cookie funcional chamado locale para registrar sua preferência de idioma (português ou inglês). Ele permanece no navegador por até 365 dias, com atributo SameSite=Lax, e não é usado para rastrear sua navegação em outros sites.",
          ],
        },
        {
          title: "3. Preferência de tema (localStorage)",
          body: [
            "A escolha entre modo claro e modo escuro fica salva localmente no seu navegador via localStorage. Essa informação permanece apenas no seu dispositivo e não é enviada para nossos servidores.",
          ],
        },
        {
          title: "4. Formulário de contato e envio via Resend",
          body: [
            "Ao preencher o formulário em /contato, coletamos os dados informados por você: nome, e-mail, empresa (opcional), tipo de projeto e mensagem. Essas informações são enviadas para nossa API (/api/contact) e encaminhadas por e-mail por meio do serviço Resend, exclusivamente para analisar sua demanda e responder em até 5 dias úteis.",
            "Não vendemos, alugamos nem compartilhamos seus dados de contato com terceiros para listas comerciais.",
          ],
        },
        {
          title: "5. Analytics e ausência de anúncios de terceiros",
          body: [
            "Quando o Google Analytics 4 (GA4) estiver habilitado no ambiente de produção, métricas agregadas de navegação (como páginas acessadas e tipo de dispositivo) podem ser coletadas para melhorar o desempenho e a clareza do site. Enquanto não estiver habilitado, nenhum script de analytics é carregado.",
            "Não exibimos anúncios de terceiros nem utilizamos pixels de publicidade ou redes de retargeting neste site.",
          ],
        },
        {
          title: "6. Retenção e segurança",
          body: [
            "As mensagens recebidas pelo formulário são mantidas somente pelo tempo necessário ao atendimento da solicitação, cumprimento de obrigações legais ou continuidade de relacionamento comercial, com medidas técnicas e administrativas adequadas de proteção.",
          ],
        },
        {
          title: "7. Direitos do titular e canal de contato",
          body: [
            "Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos dados, a correção de informações incompletas ou desatualizadas, a eliminação de dados desnecessários ou informações sobre eventual compartilhamento.",
            "Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato pelo e-mail dreyfus@tingledigital.com.",
          ],
        },
      ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: english ? "Home" : "Início", href: "/" },
          {
            label: english ? "Privacy Policy" : "Política de Privacidade",
            href: "/privacidade",
          },
        ]}
      />
      <PageHero
        eyebrow={english ? "Privacy & LGPD" : "Privacidade e LGPD"}
        title={english ? "Privacy Policy" : "Política de Privacidade"}
        subtitle={
          english
            ? "Clear rules on how Tingle Digital LTDA collects, uses and protects your information."
            : "Transparência sobre como a Tingle Digital LTDA coleta, utiliza e protege as suas informações."
        }
      />

      <section
        className="py-16 lg:py-24"
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--surface-elevated)",
        }}
      >
        <Container size="md">
          <div className="mb-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 text-sm leading-relaxed text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text)]">Tingle Digital LTDA</p>
            <p className="mt-1">CNPJ: 33.486.049/0001-55</p>
            <p className="mt-1">
              Rua Visconde de Pirajá, 414, Sala 718, Ipanema, Rio de Janeiro/RJ, CEP 22410-002
            </p>
            <p className="mt-1">
              {english ? "Privacy contact:" : "Contato de privacidade:"}{" "}
              <a
                href="mailto:dreyfus@tingledigital.com"
                className="font-medium text-[var(--text)] underline underline-offset-4"
              >
                dreyfus@tingledigital.com
              </a>
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              {english
                ? "Last updated: November 21, 2026."
                : "Última atualização: 21 de novembro de 2026."}
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-[var(--border)] pb-8 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--border)] pt-8 text-sm text-[var(--text-secondary)]">
            <Link
              href="/contato"
              className="font-medium text-[var(--text)] underline underline-offset-4"
            >
              {english ? "Go to contact page" : "Ir para a página de contato"}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
