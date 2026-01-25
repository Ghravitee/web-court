import { useState, useRef } from "react";

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);

  const phases = [
    {
      title: "Phase 1 — Foundation",
      status: "current",
      items: [
        "Develop and launch the core dApp & website",
        "Publish the whitepaper",
        "Implement off-chain agreement functionality",
        "Deploy escrow agreement module",
        "Onboard verified judges",
        "Launch the $LAW token",
      ],
    },
    {
      title: "Phase 2 — Expansion",
      status: "upcoming",
      items: [
        "Onboard more renowned judges",
        "List $LAW on CoinGecko and other aggregators",
        "Introduce revenue sharing for judges and community voters",
        "Launch governance and voting dashboard",
        "Begin global awareness campaign",
      ],
    },
    {
      title: "Phase 3 — Evolution",
      status: "upcoming",
      items: [
        "Upgrade Dispute Page (evidence uploads, progress tracking, verdict visibility)",
        "Allow disputes without prior agreements (retroactive justice)",
        "Integrate automated dispute resolution based on voting outcomes",
        "Introduce reputation-based ranking for users and judges",
      ],
    },
    {
      title: "Phase 4 — Maturity & Ecosystem Growth",
      status: "upcoming",
      items: [
        "Launch the DexCourt DAO for full community governance",
        "Offer API & SDK integrations for third-party dApps and DAOs",
        "Add cross-chain support (BSC, Polygon, Base, etc.)",
        "Release a mobile-friendly app",
        "Form partnerships with Web3 projects and launchpads for verified deal protection",
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-20 px-6 text-white overflow-hidden relative"
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
            Roadmap
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our journey to revolutionize Web3 justice and dispute resolution
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700/50 transform md:-translate-x-1/2">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-cyan-500 transition-all duration-1000 ease-out"
              style={{
                height: `${(activePhase / (phases.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Phases */}
          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
                onMouseEnter={() => setActivePhase(index)}
                onFocus={() => setActivePhase(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#030008] z-10 transform md:-translate-x-1/2">
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${
                      phase.status === "current"
                        ? "bg-cyan-400 animate-pulse shadow-[0_0_20px_#00ffff]"
                        : index <= activePhase
                          ? "bg-cyan-400 shadow-[0_0_15px_#00ffff80]"
                          : "bg-gray-600"
                    }`}
                  />
                </div>

                {/* Content Card - Web3 Style */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                      phase.status === "current"
                        ? "shadow-[0_0_60px_#00ffff20]"
                        : "shadow-[0_0_40px_#00ffff10]"
                    }`}
                  >
                    <div
                      className={`rounded-[1.4rem] h-full p-8 bg-black/40 backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40] ${
                        phase.status === "current"
                          ? "shadow-[0_0_40px_#00eaff30]"
                          : "shadow-[0_0_20px_#00eaff20]"
                      }`}
                    >
                      {/* Phase Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3
                            className={`sec text-2xl font-bold ${
                              phase.status === "current"
                                ? "text-cyan-400"
                                : "text-white"
                            }`}
                          >
                            {phase.title}
                          </h3>
                          <span
                            className={`text-sm font-semibold ${
                              phase.status === "current"
                                ? "text-cyan-300"
                                : index <= activePhase
                                  ? "text-cyan-400/70"
                                  : "text-gray-400"
                            }`}
                          >
                            {phase.status === "current"
                              ? "In Progress"
                              : "Upcoming"}
                          </span>
                        </div>

                        {/* Status Indicator */}
                        <div
                          className={`w-3 h-3 rounded-full ${
                            phase.status === "current"
                              ? "bg-cyan-400 animate-pulse"
                              : index <= activePhase
                                ? "bg-cyan-400"
                                : "bg-gray-500"
                          }`}
                        />
                      </div>

                      {/* Phase Items */}
                      <ul className="space-y-4">
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-gray-300 leading-relaxed"
                            data-aos="fade-right"
                            data-aos-delay={400 + index * 100 + itemIndex * 50}
                          >
                            <div
                              className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 transition-all duration-300 ${
                                phase.status === "current" ||
                                index <= activePhase
                                  ? "bg-cyan-400 shadow-[0_0_8px_#00ffff]"
                                  : "bg-gray-500"
                              }`}
                            />
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
