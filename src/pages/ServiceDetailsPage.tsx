import React from 'react';
import FaqAccordion from '../components/common/FaqAccordion';

const faqItems = [
  {
    question: 'How do you verify the recycling percentages in your reports?',
    answer:
      'We combine bin-level sensor data, facility weighbridge records, material recovery tickets, and third-party audit samples so every reported percentage is traceable.',
    defaultOpen: true,
  },
  {
    question: 'Can you handle hazardous or medical waste?',
    answer:
      'Yes. We separate regulated streams from standard recycling and route them through certified partners with documented chain-of-custody at every step.',
  },
  {
    question: 'What happens to materials that cannot be mechanically recycled?',
    answer:
      'Difficult materials are directed to chemical recycling, waste-to-resource partners, or compliant recovery pathways before landfill is considered.',
  },
  {
    question: 'Does your system integrate with my company’s ERP?',
    answer:
      'Yes. We support API-based integration with ERP, procurement, ESG reporting, and facilities management platforms.',
  },
  {
    question: 'How quickly can your system be deployed?',
    answer:
      'Most sites can launch a pilot in two to four weeks after audit approval, with full deployment planned around facility access and equipment scope.',
  },
  {
    question: 'How do you help reduce operational costs?',
    answer:
      'We reduce unnecessary pickups, improve sorting accuracy, recover resale value, and give teams clear data to prevent waste handling inefficiencies.',
  },
];

export const ServiceDetailsPage: React.FC = () => {
  return (
    <>
      {/* ========================== Features / Aesthetic Section =========================== */}
      <section className="bg-background-1 overflow-hidden pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="mx-auto max-w-[640px] space-y-3 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_sd_1)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_sd_1">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> How It Works</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              From audit to zero-waste.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              Every step is designed to maximize recovery, reduce inefficiencies, and move you closer to a fully
              circular system.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-1 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Waste stream analysis</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    AI-driven mapping of your current waste flows, identifying leakage points and recovery opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-2 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Custom system design</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Tailored collection infrastructure and sorting systems built for your specific waste environment.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-3 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">On-site installation</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    In-house crew handles equipment setup, integration, and testing with zero disruption to operations.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-4 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Real-time monitoring</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    IoT sensors and dashboards track fill levels, diversion rates, and system performance 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-5 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Reporting & compliance</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Automated ESG reports, regulatory documentation, and carbon offset tracking for audits.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-6 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Ongoing optimization</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Continuous data analysis to refine routes, improve sorting accuracy, and maximize recovery value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Footprint / Impact Section =========================== */}
      <section className="bg-background-1 overflow-hidden pt-14 pb-8 md:pt-18 md:pb-11 lg:pt-23 lg:pb-16 xl:pt-28 xl:pb-20.5">
        <div className="main-container space-y-8 md:space-y-10 lg:space-y-16">
          <div className="grid grid-cols-1 items-center gap-y-10 md:gap-y-17 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-19">
            <div>
              <div data-block-reveal data-delay="0.1" className="mb-6 inline-block">
                <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_sd_2)">
                        <path
                          d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_sd_2">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span> Environmental Impact</span>
                </div>
              </div>

              <h2
                data-text-reveal
                data-reveal-delay="0.2"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
              >
                Reducing your footprint, one stream at a time.
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mt-2 font-normal"
              >
                We are committed to minimizing environmental impact through renewable energy, smart logistics, and circular
                resource management across every operation.
              </p>

              <div className="divide-stroke-1/25 mt-8 divide-y">
                <div data-block-reveal data-delay="0.2" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Carbon-neutral fleet</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    All collection vehicles run on optimized routes with carbon offset programs, achieving full fleet neutrality.
                  </p>
                </div>
                <div data-block-reveal data-delay="0.3" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Zero landfill commitment</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Our goal is 99.5% waste diversion through advanced sorting, recycling, and resource recovery pathways.
                  </p>
                </div>
                <div data-block-reveal data-delay="0.4" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Circular resource loop</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Recovered materials re-enter the supply chain as high-grade inputs, closing the loop on resource lifecycles.
                  </p>
                </div>
              </div>
            </div>

            <figure
              data-block-reveal
              data-delay="0.2"
              data-direction="right"
              className="h-full max-h-[600px] overflow-hidden rounded-4xl max-lg:max-h-[480px] max-md:h-[400px]"
            >
              <img src="images/img-3.jpg" alt="Sustainable waste recovery facility" className="size-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* ========================== FAQ Section =========================== */}
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
                        <g clipPath="url(#clip0_sd_3)">
                          <path
                            d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_sd_3">
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
                  Technical insights for businesses, cities, and industrial partners.
                </h2>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
                >
                  Find clear answers to common questions about our technology, processes, and how we deliver efficient, scalable waste recovery solutions.
                </p>

                <div data-block-reveal data-delay="0.4" className="pt-11">
                  <a href="faq">
                    <div className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                      <div className="relative z-4 overflow-hidden whitespace-nowrap">
                        <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                          See our FAQ
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* faq items */}
            <div className="col-span-12 lg:col-span-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================== CTA Section =========================== */}
      <section className="bg-background-1 overflow-hidden pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 xl:pb-30">
        <div className="main-container">
          <div className="bg-background-3 mx-auto flex flex-col items-center justify-between gap-10 rounded-4xl px-8 text-center md:px-14 lg:flex-row lg:text-left xl:py-30">
            <div className="space-y-4 lg:max-w-[560px]">
              <h2
                data-text-reveal
                data-reveal-delay="0.1"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 font-normal text-black"
              >
                Ready to transform your waste stream?
              </h2>
              <p
                data-text-reveal
                data-reveal-delay="0.2"
                className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
              >
                Get a free waste audit and discover how much value your business can recover. Our team will map your streams and build a custom recovery plan.
              </p>
            </div>

            <div data-block-reveal data-delay="0.3" className="shrink-0 lg:self-end">
              <a href="contact">
                <div className="group/button before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                      Start your recovery
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsPage;
