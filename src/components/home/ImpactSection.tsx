import React from 'react';
import { Link } from 'react-router-dom';

export const ImpactSection: React.FC = () => {
  return (
    <section
      className="bg-background-1 overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28 lg:pt-14 lg:pb-33 xl:pt-19.5 xl:pb-39"
    >
      <div className="main-container space-y-12 md:space-y-18 lg:space-y-24">
        <div className="mx-auto max-w-[680px] space-y-3 text-center">
          <div data-block-reveal data-delay="0.1" className="inline-block">
            <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_1629_31646_impact)">
                    <path
                      d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1629_31646_impact">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> Sectors We Empower</span>
            </div>
          </div>

          <h2
            data-text-reveal
            data-reveal-delay="0.2"
            className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
          >
            Energy Solutions Built Around Your Business
          </h2>

          <p
            data-text-reveal
            data-reveal-delay="0.3"
            className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
          >
            We provide end-to-end renewable energy solutions tailored to diverse load patterns, roof profiles, and industrial demands.
          </p>

          <div data-block-reveal data-delay="0.4" className="mt-6 md:mt-9">
            <Link to="/contact" className="contents">
              <div
                className="group/button mx-auto max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Consult an Energy Expert
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div
          data-block-reveal
          data-delay="0.1"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          <div
            data-impact-magnetic
            className="ease-bouncy flex size-[250px] flex-col items-center justify-center bg-white p-8 text-center transition-transform duration-500 md:size-[320px] lg:size-[250px] lg:rotate-[-8deg] xl:size-[320px] 2xl:size-[387px]"
          >
            <h3
              className="font-inter-tight text-it-heading-5 font-medium text-black"
            >
              Industries & Manufacturing
            </h3>
            <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal mt-2">
              Heavy power consumers, continuous operations & factory plants
            </p>
          </div>

          <div
            data-impact-magnetic
            className="ease-bouncy bg-background-3 flex size-[250px] flex-col items-center justify-center p-8 text-center transition-transform duration-500 md:size-[320px] lg:size-[250px] lg:-rotate-12 xl:size-[320px] 2xl:size-[387px]"
          >
            <h3
              className="font-inter-tight text-it-heading-5 font-medium text-black"
            >
              Commercial & Hospitals
            </h3>
            <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal mt-2">
              Commercial buildings & critical healthcare facilities
            </p>
          </div>

          <div
            data-impact-magnetic
            className="ease-bouncy flex size-[250px] flex-col items-center justify-center bg-white p-8 text-center transition-transform duration-500 md:size-[320px] lg:size-[250px] lg:rotate-12 xl:size-[320px] 2xl:size-[387px]"
          >
            <h3
              className="font-inter-tight text-it-heading-5 font-medium text-black"
            >
              Warehouses & Institutions
            </h3>
            <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal mt-2">
              Educational campuses, large facilities & distribution centers
            </p>
          </div>

          <div
            data-impact-magnetic
            className="ease-bouncy bg-background-3 flex size-[250px] flex-col items-center justify-center p-8 text-center transition-transform duration-500 md:size-[320px] lg:size-[250px] lg:rotate-[8deg] xl:size-[320px] 2xl:size-[387px]"
          >
            <h3
              className="font-inter-tight text-it-heading-5 font-medium text-black"
            >
              Utility & Residential
            </h3>
            <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal mt-2">
              MW-scale solar farms & premium residential applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
