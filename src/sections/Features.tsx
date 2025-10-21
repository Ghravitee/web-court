import { useRef } from "react";
import { Scale, FileText, Wallet, Vote, Users } from "lucide-react";

const features = [
  {
    id: "smart",
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    title: "Smart Agreements",
    description:
      "Create secure on-chain agreements without lawyers or middlemen. Every deal is transparent and verifiable.",
  },
  {
    id: "escrow",
    icon: <Wallet className="w-10 h-10 text-cyan-400" />,
    title: "Decentralized Escrow",
    description:
      "Funds are held safely in smart escrow until agreed conditions are met, ensuring fairness in every transaction.",
  },
  {
    id: "dispute",
    icon: <Scale className="w-8 h-8 text-cyan-400" />,
    title: "Dispute Resolution",
    description:
      "When conflicts arise, verified judges and the community deliver transparent, bias-free verdicts.",
  },
  {
    id: "voting",
    icon: <Vote className="w-8 h-8 text-cyan-400" />,
    title: "On-Chain Voting",
    description:
      "All major decisions are powered by verifiable on-chain votes — balancing expert judgment and community input.",
  },
  {
    id: "reputation",
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Reputation System",
    description:
      "Participants earn or lose reputation based on behavior, creating a lasting trust layer across the ecosystem.",
  },
];

const BentoFeatures = () => {
  const ref = useRef(null);

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Background Glows */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute block size-[20rem] rounded-full bg-cyan-500/20 blur-3xl lg:top-28 lg:right-20 lg:size-[30rem]" />
        <div className="absolute -top-20 -left-6 block rounded-full bg-cyan-500/20 blur-3xl lg:size-[25rem]" />
      </div> */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="lg:text-[2.7rem] text-[2.5rem] font-bold text-center mb-12 hank"
        >
          Core <span className="text-cyan-600 play">Features</span>
        </h2>

        {/* 🧱 Responsive 3-column Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(220px,_1fr)]">
          {/* 1️⃣ Smart Agreements */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg card-cyan glass hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {features[0].icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[0].title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {features[0].description}
            </p>
          </div>

          {/* 2️⃣ Decentralized Escrow (2-row span) */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col justify-center rounded-[2rem] p-8 shadow-lg card-cyan glass hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300 lg:row-span-2"
          >
            {features[1].icon}
            <h3 className="text-[2rem] font-semibold mt-4 mb-3">
              {features[1].title}
            </h3>
            <p className="text-[1.1rem] text-gray-300 leading-relaxed">
              {features[1].description}
            </p>
          </div>

          {/* 3️⃣ Dispute Resolution */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg card-cyan glass hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {features[2].icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[2].title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {features[2].description}
            </p>
          </div>

          {/* 4️⃣ On-Chain Voting */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg card-cyan glass hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {features[3].icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[3].title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {features[3].description}
            </p>
          </div>

          {/* 5️⃣ Reputation System */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col justify-between rounded-[2rem] p-6 shadow-lg card-cyan glass hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {features[4].icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {features[4].title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {features[4].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
