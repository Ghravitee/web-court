import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      id="judges"
      className="relative py-20 px-6 bg-[#030008] text-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="text-center lg:text-left max-w-3xl mb-8 lg:mb-0">
            <motion.h2
              className="lg:text-[2.7rem] text-[2.5rem] leading-[1] font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
            >
              Meet the <span className="play text-cyan-700">Judges</span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
                duration: 0.8,
              }}
            >
              Respected figures in Web3 — developers, influencers, founders, and
              legal experts — ensuring every verdict is fair, transparent, and
              credible.
            </motion.p>
          </div>

          {/* Navigation Buttons - Top Right */}
          <motion.div
            className="flex items-center justify-center lg:justify-end space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <button
              ref={navigationPrevRef}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cyan-400/50 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 group"
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
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cyan-400/50 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 group"
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
          </motion.div>
        </div>

        {/* Swiper Carousel - No animations */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-expect-error TypeScript is not aware of the Swiper API
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-expect-error TypeScript is not aware of the Swiper API
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
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                },
              },
            }}
            className="!pb-16 !pt-4"
          >
            {judges.map((judge, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`p-6 lg:py-20 lg:px-10 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 transform ${
                      isActive
                        ? "card-cyan glass scale-105"
                        : "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-600/30 shadow-lg scale-95 opacity-80"
                    }`}
                  >
                    <div className="mb-8 relative">
                      <p
                        className={`text-lg leading-relaxed pl-6 transition-colors duration-500 ${
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
                            ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/40"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {judge.handle.charAt(1)}
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-lg transition-colors duration-500 ${
                            isActive ? "text-cyan-700" : "text-gray-300"
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

                    {/* Active Indicator */}
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
