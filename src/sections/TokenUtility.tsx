import { useRef } from "react";
import { Vote } from "lucide-react";
import { MdOutlineKey } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";

const TokenUtility = () => {
  const sectionRef = useRef(null);

  const utilities = [
    {
      icon: <Vote className="w-8 h-8" />,
      title: "Voting Rights",
      description:
        "$LAW holders can vote on disputes, proposals, and system updates — shaping DexCourt's direction and fairness model.",
    },
    {
      icon: <TbTax className="w-8 h-8" />,
      title: "Revenue Rewards",
      description:
        "Active voters and judges share in DexCourt's revenue. A portion of all fees and taxes goes directly to those contributing to justice and governance.",
    },
    {
      icon: <MdOutlineRecycling className="w-8 h-8" />,
      title: "Token Tax Redistribution",
      description:
        "Each transaction involving $LAW carries a small tax, partly sent to the Revenue Share Contract that rewards judges and active voters.",
    },
    {
      icon: <MdOutlineKey className="w-8 h-8" />,
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
      className="py-20 px-6 text-white relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Matching Features Section Style */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="sec text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
          >
            $LAW <span className="text-cyan-400">Token Utility</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The <span className="text-cyan-400 font-bold">$LAW</span> token
            fuels governance, participation, and rewards across DexCourt.
            Holding $LAW gives users influence and access within the ecosystem.
          </p>
        </div>

        {/* Utilities Grid - Matching Features Section Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Voting Rights */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <Vote className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Voting Rights
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                $LAW holders can vote on disputes, proposals, and system updates
                — shaping DexCourt's direction and fairness model.
              </p>
            </div>
          </div>

          {/* Revenue Rewards */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <TbTax className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Revenue Rewards
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                Active voters and judges share in DexCourt's revenue. A portion
                of all fees and taxes goes directly to those contributing to
                justice and governance.
              </p>
            </div>
          </div>

          {/* Token Tax Redistribution */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <MdOutlineRecycling className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sec text-2xl font-bold text-white mb-4">
                Token Tax Redistribution
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                Each transaction involving $LAW carries a small tax, partly sent
                to the Revenue Share Contract that rewards judges and active
                voters.
              </p>
            </div>
          </div>

          {/* Access to Platform Features */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              {/* Icon */}
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-6">
                <MdOutlineKey className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="sectext-2xl font-bold text-white mb-4">
                Access to Platform Features
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">
                In future updates, holding a minimum amount of $LAW will be
                required to:
              </p>

              {/* Features List */}
              {utilities[3].features && (
                <ul className="space-y-3">
                  {utilities[3].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
