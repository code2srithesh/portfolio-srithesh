import Hero from "@/components/portfolio/Hero";
import Summary from "@/components/portfolio/Summary";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen relative">
      {/* Persistent background mesh */}
      <div className="fixed inset-0 bg-mesh pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
