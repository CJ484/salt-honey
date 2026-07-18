import { Metadata } from "next";
import { HeroSection, PhilosophySection, AboutOwnerSection, MenuSection } from "./sections";

export const metadata: Metadata = {
  title: "Home",
  keywords: [
    "Salt and Honey Cafe",
    "Salt & Honey Caffe",
    "cafe Sea Cliff NY",
    "coffee shop Sea Cliff",
    "Sea Cliff Avenue cafe",
    "North Shore Long Island coffee",
    "specialty coffee Sea Cliff",
    "artisan coffee Long Island",
    "salted honey latte",
    "pour over coffee",
    "ceremonial matcha",
    "Coffee Shop Long Island",
    "Local coffee shop Sea Cliff",
    "Local coffee shop North Shore Long Island",
    "Local coffee shop Long Island",
    "Local coffee shop NY",
    "cafe with food Sea Cliff",
    "new cafe Sea Cliff 2026",
  ],
};

export default function HomePage() {
  return (
    <main className="font-sans text-foreground-brand bg-exterior min-h-screen selection:bg-sage selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
      <HeroSection />
      <PhilosophySection />
      <MenuSection />
      <AboutOwnerSection />
    </main>
  );
}
