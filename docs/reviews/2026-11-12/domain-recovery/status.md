# Recuperação do domínio e da identidade de publicação — 12/11/2026

## Domínio

O histórico DNS da Hostinger registrava “Hospedagem em CDN habilitada” em 12/11. O CDN automático substituiu o apontamento externo por ALIAS @ → tingledigital.com.cdn.hstgr.net e CNAME www → www.tingledigital.com.cdn.hstgr.net, servindo o WordPress antigo. A produção correta permanecia intacta na Vercel.

Ações no hPanel: cancelada a inscrição na ativação automática de CDN somente para tingledigital.com (1 de 3 sites); CDN desabilitado, status Inativo. Após desativá-lo, restaurado A @ → 76.76.21.21 (TTL 1800), removido somente AAAA @ do servidor antigo. CNAME www → tingledigital.com (TTL 300). Nameservers, MX Google e subdomínios preservados; Cognita continua cognita-f1de0.web.app.

DNS autoritativo e resolvedores 1.1.1.1/8.8.8.8 conferidos. HTTPS válido, resposta 200 na Vercel. Chrome isolado confirmou em apex e www o SOMA Studio presente e o título antigo do WordPress ausente; nenhum pageerror/console.error. www redireciona ao apex. Evidências: restored.json e restored.png.

A Hostinger documenta a gestão automática de A/AAAA/www pelo CDN: https://www.hostinger.com/support/hostinger-cdn-and-your-dns-records/

## Identidade Vercel

A conta vasconcelosdreyfus já era OWNER confirmado da equipe TINGLEDIGITAL. O GitHub não estava conectado em Account Settings → Authentication. Conectado o GitHub real vasconcelosdreyfus via OAuth; interface confirmou a conexão. Não foi adicionado membro nem alterada a identidade global do Git.

Teste em worktree temporário, commit vazio 472a4a100ce83cb5c4a6af5c41b05a3c9cbff266, com autor autêntico 127347776+vasconcelosdreyfus@users.noreply.github.com. Publicação de PREVIEW aceita: READY, target null, dpl_5Wh7uHcWezPEGkADtWPFSkaxJNMA. A API confirmou gitCommitAuthorEmail e gitCommitSha correspondentes.

Prévia: https://tingledigital-co8p8ma8j-tingledigital.vercel.app

Após o teste, API confirmou tingledigital.com ainda associado à produção original dpl_AfvePJ2btBPiGPBhqYQvcdWxzmaQ / tingledigital-hhx1w3bno-tingledigital.vercel.app (código cdc52df). Nenhuma republicação de produção ou push Git foi necessário.

Referência oficial sobre associação entre autor Git, conta Vercel e equipe: https://vercel.com/docs/deployments/troubleshoot-project-collaboration
