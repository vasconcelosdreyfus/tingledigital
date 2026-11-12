# Sobre: produto, parceiros e P&D — 12/11/2026

Código: bde4df8. Alterações de conteúdo solicitadas pelo usuário, em PT e EN. Sem alterações de CSS, cores, fontes ou composição dos componentes. O parágrafo novo reutiliza as classes do texto de abertura.

- Inserido o parágrafo fornecido integralmente, após a abertura, nos dois idiomas.
- Alexandre: Parceiro / Partner. Dreyfus e Marcelo mantidos como sócios. Título da seção atualizado.
- 2024: Primeiro P&D Estruturado / First R&D Project Structured; texto limita a contribuição ao desenho e à abordagem. Removida menção a parceria com Equatorial no marco de 2022; alinhadas descrições do mesmo P&D em Cases, Utilities e dados da home. O case distinto de QBANHO e as experiências profissionais dos sócios foram preservados.
- Nenhuma menção ao Parque Tecnológico de Saquarema.
- Sobre antes ignorava o idioma do conteúdo principal. Agora escolhe os dados PT/EN pelo locale existente, incluindo metadados, mantendo o mesmo JSX e estilos.

## Cinco organizações

Conferência no catálogo content/data/apps.ts: EPES, Tropa do Esporte, Educa Brasis, Rede Vida Animal Brasil e Casa Tech. São cinco registros na lista documentada do Cognita. Não foi feita nova consulta ao banco de produção; o escopo pedido era conferir o catálogo. Evidência catalog-check.json.

## Verificação e ordem de publicação

1. pnpm install --frozen-lockfile, pnpm lint e pnpm build passaram. Lockfile preservado. Build local avisou ausência de RESEND_API_KEY local; listagem Vercel confirmou variável presente em Production, sem ler seu valor.
2. Prévia publicada e validada ANTES de produção: https://tingledigital-2hl2y8xyz-tingledigital.vercel.app.
3. Chrome isolado em 390 e 1440 px, PT/EN: parágrafo exato presente, rótulos antigos ausentes, papéis individuais conferidos, marco 2024 sem Equatorial, nenhuma menção proibida, nenhuma rolagem horizontal. Troca de idioma real testada no menu móvel e no controle desktop. A primeira tentativa do roteiro aguardou o controle móvel oculto; corrigido o roteiro para abrir o menu, sem alteração no site.
4. Comparação dos estilos computados com a produção anterior: fontes, tamanhos, cores, alturas de linha, espaçamento do hero, colunas/gaps da equipe e proporção/raio das fotos iguais nas quatro combinações. Inspeção das capturas. Zero pageerror/console.error.
5. Produção reconstruída com as variáveis de Production (não promovida diretamente da prévia, que não tem as variáveis do formulário): https://tingledigital-7a821gnsr-tingledigital.vercel.app, dpl_EVhGfQAX66eNjnqjqjpUUyCFmX4n, READY. API confirmou alias tingledigital.com nesse deployment.
6. Mesmo roteiro passou novamente em https://tingledigital.com, nas quatro combinações. Cases/Utilities também conferidos quanto à atribuição do P&D. Evidências em production/verification.json e capturas anexas.

Não houve push Git. A publicação usa Vercel CLI conforme fluxo existente. Confirmação visual pelo usuário pendente.

Consulta de logs do deployment em nível error na janela de dez minutos: No logs found. Isso descreve somente a janela consultada.
