import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const BlogSection: React.FC = () => {
  const blogs = [
    {
      img: asset('/images/img-27.jpg'),
      delay: '0.1',
      bgClass: 'bg-background-3',
      imgHeight: 'h-[300px] 2xl:h-[490px]',
      title: 'Optimizing Industrial Power Costs with MW-Scale Rooftop Solar.',
      desc: 'How heavy manufacturing facilities are achieving up to 60% power bill reduction through custom-engineered on-grid solar solutions.',
    },
    {
      img: asset('/images/img-28.jpg'),
      delay: '0.3',
      bgClass: 'bg-white bg-background-3',
      imgHeight: 'h-[336px]',
      title: 'BESS & Peak Shaving: Maximizing Commercial Energy ROI.',
      desc: 'A deep dive into how battery storage systems mitigate peak demand tariffs and guarantee uninterrupted operational continuity.',
    },
    {
      img: asset('/images/img-29.jpg'),
      delay: '0.5',
      bgClass: 'bg-background-3',
      imgHeight: 'h-[300px] 2xl:h-[490px]',
      title: 'Hybrid Microgrids: The Future of Hospital and Critical Facility Power.',
      desc: 'Combining solar generation, smart inverters, and battery storage to guarantee zero-downtime reliability for sensitive operations.',
    },
  ];

  return (
    <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
          <div className="max-w-[550px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_blog)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_blog">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Blog</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
            >
              Latest solar & energy storage insights.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              Stay ahead with our engineering insights, BESS economics, commercial solar trends, and renewable power outlooks.
            </p>
          </div>

          <div data-block-reveal data-delay="0.3" className="flex justify-start lg:justify-end">
            <Link to="/blog" className="contents">
              <div
                className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1"
              >
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span
                    className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black"
                  >
                    Read our blog
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {blogs.map((b, idx) => (
            <article
              key={idx}
              data-block-reveal
              data-delay={b.delay}
              className={`group md:col-span-6 col-span-12 lg:col-span-4 ${b.bgClass} underline-hover-effect h-max`}
            >
              <Link to="/blog-details" className="block">
                <figure className={`${b.imgHeight} relative overflow-hidden`}>
                  <img
                    src={b.img}
                    alt={b.title}
                    className="ease-default size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* gradient layer */}
                  <div
                    className="pointer-events-none absolute inset-0 z-2 size-full bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  ></div>
                  {/* icon */}
                  <div
                    className="shadow-1 bg-background-4/10 absolute top-1/2 left-1/2 z-4 flex size-15 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[32px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18"
                  >
                    <span className="relative flex size-8 items-center justify-center overflow-hidden">
                      <svg
                        className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M9.3335 22.6668L22.6668 9.3335"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3335 9.3335H22.6668V22.6668"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </figure>

                <div className="space-y-4 px-10.5 pt-6 pb-10.5">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-inter-tight text-tagline-3 bg-background-4/5 rounded-full px-5 py-1.5 text-black"
                    >
                      Blog
                    </span>
                    <span className="font-inter-tight text-tagline-3 text-background-4/60">
                      Read : 5 min
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-it-heading-6 font-inter-tight blog-title font-normal text-black">
                      {b.title}
                    </h3>
                    <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
