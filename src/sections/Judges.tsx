import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

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

  return (
    <section
      id="judges"
      className="relative py-20 px-6 text-white overflow-hidden bg-black"
    >
      {/* 🔮 Soft Cyan Background Glows (static for performance) */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute block size-[20rem] rounded-full bg-cyan-500/20 blur-3xl lg:top-28 lg:right-20 lg:size-[30rem]" />
        <div className="absolute top-20 -left-6 block rounded-full bg-cyan-500/20 blur-3xl lg:size-[25rem]" />
      </div> */}
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
              Meet the <span className="text-cyan-600 play">Judges</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-400 text-lg"
            >
              Respected figures in Web3 — developers, influencers, founders, and
              legal experts — ensuring every verdict is fair, transparent, and
              credible.
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
                    className={`will-change-transform p-6 lg:py-20 lg:px-10 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 transform ${
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
      </div>
    </section>
  );
};

export default JudgesSection;
