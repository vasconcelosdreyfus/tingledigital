# Favicon — 06/11/2026

Causa confirmada: app/favicon.ico continha triângulo da Vercel, byte a byte idêntico ao servido em produção. Substituído pelo símbolo Tingle derivado dos mesmos vetores do cabeçalho; ICO em 16/32/48/64/128/256 px, SVG e Apple PNG 180 px. Next gera URLs com hash para atualização de cache.

Código 4eac8fe publicado em https://tingledigital-am0wlry4p-tingledigital.vercel.app e https://tingledigital.com, READY. Lint/build passaram. Chrome isolado verificou links do DOM, respostas HTTP, correspondência exata dos novos arquivos e diferença em relação ao ICO anterior, sem erros de console/pageerror. JSONs antes, local e produção anexos.
