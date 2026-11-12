# Portfólio com tecnologia em primeiro plano — 12/11/2026

Direção proposta e aprovada pelo usuário: Cognita, Eter e Rock World na home; QBANHO em Utilities; Circuito Musical das Águas em Consultoria; quatro categorias em Cases. Código 4638d6e, branch codex/technology-first-20261112.

## Conteúdo

- Hero apresenta startup de produto e aponta para os três destaques digitais. Eter continua direcionando a https://eter.social.
- Grade dos destaques, fontes, cores e demais estilos existentes preservados. Cognita/Eter usam seus ícones oficiais, sem telas fictícias; Rock mantém fotografia/legenda. Métricas Cognita e Rock reutilizadas do catálogo, sem novos números.
- Fotos anteriores de QBANHO e Circuito reaproveitadas nos destaques dos respectivos serviços, com filtro visual e créditos preservados. HomeServices aponta discretamente para /utilities#qbanho e /consultoria#circuito-musical.
- Cases particiona o catálogo sem excluir nem duplicar itens: 9 produtos/plataformas, 5 experiências digitais (quatro eventos e um site), 3 energia/negócios, 3 cultura/impacto. Cards e alinhamento via subgrid preservados. Todos os IDs individuais e as âncoras #aplicacoes/#projetos continuam existindo. Filtros de status com zero itens não aparecem.
- Novas chamadas, categorias, filtros e destaques de serviços em PT/EN. Não houve tradução geral dos cards antigos ou das outras seções das páginas de serviço.
- Sobre e correções anteriores de sócios/P&D preservadas.

## Verificação e publicação

1. pnpm lint, pnpm build, TypeScript no build e git diff --check passaram.
2. Baseline renderizado em produção antes da mudança confirmou destaques qbanho/rock/circuito. Marcador distingue explicitamente os estados.
3. Prévia https://tingledigital-pz8yw2f5u-tingledigital.vercel.app validada antes de publicar. 28 percursos no Chrome: home/Cases/Utilities/Consultoria × PT/EN em 390/768/1440 e PT escuro em 1440. Zero pageerror/console.error, sem overflow horizontal.
4. Conteúdo: seleção exata cognita/eter/rock; seleção antiga ausente; 14 apps + 6 serviços preservados exatamente uma vez; IDs/links válidos, âncoras navegáveis, filtros e contagens corretos, imagens carregadas; alinhamento dos campos preenchidos por linha. O roteiro foi ajustado para aguardar navegação assíncrona das âncoras e não comparar posições de campos vazios (sem alteração no site).
5. Capturas revisadas para home, quatro categorias e destaques de serviços. Cabeçalho fixo pode aparecer no meio de capturas longas de seções, por causa da posição da viewport no momento da captura.
6. Produção https://tingledigital-nf7wdwji5-tingledigital.vercel.app, dpl_7T6z2CmwJECvNGRht5dZ2qW8q3N2, READY. Alias tingledigital.com confirmado pela API. O mesmo roteiro de 28 percursos passou no domínio público, zero erros.
7. Consulta de logs do deployment em nível error na janela de dez minutos: No logs found. Refere-se somente à janela consultada.

Nenhum push Git. Evidências baseline.json, preview/verification.json, production/verification.json e capturas. Aprovação visual do usuário pendente.
