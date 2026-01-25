import { useRef, useState, useEffect } from "react";
import { Briefcase, Handshake, Building, Scale, Star } from "lucide-react";

const features = [
  {
    id: "freelancer",
    icon: <Briefcase className="size-16 text-cyan-400" />,
    title: "Freelancer & Client Agreements",
    description:
      "DexCourt gives freelancers and clients peace of mind through secure agreements and escrow payments. Funds are only released when both parties confirm that milestones are met.",
    example:
      "Example: A Web3 developer agrees to build a staking dashboard for a project for 0.8 ETH. The client creates an escrow agreement on DexCourt and deposits the full amount. Once the developer delivers the dashboard and the project team confirms it works, payment is released automatically. If there's disagreement over quality or delivery, either party can raise a dispute, where DexCourt judges review the evidence and decide fairly.",
    exampleColor: "text-cyan-500/90",
    whoBenefits:
      "Developers, designers, marketers, writers, and clients looking for transparent, secure collaborations.",
  },
  {
    id: "reputation",
    icon: <Star className="size-16 text-cyan-400" />,
    title: "Reputation Tracker & Vetting System",
    description:
      "DexCourt doubles as a public reputation hub — helping users vet others before doing business with them. Reputation reflects honesty, reliability, and dispute history — even from offline cases.",
    example:
      "Example: A founder planning to hire a Telegram manager searches their DexCourt profile and discovers they have 3 unresolved disputes and appear in Ignored Rulings with a Trust Score of 41/100. Another candidate, verified on DexCourt, shows 12 successful contracts, no disputes, and a Trust Score of 93/100. The founder confidently hires the second candidate, avoiding a potential loss.",
    exampleColor: "text-cyan-500/90",
    whoBenefits:
      "Anyone in Web3 — founders, traders, investors, DAOs, and freelancers — who needs to verify credibility before trusting someone.",
  },
  {
    id: "casual",
    icon: <Handshake className="size-16 text-cyan-400" />,
    title: "Casual or Personal Agreements",
    description:
      "Even informal or offline agreements can be documented and protected using DexCourt's off-chain agreement feature. It serves as a verifiable record in case things go wrong — even if no payment was held in escrow.",
    example:
      "Example: Two NFT traders agree in DMs that one will create a logo and the other will send a rare NFT in exchange. After delivery, the NFT sender disappears without sending the logo. The designer raises a dispute on DexCourt, attaching screenshots and transaction proof. Although no funds were escrowed, judges rule that the trader violated the agreement and issue a public ruling. If the trader refuses to apologize or settle, their DexCourt reputation score drops and their username is listed under 'Ignored Rulings.'",
    exampleColor: "text-cyan-500/90",
    whoBenefits:
      "Friends, traders, moderators, or anyone who frequently makes informal Web3 or personal deals.",
  },
  {
    id: "partnership",
    icon: <Building className="size-16 text-cyan-400" />,
    title: "Partnerships & Project Deals",
    description:
      "Partnerships often involve mutual promises and milestones — DexCourt's milestone-based escrow and agreement system ensures both sides stay accountable.",
    example:
      "Example: A DeFi project partners with a YouTube influencer for promotion worth 4 ETH, payable in two stages — half before the campaign and half after achieving a 10K view target. The deal is created on DexCourt, and the first 2 ETH is placed in escrow. After the influencer delivers only one low-effort video and doesn't meet the target, the project raises a dispute. Judges review the case, confirm underperformance, and rule that only 1 ETH be released. The remaining amount returns to the project.",
    exampleColor: "text-cyan-500/90",
    whoBenefits:
      "Startups, investors, influencers, marketing teams, or any group involved in performance-based deals.",
  },
  {
    id: "dispute",
    icon: <Scale className="size-16 text-cyan-400" />,
    title: "Real-World Disputes",
    description:
      "DexCourt can also be used to settle real-world or hybrid disputes, such as services, investments, or physical goods deals that didn't happen digitally. While the platform can't force refunds, it can enforce accountability through reputation.",
    example:
      "Example: A community member hires a local event organizer for a crypto meetup, paying $600 in cash. The organizer cancels last minute, refuses to refund, and disappears. The victim opens a DexCourt dispute with screenshots, chat logs, and witnesses. Judges review the case, vote unanimously that the organizer acted unfairly, and issue a public call-out urging a refund or apology. The organizer ignores it, and their Trust Score drops significantly, marking them as untrustworthy across future deals and appearing in the Ignored Rulings list.",
    exampleColor: "text-cyan-500/90",
    whoBenefits:
      "Crypto investors, small businesses, event partners, and community members handling real-world transactions or promises.",
  },
];

const PlatformUseCases = () => {
  const sectionRef = useRef(null);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="use-cases"
      className="py-12 md:pt-16 lg:pt-24 text-white relative"
      ref={sectionRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-12 md:mb-2">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
        >
          Platform <span className="text-cyan-400">Usecases</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
        >
          DexCourt goes beyond smart contracts — it's a platform where any form
          of agreement or transaction can be made verifiable, and where justice
          and reputation are upheld whether or not a deal took place on-chain.
          From freelancers to founders, traders to community members, DexCourt
          provides accountability and protection in every kind of deal — digital
          or physical.
        </p>
      </div>

      {/* Mobile Layout (Below 1024px) */}
      <div className="lg:hidden max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
              className="rounded-3xl bg-gradient-to-br from-cyan-900/20 to-black/50 backdrop-blur-xl p-6 border border-cyan-300/50"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Icon Section */}
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit">
                  {feature.icon}
                </div>

                {/* Text Content Section */}
                <div className="w-full">
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {feature.title}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {feature.example && (
                      <div
                        className={`text-sm leading-relaxed ${feature.exampleColor} font-medium bg-cyan-900/20 p-4 rounded-xl border border-cyan-700/30`}
                      >
                        {feature.example.split("\n").map((line, index) => (
                          <p key={index} className={index > 0 ? "mt-2" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Who Benefits Section */}
                    <div className="p-4 bg-cyan-900/30 rounded-xl border border-cyan-700/30">
                      <p className="text-sm font-semibold text-cyan-300 mb-2">
                        Who Benefits:
                      </p>
                      <p className="text-sm text-cyan-200/90 leading-relaxed">
                        {feature.whoBenefits}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Stacked Layout (1024px and above) */}
      <div className="hidden lg:block relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative h-[500vh]">
          {features.map((feature, idx) => {
            const imageRight = idx % 2 === 0;
            const scaleEnd = 1 - idx * 0.02;
            const scaleValue = scaleEnd;

            return (
              <div
                key={feature.id}
                className="sticky top-0 h-screen flex items-center justify-center"
              >
                <div
                  className="relative rounded-[2.5rem] p-[2px] bg-[#0f0f0f] border border-cyan-300/50 w-full max-w-4xl transition-transform duration-700 mx-4"
                  style={{
                    transform: `scale(${scaleValue})`,
                  }}
                >
                  <div className="relative rounded-[2.3rem] bg-gradient-to-br from-cyan-900/20 to-black/50 backdrop-blur-xl p-8 lg:px-12 lg:py-8 overflow-hidden">
                    {/* Background Glow */}
                    <div
                      className={`absolute ${
                        imageRight ? "right-0" : "left-0"
                      } top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 blur-[140px]`}
                    />

                    {/* Card Content - 30% Icon, 70% Text */}
                    <div
                      className={`relative flex flex-col ${
                        idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-12`}
                    >
                      {/* Icon Section (30%) */}
                      <div className="w-full lg:w-3/10 flex lg:justify-center justify-start">
                        <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>

                      {/* Text Content Section (70%) */}
                      <div className="w-full lg:w-7/10">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>

                        <div className="space-y-4">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                          </p>

                          {feature.example && (
                            <div
                              className={`text-sm leading-relaxed ${feature.exampleColor} font-medium bg-cyan-900/20 p-4 rounded-xl border border-cyan-700/30`}
                            >
                              {feature.example
                                .split("\n")
                                .map((line, index) => (
                                  <p
                                    key={index}
                                    className={index > 0 ? "mt-1" : ""}
                                  >
                                    {line}
                                  </p>
                                ))}
                            </div>
                          )}

                          {/* Who Benefits Section */}
                          <div className="p-4 bg-cyan-900/30 rounded-xl border border-cyan-700/30">
                            <p className="text-sm font-semibold text-cyan-300 mb-1">
                              Who Benefits:
                            </p>
                            <p className="text-sm text-cyan-200/90 leading-relaxed">
                              {feature.whoBenefits}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformUseCases;
