# Cases alinhados e marco de 2026

## Escopo

Manter identidade e conteúdo dos cards. Alinhar cabeçalhos (incluindo nome e identificação), status, chamadas, descrições, indicadores, plataformas e links entre os cards da mesma fileira. Sem esconder textos, truncar descrições, criar métricas para produtos sem números ou impor alturas fixas. Em uma coluna no celular, espaços vazios dispensáveis desaparecem.

CSS subgrid compartilha oito linhas através do wrapper de animação e do artigo. Métricas usam o número real de colunas, valores sem quebra de linha e descrições alinhadas ao topo. A contenção para unidades cqi fica apenas nas métricas: aplicá-la ao artigo desativa o subgrid, conforme observado e corrigido na medição inicial.

## Linha do tempo

Relato de Dreyfus em 06/11/2026: primeiro contrato com Rock World; Leitura Delas e Papo que Protege no Rock in Rio; site do Coronel; Tropa do Esporte no Cognita; crescimento do portfólio com The Candidate, Eter, Sentinelas da Guanabara, Lineup Battle, Vesti, Prime Healthcare e DreamPhi. O texto distingue lançamentos nas lojas, protótipos e produtos em teste, respeitando os status existentes.

Dreyfus esclareceu que a comparação eleitoral é 2026 contra 2022. Conferência encontrou 24.406 votos em 2022 e 51.487 em 2026 (2,1096 vezes; crescimento aproximado de 111%). Texto usa “mais que dobrou”; não atribui causalidade eleitoral às entregas.

- [Câmara dos Deputados — resultado da eleição de 2022](https://www.camara.leg.br/internet/deputado/resultado.eleicao.pdf): 24.406.
- [Congresso em Foco — resultado de 2026, publicado em 30/10/2026](https://www.congressoemfoco.com.br/noticia/130051/coronel-chrisostomo-pl-foi-eleito-deputado-federal-por-rondonia): 51.487.

## Verificação

ESLint, TypeScript e diff --check. Navegador mede boundingClientRect de cada faixa em todos os 13 cards e nos três filtros; compara início de cada conteúdo e altura dos cards por fileira. Confere valores em uma única linha e sem overflow nas larguras 1440, 1280, 1024, 768, 390 e 320. Linha do tempo deve conter 2026, todas as entregas e o comparativo conferido. Console.error e pageerror são coletados.

Código final: `0000256` (base `9957a41`). Build remoto passou. [Prévia verificada](https://tingledigital-jir81t4rn-tingledigital.vercel.app): todos os cenários descritos passaram, com zero console.error/pageerror e zero overflow. Capturas inspecionadas visualmente. O script de verificação está junto das evidências. Aceite visual pendente; produção não alterada.
