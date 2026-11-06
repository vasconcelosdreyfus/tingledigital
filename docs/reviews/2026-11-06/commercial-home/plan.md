# Página inicial: narrativa comercial

Autorização: usuário aprovou sequência abertura → três projetos → áreas de atuação → aplicativos; pediu fotos em tons compatíveis com o site.

1. Atualizar hero em messages/{pt,en}.json e home-hero.tsx: manter assinatura, marca, fundo e tipografia; subtítulo concreto aprovado e CTA para projetos.
2. Criar home-featured-projects.tsx e CSS module: Rock in Rio 2026 em destaque, Circuito e QBANHO em dois blocos alinhados. Usar imagens reais disponíveis e ilustração oficial QBANHO com identificação explícita. Tons neutros via CSS; sem geração de imagens de eventos.
3. Reordenar app/page.tsx. Substituir cartões de serviços sobrepostos por três áreas legíveis com caminhos de contratação. Preservar catálogo, indicadores, parceiros e depoimentos.
4. Verificar lint, build/TypeScript, Chrome em 390/768/1440 px, temas, PT/EN, reduced motion, links internos e métricas. Conferir nova ordem no DOM renderizado e ausência do antigo subtítulo/CTA; imagens carregadas, sem overflow ou erros. Publicar e repetir verificações.

Arquivos: app/page.tsx; components/sections/home/{home-hero,home-featured-projects,home-services}.tsx; home-featured-projects.module.css; messages/{pt,en}.json; public/cases/*; documentação desta revisão. Sem dependências novas.
