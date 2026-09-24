import React from 'react';
import CtaSection from '../components/common/CtaSection';

export const ProjectDetailsPage: React.FC = () => {
  return (
    <>
      {/* ============================= Project Details ============================= */}
      <section className="pt-28 pb-8 md:pb-11 lg:pt-38 lg:pb-16 xl:pt-48 xl:pb-20.5">
        <div className="main-container space-y-11 md:space-y-14 lg:space-y-18">
          {/* Hero Content */}
          <div className="mx-auto max-w-[900px] space-y-5 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_pd_1)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_pd_1">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Project Details</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Zero-Waste Industrial Network
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mx-auto max-w-[650px] font-normal"
            >
              A comprehensive industrial recovery system that diverts 99% of waste from landfill through AI-powered sorting, smart logistics, and real-time monitoring.
            </p>
          </div>

          {/* Hero Image */}
          <figure
            data-block-reveal
            data-delay="0.3"
            className="h-[300px] w-full overflow-hidden rounded-4xl md:h-[450px] lg:h-[550px]"
          >
            <img
              src="images/img-10.jpg"
              alt="Zero-Waste Industrial Network"
              className="size-full object-cover"
            />
          </figure>

          {/* Project Meta */}
          <div
            className="border-stroke-1/25 grid grid-cols-2 items-center rounded-3xl border md:grid-cols-5"
            data-block-reveal
            data-delay="0.4"
          >
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">Client</p>
              <p className="text-tagline-2 font-inter-tight font-normal text-black">Houston Energy Corp</p>
            </div>
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">Year</p>
              <p className="text-tagline-2 font-inter-tight font-normal text-black">2025</p>
            </div>
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">Service</p>
              <p className="text-tagline-2 font-inter-tight font-normal text-black">Industrial Recovery</p>
            </div>
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">Location</p>
              <p className="text-tagline-2 font-inter-tight font-normal text-black">Houston, TX</p>
            </div>
            <div className="space-y-1 p-6 text-center">
              <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">Duration</p>
              <p className="text-tagline-2 font-inter-tight font-normal text-black">6 Months</p>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="mx-auto max-w-[850px] space-y-10 md:space-y-14 lg:space-y-18">
            {/* Introduction */}
            <div
              className="border-stroke-1/25 space-y-5 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.2"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Introduction</h2>
              <div className="space-y-4">
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  The Zero-Waste Industrial Network showcases our approach to large-scale waste recovery — combining AI-powered sorting, smart logistics, and real-time monitoring. We delivered a system that processes 500 tons of industrial waste daily while achieving 99% diversion from landfill.
                </p>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  The project featured IoT-enabled bin sensors, automated material separation, and a dashboard that tracks diversion rates and carbon offsets in real-time. Every recovery pathway was designed to maximize value while minimizing environmental impact.
                </p>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  Beyond immediate recovery, the project focused on long-term circularity — from reusable infrastructure to systems that could scale for future expansions. The result was a facility that sets the standard for industrial waste management.
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div
              className="border-stroke-1/25 space-y-5 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.3"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Challenge</h2>
              <div className="space-y-4">
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                  To build a zero-waste system for a complex industrial facility on a tight timeline
                </h3>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  Our client needed a recovery system that could handle 20+ waste streams simultaneously. Key challenges included:
                </p>
                <ul className="space-y-3">
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    Fragmented waste streams with no centralized tracking or reporting
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    High contamination rates preventing materials from being recycled or resold
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    Regulatory compliance across multiple waste categories and disposal methods
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div
              className="border-stroke-1/25 space-y-5 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.4"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Our Solution</h2>
              <div className="space-y-4">
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                  Engineered for maximum recovery and seamless operations
                </h3>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  To address these challenges, we implemented:
                </p>
                <ul className="space-y-3">
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    AI-powered optical sorting system with 15+ material categories
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    IoT bin sensors with real-time fill monitoring and route optimization
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                    <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                    Automated compliance reporting synced with regulatory requirements
                  </li>
                </ul>
              </div>
            </div>

            {/* Before / After */}
            <div
              className="border-stroke-1/25 bg-background-3 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border p-6 md:grid-cols-2 md:p-8"
              data-block-reveal
              data-delay="0.2"
            >
              <div className="space-y-5">
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Before</h3>
                <ul className="space-y-4">
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    40% diversion rate with no visibility into waste streams
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    Manual sorting with high contamination and lost recovery value
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    Fragmented vendor coordination across 5 disposal partners
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    No real-time tracking or compliance documentation
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">After</h3>
                <ul className="space-y-4">
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    99% diversion rate with full stream visibility
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    AI sorting with 95% accuracy and clean material outputs
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    Single recovery partner managing all streams end-to-end
                  </li>
                  <li className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                    Real-time dashboard with automated ESG reporting
                  </li>
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div
              className="border-stroke-1/25 space-y-5 border-b pb-10 md:pb-14"
              data-block-reveal
              data-delay="0.3"
            >
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Technologies Used</h2>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Driving performance with industry-leading recovery equipment
              </p>
              <ul className="space-y-3">
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                  AI optical sorting with computer vision and robotic arms
                </li>
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                  IoT bin sensors with LoRaWAN connectivity and cloud platform
                </li>
                <li className="text-tagline-2 text-background-4/60 font-inter-tight flex items-start gap-3 font-normal">
                  <span className="bg-background-5 mt-2 size-1.5 shrink-0 rounded-full"></span>
                  Real-time ESG dashboard with automated compliance reporting
                </li>
              </ul>
            </div>

            {/* Client Feedback */}
            <div className="space-y-6 text-center" data-block-reveal data-delay="0.4">
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">Client Feedback</h2>
              <div className="bg-background-5 space-y-6 rounded-3xl p-8 text-center md:p-12">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="images/img-20.png"
                    alt="Sarah Jenkins"
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-it-heading-6 font-inter-tight font-normal text-white">Sarah Jenkins</p>
                    <p className="text-tagline-3 font-inter-tight font-normal text-white/60">Operations Director</p>
                  </div>
                </div>
                <blockquote className="text-tagline-2 font-inter-tight mx-auto max-w-[540px] font-normal text-white/60">
                  "They delivered exactly what we needed — a recovery system that transformed our waste streams into a value stream. The team was professional, the dashboard is transparent, and we've seen measurable ROI since day one."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== CTA Section =========================== */}
      <CtaSection />
    </>
  );
};

export default ProjectDetailsPage;
