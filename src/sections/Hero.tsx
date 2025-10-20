import scale from "../assets/scale.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16 sm:pt-20">
      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 max-w-[1200px] mx-auto w-full">
        <div className="relative z-10 text-white mt-12 flex flex-col gap-y-3 sm:gap-y-4">
          {/* Main heading */}
          <h1 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] hank leading-[1.1] text-center lg:text-left">
            DexCourt
          </h1>
          <h2 className="italic play text-[2.5rem] xs:text-[3rem] sm:text-[4rem] leading-[1.1] mb-4 sm:mb-6 text-cyan-700 text-center lg:text-left">
            Justice for Web3
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-[1.2rem] leading-relaxed text-center lg:text-left">
            DexCourt is a decentralized platform that lets anyone create
            agreements, hold funds in secure escrow, and resolve disputes
            transparently through on-chain voting. It combines blockchain
            enforcement with community-driven justice to ensure fairness,
            accountability, and trust in every deal.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8 mx-auto lg:mx-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[12rem] text-center text-sm sm:text-[1rem] font-bold px-6 sm:px-[24px] py-3 sm:py-[13px] flex items-center justify-center text-white cursor-pointer gap-3 bg-[#0C8CE0] rounded-full hover:bg-[#0a7bc8] transition-colors"
            >
              Launch App
            </a>
            <a
              href="#"
              className="w-[12rem] text-center px-6 sm:px-[24px] py-3 sm:py-[13px] flex items-center justify-center text-white rounded-full border border-cyan-400 hover:bg-cyan-400/10 transition-colors"
            >
              Read Whitepaper
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <img
            src={scale}
            alt="scale"
            className="w-full max-w-[20rem] xs:max-w-[25rem] sm:max-w-[30rem] lg:max-w-[40rem] lg:size-[35rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
