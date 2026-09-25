# ROCKVERSE

Site conceito sobre a história do rock, feito como peça de portfólio da MilWeb. Não é um produto comercial nem tem vínculo com as bandas, gravadoras ou festivais citados.

É uma página única com seções de história, gêneros, bandas, álbuns, instrumentos, festivais, curiosidades, galeria e hall da fama. Todo o conteúdo está em `constants/data.ts`; as fotos vêm do Unsplash e as capas de álbum são vinis desenhados em CSS.

A pasta `marketing/` guarda dois vídeos verticais de divulgação gravados a partir do site. Eles não fazem parte do build.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis (rolagem suave)

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
npm run lint
```

Não há variáveis de ambiente. A URL canônica usada em metadata e sitemap fica em `SITE.url`, em `constants/data.ts`.
