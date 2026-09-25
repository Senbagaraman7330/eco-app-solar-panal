import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';
import FaqAccordion from '../components/common/FaqAccordion';

const faqItems = [
  {
    question: 'How does an Off-Grid system work?',
    answer: 'Solar Panels → Charge Controller / Hybrid Inverter → Battery Storage Bank → Facility Loads. During solar hours, energy powers the connected loads while excess generation charges the battery storage bank. Stored energy then seamlessly supplies power when solar irradiance is unavailable or at night.',
    defaultOpen: true,
  },
  {
    question: 'Can off-grid systems support high surge loads like motors and HVAC?',
    answer: 'Yes. We engineer off-grid systems with industrial-grade inverters with high surge capacities specifically calculated to handle heavy inductive motor starting currents without voltage sags.',
  },
  {
    question: 'Can an off-grid solar system integrate with a diesel generator?',
    answer: 'Yes. Our hybrid and off-grid controllers feature automated generator start (AGS) functionality, running backup generators only during extended cloudy spells to minimize diesel fuel consumption.',
  },
  {
    question: 'What battery chemistry do you recommend for off-grid systems?',
    answer: 'We deploy Tier-1 Lithium Iron Phosphate (LiFePO4 / LFP) battery systems offering 6,000+ lifecycle cycles, high thermal stability, zero maintenance, and deep discharge capability (up to 90% DoD).',
  },
];

export const OffGridPage: React.FC = () => {
  return (
    <>
      {/* ========================== Features / Hero Section with Background Image & Smoky Glass Card =========================== */}
      <section className="relative overflow-hidden bg-[#05101E] pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 xl:pt-48 xl:pb-36">
        {/* Background Image Container with Gradient Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={asset('/images/img-7.jpg')}
            alt="Off-Grid Solar System"
            className="size-full object-cover object-center scale-105 opacity-70 transition-transform duration-1000"
          />
          <div className="absolute inset-0 hero-smoky-bg" />
          <div className="absolute -top-32 -left-32 size-96 rounded-full hero-glow-accent-1 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 size-96 rounded-full hero-glow-accent-2 blur-[140px] pointer-events-none" />
        </div>

        <div className="main-container relative z-1">
          {/* Smoky Glassmorphic Card Container for Hero Text */}
          <div className="hero-glass-card mx-auto max-w-[880px] rounded-3xl p-8 sm:p-10 md:p-14 space-y-6 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="hero-badge-glass shadow-4 font-pt-mono inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-xs leading-[150%] font-normal">
                <span className="size-2 rounded-full bg-[#B4E50D] animate-pulse"></span>
                <span>Off-Grid Solutions</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 md:text-it-heading-1 xl:text-[54px] xl:leading-[1.15] font-semibold text-white tracking-[-0.03em] drop-shadow-md"
              style={{ color: '#ffffff' }}
            >
              Off-Grid Solar Systems.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-2 md:text-tagline-1 text-white font-inter-tight max-w-[720px] font-normal mx-auto leading-relaxed drop-shadow"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              Power Where the Grid Can't Reach. Off-grid solar systems operate completely independent of utility lines by pairing high-efficiency solar generation with advanced battery energy storage.
            </p>

            <div
              data-block-reveal
              data-delay="0.5"
              className="pt-2 flex flex-wrap items-center justify-center gap-4"
            >
              <Link to="/contact" className="contents">
                <div className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1 cursor-pointer">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                      Get an Off-Grid Assessment
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Features Section =========================== */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="main-container space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-1 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Remote Facilities</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Perfect for remote industrial sites, mining setups, and rural facilities lacking grid connections.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-2 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Agriculture &amp; Farms</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Solar irrigation pumping, cold storage, and processing plants where extending utility lines is cost-prohibitive.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-3 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Telecom &amp; Monitoring</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Continuous 24/7 power for remote telecom towers, SCADA stations, and surveillance networks.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-4 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Isolated Buildings</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Eco-resorts, research stations, field hospitals, and private estates needing complete self-reliance.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-5 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Critical Loads</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Guaranteed zero downtime and clean sine-wave electricity for sensitive hardware and equipment.
                  </p>
                </div>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[300px] flex-col justify-between p-7 md:p-10.5 rounded-3xl border border-black/5 shadow-sm">
              <div>
                <div className="shadow-8 relative mb-6 flex size-18 items-center justify-center overflow-hidden rounded-lg bg-(image:--color-gradient-2)">
                  <span className="ns-shape-6 text-[32px] text-white"></span>
                  <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                  <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Unreliable Grids</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Eliminate dependence on erratic grids suffering frequent outages and voltage fluctuations.
                  </p>
                </div>
              </div>
            </div>
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
                    <span> Integration Details</span>
                  </div>
                </div>

                <h2
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
                >
                  True Energy Independence.
                </h2>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
                >
                  Off-grid solutions provide complete autonomy by generating and storing enough energy to power your facility 24/7 without grid connections.
                </p>

                <div data-block-reveal data-delay="0.4" className="pt-11">
                  <Link to="/contact">
                    <div className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                      <div className="relative z-4 overflow-hidden whitespace-nowrap">
                        <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                          Get a Proposal
                        </span>
                      </div>
                    </div>
                  </Link>
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
          <div className="bg-background-3 mx-auto flex flex-col items-center justify-between gap-10 rounded-4xl px-8 text-center md:px-14 lg:flex-row lg:text-left xl:py-20">
            <div className="space-y-4 lg:max-w-[560px] py-4">
              <h2
                data-text-reveal
                data-reveal-delay="0.1"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 font-normal text-black"
              >
                Ready to achieve energy self-reliance?
              </h2>
              <p
                data-text-reveal
                data-reveal-delay="0.2"
                className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
              >
                Get a site assessment from our technical engineers and discover how to build an independent, robust solar microgrid.
              </p>
            </div>

            <div data-block-reveal data-delay="0.3" className="shrink-0 lg:self-center">
              <Link to="/contact">
                <div className="group/button before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                      Start your transition
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffGridPage;
