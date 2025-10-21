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
      <Navbar />
      <Hero />
      <BentoFeatures />
      <JudgesSection />
      <CommunityParticipation />
      <PlatformUseCases />

      <TokenUtility />

      <Tokenomics />

      <RevenueAccordion />
      <Roadmap />
      <Footer />
    </main>
  );
};

export default App;
