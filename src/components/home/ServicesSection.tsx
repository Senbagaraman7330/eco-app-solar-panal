import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const ServicesSection: React.FC = () => {
  return (
    <section className="mx-5 overflow-hidden rounded-4xl bg-white py-20 md:py-28 lg:py-34 xl:py-39">
      <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div className="max-w-[620px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_services)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_services">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Our Core Solutions</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Our Core Solutions
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight max-w-[600px] font-normal"
            >
              From engineering and procurement to installation, commissioning and O&amp;M, we manage your solar project from concept to completion.
            </p>
          </div>

          <div data-block-reveal data-delay="0.3" className="flex justify-start lg:justify-end">
            <Link to="/services" className="contents">
              <div
                className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Explore all solutions
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-6 ">
          {/* services list */}
          <div
            data-services-tabs
            data-block-reveal
            data-delay="0.2"
            className="services-tabs-grid relative"
          >
            <div
              data-services-indicator
              className="bg-background-3 pointer-events-none absolute z-1"
              aria-hidden="true"
            ></div>
            <button
              data-services-list
              data-title="Solar EPC"
              data-description="From engineering and procurement to installation, commissioning and O&M, we manage your solar project from concept to completion."
              data-image={asset('/images/img-5.jpg')}
              data-alt="Solar EPC Solution"
              type="button"
              aria-pressed="true"
              className="relative z-2 flex min-h-[130px] md:min-h-[145px] xl:min-h-[160px] flex-col justify-between gap-y-4 p-5 md:p-7 xl:p-8 text-left cursor-pointer"
            >
              <span className="text-tagline-3 font-pt-mono font-normal text-black">/001</span>
              <span className="text-tagline-1 sm:text-it-heading-5 font-normal text-black">
                Solar EPC
              </span>
            </button>

            <button
              type="button"
              data-services-list
              data-title="On-Grid Solar"
              data-description="Generate power from solar and synchronize with the electricity grid to power connected loads and export surplus energy."
              data-image={asset('/images/img-9.jpg')}
              data-alt="On-Grid Solar Solution"
              aria-pressed="false"
              className="relative z-2 flex min-h-[130px] md:min-h-[145px] xl:min-h-[160px] flex-col justify-between gap-y-4 p-5 md:p-7 xl:p-8 text-left cursor-pointer"
            >
              <span className="text-tagline-3 font-pt-mono font-normal text-black">/002</span>
              <span className="text-tagline-1 sm:text-it-heading-5 text-background-4/60 font-normal">
                On-Grid Solar
              </span>
            </button>

            <button
              type="button"
              data-services-list
              data-title="Off-Grid Solar"
              data-description="Designed for locations where grid access is unavailable, delivering reliable 24/7 autonomous power with high-capacity battery banks."
              data-image={asset('/images/img-7.jpg')}
              data-alt="Off-Grid Solar Solution"
              aria-pressed="false"
              className="relative z-2 flex min-h-[130px] md:min-h-[145px] xl:min-h-[160px] flex-col justify-between gap-y-4 p-5 md:p-7 xl:p-8 text-left cursor-pointer"
            >
              <span className="text-tagline-3 font-pt-mono font-normal text-black">/003</span>
              <span className="text-tagline-1 sm:text-it-heading-5 text-background-4/60 font-normal">
                Off-Grid Solar
              </span>
            </button>

            <button
              data-services-list
              data-title="Hybrid Solar"
              data-description="Combine solar generation, battery energy storage, and grid power into one intelligent ecosystem for uninterrupted backup and tariff savings."
              data-image={asset('/images/img-8.jpg')}
              data-alt="Hybrid Solar Solution"
              type="button"
              aria-pressed="false"
              className="relative z-2 flex min-h-[130px] md:min-h-[145px] xl:min-h-[160px] flex-col justify-between gap-y-4 p-5 md:p-7 xl:p-8 text-left cursor-pointer"
            >
              <span className="text-tagline-3 font-pt-mono font-normal text-black">/004</span>
              <span className="text-tagline-1 sm:text-it-heading-5 text-background-4/60 font-normal">
                Hybrid Solar
              </span>
            </button>

            <button
              data-services-list
              data-title="Battery Energy Storage (BESS)"
              data-description="Utility and industrial-grade battery systems engineered for peak shaving, demand management, tariff arbitrage, and microgrid resilience."
              data-image={asset('/images/img-12.jpg')}
              data-alt="BESS Energy Storage Solution"
              type="button"
              aria-pressed="false"
              className="relative z-2 flex min-h-[130px] md:min-h-[145px] xl:min-h-[160px] flex-col justify-between gap-y-4 p-5 md:p-7 xl:p-8 text-left cursor-pointer"
            >
              <span className="text-tagline-3 font-pt-mono font-normal text-black">/005</span>
              <span className="text-tagline-1 sm:text-it-heading-5 text-background-4/60 font-normal">
                BESS Storage
              </span>
            </button>
          </div>

          {/* service content */}
          <div
            data-block-reveal
            data-delay="0.3"
            className="grid h-[520px] grid-cols-12 gap-3 2xl:h-[616px]"
          >
            <div
              className="bg-background-3 col-span-12 flex min-h-[250px] flex-col justify-between p-8 max-md:order-2 md:col-span-5 md:min-h-[320px] md:p-10.5 lg:col-span-4"
            >
              <div className="space-y-3">
                <h3
                  data-services-list-title
                  data-text-reveal
                  data-reveal-delay="0"
                  className="text-it-heading-4 font-normal text-black"
                >
                  Solar EPC
                </h3>
                <p
                  data-services-list-description
                  data-text-reveal
                  data-reveal-delay="0"
                  className="text-tagline-2 text-background-4/60 font-normal"
                >
                  From engineering and procurement to installation, commissioning and O&amp;M, we manage your solar project from concept to completion.
                </p>
              </div>

              <div className="md:mt-10" data-services-list-button>
                <Link to="/services" className="contents">
                  <div
                    className="group/button after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
                  >
                    <div className="relative z-4 overflow-hidden whitespace-nowrap">
                      <span
                        className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                      >
                        Explore all services
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <figure
              className="relative col-span-12 overflow-hidden max-md:order-1 md:col-span-7 lg:col-span-8"
              data-services-list-image
            >
              <img
                src={asset('/images/img-5.jpg')}
                alt="Solar EPC Solution"
                className="size-full object-cover"
              />
              <span
                data-services-image-cover
                className="bg-background-3 pointer-events-none absolute inset-0 z-2 origin-bottom scale-y-0"
              ></span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
