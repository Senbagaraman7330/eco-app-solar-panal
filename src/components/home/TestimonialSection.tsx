import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-background-1 pt-5 pb-16 md:pb-20 lg:pt-10 lg:pb-24 xl:pb-28">
      <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
        {/* content */}
        <div className="flex flex-col justify-between gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12 xl:gap-x-14">
          <div className="space-y-3 lg:max-w-[560px]">
            <div data-block-reveal data-delay="0.1">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_testi)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_testi">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Client Feedback</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 font-inter-tight mt-2 font-normal text-black"
            >
              Trusted by commercial & industrial leaders
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.4"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              From energy cost reduction to zero-downtime reliability, here is how our solar EPC and BESS solutions perform in the real world.
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
                    Partner with us
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* testimonial grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-12 gap-6">
            {/* card 1 */}
            <div data-block-reveal data-delay="0.1" className="bg-background-3 col-span-12 md:col-span-6">
              <div className="space-y-6 px-5 py-7 md:px-10.5 md:py-14">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={asset('/images/img-20.png')}
                      alt="Marcus Reed"
                      className="size-13 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-tagline-2 font-inter-tight font-medium text-black">
                        Marcus Reed
                      </h3>
                      <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                        Manufacturing Plant Director
                      </p>
                    </div>
                  </div>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M9.16682 34.6422C7.10632 32.455 6 30 6 26.0208C6 19.0218 10.913 12.7474 18.0612 9.64648L19.8466 12.4017C13.1761 16.0109 11.8724 20.6922 11.3513 23.6442C12.4253 23.0888 13.8312 22.8934 15.2094 23.0212C18.8182 23.3556 21.6624 26.3182 21.6624 30C21.6624 33.866 18.5283 37 14.6623 37C12.5162 37 10.4639 36.0192 9.16682 34.6422ZM29.1668 34.6422C27.1064 32.455 26 30 26 26.0208C26 19.0218 30.913 12.7474 38.0612 9.64648L39.8466 12.4017C33.176 16.0109 31.8724 20.6922 31.3512 23.6442C32.4252 23.0888 33.8312 22.8934 35.2094 23.0212C38.8182 23.3556 41.6624 26.3182 41.6624 30C41.6624 33.866 38.5284 37 34.6624 37C32.5162 37 30.464 36.0192 29.1668 34.6422Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  “The end-to-end EPC approach made all the difference. From load profiling to final grid commissioning, they delivered our 1.5 MW rooftop plant ahead of schedule with immediate power savings.”
                </p>
              </div>

              <figure className="h-[250px] overflow-hidden sm:h-[340px]">
                <img
                  src={asset('/images/img-10.jpg')}
                  alt="Solar plant operations"
                  className="size-full object-cover"
                />
              </figure>
            </div>

            {/* card 2 */}
            <div data-block-reveal data-delay="0.2" className="bg-background-3 col-span-12 md:col-span-6">
              <div className="space-y-6 px-5 py-7 md:px-10.5 md:py-14">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={asset('/images/img-21.png')}
                      alt="Daniel Brooks"
                      className="size-13 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-tagline-2 font-inter-tight font-medium text-black">
                        Daniel Brooks
                      </h3>
                      <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                        Commercial Facilities Manager
                      </p>
                    </div>
                  </div>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M9.16682 34.6422C7.10632 32.455 6 30 6 26.0208C6 19.0218 10.913 12.7474 18.0612 9.64648L19.8466 12.4017C13.1761 16.0109 11.8724 20.6922 11.3513 23.6442C12.4253 23.0888 13.8312 22.8934 15.2094 23.0212C18.8182 23.3556 21.6624 26.3182 21.6624 30C21.6624 33.866 18.5283 37 14.6623 37C12.5162 37 10.4639 36.0192 9.16682 34.6422ZM29.1668 34.6422C27.1064 32.455 26 30 26 26.0208C26 19.0218 30.913 12.7474 38.0612 9.64648L39.8466 12.4017C33.176 16.0109 31.8724 20.6922 31.3512 23.6442C32.4252 23.0888 33.8312 22.8934 35.2094 23.0212C38.8182 23.3556 41.6624 26.3182 41.6624 30C41.6624 33.866 38.5284 37 34.6624 37C32.5162 37 30.464 36.0192 29.1668 34.6422Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  “Integrating BESS storage with our on-grid solar system protected our operations from peak tariff spikes and gave us seamless backup during grid outages.”
                </p>
              </div>

              <figure className="h-[250px] overflow-hidden sm:h-[340px]">
                <img
                  src={asset('/images/img-11.jpg')}
                  alt="BESS installation"
                  className="size-full object-cover"
                />
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {/* card 3 */}
            <div data-block-reveal data-delay="0.2" className="bg-white">
              <div className="space-y-6 px-5 py-7 md:px-10.5 md:py-14">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M9.16682 34.6422C7.10632 32.455 6 30 6 26.0208C6 19.0218 10.913 12.7474 18.0612 9.64648L19.8466 12.4017C13.1761 16.0109 11.8724 20.6922 11.3513 23.6442C12.4253 23.0888 13.8312 22.8934 15.2094 23.0212C18.8182 23.3556 21.6624 26.3182 21.6624 30C21.6624 33.866 18.5283 37 14.6623 37C12.5162 37 10.4639 36.0192 9.16682 34.6422ZM29.1668 34.6422C27.1064 32.455 26 30 26 26.0208C26 19.0218 30.913 12.7474 38.0612 9.64648L39.8466 12.4017C33.176 16.0109 31.8724 20.6922 31.3512 23.6442C32.4252 23.0888 33.8312 22.8934 35.2094 23.0212C38.8182 23.3556 41.6624 26.3182 41.6624 30C41.6624 33.866 38.5284 37 34.6624 37C32.5162 37 30.464 36.0192 29.1668 34.6422Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  “Their engineering team designed a hybrid solar-plus-storage microgrid that tailored precisely to our hospital's critical load requirements.”
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={asset('/images/img-22.png')}
                    alt="Ethan Carter"
                    className="size-13 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-tagline-2 font-inter-tight font-medium text-black">Ethan Carter</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Hospital Operations VP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 4 */}
            <div data-block-reveal data-delay="0.3" className="bg-background-3">
              <div className="space-y-6 px-5 py-7 md:px-10.5 md:py-14">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M9.16682 34.6422C7.10632 32.455 6 30 6 26.0208C6 19.0218 10.913 12.7474 18.0612 9.64648L19.8466 12.4017C13.1761 16.0109 11.8724 20.6922 11.3513 23.6442C12.4253 23.0888 13.8312 22.8934 15.2094 23.0212C18.8182 23.3556 21.6624 26.3182 21.6624 30C21.6624 33.866 18.5283 37 14.6623 37C12.5162 37 10.4639 36.0192 9.16682 34.6422ZM29.1668 34.6422C27.1064 32.455 26 30 26 26.0208C26 19.0218 30.913 12.7474 38.0612 9.64648L39.8466 12.4017C33.176 16.0109 31.8724 20.6922 31.3512 23.6442C32.4252 23.0888 33.8312 22.8934 35.2094 23.0212C38.8182 23.3556 41.6624 26.3182 41.6624 30C41.6624 33.866 38.5284 37 34.6624 37C32.5162 37 30.464 36.0192 29.1668 34.6422Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  “Transparent O&M reporting and guaranteed performance ratios made our investment completely risk-free.”
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={asset('/images/img-23.png')}
                    alt="Noah Bennett"
                    className="size-13 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-tagline-2 font-inter-tight font-medium text-black">Noah Bennett</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Logistics Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div data-block-reveal data-delay="0.4" className="bg-white">
              <div className="space-y-6 px-5 py-7 md:px-10.5 md:py-14">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M9.16682 34.6422C7.10632 32.455 6 30 6 26.0208C6 19.0218 10.913 12.7474 18.0612 9.64648L19.8466 12.4017C13.1761 16.0109 11.8724 20.6922 11.3513 23.6442C12.4253 23.0888 13.8312 22.8934 15.2094 23.0212C18.8182 23.3556 21.6624 26.3182 21.6624 30C21.6624 33.866 18.5283 37 14.6623 37C12.5162 37 10.4639 36.0192 9.16682 34.6422ZM29.1668 34.6422C27.1064 32.455 26 30 26 26.0208C26 19.0218 30.913 12.7474 38.0612 9.64648L39.8466 12.4017C33.176 16.0109 31.8724 20.6922 31.3512 23.6442C32.4252 23.0888 33.8312 22.8934 35.2094 23.0212C38.8182 23.3556 41.6624 26.3182 41.6624 30C41.6624 33.866 38.5284 37 34.6624 37C32.5162 37 30.464 36.0192 29.1668 34.6422Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                  “The financial payback on our solar installation occurred faster than projected, cutting our annual energy costs by 45%.”
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={asset('/images/img-24.png')}
                    alt="Oliver Grant"
                    className="size-13 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-tagline-2 font-inter-tight font-medium text-black">Oliver Grant</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      CFO, Retail Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
