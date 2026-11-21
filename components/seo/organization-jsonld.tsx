import { SITE_URL } from "@/lib/social-metadata";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Tingle Digital",
    legalName: "Tingle Digital LTDA",
    taxID: "33.486.049/0001-55",
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image.png`,
    email: "dreyfus@tingledigital.com",
    telephone: "+55-21-99695-3940",
    foundingDate: "2019-04-29",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Visconde de Pirajá, 414, Sala 718",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      postalCode: "22410-002",
      addressCountry: "BR",
    },
    founder: [
      {
        "@type": "Person",
        name: "Dreyfus Vasconcelos",
      },
      {
        "@type": "Person",
        name: "Marcelo Fernandes",
      },
    ],
    owns: [
      {
        "@type": "SoftwareApplication",
        "@id": "https://eter.social/#software",
        name: "Eter Encrypted",
        url: "https://eter.social/",
      },
      {
        "@type": "VideoGame",
        "@id": "https://thecandidate.app/#game",
        name: "The Candidate",
        url: "https://thecandidate.app/",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
