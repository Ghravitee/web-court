import { useEffect } from "react";
import {
  Shield,
  FileText,
  Lock,
  Scale,
  Vote,
  Zap,
  AlertCircle,
  ThumbsUp,
  Gem,
  Coins,
  CheckCircle,
  Search,
  Camera,
  Gavel,
  ShieldCheck,
  Landmark,
  Building,
} from "lucide-react";

import draft from "../assets/draft.webp";
import lawsuit from "../assets/lawsuit.webp";
import lock from "../assets/lock.webp";
import jury from "../assets/jury.webp";
import stalk from "../assets/stalk.webp";
import { TiCancel } from "react-icons/ti";
import logo from "../assets/DexCourt-logo.webp";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const DumbedDownPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative pt-16 md:pt-28 pb-8 md:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Fun Background Elements - Adjusted for mobile */}
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        className="absolute top-10 left-2 md:left-10 w-24 h-24 md:w-40 md:h-40 bg-cyan-500/10 rounded-full blur-3xl"
      ></div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="absolute bottom-10 right-2 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-purple-500/10 rounded-full blur-3xl"
      ></div>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="absolute top-1/2 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-yellow-500/5 rounded-full blur-3xl"
      ></div>

      <div className="relative z-10 mt-10 sm:mt-2">
        {/* Header Section - Mobile optimized */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-6 px-3 md:px-6 py-2 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
          >
            <span className="text-sm md:text-2xl font-bold text-white">
              Explaining DexCourt to a Really Dumb Person
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="sec text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-white max-w-full md:max-w-[40rem] mx-auto"
          >
            DexCourt is basically an{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              online court
            </span>{" "}
            for degens.
          </h1>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="inline-flex items-start gap-2 md:gap-4 px-3 md:px-6 py-2 md:py-3 rounded-full bg-green-500/10 border border-green-500/30 mb-4 md:mb-8 max-w-full"
          >
            <AlertCircle className="w-4 h-4 md:w-6 md:h-6 text-green-400 mt-1 flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base text-white font-semibold text-left">
              It exists so people stop saying "bro trust me" and then
              disappearing into the blockchain abyss.
            </p>
          </div>
        </div>
        {/* Main Content */}
        <div className="space-y-6 md:space-y-12">
          {/* What DexCourt Is - Mobile responsive grid */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="max-w-4xl mx-auto py-2 md:pb-10"
          >
            <div className="rounded-xl md:rounded-3xl p-3 md:p-6 lg:p-8">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-cyan-500/20">
                  <Shield className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  On DexCourt, you can
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Left column */}
                <div className="space-y-4 lg:col-span-2 lg:col-start-1 lg:col-end-3">
                  {/* Draft Agreements */}
                  <div
                    data-aos="flip-left"
                    data-aos-delay="400"
                    className="relative overflow-hidden"
                  >
                    <div className="flex items-start p-3 md:p-4 rounded-xl bg-gradient-to-br from-green-500/30 to-black/50 border border-green-500/30 z-20 relative min-h-[90px] md:min-h-[120px]">
                      <div className="ml-2 md:ml-3">
                        <h3 className="font-bold text-white text-sm md:text-lg">
                          Draft and sign agreements with anyone
                        </h3>
                        <p className="text-gray-300 text-xs md:text-base">
                          Even for real life events
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-20 md:size-32 lg:size-40 flex items-center justify-center z-0 opacity-80">
                      <img
                        src={draft}
                        alt="Draft documents"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Lock Money */}
                  <div
                    data-aos="flip-left"
                    data-aos-delay="500"
                    className="relative overflow-hidden"
                  >
                    <div className="flex items-start p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/30 to-black/50 border border-blue-500/30 z-20 relative min-h-[90px] md:min-h-[120px]">
                      <div className="ml-2 md:ml-3">
                        <h3 className="font-bold text-white text-sm md:text-lg">
                          Lock Money in escrow
                        </h3>
                        <p className="text-gray-300 text-xs md:text-base">
                          So nobody runs away
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-20 md:size-32 lg:size-40 flex items-center justify-center z-0 opacity-80">
                      <img
                        src={lock}
                        alt="Lock"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-4 lg:col-span-2 lg:col-start-3 lg:col-end-5">
                  {/* Sue People */}
                  <div
                    data-aos="flip-right"
                    data-aos-delay="400"
                    className="relative overflow-hidden"
                  >
                    <div className="flex items-start p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/30 to-black/50 border border-purple-500/30 z-20 relative min-h-[90px] md:min-h-[120px]">
                      <div className="ml-2 md:ml-3">
                        <h3 className="font-bold text-white text-sm md:text-lg">
                          Sue People
                        </h3>
                        <p className="text-gray-300 text-xs md:text-base">
                          When they move mad
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-20 md:size-32 lg:size-40 flex items-center justify-center z-0 opacity-80">
                      <img
                        src={lawsuit}
                        alt="Lawsuit"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Be a Jury */}
                  <div
                    data-aos="flip-right"
                    data-aos-delay="500"
                    className="relative overflow-hidden"
                  >
                    <div className="flex items-start p-3 md:p-4 rounded-xl bg-gradient-to-br from-yellow-500/30 to-black/50 border border-yellow-500/30 z-20 relative min-h-[90px] md:min-h-[120px]">
                      <div className="ml-2 md:ml-3">
                        <h3 className="font-bold text-white text-sm md:text-lg">
                          Vote on disputes
                        </h3>
                        <p className="text-gray-300 text-xs md:text-base">
                          like a Web3 jury
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-20 md:size-32 lg:size-40 flex items-center justify-center z-0 opacity-80">
                      <img
                        src={jury}
                        alt="Jury"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Stalk Reputation legally */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="relative overflow-hidden lg:col-span-2 lg:col-start-2 lg:col-end-4 mt-4 lg:mt-0"
                >
                  <div className="flex items-start p-3 md:p-4 rounded-xl bg-gradient-to-br from-orange-500/30 to-black/50 border border-orange-500/30 z-20 relative min-h-[90px] md:min-h-[120px]">
                    <div className="ml-2 md:ml-3">
                      <h3 className="font-bold text-white text-sm md:text-lg">
                        Build your reputation
                      </h3>
                      <p className="text-gray-300 text-xs md:text-base">
                        Stalk other people's reputation (legally)
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-20 md:size-32 lg:size-40 flex items-center justify-center z-0 opacity-80">
                    <img
                      src={stalk}
                      alt="Stalk"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why You Need This - Mobile responsive */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4"
          >
            {/* Header / Content */}
            <div className="p-3 md:p-6 lg:p-8 flex flex-col items-center gap-3 md:gap-2">
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-2 md:gap-2 mb-2 md:mb-2"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-red-500/20">
                  <Zap className="w-5 h-5 md:w-8 md:h-8 text-red-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white text-left">
                  Why Does a Degenerate Even Need This Thing?
                </h2>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-base sm:text-lg md:text-2xl font-bold text-center text-white px-2"
              >
                Because humans lie. And degens lie professionally.
              </p>
            </div>
          </div>

          {/* Features in Detail - Mobile responsive */}
          <div className="space-y-20 lg:space-y-28 relative">
            {/* Agreements */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative bg-gradient-to-br from-green-500/30 to-black/50 p-4 md:p-6 border border-green-500/30 rounded-xl md:rounded-3xl max-w-4xl mx-auto"
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="400"
                className="font-bold num one absolute -right-[15%] -top-[2%] sm:-top-[10%] md:-top-[10%] lg:-top-[10%]"
              >
                01
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-green-500/20">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Draft/Sign Agreements (Because "Trust Me" Is a Scam)
                </h2>
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-white text-sm md:text-base max-w-full md:max-w-[40rem] mx-auto mb-3 md:mb-4 text-center"
              >
                Verbal agreements are cute. They're also useless. DexCourt lets
                you write down what both of you agreed to, sign it, and keep it
                somewhere public so nobody can start rewriting history later.
                And no — this isn't just for online stuff.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                <div
                  data-aos="flip-left"
                  data-aos-delay="700"
                  className="bg-gradient-to-br from-green-500/10 to-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-green-500/30"
                >
                  <h3 className="sec text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Real-Life Example (Touch Grass Version)
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    Buying a used car? Dealer says "engine guaranteed for 1
                    year"?
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    Cool story bro.
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    Instead of nodding like a fool, you:
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="800"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm">1</span>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        Draft agreement on DexCourt
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="900"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm">2</span>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        Tag his Telegram/X handle
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <span className="text-white text-sm md:text-base">
                        Both sign it
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className="text-white text-sm md:text-base mb-3 md:mb-4 font-medium"
                  >
                    Now if the engine dies in 3 months and he suddenly develops
                    amnesia, you have receipts. If things go sideways, you raise
                    a dispute and let unbiased judges and community members
                    review what actually happened.
                  </p>
                  <h3
                    data-aos="fade-left"
                    data-aos-delay="800"
                    className="font-bold text-white text-base md:text-lg mb-2"
                  >
                    You can upload
                  </h3>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="900"
                    className="p-3 md:p-4 rounded-xl bg-black/50 border border-green-500/20"
                  >
                    <div className="space-y-2 md:space-y-3">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="1000"
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-sm">1</span>
                        </div>
                        <span className="text-white text-sm md:text-base">
                          Chats
                        </span>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-delay="1100"
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-sm">2</span>
                        </div>
                        <span className="text-white text-sm md:text-base">
                          Images
                        </span>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-delay="1200"
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-sm">3</span>
                        </div>
                        <span className="text-white text-sm md:text-base">
                          Receipts
                        </span>
                      </div>
                      <div
                        data-aos="fade-left"
                        data-aos-delay="1300"
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-sm">4</span>
                        </div>
                        <span className="text-white text-sm md:text-base">
                          Any evidence that proves you're not lying through your
                          teeth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Escrow */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative bg-gradient-to-br from-blue-500/30 to-black/50 p-4 md:p-6 border border-blue-500/30 rounded-xl md:rounded-3xl max-w-4xl mx-auto"
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="400"
                className="font-bold num two absolute -left-[20%] -top-[20%] sm:-top-[10%] md:-top-[10%] lg:-top-[10%] z-0"
              >
                02
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-40"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-blue-500/20">
                  <Lock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Secure Funds in Escrow (Stop Paying Strangers Upfront)
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 relative z-40">
                <div className="flex-1 w-full">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/50 border border-blue-500/30 mb-4 md:mb-6"
                  >
                    <p className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
                      Let's be honest — you don't even trust yourself.
                    </p>
                    <p className="text-base md:text-lg text-gray-300">
                      So why are you trusting another random degen with your
                      money?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div
                      data-aos="flip-left"
                      data-aos-delay="700"
                      className="bg-gradient-to-br from-blue-500/10 to-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-500/30"
                    >
                      <h3 className="sec text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 text-center">
                        With DexCourt escrow:
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <div
                          data-aos="fade-right"
                          data-aos-delay="800"
                          className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-black/30 rounded-lg"
                        >
                          <TiCancel className="size-6 md:size-8 text-red-400 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm md:text-base">
                              You don't pay upfront
                            </h4>
                          </div>
                        </div>
                        <div
                          data-aos="fade-right"
                          data-aos-delay="900"
                          className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-black/30 rounded-lg"
                        >
                          <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm md:text-base">
                              Funds are locked safely
                            </h4>
                          </div>
                        </div>
                        <div
                          data-aos="fade-right"
                          data-aos-delay="1000"
                          className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-black/30 rounded-lg"
                        >
                          <ThumbsUp className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-white text-sm md:text-base">
                              Money is released only after the job is done
                              properly
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="flip-right"
                      data-aos-delay="700"
                      className="p-4 md:p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
                    >
                      <h3 className="sec text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                        This Protects:
                      </h3>
                      <div className="space-y-2 md:space-y-3">
                        <div
                          data-aos="fade-left"
                          data-aos-delay="800"
                          className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0" />
                            <p className="text-gray-300 text-sm md:text-base">
                              Clients from being rugged
                            </p>
                          </div>
                        </div>
                        <div
                          data-aos="fade-left"
                          data-aos-delay="900"
                          className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0" />
                            <p className="text-gray-300 text-sm md:text-base">
                              service providers from nightmare clients who say
                              "Just add one more thing... and another... and
                              another..."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Added content exactly as requested */}
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-black/50 border border-blue-500/30"
                  >
                    <div className="text-center mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-bold text-white">
                        Everything is written clearly:
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                      <div
                        data-aos="fade-up"
                        data-aos-delay="1100"
                        className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center"
                      >
                        <h4 className="text-base md:text-xl font-bold text-white mb-2">
                          Scope
                        </h4>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="1200"
                        className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center"
                      >
                        <h4 className="text-base md:text-xl font-bold text-white mb-2">
                          Timeline
                        </h4>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="1300"
                        className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center"
                      >
                        <h4 className="text-base md:text-xl font-bold text-white mb-2">
                          Deliverables
                        </h4>
                      </div>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="1400"
                      className="text-center"
                    >
                      <p className="text-lg md:text-xl font-bold text-white mb-2">
                        No stories. No vibes. No gaslighting.
                      </p>
                      <p className="text-base md:text-lg text-blue-300 font-bold">
                        Both sides are protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disputes */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative bg-gradient-to-br from-purple-500/30 to-black/50 p-4 md:p-6 border border-purple-500/30 rounded-xl md:rounded-3xl max-w-4xl mx-auto"
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="400"
                className="font-bold num three absolute -right-[15%] -top-[20%] sm:-top-[10%] md:-top-[10%] lg:-top-[10%] z-0"
              >
                03
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-purple-500/20">
                  <Scale className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Raise a Dispute (This Is Where It Gets Fun😈)
                </h2>
              </div>

              <div className="mb-6 md:mb-8">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-3 md:mb-4"
                >
                  <p className="text-base md:text-xl font-bold text-white">
                    This is the spicy part.
                  </p>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-lg md:text-xl font-bold text-white"
                >
                  You can raise a dispute for:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className="space-y-3 md:space-y-4">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="800"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-700/20 to-black/50 border border-purple-500/30"
                    >
                      <p className="text-white font-bold text-sm md:text-base">
                        Being rugged
                      </p>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="900"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-700/20 to-black/50 border border-purple-500/30"
                    >
                      <p className="text-white font-bold text-sm md:text-base">
                        Being defamed
                      </p>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1000"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-700/20 to-black/50 border border-purple-500/30"
                    >
                      <p className="text-white font-bold text-sm md:text-base">
                        Any nonsense that damages your reputation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="800"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-700/20 to-black/50 border border-purple-500/30"
                    >
                      <p className="text-white font-bold text-sm md:text-base">
                        Someone stealing your telegram group chat cuz you were
                        dumb enough to make him admin
                      </p>
                    </div>

                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-700/20 to-black/50 border border-purple-500/30"
                    >
                      <p className="text-white font-bold text-sm md:text-base">
                        Someone spreading nonsense about you in a Telegram group
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  className="mt-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                >
                  <p className="text-base md:text-lg text-white text-center">
                    Telegram and X are full of drama. Why not take the drama to
                    court?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                <div
                  data-aos="flip-left"
                  data-aos-delay="1200"
                  className="bg-gradient-to-br from-purple-500/10 to-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-500/30"
                >
                  <h3 className="sec text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Real-Life Drama Example:
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-3">
                    Your neighbor keeps throwing trash in front of your door to
                    annoy you?
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1300"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <Search className="size-4 md:size-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white text-sm md:text-base">
                        Get his Telegram/X handle
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1400"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <Scale className="size-4 md:size-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white text-sm md:text-base">
                        Open case on DexCourt
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1500"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <Camera className="size-4 md:size-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white text-sm md:text-base">
                        Upload evidence
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1600"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <Camera className="size-4 md:size-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white text-sm md:text-base">
                        He Uploads his own evidence and defends himself.
                      </span>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-delay="1700"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg"
                    >
                      <Gavel className="size-4 md:size-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white text-sm md:text-base">
                        Now it's Web3 Judge Judy time.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div
                    data-aos="flip-right"
                    data-aos-delay="1200"
                    className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/50 border border-purple-500/30"
                  >
                    <h3 className="font-bold text-white text-lg md:text-xl mb-2 md:mb-3">
                      What Happens Next:
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-gray-300">
                      <li
                        data-aos="fade-left"
                        data-aos-delay="1300"
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Judges and community review everything
                        </span>
                      </li>
                      <li
                        data-aos="fade-left"
                        data-aos-delay="1400"
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          They give a verdict
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Added the new div below "What happens next?" */}
                  <div
                    data-aos="fade-up"
                    data-aos-delay="1500"
                    className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-black/50 border border-purple-500/30"
                  >
                    <p className="text-lg md:text-2xl font-bold text-white text-center">
                      No vibes
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="1600"
                    className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-black/50 border border-purple-500/30"
                  >
                    <p className="text-lg md:text-2xl font-bold text-white text-center">
                      No mob justice.
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="1700"
                    className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-black/50 border border-purple-500/30"
                  >
                    <p className="text-lg md:text-2xl font-bold text-white text-center">
                      Just facts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Voting */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative bg-gradient-to-br from-yellow-500/30 to-black/50 p-4 md:p-6 border border-yellow-500/30 rounded-xl md:rounded-3xl max-w-4xl mx-auto"
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="400"
                className="font-bold num four absolute -left-[20%] -top-[20%] sm:-top-[10%] md:-top-[10%] lg:-top-[15%] z-0"
              >
                04
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-yellow-500/20">
                  <Vote className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Vote on Disputes (Stop Watching, Start Judging)
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                <div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-gray-300 text-sm md:text-lg mb-4 md:mb-6"
                  >
                    Instead of just scrolling drama threads, you can actually
                    <span className="font-bold"> participate.</span> Hold some
                    <span className="font-bold"> $LAW</span>, review evidence,
                    vote on real cases.
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    <div
                      data-aos="flip-left"
                      data-aos-delay="700"
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-yellow-700/20 to-black/50 border border-yellow-500/30"
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <Gavel className="size-6 md:size-8 text-yellow-400 flex-shrink-0" />
                        <h3 className="font-bold text-white text-base md:text-lg">
                          Become a Judge
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">
                        If you're reputable and knowledgeable, you can even
                        apply to become a
                        <span className="font-bold"> judge</span>. Judges' votes
                        carry more weight than normal community votes!
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-delay="700"
                  className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-yellow-700/20 to-black/50 border border-yellow-500/30"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Gem className="size-5 md:size-6 text-cyan-400 flex-shrink-0" />
                    <h3 className="font-bold text-white text-base md:text-lg">
                      And no, you can't Buy Votes
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    Judges are random and vetted. Community voters are diverse.
                    Even if you vote for your friend, others will{" "}
                    <span className="font-bold"> balance it out.</span>
                  </p>

                  <div className="space-y-2 mt-2">
                    <h3
                      data-aos="fade-up"
                      data-aos-delay="800"
                      className="text-white mb-2 sec font-bold text-sm md:text-base"
                    >
                      This isn't:
                    </h3>
                    <div data-aos="zoom-in" data-aos-delay="900" className="">
                      <p className="text-base md:text-lg font-bold text-red-700 text-center">
                        "He's my guy, free him."
                      </p>
                    </div>
                    <h3
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="text-white mb-2 sec font-bold text-sm md:text-base"
                    >
                      It's:
                    </h3>
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="1100"
                      className="text-base md:text-lg font-bold text-green-700 text-center"
                    >
                      "Show evidence or sit down."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reputation System */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative max-w-4xl mx-auto bg-gradient-to-br from-orange-500/30 to-black/50 p-4 md:p-6 border border-orange-500/30 rounded-xl md:rounded-3xl"
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="400"
                className="font-bold num five absolute -right-[15%] -top-[20%] sm:-top-[10%] md:-top-[10%] lg:-top-[10%] z-0"
              >
                05
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex items-center gap-3 md:gap-4 mb-2"
              >
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-orange-500/20">
                  <Coins className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
                </div>
                <h2 className="sec text-lg sm:text-xl md:text-3xl font-bold text-white">
                  Reputation Tracker (How DexCourt Actually Enforces Stuff)
                </h2>
              </div>

              <div className="mb-3 md:mb-4">
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="text-lg md:text-2xl font-bold text-white text-center mb-2"
                >
                  Now the big question:
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-base md:text-xl font-bold text-white text-center mb-3 md:mb-4"
                >
                  <span className="text-2xl md:text-4xl">👉 </span>"What if it's
                  an offline case and nobody used escrow?"
                </p>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 md:gap-4">
                <div
                  data-aos="flip-left"
                  data-aos-delay="800"
                  className="space-y-2 md:space-y-3 bg-gradient-to-br from-orange-500/10 to-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-500/30"
                >
                  <h3 className="text-base md:text-xl sec text-white">
                    Simple. DexCourt hits people where it hurts most: their
                    reputation.
                  </h3>
                  <div
                    data-aos="fade-right"
                    data-aos-delay="900"
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg w-full md:w-fit"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-sm">1</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      Lose a case → reputation drops
                    </span>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg w-full md:w-fit"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-sm">2</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      Ignore a ruling → reputation drops harder
                    </span>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-delay="1100"
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-black/30 rounded-lg w-full md:w-fit"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-sm">3</span>
                    </div>
                    <span className="text-white text-sm md:text-base">
                      Get listed under Ignored Rulings → everyone sees it
                    </span>
                  </div>

                  <div className="rounded-xl">
                    <p className="text-white text-sm md:text-base">
                      If DexCourt becomes mainstream, reputation becomes
                      currency. You don't comply? Congrats — you're officially
                      <span className="font-bold"> that guy</span>
                    </p>
                  </div>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-delay="800"
                  className="bg-gradient-to-br from-orange-500/10 to-black/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-500/30"
                >
                  <p className="text-gray-300 text-sm md:text-lg mb-3">
                    DexCourt becomes a public reputation database. Imagine:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className="p-3 md:p-4 rounded-lg bg-black/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="size-6 md:size-8 text-orange-400 flex-shrink-0" />
                        <h2 className="text-white font-bold text-center text-sm md:text-base">
                          Insurance Companies
                        </h2>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm pl-6 md:pl-7">
                        Checking before insuring someone
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="1000"
                      className="p-3 md:p-4 rounded-lg bg-black/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Landmark className="size-6 md:size-8 text-orange-400 flex-shrink-0" />
                        <h2 className="text-white font-bold text-center text-sm md:text-base">
                          Loan Agencies
                        </h2>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm pl-6 md:pl-7">
                        Checking if you're a serial defaulter
                      </p>
                    </div>
                    <div
                      data-aos="fade-left"
                      data-aos-delay="1100"
                      className="p-3 md:p-4 rounded-lg bg-black/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="size-6 md:size-8 text-orange-400 flex-shrink-0" />
                        <h2 className="text-white font-bold text-center text-sm md:text-base">
                          Employers
                        </h2>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm pl-6 md:pl-7">
                        Checking if you're a known scammer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Summary Section - Mobile responsive */}
        {/* Summary Section - Mobile responsive */}
        {/* Summary Section */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-8 md:mt-16">
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <div className="">
              <img src={logo} alt="" className="size-14" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white text-center">
              In Short (For Very Dumb People), DexCourt is:
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <ul className="space-y-3 md:space-y-4">
              <li
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  A court
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="600"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  An escrow
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="700"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  A contract system
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="800"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  A reputation tracker
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="900"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  A drama containment unit
                </span>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="1000"
                className="flex items-center"
              >
                <span className="text-cyan-400 text-xl md:text-2xl font-bold mr-3">
                  •
                </span>
                <span className="text-white text-lg md:text-xl font-bold">
                  All rolled into one
                </span>
              </li>
            </ul>

            <div
              data-aos="zoom-in"
              data-aos-delay="1100"
              className="mt-8 md:mt-12 p-4 md:p-6"
            >
              <p className="text-lg md:text-2xl font-bold text-white text-center leading-relaxed">
                It makes sure your word means something, your actions follow
                you, and nonsense has consequences.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700/50"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-500/50 shadow-lg">
              <Scale className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <span className="text-base md:text-lg font-bold text-white">
                Welcome to Web3, but with accountability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DumbedDownPage;
