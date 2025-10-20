import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Freelancer from "./Freelancer";

const PlatformUseCases = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  // Animation variants with proper TypeScript types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const quoteIconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  const highlightVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  // Split text into words for staggered animation
  const textWords = [
    "DexCourt serves ",
    "everyone",
    " — from professionals to casual users — providing ",
    "security",
    ", ",
    "transparency",
    ", and ",
    "accountability",
    " in every deal.",
  ];

  return (
    <section
      id="use-cases"
      className="py-16 px-6 bg-[#030008] text-white"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-8">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              className="relative z-0"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Animated Quote Icon */}
              <motion.div variants={quoteIconVariants}>
                <FaQuoteRight className="text-[3rem] lg:text-[4.5rem] text-gray-700 absolute right-0 -top-4 lg:-right-8 z-0" />
              </motion.div>

              {/* Animated Text */}
              <motion.p
                className="text-xl md:text-2xl lg:text-[2.5rem] max-w-[40rem] ml-auto text-gray-200 leading-relaxed play text-right relative z-10"
                variants={textVariants}
              >
                {textWords.map((word, index) => {
                  const isHighlighted = [
                    "everyone",
                    "security",
                    "transparency",
                    "accountability",
                  ].includes(word.trim());

                  if (isHighlighted) {
                    return (
                      <motion.span
                        key={index}
                        className="text-cyan-400 not-italic font-semibold inline-block"
                        variants={highlightVariants}
                        custom={index}
                        whileHover={{
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 400 },
                        }}
                      >
                        {word}
                      </motion.span>
                    );
                  }

                  return (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={wordVariants}
                      custom={index}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <Freelancer />
    </section>
  );
};

export default PlatformUseCases;
