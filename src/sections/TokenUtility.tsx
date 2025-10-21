import { useRef } from "react";
import { Vote } from "lucide-react";
import { MdOutlineKey } from "react-icons/md";
import { TbTax } from "react-icons/tb";
import { MdOutlineRecycling } from "react-icons/md";

const TokenUtility = () => {
  const sectionRef = useRef(null);

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
      className="py-20 px-6 text-white relative"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 blur-3xl"></div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center justify-center mb-4"
          >
            <h2 className="text-3xl md:text-[3rem] font-bold text-cyan-700">
              $LAW <span className="play text-white">Token Utility</span>
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            The <span className="text-cyan-700 font-bold">$LAW </span>token
            fuels governance, participation, and rewards across DexCourt.
            Holding $LAW gives users influence and access within the ecosystem.
          </p>
        </div>

        {/* Utilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Voting Rights */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-8 rounded-2xl card-cyan glass transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl">
                {utilities[0].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {utilities[0].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-3">{utilities[0].description}</p>
              </div>
            </div>
          </div>

          {/* Revenue Rewards */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-8 rounded-2xl card-cyan glass transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl">
                {utilities[1].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {utilities[1].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-3">{utilities[1].description}</p>
              </div>
            </div>
          </div>

          {/* Token Tax Redistribution */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-8 rounded-2xl card-cyan glass transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl">
                {utilities[2].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {utilities[2].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-3">{utilities[2].description}</p>
              </div>
            </div>
          </div>

          {/* Access to Platform Features */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="p-8 rounded-2xl card-cyan glass transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex flex-col md:flex-row space-x-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl">
                {utilities[3].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {utilities[3].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-3">{utilities[3].description}</p>
                {utilities[3].features && (
                  <ul className="space-y-2">
                    {utilities[3].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
