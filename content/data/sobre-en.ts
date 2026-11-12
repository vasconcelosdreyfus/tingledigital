import { sobre } from "./sobre";

export const sobreEn: typeof sobre = {
  hero: {
    eyebrow: "About Tingle",
    title: "From Maranhão to Rio. Technology with a creative soul.",
    subtitle: "We started in 2019 in São Luís, Maranhão, with a mission to digitize small businesses. In 2022, we moved to Rio — and discovered what we want to become.",
    productStatement: "We are a product startup. We build and publish our own software: Eter, an end-to-end encrypted messenger, and Sentinelas da Guanabara, an environmental education game, are on the App Store and Google Play; The Candidate, an election campaign simulator, is on Google Play. Cognita, our education management platform, has been running since 2023 at the Saquarema School of Programming and Entrepreneurship and serves five organizations.",
  },
  values: {
    eyebrow: "What drives us",
    title: "Four pillars. In every project.",
    items: [
      { title: "Purposeful Innovation", description: "We do not build technology for its own sake. Every solution starts with a real problem and aims to make a positive impact on people and organizations." },
      { title: "True Partnership", description: "We build lasting relationships. Our clients are partners who grow with us, and we celebrate every achievement as our own." },
      { title: "Energy for Transformation", description: "From the energy sector to education, we bring energy — literally and figuratively — to transform realities and open up new possibilities." },
      { title: "Commitment and Transparency", description: "Accountability, monitoring and measurable results. We work with full transparency on every project." },
    ],
  },
  team: {
    eyebrow: "The people behind Tingle",
    title: "Co-owners and partners with experience in energy, technology and management.",
    members: sobre.team.members.map((member, index) => ({
      ...member,
      ...[
        {
          role: "Co-founder · Strategy, Energy & Technology",
          bio: "An electrical engineer from PUC-MG with postgraduate studies at FGV. He served as superintendent of Customer Relations and Digital Transformation at Light, corporate manager at Equatorial Energia and general director of 55 Soluções. He combines operational experience, business development and digital product building.",
          experience: "Leadership at Light, Equatorial Energia and 55 Soluções, covering digital customer service channels, operations management and business development.",
          specialties: ["Digital transformation", "Operations and customer relations", "Products and data"],
        },
        {
          role: "Co-owner · Strategy & Energy",
          bio: "An electrical engineer from UFC with additional studies at École Centrale de Nantes, France. He worked as corporate manager of Digital and Innovation at Equatorial Energia. His career connects strategy, innovation and the development of solutions for the energy sector.",
          experience: "Experience as corporate manager of Digital and Innovation at Equatorial Energia, connecting technology with the needs of utilities and their customers.",
          specialties: ["Energy sector strategy", "Innovation and R&D", "Business development"],
        },
        {
          role: "Partner · Strategy & Energy",
          bio: "Experience in energy efficiency and business development in the energy sector. He worked in market relations at APS Soluções em Energia and business advisory at 3B. He brings companies, utilities and opportunities together to make projects possible.",
          experience: "A career at APS Soluções em Energia and 3B Assessoria Empresarial, covering market relations, energy efficiency and business connections.",
          specialties: ["Energy efficiency", "Market relations", "Strategic partnerships"],
        },
      ][index],
    })),
  },
  milestones: {
    eyebrow: "Timeline",
    title: "A story of evolution.",
    items: [
      { year: 2019, title: "The Beginning — São Luís, MA", description: "Tingle Digital was founded with a mission to digitize small businesses and bring accessible technology to those who need it most." },
      { year: 2022, title: "A New Purpose — Rio de Janeiro", description: "In Rio, we brought our talents together and gave Tingle a broader purpose. We met Casa Brasil, started EPES and formed partnerships with QBANHO and 5EC." },
      { year: 2023, title: "EPES in Action", description: "We developed Inova Talks (talks), Breaking Code (programming), Startup Challenge (entrepreneurship) and accountability reports for Casa Brasil." },
      { year: 2024, title: "First R&D Project Structured", description: "We structured the design and approach of the first R&D project approved in the electricity sector, aimed at automating water treatment at Companhia de Águas do Amapá." },
      { year: 2025, title: "Expansion and New Horizons", description: "Transforma Nova Iguaçu, Circuito Musical das Águas (7 cities, Rio de Janeiro state government), the launch of Cognita and Ebook Maker, and a partnership with FIXER." },
      { year: 2026, title: "Rock World, new projects and a growing portfolio", description: "We signed our first contract with Rock World and delivered Leitura Delas and Papo que Protege at Rock in Rio.\n\nWe also delivered Coronel Chrisóstomo’s website, and Cognita began managing Tropa do Esporte, strengthening institutional communication and social project management. In the 2026 election, the congressman more than doubled his 2022 vote total: from 24,406 to 51,487 votes.\n\nThe portfolio grew with The Candidate, Eter, Sentinelas da Guanabara, Lineup Battle, Vesti, Prime Healthcare and DreamPhi — spanning store releases, prototypes and products in testing." },
    ],
  },
  location: {
    eyebrow: "Where we are",
    title: "Rio de Janeiro · Working across Brazil.",
    body: "Based in Ipanema, with projects from Maranhão to Amapá and from inland Rio to Saquarema. We meet in person when it makes a difference and work remotely when it delivers more.",
  },
  finalCta: {
    title: "Want to be part of this story?",
    body: "Whether you are an energy company, an educational institution or a business pursuing digital transformation — let’s talk.",
  },
};
