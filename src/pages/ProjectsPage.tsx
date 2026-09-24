import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';
import CtaSection from '../components/common/CtaSection';

export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Zero-Waste industrial network',
      description: 'A city-wide recycling network diverting 99% of industrial waste from landfill across Houston.',
      image: asset('/images/img-30.jpg'),
      flag: asset('/images/icons/flag-15.svg'),
      country: 'France',
      link: '/project-details',
    },
    {
      title: 'Smart city organics loop',
      description: 'A city-wide organics collection system converting food and yard waste into nutrient-rich compost.',
      image: asset('/images/img-31.jpg'),
      flag: asset('/images/icons/flag-20.svg'),
      country: 'USA',
      link: '/project-details',
    },
    {
      title: 'Metro logistics recovery hub',
      description: 'An integrated logistics hub with real-time monitoring and automated waste separation at scale.',
      image: asset('/images/img-32.jpg'),
      flag: asset('/images/icons/flag-17.svg'),
      country: 'Netherlands',
      link: '/project-details',
    },
    {
      title: 'Circular tech refurbishment',
      description: 'An e-waste recovery facility refurbishing electronics into reusable components for the circular economy.',
      image: asset('/images/img-33.jpg'),
      flag: asset('/images/icons/flag-3.svg'),
      country: 'USA',
      link: '/project-details',
    },
    {
      title: 'Green campus initiative',
      description: 'A multi-building campus achieving zero-waste certification through integrated sustainability programs.',
      image: asset('/images/img-34.jpg'),
      flag: asset('/images/icons/flag-15.svg'),
      country: 'France',
      link: '/project-details',
    },
    {
      title: 'Coastal cleanup program',
      description: 'A marine debris recovery initiative protecting 200+ miles of Florida coastline through recycling.',
      image: asset('/images/img-35.jpg'),
      flag: asset('/images/icons/flag-20.svg'),
      country: 'USA',
      link: '/project-details',
    },
  ];

  return (
    <>
      {/* Projects Hero */}
      <section className="bg-background-1 pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Projects</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 xl:text-it-heading-1 mt-5 font-normal text-black"
            >
              Recovering the world at scale.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mx-auto mt-2 max-w-[560px] font-normal md:mt-4"
            >
              From large-scale logistics hubs to smart city ecosystems, our portfolio reflects how advanced recovery systems turn waste into value.
            </p>
          </div>

          {/* Work Stats */}
          <div
            data-block-reveal
            data-delay="0.4"
            className="border-stroke-1/25 mx-auto mt-14 grid grid-cols-2 items-center rounded-3xl border md:grid-cols-4"
          >
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <h3 className="text-it-heading-3 font-inter-tight text-background-4 font-normal">
                15+
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Years of experience
              </p>
            </div>
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <h3 className="text-it-heading-3 font-inter-tight text-background-4 font-normal">
                84+
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Cities served
              </p>
            </div>
            <div className="border-stroke-1/25 space-y-1 p-6 text-center max-md:border-b md:border-r">
              <h3 className="text-it-heading-3 font-inter-tight text-background-4 font-normal">
                1.2M+
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Tons recovered
              </p>
            </div>
            <div className="space-y-1 p-6 text-center">
              <h3 className="text-it-heading-3 font-inter-tight text-background-4 font-normal">
                99%
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Diversion rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background-1 overflow-hidden pb-14 md:pb-18 lg:pb-23 xl:pb-28">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-5 gap-y-16">
            {projects.map((project, index) => (
              <div key={index} className="col-span-12 md:col-span-6" data-block-reveal data-delay={0.1 * ((index % 2) + 1)}>
                <Link to={project.link} className="block group">
                  <figure className="relative mb-6 h-[440px] w-full overflow-hidden rounded-3xl md:h-[490px] lg:h-[560px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 z-2 size-full bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    <div className="shadow-1 bg-white/20 absolute top-1/2 left-1/2 z-4 flex size-15 -translate-x-1/2 translate-y-4 items-center justify-center rounded-2xl opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:size-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M9.3335 22.6668L22.6668 9.3335"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3335 9.3335H22.6668V22.6668"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </figure>
                  <div className="flex items-center justify-between gap-2 px-2 lg:px-6">
                    <div className="space-y-1">
                      <h3 className="text-it-heading-5 font-medium text-black transition-colors group-hover:text-black/80">
                        {project.title}
                      </h3>
                      <p className="text-tagline-2 text-background-4/60 font-normal lg:max-w-[396px]">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <figure className="size-8 shrink-0 overflow-hidden rounded-full">
                        <img src={project.flag} alt={project.country} className="size-full object-cover" />
                      </figure>
                      <p className="text-tagline-2 font-normal text-black">{project.country}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default ProjectsPage;
