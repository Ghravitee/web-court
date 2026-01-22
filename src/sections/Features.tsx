// import { FaShieldAlt } from "react-icons/fa";
// import { FileText, Wallet, Scale, Vote, Users } from "lucide-react";
// import shakingHands from "../assets/shaking-hands.jpg";
// import escrow from "../assets/escrow.jpg";
// import jigsaw from "../assets/jigsaw.jpg";
// import fingerprint from "../assets/fingerprint.jpg";
// import trending from "../assets/trending.jpg";

// const BentoFeatures = () => {
//   const featureCards = [
//     {
//       title: "Smart Agreements",
//       icon: <FileText className="w-8 h-8 text-cyan-400" />,
//       text: `Create secure on-chain agreements between individuals,
//       teams, or projects — no lawyers or middlemen needed. Every
//       deal is recorded with clear milestones, deadlines, and
//       terms both parties can verify and sign digitally.`,
//       img: shakingHands,
//     },
//     {
//       title: "Decentralized Escrow",
//       icon: <Wallet className="w-8 h-8 text-cyan-400" />,
//       text: `Funds are held safely in DexCourt's smart escrow until
//       agreed conditions are met. Whether it's a service,
//       partnership, or freelance job, the escrow ensures no one
//       gets paid — or loses funds — unfairly.`,
//       img: escrow,
//     },
//     {
//       title: "Dispute Resolution",
//       icon: <Scale className="w-8 h-8 text-cyan-400" />,
//       text: `If things go wrong, either party can raise a dispute.
//       Verified judges and the community review evidence, vote
//       transparently, and deliver a fair verdict — free from bias
//       or favoritism.`,
//       img: jigsaw,
//     },
//     {
//       title: "On-Chain Voting",
//       icon: <Vote className="w-8 h-8 text-cyan-400" />,
//       text: `Every major decision — from disputes to governance — is
//       powered by transparent, verifiable voting. Judges' votes
//       carry weighted influence, while $LAW holders also vote,
//       ensuring balanced outcomes driven by both expertise and
//       community consensus.`,
//       img: fingerprint,
//     },
//     {
//       title: "Reputation System",
//       icon: <Users className="w-8 h-8 text-cyan-400" />,
//       text: `Judges, participants, and deal creators earn or lose
//       reputation based on their conduct. This builds a lasting
//       trust layer that guides future collaborations and
//       strengthens accountability across the DexCourt ecosystem.`,
//       img: trending,
//     },
//   ];

//   return (
//     <section className="relative p-24 text-white">
//       <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//         <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
//           <FaShieldAlt className="text-cyan-400 text-lg" />
//           <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
//             Platform Features
//           </span>
//         </div>
//         <h2 className="sec text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//           Core <span className="text-cyan-400">Features</span>
//         </h2>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//           DexCourt combines cutting-edge blockchain technology with fair
//           governance to create a trustless ecosystem for secure agreements and
//           dispute resolution.
//         </p>
//       </div>

//       {/* Parallax stack container */}
//       <div className="relative w-full max-w-5xl mx-auto">
//         <div className="relative h-[500vh]">
//           {featureCards.map((card, idx) => {
//             const imageRight = idx % 2 === 0; // Alternate image sides

//             return (
//               <div
//                 key={card.title}
//                 className={`sticky top-0 mb-0 h-screen flex items-center justify-center z-${
//                   featureCards.length - idx
//                 }`}
//               >
//                 <div className="relative rounded-[2.5rem] p-[2px] bg-[#0f0f0f] border border-cyan-300/50 w-full max-w-4xl">
//                   <div className="relative rounded-[2.3rem] bg-black/50 backdrop-blur-xl px-12 py-8 overflow-hidden">
//                     <div
//                       className={`absolute ${
//                         imageRight ? "right-0" : "left-0"
//                       } top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 blur-[140px]`}
//                     />
//                     <div
//                       className={`relative flex flex-col lg:flex-row ${
//                         imageRight
//                           ? "items-center"
//                           : "flex-row-reverse items-center"
//                       } gap-16`}
//                     >
//                       <div className="flex-1">
//                         <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit mb-6">
//                           {card.icon}
//                         </div>
//                         <h3 className="sec text-4xl font-bold text-white mb-6">
//                           {card.title}
//                         </h3>
//                         <p className="text-gray-300 lg:text-base leading-relaxed max-w-xl">
//                           {card.text}
//                         </p>
//                       </div>

//                       <div className="flex-1">
//                         <div className="rounded-xl border-2 border-cyan-400 overflow-hidden">
//                           <img
//                             src={card.img}
//                             className="w-full h-[20rem] object-cover"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BentoFeatures;

import { useState, useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FileText, Wallet, Scale, Vote, Users } from "lucide-react";
import shakingHands from "../assets/shaking-hands.webp";
import escrow from "../assets/escrow.webp";
import jigsaw from "../assets/jigsaw.webp";
import fingerprint from "../assets/fingerprint.webp";
import trending from "../assets/trending.webp";

const BentoFeatures = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featureCards = [
    {
      title: "Smart Agreements",
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      text: `Create secure on-chain agreements between individuals, teams, or projects — no lawyers or middlemen needed. Every deal is recorded with clear milestones, deadlines, and terms both parties can verify and sign digitally.`,
      img: shakingHands,
    },
    {
      title: "Decentralized Escrow",
      icon: <Wallet className="w-8 h-8 text-cyan-400" />,
      text: `Funds are held safely in DexCourt's smart escrow until agreed conditions are met. Whether it's a service, partnership, or freelance job, the escrow ensures no one gets paid — or loses funds — unfairly.`,
      img: escrow,
    },
    {
      title: "Dispute Resolution",
      icon: <Scale className="w-8 h-8 text-cyan-400" />,
      text: `If things go wrong, either party can raise a dispute. Verified judges and the community review evidence, vote transparently, and deliver a fair verdict — free from bias or favoritism.`,
      img: jigsaw,
    },
    {
      title: "On-Chain Voting",
      icon: <Vote className="w-8 h-8 text-cyan-400" />,
      text: `Every major decision — from disputes to governance — is powered by transparent, verifiable voting. Judges' votes carry weighted influence, while $LAW holders also vote, ensuring balanced outcomes driven by both expertise and community consensus.`,
      img: fingerprint,
    },
    {
      title: "Reputation System",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      text: `Judges, participants, and deal creators earn or lose reputation based on their conduct. This builds a lasting trust layer that guides future collaborations and strengthens accountability across the DexCourt ecosystem.`,
      img: trending,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:pt-24 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-12 md:mb-2">
        <div className="inline-flex items-center gap-2 md:gap-3 mb-4 px-4 md:px-6 py-2 md:py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          <FaShieldAlt className="text-cyan-400 text-base md:text-lg" />
          <span className="text-cyan-400 font-semibold text-xs md:text-sm uppercase tracking-wider">
            Platform Features
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          Core <span className="text-cyan-400">Features</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
          DexCourt combines cutting-edge blockchain technology with fair
          governance to create a trustless ecosystem for secure agreements and
          dispute resolution.
        </p>
      </div>

      {/* Parallax stack container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[500vh]">
          {featureCards.map((card, idx) => {
            const imageRight = idx % 2 === 0;
            const scaleEnd = 1 - idx * 0.02;
            const scaleValue = isMobile ? 1 : scaleEnd;

            return (
              <div
                key={card.title}
                className="sticky top-0 h-screen flex items-center justify-center"
              >
                <div
                  className="relative rounded-3xl md:rounded-[2.5rem] p-[2px] bg-[#0f0f0f] border border-cyan-300/50 w-full max-w-4xl transition-transform duration-700 mx-4"
                  style={{
                    transform: `scale(${scaleValue})`,
                  }}
                >
                  <div className="relative rounded-[calc(2.3rem-2px)] md:rounded-[2.3rem] bg-black/50 backdrop-blur-xl p-6 md:p-8 lg:px-12 lg:py-8 overflow-hidden">
                    {/* Background Glow */}
                    <div
                      className={`absolute ${
                        isMobile
                          ? "left-1/2 -translate-x-1/2"
                          : imageRight
                            ? "right-0"
                            : "left-0"
                      } top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/30 blur-[80px] sm:blur-[100px] md:blur-[140px]`}
                    />

                    {/* Card Content */}
                    <div
                      className={`relative flex flex-col ${
                        idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-6 md:gap-8 lg:gap-16`}
                    >
                      {/* Text Content */}
                      <div className="flex-1 w-full lg:w-auto">
                        <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit mb-4 md:mb-6">
                          {card.icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed">
                          {card.text}
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex-1 w-full lg:w-auto">
                        <div className="rounded-xl border-2 border-cyan-400 overflow-hidden">
                          <img
                            src={card.img}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-[20rem] object-cover"
                            alt={card.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
