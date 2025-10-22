import { useEffect } from "react";
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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 400, // Reduced from 600 for faster animations
      easing: "ease-out-cubic",
      once: false, // Changed to false for continuous animations
      offset: 50, // Reduced offset for earlier triggering
      delay: 0,
      mirror: true, // Changed to true for animations on scroll up/down
      throttleDelay: 99, // Added to improve performance
      startEvent: "DOMContentLoaded", // Ensure proper initialization
    });

    // Refresh AOS when route changes or on resize
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
    <main
      style={{ display: "block" }}
      className="bg-black relative overflow-hidden"
    >
      <Navbar />
      <Hero />
      <BentoFeatures />
      <JudgesSection />

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
