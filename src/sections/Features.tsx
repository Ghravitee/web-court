import { useState, useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FileText, Wallet, Scale, Vote, Users } from "lucide-react";
import shakingHands from "../assets/shaking-hands.webp";
import shakingHandsBlur from "../assets/shaking-hands-blur.jpg";
import escrow from "../assets/escrow.jpg";
import escrowBlur from "../assets/escrow-blur.jpg";
import jigsaw from "../assets/jigsaw.webp";
import jigsawBlur from "../assets/jigsaw-blur.jpg";
import fingerprint from "../assets/fingerprint.webp";
import fingerprintBlur from "../assets/fingerprint-blur.jpg";
import trending from "../assets/trending.webp";
import trendingBlur from "../assets/trending-blur.jpg";

const BentoFeatures = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const featureCards = [
    {
      title: "Smart Agreements",
      icon: <FileText className="size-4 lg:size-8 text-cyan-400" />,
      text: `Create secure on-chain agreements between individuals, teams, or projects — no lawyers or middlemen needed. Every deal is recorded with clear milestones, deadlines, and terms both parties can verify and sign digitally.`,
      img: shakingHands,
      blurImg: shakingHandsBlur,
    },
    {
      title: "Decentralized Escrow",
      icon: <Wallet className="size-4 lg:size-8 text-cyan-400" />,
      text: `Funds are held safely in DexCourt's smart escrow until agreed conditions are met. Whether it's a service, partnership, or freelance job, the escrow ensures no one gets paid — or loses funds — unfairly.`,
      img: escrow,
      blurImg: escrowBlur,
    },
    {
      title: "Dispute Resolution",
      icon: <Scale className="size-4 lg:size-8 text-cyan-400" />,
      text: `If things go wrong, either party can raise a dispute. Verified judges and the community review evidence, vote transparently, and deliver a fair verdict — free from bias or favoritism.`,
      img: jigsaw,
      blurImg: jigsawBlur,
    },
    {
      title: "On-Chain Voting",
      icon: <Vote className="size-4 lg:size-8 text-cyan-400" />,
      text: `Every major decision — from disputes to governance — is powered by transparent, verifiable voting. Judges' votes carry weighted influence, while $LAW holders also vote, ensuring balanced outcomes driven by both expertise and community consensus.`,
      img: fingerprint,
      blurImg: fingerprintBlur,
    },
    {
      title: "Reputation System",
      icon: <Users className="size-4 lg:size-8 text-cyan-400" />,
      text: `Judges, participants, and deal creators earn or lose reputation based on their conduct. This builds a lasting trust layer that guides future collaborations and strengthens accountability across the DexCourt ecosystem.`,
      img: trending,
      blurImg: trendingBlur,
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
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
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
            const isLoaded = loadedImages[idx];

            return (
              <div
                key={card.title}
                className="sticky top-0 h-screen flex items-center justify-center"
              >
                <div className="relative rounded-3xl md:rounded-[2.5rem] p-[2px] bg-[#0f0f0f] border border-cyan-300/50 w-full max-w-4xl transition-transform duration-700 mx-4">
                  <div className="relative rounded-[calc(2.3rem-2px)] md:rounded-[2.3rem] bg-black/50 backdrop-blur-xl py-4 px-4 md:p-8 lg:px-12 lg:py-8 overflow-hidden h-[450px] md:h-[350px]">
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
                      } items-center gap-6 md:gap-8 lg:gap-16 h-full`}
                    >
                      {/* Text Content */}
                      <div className="flex-1 w-full lg:w-auto h-full flex flex-col">
                        <div className="flex flex-col h-full">
                          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit mb-4 md:mb-6">
                            {card.icon}
                          </div>
                          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-6">
                            {card.title}
                          </h3>
                          <div className="flex-grow flex items-center">
                            <p className="text-gray-300 text-xs sm:text-base md:text-base leading-relaxed">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image with blur placeholder */}
                      <div className="flex-1 w-full lg:w-auto h-full">
                        <div className="rounded-xl border-2 border-cyan-400 overflow-hidden h-full flex items-center relative">
                          {/* Blur placeholder */}
                          <img
                            src={card.blurImg}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                              isLoaded ? "opacity-0" : "opacity-100"
                            }`}
                            alt=""
                          />
                          {/* Full image */}
                          <img
                            src={card.img}
                            onLoad={() => handleImageLoad(idx)}
                            className={`w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover transition-opacity duration-700 ${
                              isLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            alt={card.title}
                            loading="lazy"
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
