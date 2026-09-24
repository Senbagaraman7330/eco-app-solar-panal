import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-background-1 py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="main-container">
        <div
          className="grid grid-cols-12 justify-between gap-y-16 lg:gap-x-16 xl:gap-x-20"
          data-stack-card-wrapper
        >
          {/* content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="max-w-[560px] space-y-3 lg:sticky lg:top-28">
              <div data-block-reveal data-delay="0.1" className="inline-block">
                <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1629_31646_proj)">
                        <path
                          d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1629_31646_proj">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span> Projects & Track Record</span>
                </div>
              </div>

              <h2
                data-text-reveal
                data-reveal-delay="0.2"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
              >
                KW to MW-Scale Solar & Storage Projects
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
              >
                From industrial rooftops to MW-scale ground plants and high-performance battery storage systems, our projects deliver clean, reliable power tailored to your demand.
              </p>

              <div data-block-reveal data-delay="0.4" className="pt-10">
                <Link to="/projects" className="contents">
                  <div
                    className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
                  >
                    <div className="relative z-4 overflow-hidden whitespace-nowrap">
                      <span
                        className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                      >
                        Explore all projects
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* project card */}
          <div className="col-span-12 space-y-6 lg:col-span-6 lg:space-y-10">
            {/* project card 1 */}
            <div data-stack-card-item className="bg-background-3 will-change-transform">
              <figure className="h-[320px] overflow-hidden md:h-[453px]">
                <img
                  src={asset('/images/img-10.jpg')}
                  alt="1.5 MW Rooftop Industrial Solar"
                  className="aspect-square size-full object-cover"
                />
              </figure>

              <div className="space-y-3 px-6 py-10 md:space-y-6 md:px-10.5 md:py-14">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">
                  1.5 MW Industrial Rooftop Solar
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span
                      className="font-pt-mono text-tagline-3 text-background-4/60 font-normal uppercase"
                    >
                      Location:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Houston, Texas, United States
                    </span>
                  </div>
                  <div data-border-expand data-delay="0.4" className="bg-stroke-1/25 h-px w-full"></div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span className="font-pt-mono text-tagline-3 text-background-4/60 font-normal">
                      Type of work:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      On-Grid Industrial Solar EPC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* project card 2 */}
            <div data-stack-card-item className="bg-background-3 will-change-transform">
              <figure className="h-[320px] overflow-hidden md:h-[453px]">
                <img
                  src={asset('/images/img-11.jpg')}
                  alt="500 kW / 1 MWh Commercial BESS"
                  className="aspect-square size-full object-cover"
                />
              </figure>

              <div className="space-y-3 px-6 py-10 md:space-y-6 md:px-10.5 md:py-14">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">
                  500 kW / 1 MWh Commercial BESS
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span
                      className="font-pt-mono text-tagline-3 text-background-4/60 font-normal uppercase"
                    >
                      Location:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Portland, Oregon, United States
                    </span>
                  </div>
                  <div data-border-expand data-delay="0.4" className="bg-stroke-1/25 h-px w-full"></div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span className="font-pt-mono text-tagline-3 text-background-4/60 font-normal">
                      Type of work:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Hybrid Solar & Storage Microgrid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* project card 3 */}
            <div data-stack-card-item className="bg-background-3 will-change-transform">
              <figure className="h-[320px] overflow-hidden md:h-[453px]">
                <img
                  src={asset('/images/img-8.jpg')}
                  alt="3.2 MW Ground-Mount Solar Plant"
                  className="aspect-square size-full object-cover"
                />
              </figure>

              <div className="space-y-3 px-6 py-10 md:space-y-6 md:px-10.5 md:py-14">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">
                  3.2 MW Utility-Scale Solar Plant
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span
                      className="font-pt-mono text-tagline-3 text-background-4/60 font-normal uppercase"
                    >
                      Location:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Rotterdam, South Holland, Netherlands
                    </span>
                  </div>
                  <div data-border-expand data-delay="0.4" className="bg-stroke-1/25 h-px w-full"></div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span className="font-pt-mono text-tagline-3 text-background-4/60 font-normal">
                      Type of work:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      MW-Scale Ground-Mount EPC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* project card 4 */}
            <div data-stack-card-item className="bg-background-3 will-change-transform">
              <figure className="h-[320px] overflow-hidden md:h-[453px]">
                <img
                  src={asset('/images/img-5.jpg')}
                  alt="750 kW Healthcare Facility Solar & Storage"
                  className="aspect-square size-full object-cover"
                />
              </figure>

              <div className="space-y-3 px-6 py-10 md:space-y-6 md:px-10.5 md:py-14">
                <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">
                  750 kW Hospital Critical Power & BESS
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span
                      className="font-pt-mono text-tagline-3 text-background-4/60 font-normal uppercase"
                    >
                      Location:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Austin, Texas, United States
                    </span>
                  </div>
                  <div data-border-expand data-delay="0.4" className="bg-stroke-1/25 h-px w-full"></div>
                  <div className="flex items-center justify-between gap-6 py-3">
                    <span className="font-pt-mono text-tagline-3 text-background-4/60 font-normal">
                      Type of work:
                    </span>
                    <span className="text-tagline-2 font-inter-tight font-normal text-black">
                      Hospital Rooftop Solar & Storage
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[20%] w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
