import { useState } from "react";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SpotlightCursor } from "@/components/effects/SpotlightCursor";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { Skills } from "@/sections/Skills";
import { Trust } from "@/sections/Trust";

export default function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <SpotlightCursor />
      <Navbar onOpenCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Trust />
        <Services />
        <Contact />
      </main>

      <Footer />

      {/* Subtle ambient layer behind footer */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <AnimatedGrid />
      </div>
    </>
  );
}
