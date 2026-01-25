import { useRef } from "react";
import { Vote } from "lucide-react";
import { MdOutlineKey } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";

const TokenUtility = () => {
  const sectionRef = useRef(null);

  const utilities = [
    {
      icon: <Vote className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Voting Rights",
      description:
        "$LAW holders can vote on disputes, proposals, and system updates — shaping DexCourt's direction and fairness model.",
    },
    {
      icon: <TbTax className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Revenue Rewards",
      description:
        "Active voters and judges share in DexCourt's revenue. A portion of all fees and taxes goes directly to those contributing to justice and governance.",
    },
    {
      icon: <MdOutlineRecycling className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Token Tax Redistribution",
      description:
        "Each transaction involving $LAW carries a small tax, partly sent to the Revenue Share Contract that rewards judges and active voters.",
    },
    {
      icon: <MdOutlineKey className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      className="py-12 sm:py-16 lg:py-20 px-4 text-white relative bg-cyan-400/80 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] lg:mx-auto "
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header - Mobile responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="sec text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black"
          >
            $LAW Token Utility
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            The <span className="font-bold">$LAW</span> token fuels governance,
            participation, and rewards across DexCourt. Holding{" "}
            <span className="font-bold">$LAW</span> gives users influence and
            access within the ecosystem.
          </p>
        </div>

        {/* Utilities Grid - Mobile responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Voting Rights */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="token-card bg-black relative rounded-2xl sm:rounded-3xl p-4 sm:p-6"
          >
            {/* Icon */}
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 sm:mb-6">
              <Vote className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Voting Rights
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              $LAW holders can vote on disputes, proposals, and system updates —
              shaping DexCourt's direction and fairness model.
            </p>
          </div>

          {/* Revenue Rewards */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="token-card bg-black relative rounded-2xl sm:rounded-3xl p-4 sm:p-6"
          >
            {/* Icon */}
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 sm:mb-6">
              <TbTax className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Revenue Rewards
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Active voters and judges share in DexCourt's revenue. A portion of
              all fees and taxes goes directly to those contributing to justice
              and governance.
            </p>
          </div>

          {/* Token Tax Redistribution */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="token-card bg-black relative rounded-2xl sm:rounded-3xl p-4 sm:p-6"
          >
            {/* Icon */}
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 sm:mb-6">
              <MdOutlineRecycling className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Token Tax Redistribution
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Each transaction involving $LAW carries a small tax, partly sent
              to the Revenue Share Contract that rewards judges and active
              voters.
            </p>
          </div>

          {/* Access to Platform Features */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="token-card bg-black relative rounded-2xl sm:rounded-3xl p-4 sm:p-6"
          >
            {/* Icon */}
            <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 sm:mb-6">
              <MdOutlineKey className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Access to Platform Features
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              In future updates, holding a minimum amount of $LAW will be
              required to:
            </p>

            {/* Features List */}
            {utilities[3].features && (
              <ul className="space-y-2 sm:space-y-3">
                {utilities[3].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
