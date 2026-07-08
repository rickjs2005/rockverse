export interface Decade {
  id: string;
  years: string;
  title: string;
  description: string;
  artists: string[];
  albums: string[];
  events: string[];
  fact: string;
  image: string;
  accent: string;
}

export interface Band {
  name: string;
  country: string;
  year: number;
  genre: string;
  members: string[];
  albums: string[];
  image: string;
  accent: string;
}

export interface Instrument {
  name: string;
  role: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Genre {
  name: string;
  era: string;
  description: string;
  bands: string[];
  gradient: string;
}

export interface Festival {
  name: string;
  location: string;
  year: string;
  history: string;
  fact: string;
  image: string;
}

export interface Album {
  title: string;
  band: string;
  year: number;
  description: string;
  fact: string;
  tracks: string[];
  label: string;
  vinyl: string;
}

export interface Legend {
  name: string;
  role: string;
  years: string;
  legacy: string;
  image: string;
}

export interface Curiosity {
  title: string;
  text: string;
  highlight?: string;
  image?: string;
  size: "large" | "medium" | "small";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  ratio: "tall" | "wide" | "square";
}
