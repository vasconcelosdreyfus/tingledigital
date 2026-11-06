# Revisão do site — 05/11/2026

## Implementação
Home editorial com símbolo oficial interativo, índice de projetos operável por teclado, serviços expansíveis, depoimentos manuais, laboratório e convite de contato. Temas claro/escuro, navegação móvel com Escape e preferência por movimento reduzido. Aplicativo eleitoral em construção substitui VotIA, sem link ou promessa de vitória garantida.

## Evidência
- Build de produção (Next.js 16.2.6): exit 0, compilação e TypeScript sem erros.
- ESLint: exit 0, sem avisos ou erros; git diff --check sem erros.
- Navegador Chromium: 8 rotas × 5 larguras (320, 375, 414, 768 e 1440 px), 40 verificações; zero transbordamentos horizontais, zero pageerror/console.error.
- 14 verificações de interação: composição, âncora, projetos por clique e teclado, depoimentos, serviços, status eleitoral, filtros, idioma, tema, Escape, navegação móvel, movimento reduzido e âncora sem animação.
- Varredura adicional de imagens nas 8 rotas: nenhuma imagem sem carregar após o ajuste do ícone do Coronel (arquivo original servido diretamente, pois a reconversão para WebP ficava sem resposta).
- Controle positivo no site anterior: VotIA presente. No novo: VotIA ausente, Aplicativo eleitoral presente, Em construção presente e links públicos antigos ausentes. O filtro Publicados exclui o aplicativo eleitoral.
- Formulário: payload inválido rejeitado com HTTP 400. Não houve envio real de e-mail. Resend e destinatários configurados na Vercel somente para Production; Preview não envia.
- Revisão independente corrigiu âncoras do Lenis que ainda animavam com prefers-reduced-motion.

Screenshots: after-desktop.png, after-mobile.png, after-dark.png, electoral-card.png.

## Limites
A validação visual do proprietário está pendente. Textos históricos de outros produtos permanecem com os status previamente cadastrados. A tradução da nova home e dos controles existe em PT/EN; descrições legadas de produtos e páginas internas continuam em português. DNS não foi alterado nesta revisão.

## Prévia Vercel

https://tingledigital-olhy92opm-tingledigital.vercel.app — READY, commit de código 244f072. Protegida por login Vercel. Conferida em Chromium autenticado: 8 páginas HTTP 200, zero pageerror/console.error, nova home, recomposição do símbolo, filtro de desenvolvimento, aplicativo eleitoral em construção e sem links antigos, ícone Coronel carregado e home móvel sem transbordamento. Screenshots preview-*.png capturadas diretamente nesta URL. Nenhum deploy de produção foi feito.
