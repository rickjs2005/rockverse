[English](README.md) | **Português**

# ROCKVERSE

Site conceito em página única sobre a história do rock, feito como peça de portfólio da MilWeb.

> **Tipo:** conceito fan-made, sem fins comerciais. Não é um site oficial e não tem afiliação com as bandas, artistas, gravadoras ou festivais citados. Nomes de bandas, álbuns e selos aparecem apenas como referência editorial.
>
> **URL configurada no projeto:** `https://rockverse.vercel.app` (definida em `SITE.url`, `constants/data.ts`; não confirmada como demo publicada).

![Seção inicial do ROCKVERSE](docs/screenshots/hero.jpg)

## Funcionalidades

- Seções de história por década, bandas, instrumentos, gêneros, festivais, álbuns, hall da fama, curiosidades, números, galeria e newsletter.
- Capas de álbum desenhadas em CSS (vinis), com interação para "girar o disco" e ver as faixas.
- Galeria com lightbox (teclado e gesto de deslizar).
- Animações com Framer Motion, rolagem suave com Lenis, cursor personalizado e partículas em canvas.
- Metadata, Open Graph gerado (`app/opengraph-image.tsx`), `robots.txt`, `sitemap.xml` e JSON-LD.

![Seção de álbuns](docs/screenshots/albums.webp)

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis (rolagem suave)

## Como rodar

Pré-requisitos: Node.js 20 ou superior (testado com Node 22) e npm.

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
npm run lint
```

Não há variáveis de ambiente. A URL canônica usada em metadata, robots e sitemap fica em `SITE.url`, em `constants/data.ts`.

## Estrutura

```
app/         layout, página, OG image, robots e sitemap
sections/    seções da página (Hero, History, Bands, Albums, ...)
components/  componentes reutilizáveis (Navbar, cursor, canvas, ...)
constants/   todo o conteúdo em data.ts
animations/  variantes do Framer Motion
marketing/   vídeos verticais de divulgação (fora do build)
docs/        capturas de tela
```

## Limitações

- A newsletter é apenas visual: o formulário mostra uma confirmação local e não envia dados.
- Os ícones de redes sociais do rodapé apontam para `#` (sem perfis reais).
- `npm run lint` acusa 2 erros pré-existentes das regras de hooks do React (`components/CustomCursor.tsx` e `sections/Gallery.tsx`); o build e a checagem de tipos passam.
- As imagens são carregadas do Unsplash em tempo de execução.

## Créditos e mídias

- Fotos: Unsplash (carregadas de `images.unsplash.com`).
- Fontes: Anton e Space Grotesk via `next/font/google`.
- `marketing/rockverse-tiktok.mp4` e `marketing/rockverse-tiktok-60s.mp4`: vídeos de divulgação gravados a partir do site; a origem e os direitos da trilha sonora e das imagens não estão documentados.

## Segurança

Veja [SECURITY.md](SECURITY.md).

## Licença

Ainda não há licença definida; todos os direitos reservados ao autor.
