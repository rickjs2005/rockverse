import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import MarqueeDivider from "@/components/MarqueeDivider";
import Hero from "@/sections/Hero";
import History from "@/sections/History";

const Bands = dynamic(() => import("@/sections/Bands"));
const Instruments = dynamic(() => import("@/sections/Instruments"));
const Genres = dynamic(() => import("@/sections/Genres"));
const Festivals = dynamic(() => import("@/sections/Festivals"));
const Albums = dynamic(() => import("@/sections/Albums"));
const HallOfFame = dynamic(() => import("@/sections/HallOfFame"));
const Curiosities = dynamic(() => import("@/sections/Curiosities"));
const Stats = dynamic(() => import("@/sections/Stats"));
const Gallery = dynamic(() => import("@/sections/Gallery"));
const Newsletter = dynamic(() => import("@/sections/Newsletter"));
const Footer = dynamic(() => import("@/sections/Footer"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <History />
        <MarqueeDivider words={["MAIS ALTO", "MAIS RÁPIDO", "MAIS PESADO"]} accent />
        <Bands />
        <Instruments />
        <Genres />
        <Festivals />
        <MarqueeDivider words={["DROP THE NEEDLE", "SIDE A", "SIDE B"]} />
        <Albums />
        <HallOfFame />
        <Curiosities />
        <Stats />
        <Gallery />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
