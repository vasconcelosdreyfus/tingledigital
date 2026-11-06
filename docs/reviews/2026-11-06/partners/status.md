# Parceiros na página inicial — 2026-11-06

Pedido: adicionar Hagg Soluções, Agência NEL, Hubz e Agência Soma à página inicial.

Implementação: seção #parceiros entre os indicadores e os depoimentos; quatro links externos, cards com a mesma altura, foco de teclado, nomes acessíveis e indicação de nova aba. Layout de uma, duas ou quatro colunas; traduções PT/EN. Mantida a estrutura existente da página.

Fontes dos ativos:
- Hagg: Logo_Hagg_Final.png fornecido pelo usuário; https://haggsolucoes.com/.
- Hubz: marca do cabeçalho de https://www.hubz.com.br/, arquivo https://static.wixstatic.com/media/d17873_cd1990fdb8ef449da653eedeffa626fa~mv2.png.
- NEL: https://www.instagram.com/agencianel/; Soma: https://www.instagram.com/_agenciasoma/. Ambos redirecionaram a consulta pública para login. Exibidos nomes em texto, sem logo inventado ou especialidades presumidas.

Verificação local: build com TypeScript passou; lint geral passou após explicitar que dois scripts de revisão .cjs usam CommonJS. Build local mantém aviso preexistente sobre RESEND_API_KEY ausente no ambiente local; o formulário não integra o escopo desta mudança.

Chrome isolado: 390, 768 e 1440 px; quatro destinos exatos, duas imagens carregadas, cards com alturas iguais, sem overflow, zero pageerror/console.error. Também conferidos tema escuro e troca para inglês. Estado anterior em produção: #parceiros ausente (count=0).

Commit da implementação: 954e6e9.

Produção: https://tingledigital-2suah6yyx-tingledigital.vercel.app, READY, domínio https://tingledigital.com/#parceiros. Primeira tentativa falhou no módulo interno Google Font/Inter do Turbopack após restaurar cache; repetição com --force (sem cache) passou, sem alteração de fonte ou código. Conferência no domínio principal passou nos três tamanhos, tema escuro e inglês; duas imagens carregadas e quatro destinos corretos. A verificação passou a aguardar explicitamente o carregamento das imagens, pois 400 ms não bastavam para a primeira otimização remota. Nenhum erro de navegador observado. Consulta de logs de runtime da publicação retornou “No logs found”; não é evidência de cobertura total de tráfego. Aprovação visual pelo usuário pendente.
