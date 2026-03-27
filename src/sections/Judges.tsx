import { useState, useEffect } from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaBalanceScale,
  FaCode,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import shark from "../assets/shark.webp";
import sharkBlur from "../assets/shark-blur.jpg";
import messiah from "../assets/messiah.webp";
import messiahBlur from "../assets/messiah-blur.jpg";
import zen from "../assets/zendev.webp";
import zenBlur from "../assets/zendev-blur.jpg";
import legal from "../assets/legal.webp";
import legalBlur from "../assets/legal-blur.jpg";
import mod from "../assets/mod.webp";
import modBlur from "../assets/mod-blur.jpg";

const judges = [
  {
    handle: "@IncomeSharks",
    role: "Web3 Influencer",
    expertise:
      "Known for exposing scams and protecting investors through comprehensive due diligence.",
    image: shark,
    blurImage: sharkBlur,
    icon: FaShieldAlt,
    stats: "250K+ Followers",
  },
  {
    handle: "@CryptoMessiah",
    role: "Veteran Trader",
    expertise: "DeFi thought leader and early-stage project analyst.",
    image: messiah,
    blurImage: messiahBlur,
    icon: FaBalanceScale,
    stats: "1,200+ Cases",
  },
  {
    handle: "@ZenDev",
    role: "Blockchain Developer",
    expertise:
      "Security auditor with dozens of verified smart contracts and zero critical vulnerabilities.",
    image: zen,
    blurImage: zenBlur,
    icon: FaCode,
    stats: "98% Success Rate",
  },
  {
    handle: "@LegalEagle_ETH",
    role: "Licensed Attorney",
    expertise:
      "Bridging traditional law and Web3 governance with regulatory compliance expertise.",
    image: legal,
    blurImage: legalBlur,
    icon: FaGraduationCap,
    stats: "Bar Certified",
  },
  {
    handle: "@0xLuna",
    role: "Community Moderator",
    expertise:
      "Long-term DAO contributor with conflict resolution and community management expertise.",
    image: mod,
    blurImage: modBlur,
    icon: FaUsers,
    stats: "50+ DAOs",
  },
];

const JudgesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const activeJudge = judges[activeIndex];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % judges.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual judge selection
  const handleJudgeSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const isMainImageLoaded = loadedImages[activeIndex];

  return (
    <section
      id="judges"
      className="relative pb-24 px-6 text-white overflow-hidden "
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section with AOS Animations */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30"
          >
            <FaGavel className="text-cyan-400 text-lg" />
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Expert Panel
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="sec text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
          >
            Meet Our <span className="text-cyan-400">Judges</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            DexCourt's panel comprises respected Web3 pioneers—seasoned
            developers, influential thought leaders, and legal experts—carefully
            vetted to ensure every verdict is both credible and fair.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Judge Information */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-500 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <activeJudge.icon className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                    {activeJudge.stats}
                  </span>
                </div>
              </div>

              <h3 className="text-4xl font-bold text-white mb-3 sec">
                {activeJudge.handle}
              </h3>
              <p className="text-cyan-300 text-xl font-semibold mb-6 sec">
                {activeJudge.role}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {activeJudge.expertise}
              </p>
            </div>

            {/* Enhanced Thumbnails */}
            <div className="flex gap-3 flex-wrap">
              {judges.map((judge, index) => {
                const isThumbnailLoaded = loadedImages[index];

                return (
                  <button
                    key={index}
                    onClick={() => handleJudgeSelect(index)}
                    className={`group relative p-3 rounded-2xl transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_30px_#00ffff40]"
                        : "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all relative ${
                          activeIndex === index
                            ? "border-cyan-400"
                            : "border-gray-600 group-hover:border-cyan-300"
                        }`}
                      >
                        {/* Blur placeholder for thumbnail */}
                        <img
                          src={judge.blurImage}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            isThumbnailLoaded ? "opacity-0" : "opacity-100"
                          }`}
                          alt=""
                        />
                        {/* Full image for thumbnail */}
                        <img
                          src={judge.image}
                          onLoad={() => handleImageLoad(index)}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            isThumbnailLoaded ? "opacity-100" : "opacity-0"
                          }`}
                          alt={judge.handle}
                        />
                      </div>
                      <div className="text-left">
                        <p
                          className={`font-semibold text-sm transition-colors ${
                            activeIndex === index
                              ? "text-cyan-400"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {judge.handle}
                        </p>
                        <p className="text-xs text-gray-400">{judge.role}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Judge Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,255,255,0.1)]"></div>

                {/* Consistent Image Container with Blur Placeholder */}
                <div className="size-[20rem] lg:size-[30rem] flex items-center justify-center relative">
                  {/* Blur placeholder */}
                  <img
                    src={activeJudge.blurImage}
                    className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${
                      isMainImageLoaded ? "opacity-0" : "opacity-100"
                    }`}
                    alt=""
                  />
                  {/* Full image */}
                  <img
                    src={activeJudge.image}
                    onLoad={() => handleImageLoad(activeIndex)}
                    className={`w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-500 ${
                      isTransitioning
                        ? "scale-95 opacity-80"
                        : "scale-100 opacity-100"
                    } ${isMainImageLoaded ? "opacity-100" : "opacity-0"}`}
                    alt={activeJudge.handle}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded-full blur-xl opacity-60"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1">
                {judges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleJudgeSelect(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-cyan-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
