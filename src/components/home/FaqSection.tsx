import React from 'react';
import { Link } from 'react-router-dom';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: 'What factors determine whether on-grid, off-grid, or hybrid solar is right for my business?',
      a: "We analyze your facility's power load profile, grid reliability, tariff structures, and critical backup requirements. On-grid delivers maximum ROI where the grid is stable, while hybrid and BESS ensure uninterruptible operations and peak shaving.",
      defaultOpen: true,
    },
    {
      q: 'How does Battery Energy Storage (BESS) deliver operational and financial value?',
      a: 'BESS stores low-cost or excess solar energy to discharge during peak tariff hours (peak shaving), provides millisecond backup power during grid outages, and stabilizes power quality for sensitive industrial loads.',
      defaultOpen: false,
    },
    {
      q: 'What does your End-to-End Solar EPC scope include?',
      a: 'Our EPC scope covers complete feasibility and energy assessment, custom electrical and civil engineering design, tier-1 component procurement, on-site installation, grid interconnection commissioning, and long-term O&M performance guarantees.',
      defaultOpen: false,
    },
    {
      q: 'Can you install solar systems on existing commercial and industrial roofs?',
      a: 'Yes. We conduct structural load testing, roof integrity evaluations, and wind load engineering before finalizing layout and mounting structures to ensure 25+ year safety and performance.',
      defaultOpen: false,
    },
    {
      q: 'What is the typical execution timeline for KW to MW-scale projects?',
      a: 'Commercial rooftop systems (100 kW - 500 kW) typically complete within 4 to 8 weeks, while MW-scale ground-mounted or microgrid projects range from 3 to 6 months including approvals, engineering, and commissioning.',
      defaultOpen: false,
    },
    {
      q: 'How do you ensure ongoing performance after commissioning?',
      a: 'We provide comprehensive Operations & Maintenance (O&M) including 24/7 remote IoT SCADA monitoring, regular preventive cleaning, thermal drone inspections, inverter maintenance, and rapid-response on-site support.',
      defaultOpen: false,
    },
  ];

  return (
    <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 xl:gap-x-14">
          {/* content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <div data-block-reveal data-delay="0.1" className="inline-block">
                <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1629_31646_faq)">
                        <path
                          d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1629_31646_faq">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span> Faq</span>
                </div>
              </div>

              <h2
                data-text-reveal
                data-reveal-delay="0.2"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
              >
                Clear answers for businesses investing in smarter energy.
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
              >
                Find answers to common questions regarding solar EPC, battery storage integration, project payback, and lifetime O&M support.
              </p>

              <div data-block-reveal data-delay="0.4" className="pt-11">
                <Link to="/faq" className="contents">
                  <div
                    className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
                  >
                    <div className="relative z-4 overflow-hidden whitespace-nowrap">
                      <span
                        className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                      >
                        See our FAQ
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* faq */}
          <div className="col-span-12 lg:col-span-6">
            <div data-block-reveal data-delay="0.1" className="accordion space-y-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  data-default-open={faq.defaultOpen ? 'true' : undefined}
                  className="accordion-item data-[state=open]:bg-background-3 w-full overflow-hidden bg-white transition-all duration-300 ease-in-out"
                >
                  <h3
                    className="accordion-action flex w-full cursor-pointer items-start justify-between gap-6 p-7 text-left transition-all duration-300 ease-in-out data-[state=open]:pb-0 md:p-10.5"
                  >
                    <button
                      type="button"
                      className="text-it-heading-6 font-inter-tight max-w-[460px] text-left font-normal text-black cursor-pointer"
                    >
                      {faq.q}
                    </button>
                    <span
                      className="accordion-icon group shadow-6 bg-background-5 data-[state=open]:text-background-5 data-[state=open]:bg-background-3 relative flex size-7 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-300 ease-in-out"
                    >
                      <span
                        className="before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-3 before:-translate-1/2 before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-3 after:-translate-1/2 after:rotate-90 after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:content-[''] group-data-[state=open]:after:rotate-0"
                      ></span>
                    </span>
                  </h3>
                  <div
                    className="accordion-content w-full transform-gpu [&_.split-text-line]:transform-gpu [&_.split-text-line]:backface-hidden [&_.split-text-line]:transform-3d [&_p]:transform-gpu [&_p]:transform-3d"
                  >
                    <p
                      data-text-reveal
                      className="accordion-content-text text-tagline-3 sm:text-tagline-2 font-inter-tight w-full px-7 pb-7 text-black/60! md:px-10.5 md:pb-10.5 cursor-text pb-5 text-left transition-all duration-300 ease-in-out data-[state=open]:pt-4"
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
