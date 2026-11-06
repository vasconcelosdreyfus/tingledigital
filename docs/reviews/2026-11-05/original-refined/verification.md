# Refinamento da referência original

O usuário rejeitou as duas direções posteriores e indicou o screenshot da home original (commit `9fe5143`) como referência a preservar. Esta revisão recupera a composição daquele código: fundo branco, Inter, abertura centralizada, faixa de logos, grade 4×2, pilha de serviços, métricas, depoimentos em colunas e bloco preto de contato. O aceite visual ainda depende do usuário.

Aplicadas as skills locais `emil-design-eng` e `task-observer`. O repositório indicado foi consultado: https://github.com/emilkowalski/skills. As orientações relevantes já estavam instaladas; nenhuma dependência ou nova skill foi necessária.

| Antes | Depois | Motivo |
| --- | --- | --- |
| A palavra animada saía antes de a próxima entrar | Camadas no mesmo espaço, transição curta e pausa | Manter a frase completa e evitar salto de layout |
| Cards de serviços apenas decorativos | Mesma pilha, com links reais e foco de teclado | Aproximar exploração e contratação |
| Depoimentos sempre em movimento | Pausa, pausa ao passar o ponteiro e leitura de todos | Permitir leitura sem mudar a composição em colunas |
| Todos os depoimentos móveis em uma área recortada | Depoimentos estáticos e completos no celular | Tornar o conteúdo acessível por toque |
| Link de contato envolvendo um botão | Um único link com resposta ao clique | HTML e foco corretos |
| Headline longa excedia 320px | Escala e quebra adaptadas ao celular | Evitar transbordamento inclusive durante carregamento da fonte |

Mantidos os dados reais, o aplicativo eleitoral em construção, a imagem original do Coronel e as correções anteriores de idioma, foco do menu e rolagem com movimento reduzido. Recursos e estilos das direções rejeitadas foram removidos. A alteração de título da grade apenas acomoda o projeto em construção sem descrevê-lo como publicado.

Build de produção passou após reconstrução do cache local do Turbopack (falha anterior na resolução interna de next/font). Lint, tipos e diff check verificados. Revisor independente não encontrou referências órfãs e apontou o enquadramento da grade como “no ar”, corrigido.

Navegador Chrome/Playwright: verificar arquivos JSON anexos para matriz e interações. Sem envio real de e-mail: credenciais Resend disponíveis somente em Production. Sem publicação em produção ou alteração de DNS. Dimensões móveis simuladas no navegador; nenhum teste em aparelho físico ou leitor de tela real.

## URL final verificada

https://tingledigital-b7xybgmbw-tingledigital.vercel.app — Vercel READY, código `629692c`. Requer login. A matriz final remota passou em 40 combinações de rota/largura, incluindo animação do título (sem quadro vazio ou mudança de altura), pausa, links de serviços por teclado, depoimentos, menu móvel, tema, PT/EN e reduced motion. Zero pageerrors e console.errors.

Marcadores renderizados: “Transformamos ideias em” presente, grade com oito aplicativos e pilha com três serviços presentes; canvas, hero escuro da v2 e VotIA ausentes; Aplicativo eleitoral / Em construção presente. Capturas `preview-*` vieram desse endereço. O ajuste final alinha palavras curtas à esquerda no espaço reservado do título.

A versão de produção não foi alterada. Aceite visual pendente.
