# Hierarquia do portfólio — direção aprovada

O usuário aprovou priorizar tecnologia na home: Cognita, Eter e Rock World. QBANHO passa ao destaque de Utilities e Circuito Musical das Águas ao de Consultoria; permanecem também em Cases. Preservar visual, cores, tipografia, cards e toda a cobertura do catálogo. PT/EN para os textos novos. Sem métricas inventadas ou telas fictícias.

## Implementação

1. `home-featured-projects.tsx`, seu CSS e `messages/{pt,en}.json`: trocar seleção dos três projetos, usar ícones oficiais de Cognita/Eter e fotografia existente de Rock World. Cognita usa números já documentados; Eter destaca plataformas/protocolo. Hero passa a chamada de produtos, e HomeServices faz referências discretas a QBANHO/Circuito com links.
2. `services/{consultoria,utilities}.ts`, `service-page.tsx`, `types/service.ts`: inserir fotos existentes nos destaques dos serviços com créditos, preservar demais conteúdos e cases. Tradução dos destaques via mensagens existentes.
3. `app/cases/page.tsx`, `content/data/portfolio.ts`, `apps-showcase.tsx`: quatro seções com cards existentes; particionar 14 apps em produtos/plataformas e experiências digitais, e 6 serviços em energia/negócios e cultura/impacto. Cada item aparece uma vez. Preservar IDs dos cases e âncoras antigas.
4. Verificar lint/build; prévia no Chrome em 390/768/1440, PT/EN, sem overflow/erros. Home deve ter só Cognita/Eter/Rock nos destaques; fotos dos dois cases realocados carregam; catálogo mantém 14 apps/6 serviços sem repetição e filtros funcionam; links e âncoras válidos. Depois publicar em produção e repetir verificação do domínio.

Implementação direta nesta sessão; nenhuma delegação.
