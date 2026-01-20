import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Your other imports...
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import BentoFeatures from "./sections/Features";
import JudgesSection from "./sections/Judges";
import PlatformUseCases from "./sections/PlatformUseCases";
import TokenUtility from "./sections/TokenUtility";
import Tokenomics from "./sections/Tokenomics";
import RevenueAccordion from "./sections/RevenueAccordion";
import Roadmap from "./sections/Roadmap";
import Footer from "./sections/Footer";
import DumbedDownPage from "./sections/DumbedDownPage";

type TabType = "normal" | "dumbed-down";

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>("normal");

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 0,
      mirror: true,
      throttleDelay: 99,
      startEvent: "DOMContentLoaded",
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("load", refreshAOS);
    window.addEventListener("resize", refreshAOS);

    return () => {
      window.removeEventListener("load", refreshAOS);
      window.removeEventListener("resize", refreshAOS);
    };
  }, []);

  return (
    <main className="relative">
      {/* Global Background */}
      <div className="fixed inset-0 bg-black -z-50">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-transparent"></div>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "normal" ? (
          <>
            {/* Hero with extended gradient that flows into Features */}
            <div className="relative">
              <Hero />
              {/* Gradient bridge between Hero and Features */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Features section with seamless background */}
            <div className="relative -mt-32 pt-32">
              <BentoFeatures />
            </div>

            <JudgesSection />
            <PlatformUseCases />
            <TokenUtility />
            <Tokenomics />
            <RevenueAccordion />
            <Roadmap />
          </>
        ) : (
          <DumbedDownPage />
        )}

        <Footer />
      </div>
    </main>
  );
};

export default App;
