# Escala do Cognita e do motor de pesquisas

Fonte: Firestore de produção do Cognita, leitura somente de agregações em 06/11/2026 às 10:14 UTC. Nenhum registro pessoal foi lido ou exportado.

- 4.463 documentos em `projetos/{projeto}/alunos` com `statusGeral == matriculado`, somando todos os projetos. Não foi usado o campo genérico `status`, nem as cópias dentro de turmas. A unidade publicada é matrícula por projeto; não se afirma que sejam pessoas únicas entre projetos ou usuários ativos mensais.
- 31.242 documentos em `projetos/{projeto}/respostasPesquisas`, somando todos os projetos. Respostas, não pessoas entrevistadas únicas ou número de questionários distintos. Contagem dos documentos, sem usar contadores desnormalizados.

Comunicação: **4 mil+ matrículas gerenciadas no Cognita** e **31 mil+ respostas coletadas pelo motor de pesquisas**. Patamares arredondados para baixo, derivados de uma fonte numérica compartilhada (`content/data/cognita-impact.ts`). Não é contador em tempo real.

Home, card do Cognita, Cases, página de produto e exemplos do design system usam a mesma referência. A apresentação do motor cobre coleta digital e em campo em diferentes projetos. Layout preservado.
