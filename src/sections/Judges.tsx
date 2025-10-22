import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { FaGavel } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FaPercentage } from "react-icons/fa";

import "./JudgesSection.css";

const judges = [
  {
    handle: "@IncomeSharks",
    role: "Web3 Influencer",
    expertise: "Known for exposing scams and protecting investors.",
  },
  {
    handle: "@CryptoMessiah",
    role: "Veteran Trader",
    expertise: "DeFi thought leader and early-stage project analyst.",
  },
  {
    handle: "@ZenDev",
    role: "Blockchain Developer",
    expertise: "Security auditor with dozens of verified smart contracts.",
  },
  {
    handle: "@LegalEagle_ETH",
    role: "Licensed Attorney",
    expertise: "Bridging traditional law and Web3 governance.",
  },
  {
    handle: "@0xLuna",
    role: "Community Moderator",
    expertise: "Long-term DAO contributor with conflict resolution expertise.",
  },
];

const JudgesSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // const sectionRef = useRef(null);

  return (
    <section
      id="judges"
      className="relative py-20 px-6 text-white overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/12 via-cyan-500/8 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* ===== Header Section ===== */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          {/* Title & Subtitle */}
          <div className="text-center lg:text-left max-w-3xl mb-8 lg:mb-0">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="lg:text-[2.7rem] text-[2.5rem] leading-[1] font-bold mb-4 hank"
            >
              Who Are the <span className="text-cyan-600 play">Judges?</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-400 text-lg"
            >
              DexCourt’s judges are respected figures in the Web3 space —
              experienced developers, influencers, founders, and legal
              professionals who’ve proven their integrity. They are carefully
              vetted before being allowed to preside over disputes, ensuring
              every verdict is credible and fair.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex items-center justify-center lg:justify-end space-x-4"
          >
            <button
              ref={navigationPrevRef}
              className="will-change-transform w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cyan-400/50 flex items-center justify-center text-white hover:scale-110 hover:shadow-cyan-500/40 transition-transform duration-300 group"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 transform -translate-x-0.5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              ref={navigationNextRef}
              className="will-change-transform w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cyan-400/50 flex items-center justify-center text-white hover:scale-110 hover:shadow-cyan-500/40 transition-transform duration-300 group"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 transform translate-x-0.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Swiper Section ===== */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative will-change-transform"
        >
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-expect-error Swiper types Swiper documentation gives more information on this type error
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-expect-error Swiper types Swiper documentation gives more information on this type error
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="coverflow"
            grabCursor
            centeredSlides
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: { depth: 50, modifier: 1 },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                coverflowEffect: { depth: 100, modifier: 2.5 },
              },
            }}
            className="!pb-16 !pt-4"
          >
            {judges.map((judge, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    className={`will-change-transform p-6  lg:px-10 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 transform ${
                      isActive
                        ? "relative border border-cyan-400/30 bg-gradient-to-br from-cyan-400/30 to-transparent scale-105 shadow-lg shadow-cyan-500/20"
                        : "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-600/30 scale-95 opacity-80"
                    }`}
                  >
                    <div className="mb-8 relative">
                      <p
                        className={`text-lg leading-relaxed transition-colors duration-500 ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {judge.expertise}
                      </p>
                    </div>

                    {/* Judge Info */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {judge.handle.charAt(1)}
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-lg transition-colors duration-500 ${
                            isActive ? "text-cyan-600" : "text-gray-300"
                          }`}
                        >
                          {judge.handle}
                        </h4>
                        <p
                          className={`text-sm transition-colors duration-500 ${
                            isActive ? "text-cyan-300" : "text-gray-400"
                          }`}
                        >
                          {judge.role}
                        </p>
                      </div>
                    </div>

                    {/* Active Pulse Indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* community participation */}
        <section
          id="community"
          className="relative px-6 text-white overflow-hidden"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Header */}
            {/* <div className="text-center mb-16">
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="lg:text-[2.7rem] text-[2.5rem] font-bold mb-4 leading-[1]"
              >
                Community{" "}
                <span className="play text-cyan-700">Participation</span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Justice on DexCourt is collective and decentralized
              </p>
            </div> */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Visual Hierarchy */}
              <div className="relative">
                {/* Central Governance Circle */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="relative sm:size-[25rem] size-[18rem] mx-auto"
                >
                  {/* Outer Ring - Community */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow">
                    <div className="absolute top-1/2 left-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400/50"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                    <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-y-1/2 translate-x-1/2 shadow-lg shadow-cyan-400/50"></div>
                  </div>

                  {/* Middle Ring - $LAW Holders */}
                  <div
                    className="absolute inset-8 rounded-full border-2 border-blue-400/40 animate-spin-slower"
                    style={{ animationDirection: "reverse" }}
                  >
                    <div className="absolute top-1/2 left-0 w-6 h-6 bg-blue-600 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Inner Core - Judges */}
                  <div className="absolute inset-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_40px_#00ffff20]">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-violet-800 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-cyan-400/40">
                        <FaGavel className="text-2xl" />
                      </div>
                      <p className="text-sm font-semibold text-cyan-300">
                        Judges
                      </p>
                      <p className="text-xs text-gray-400">Highest Influence</p>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 transform rotate-45"></div>
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 transform -rotate-45"></div>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-col items-center"
                  >
                    <div className="size-6 bg-cyan-300 rounded-full mb-2"></div>
                    <span className="text-sm text-cyan-400">Community</span>
                    <span className="text-sm text-gray-400">0.5%+ $LAW</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex flex-col items-center"
                  >
                    <div className="size-6 bg-blue-600 rounded-full mb-2"></div>
                    <span className="text-sm text-blue-400">$LAW Holders</span>
                    <span className="text-sm text-gray-400">1%+ $LAW</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="flex flex-col items-center justify-between"
                  >
                    <div className="size-6 bg-violet-800 rounded-full mb-2"></div>
                    <span className="text-sm text-cyan-300">Judges</span>
                    <span className="text-sm text-gray-400">Experts</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8 mt-4">
                {/* Voting Tiers */}
                <div className="space-y-6">
                  {/* Tier 1 - Basic Voting */}
                  <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="group p-6 rounded-2xl card-cyan border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#00ffff20] hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-180">
                        <GoPeople className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Community Voters
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            $LAW holders with 0.5%+ of supply can vote
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            Participate in case resolutions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tier 2 - Weighted Voting */}
                  <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/50 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#3b82f620] hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-180">
                        <FaPercentage className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Weighted Influence
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Holders of 1%+ $LAW have higher voting weight
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            Balanced stake-based influence
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tier 3 - Judge Authority */}
                  <div
                    data-aos="fade-left"
                    data-aos-delay="600"
                    className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-800/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#00ffff30] hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-180">
                        <FaGavel className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Expert Judges
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                            Judges' votes carry the most influence
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                            Ensures expert oversight in complex cases
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-400/20 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-center text-emerald-400 play font-semibold">
                    This hybrid structure ensures fair outcomes where expertise
                    and community consensus coexist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default JudgesSection;
