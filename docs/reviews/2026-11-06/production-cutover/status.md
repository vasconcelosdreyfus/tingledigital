# Publicação e apontamento do domínio — 06/11/2026

Autorização explícita do usuário: colocar tingledigital.com no novo site.

Produção publicada e promovida: `dpl_HjcDNuL9KXG8uh3dLgdTNSpCCwqV`, https://tingledigital-gjst85btp-tingledigital.vercel.app, commit 5ea4346. URL pública https://tingledigital.vercel.app validada sem autenticação: home/Cases/Sobre, seis larguras, todos os filtros, Eter externo, Summit presente e eleitoral ausente. Zero erros no navegador. Build passou.

O teste preliminar no hostname único protegido expirou esperando #eter; não foi considerado evidência. A validação pública posterior passou.

## Histórico do DNS na Hostinger — pendência resolvida abaixo

Domínio e www já associados ao projeto tingledigital. www tem redirecionamento 308 para o apex na Vercel. Servidores autoritativos permanecem ns1/ns2.dns-parking.com.

Estado autoritativo consultado:
- A @: 217.196.55.188, TTL 1800.
- AAAA @: 2a02:4780:b:1384:0:81e:a5bb:7, TTL 1800.
- CNAME www: tingledigital.com, TTL 14400.
- MX @: prioridade 1 smtp.google.com, TTL 14400.

Ação necessária: editar A @ para 76.76.21.21 (destino aceito e recomendado pelo Vercel CLI) e remover somente o AAAA @ antigo. Preservar nameservers, CNAME www, MX, TXT e demais registros/subdomínios. Backup dos valores acima permite reverter o apontamento do site.

Usuário abriu a tela correta e enviou screenshot. A conexão Chrome listou a aba mas repetidamente expirou ao tentar controlá-la. Nenhuma mudança DNS foi efetuada pelo agente. Instruções para a troca manual entregues; falta confirmar publicação pelo domínio e emissão TLS após salvar DNS. Não declarar domínio migrado enquanto os registros antigos persistirem.

## Confirmação final — 06/11/2026, 11:28 UTC

Após o usuário salvar os registros, Google/Cloudflare e servidores autoritativos responderam de modo inconsistente durante a propagação. A Vercel confirmou `configuredBy: A`, `misconfigured: false`, A=76.76.21.21, sem AAAA, mas a emissão inicial retornou HTTP449 `http_pretest_domain_not_resolving_to_vercel_error`. Nova emissão após avanço da propagação foi bem-sucedida.

- https://tingledigital.com/: HTTP200, servidor Vercel, TLS validado sem bypass.
- https://www.tingledigital.com/: HTTP308 para o domínio principal, TLS válido.
- Certificado apex `cert_PKRGHtSTUyvd8dvQLyIIS7Qw`; www `cert_CzHnGlUrNfyc1uJ647aRAn0t`: ambos com renovação automática e validade de 90dias.
- Navegador no domínio real, sem autenticação: home, Cases e Sobre; oito cards na home, Summit presente, eleitoral ausente, Eter externo, menu/rodapé corretos. Alinhamento dos 13 cards em seis larguras e todos os filtros, linha do tempo de 2026. Zero console.error/pageerror. Ver custom-domain-verification.json e captura.
- MX continua `1 smtp.google.com.`; nenhuma alteração de e-mail foi feita.
- Uma consulta final ao Google DNS ainda retornou o IPv4 antigo enquanto Cloudflare retornou Vercel. A propagação pode temporariamente exibir o site antigo em algumas redes; não afirmar convergência global instantânea.
