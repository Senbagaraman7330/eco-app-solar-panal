import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div className="max-w-[660px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_features)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_features">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> System Capabilities</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Reliable Power. Engineered for Performance.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              Our solar and BESS systems are engineered to provide maximum uptime, lower electricity bills, and clean energy resilience.
            </p>
          </div>

          <div data-block-reveal data-delay="0.3" className="flex justify-start lg:justify-end">
            <Link to="/contact" className="contents">
              <div
                className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Request Free Assessment
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid min-h-[764px] grid-cols-12 gap-3">
          <div className="col-span-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-6">
            <div
              className="bg-background-3 flex min-h-[250px] flex-col justify-between p-7 md:p-10.5"
              data-block-reveal
              data-delay="0.1"
            >
              <div
                className="shadow-8 relative flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)"
              >
                <span className="ns-shape-1 text-[32px] text-white"></span>
                <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                <div
                  className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"
                ></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Solar EPC</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  From engineering and procurement to installation, commissioning and O&M, we manage your solar project from concept to completion.
                </p>
              </div>
            </div>

            <div
              className="bg-white flex min-h-[250px] flex-col justify-between p-7 md:p-10.5"
              data-block-reveal
              data-delay="0.2"
            >
              <div
                className="shadow-8 relative flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)"
              >
                <span className="ns-shape-2 text-[32px] text-white"></span>
                <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                <div
                  className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"
                ></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">On-Grid Solar</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Generate power from solar and use the grid as part of your energy ecosystem for maximum tariff savings.
                </p>
              </div>
            </div>

            <div
              className="bg-white flex min-h-[250px] flex-col justify-between p-7 md:p-10.5"
              data-block-reveal
              data-delay="0.3"
            >
              <div
                className="shadow-8 relative flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)"
              >
                <span className="ns-shape-3 text-[32px] text-white"></span>
                <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                <div
                  className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"
                ></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Off-Grid Solar</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Designed for locations where reliable grid access is limited or complete energy independence is a priority.
                </p>
              </div>
            </div>

            <div
              className="bg-background-3 flex min-h-[250px] flex-col justify-between p-7 md:p-10.5"
              data-block-reveal
              data-delay="0.4"
            >
              <div
                className="shadow-8 relative flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)"
              >
                <span className="ns-shape-4 text-[32px] text-white"></span>
                <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                <div
                  className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"
                ></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">BESS Energy Storage</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Store energy when it is available and use it when it delivers the greatest operational or economic value.
                </p>
              </div>
            </div>
          </div>

          <figure data-block-reveal data-delay="0.3" className="col-span-12 md:col-span-6">
            <img
              src={asset('/images/img-8.jpg')}
              alt="Engineered solar and BESS energy facility"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
