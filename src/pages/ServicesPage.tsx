import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { asset } from '../lib/asset';
import CtaSection from '../components/common/CtaSection';

export const ServicesPage: React.FC = () => {
  const { openModal } = useModal();

  const services = [
    {
      iconClass: 'ns-shape-1',
      title: 'Commercial & industrial',
      desc: 'Scalable collection and on-site compaction for factories, warehouses, and retail hubs.',
      features: ['Custom waste stream mapping', 'On-site compaction systems', 'Real-time diversion tracking'],
      delay: '0.1',
    },
    {
      iconClass: 'ns-shape-2',
      title: 'Construction & demo',
      desc: 'Fast roll-off containers, debris sorting, and recovery plans built for active sites.',
      features: ['Roll-off container delivery', 'Debris sorting & recovery', 'Job-site scheduling'],
      delay: '0.2',
    },
    {
      iconClass: 'ns-shape-3',
      title: 'Electronic & tech waste',
      desc: 'Secure device recovery with responsible recycling paths for modern electronics.',
      features: ['Certified data destruction', 'Component harvesting', 'Battery recycling'],
      delay: '0.3',
    },
    {
      iconClass: 'ns-shape-4',
      title: 'Municipal & residential',
      desc: 'Dependable curbside collection, recycling education, and city-scale recovery programs.',
      features: ['Curbside collection', 'Recycling education', 'City-scale programs'],
      delay: '0.1',
      colSpan: 'lg:col-span-6',
    },
    {
      iconClass: 'ns-shape-5',
      title: 'Organic & food waste',
      desc: 'Composting systems and anaerobic digestion for organic waste streams at any scale.',
      features: ['Composting infrastructure', 'Anaerobic digestion', 'Soil amendment output'],
      delay: '0.2',
      colSpan: 'lg:col-span-6',
    },
  ];

  const whyChooseUs = [
    { icon: 'ns-shape-7', title: 'AI-powered sorting', desc: 'Optical sorting systems that identify and separate materials 10x faster than manual methods.', delay: '0.1' },
    { icon: 'ns-shape-8', title: 'IoT bin monitoring', desc: 'Real-time fill-level sensors that optimize pickup routes and prevent overflow.', delay: '0.2' },
    { icon: 'ns-shape-9', title: 'Chemical recycling', desc: 'Advanced processes that convert hard-to-recycle plastics into high-grade reusable materials.', delay: '0.3' },
    { icon: 'ns-shape-10', title: 'Client dashboard', desc: 'Real-time reporting on diversion rates, carbon offsets, and cost savings.', delay: '0.4' },
    { icon: 'ns-shape-11', title: 'Fleet management', desc: 'Carbon-neutral logistics with optimized routing for maximum efficiency.', delay: '0.1' },
    { icon: 'ns-shape-12', title: 'Compliance reporting', desc: 'Automated documentation for environmental regulations and ESG audits.', delay: '0.2' },
    { icon: 'ns-shape-13', title: 'Zero-waste consulting', desc: 'Strategic planning to eliminate waste streams and maximize resource recovery.', delay: '0.3' },
    { icon: 'ns-shape-14', title: 'Circular economy', desc: 'End-to-end systems that close the loop on material lifecycles.', delay: '0.4' },
  ];

  const portfolio = [
    {
      img: asset('/images/img-5.jpg'),
      title: 'Zero-Waste industrial network',
      desc: 'A comprehensive industrial recovery system that diverts 99% of waste from landfill through AI-powered sorting and smart logistics.',
      tags: ['Industrial Recovery', 'AI Sorting', 'Zero-Waste'],
      delay: '0.1',
    },
    {
      img: asset('/images/img-8.jpg'),
      title: 'Metro logistics recovery hub',
      desc: 'An integrated waste management system for a major logistics center, featuring real-time monitoring and automated material separation.',
      tags: ['Logistics', 'Smart Monitoring', 'Automation'],
      delay: '0.2',
    },
    {
      img: asset('/images/img-10.jpg'),
      title: 'Smart city organics loop',
      desc: 'A city-wide organic waste collection and composting program serving 84+ neighborhoods with weekly pickup and community education.',
      tags: ['Municipal', 'Organics', 'Community'],
      delay: '0.3',
    },
    {
      img: asset('/images/img-11.jpg'),
      title: 'Circular tech refurbishment',
      desc: 'E-waste recovery and refurbishment lab that processes electronics into reusable components and certified recycled materials.',
      tags: ['E-Waste', 'Refurbishment', 'Certified Recycling'],
      delay: '0.4',
    },
  ];

  const testimonials = [
    {
      quote: 'Our waste diversion went from 40% to 97% within the first quarter. The dashboard gives our leadership team clear proof of where materials are going.',
      name: 'Sarah Jenkins',
      role: 'Operations Director',
      img: asset('/images/img-20.png'),
      logo: asset('/images/icons/asana-with-black-text.svg'),
      videoUrl: 'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf',
      delay: '0.1',
    },
    {
      quote: 'The rollout was smooth, the reporting was easy for every department to understand, and our costs dropped significantly in the first month.',
      name: 'Marcus Chen',
      role: 'Facilities Manager',
      img: asset('/images/img-21.png'),
      logo: asset('/images/icons/asana-with-black-text.svg'),
      videoUrl: 'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf',
      delay: '0.2',
    },
  ];

  return (
    <main className="bg-background-1">
      {/* Services Hero Section */}
      <section className="bg-background-1 pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48 xl:pb-39">
        <div className="main-container">
          <div className="mx-auto max-w-[920px] text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_svs)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_svs">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Services</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 xl:text-it-heading-1 mt-5 font-normal text-black"
            >
              Tailored recovery for every industry.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mx-auto mt-2 font-normal md:mt-4"
            >
              We deliver tech-driven recovery systems designed to handle diverse waste environments, maximizing value, efficiency, and environmental impact.
            </p>

            <div
              data-block-reveal
              data-delay="0.5"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 md:mt-14"
            >
              <Link to="/projects" className="contents">
                <div className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                      Explore our projects
                    </span>
                  </div>
                </div>
              </Link>

              <Link to="/contact" className="contents">
                <div className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                      Request waste audit
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-background-1 overflow-hidden pb-14 md:pb-18 lg:pb-23 xl:pb-28">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="max-w-[640px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_wwd)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_wwd">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> What We Do</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Comprehensive waste recovery solutions.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              From industrial collection to smart sorting and reporting, we cover every step of the
              recovery lifecycle with precision and accountability.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {services.map((s, idx) => (
              <div
                key={idx}
                data-block-reveal
                data-delay={s.delay}
                className={`col-span-12 sm:col-span-6 ${s.colSpan || 'lg:col-span-4'} ease-3 bg-background-2/5 overflow-hidden rounded-4xl p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-sm md:p-10 lg:p-14`}
              >
                <div className="shadow-6 mb-6 flex h-21 w-15 items-center justify-center rounded-full bg-black px-3 py-6">
                  <span className={`${s.iconClass} text-[28px] text-white`}></span>
                </div>
                <div className="mb-5 space-y-0.5">
                  <h3 className="text-it-heading-5 font-normal text-black">{s.title}</h3>
                  <p className="text-tagline-2 text-background-4/60 font-normal">{s.desc}</p>
                </div>

                <ul className="mb-9 space-y-2">
                  {s.features.map((feat, fidx) => (
                    <li key={fidx} className="text-tagline-2 text-background-4/80 flex items-center gap-2 font-normal">
                      <span className="bg-background-4 flex size-5 items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="stroke-background-1 size-3.5">
                          <path d="M10.125 3.37549L4.875 8.62525L2.25 6.00049" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/service-details" className="contents">
                  <div className="group/button before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                    <div className="relative z-4 overflow-hidden whitespace-nowrap">
                      <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                        Learn more
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background-1 overflow-hidden pb-14 md:pb-18 lg:pb-23 xl:pb-28">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="flex flex-col justify-between gap-y-8 md:flex-row md:items-end md:gap-x-8 lg:gap-x-12 xl:gap-x-14">
            <div className="space-y-3 lg:max-w-[640px]">
              <div data-block-reveal data-delay="0.1" className="inline-block">
                <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1629_31646_wcu)">
                        <path
                          d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1629_31646_wcu">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span> Why Choose Us</span>
                </div>
              </div>

              <h2
                data-text-reveal
                data-reveal-delay="0.2"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
              >
                The science of structural excellence.
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
              >
                From tier-1 equipment to in-house installation and long-term monitoring, we provide a
                complete framework for building a resilient and efficient recovery system.
              </p>
            </div>

            <div data-block-reveal data-delay="0.4" className="shrink-0">
              <Link to="/contact" className="contents">
                <div className="group/button after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                      Contact us
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, idx) => (
              <div
                key={idx}
                className="border-stroke-1/20 h-max space-y-6 p-6 md:border-r md:p-8 lg:p-10.5"
                data-block-reveal
                data-delay={w.delay}
              >
                <span className={`${w.icon} inline-block text-[62px] text-black`}></span>
                <div className="space-y-2">
                  <h3 className="text-it-heading-5 font-normal text-black">{w.title}</h3>
                  <p className="text-tagline-2 text-background-4/60 font-normal">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="max-w-[640px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_port)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_port">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Portfolio</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Recovery projects that deliver results.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              From large-scale logistics hubs to smart city ecosystems, our portfolio reflects how
              advanced recovery systems turn waste into value at scale.
            </p>
          </div>

          <div className="space-y-3">
            {portfolio.map((p, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 items-center justify-between gap-y-3 md:grid-cols-2 md:gap-x-8 lg:gap-x-14"
                data-block-reveal
                data-delay={p.delay}
              >
                <figure className="h-[330px] overflow-hidden rounded-4xl md:h-[380px] lg:h-[500px]">
                  <img src={p.img} alt={p.title} className="size-full object-cover object-center" />
                </figure>

                <div className="space-y-14">
                  <div className="space-y-1">
                    <h3 className="text-[32px] font-normal text-black">{p.title}</h3>
                    <p className="text-tagline-2 text-background-4/60 font-normal">{p.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-tagline-4 bg-background-4/30 inline-block rounded-sm px-3 py-1 font-normal text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients / Testimonials Section */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="mx-auto max-w-[640px] space-y-3 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_tcli)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_tcli">
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
              Trusted by sustainability leaders.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              Our solutions deliver real results, proven through the voices of those driving
              sustainability forward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="grid min-h-[350px] grid-cols-1 gap-x-3 sm:grid-cols-[1fr_0.6fr]"
                data-block-reveal
                data-delay={t.delay}
              >
                <div className="bg-background-4/40 flex h-full flex-col justify-between rounded-4xl p-8 backdrop-blur-[80px]">
                  <p className="text-tagline-1 font-normal text-white">{t.quote}</p>

                  <div className="flex items-center gap-x-2">
                    <figure className="size-11.5 overflow-hidden rounded-full">
                      <img src={t.img} alt={t.name} className="size-full object-cover" />
                    </figure>
                    <div>
                      <h3 className="text-tagline-2 font-semibold text-white">{t.name}</h3>
                      <p className="text-tagline-3 font-normal text-white/60">{t.role}</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-full overflow-hidden rounded-4xl bg-[#D9D9D9] p-10.5 backdrop-blur-[20px] max-sm:h-[300px]">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 size-full object-cover object-center"
                  />
                  <div className="relative z-4 flex h-full flex-col justify-between">
                    <img src={t.logo} alt="Client logo" className="max-w-16" />

                    <button
                      type="button"
                      onClick={() => openModal(t.videoUrl)}
                      className="modal-action inline cursor-pointer text-left"
                      aria-label={`Play ${t.name}'s video testimonial`}
                    >
                      <div className="bg-background-1/10 inline-flex items-center gap-x-2 rounded-sm px-2 py-[5px] backdrop-blur-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M17.8241 9.46667L6.57591 2.59256C6.48117 2.53466 6.37272 2.50304 6.2617 2.50096C6.15069 2.49889 6.04112 2.52642 5.94428 2.58073C5.84744 2.63504 5.76681 2.71417 5.7107 2.80998C5.65458 2.90579 5.625 3.01482 5.625 3.12585V16.8741C5.625 16.9851 5.65458 17.0941 5.7107 17.19C5.76067 17.2858 5.84744 17.3649 5.94428 17.4192C6.04112 17.4735 6.15069 17.501 6.2617 17.499C6.37272 17.4969 6.48117 17.4653 6.57591 17.4074L17.8241 10.5333C17.9154 10.4774 17.9909 10.3991 18.0433 10.3057C18.0957 10.2123 18.1232 10.107 18.1232 9.99997C18.1232 9.8929 18.0957 9.78763 18.0433 9.69425C17.9909 9.60086 17.9154 9.5225 17.8241 9.46667Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-tagline-4 font-normal text-white">Watch Video</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default ServicesPage;
