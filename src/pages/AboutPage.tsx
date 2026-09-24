import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';
import AboutSection from '../components/home/AboutSection';
import TeamSection from '../components/home/TeamSection';
import ClientsSection from '../components/common/ClientsSection';
import FaqSection from '../components/home/FaqSection';
import CtaSection from '../components/common/CtaSection';

export const AboutPage: React.FC = () => {
  return (
    <main className="bg-background-1">
      {/* About Hero Section */}
      <section className="pt-28 pb-14 md:pt-35 md:pb-18 lg:pt-40 lg:pb-24 xl:pt-45 xl:pb-28">
        <div className="main-container space-y-11 md:space-y-14 lg:space-y-18 xl:space-y-21">
          <div className="text-left">
            <div className="mb-6" data-block-reveal data-delay="0.2">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_abp)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_abp">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> management & Recycling </span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 xl:text-it-heading-1 mt-5 font-normal text-black"
            >
              Engineering a living legacy the architects of the anthropocene
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 max-w-[450px] font-normal mt-4"
            >
              We are a leading provider of sustainable energy solutions, helping businesses and
              communities transition to renewable energy sources.
            </p>

            <div className="mt-7 md:mt-9" data-block-reveal data-delay="0.5">
              <Link to="/contact" className="contents">
                <div className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                      Start your recovery
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <figure
              data-block-reveal
              data-delay="0.6"
              className="h-full max-h-150 w-full overflow-hidden rounded-4xl max-md:h-100"
            >
              <img src={asset('/images/img-19.jpg')} alt="About Us" className="size-full object-cover" />
            </figure>
            <p data-block-reveal data-delay="0.1" className="text-tagline-2 text-background-4/60 font-normal">
              Founded on the belief that live experiences should feel effortless and unforgettable, we
              have grown into the region&apos;s most trusted next-generation events studio. We don&apos;t just book
              venues; we engineer complete event ecosystems tailored to your audience. Unlike massive
              production houses, we rely on our dedicated in-house team of creative directors and
              certified producers — no subcontractors, no cut corners, and a seamless journey from your
              first brief to the final applause.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <TeamSection />
      <ClientsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default AboutPage;
