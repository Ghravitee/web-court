import { useState } from "react";
import { motion } from "framer-motion";

const Tokenomics = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const tokenDetails = [
    { label: "Token Name", value: "DexCourt" },
    { label: "Ticker", value: "$LAW" },
    { label: "Total Supply", value: "10,000,000" },
    { label: "Decimals", value: "18" },
    { label: "Tax", value: "5% Buy / 5% Sell" },
  ];

  const taxDistribution = [
    {
      allocation: "Development",
      percentage: "1%",
      purpose: "Ongoing platform development and system maintenance",
    },
    {
      allocation: "Marketing",
      percentage: "2%",
      purpose: "Awareness, partnerships, and growth campaigns",
    },
    {
      allocation: "Revenue to Judges & Voters",
      percentage: "2%",
      purpose:
        "Distributed to active contributors who uphold the ecosystem's fairness",
    },
  ];

  const tokenAllocation = [
    {
      category: "Liquidity",
      percentage: "50%",
      amount: "5,000,000",
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Marketing",
      percentage: "15%",
      amount: "1,500,000",
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "Judges Incentives",
      percentage: "10%",
      amount: "1,000,000",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      category: "Team",
      percentage: "5%",
      amount: "500,000",
      color: "from-amber-500 to-orange-500",
    },
    {
      category: "Future CEX Listing & Expansion",
      percentage: "20%",
      amount: "2,000,000",
      color: "from-purple-500 to-pink-500",
      locked: true,
    },
  ];

  return (
    <section id="tokenomics" className="py-20 px-6 bg-[#030008] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <h2 className="lg:text-[2.7rem] text-[2.5rem] font-bold hank">
              Tokenomics
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The $LAW token powers every function of the DexCourt ecosystem —
            from governance and voting to community rewards.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["overview", "tax", "allocation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeSection === tab
                  ? "bg-cyan-900 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab === "overview" && "Token Overview"}
              {tab === "tax" && "Tax Distribution"}
              {tab === "allocation" && "Token Allocation"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Token Overview */}
          <AnimatePresence mode="wait">
            {activeSection === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {tokenDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6 rounded-2xl glass card-cyan transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {detail.label}
                      </h3>
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {detail.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tax Distribution */}
          <AnimatePresence mode="wait">
            {activeSection === "tax" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className=""
              >
                <h3 className="text-2xl font-bold hank mb-8 text-center">
                  Tax Distribution (5% Total)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {taxDistribution.map((tax, index) => (
                    <motion.div
                      key={tax.allocation}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-6 rounded-2xl card-cyan glass transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Glow effect - contained within the card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-cyan-400 mb-2">
                            {tax.percentage}
                          </div>
                          <h4 className="text-lg font-semibold text-white">
                            {tax.allocation}
                          </h4>
                        </div>
                        <p className="text-gray-300 text-sm text-center leading-relaxed">
                          {tax.purpose}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Token Allocation */}
          <AnimatePresence mode="wait">
            {activeSection === "allocation" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Allocation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
                  {tokenAllocation.map((allocation, index) => (
                    <motion.div
                      key={allocation.category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`group p-6 rounded-3xl border-2 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                        allocation.category === "Liquidity"
                          ? "md:col-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/30 hover:border-cyan-400/50"
                          : allocation.category ===
                            "Future CEX Listing & Expansion"
                          ? " bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 hover:border-purple-400/50"
                          : "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-700/30 hover:border-cyan-400/30"
                      }`}
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Animated Orb */}
                      <div
                        className={`absolute -top-10 -right-10 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
                          allocation.category === "Liquidity"
                            ? "bg-cyan-500"
                            : allocation.category === "Marketing"
                            ? "bg-blue-500"
                            : allocation.category === "Judges Incentives"
                            ? "bg-emerald-500"
                            : allocation.category === "Team"
                            ? "bg-amber-500"
                            : "bg-purple-500"
                        }`}
                      />

                      <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Header Section */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-8 rounded-lg bg-gradient-to-b ${allocation.color}`}
                            />
                            <div>
                              <h4 className="text-lg font-bold text-white leading-tight">
                                {allocation.category}
                              </h4>
                              {allocation.locked && (
                                <span className="inline-flex items-center text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full border border-amber-500/30 mt-1">
                                  Locked 1 Year
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Percentage Badge */}
                          <div className="text-right">
                            <div className="text-2xl font-black text-cyan-400 leading-none">
                              {allocation.percentage}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                              Allocation
                            </div>
                          </div>
                        </div>

                        {/* Token Amount */}
                        <div className="mb-4">
                          <p className="text-2xl font-bold text-white">
                            {allocation.amount}
                          </p>
                          <p className="text-sm text-gray-400">$LAW Tokens</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                              Progress
                            </span>
                            <span className="text-xs text-cyan-400 font-semibold">
                              {allocation.percentage}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: allocation.percentage }}
                              transition={{
                                duration: 1.2,
                                delay: index * 0.15,
                                ease: "easeOut",
                              }}
                              className={`h-2 rounded-full bg-gradient-to-r ${allocation.color} relative`}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div
                        className={`absolute top-0 right-0 w-8 h-8 rounded-bl-2xl border-t-2 border-r-2 ${
                          allocation.category === "Liquidity"
                            ? "border-cyan-400/50"
                            : allocation.category === "Marketing"
                            ? "border-blue-400/50"
                            : allocation.category === "Judges Incentives"
                            ? "border-emerald-400/50"
                            : allocation.category === "Team"
                            ? "border-amber-400/50"
                            : "border-purple-400/50"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Add this import at the top
import { AnimatePresence } from "framer-motion";

export default Tokenomics;
