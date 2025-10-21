import { useRef } from "react";
import { Briefcase, Handshake, Building, Scale, Star } from "lucide-react";

const features = [
  {
    id: "freelancer",
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    title: "Freelancer & Client Agreements",
    description:
      "Secure jobs and payments through verifiable smart agreements. Example: A designer builds a landing page for 0.3 ETH. The client deposits funds into escrow, which releases automatically after approval.",
    example:
      "Example: A designer builds a landing page for 0.3 ETH. The client deposits funds into escrow. Funds release automatically after approval.",
    exampleColor: "text-green-300/90",
  },
  {
    id: "reputation",
    icon: <Star className="w-8 h-8 text-cyan-400" />,
    title: "Reputation Tracking",
    description:
      "Every participant builds a reputation profile within DexCourt based on past behavior. Judges gain credibility for fair rulings, freelancers earn trust for completed work, and defaulters lose points. DexCourt doubles as a public reputation hub — before entering any deal, you can check a user's profile to see:",
    listItems: [
      "Total deals completed",
      "Dispute history",
      "Ratings from judges and clients",
      "Overall Trust Score (0–100)",
    ],
    example:
      "Example: Before hiring a developer, a project owner checks their DexCourt profile. Finds a Trust Score of 92/100. 8 successful deals and one fairly resolved dispute. Enough proof to proceed confidently.",
    exampleColor: "text-purple-300/90",
  },
  {
    id: "casual",
    icon: <Handshake className="w-8 h-8 text-cyan-400" />,
    title: "Casual or Personal Agreements",
    description:
      "Even simple promises between friends or traders can be recorded for transparency. Example: Two users agree to swap a logo for tokens — DexCourt records the deal, protecting both sides.",
    example:
      "Example: Two users agree to swap a logo for tokens.\nDexCourt records the deal. Protects both sides with transparent tracking.",
    exampleColor: "text-yellow-300/90",
  },
  {
    id: "partnership",
    icon: <Building className="w-8 h-8 text-cyan-400" />,
    title: "Partnership & Project Escrow",
    description:
      "Lock funds or tokens with milestones in place to protect both parties. Example: A startup raises 5 ETH, releasing 1 ETH per milestone through DexCourt's escrow system.",
    example:
      "Example: A startup raises 5 ETH. Releases 1 ETH per milestone. Uses DexCourt's escrow system for protection.",
    exampleColor: "text-blue-300/90",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8 text-cyan-400" />,
    title: "Dispute Resolution",
    description:
      "When trust breaks, DexCourt's judges and voters deliver fair verdicts. Example: An influencer fails to deliver promotion posts; the client raises a dispute and the court decides whether a refund is due.",
    example:
      "Example: An influencer fails to deliver promotion posts. Client raises a dispute. Court decides whether a refund is due.",
    exampleColor: "text-red-300/90",
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
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 blur-3xl"></div>
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
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  DexCourt serves everyone — from professionals to casual users
                  — providing security, transparency, and accountability in
                  every deal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🧱 Bento Grid Layout with AOS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-[minmax(250px,_1fr)] max-w-[40rem] mx-auto lg:max-w-none">
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
              </div>
            </div>

            {/* Reputation Tracking (2-row span) */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all  lg:row-span-2"
            >
              {features[1].icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {features[1].title}
              </h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                <p>{features[1].description}</p>
                {features[1].listItems && (
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    {features[1].listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
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
              </div>
            </div>

            {/* Casual or Personal Agreements */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all  duration-300"
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
              </div>
            </div>

            {/* Partnership & Project Escrow */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all  duration-300"
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
              </div>
            </div>

            {/* Dispute Resolution */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col justify-evenly rounded-[2rem] p-6 shadow-lg glass card-cyan transition-all  duration-300"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformUseCases;
