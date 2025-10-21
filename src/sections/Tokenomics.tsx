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

interface AllocationCardProps {
  allocation: TokenAllocation;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
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

        {/* Interactive labels */}
        {data.map((item, index) => {
          // Calculate position for labels
          let cumulativeAngle = -90;
          for (let i = 0; i < index; i++) {
            cumulativeAngle += (data[i].percentage / 100) * 360;
          }
          const middleAngle = cumulativeAngle + (item.percentage / 100) * 180;
          const labelRadius = radius + 60;
          const x =
            center + labelRadius * Math.cos((middleAngle * Math.PI) / 180);
          const y =
            center + labelRadius * Math.sin((middleAngle * Math.PI) / 180);

          return (
            <div
              key={item.category}
              className={`absolute pointer-events-none transition-all duration-300 ${
                hoveredSlice === index ? "scale-110 z-10" : "scale-100"
              }`}
              style={{
                left: x - 70,
                top: y - 25,
              }}
            >
              <div
                className={`px-3 py-2 rounded-xl backdrop-blur-sm border text-center min-w-[140px] ${
                  hoveredSlice === index
                    ? "bg-gray-900/90 border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-gray-900/70 border-gray-600/50"
                }`}
              >
                <div className="text-xs font-semibold text-white leading-tight">
                  {item.category}
                </div>
                <div className="text-sm font-bold text-cyan-400 mt-1">
                  {item.percentage}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Simple card component for allocation details
  const AllocationCard = ({
    allocation,
    index,
    isHovered,
    onHover,
  }: AllocationCardProps) => {
    return (
      <div
        className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
          isHovered
            ? "bg-gray-800/50 border-cyan-400/50 shadow-lg shadow-cyan-500/10 scale-105"
            : "bg-gray-900/30 border-gray-600/30"
        }`}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: allocation.color }}
            />
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-white text-sm truncate block">
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
            <div className="text-xs text-gray-400 truncate">
              {allocation.amount}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section renderers with AOS
  const renderOverview = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tokenDetails.map((detail, index) => (
        <div
          key={detail.label}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="p-6 rounded-2xl glass card-cyan transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold text-cyan-400">
              {detail.label}
            </h3>
          </div>
          <p className="text-2xl font-bold text-white">{detail.value}</p>
        </div>
      ))}
    </div>
  );

  const renderTaxDistribution = () => (
    <div>
      <h3
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl font-bold hank mb-8 text-center"
      >
        Tax Distribution (5% Total)
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {taxDistribution.map((tax, index) => (
          <div
            key={tax.allocation}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
            className="p-6 rounded-2xl card-cyan glass transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {tax.percentage}
                </div>
                <h4 className="text-lg font-semibold text-white">
                  {tax.allocation}
                </h4>
              </div>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
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

      {/* Allocation Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {tokenAllocation.map((allocation, index) => (
          <AllocationCard
            key={allocation.category}
            allocation={allocation}
            index={index}
            isHovered={hoveredSlice === index}
            onHover={setHoveredSlice}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="tokenomics" className="relative pt-10 px-6 text-white">
      <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center justify-center mb-4"
          >
            <h2 className="lg:text-[2.7rem] text-[2.5rem] font-bold hank">
              Tokenomics
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            The $LAW token powers every function of the DexCourt ecosystem —
            from governance and voting to community rewards.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["overview", "tax", "allocation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeSection === tab
                  ? "bg-cyan-500/15 text-white shadow-lg shadow-cyan-500/10"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
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
