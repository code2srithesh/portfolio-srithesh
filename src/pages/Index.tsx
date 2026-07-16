import { useState, useCallback } from "react";
import Hero from "@/components/portfolio/Hero";
import Summary from "@/components/portfolio/Summary";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Journey from "@/components/portfolio/Journey";
import FunFacts from "@/components/portfolio/FunFacts";
import BuildingNow from "@/components/portfolio/BuildingNow";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CursorGlow />
      <Navbar />
      <main className="bg-background text-foreground min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 bg-mesh pointer-events-none" />
        {/* Ambient aurora layer */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px] animate-aurora" />
          <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[hsl(35_90%_55%/0.08)] blur-[130px] animate-aurora [animation-delay:-5s]" />
          <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-[hsl(200_80%_55%/0.06)] blur-[130px] animate-aurora [animation-delay:-9s]" />
        </div>
        <div className="relative z-10">

          <Hero />
          <Summary />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Journey />
          <FunFacts />
          <BuildingNow />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
