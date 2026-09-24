import React from 'react';
import CtaSection from '../components/common/CtaSection';
import { asset } from '../lib/asset';

export const TeamDetailsPage: React.FC = () => {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-34 md:pb-11 lg:pt-40 lg:pb-16 xl:pt-44 xl:pb-20.5">
        <div className="main-container space-y-11 md:space-y-12 lg:space-y-15 xl:space-y-18">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-14 xl:gap-x-19">
            <div className="space-y-6 md:space-y-7">
              <div data-block-reveal data-delay="0.1">
                <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1629_31646)">
                        <path
                          d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1629_31646">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span> Operations Director</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
                >
                  James Wilson driving sustainable recovery at scale.
                </h1>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
                >
                  With 15+ years in waste management and industrial operations, James leads our recovery systems division. He specializes in designing closed-loop solutions that turn complex waste streams into measurable value — combining operational rigor with circular economy principles.
                </p>
              </div>

              <div className="space-y-5" data-block-reveal data-delay="0.4">
                <div className="space-y-1">
                  <a
                    href="mailto:james.wilson@ecoapps.com"
                    className="text-tagline-2 text-background-4/60 hover:text-background-4 block font-normal transition-colors duration-300"
                  >
                    james.wilson@ecoapps.com
                  </a>
                  <a
                    href="tel:+15125550199"
                    className="text-tagline-2 text-background-4/60 hover:text-background-4 block font-normal transition-colors duration-300"
                  >
                    +1 (512) 555-0199
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ease-bouncy border-stroke-1 flex size-11 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                        stroke="#0D0D12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M11.25 10.5V16.5" stroke="#0D0D12" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.25 10.5V16.5" stroke="#0D0D12" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5"
                        stroke="#0D0D12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z"
                        fill="#0D0D12"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ease-bouncy border-stroke-1 flex size-11 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="#0D0D12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 11.3703C16.1234 12.2025 15.9813 13.0525 15.5938 13.7993C15.2063 14.5461 14.5932 15.1517 13.8416 15.53C13.0901 15.9082 12.2385 16.0399 11.4078 15.9062C10.5771 15.7726 9.80977 15.3804 9.21485 14.7855C8.61993 14.1905 8.22774 13.4232 8.09408 12.5925C7.96042 11.7619 8.09208 10.9102 8.47034 10.1587C8.8486 9.40716 9.4542 8.79404 10.201 8.40654C10.9478 8.01904 11.7978 7.87689 12.63 8.0003C13.4789 8.12619 14.2649 8.52176 14.8717 9.12861C15.4785 9.73545 15.8741 10.5214 16 11.3703Z"
                        stroke="#0D0D12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M17.5 6.5H17.51" stroke="#0D0D12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ease-bouncy border-stroke-1 flex size-11 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="#0D0D12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <figure
              data-block-reveal
              data-delay="0.5"
              className="h-full max-h-[600px] w-full overflow-hidden rounded-4xl bg-gray-200 max-lg:max-h-[480px] max-md:h-[400px]"
            >
              <img
                src={asset('/images/img-15.png')}
                alt="James Wilson"
                className="size-full object-cover object-top"
              />
            </figure>
          </div>

          <div className="mx-auto max-w-[1050px] space-y-10 md:space-y-14 lg:space-y-17.5">
            <div
              className="border-stroke-1/25 space-y-4 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.2"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">
                Professional experience
              </h2>
              <div className="space-y-3">
                <time dateTime="2013/2019" className="text-tagline-4 text-background-4/60 block font-normal">
                  2013 - 2019
                </time>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                  Global Waste Solutions
                </h3>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  Led operations for multi-site industrial waste recovery programs across North America. Directed a team of 120+ across sorting, logistics, and compliance functions. Implemented AI-driven routing optimization that reduced fleet emissions by 22% while increasing collection efficiency.
                </p>
              </div>
            </div>

            <div
              className="border-stroke-1/25 space-y-4 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.3"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Current role</h2>
              <div className="space-y-3">
                <time dateTime="2020/2025" className="text-tagline-4 text-background-4/60 block font-normal">
                  2020 - Present
                </time>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Eco Apps Solutions</h3>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  As Operations Director, I oversee the design and deployment of integrated solar and energy storage systems for enterprise clients. My focus is balancing technical innovation with operational practicality — ensuring every facility we build performs reliably at scale while advancing our clients&apos; clean energy goals.
                </p>
              </div>
            </div>

            <div className="space-y-5" data-block-reveal data-delay="0.4">
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">
                Key responsibilities
              </h2>
              <ul className="space-y-3">
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-[#B4E50D] mt-2 size-1.5 shrink-0 rounded-full"></span>
                  End-to-end recovery system design and implementation
                </li>
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-[#B4E50D] mt-2 size-1.5 shrink-0 rounded-full"></span>
                  Fleet decarbonization and smart route dispatch management
                </li>
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-[#B4E50D] mt-2 size-1.5 shrink-0 rounded-full"></span>
                  Operational compliance and OSHA safety protocol enforcement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default TeamDetailsPage;
