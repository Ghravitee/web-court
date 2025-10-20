import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const RevenueAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const revenueStreams = [
    {
      icon: "🧾",
      title: "Agreement & Escrow Fees",
      description:
        "For every successful escrow deal, DexCourt takes a 5% platform fee from the locked funds. These fees help fund continuous development, platform maintenance, and ecosystem incentives.",
    },
    {
      icon: "⚖️",
      title: "Dispute Resolution Fees",
      description:
        "Raising a dispute requires a nominal submission fee (e.g., 0.01 ETH) to discourage spam and compensate judges for their time.",
    },
    {
      icon: "💰",
      title: "Transaction Tax",
      description:
        "Every $LAW transaction incurs a 5% tax distributed as follows: 1% Development, 2% Marketing, and 2% Rewards for Judges & Voters.",
    },
    {
      icon: "🌐",
      title: "Future Integrations & Partnerships",
      description:
        "Revenue will expand through API integrations, licensing DexCourt's escrow and reputation systems, and verified project partnerships.",
    },
  ];

  return (
    <section
      id="revenue"
      className="py-20 px-6 bg-[#030008] text-white"
      ref={sectionRef}
    >
      <div className="max-w-[50rem] mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          }}
        >
          <motion.h2
            className="text-3xl md:text-[3rem] font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
          >
            How DexCourt{" "}
            <span className="text-cyan-700 play">Generates Revenue</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            DexCourt's model is built for sustainability — ensuring long-term
            growth while rewarding active participants.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="w-full p-6 text-left flex items-center justify-between card-cyan transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-xl">
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {stream.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="size-6 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-900/30 border-t border-gray-700/50">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {stream.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueAccordion;
