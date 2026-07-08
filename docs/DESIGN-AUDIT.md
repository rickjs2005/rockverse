# ROCKVERSE — Auditoria de Design (UI/UX)

> Auditoria conduzida como jurado de premiação internacional. Base: 20 screenshots em 3 breakpoints (1440/820/390), inspeção de tokens no código, Lighthouse 98/100/100/100.
> **Veredito geral: 7.2/10.** Bom demais para ser "mais um site", ainda longe de Site of the Day. Os problemas não são de execução — são de direção de arte e coragem compositiva.

---

## 1. Hero — 7.5/10

**O que funciona:** hierarquia clara, spotlights, partículas, selo giratório, CTAs corretos.

**O que está mediano ou errado:**

1. **A foto é o elo fraco.** Multidão genérica de show pop (boné, regata, luz vermelha lavada). Não há palco, não há guitarra, não há silhueta de artista. Fender abriria com um instrumento em luz dramática; Rockstar com uma cena. Nós abrimos com "público de qualquer evento".
2. **Três tratamentos tipográficos em três linhas** (sólido → gradiente → outline) fazem as linhas competirem. E a palavra-clímax — "MUNDO" — recebe o tratamento mais fraco (outline 35%): o final da frase visualmente *desaparece*. Clímax textual ≠ clímax visual: erro de direção.
3. **Equalizer bottom-left é decoração órfã** — 28px de altura, ninguém vê, não conecta com nada.
4. **Scroll indicator em forma de mouse** é cliché de template 2018.
5. **🤘 emoji dentro do SVG do selo** renderiza como glyph achatado no Windows — num detalhe premium, inconsistência cross-platform é imperdoável.
6. Falta **um só momento cinético**: a headline entra com fadeUp e nunca mais reage a nada. Sites premiados fazem o título ser o palco (letras que respondem ao mouse, mask reveal, displacement).

**Como tornar memorável:** trocar a foto por palco/guitarrista em contraluz com fumaça real na imagem; unificar o tratamento das 3 linhas com UM contraste intencional (ex.: tudo sólido, só "MUNDO" em fire-gradient); headline com reveal por máscara (clip-path) letra a letra; aposentar o mouse-icon por uma linha vertical animada + "SCROLL"; eq bars ou crescem e viram elemento (ligado à posição do mouse) ou saem.

---

## 2. Paleta — 6.5/10

- A rampa fogo (vermelho → laranja → dourado) é coerente e temática. **Mas é usada na mesma intensidade em tudo**: eyebrow dourado, número dourado, glow vermelho, chip laranja… quando tudo brilha, nada brilha.
- **Papéis de cor não definidos.** Vermelho ora é ação (CTA), ora é decoração (linha, estrela, glow). Dourado ora é editorial, ora é UI. Um sistema exige: *vermelho = ação/energia; dourado = destaque editorial; laranja = só dentro de gradientes; nunca os três juntos no mesmo bloco*.
- O cinza `#9ca3af` (accent do grunge/smoke) é o zinc default do Tailwind — cor sem assinatura.
- **Falta um contraponto frio.** 15.000px de página em preto+fogo cansa a retina. Referências (Porsche, Rockstar) sempre têm um respiro tonal — um bloco off-white "editorial" ou um azul profundo de palco daria dinâmica de temperatura.

---

## 3. Tipografia — 6.5/10

- **Anton em caps lock o site inteiro = gritar por 15.000px.** Anton tem um peso só, sem itálico: zero dinâmica. Toda seção tem o mesmo h2 (5xl→7xl), então nenhuma seção é mais importante que outra.
- Space Grotesk correta, mas **abusamos de `text-xs`/`text-sm` cinza** (20+ ocorrências): metade do conteúdo real do site está em letra de rodapé. Isso é hierarquia UI-kit, não editorial.
- **Falta uma terceira voz tipográfica** para metadados (anos, RPM, locais, tracklists): uma mono (ex.: Space Mono/JetBrains Mono) daria o toque "ficha técnica de estúdio" e separaria dado de prosa.
- Line-height dos displays (0.95) e tracking estão corretos. A escala entre breakpoints também.

---

## 4. Espaçamento e ritmo — 6/10

- `py-24 md:py-36` em **10 de 11 seções** (verificado no código): o ritmo vertical é um metrônomo. Denso/arejado/denso é o que cria respiração editorial — aqui tudo respira igual.
- **Timeline tem faixas mortas de 200–300px** (screenshot comprova): quando o texto da década é mais curto que a imagem 4:3, sobra vácuo; somado ao `space-y-36`, há telas inteiras quase vazias entre 1950s e 1960s.
- **Stats flutua no vazio**: 6 números pequenos centrados numa faixa de ~600px sem nenhuma âncora compositiva.
- **Desalinhamento em Festivais**: o container dos cards é `max-w-[90rem]` mas o heading está em `max-w-7xl` — as margens esquerdas não batem (visível no screenshot).
- Sequência Newsletter → marquee → footer: três faixas empilhadas com fundos distintos criam "bandeirado" (banding) no final da página.

---

## 5. Layout — 6/10

A gramática é sempre a mesma: *heading à esquerda → grid abaixo → próxima seção*. Dez vezes. Zero sobreposição entre seções, zero elemento que atravessa fronteira de bloco, zero assimetria intencional. É escaneável — e previsível a partir da terceira dobra. A timeline zigzag alternada é o layout mais "template" do site. Award-level exige pelo menos: um momento horizontal (a timeline é a candidata óbvia), um elemento pinned/sticky, e blocos que invadem a seção vizinha.

---

## 6. Componentes — 6.5/10

| Componente | Estado |
|---|---|
| Sleeves de vinil | **Excelente** — melhor componente do site, tem identidade própria |
| Modal de álbum | Bom, limpo |
| Cards de banda | Bons; selo EST. é um bom detalhe |
| **Ícones de instrumentos** | **Ruins.** SVGs ingênuos: a guitarra parece um banjo/colher (screenshot confirma). É o asset visual mais fraco do site e está numa seção-vitrine |
| Timeline | Linha de 2px + dots de 16px: frágil demais para o peso da seção |
| Lightbox | Sem setas visíveis — navegação só por teclado é um buraco de UX em touch |
| Raios de borda | 4 sistemas convivendo: `2xl` (cards), `3xl` (festivais), `md` (sleeves), `xl` (galeria). Sleeve se justifica (é um disco); o resto é arbitrário |
| Socials no footer | Lista de texto puro — footer "rico visualmente" era requisito e não foi cumprido |

Positivo: só existe **uma** curva de easing no código inteiro (`[0.22,1,0.36,1]`) e durations padronizadas (300/500/700). Isso é sistema.

---

## 7. Identidade — 7/10

Sleeves + ghost-words + selo + fire ramp = já existe uma assinatura. Mas: não há **logo/símbolo** (ROCKVERSE é só texto), e a genericidade das fotos dilui a identidade que a tipografia constrói. O visitante lembraria amanhã dos vinis; do hero, não.

---

## 8. Motion — 6/10

- **90% das entradas são o mesmo fadeUp com stagger.** Na terceira seção o olho já prevê a animação — previsibilidade é o oposto de "wow".
- Não há **nenhuma cena scroll-driven** (pin + scrub). A barra de progresso da timeline é o único scroll-link real.
- Smooth scroll é CSS puro: âncoras saltam sem inércia. Para o nível pretendido, Lenis (ou similar) é obrigatório.
- Faltam: tipografia cinética no hero, skew por velocidade no marquee, um vinil que "toca" enquanto a seção rola, transições de saída (tudo entra, nada sai).
- O que existe de bom: float dos ícones, marquee, spotlights, contadores.

---

## 9. Profundidade — 6.5/10

Grain + spotlights + ghost-words criam camadas — bom. Mas os **cards são chapados**: fill escuro + borda 1px, sem sistema de sombra (3 shadows ad-hoc no código inteiro). Não há reflexo, não há metal, e o glass só existe na navbar e nos fact-boxes. O site tem *iluminação* mas não tem *materialidade*.

---

## 10. Imagens — 4/10 ⚠️ (pior nota da auditoria)

1. **CRÍTICO — Hall da Fama semanticamente quebrado:** o card do **Freddie Mercury mostra uma guitarra**, o do **Kurt Cobain mostra teclas de piano**, o do **Elvis mostra caixas de vinil**. Isso não lê como escolha estética — lê como placeholder esquecido. Destrói credibilidade na hora.
2. **CRÍTICO — Fotos de EDM num site de rock:** a 3ª imagem da galeria é visivelmente um show eletrônico (lasers, DJ booth, wash roxo) e a foto do Woodstock idem. Genre-mismatch que qualquer júri nota em 2 segundos.
3. **Reuso de assets:** a mesma foto de guitarra serve Led Zeppelin *e* Hendrix; a mesma foto serve década de 1990, Nirvana *e* Cobain; outra serve AC/DC *e* Bowie. Em uma página única, repetição é visível.
4. **Sem tratamento unificado:** algumas imagens em cor, outras grayscale, opacidades variadas. Um duotone/grade consistente (sombras quentes, pretos esmagados) transformaria stock em direção de arte.

---

## 11. UX — 7/10

- Propósito entendido em <2s ✓. Nav clara ✓. Curiosidade sustentada pelos dividers ✓.
- **Sag no meio da página:** Hall → Curiosidades → Stats são três seções de baixa energia em sequência.
- **CTA "Entrar na turnê" é ambíguo** (leva à newsletter — o rótulo promete outra coisa) **e some no menu mobile** (hamburger lista só os 6 links; o CTA não existe lá).
- Lightbox sem setas visíveis; sem indicador de "clicável" nos vinis além do texto pequeno.

---

## 12. Responsividade — 6/10

- **BUG mobile:** nas sleeves, títulos de 2-3 linhas ("The Dark Side of the Moon") **cortam a linha de microtexto** "33⅓ RPM" na base do card (aspect-square + conteúdo fixo não fecham a conta em 390px).
- **Ghost-words cortadas no meio da letra** em 390px (ex.: "BACKLINE" vira "B…E" gigante truncado atrás do header) — sujo.
- Tablet (820px) está sólido. Footer mobile ok. Timeline mobile perde a linha (aceitável, mas perde a alma da seção).

---

## 13. Performance visual — 8/10

98 de Lighthouse com esse volume de efeito é ótimo. Ressalvas: 4 loops infinitos de blur-3xl + 2 canvases + grain são pesados em GPU fraca — animações de blur deveriam pausar fora do viewport; `will-change` ausente. Reduced-motion coberto ✓, densidade de partículas cai no mobile ✓.

---

## 14. Design System — 7/10

Existe de verdade: tokens de cor em `@theme`, 1 easing, durations e py padronizados, variants centralizados. Faltam: escala de sombras, tokens de raio (resolver os 4 sistemas), escala de z-index (50/60/80/90/100 ad-hoc), e tokens tipográficos por papel (display-hero, display-section, meta, body).

---

## 15. Benchmark

Contra Fender/Rockstar/Porsche/Awwwards SOTD, faltam exatamente **quatro coisas**:

1. **Direção de arte proprietária** — hoje as fotos são stock cru; referências tratam toda imagem (duotone, grade, recorte) até parecer sessão própria.
2. **Um "hero moment" técnico** — uma cena que só este site tem (timeline horizontal com scrub, vinil 3D/scroll-play, headline cinética). Hoje o site executa bem padrões conhecidos; não inventa nenhum.
3. **Narrativa com scroll** — as seções são slides empilhados; premiados constroem uma história onde o scroll é o instrumento.
4. **Materialidade** — luz existe, matéria não (sem metal, vidro, reflexo, sombra sistemática).

---

# Tabela de problemas

| # | Problema | Gravidade | Impacto | Correção | Prioridade |
|---|---|---|---|---|---|
| 1 | Hall da Fama com fotos semanticamente erradas (guitarra p/ Freddie, piano p/ Cobain) | **Crítica** | Credibilidade destruída ao primeiro olhar | Fotos coerentes por artista (silhueta/palco B&W) + tratamento duotone | P0 |
| 2 | Fotos de EDM (galeria #3, Woodstock) em site de rock | **Crítica** | Genre-mismatch óbvio para o público-alvo | Substituir por shows de banda (palco, guitarras, mosh) | P0 |
| 3 | Sleeve mobile corta microtexto com títulos longos | **Alta** | Quebra visível em produto final mobile | Reduzir title p/ clamp, min-h no rodapé do card ou esconder linha RPM <380px | P0 |
| 4 | Ghost-words truncadas no meio da letra no mobile | **Alta** | Aspecto de bug em toda seção mobile | Esconder <md ou reduzir para caber | P0 |
| 5 | Reuso da mesma foto em contextos diferentes (4 casos) | **Alta** | Percepção de descuido | 1 asset = 1 uso; curadoria nova | P0 |
| 6 | Timeline com faixas mortas de 200–300px | **Alta** | Ritmo quebrado na 2ª seção do site | Reequilibrar grid (imagem menor/sticky) e reduzir space-y | P1 |
| 7 | CTA ausente no menu mobile + rótulo ambíguo "Entrar na turnê" | **Alta** | Conversão escondida no mobile | Incluir CTA no drawer; rótulo "Receber novidades" ou similar | P1 |
| 8 | Headline do hero: clímax "MUNDO" com tratamento mais fraco | **Média** | Hero menos memorável do que poderia | Reordenar contraste tipográfico | P1 |
| 9 | Foto do hero genérica (sem palco/instrumento) | **Média** | Primeiro segundo não é "rock" | Foto de palco/guitarrista em contraluz | P1 |
| 10 | Ícones de instrumentos amadores | **Média** | Seção-vitrine com asset fraco | Redesenhar SVGs (traço 2px consistente, formas corretas) | P1 |
| 11 | Desalinhamento heading × cards em Festivais | **Média** | Grid quebrado para olho treinado | Unificar containers | P1 |
| 12 | Lightbox sem setas visíveis | **Média** | Navegação invisível em touch | Botões prev/next + swipe | P2 |
| 13 | Motion previsível (fadeUp em 90% das entradas) | **Média** | "Wow" evapora na 3ª seção | Variar por seção: mask reveal, clip, scale-rotate | P2 |
| 14 | Sem smooth scroll com inércia | **Média** | Feel abaixo do padrão awwwards | Lenis + âncoras suaves | P2 |
| 15 | 4 sistemas de border-radius | **Baixa** | Inconsistência sutil | Tokens: `radius-card`, `radius-panel`, `radius-sleeve` | P2 |
| 16 | Stats sem composição | **Baixa** | Seção esquecível | Números gigantes + régua/dividers + ghost word | P2 |
| 17 | Footer pouco denso, socials em texto puro | **Baixa** | Fim de página anticlimático | Redesenho: colunas + ícones + CTA final | P3 |
| 18 | Sem contraponto frio na paleta | **Baixa** | Fadiga tonal na página longa | 1 bloco editorial off-white ou azul-palco | P3 |
| 19 | Blurs animados sem pausa offscreen | **Baixa** | GPU em máquinas fracas | IntersectionObserver + will-change | P3 |
| 20 | Emoji 🤘 no SVG do selo (render inconsistente) | **Baixa** | Detalhe premium com falha cross-OS | Substituir por path SVG | P3 |

---

# Roadmap de melhoria

## Fase 1 — Correções críticas (integridade)
Itens 1–5, 7, 11: curadoria completa de imagens (novas fotos, zero reuso, coerência semântica), fix do overflow das sleeves mobile, ghost-words responsivas, CTA no menu mobile + rótulo, alinhamento de Festivais.

## Fase 2 — Melhorias visuais (direção de arte)
Itens 6, 8, 9, 10, 16, 17, 18: tratamento duotone unificado nas imagens, hero recomposto (foto + hierarquia da headline), redesenho dos ícones de instrumentos, timeline reequilibrada, stats e footer redesenhados, bloco de contraponto tonal, sistema de sombras + tokens de raio.

## Fase 3 — Microinterações
Itens 12, 15: setas + swipe no lightbox, hovers com mask/clip-path (não só transform), estados de cursor contextuais ("ver", "arrastar"), chips unificados, magnetic nos links da navbar, focus states visíveis.

## Fase 4 — Motion Design
Itens 13, 14: Lenis smooth scroll, headline cinética no hero (reveal por máscara letra a letra), timeline com momento pinned/scrub, vinil que gira conforme o scroll na seção de álbuns, skew por velocidade no marquee, entradas variadas por seção.

## Fase 5 — Refinamento final
Itens 19, 20 + QA: pausa de efeitos offscreen, selo em path puro, re-audit Lighthouse + axe, OG image real, varredura cross-device final, revisão de copy.
