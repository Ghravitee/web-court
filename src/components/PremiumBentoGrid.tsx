import React from "react";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
}

const cardData: BentoCardProps[] = [
  {
    color: "from-cyan-500/10 via-blue-700/10 to-purple-800/10",
    title: "🧾 Smart Agreements",
    description:
      "Create secure on-chain agreements between individuals, teams, or projects — no lawyers or middlemen needed. Every deal is recorded with clear milestones, deadlines, and terms both parties can verify and sign digitally.",
    label: "Agreements",
  },
  {
    color: "from-blue-600/10 via-cyan-400/10 to-teal-800/10",
    title: "💰 Decentralized Escrow",
    description:
      "Funds are held safely in DexCourt’s smart escrow until agreed conditions are met. Whether it’s a service, partnership, or freelance job, the escrow ensures no one gets paid — or loses funds — unfairly.",
    label: "Escrow",
  },
  {
    color: "from-cyan-400/10 via-indigo-600/10 to-purple-900/10",
    title: "⚖️ Dispute Resolution",
    description:
      "If things go wrong, either party can raise a dispute. Verified judges and the community review evidence, vote transparently, and deliver a fair verdict — free from bias or favoritism.",
    label: "Disputes",
  },
  {
    color: "from-teal-400/10 via-cyan-600/10 to-blue-900/10",
    title: "🗳️ On-Chain Voting",
    description:
      "Every major decision — from disputes to governance — is powered by transparent, verifiable voting. Judges’ votes carry weighted influence, while $LAW holders also vote, ensuring balanced outcomes driven by both expertise and community consensus.",
    label: "Governance",
  },
  {
    color: "from-blue-700/10 via-cyan-500/10 to-purple-800/10",
    title: "👥 Reputation System",
    description:
      "Judges, participants, and deal creators earn or lose reputation based on their conduct. This builds a lasting trust layer that guides future collaborations and strengthens accountability across the DexCourt ecosystem.",
    label: "Reputation",
  },
];

const PremiumBentoGrid: React.FC = () => {
  return (
    <section className="relative py-16 px-6 bg-[#030008] text-white">
      <div
        className="
          grid gap-6 max-w-6xl mx-auto
          sm:grid-cols-2 lg:grid-cols-4
          auto-rows-[220px]
        "
      >
        {cardData.map((card, i) => (
          <div
            key={i}
            className={`
              relative flex flex-col justify-between p-6 rounded-2xl
              border border-cyan-500/20
              bg-gradient-to-br ${card.color}
              backdrop-blur-md
              transition-all duration-300 ease-in-out
              hover:border-cyan-400 hover:shadow-[0_0_25px_#00ffff30]
              ${i === 2 ? "lg:col-span-2 lg:row-span-2" : ""}
            `}
          >
            <div className="text-cyan-400 text-sm font-semibold tracking-wide">
              {card.label}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* subtle cyan glow ring behind */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 blur-2xl -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumBentoGrid;
