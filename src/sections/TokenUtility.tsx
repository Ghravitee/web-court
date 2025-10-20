import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Vote } from "lucide-react";
import { MdOutlineKey } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";

const TokenUtility = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  // Reusable animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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

  const utilities = [
    {
      icon: <Vote className="w-8 h-8 text-cyan-400" />,
      title: "Voting Rights",
      description:
        "$LAW holders can vote on disputes, proposals, and system updates — shaping DexCourt's direction and fairness model.",
    },
    {
      icon: <TbTax className="w-8 h-8 text-cyan-400" />,
      title: "Revenue Rewards",
      description:
        "Active voters and judges share in DexCourt's revenue. A portion of all fees and taxes goes directly to those contributing to justice and governance.",
    },
    {
      icon: <MdOutlineRecycling className="w-8 h-8 text-cyan-400" />,
      title: "Token Tax Redistribution",
      description:
        "Each transaction involving $LAW carries a small tax, partly sent to the Revenue Share Contract that rewards judges and active voters.",
    },
    {
      icon: <MdOutlineKey className="w-8 h-8 text-cyan-400" />,
      title: "Access to Platform Features",
      description:
        "In future updates, holding a minimum amount of $LAW will be required to:",
      features: [
        "Create or sign agreements",
        "Raise disputes",
        "Participate as a verified judge or community voter",
      ],
    },
  ];

  return (
    <section
      id="law"
      className="py-20 px-6 bg-[#030008] text-white"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-[3rem] font-bold text-cyan-700">
              $LAW <span className="play text-white">Token Utility</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            variants={headerVariants}
            transition={{ delay: 0.1 }}
          >
            The $LAW token fuels governance, participation, and rewards across
            DexCourt. Holding $LAW gives users influence and access within the
            ecosystem.
          </motion.p>
        </motion.div>

        {/* Animated Utilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl card-cyan transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="flex flex-col md:flex-row space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl">
                  {utility.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-cyan-400">
                      {utility.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-3">{utility.description}</p>

                  {/* Features list for access card */}
                  {utility.features && (
                    <ul className="space-y-2">
                      {utility.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TokenUtility;
