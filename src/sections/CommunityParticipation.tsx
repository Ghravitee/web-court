import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGavel } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FaPercentage } from "react-icons/fa";

const CommunityParticipation = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const circleVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 1.5,
      },
    },
  };

  const ringVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
        duration: 2,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="community"
      className="relative py-20 px-6 bg-[#030008] text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <motion.h2
            className="lg:text-[2.7rem] text-[2.5rem] font-bold mb-4 leading-[1]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
          >
            Community <span className="play text-cyan-700">Participation</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Justice on DexCourt is collective and decentralized
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual Hierarchy */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Central Governance Circle */}
            <motion.div
              className="relative sm:size-[25rem] size-[18rem] mx-auto"
              variants={circleVariants}
            >
              {/* Outer Ring - Community */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"
                variants={ringVariants}
              >
                <motion.div
                  className="absolute top-1/2 left-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-cyan-400/50"
                  variants={dotVariants}
                  transition={{ delay: 0.8 }}
                ></motion.div>
                <motion.div
                  className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/50"
                  variants={dotVariants}
                  transition={{ delay: 1.0 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 translate-y-1/2 shadow-lg shadow-cyan-400/50"
                  variants={dotVariants}
                  transition={{ delay: 1.2 }}
                ></motion.div>
                <motion.div
                  className="absolute top-1/2 right-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-y-1/2 translate-x-1/2 shadow-lg shadow-cyan-400/50"
                  variants={dotVariants}
                  transition={{ delay: 1.4 }}
                ></motion.div>
              </motion.div>

              {/* Middle Ring - $LAW Holders */}
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-blue-400/40 animate-spin-slower"
                style={{ animationDirection: "reverse" }}
                variants={ringVariants}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="absolute top-1/2 left-0 w-6 h-6 bg-blue-600 rounded-full transform -translate-y-1/2 -translate-x-1/2"
                  variants={dotVariants}
                  transition={{ delay: 1.1 }}
                ></motion.div>
                <motion.div
                  className="absolute top-0 left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  variants={dotVariants}
                  transition={{ delay: 1.3 }}
                ></motion.div>
              </motion.div>

              {/* Inner Core - Judges */}
              <motion.div
                className="absolute inset-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_40px_#00ffff20]"
                variants={circleVariants}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
                >
                  <div className="w-16 h-16 rounded-full bg-violet-800 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-cyan-400/40">
                    <FaGavel className="text-2xl" />
                  </div>
                  <p className="text-sm font-semibold text-cyan-300">Judges</p>
                  <p className="text-xs text-gray-400">Highest Influence</p>
                </motion.div>
              </motion.div>

              {/* Connecting Lines */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.8 }}
              >
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 transform rotate-45"></div>
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 transform -rotate-45"></div>
              </motion.div>
            </motion.div>

            {/* Legend */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="size-6 bg-cyan-300 rounded-full mb-2"></div>
                <span className="text-sm text-cyan-400">Community</span>
                <span className="text-sm text-gray-400">0.5%+ $LAW</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="size-6 bg-blue-600 rounded-full mb-2"></div>
                <span className="text-sm text-blue-400">$LAW Holders</span>
                <span className="text-sm text-gray-400">1%+ $LAW</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-between"
                variants={itemVariants}
              >
                <div className="size-6 bg-violet-800 rounded-full mb-2"></div>
                <span className="text-sm text-cyan-300">Judges</span>
                <span className="text-sm text-gray-400">Experts</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Voting Tiers */}
            <div className="space-y-6">
              {/* Tier 1 - Basic Voting */}
              <motion.div
                className="group p-6 rounded-2xl card-cyan border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#00ffff20]"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex flex-col md:flex-row items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GoPeople className="text-2xl" />
                  </motion.div>
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
              </motion.div>

              {/* Tier 2 - Weighted Voting */}
              <motion.div
                className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/50 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#3b82f620]"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex flex-col md:flex-row space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaPercentage className="text-2xl" />
                  </motion.div>
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
              </motion.div>

              {/* Tier 3 - Judge Authority */}
              <motion.div
                className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-800/50 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_#00ffff30]"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex flex-col md:flex-row space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaGavel className="text-2xl" />
                  </motion.div>
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
              </motion.div>
            </div>

            {/* Summary */}
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-400/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-center text-emerald-400 play font-semibold">
                This hybrid structure ensures fair outcomes where expertise and
                community consensus coexist.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityParticipation;
