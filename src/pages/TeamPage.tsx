import React from 'react';
import { Link } from 'react-router-dom';
import ClientsSection from '../components/common/ClientsSection';
import CtaSection from '../components/common/CtaSection';

export const TeamPage: React.FC = () => {
  return (
    <>
      {/* ========================== Team Section =========================== */}
      <section className="bg-background-1 pt-14 pb-8 md:pt-18 md:pb-11 lg:pt-23 lg:pb-16 xl:pt-28 xl:pb-20.5">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="max-w-[640px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_tp_1)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_tp_1">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Our Team</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              The people driving sustainable recovery.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              Our experts combine deep industry knowledge with cutting-edge technology to deliver measurable waste recovery solutions at scale.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <div data-block-reveal data-delay="0.1" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[270px] md:h-[345px] overflow-hidden">
                    <img
                      src="images/img-20.png"
                      alt="James Wilson"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">James Wilson</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Operations Director</p>
                  </div>
                </Link>
              </div>

              <div data-block-reveal data-delay="0.3" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[270px] md:h-[345px] overflow-hidden">
                    <img
                      src="images/img-21.png"
                      alt="Marcus Johnson"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Marcus Johnson</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Installation Lead</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div data-block-reveal data-delay="0.2" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[345px] md:h-[420px] overflow-hidden">
                    <img
                      src="images/img-22.png"
                      alt="Elena Rodriguez"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Elena Rodriguez</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Lead System Designer</p>
                  </div>
                </Link>
              </div>

              <div data-block-reveal data-delay="0.4" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[270px] md:h-[345px] overflow-hidden">
                    <img
                      src="images/img-23.png"
                      alt="Lucas Chen"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Lucas Chen</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Junior Electrician</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <div data-block-reveal data-delay="0.2" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[270px] md:h-[345px] overflow-hidden">
                    <img
                      src="images/img-24.png"
                      alt="Daniel Lee"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Daniel Lee</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Senior Electrician</p>
                  </div>
                </Link>
              </div>

              <div data-block-reveal data-delay="0.4" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[345px] md:h-[420px] overflow-hidden">
                    <img
                      src="images/img-25.png"
                      alt="Sofia Kim"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Sofia Kim</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Site Coordinator</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-3">
              <div data-block-reveal data-delay="0.3" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[345px] md:h-[420px] overflow-hidden">
                    <img
                      src="images/img-26.png"
                      alt="Priya Patel"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Priya Patel</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">System Designer</p>
                  </div>
                </Link>
              </div>

              <div data-block-reveal data-delay="0.4" className="group bg-background-3 overflow-hidden rounded-3xl">
                <Link to="/team-details" className="block">
                  <figure className="h-[270px] md:h-[345px] overflow-hidden">
                    <img
                      src="images/img-15.png"
                      alt="Noah Bennett"
                      className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                    />
                  </figure>
                  <div className="px-6 pt-5 pb-7 md:px-8 md:pt-6 md:pb-8">
                    <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Noah Bennett</h3>
                    <p className="text-tagline-2 font-inter-tight text-background-4/60 font-normal">Field Technician</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Clients Section =========================== */}
      <ClientsSection />

      {/* ========================== CTA Section =========================== */}
      <CtaSection />
    </>
  );
};

export default TeamPage;
