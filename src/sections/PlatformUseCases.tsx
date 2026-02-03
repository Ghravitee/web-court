import { useRef, useState, useEffect } from "react";
import {
  Briefcase,
  Handshake,
  // Building,
  // Scale,
  Star,
  MegaphoneIcon,
  Wrench,
  Users,
  Rocket,
  Building2,
} from "lucide-react";

const features = [
  {
    id: "freelancer",
    icon: <Briefcase className="size-6 lg:size-16 text-cyan-400" />,
    title: "Freelancer & Clients",
    description:
      "DexCourt helps freelancers and clients avoid payment and delivery problems by writing clear agreements and protecting money until the job is done properly.",
    example:
      "Example: \n  A client hires a designer to build a website. The client locks the payment. If the designer finishes the job, the money is released. If they argue, judges check the work and decide fairly.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "influencers",
    icon: <MegaphoneIcon className="size-6 lg:size-16 text-cyan-400" />,
    title: "Influencers & Marketing Deals",
    description:
      "DexCourt makes sure influencers get paid only when they deliver what was agreed, and projects pay only for real results.",
    example:
      "Example: \n  An influencer agrees to post 2 tweets and 1 video. The project locks payment. If there's a dispute, judges check the posts and dates, then decide.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "partnership",
    icon: <Handshake className="size-6 lg:size-16 text-cyan-400" />,
    title: "Partnerships & Co-Founders",
    description:
      "DexCourt helps partners clearly define roles, ownership, and responsibilities so no one can change the story later.",
    example:
      "Example \n  Two founders agree on who builds and who markets. If one later claims more credit unfairly, judges review the agreement and proof.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "Reputation",
    icon: <Star className="size-6 lg:size-16 text-cyan-400" />,
    title: "Reputation Damage & False Accusations",
    description:
      "DexCourt gives people a fair way to respond to false accusations using evidence instead of online fights.",
    example:
      "Example: \n Someone calls you a scammer online. Both sides submit proof. Judges review and decide who is telling the truth.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "Real-world",
    icon: <Wrench className="size-6 lg:size-16 text-cyan-400" />,
    title: "Real-World Services & Cash Deals",
    description:
      "DexCourt allows offline and cash deals to still have accountability using photos, messages, and receipts.",
    example:
      "Example: \n You pay a repair person cash. The job is unfinished. You upload photos and chats. Judges review the evidence and rule.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "local",
    icon: <Users className="size-6 lg:size-16 text-cyan-400" />,
    title: "Local & Neighbor Disputes",
    description:
      "DexCourt helps resolve local conflicts calmly with evidence and neutral decisions.",
    example:
      " Example: \n A neighbor damages your property. Both sides upload photos and messages. Judges review and decide based on facts.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "venture",
    icon: <Rocket className="size-6 lg:size-16 text-cyan-400" />,
    title: "Venture Capital & Founders (Web2 & Web3)",
    description:
      "DexCourt helps investors and founders enforce investment terms, milestones, and accountability without expensive legal fights.",
    example:
      "Example: \n A startup agrees to build a product before getting full funding. If there's a dispute, judges review progress and evidence. Bad actors cannot quietly move to the next deal.",
    exampleColor: "text-cyan-500/90",
  },
  {
    id: "employers",
    icon: <Building2 className="size-6 lg:size-16 text-cyan-400" />,
    title: "Employers, Loan & Insurance Companies",
    description:
      "DexCourt acts as a reputation hub where organizations can review a person's history before trusting them.",
    example:
      "Example: \n An employer checks a candidate's DexCourt profile. They see past agreements, disputes, and whether rulings were respected. Loan and insurance companies can assess risk before approval.",
    exampleColor: "text-cyan-500/90",
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
      className="py-12 md:pt-16 lg:pt-24 text-white relative" // Added overflow-hidden
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

      {/* Desktop Stacked Layout (1024px and above) */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Increased height to accommodate 8 cards - ~125vh per card = 1000vh total */}
        <div className="relative h-[1000vh]">
          {" "}
          {/* Changed from h-[500vh] */}
          {features.map((feature, idx) => {
            const imageRight = idx % 2 === 0;

            return (
              <div
                key={feature.id}
                className="sticky top-0 h-screen flex items-center justify-center"
              >
                <div className="relative rounded-[1.5rem] p-[2px] bg-[#0f0f0f] border border-cyan-300/50 w-full max-w-4xl transition-transform duration-700 mx-4">
                  <div className="relative rounded-[1.5rem] bg-gradient-to-br from-cyan-900/20 to-black/50 backdrop-blur-xl py-5 px-4 lg:px-12 lg:py-8 overflow-hidden h-[400px] lg:h-[300px]">
                    {/* Background Glow */}
                    <div
                      className={`absolute ${
                        imageRight ? "right-0" : "left-0"
                      } top-1/2 -translate-y-1/2 w-96 h-96 `}
                    />
                    {/* Card Content - 30% Icon, 70% Text */}
                    <div
                      className={`relative flex flex-col ${
                        idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-2 md:gap-8 h-full`}
                    >
                      {/* Icon Section (30%) */}
                      <div className="w-full lg:w-3/10 flex lg:justify-center justify-start">
                        <div className="lg:p-6 p-2 rounded-2xl bg-cyan-500/10 border border-cyan-300/50 w-fit flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>

                      {/* Text Content Section (70%) */}
                      <div className="w-full lg:w-7/10 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>

                        <div className="space-y-4 flex-grow flex flex-col">
                          <p className="text-gray-300 text-sm leading-relaxed flex-grow-0">
                            {feature.description}
                          </p>

                          {feature.example && (
                            <div
                              className={`text-xs sm:text-sm leading-relaxed ${feature.exampleColor} font-medium bg-cyan-900/20 p-4 rounded-xl border border-cyan-700/30 flex-grow min-h-[100px] overflow-y-auto`}
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
