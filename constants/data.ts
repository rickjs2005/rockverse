import type {
  Album,
  Band,
  Curiosity,
  Decade,
  Festival,
  GalleryImage,
  Genre,
  Instrument,
  Legend,
  Stat,
} from "@/types";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SITE = {
  name: "ROCKVERSE",
  tagline: "A história do som mais alto do planeta",
  url: "https://rockverse.vercel.app",
  description:
    "Uma experiência imersiva pela história do Rock — décadas, bandas lendárias, álbuns icônicos, festivais e o som que mudou o mundo.",
};

export const HERO_IMAGE = u("photo-1526478806334-5fd488fcaabc", 1920);

export const DECADES: Decade[] = [
  {
    id: "1950",
    years: "1950s",
    title: "O Big Bang",
    description:
      "Do blues elétrico e do rhythm and blues nasce um som novo, rápido e perigoso. As rádios explodem, os pais se assustam e a juventude encontra sua trilha sonora.",
    artists: ["Chuck Berry", "Elvis Presley", "Little Richard", "Buddy Holly"],
    albums: ["Elvis Presley (1956)", "Chuck Berry Is on Top (1959)"],
    events: [
      "1954 — \"Rock Around the Clock\" detona a febre mundial",
      "1956 — Elvis aparece no Ed Sullivan Show e para os EUA",
    ],
    fact: "O termo \"rock and roll\" foi popularizado pelo DJ Alan Freed em Cleveland, em 1951.",
    image: u("photo-1461360228754-6e81c478b882"),
    accent: "#ffb800",
  },
  {
    id: "1960",
    years: "1960s",
    title: "A Invasão",
    description:
      "A Invasão Britânica cruza o Atlântico, a psicodelia expande a mente e Woodstock transforma música em movimento. O rock vira cultura, política e revolução.",
    artists: ["The Beatles", "The Rolling Stones", "Jimi Hendrix", "The Doors"],
    albums: ["Sgt. Pepper's (1967)", "Are You Experienced (1967)", "Abbey Road (1969)"],
    events: [
      "1964 — Beatlemania invade os Estados Unidos",
      "1969 — Woodstock reúne 400 mil pessoas em três dias de paz e música",
    ],
    fact: "Hendrix tocava guitarra com os dentes, atrás da cabeça — e incendiou uma no palco de Monterey em 1967.",
    image: u("photo-1429962714451-bb934ecdc4ec"),
    accent: "#ff6b00",
  },
  {
    id: "1970",
    years: "1970s",
    title: "Deuses do Olimpo",
    description:
      "A década dos gigantes: riffs monumentais, álbuns conceituais, solos infinitos e estádios lotados. O hard rock e o progressivo elevam o gênero à categoria de arte épica.",
    artists: ["Led Zeppelin", "Pink Floyd", "Queen", "Black Sabbath"],
    albums: ["Led Zeppelin IV (1971)", "The Dark Side of the Moon (1973)", "A Night at the Opera (1975)"],
    events: [
      "1973 — Dark Side of the Moon inicia 900+ semanas nas paradas",
      "1976 — O punk explode em Londres como resposta crua ao excesso",
    ],
    fact: "\"Stairway to Heaven\" nunca foi lançada como single — e mesmo assim virou a música mais pedida da história das rádios americanas.",
    image: u("photo-1603048588665-791ca8aea617"),
    accent: "#e10600",
  },
  {
    id: "1980",
    years: "1980s",
    title: "Mais Alto, Mais Rápido",
    description:
      "Metal em velocidade máxima, arenas gigantes, videoclipes na MTV e cabelos até o teto. O rock vira espetáculo global — e o thrash mostra que dá pra ser ainda mais pesado.",
    artists: ["Metallica", "Guns N' Roses", "AC/DC", "Iron Maiden"],
    albums: ["Back in Black (1980)", "Master of Puppets (1986)", "Appetite for Destruction (1987)"],
    events: [
      "1981 — A MTV entra no ar e muda o jogo para sempre",
      "1985 — Live Aid conecta 1,9 bilhão de espectadores em 150 países",
    ],
    fact: "Back in Black, do AC/DC, é um dos álbuns mais vendidos da história — mais de 50 milhões de cópias.",
    image: u("photo-1461784121038-f088ca1e7714"),
    accent: "#ff2d1a",
  },
  {
    id: "1990",
    years: "1990s",
    title: "A Fúria de Seattle",
    description:
      "Camisas de flanela, distorção suja e letras viscerais: o grunge arranca o rock dos estádios e devolve às garagens. Do outro lado do oceano, o britpop responde com melodia.",
    artists: ["Nirvana", "Pearl Jam", "Soundgarden", "Oasis"],
    albums: ["Nevermind (1991)", "Ten (1991)", "(What's the Story) Morning Glory? (1995)"],
    events: [
      "1991 — Nevermind destrona Michael Jackson no topo da Billboard",
      "1994 — O mundo perde Kurt Cobain e o grunge perde sua voz",
    ],
    fact: "\"Smells Like Teen Spirit\" nasceu de uma piada: uma amiga escreveu na parede do quarto de Kurt \"Kurt smells like Teen Spirit\" — um desodorante.",
    image: u("photo-1462965326201-d02e4f455804"),
    accent: "#9ca3af",
  },
  {
    id: "2000",
    years: "2000s",
    title: "O Renascimento de Garagem",
    description:
      "O rock de garagem volta afiado e minimalista, o indie sai da internet para os festivais e o gênero prova que se reinventa a cada geração.",
    artists: ["The Strokes", "The White Stripes", "Foo Fighters", "Arctic Monkeys"],
    albums: ["Is This It (2001)", "Elephant (2003)", "Whatever People Say I Am (2006)"],
    events: [
      "2001 — Is This It redefine o som da década",
      "2006 — Arctic Monkeys quebra recordes vindo direto do MySpace",
    ],
    fact: "O riff de \"Seven Nation Army\" virou o canto de estádio mais entoado do planeta — de arenas de rock a finais de Copa do Mundo.",
    image: u("photo-1598488035139-bdbb2231ce04"),
    accent: "#ff6b00",
  },
  {
    id: "hoje",
    years: "Hoje",
    title: "O Futuro é Alto",
    description:
      "Streaming, vinil em alta histórica e uma nova geração dividindo palco com lendas vivas. O rock não morreu — ele só ficou mais difícil de ignorar.",
    artists: ["Måneskin", "Greta Van Fleet", "Ghost", "Turnstile"],
    albums: ["Rush! (2023)", "Impera (2022)", "Glow On (2021)"],
    events: [
      "2021 — Måneskin leva o rock de volta ao topo global via Eurovision",
      "2023 — Vendas de vinil superam CDs pela primeira vez desde 1987",
    ],
    fact: "Em plena era do streaming, o vinil cresce há 17 anos consecutivos — puxado principalmente por discos de rock.",
    image: u("photo-1499415479124-43c32433a620"),
    accent: "#ffb800",
  },
];

export const BANDS: Band[] = [
  {
    name: "Led Zeppelin",
    country: "Reino Unido",
    year: 1968,
    genre: "Hard Rock",
    members: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
    albums: ["Led Zeppelin IV", "Physical Graffiti"],
    image: u("photo-1516924962500-2b4b3b99ea02"),
    accent: "#ffb800",
  },
  {
    name: "Queen",
    country: "Reino Unido",
    year: 1970,
    genre: "Rock / Ópera-Rock",
    members: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    albums: ["A Night at the Opera", "News of the World"],
    image: u("photo-1507901747481-84a4f64fda6d"),
    accent: "#e10600",
  },
  {
    name: "Pink Floyd",
    country: "Reino Unido",
    year: 1965,
    genre: "Rock Progressivo",
    members: ["David Gilmour", "Roger Waters", "Nick Mason", "Richard Wright"],
    albums: ["The Dark Side of the Moon", "The Wall"],
    image: u("photo-1522158637959-30385a09e0da"),
    accent: "#ff6b00",
  },
  {
    name: "The Beatles",
    country: "Reino Unido",
    year: 1960,
    genre: "Rock",
    members: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    albums: ["Abbey Road", "Sgt. Pepper's"],
    image: u("photo-1511735111819-9a3f7709049c"),
    accent: "#ffb800",
  },
  {
    name: "Nirvana",
    country: "Estados Unidos",
    year: 1987,
    genre: "Grunge",
    members: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
    albums: ["Nevermind", "In Utero"],
    image: u("photo-1564186763535-ebb21ef5277f"),
    accent: "#9ca3af",
  },
  {
    name: "Metallica",
    country: "Estados Unidos",
    year: 1981,
    genre: "Thrash Metal",
    members: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
    albums: ["Master of Puppets", "The Black Album"],
    image: u("photo-1550985616-10810253b84d"),
    accent: "#e10600",
  },
  {
    name: "AC/DC",
    country: "Austrália",
    year: 1973,
    genre: "Hard Rock",
    members: ["Angus Young", "Brian Johnson", "Stevie Young", "Phil Rudd"],
    albums: ["Back in Black", "Highway to Hell"],
    image: u("photo-1446057032654-9d8885db76c6"),
    accent: "#ff2d1a",
  },
  {
    name: "The Rolling Stones",
    country: "Reino Unido",
    year: 1962,
    genre: "Rock / Blues Rock",
    members: ["Mick Jagger", "Keith Richards", "Ronnie Wood"],
    albums: ["Exile on Main St.", "Sticky Fingers"],
    image: u("photo-1524368535928-5b5e00ddc76b"),
    accent: "#ff6b00",
  },
];

export const INSTRUMENTS: Instrument[] = [
  {
    name: "Guitarra",
    role: "A alma",
    description: "Riffs, solos e distorção. Nenhum instrumento define tanto o som e a atitude do rock.",
    icon: "guitar",
    accent: "#e10600",
  },
  {
    name: "Baixo",
    role: "O alicerce",
    description: "O groove que segura tudo no lugar. Quando o baixo entra, o chão treme.",
    icon: "bass",
    accent: "#ff6b00",
  },
  {
    name: "Bateria",
    role: "O coração",
    description: "O pulso da banda. De Bonham a Grohl, é ela que transforma música em avalanche.",
    icon: "drums",
    accent: "#ffb800",
  },
  {
    name: "Teclado",
    role: "A atmosfera",
    description: "Do órgão Hammond aos sintetizadores: camadas, texturas e épicos progressivos.",
    icon: "keys",
    accent: "#ff2d1a",
  },
  {
    name: "Microfone",
    role: "A voz",
    description: "O canal entre o palco e a multidão. Frontmen lendários fizeram dele um instrumento.",
    icon: "mic",
    accent: "#f5f5f5",
  },
];

export const GENRES: Genre[] = [
  {
    name: "Classic Rock",
    era: "1965–1980",
    description: "A fundação. Riffs eternos e canções que atravessam gerações.",
    bands: ["Led Zeppelin", "The Who", "Deep Purple"],
    gradient: "from-amber-500/25 via-transparent to-transparent",
  },
  {
    name: "Hard Rock",
    era: "1968–hoje",
    description: "Volume no máximo, guitarras em chamas e refrões de estádio.",
    bands: ["AC/DC", "Guns N' Roses", "Van Halen"],
    gradient: "from-red-600/25 via-transparent to-transparent",
  },
  {
    name: "Heavy Metal",
    era: "1970–hoje",
    description: "Peso, velocidade e escuridão. O lado mais extremo da distorção.",
    bands: ["Black Sabbath", "Iron Maiden", "Metallica"],
    gradient: "from-zinc-400/25 via-transparent to-transparent",
  },
  {
    name: "Progressive Rock",
    era: "1969–hoje",
    description: "Suítes de 20 minutos, conceitos e virtuosismo sem limites.",
    bands: ["Pink Floyd", "Yes", "Rush"],
    gradient: "from-orange-500/25 via-transparent to-transparent",
  },
  {
    name: "Alternative Rock",
    era: "1985–hoje",
    description: "O underground que tomou o mainstream sem pedir licença.",
    bands: ["Radiohead", "R.E.M.", "Pixies"],
    gradient: "from-yellow-400/20 via-transparent to-transparent",
  },
  {
    name: "Grunge",
    era: "1988–1997",
    description: "Flanela, fúria e honestidade brutal direto de Seattle.",
    bands: ["Nirvana", "Pearl Jam", "Alice in Chains"],
    gradient: "from-stone-400/25 via-transparent to-transparent",
  },
  {
    name: "Punk Rock",
    era: "1976–hoje",
    description: "Três acordes, dois minutos e toda a raiva do mundo.",
    bands: ["Ramones", "Sex Pistols", "The Clash"],
    gradient: "from-rose-600/25 via-transparent to-transparent",
  },
  {
    name: "Indie Rock",
    era: "1990–hoje",
    description: "Independente por natureza, gigante por mérito.",
    bands: ["Arctic Monkeys", "The Strokes", "Interpol"],
    gradient: "from-amber-300/20 via-transparent to-transparent",
  },
];

export const FESTIVALS: Festival[] = [
  {
    name: "Woodstock",
    location: "Bethel, Nova York — EUA",
    year: "1969",
    history:
      "Três dias de paz e música que viraram o símbolo máximo da contracultura. Planejado para 50 mil pessoas, recebeu 400 mil e entrou para a história como o festival que definiu uma geração.",
    fact: "Jimi Hendrix tocou para a multidão às 9h da manhã de segunda-feira — e fez história com sua versão do hino americano.",
    image: u("photo-1459749411175-04bf5292ceea", 1600),
  },
  {
    name: "Rock in Rio",
    location: "Rio de Janeiro — Brasil",
    year: "1985–hoje",
    history:
      "Nascido em plena redemocratização, estreou com Queen, AC/DC e Iron Maiden diante de 1,4 milhão de pessoas em 10 dias. Hoje é uma das maiores marcas de festival do mundo.",
    fact: "O show do Queen em 1985, para 250 mil pessoas, é considerado por Brian May um dos maiores da carreira da banda.",
    image: u("photo-1533174072545-7a4b6ad7a6c3", 1600),
  },
  {
    name: "Download Festival",
    location: "Donington Park — Inglaterra",
    year: "2003–hoje",
    history:
      "Herdeiro direto do lendário Monsters of Rock, é o templo britânico do rock pesado. Donington Park é solo sagrado: por lá passaram todos os gigantes do metal.",
    fact: "O nome \"Download\" foi escolhido como provocação: na época, a indústria via a internet como inimiga — o festival abraçou o futuro.",
    image: u("photo-1499364615650-ec38552f4f34", 1600),
  },
  {
    name: "Glastonbury",
    location: "Somerset — Inglaterra",
    year: "1970–hoje",
    history:
      "Começou numa fazenda com ingresso a £1 (com leite grátis incluído) e virou o festival mais icônico da Europa. O Pyramid Stage é um dos palcos mais desejados do planeta.",
    fact: "A fazenda de Worthy Farm segue ativa: as vacas voltam a pastar no local dos palcos poucas semanas depois do festival.",
    image: u("photo-1540039155733-5bb30b53aa14", 1600),
  },
];

export const ALBUMS: Album[] = [
  {
    title: "The Dark Side of the Moon",
    band: "Pink Floyd",
    year: 1973,
    description:
      "Uma obra-prima conceitual sobre tempo, dinheiro, loucura e morte. Engenharia de som revolucionária que redefiniu o que um álbum poderia ser.",
    fact: "Permaneceu 981 semanas na Billboard 200 — quase 19 anos no total.",
    tracks: ["Speak to Me", "Breathe", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Brain Damage", "Eclipse"],
    label: "Harvest",
    vinyl: "conic-gradient(from 210deg, #0ea5e9, #a855f7, #ef4444, #f59e0b, #22c55e, #0ea5e9)",
  },
  {
    title: "Led Zeppelin IV",
    band: "Led Zeppelin",
    year: 1971,
    description:
      "Sem título, sem nome da banda na capa — só música. O quarto álbum do Zeppelin é o ápice do hard rock dos anos 70.",
    fact: "A banda lançou o disco sem qualquer identificação na capa, contrariando a gravadora, para provar que a música falava por si.",
    tracks: ["Black Dog", "Rock and Roll", "The Battle of Evermore", "Stairway to Heaven", "Misty Mountain Hop", "Four Sticks", "Going to California", "When the Levee Breaks"],
    label: "Atlantic",
    vinyl: "radial-gradient(circle, #b45309 0%, #78350f 45%, #1c1917 100%)",
  },
  {
    title: "Nevermind",
    band: "Nirvana",
    year: 1991,
    description:
      "O disco que matou o hair metal da noite para o dia e colocou o underground de Seattle no centro do mundo.",
    fact: "A gravadora esperava vender 250 mil cópias. Vendeu mais de 30 milhões.",
    tracks: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Something in the Way"],
    label: "DGC",
    vinyl: "radial-gradient(circle, #38bdf8 0%, #0369a1 50%, #082f49 100%)",
  },
  {
    title: "Back in Black",
    band: "AC/DC",
    year: 1980,
    description:
      "Gravado meses após a morte de Bon Scott, é um tributo em forma de trovão. Riffs cirúrgicos e produção impecável de Mutt Lange.",
    fact: "A capa totalmente preta é uma homenagem de luto a Bon Scott, vocalista falecido em fevereiro de 1980.",
    tracks: ["Hells Bells", "Shoot to Thrill", "Back in Black", "You Shook Me All Night Long", "Rock and Roll Ain't Noise Pollution"],
    label: "Atlantic",
    vinyl: "radial-gradient(circle, #27272a 0%, #09090b 60%, #000 100%)",
  },
  {
    title: "A Night at the Opera",
    band: "Queen",
    year: 1975,
    description:
      "O álbum mais ambicioso do Queen, coroado por Bohemian Rhapsody — seis minutos de ópera, balada e hard rock em uma única faixa.",
    fact: "Foi o álbum mais caro já produzido até então. \"Bohemian Rhapsody\" levou três semanas só de gravação.",
    tracks: ["Death on Two Legs", "You're My Best Friend", "'39", "The Prophet's Song", "Love of My Life", "Bohemian Rhapsody", "God Save the Queen"],
    label: "EMI",
    vinyl: "conic-gradient(from 0deg, #fbbf24, #b91c1c, #1e1b4b, #fbbf24)",
  },
  {
    title: "Master of Puppets",
    band: "Metallica",
    year: 1986,
    description:
      "O auge do thrash metal: velocidade, precisão e composições complexas que elevaram o metal a outro patamar artístico.",
    fact: "Foi o primeiro álbum de metal considerado 'culturalmente significativo' pela Biblioteca do Congresso americano.",
    tracks: ["Battery", "Master of Puppets", "Welcome Home (Sanitarium)", "Disposable Heroes", "Orion", "Damage, Inc."],
    label: "Elektra",
    vinyl: "radial-gradient(circle, #dc2626 0%, #7f1d1d 50%, #0c0a09 100%)",
  },
  {
    title: "Abbey Road",
    band: "The Beatles",
    year: 1969,
    description:
      "O último álbum gravado pelos Beatles e uma das despedidas mais perfeitas da história da música. O medley do lado B é uma aula de composição.",
    fact: "A foto da capa levou 10 minutos: seis cliques na faixa de pedestres em frente ao estúdio — hoje o cruzamento mais famoso do mundo.",
    tracks: ["Come Together", "Something", "Octopus's Garden", "Here Comes the Sun", "Because", "Golden Slumbers", "The End"],
    label: "Apple",
    vinyl: "conic-gradient(from 120deg, #16a34a, #0f766e, #052e16, #16a34a)",
  },
  {
    title: "Appetite for Destruction",
    band: "Guns N' Roses",
    year: 1987,
    description:
      "O álbum de estreia mais vendido da história. Perigoso, sujo e irresistível — Los Angeles em forma de disco.",
    fact: "Demorou quase um ano para entrar nas paradas. Quando entrou, não saiu mais: 30 milhões de cópias.",
    tracks: ["Welcome to the Jungle", "It's So Easy", "Nightrain", "Paradise City", "Mr. Brownstone", "Sweet Child O' Mine", "Rocket Queen"],
    label: "Geffen",
    vinyl: "conic-gradient(from 45deg, #f59e0b, #dc2626, #450a0a, #f59e0b)",
  },
];

export const LEGENDS: Legend[] = [
  {
    name: "Jimi Hendrix",
    role: "Guitarra",
    years: "1942–1970",
    legacy: "Reinventou a guitarra elétrica em apenas quatro anos de carreira solo. Ninguém tocou igual antes — nem depois.",
    image: u("photo-1498038432885-c6f3f1b912ee", 800),
  },
  {
    name: "Freddie Mercury",
    role: "Voz",
    years: "1946–1991",
    legacy: "Quatro oitavas de alcance e o maior domínio de palco já visto. Transformava estádios em coros de 100 mil vozes.",
    image: u("photo-1493225457124-a3eb161ffa5f", 800),
  },
  {
    name: "David Bowie",
    role: "Camaleão",
    years: "1947–2016",
    legacy: "Reinventou-se a cada década e reinventou o pop-rock junto. Ziggy Stardust mudou o que significa ser um artista.",
    image: u("photo-1516450360452-9312f5e86fc7", 800),
  },
  {
    name: "Janis Joplin",
    role: "Voz",
    years: "1943–1970",
    legacy: "A voz mais visceral da sua geração. Cantava blues como se cada nota fosse a última.",
    image: u("photo-1516280440614-37939bbacd81", 800),
  },
  {
    name: "Kurt Cobain",
    role: "Voz & Guitarra",
    years: "1967–1994",
    legacy: "Deu voz a uma geração inteira que não se sentia representada. O grunge existe antes e depois dele.",
    image: u("photo-1484876065684-b683cf17d276", 800),
  },
  {
    name: "Elvis Presley",
    role: "O Rei",
    years: "1935–1977",
    legacy: "O primeiro ídolo global do rock. Sem Elvis, nada disso existiria — simples assim.",
    image: u("photo-1511671782779-c97d3d27a1d4", 800),
  },
];

export const CURIOSITIES: Curiosity[] = [
  {
    title: "O acorde mais caro do mundo",
    text: "A guitarra Fender Stratocaster preta de David Gilmour foi leiloada por US$ 3,9 milhões em 2019 — o instrumento mais caro já vendido até então. Foi com ela que ele gravou Comfortably Numb.",
    highlight: "US$ 3,9 mi",
    image: u("photo-1520166012956-add9ba0835cb"),
    size: "large",
  },
  {
    title: "900+ semanas",
    text: "The Dark Side of the Moon passou o equivalente a 19 anos nas paradas da Billboard. Estatisticamente, 1 em cada 14 pessoas com menos de 50 anos nos EUA já teve uma cópia.",
    highlight: "19 anos",
    size: "medium",
  },
  {
    title: "O riff que virou hino de estádio",
    text: "\"Seven Nation Army\" foi composta por Jack White num soundcheck na Austrália. Hoje é cantada por multidões em estádios do mundo inteiro — a maioria sem saber o nome da música.",
    size: "medium",
  },
  {
    title: "Woodstock quase não aconteceu",
    text: "O festival mudou de cidade três vezes e a cerca do terreno não ficou pronta a tempo. Resultado: virou um evento gratuito para 400 mil pessoas — e um prejuízo que levou 10 anos para ser pago.",
    image: u("photo-1453738773917-9c3eff1db985"),
    size: "large",
  },
  {
    title: "O solo gravado de primeira",
    text: "O solo de \"Highway Star\", do Deep Purple, que parece impossível de tocar, foi gravado por Ritchie Blackmore em uma única tomada.",
    size: "small",
  },
  {
    title: "Vinil imortal",
    text: "As vendas de vinil crescem há 17 anos seguidos. Em 2023, superaram as de CD pela primeira vez desde 1987 — puxadas por discos de rock clássico.",
    highlight: "17 anos",
    size: "small",
  },
];

export const STATS: Stat[] = [
  { value: 70, suffix: "+", label: "Anos de história" },
  { value: 350, suffix: "+", label: "Subgêneros mapeados" },
  { value: 1500, suffix: "+", label: "Bandas lendárias" },
  { value: 400, suffix: "K", label: "Pessoas em Woodstock" },
  { value: 50, suffix: "M", label: "Cópias de Back in Black" },
  { value: 150, suffix: "+", label: "Países alcançados pelo Live Aid" },
];

export const GALLERY: GalleryImage[] = [
  { src: u("photo-1470229722913-7c0e2dbbafd3"), alt: "Multidão diante do palco em luz alaranjada", ratio: "wide" },
  { src: u("photo-1478737270239-2f02b77fc618"), alt: "Microfones de estúdio na penumbra", ratio: "tall" },
  { src: u("photo-1519892300165-cb5542fb47c7"), alt: "Baquetas sobre a caixa da bateria", ratio: "square" },
  { src: u("photo-1519508234439-4f23643125c1"), alt: "Parede de guitarras em loja vintage", ratio: "wide" },
  { src: u("photo-1470019693664-1d202d2c0907"), alt: "Mãos ao piano em preto e branco", ratio: "tall" },
  { src: u("photo-1445985543470-41fba5c3144a"), alt: "Cordas do baixo em close escuro", ratio: "square" },
  { src: u("photo-1501386761578-eac5c94b800a"), alt: "Multidão em êxtase na roda do show", ratio: "wide" },
  { src: u("photo-1483412033650-1015ddeb83d1"), alt: "Toca-discos com vinil e fones", ratio: "square" },
  { src: u("photo-1510915361894-db8b60106cb1"), alt: "Mãos dedilhando o violão em luz quente", ratio: "tall" },
  { src: u("photo-1598653222000-6b7b7a552625"), alt: "Rig de teclados montado no palco", ratio: "wide" },
  { src: u("photo-1552422535-c45813c61732"), alt: "Dedos sobre as teclas do piano", ratio: "square" },
  { src: u("photo-1471478331149-c72f17e33c73"), alt: "Guitarrista em ambiente de pouca luz", ratio: "tall" },
];

export const NAV_LINKS = [
  { label: "História", href: "#historia" },
  { label: "Bandas", href: "#bandas" },
  { label: "Gêneros", href: "#generos" },
  { label: "Festivais", href: "#festivais" },
  { label: "Álbuns", href: "#albuns" },
  { label: "Galeria", href: "#galeria" },
];
