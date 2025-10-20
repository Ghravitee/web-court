import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const phases = [
    {
      title: "Phase 1 — Foundation",
      status: "current",
      items: [
        "Develop and launch the core dApp & website",
        "Publish the whitepaper",
        "Implement off-chain agreement functionality",
        "Deploy escrow agreement module",
        "Onboard verified judges",
        "Launch the $LAW token",
      ],
    },
    {
      title: "Phase 2 — Expansion",
      status: "upcoming",
      items: [
        "Onboard more renowned judges",
        "List $LAW on CoinGecko and other aggregators",
        "Introduce revenue sharing for judges and community voters",
        "Launch governance and voting dashboard",
        "Begin global awareness campaign",
      ],
    },
    {
      title: "Phase 3 — Evolution",
      status: "upcoming",
      items: [
        "Upgrade Dispute Page (evidence uploads, progress tracking, verdict visibility)",
        "Allow disputes without prior agreements (retroactive justice)",
        "Integrate automated dispute resolution based on voting outcomes",
        "Introduce reputation-based ranking for users and judges",
      ],
    },
    {
      title: "Phase 4 — Maturity & Ecosystem Growth",
      status: "upcoming",
      items: [
        "Launch the DexCourt DAO for full community governance",
        "Offer API & SDK integrations for third-party dApps and DAOs",
        "Add cross-chain support (BSC, Polygon, Base, etc.)",
        "Release a mobile-friendly app",
        "Form partnerships with Web3 projects and launchpads for verified deal protection",
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-20 px-6 bg-[#030008] text-white overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
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
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
          >
            Roadmap
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Our journey to revolutionize Web3 justice and dispute resolution
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700/50 transform md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-blue-500"
              initial={{ height: "0%" }}
              animate={{
                height: `${(activePhase / (phases.length - 1)) * 100}%`,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Phases */}
          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onViewportEnter={() => setActivePhase(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#030008] z-10 transform md:-translate-x-1/2">
                  <div
                    className={`w-full h-full rounded-full ${
                      phase.status === "current"
                        ? "bg-cyan-400 animate-pulse"
                        : index < activePhase
                        ? "bg-cyan-400"
                        : "bg-gray-600"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className={`p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 ${
                      phase.status === "current"
                        ? "border-cyan-400/40 card-cyan scale-105"
                        : index < activePhase
                        ? "border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                        : "card-cyan glass"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Phase Header */}
                    <div className="flex items-center mb-4">
                      <div>
                        <h3
                          className={`text-xl font-bold ${
                            phase.status === "current"
                              ? "text-cyan-400"
                              : "text-white"
                          }`}
                        >
                          {phase.title}
                        </h3>
                        <span
                          className={`text-sm play ${
                            phase.status === "current"
                              ? "text-cyan-300"
                              : index < activePhase
                              ? "text-cyan-400/70"
                              : "text-gray-500"
                          }`}
                        >
                          {phase.status === "current"
                            ? "In Progress"
                            : "Upcoming"}
                        </span>
                      </div>
                    </div>

                    {/* Phase Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start text-gray-300 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              phase.status === "current" || index < activePhase
                                ? "bg-cyan-400"
                                : "bg-gray-600"
                            }`}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
