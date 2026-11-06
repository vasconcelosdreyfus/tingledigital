# Imagem de compartilhamento — 06/11/2026

A página pública não entregava `og:image`: confirmado com os user agents WhatsApp/2.24.1 e facebookexternalhit/1.1 antes da alteração.

Correção 18803a5: PNG de 1200 × 630 (24.212 bytes), criado com o símbolo SVG do cabeçalho publicado e a marca tingle. Convenção Next.js `app/opengraph-image.png` com texto alternativo. Páginas que substituem o objeto openGraph recebem a mesma imagem explicitamente.

Build e lint dos arquivos alterados passaram. O navegador local validou a imagem nas oito páginas públicas, sem pageerror/console.error. Após deploy de produção em tingledigital-pnk5n0quo-tingledigital.vercel.app, a raiz, /cases e /sobre em tingledigital.com retornaram a imagem no head aos dois user agents, com HTTP 200 e hash idêntico ao arquivo fonte. Chrome abriu a raiz e a imagem pública, confirmando dimensões e ausência de erros.

A renderização dentro do aplicativo WhatsApp e o cache de prévias dependem de uma nova tentativa do usuário; não foram validados por envio de mensagem.
