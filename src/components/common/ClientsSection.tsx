import React from 'react';
import { asset } from '../../lib/asset';

export const ClientsSection: React.FC = () => {
  return (
    <section className="bg-background-1 pt-14 pb-8 md:pt-18 md:pb-11 lg:pt-23 lg:pb-16 xl:pt-28 xl:pb-20.5">
      <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
        <div className="mx-auto max-w-[640px] space-y-3 text-center">
          <div data-block-reveal data-delay="0.1" className="inline-block">
            <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_1629_31646_clients)">
                    <path
                      d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1629_31646_clients">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> Clients</span>
            </div>
          </div>

          <h2
            data-text-reveal
            data-reveal-delay="0.2"
            className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
          >
            Trusted by industry leaders.
          </h2>

          <p
            data-text-reveal
            data-reveal-delay="0.3"
            className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
          >
            Our in-house team of experts ensures every solution is built to the highest standard — no
            subcontractors, no cut corners.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <div
            data-block-reveal
            data-delay="0.1"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/notion-with-black-text.svg')} alt="Notion" />
          </div>

          <div
            data-block-reveal
            data-delay="0.2"
            className="flex min-h-[310px] items-center justify-center rounded-[20px] bg-transparent p-8 bg-blend-difference"
          ></div>

          <div
            data-block-reveal
            data-delay="0.3"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/lattice-with-black-text.svg')} alt="Lattice" />
          </div>

          <div
            data-block-reveal
            data-delay="0.4"
            className="flex min-h-[310px] items-center justify-center rounded-[20px] bg-transparent p-8 bg-blend-difference"
          ></div>

          <div
            data-block-reveal
            data-delay="0.1"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/hotjar-with-black-text.svg')} alt="Hotjar" />
          </div>

          <div
            data-block-reveal
            data-delay="0.2"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/scapic-with-black-text.svg')} alt="Scapic" />
          </div>

          <div
            data-block-reveal
            data-delay="0.3"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/outreach-with-black-text.svg')} alt="Outreach" />
          </div>

          <div
            data-block-reveal
            data-delay="0.4"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/squarespace-with-black-text.svg')} alt="Squarespace" />
          </div>

          <div
            data-block-reveal
            data-delay="0.1"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/asana-with-black-text.svg')} alt="Asana" />
          </div>

          <div
            data-block-reveal
            data-delay="0.2"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/hotjar-with-black-text.svg')} alt="Notion" />
          </div>

          <div
            data-block-reveal
            data-delay="0.3"
            className="flex min-h-[310px] items-center justify-center rounded-[20px] bg-transparent p-8 bg-blend-difference"
          ></div>

          <div
            data-block-reveal
            data-delay="0.4"
            className="bg-background-3/40 flex min-h-[310px] items-center justify-center rounded-[20px] p-8 backdrop-blur-[20px]"
          >
            <img src={asset('/images/icons/stripe-with-black-text.svg')} alt="Stripe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
