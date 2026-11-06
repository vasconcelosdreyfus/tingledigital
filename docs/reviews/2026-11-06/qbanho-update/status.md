# Verificação e publicação — 06/11/2026

Código: `0919eb4`. Produção: https://tingledigital-kejfcdqx5-tingledigital.vercel.app. Domínio: https://tingledigital.com. Vercel READY, deployment `dpl_3q45nxcosd7vpxKG1CQ2V8Eqfswb`, build remoto 26 s, publicação sem cache.

`pnpm lint`, `pnpm build` e `git diff --check` passaram. Chrome isolado em 390, 768 e 1440 px passou localmente e no domínio público, sem pageerror/console.error. Fotos decodificadas, sem overflow; oito apps e quatro parceiros preservados. Tema escuro e legenda inglesa conferidos no desktop.

Prova antes/depois renderizada: antes, ordem Rock/Circuito/QBANHO, imagem qbanho-sistema, Candidate 35 dias e Summit em teste; depois, QBANHO/Rock/Circuito, imagem qbanho-trocador sem referência visual ao chuveiro, nova chamada sem 35 dias, Summit realizado de 6 a 29/out/2026 e entregue com sucesso na descrição. Filtros: quatro eventos incluindo Summit, quatro em desenvolvimento excluindo Summit. Evidência nos JSONs e capturas anexos.

A revisão encontrou overflow no tablet: corrigido destaque em coluna até 1023 px, colunas com minmax no desktop e sizes da imagem conforme largura real. Rebuild e testes repetidos após a correção.

Consulta aos logs Vercel de nível error na janela de 10 minutos retornou “No logs found”; isso não constitui cobertura geral de monitoramento. Validação estética pelo usuário permanece pendente.
