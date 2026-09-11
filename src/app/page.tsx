import { Atmosphere } from "@/components/atmosphere";
import { BootSequence } from "@/components/boot-sequence";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SystemCursor } from "@/components/system-cursor";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <Atmosphere />
      <ScrollProgress />
      <SystemCursor />
      <BootSequence />
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
