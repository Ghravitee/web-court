import { useRef } from "react";
import Freelancer from "./Freelancer";

const PlatformUseCases = () => {
  const sectionRef = useRef(null);

  return (
    <section id="use-cases" className="pt-16 px-6 text-white" ref={sectionRef}>
      <div className="absolute inset-0 -z-[50] bg-cyan-600/10 blur-3xl"></div>
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

      <Freelancer />
    </section>
  );
};

export default PlatformUseCases;
