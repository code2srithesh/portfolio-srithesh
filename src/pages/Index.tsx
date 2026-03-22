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
      <main className="bg-background text-foreground min-h-screen relative">
        <div className="fixed inset-0 bg-mesh pointer-events-none" />
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
