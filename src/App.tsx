// App.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Your other imports...
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import BentoFeatures from "./sections/Features";
import JudgesSection from "./sections/Judges";
import CommunityParticipation from "./sections/CommunityParticipation";
import PlatformUseCases from "./sections/PlatformUseCases";
import TokenUtility from "./sections/TokenUtility";
import Tokenomics from "./sections/Tokenomics";
import RevenueAccordion from "./sections/RevenueAccordion";
import Roadmap from "./sections/Roadmap";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 0,
      mirror: false,
    });
  }, []);

  return (
    <main
      style={{ display: "block" }}
      className="bg-black relative overflow-hidden"
    >
      {/* 🌌 Performance-Optimized Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-cyan-950/20"></div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        ></div>

        {/* Strategic glows - FIXED POSITION (performance optimized) */}
        <div className="fixed top-1/4 -left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="fixed bottom-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <BentoFeatures />
      <JudgesSection />
      <CommunityParticipation />
      <PlatformUseCases />
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>
        <TokenUtility />
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>
        <Tokenomics />
      </div>
      <RevenueAccordion />
      <Roadmap />
      <Footer />
    </main>
  );
};

export default App;
