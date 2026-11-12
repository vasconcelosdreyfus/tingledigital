# Rock World e The Candidate — 12/11/2026

Código final 22ef68d (conteúdo 9fa83e0). Branch codex/rockworld-candidate-20261112. Fontes oficiais e limites de atribuição em sources.md.

- Home: título Rock World, três logos oficiais de The Town/Lollapalooza/Rock in Rio em faixa monocromática compatível com tema claro/escuro. Texto inclui pesquisas pelo Cognita e relatórios finais personalizados desenvolvidos pela Tingle, em PT/EN. Métricas continuam específicas de Rock in Rio 2026.
- Cases: relato ampliado também no card Leitura Delas/Papo que Protege, com versão inglesa da descrição. Linha do tempo Sobre atualizada nas duas línguas.
- The Candidate: catálogo passou a iOS + Android; status App Store + Google Play; link oficial Apple adicionado. Status traduzido na home/Cases. Parágrafo Sobre corrigido em PT/EN. A observação antiga de rejeição iOS foi removida, pois a página pública e API Apple agora confirmam publicação.
- Layout e demais projetos preservados; nenhuma contagem de aplicativos ou serviços mudou.

## Validação

Lint/build/TypeScript passaram. Build remoto final passou após substituição apenas do wordmark de Rock in Rio. Baseline no domínio antigo confirmou título Rock in Rio 2026, ausência da nova faixa e ausência do link Apple no card.

Prévia final https://tingledigital-iyygxtkrk-tingledigital.vercel.app validada antes de produção: 18 percursos em home/Cases/Sobre, PT em 320/390/1440, EN em 390/1440 e PT escuro em 1440. Novos textos/links/logos presentes, conteúdo antigo ausente, 14 apps + 6 serviços preservados, logos decodificados, nenhum overflow, zero pageerror/console.error. O roteiro inicialmente usou nome acessível exato App Store, mas o link inclui aviso para leitores de tela; ajustado para /^App Store/ e repetido também na baseline. Não houve falha no link do site.

Produção https://tingledigital-4qowc7mgq-tingledigital.vercel.app, dpl_BGMcmV7kYr9PX7gccXBetamGwen1, READY; API confirmou alias tingledigital.com. Os mesmos 18 percursos passaram em https://tingledigital.com, com zero erros. Capturas revisadas em celular e tema escuro.

Sem push Git. Confirmação visual pelo usuário pendente.

Logs do deployment em nível error na janela de dez minutos: No logs found. Refere-se somente à janela consultada.
