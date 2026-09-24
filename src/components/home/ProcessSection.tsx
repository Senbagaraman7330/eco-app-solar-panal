import React from 'react';
import { Link } from 'react-router-dom';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Energy Assessment',
      desc: 'Detailed load analysis, energy requirement study, and site consumption evaluation.',
    },
    {
      num: '02',
      title: 'System Design',
      desc: 'Tailored solar and storage architecture designed around available space and operating needs.',
    },
    {
      num: '03',
      title: 'Engineering',
      desc: 'Precision electrical and structural engineering with multi-tier safety standards.',
    },
    {
      num: '04',
      title: 'Procurement',
      desc: 'Tier-1 solar modules, inverters, and high-performance battery storage equipment.',
    },
    {
      num: '05',
      title: 'Installation',
      desc: 'Expert on-site mechanical and electrical installation executed by certified specialists.',
    },
    {
      num: '06',
      title: 'Commissioning',
      desc: 'Rigorous testing, grid synchronization, safety audits, and system activation.',
    },
    {
      num: '07',
      title: 'O&M',
      desc: 'Continuous performance monitoring, preventive maintenance, and lifecycle support.',
    },
  ];

  return (
    <section className="bg-background-1 pt-10 pb-16 md:pb-20 lg:pt-10 lg:pb-24 xl:pb-28">
      <div className="main-container mb-12 md:mb-14 lg:mb-18">
        {/* content */}
        <div className="flex flex-col justify-between gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12 xl:gap-x-14">
          <div className="space-y-3 lg:max-w-[560px]">
            <div data-block-reveal data-delay="0.1">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_process)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_process">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Why Choose Us?</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 font-inter-tight mt-2 font-normal tracking-[-0.04em] text-black"
            >
              Engineering Before Equipment
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.4"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              We don't start with a product. We start with your energy requirement. Our end-to-end EPC model ensures precision, accountability, and maximum ROI at every step.
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
                    Start your assessment
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* process steps */}
      <div className="space-y-10" data-process-slider data-block-reveal data-delay="0.4">
        <div className="scroll-bar overflow-hidden" data-process-viewport>
          <div className="flex gap-6 pl-[12%] will-change-transform" data-process-track>
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-background-3 grid min-h-[336px] w-full min-w-[340px] grid-cols-[80px_1fr] overflow-hidden sm:min-w-[420px] lg:min-w-[440px] xl:min-w-[582px]"
              >
                <div className="flex flex-col items-center justify-between border-r-2 border-white px-8 py-10.5">
                  <span className="font-inter-tight text-tagline-2 font-medium text-black">{step.num}</span>
                  <div className="flex flex-col gap-1" aria-hidden="true">
                    <span className="bg-background-4/30 block size-1.5 rounded-full"></span>
                    <span className="bg-background-4/30 block size-1.5 rounded-full"></span>
                    <span className="bg-background-4/30 block size-1.5 rounded-full"></span>
                    <span className="bg-background-4 block size-1.5 rounded-full"></span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-10.5">
                  <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">{step.title}</h3>

                  <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                    <p className="text-tagline-2 text-background-4/60 font-inter-tight max-w-[300px] font-normal">
                      {step.desc}
                    </p>

                    <span className="text-it-heading-2 font-inter-tight font-medium text-black">{step.num}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="main-container">
          <div className="relative h-8 overflow-hidden" data-process-rail>
            <div
              className="absolute top-1/2 left-0 h-4 w-full -translate-y-1/2 bg-[repeating-linear-gradient(90deg,var(--color-background-4)_0_1px,transparent_1px_5px)]"
            ></div>
            <button
              data-process-controller
              type="button"
              aria-label="Process carousel control"
              className="bg-background-2 shadow-2 absolute top-1/2 left-0 flex h-8 w-12.5 -translate-y-1/2 cursor-grab touch-none items-center justify-center rounded-xl p-2 text-white backdrop-blur-[62px] will-change-transform select-none active:cursor-grabbing"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.8335 11.8335V12.1665H10.1665V11.8335H9.8335ZM7.8335 9.8335V10.1665H8.1665V9.8335H7.8335ZM5.8335 7.8335V8.1665H6.1665V7.8335H5.8335ZM7.8335 5.8335V6.1665H8.1665V5.8335H7.8335ZM9.8335 3.8335V4.1665H10.1665V3.8335H9.8335Z"
                    fill="#11141D"
                    stroke="white"
                  />
                </svg>
              </span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.1665 11.8335V12.1665H5.8335V11.8335H6.1665ZM8.1665 9.8335V10.1665H7.8335V9.8335H8.1665ZM10.1665 7.8335V8.1665H9.8335V7.8335H10.1665ZM8.1665 5.8335V6.1665H7.8335V5.8335H8.1665ZM6.1665 3.8335V4.1665H5.8335V3.8335H6.1665Z"
                    fill="#11141D"
                    stroke="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
