import { useRef } from "react";
import { Briefcase, Handshake, Building, Scale, Star } from "lucide-react";

const features = [
  {
    id: "freelancer",
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    title: "Freelancer & Client Agreements",
    description:
      "DexCourt gives freelancers and clients peace of mind through secure agreements and escrow payments. Funds are only released when both parties confirm that milestones are met.",
    example:
      "Example: A Web3 developer agrees to build a staking dashboard for a project for 0.8 ETH. The client creates an escrow agreement on DexCourt and deposits the full amount. Once the developer delivers the dashboard and the project team confirms it works, payment is released automatically. If there's disagreement over quality or delivery, either party can raise a dispute, where DexCourt judges review the evidence and decide fairly.",
    exampleColor: "text-cyan-300/90",
    whoBenefits:
      "Developers, designers, marketers, writers, and clients looking for transparent, secure collaborations.",
  },
  {
    id: "reputation",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    title: "Reputation Tracker & Vetting System",
    description:
      "DexCourt doubles as a public reputation hub — helping users vet others before doing business with them. Reputation reflects honesty, reliability, and dispute history — even from offline cases.",
    example:
      "Example: A founder planning to hire a Telegram manager searches their DexCourt profile and discovers they have 3 unresolved disputes and appear in Ignored Rulings with a Trust Score of 41/100. Another candidate, verified on DexCourt, shows 12 successful contracts, no disputes, and a Trust Score of 93/100. The founder confidently hires the second candidate, avoiding a potential loss.",
    exampleColor: "text-cyan-300/90",
    whoBenefits:
      "Anyone in Web3 — founders, traders, investors, DAOs, and freelancers — who needs to verify credibility before trusting someone.",
  },
  {
    id: "casual",
    icon: <Handshake className="w-8 h-8 text-cyan-400" />,
    title: "Casual or Personal Agreements",
    description:
      "Even informal or offline agreements can be documented and protected using DexCourt's off-chain agreement feature. It serves as a verifiable record in case things go wrong — even if no payment was held in escrow.",
    example:
      "Example: Two NFT traders agree in DMs that one will create a logo and the other will send a rare NFT in exchange. After delivery, the NFT sender disappears without sending the logo. The designer raises a dispute on DexCourt, attaching screenshots and transaction proof. Although no funds were escrowed, judges rule that the trader violated the agreement and issue a public ruling. If the trader refuses to apologize or settle, their DexCourt reputation score drops and their username is listed under 'Ignored Rulings.'",
    exampleColor: "text-cyan-300/90",
    whoBenefits:
      "Friends, traders, moderators, or anyone who frequently makes informal Web3 or personal deals.",
  },
  {
    id: "partnership",
    icon: <Building className="w-8 h-8 text-cyan-400" />,
    title: "Partnerships & Project Deals",
    description:
      "Partnerships often involve mutual promises and milestones — DexCourt's milestone-based escrow and agreement system ensures both sides stay accountable.",
    example:
      "Example: A DeFi project partners with a YouTube influencer for promotion worth 4 ETH, payable in two stages — half before the campaign and half after achieving a 10K view target. The deal is created on DexCourt, and the first 2 ETH is placed in escrow. After the influencer delivers only one low-effort video and doesn't meet the target, the project raises a dispute. Judges review the case, confirm underperformance, and rule that only 1 ETH be released. The remaining amount returns to the project.",
    exampleColor: "text-cyan-300/90",
    whoBenefits:
      "Startups, investors, influencers, marketing teams, or any group involved in performance-based deals.",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8 text-cyan-400" />,
    title: "Real-World Disputes",
    description:
      "DexCourt can also be used to settle real-world or hybrid disputes, such as services, investments, or physical goods deals that didn't happen digitally. While the platform can't force refunds, it can enforce accountability through reputation.",
    example:
      "Example: A community member hires a local event organizer for a crypto meetup, paying $600 in cash. The organizer cancels last minute, refuses to refund, and disappears. The victim opens a DexCourt dispute with screenshots, chat logs, and witnesses. Judges review the case, vote unanimously that the organizer acted unfairly, and issue a public call-out urging a refund or apology. The organizer ignores it, and their Trust Score drops significantly, marking them as untrustworthy across future deals and appearing in the Ignored Rulings list.",
    exampleColor: "text-cyan-300/90",
    whoBenefits:
      "Crypto investors, small businesses, event partners, and community members handling real-world transactions or promises.",
  },
];

const PlatformUseCases = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="use-cases"
      className="pt-16 px-6 text-white relative"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="relative z-0">
              {/* Header */}
              <div className="text-center mb-16">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="lg:text-[2.7rem] text-[2.5rem] font-bold mb-4 leading-[1]"
                >
                  Platform <span className="play text-cyan-700">Usecases</span>
                </h2>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="lg:text-lg text-gray-300 max-w-2xl mx-auto"
                >
                  DexCourt goes beyond smart contracts — it's a platform where
                  any form of agreement or transaction can be made verifiable,
                  and where justice and reputation are upheld whether or not a
                  deal took place on-chain. From freelancers to founders,
                  traders to community members, DexCourt provides accountability
                  and protection in every kind of deal — digital or physical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🧱 Bento Grid Layout with AOS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[40rem] mx-auto lg:max-w-none">
            {/* Freelancer & Client Agreements */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all duration-300"
            >
              {features[0].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[0].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[0].description}</p>
                {features[0].example && (
                  <div
                    className={`mt-3 text-xs leading-relaxed ${features[0].exampleColor} font-medium`}
                  >
                    {features[0].example.split("\n").map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {/* Who Benefits Section */}
                <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-700/30">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">
                    Who Benefits:
                  </p>
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    {features[0].whoBenefits}
                  </p>
                </div>
              </div>
            </div>

            {/* Reputation Tracking */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all"
            >
              {features[1].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[1].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[1].description}</p>
                {features[1].example && (
                  <div
                    className={`mt-3 text-xs leading-relaxed ${features[1].exampleColor} font-medium`}
                  >
                    {features[1].example.split("\n").map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {/* Who Benefits Section */}
                <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-700/30">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">
                    Who Benefits:
                  </p>
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    {features[1].whoBenefits}
                  </p>
                </div>
              </div>
            </div>

            {/* Casual or Personal Agreements */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all duration-300"
            >
              {features[2].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[2].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[2].description}</p>
                {features[2].example && (
                  <div
                    className={`mt-3 text-xs leading-relaxed ${features[2].exampleColor} font-medium`}
                  >
                    {features[2].example.split("\n").map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {/* Who Benefits Section */}
                <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-700/30">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">
                    Who Benefits:
                  </p>
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    {features[2].whoBenefits}
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership & Project Escrow */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all duration-300"
            >
              {features[3].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[3].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[3].description}</p>
                {features[3].example && (
                  <div
                    className={`mt-3 text-xs leading-relaxed ${features[3].exampleColor} font-medium`}
                  >
                    {features[3].example.split("\n").map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {/* Who Benefits Section */}
                <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-700/30">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">
                    Who Benefits:
                  </p>
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    {features[3].whoBenefits}
                  </p>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all duration-300"
            >
              {features[4].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[4].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[4].description}</p>
                {features[4].example && (
                  <div
                    className={`mt-3 text-xs leading-relaxed ${features[4].exampleColor} font-medium`}
                  >
                    {features[4].example.split("\n").map((line, index) => (
                      <p key={index} className={index > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {/* Who Benefits Section */}
                <div className="mt-4 p-3 bg-cyan-900/30 rounded-lg border border-cyan-700/30">
                  <p className="text-xs font-semibold text-cyan-300 mb-1">
                    Who Benefits:
                  </p>
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    {features[4].whoBenefits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformUseCases;
