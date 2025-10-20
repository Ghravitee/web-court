import CommunityParticipation from "./sections/CommunityParticipation";
import BentoFeatures from "./sections/Features";
// import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import JudgesSection from "./sections/Judges";
import Navbar from "./sections/Navbar";
import PlatformUseCases from "./sections/PlatformUseCases";
import RevenueAccordion from "./sections/RevenueAccordion";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";
import TokenUtility from "./sections/TokenUtility";

const App = () => {
  return (
    <main style={{ display: "block" }} className="bg-black">
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
      {/* <Footer /> */}
    </main>
  );
};

export default App;
