# Segunda direção — tecnologia criativa

A primeira prévia foi rejeitada pelo usuário por ser conservadora e não expressar a capacidade tecnológica da Tingle. Esta revisão troca a abertura editorial por uma escultura 3D procedural e interativa, amplia a galeria de projetos e transforma a seção de serviços em um configurador que leva uma mensagem inicial ao contato. O aceite visual continua pendente.

## Implementação

- WebGL2 nativo, sem download de modelo 3D nem nova dependência. Três formas distintas, transição e reação ao ponteiro. Limite de 30 FPS e resolução limitada. Interrompe renderização fora da tela, em aba oculta e quando pausado.
- Movimento reduzido preserva formas estáticas e troca instantânea. SVG quando não há WebGL ou quando o contexto gráfico é perdido.
- Galeria usa ícones reais, descrições e métricas já cadastradas. Sem imagens de produto fictícias.
- Configurador com três caminhos, roteiros específicos e prefill exato do formulário. Não se apresenta como resposta de IA.
- Tema inicial escuro; preferência já salva respeitada. Composição distinta para celular e tablet.
- Aplicativo eleitoral permanece “Em construção”, sem a marca VotIA ou links antigos.

## Evidência local

`next build`, `eslint`, `tsc --noEmit` e `git diff --check` passaram. Navegador Chrome/Playwright em build de produção local:

- 8 rotas × 5 larguras (320, 375, 414, 768 e 1440): status 200, sem overflow horizontal ou recorte de título. 0 pageerrors/console.errors.
- Canvas realmente inicializado em WebGL; quadros avançam e param com pausa e fora da tela. Capturas das três formas são diferentes.
- Todos os 8 projetos; setas, Home e Tab até o painel e CTA.
- Três escolhas do configurador atualizam o roteiro e transferem o texto completo, com acentos, para o formulário.
- Movimento reduzido estático, botões de forma funcionais, botão de pausa oculto.
- WebGL indisponível: fallback SVG e conversão continuam funcionais. Perda deliberada de contexto: fallback permanece após resize/troca de forma, sem erro.
- PT/EN no celular, temas claro/escuro, aplicativo eleitoral em construção e sem links.
- Após a matriz, inspeção visual levou ao ajuste específico de tablet. Build/tipos e screenshot de 768 foram repetidos. Matriz final também será executada no preview remoto.

A revisão independente identificou e corrigimos: recursos inválidos após perda do contexto GPU; ordem de foco da galeria; remontagem da região aria-live. O teste com movimento reduzido identificou e corrigimos divergência de hidratação e especificidade CSS do botão de pausa.

Não houve envio real de e-mail: Resend está configurado apenas em Production. Não houve deploy em produção, push remoto ou alteração de DNS. Desempenho físico em celulares de entrada e leitura por leitor de tela real não foram medidos.
