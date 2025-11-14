import { useRef } from "react";
import { Scale, FileText, Wallet, Vote, Users } from "lucide-react";
import { FaShieldAlt } from "react-icons/fa";

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
            className="sec text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
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
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Smart Agreements
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                Create secure on-chain agreements between individuals, teams, or
                projects — no lawyers or middlemen needed. Every deal is
                recorded with clear milestones, deadlines, and terms both
                parties can verify and sign digitally.
              </p>
            </div>
          </div>

          {/* Decentralized Escrow - Featured Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 lg:row-span-2"
          >
            <div className="flex flex-col justify-center rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#a855f720] transition-all duration-500 group-hover:shadow-[0_0_70px_#a855f740]">
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Wallet className="w-10 h-10 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-3xl font-bold text-white mb-6">
                Decentralized Escrow
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Funds are held safely in DexCourt's smart escrow until agreed
                conditions are met. Whether it's a service, partnership, or
                freelance job, the escrow ensures no one gets paid — or loses
                funds — unfairly.
              </p>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Scale className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Dispute Resolution
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                If things go wrong, either party can raise a dispute. Verified
                judges and the community review evidence, vote transparently,
                and deliver a fair verdict — free from bias or favoritism.
              </p>
            </div>
          </div>

          {/* On-Chain Voting */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Vote className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                On-Chain Voting
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                Every major decision — from disputes to governance — is powered
                by transparent, verifiable voting. Judges' votes carry weighted
                influence, while $LAW holders also vote, ensuring balanced
                outcomes driven by both expertise and community consensus.
              </p>
            </div>
          </div>

          {/* Reputation System */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#a855f720] transition-all duration-500 group-hover:shadow-[0_0_70px_#a855f740]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Reputation System
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                Judges, participants, and deal creators earn or lose reputation
                based on their conduct. This builds a lasting trust layer that
                guides future collaborations and strengthens accountability
                across the DexCourt ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
