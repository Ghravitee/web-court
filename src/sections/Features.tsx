import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Scale, FileText, Wallet, Vote, Users } from "lucide-react";

const features = [
  {
    id: "smart",
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    title: "Smart Agreements",
    description:
      "Create secure on-chain agreements without lawyers or middlemen. Every deal is transparent and verifiable.",
  },
  {
    id: "escrow",
    icon: <Wallet className="w-10 h-10 text-cyan-400" />,
    title: "Decentralized Escrow",
    description:
      "Funds are held safely in smart escrow until agreed conditions are met, ensuring fairness in every transaction.",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8 text-cyan-400" />,
    title: "Dispute Resolution",
    description:
      "When conflicts arise, verified judges and the community deliver transparent, bias-free verdicts.",
  },
  {
    id: "voting",
    icon: <Vote className="w-8 h-8 text-cyan-400" />,
    title: "On-Chain Voting",
    description:
      "All major decisions are powered by verifiable on-chain votes — balancing expert judgment and community input.",
  },
  {
    id: "reputation",
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Reputation System",
    description:
      "Participants earn or lose reputation based on behavior, creating a lasting trust layer across the ecosystem.",
  },
];

// Animation variants with proper TypeScript types
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
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
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

const titleVariants: Variants = {
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

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const BentoFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      id="features"
      className="relative py-20 bg-black text-white overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Title */}
        <motion.h2
          className="lg:text-[2.7rem] text-[2.5rem] font-bold text-center mb-12 hank"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Core <span className="play text-cyan-700">Features</span>
        </motion.h2>

        {/* 🧱 Animated Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Smart Agreements */}
          <motion.div
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              {features[0].icon}
            </motion.div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[0].title}
            </h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              {features[0].description}
            </motion.p>
          </motion.div>

          {/* Decentralized Escrow */}
          <motion.div
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
            >
              {features[1].icon}
            </motion.div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[1].title}
            </h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }}
            >
              {features[1].description}
            </motion.p>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              {features[2].icon}
            </motion.div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[2].title}
            </h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              {features[2].description}
            </motion.p>
          </motion.div>

          {/* On-Chain Voting */}
          <motion.div
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.7 }}
            >
              {features[3].icon}
            </motion.div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[3].title}
            </h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.9 }}
            >
              {features[3].description}
            </motion.p>
          </motion.div>

          {/* Reputation System */}
          <motion.div
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all hover:scale-[1.02] hover:shadow-cyan-500/20 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              {features[4].icon}
            </motion.div>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[4].title}
            </h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.0 }}
            >
              {features[4].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoFeatures;
