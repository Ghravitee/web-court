import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { FileText, Scale, DollarSign, Globe } from "lucide-react";

const RevenueAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const revenueStreams = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      title: "Agreement & Escrow Fees",
      description:
        "For every successful escrow deal, DexCourt takes a 5% platform fee from the locked funds. These fees help fund continuous development, platform maintenance, and ecosystem incentives.",
    },
    {
      icon: <Scale className="w-6 h-6 text-cyan-400" />,
      title: "Dispute Resolution Fees",
      description:
        "Raising a dispute requires a nominal submission fee (e.g., 0.01 ETH) to discourage spam and compensate judges for their time.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
      title: "Transaction Tax",
      description:
        "Every $LAW transaction incurs a 5% tax distributed as follows: 1% Development, 2% Marketing, and 2% Rewards for Judges & Voters.",
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Future Integrations & Partnerships",
      description:
        "Revenue will expand through API integrations, licensing DexCourt's escrow and reputation systems, and verified project partnerships.",
    },
  ];

  return (
    <section
      id="revenue"
      className="relative py-20 px-6 text-white"
      ref={sectionRef}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 blur-3xl"></div> */}
      <div className="max-w-[50rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-[3rem] font-bold mb-4 sec"
          >
            How DexCourt{" "}
            <span className="text-cyan-700 play">Generates Revenue</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            DexCourt's model is built for sustainability — ensuring long-term
            growth while rewarding active participants.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              className="rounded-2xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="w-full p-6 text-left flex items-center justify-between card-cyan transition-all duration-300 hover:bg-cyan-500/5"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-xl">
                    {stream.icon}
                  </div>
                  <div>
                    <h3 className="sec text-xl font-semibold text-cyan-400">
                      {stream.title}
                    </h3>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="size-6 text-cyan-400" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gray-900/30 border-t border-gray-700/50">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueAccordion;
