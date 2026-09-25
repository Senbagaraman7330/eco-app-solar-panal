import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-background-1 pt-5 pb-16 md:pb-20 lg:pt-10 lg:pb-24 xl:pb-28">
      <div className="main-container">
        {/* content */}
        {/* <div className="flex flex-col justify-between gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12 xl:gap-x-14">
          <div className="space-y-3 lg:max-w-[560px]">
            <div data-block-reveal data-delay="0.1">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_about)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_about">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Energy Solutions</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 font-inter-tight mt-2 font-normal tracking-[-0.04em] text-black"
            >
              Solar Power That Works for Your Energy Goals
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.4"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              Every business has a different energy profile. Your solar system should be designed around your consumption, load pattern, available space and operating requirements.
            </p>
          </div>

          <div data-block-reveal data-delay="0.35" className="md:self-end">
            <Link to="/contact" className="contents">
              <div
                className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Get Energy Assessment
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div> */}

        {/* <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:mt-18">
          <figure
            data-block-reveal
            data-delay="0.1"
            className="overflow-hidden rounded-2xl h-[340px] sm:h-[400px] lg:h-[460px] w-full"
          >
            <img
              src={asset('/images/img-2.jpg')}
              alt="Solar and battery installation"
              className="size-full object-cover"
            />
          </figure>

          <figure
            data-block-reveal
            data-delay="0.2"
            className="overflow-hidden rounded-2xl h-[340px] sm:h-[400px] lg:h-[460px] w-full"
          >
            <img
              src={asset('/images/img-3.jpg')}
              alt="Engineering solar systems"
              className="size-full object-cover"
            />
          </figure>
        </div>

        <div
          data-block-reveal
          data-delay="0.1"
          className="border-stroke-1/25 divide-stroke-1/25 mt-6 grid grid-cols-1 divide-x divide-y border-y max-lg:border-l lg:grid-cols-4 lg:divide-y-0"
        >
          <div className="space-y-1 px-6 py-10.5 text-center">
            <h3
              className="text-it-heading-3 text-background-4 font-inter-tight md:text-it-heading-2 font-normal"
            >
              3+
            </h3>
            <p className="text-tagline-1 text-background-4/60 font-inter-tight font-normal">
              Years of Solar Project Experience
            </p>
          </div>
          <div className="space-y-1 px-6 py-10.5 text-center">
            <h3
              className="text-it-heading-3 text-background-4 font-inter-tight md:text-it-heading-2 font-normal"
            >
              KW - MW
            </h3>
            <p className="text-tagline-1 text-background-4/60 font-inter-tight font-normal">
              Scale Projects Delivered
            </p>
          </div>
          <div className="space-y-1 px-6 py-10.5 text-center">
            <h3
              data-counter-trigger
              data-counter-value="100"
              className="text-it-heading-3 text-background-4 font-inter-tight md:text-it-heading-2 font-normal"
            >
              <number-flow data-counter-number></number-flow>%
            </h3>
            <p className="text-tagline-1 text-background-4/60 font-inter-tight font-normal">
              End-to-End EPC & O&M
            </p>
          </div>
          <div className="space-y-1 px-6 py-10.5 text-center">
            <h3
              className="text-it-heading-3 text-background-4 font-inter-tight md:text-it-heading-2 font-normal"
            >
              24/7
            </h3>
            <p className="text-tagline-1 text-background-4/60 font-inter-tight font-normal">
              Reliable Performance & O&M
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
