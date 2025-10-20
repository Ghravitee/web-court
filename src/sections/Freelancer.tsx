import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Briefcase, Handshake, Building, Scale, Star } from "lucide-react";

const features = [
  {
    id: "freelancer",
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    title: "Freelancer & Client Agreements",
    description:
      "Secure jobs and payments through verifiable smart agreements. Example: A designer builds a landing page for 0.3 ETH. The client deposits funds into escrow, which releases automatically after approval.",
  },
  {
    id: "reputation",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    title: "Reputation Tracking",
    description:
      "Every participant builds a reputation profile within DexCourt based on past behavior. Judges gain credibility for fair rulings, freelancers earn trust for completed work, and defaulters lose points. DexCourt doubles as a public reputation hub — before entering any deal, you can check a user's profile to see:",
    listItems: [
      "Total deals completed",
      "Dispute history",
      "Ratings from judges and clients",
      "Overall Trust Score (0–100)",
    ],
    example:
      "Before hiring a developer, a project owner checks their DexCourt profile and finds a Trust Score of 92/100, backed by 8 successful deals and one fairly resolved dispute — enough proof to proceed confidently.",
  },
  {
    id: "casual",
    icon: <Handshake className="w-8 h-8 text-cyan-400" />,
    title: "Casual or Personal Agreements",
    description:
      "Even simple promises between friends or traders can be recorded for transparency. Example: Two users agree to swap a logo for tokens — DexCourt records the deal, protecting both sides.",
  },
  {
    id: "partnership",
    icon: <Building className="w-8 h-8 text-cyan-400" />,
    title: "Partnership & Project Escrow",
    description:
      "Lock funds or tokens with milestones in place to protect both parties. Example: A startup raises 5 ETH, releasing 1 ETH per milestone through DexCourt's escrow system.",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8 text-cyan-400" />,
    title: "Dispute Resolution",
    description:
      "When trust breaks, DexCourt's judges and voters deliver fair verdicts. Example: An influencer fails to deliver promotion posts; the client raises a dispute and the court decides whether a refund is due.",
  },
];

// Animation variants with proper TypeScript types
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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
      duration: 0.6,
    },
  },
};

const Freelancer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section className="relative py-10 overflow-hidden" ref={sectionRef}>
      {/* 🌌 Background Glow */}

      <div className="max-w-7xl mx-auto px-6">
        {/* 🧱 Animated Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-[minmax(250px,_1fr)] max-w-[40rem] mx-auto lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Map through features array */}
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`flex flex-col justify-between rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all ${
                feature.id === "reputation" ? "lg:row-span-2" : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {feature.title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{feature.description}</p>

                {/* Render list items if they exist */}
                {feature.listItems && (
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    {feature.listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Render example if it exists */}
                {feature.example && (
                  <p className="italic text-cyan-300/80 text-xs mt-3">
                    {feature.example}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Freelancer;
