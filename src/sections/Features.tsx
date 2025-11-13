import { useRef } from "react";
import { Scale, FileText, Wallet, Vote, Users } from "lucide-react";
import { FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: "smart",
    icon: <FileText className="w-8 h-8" />,
    title: "Smart Agreements",
    description:
      "Create secure on-chain agreements between individuals, teams, or projects — no lawyers or middlemen needed. Every deal is recorded with clear milestones, deadlines, and terms both parties can verify and sign digitally.",
    gradient: "from-cyan-500/20 to-cyan-400/10",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_60px_#00ffff20]",
  },
  {
    id: "escrow",
    icon: <Wallet className="w-10 h-10" />,
    title: "Decentralized Escrow",
    description:
      "Funds are held safely in DexCourt's smart escrow until agreed conditions are met. Whether it's a service, partnership, or freelance job, the escrow ensures no one gets paid — or loses funds — unfairly.",
    gradient: "from-purple-500/20 to-cyan-500/10",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_80px_#a855f720]",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8" />,
    title: "Dispute Resolution",
    description:
      "If things go wrong, either party can raise a dispute. Verified judges and the community review evidence, vote transparently, and deliver a fair verdict — free from bias or favoritism.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-400/30",
    glow: "shadow-[0_0_60px_#00ffff20]",
  },
  {
    id: "voting",
    icon: <Vote className="w-8 h-8" />,
    title: "On-Chain Voting",
    description:
      "Every major decision — from disputes to governance — is powered by transparent, verifiable voting. Judges' votes carry weighted influence, while $LAW holders also vote, ensuring balanced outcomes driven by both expertise and community consensus.",
    gradient: "from-cyan-500/20 to-emerald-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_60px_#00ffff20]",
  },
  {
    id: "reputation",
    icon: <Users className="w-8 h-8" />,
    title: "Reputation System",
    description:
      "Judges, participants, and deal creators earn or lose reputation based on their conduct. This builds a lasting trust layer that guides future collaborations and strengthens accountability across the DexCourt ecosystem.",
    gradient: "from-purple-500/20 to-cyan-500/10",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_60px_#a855f720]",
  },
];

const BentoFeatures = () => {
  const ref = useRef(null);

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24  text-white overflow-hidden"
    >
      {/* Enhanced Background Effects - Matching Judges Section */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Matching Judges Section Style */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30"
          >
            <FaShieldAlt className="text-cyan-400 text-lg" />
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Platform Features
            </span>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
          >
            Core <span className="text-cyan-400">Features</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            DexCourt combines cutting-edge blockchain technology with fair
            governance to create a trustless ecosystem for secure agreements and
            dispute resolution.
          </p>
        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(240px,_1fr)]">
          {/* Smart Agreements */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[0].title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                {features[0].description}
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Decentralized Escrow - Featured Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
            className="group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden lg:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 w-fit mb-6">
                <Wallet className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                {features[1].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {features[1].description}
              </p>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Dispute Resolution */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Scale className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[2].title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                {features[2].description}
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* On-Chain Voting */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Vote className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[3].title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                {features[3].description}
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Reputation System */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
              borderColor: "rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 w-fit mb-6">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {features[4].title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                {features[4].description}
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
