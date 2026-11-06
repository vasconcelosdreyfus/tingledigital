# EPES Summit e rodapé — 06/11/2026

## Alteração solicitada

Substituir o aplicativo eleitoral pelo Summit e remover Cognita/Eter do destaque individual no rodapé. Composição original preservada; rodapé agora reúne o catálogo em “Todas as aplicações”.

## Pesquisa e fontes

- Repositório `vasconcelosdreyfus/summit26`, `origin/main` em `39cee41`, consultado após fetch. O checkout local de epessummit-prod estava 61 commits atrás; a pesquisa usou os arquivos de origin/main.
- `docs/epes-summit26-visao-e-estado.md`: jornada de empreendedorismo, projeto coletivo, oito missões, orientação por IA e integração ao Cognita. O estado documentado é teste guiado, sem produção publicada; não foi inferido lançamento por existir uma tela acessível.
- `app/lib/features/missions/presentation/forms/mission_m01_form.dart` a `mission_m08_form.dart` e `shared/config/missions/mission-0N.v1.json`: oito missões implementadas, sem alegar oito concluídas pelos alunos.
- [Acesso do Summit](https://epes-summit26-dev.web.app/): HTTP 200, título EPES SUMMIT 2026, tela de login renderizada e capturada em 06/11. Sem autenticar, consultar dados de alunos ou alterar o projeto. Zero pageerror/console.error nessa visita.
- A busca pública encontrou material da edição de 2025; seus resultados não foram atribuídos ao aplicativo de 2026.
- Identidade: símbolo `rocket_launch_rounded` de `SummitBrand` e cores `SummitColors.heroGradient`, do código atual. SVG do [Google Material Icons](https://github.com/google/material-design-icons/blob/master/src/action/rocket_launch/materialiconsround/24px.svg) recomposto no formato quadrado com o gradiente e fundo translúcido já usados pelo app. Licença Apache-2.0 incluída junto do asset. Não utilizado o favicon padrão do Flutter.

## Critérios de verificação

Home com oito cards e Summit na quinta posição; card eleitoral ausente da home e Cases; Summit no filtro de testes com status explícito e link de acesso correto. Rodapé sem links individuais de Cognita/Eter em PT/EN, com catálogo acessível. Layout em desktop e celular sem overflow. Capturar erros de console e página.

## Resultado da verificação

- Código `cb66733`; ESLint e TypeScript passaram.
- Primeira compilação Vercel falhou com `next/font/google queries have exactly one entry` após restaurar cache. O deploy com `--force` sem cache passou, sem alteração de código.
- [Prévia verificada](https://tingledigital-5s7vy58y5-tingledigital.vercel.app), protegida por login Vercel. Produção não alterada.
- Navegador remoto: oito cards, Summit quinto, imagem carregada, link correto e filtro de testes funcionando. Aplicativo eleitoral/VotIA ausentes. Rodapé sem Cognita/Eter individualmente; “Todas as aplicações” abre Cases. PT/EN, desktop 1440 e celular 320 sem overflow, zero pageerror/console.error.
- Evidências: summit-verification.json, footer-grouped-{desktop,mobile}.png, summit-card-{desktop,mobile}.png e summit-source.png. Capturas inspecionadas; aceite visual do usuário pendente.
