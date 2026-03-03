import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";
import { SocialNav } from "@/components/SocialNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SectionNav />
      <SocialNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
