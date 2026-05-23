import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GenreMarquee } from "@/components/genre-marquee";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <GenreMarquee />
        <About />
        <Services />
        <Portfolio />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
