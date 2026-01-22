import { useState } from "react";

interface TokenDetail {
  label: string;
  value: string;
}

interface TaxDistribution {
  allocation: string;
  percentage: string;
  purpose: string;
}

interface TokenAllocation {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  gradient: string;
  locked?: boolean;
}

const Tokenomics = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  const tokenDetails: TokenDetail[] = [
    { label: "Token Name", value: "DexCourt" },
    { label: "Ticker", value: "$LAW" },
    { label: "Total Supply", value: "10,000,000" },
    { label: "Decimals", value: "18" },
    { label: "Tax", value: "5% Buy / 5% Sell" },
  ];

  const taxDistribution: TaxDistribution[] = [
    {
      allocation: "Development",
      percentage: "1%",
      purpose: "Ongoing platform development and system maintenance",
    },
    {
      allocation: "Marketing",
      percentage: "2%",
      purpose: "Awareness, partnerships, and growth campaigns",
    },
    {
      allocation: "Revenue to Judges & Voters",
      percentage: "2%",
      purpose:
        "Distributed to active contributors who uphold the ecosystem's fairness",
    },
  ];

  const tokenAllocation: TokenAllocation[] = [
    {
      category: "Liquidity",
      percentage: 50,
      amount: "5,000,000",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      category: "Marketing",
      percentage: 15,
      amount: "1,500,000",
      color: "#3b82f6",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      category: "Judges Incentives",
      percentage: 10,
      amount: "1,000,000",
      color: "#10b981",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      category: "Team",
      percentage: 5,
      amount: "500,000",
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      category: "Future CEX Listing",
      percentage: 20,
      amount: "2,000,000",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-500",
      locked: true,
    },
  ];

  // Fixed Donut Chart Component
  const DonutChart = ({
    data,
    size = 300,
  }: {
    data: TokenAllocation[];
    size?: number;
  }) => {
    const center = size / 2;
    const radius = size * 0.35;
    const strokeWidth = size * 0.12;

    let currentAngle = -90; // Start from top

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          {data.map((item, index) => {
            const angle = (item.percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;

            // Calculate start and end points for the arc
            const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);

            // Large arc flag - 1 if angle is greater than 180, 0 otherwise
            const largeArcFlag = angle > 180 ? 1 : 0;

            // Create the path data for the arc
            const pathData = [
              `M ${center} ${center}`,
              `L ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              "Z",
            ].join(" ");

            currentAngle += angle;

            return (
              <path
                key={item.category}
                d={pathData}
                fill={item.color}
                onMouseEnter={() => setHoveredSlice(index)}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer transition-all duration-300"
                style={{
                  filter:
                    hoveredSlice === index
                      ? `drop-shadow(0 0 12px ${item.color}80)`
                      : "none",
                  opacity:
                    hoveredSlice === null
                      ? 1
                      : hoveredSlice === index
                        ? 1
                        : 0.7,
                }}
              />
            );
          })}

          {/* Center circle */}
          <circle
            cx={center}
            cy={center}
            r={radius - strokeWidth}
            fill="#0f172a"
            className="drop-shadow-lg"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Total</div>
            <div className="text-lg font-semibold text-cyan-400">10M</div>
            <div className="text-sm text-gray-400">$LAW</div>
          </div>
        </div>
      </div>
    );
  };

  // Simplified AllocationCard without hover props
  const AllocationCard = ({
    allocation,
  }: {
    allocation: TokenAllocation;
    index: number;
  }) => {
    return (
      <div className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
        <div className="rounded-[1.4rem] h-full p-6 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: allocation.color }}
              />
              <div className="min-w-0 flex-1">
                <span className="font-semibold text-white text-base truncate block">
                  {allocation.category}
                </span>
                {allocation.locked && (
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full inline-block mt-1">
                    Locked 1 Year
                  </span>
                )}
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-3">
              <div className="text-lg font-bold text-cyan-400">
                {allocation.percentage}%
              </div>
              <div className="text-sm text-gray-300 truncate">
                {allocation.amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section renderers with AOS - Updated to match features section style
  const renderOverview = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tokenDetails.map((detail, index) => (
        <div
          key={detail.label}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
        >
          <div className="rounded-[1.4rem] h-full p-6 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">
              {detail.label}
            </h3>
            <p className="text-2xl font-bold text-white">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTaxDistribution = () => (
    <div>
      <h3
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Tax Distribution <span className="text-cyan-400">(5% Total)</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {taxDistribution.map((tax, index) => (
          <div
            key={tax.allocation}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
            className="web3-corner-border group relative rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="rounded-[1.4rem] h-full p-6 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_#00eaff20] transition-all duration-500 group-hover:shadow-[0_0_70px_#00eaff40]">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {tax.percentage}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {tax.allocation}
                </h4>
              </div>
              <p className="text-gray-300 text-center leading-relaxed">
                {tax.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTokenAllocation = () => (
    <div className="space-y-8">
      {/* Donut Chart */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="flex justify-center mb-8"
      >
        <DonutChart data={tokenAllocation} size={350} />
      </div>

      {/* Allocation Details - Removed data-aos to prevent re-animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {tokenAllocation.map((allocation, index) => (
          <AllocationCard
            key={allocation.category}
            allocation={allocation}
            index={index}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="tokenomics" className="relative py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header - Matching Features Section Style */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="sec text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
          >
            Tokenomics
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            The <span className="text-cyan-400 font-bold">$LAW</span> token
            powers every function of the DexCourt ecosystem — from governance
            and voting to community rewards.
          </p>
        </div>

        {/* Navigation Tabs - Updated Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["overview", "tax", "allocation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 sec rounded-2xl font-semibold transition-all duration-300 ${
                activeSection === tab
                  ? "bg-cyan-500/20 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                  : "bg-gray-800/30 text-gray-300 hover:bg-gray-700/30 border border-gray-600/30"
              }`}
            >
              {tab === "overview" && "Token Overview"}
              {tab === "tax" && "Tax Distribution"}
              {tab === "allocation" && "Token Allocation"}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="min-h-[400px]">
          {activeSection === "overview" && renderOverview()}
          {activeSection === "tax" && renderTaxDistribution()}
          {activeSection === "allocation" && renderTokenAllocation()}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
