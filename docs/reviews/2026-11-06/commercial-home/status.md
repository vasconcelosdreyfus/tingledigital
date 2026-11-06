# Verificação da narrativa comercial — 06/11/2026

Implementação d55f265. Publicação READY: https://tingledigital-2jgbdmnq2-tingledigital.vercel.app, domínio tingledigital.com.

- Abertura mantém marca, tipografia, fundo e título animado; novo subtítulo explica produtos digitais, energia, educação, cultura e impacto social. CTA principal leva a #projetos.
- Ordem: abertura → clientes → projetos em destaque → áreas de atuação → catálogo → indicadores → parceiros → depoimentos → contato.
- Rock in Rio recebe destaque amplo; Circuito e QBANHO ficam lado a lado no desktop, com imagens, textos, métricas e links alinhados. Celular empilha os três projetos.
- Fotografias do Espaço Plural e Circuito usam tons quase monocromáticos. QBANHO usa ilustração oficial identificada como tal. Ver fontes em sources.md.
- Áreas de atuação agora expõem três caminhos legíveis: produtos e tecnologia, energia e negócios, estratégia e execução. Mantidos oito aplicativos na home, 13 no catálogo e quatro parceiros.
- Lint geral e build/TypeScript passaram. Uma primeira compilação detectou acesso possivelmente indefinido no código de métricas: simplificado antes de publicar. Um build incremental posterior reproduziu o erro Inter/Turbopack já visto na publicação anterior; build limpo passou. Produção publicada sem cache (--force).
- Aviso preexistente local: RESEND_API_KEY ausente; formulário de contato não foi alterado nem testado com envio real.
- Chrome local: 390/768/1440 px, temas claro/escuro, PT/EN, imagens decodificadas, três projetos, métricas 2.687/578/7 cidades/Milhares/Milhões, oito aplicativos, quatro parceiros, métricas inferiores alinhadas e nenhum erro de navegador. Inglês no celular conferido com 2,687 e sem overflow.
- Estado anterior em produção confirmado antes do deploy: zero data-featured-project; subtítulo antigo presente.

Aprovação estética pelo usuário pendente.

Verificação no domínio principal passou nos três tamanhos, temas e idiomas, com zero pageerror/console.error; novas seções presentes, antigo subtítulo e cartões sobrepostos ausentes. CTA percorreu a página até #projetos (posição do alvo validada), e as três âncoras de /cases existem. Screenshots de produção e verification.json anexados. Nenhuma mensagem enviada pelo formulário.
