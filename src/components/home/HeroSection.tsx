import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-background-1 relative overflow-hidden pt-35 pb-20 md:h-screen md:pt-36 md:pb-24 lg:h-screen lg:pt-40 lg:pb-20 xl:h-[110vh] xl:pt-48 xl:pb-39"
    >
      <div className="main-container flex h-full flex-col justify-center">
        <div className="relative z-4 xl:max-w-[560px]">
          <div data-block-reveal data-delay="0.1" className="inline-block">
            <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_1629_31646_hero)">
                    <path
                      d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1629_31646_hero">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> Solar EPC & Energy Storage</span>
            </div>
          </div>

          <h1
            data-text-reveal
            data-reveal-delay="0.2"
            className="font-inter-tight text-it-heading-2 xl:text-it-heading-1 mt-5 font-normal text-black"
          >
            Powering Businesses With Smarter Solar & Energy Storage
          </h1>

          <p
            data-text-reveal
            data-reveal-delay="0.3"
            className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mt-2 max-w-[450px] font-normal md:mt-4"
          >
            Solar EPC. Battery Energy Storage. Reliable Power. Engineered for Performance. From rooftop solar systems to MW-scale solar plants and advanced battery energy storage solutions, we design, execute and support energy systems built around your power requirements.
          </p>

          <div
            data-block-reveal
            data-delay="0.6"
            className="mt-10 flex flex-wrap items-center gap-2 md:mt-14"
          >
            <Link to="/contact" className="contents">
              <div
                className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white"
                  >
                    Get a Free Energy Assessment
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/contact" className="contents">
              <div
                className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Talk to an Energy Expert
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Logo Circle */}
        <div
          data-block-reveal
          data-delay="0.4"
          className="relative z-10 mx-auto flex size-[120px] shrink-0 items-center justify-center rounded-full bg-white max-md:my-8 md:size-[150px] md:translate-x-[-19px] md:translate-y-[50%] lg:translate-y-[-50%]"
        >
          <div
            className="bg-background-5 relative z-2 flex size-15 items-center justify-center rounded-full md:size-[79px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12L12 19L5 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="text"
            data-circle-text
            data-circle-font-ratio="0.075"
            data-circle-font-weight="500"
            data-circle-radius-ratio="0.42"
          >
            <p>Solar Energy-Storage EPC-Reliable Power-</p>
          </div>
        </div>

        {/* Hero Image */}
        <figure
          data-block-reveal
          data-delay="0.3"
          data-direction="right"
          className="h-auto min-[2000px]:h-[1000px]! md:absolute md:top-19 md:right-5 md:h-[600px] md:w-1/2 xl:h-[800px]"
        >
          <img
            src={asset('/images/img-1.jpg')}
            alt="Solar energy and battery storage plant"
            className="aspect-square size-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
