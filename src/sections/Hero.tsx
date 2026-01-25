const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 py-16 sm:py-20 bg-black">
      {/* Enhanced Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-purple-900/30"></div>

      {/* Major Glow Orbs - Responsive Sizes */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-[35rem] lg:h-[35rem] bg-cyan-500/25 rounded-full blur-3xl animate-glow-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-72 sm:h-72 lg:w-[32rem] lg:h-[32rem] bg-purple-500/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-400/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Animated Grid with Glow - Responsive Size */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Glowing Justice Scale - Responsive */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-[29%] sm:top-[37%] lg:top-[40%] xl:top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Scale Beam with Glow - Responsive Width */}
            <div className="w-48 sm:w-64 lg:w-80 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00ffff] sm:shadow-[0_0_30px_#00ffff] mx-auto"></div>
            {/* Scale Stand with Glow - Responsive Height */}
            <div className="w-0.5 h-28 sm:h-40 lg:h-44 bg-gradient-to-b from-cyan-400/80 to-cyan-400/30 shadow-[0_0_15px_#00ffff] sm:shadow-[0_0_20px_#00ffff] mx-auto"></div>
            {/* Scale Base with Glow - Responsive */}
            <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-cyan-400/60 shadow-[0_0_10px_#00ffff] sm:shadow-[0_0_15px_#00ffff] mx-auto sm:mt-0 lg:mt-0"></div>
          </div>
        </div>

        {/* Glowing Blockchain Nodes - Responsive Sizes */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00ffff] sm:shadow-[0_0_30px_#00ffff,0_0_60px_#00ffff] lg:shadow-[0_0_40px_#00ffff,0_0_80px_#00ffff] animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00ffff] sm:shadow-[0_0_30px_#00ffff,0_0_60px_#00ffff] lg:shadow-[0_0_40px_#00ffff,0_0_80px_#00ffff] animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-2/5 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-cyan-300 rounded-full shadow-[0_0_15px_#67e8f9] sm:shadow-[0_0_20px_#67e8f9,0_0_40px_#67e8f9] lg:shadow-[0_0_30px_#67e8f9,0_0_60px_#67e8f9] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-2/5 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-cyan-300 rounded-full shadow-[0_0_15px_#67e8f9] sm:shadow-[0_0_20px_#67e8f9,0_0_40px_#67e8f9] lg:shadow-[0_0_30px_#67e8f9,0_0_60px_#67e8f9] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Glowing Connection Lines - Hide on mobile */}
        <svg
          className="absolute inset-0 w-full h-full hidden sm:block"
          style={{ opacity: 0.6 }}
        >
          <line
            x1="33%"
            y1="33%"
            x2="50%"
            y2="50%"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            strokeDasharray="4"
          />
          <line
            x1="67%"
            y1="33%"
            x2="50%"
            y2="50%"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            strokeDasharray="4"
          />
          <line
            x1="25%"
            y1="60%"
            x2="50%"
            y2="50%"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            strokeDasharray="4"
          />
          <line
            x1="75%"
            y1="60%"
            x2="50%"
            y2="50%"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            strokeDasharray="4"
          />
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Enhanced Data Streams with Glow - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00ffff] sm:shadow-[0_0_20px_#00ffff] animate-data-stream"
            style={{
              top: `${15 + i * 20}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: "3s",
            }}
          ></div>
        ))}
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="max-w-6xl mx-auto w-full relative z-10 px-2 sm:px-4">
        <div className="text-center">
          {/* Enhanced Web3 Justice Branding */}
          <div className="mb-8 sm:mb-12">
            {/* Enhanced Main Title with Mega Glow - Responsive */}
            <div className="relative mb-4 sm:mb-6">
              <h1 className="sec text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent tracking-wide relative z-10">
                DEXCOURT
              </h1>
              {/* Mega Text Glow - Responsive */}
              <div className="absolute inset-0 text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-black bg-gradient-to-r from-cyan-400/50 via-cyan-300/40 to-cyan-400/50 bg-clip-text text-transparent blur-xl sm:blur-2xl lg:blur-3xl opacity-70 -z-10 tracking-tight"></div>
            </div>

            {/* Glowing Badge - Responsive */}
            <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-cyan-500/20 border border-cyan-400/40 sm:border-2 sm:border-cyan-400/60 mb-6 sm:mb-8 backdrop-blur-sm sm:backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] sm:shadow-[0_0_40px_rgba(34,211,238,0.4)] lg:shadow-[0_0_60px_rgba(34,211,238,0.4)]">
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00ffff] sm:shadow-[0_0_15px_#00ffff] lg:shadow-[0_0_25px_#00ffff]"></div>
              <span className="text-cyan-200 font-semibold sm:font-bold text-sm sm:text-lg lg:text-xl uppercase tracking-wide sm:tracking-widest">
                JUSTICE FOR WEB3
              </span>
            </div>
          </div>

          {/* Paragraph - Responsive */}
          <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto text-center mb-4 sm:mb-12">
            DexCourt is a decentralized platform that lets anyone create
            agreements, hold funds in secure escrow, and resolve disputes
            transparently through on-chain voting. It combines blockchain
            enforcement with community-driven justice to ensure fairness,
            accountability, and trust in every deal.
          </p>

          {/* Buttons - Fully Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://dev-app.dexcourt.com/"
              className="group relative w-full sm:w-36 lg:w-48 xl:w-56 flex items-center justify-center px-4 sm:px-6 py-3 sm:py-2 bg-cyan-500/30 border border-cyan-400/50 sm:border-2 sm:border-cyan-400/70 rounded-xl sm:rounded-2xl lg:rounded-3xl text-cyan-100 font-semibold sm:text-lg transition-all duration-300 hover:bg-cyan-500/40  hover:scale-105 sm:hover:scale-110 backdrop-blur-sm sm:backdrop-blur-2xl"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-cyan-400/20 sm:bg-cyan-400/40 blur-md sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Launch App</span>
            </a>

            <a
              href="#"
              className="group relative w-full sm:w-36 lg:w-48 xl:w-56 flex items-center justify-center px-4 sm:px-6 py-3 sm:py-2 border border-gray-600 sm:border-2 sm:border-cyan-400/40 rounded-xl sm:rounded-2xl lg:rounded-3xl text-white font-semibold sm:font-bold sm:text-lg transition-all duration-300 hover:border-cyan-400/60 sm:hover:border-cyan-400/90 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] sm:hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 backdrop-blur-sm sm:backdrop-blur-2xl"
            >
              <span className="flex items-center gap-2 sm:gap-4">
                Read Whitepaper
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
