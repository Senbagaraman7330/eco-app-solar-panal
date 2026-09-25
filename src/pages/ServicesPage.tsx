import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { asset } from '../lib/asset';
import CtaSection from '../components/common/CtaSection';

export const ServicesPage: React.FC = () => {
  const { openModal } = useModal();

  const services = [
    {
      id: 'on-grid',
      path: '/on-grid',
      iconClass: 'ns-shape-2',
      title: 'On-Grid Solar Systems',
      desc: 'Connect your solar PV installation directly to the utility grid to power connected loads and export surplus energy for net metering savings.',
      features: ['Net metering synchronization', 'High-efficiency Tier 1 panels', 'Maximized utility bill savings', 'Fast ROI & low maintenance'],
      delay: '0.1',
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'off-grid',
      path: '/off-grid',
      iconClass: 'ns-shape-3',
      title: 'Off-Grid Solar Systems',
      desc: 'Operate completely independent of the electricity grid by pairing robust solar generation with high-capacity battery storage banks.',
      features: ['Dedicated LFP battery bank', 'Industrial stand-alone inverters', 'Automated diesel generator integration', '24/7 power in remote locations'],
      delay: '0.2',
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'hybrid',
      path: '/hybrid',
      iconClass: 'ns-shape-4',
      title: 'Hybrid Solar Systems',
      desc: 'Combine solar generation, battery energy storage, and grid power into one intelligent ecosystem for flexibility and uninterrupted backup.',
      features: ['Smart grid/battery load shifting', 'Instant UPS backup transition (<10ms)', 'Peak demand charge reduction', 'Nighttime solar self-consumption'],
      delay: '0.3',
      colSpan: 'lg:col-span-6',
    },
    {
      id: 'bess',
      path: '/bess',
      iconClass: 'ns-shape-5',
      title: 'Battery Energy Storage (BESS)',
      desc: 'Utility and industrial-grade battery systems engineered for peak shaving, demand management, tariff arbitrage, and microgrid resilience.',
      features: ['Tier-1 LFP chemistry safety', 'Intelligent Energy Management (EMS)', 'Cell-level BMS monitoring', 'Automated peak shaving & arbitrage'],
      delay: '0.4',
      colSpan: 'lg:col-span-6',
    },
  ];

  const whyChooseUs = [
    { icon: 'ns-shape-7', title: 'Tier 1 Equipment', desc: 'Sourcing only high-efficiency mono-PERC/TOPCon modules and industrial PCS inverters.', delay: '0.1' },
    { icon: 'ns-shape-8', title: 'Smart Telemetry', desc: 'Real-time string and cell-level monitoring for proactive fault identification.', delay: '0.2' },
    { icon: 'ns-shape-9', title: 'Turnkey EPC', desc: 'End-to-end engineering, permitting, CEIG approvals, procurement, and execution.', delay: '0.3' },
    { icon: 'ns-shape-10', title: 'Client Analytics', desc: 'Live cloud telemetry on generation yield, PR ratio, carbon offsets, and energy savings.', delay: '0.4' },
    { icon: 'ns-shape-11', title: 'Fast-Track Execution', desc: 'Streamlined project management ensuring on-time commissioning with zero delays.', delay: '0.1' },
    { icon: 'ns-shape-12', title: 'Regulatory Compliance', desc: 'Complete liaisoning for DISCOM net-metering sanctions and grid synchronizations.', delay: '0.2' },
    { icon: 'ns-shape-13', title: 'Energy Audits', desc: 'Detailed load profiling and thermal audits to size optimal solar & BESS configurations.', delay: '0.3' },
    { icon: 'ns-shape-14', title: 'Lifecycle O&M', desc: 'Preventative maintenance, module cleaning schedules, and performance ratio guarantees.', delay: '0.4' },
  ];

  const portfolio = [
    {
      img: asset('/images/img-5.jpg'),
      title: 'MW-Scale Industrial Solar Plant',
      desc: 'A comprehensive rooftop & ground-mount solar installation for a major manufacturing plant, delivering 1.8 MWp with synchronized net-metering.',
      tags: ['Industrial Rooftop', 'On-Grid', 'MW-Scale'],
      delay: '0.1',
    },
    {
      img: asset('/images/img-8.jpg'),
      title: 'Commercial Hybrid Solar & BESS Hub',
      desc: 'An integrated 500 kWp solar PV system coupled with a 1 MWh BESS container for peak shaving and emergency power reliability.',
      tags: ['Commercial', 'Hybrid System', '1 MWh BESS'],
      delay: '0.2',
    },
    {
      img: asset('/images/img-10.jpg'),
      title: 'Remote Agricultural Off-Grid Microgrid',
      desc: 'A stand-alone 250 kW solar microgrid with lithium energy storage powering high-volume irrigation pumps and cold storage units.',
      tags: ['Agriculture', 'Off-Grid', 'LFP Storage'],
      delay: '0.3',
    },
    {
      img: asset('/images/img-11.jpg'),
      title: 'Healthcare Campus Solar & Backup Ecosystem',
      desc: 'A critical-load solar installation engineered with zero-break UPS transition, keeping intensive care and diagnostic equipment fully powered 24/7.',
      tags: ['Hospital', 'Critical Backup', 'Solar EPC'],
      delay: '0.4',
    },
  ];

  const testimonials = [
    {
      quote: 'Eco Apps Solutions installed our 1.2 MW rooftop solar system on schedule. Our monthly electricity expenditure dropped by 65% in the first quarter of commissioning.',
      name: 'Sarah Jenkins',
      role: 'Operations Director, Precision Engineering',
      img: asset('/images/img-20.png'),
      logo: asset('/images/icons/asana-with-black-text.svg'),
      videoUrl: 'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf',
      delay: '0.1',
    },
    {
      quote: 'The BESS and hybrid solar setup has completely eliminated our diesel generator usage during peak tariff hours. Outstanding engineering and support team.',
      name: 'Marcus Chen',
      role: 'Facilities Head, Apex Logistics Hub',
      img: asset('/images/img-21.png'),
      logo: asset('/images/icons/asana-with-black-text.svg'),
      videoUrl: 'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf',
      delay: '0.2',
    },
  ];

  return (
    <main className="bg-background-1">
      {/* Services Hero Section with Premium Background Image & Smoky Glass Card */}
      <section className="relative overflow-hidden bg-[#05101E] pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 xl:pt-48 xl:pb-36">
        {/* Background Image Container with Gradient Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={asset('/images/img-1.jpg')}
            alt="Solar EPC & Energy Solutions"
            className="size-full object-cover object-center scale-105 opacity-70 transition-transform duration-1000"
          />
          <div className="absolute inset-0 hero-smoky-bg" />
          <div className="absolute -top-32 -left-32 size-96 rounded-full hero-glow-accent-1 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 size-96 rounded-full hero-glow-accent-2 blur-[140px] pointer-events-none" />
        </div>

        <div className="main-container relative z-1">
          {/* Smoky Glassmorphic Card Container for Hero Text */}
          <div className="hero-glass-card mx-auto max-w-[920px] rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 space-y-6 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="hero-badge-glass shadow-4 font-pt-mono inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 text-xs leading-[150%] font-normal">
                <span className="size-2 rounded-full bg-[#B4E50D] animate-pulse"></span>
                <span>End-to-End Solar EPC Solutions</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 md:text-it-heading-1 xl:text-[56px] xl:leading-[1.12] font-semibold text-white tracking-[-0.03em] drop-shadow-md"
              style={{ color: '#ffffff' }}
            >
              End-to-End Solar EPC Solutions
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-2 md:text-tagline-1 text-white font-inter-tight max-w-[760px] font-normal mx-auto leading-relaxed drop-shadow"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              From Concept to Commissioning — We Engineer the Complete Solar Project.
              <br className="hidden md:block" />
              Our EPC approach covers the complete project lifecycle, allowing customers to work with a single technical partner from project development through long-term operations and maintenance.
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
                      Start your EPC project
                    </span>
                  </div>
                </div>
              </Link>

              <Link to="/contact" className="contents">
                <div className="group/button max-md:mx-auto max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1 cursor-pointer">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                      Request site assessment
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - 4 Core Services */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28">
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
                <span> Core Offerings</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Our 4 Solar &amp; Storage Systems
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              Choose the right system architecture tailored for your operational model, grid reliability, and economic targets.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {services.map((s, idx) => (
              <div
                key={idx}
                id={s.id}
                data-block-reveal
                data-delay={s.delay}
                className={`col-span-12 ${s.colSpan} flex flex-col justify-between ease-3 bg-background-2/5 overflow-hidden rounded-4xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-md md:p-10 lg:p-12 border border-black/5`}
              >
                <div>
                  <div className="shadow-6 mb-6 flex h-20 w-15 items-center justify-center rounded-2xl bg-black px-3 py-4">
                    <span className={`${s.iconClass} text-[28px] text-white`}></span>
                  </div>
                  <div className="mb-4 space-y-1.5">
                    <h3 className="text-it-heading-4 font-normal text-black">{s.title}</h3>
                    <p className="text-tagline-2 text-background-4/70 font-normal leading-relaxed">{s.desc}</p>
                  </div>

                  <ul className="mb-8 space-y-2.5">
                    {s.features.map((feat, fidx) => (
                      <li key={fidx} className="text-tagline-2 text-background-4/80 flex items-center gap-2.5 font-normal">
                        <span className="bg-[#B4E50D]/20 text-[#323A44] flex size-5 shrink-0 items-center justify-center rounded-full font-bold text-xs">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link to={s.path} className="contents">
                    <div className="group/button mt-3 before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-6 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                      <div className="relative z-4 overflow-hidden whitespace-nowrap">
                        <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                          Explore {s.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="bg-background-1 overflow-hidden pb-14 md:pb-18 lg:pb-23 xl:pb-28">
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
                Engineering before equipment.
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
              >
                From Tier-1 mono-PERC/TOPCon modules to dedicated in-house engineering and 24/7 telemetry, we deliver turnkey systems built for decades of peak kWh yield.
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
      </section> */}

      {/* Portfolio Section */}
      {/* <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
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
              Solar installations that deliver peak ROI.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              From MW-scale manufacturing rooftops to commercial BESS storage hubs, our track record represents proven renewable power at scale.
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
      </section> */}

      {/* Clients / Testimonials Section */}
      {/* <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
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
              Trusted by industry and commercial leaders.
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              Our clean energy systems deliver verifiable kilowatt-hour yields and sustained utility cost reductions.
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
      </section> */}

      <CtaSection />
    </main>
  );
};

export default ServicesPage;
