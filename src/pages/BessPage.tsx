import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';
import FaqAccordion from '../components/common/FaqAccordion';

const designProcessItems = [
  { question: 'Step 1 — Energy & Tariff Audit', answer: 'Understand your consumption logs, peak demands, and time-of-day (ToD) tariff schedules.', defaultOpen: true },
  { question: 'Step 2 — Load & Demand Analysis', answer: 'Identify peak demand spikes, critical backup circuits, and intermittent load patterns.' },
  { question: 'Step 3 — Solar Integration Analysis', answer: 'Evaluate existing or proposed solar generation curves to size optimal charge absorption.' },
  { question: 'Step 4 — Storage Sizing (kW & kWh)', answer: 'Calculate the exact power (kW rating) and energy (kWh capacity) requirement for maximal ROI.' },
  { question: 'Step 5 — Operating Strategy Design', answer: 'Program algorithms for peak shaving, tariff arbitrage, solar self-consumption, or emergency backup.' },
  { question: 'Step 6 — System Engineering', answer: 'Configure Tier-1 LFP battery racks, bidirectional PCS, multi-tier BMS, EMS controller, and HVAC cooling.' },
  { question: 'Step 7 — Installation & Commissioning', answer: 'Execute civil footings, electrical tie-in, testing, protection calibration, and grid compliance verification.' },
  { question: 'Step 8 — 24/7 Monitoring & O&M', answer: 'Continuous cloud telemetry tracking, predictive thermal analytics, and lifecycle performance warranties.' },
];

const safetyItems = [
  { question: 'Battery Management System (BMS)', answer: 'Multi-tiered cell-level monitoring of voltage, current, internal resistance, and state of charge (SoC).', defaultOpen: true },
  { question: 'Thermal Management & Cooling', answer: 'Precision HVAC and liquid cooling maintain optimal cell temperatures (15°C - 35°C) preventing thermal degradation.' },
  { question: 'Multi-Stage Electrical Protection', answer: 'Instantaneous short-circuit protection, DC fast-fuses, surge suppression, and over/under-voltage breakers.' },
  { question: 'Thermal Runaway Prevention', answer: 'Cell-level thermal barrier insulation and early-stage off-gas sensor detection.' },
  { question: 'Fire Detection & Suppression', answer: 'Integrated aerosol fire suppression systems, deflagration pressure relief vents, and optical smoke sensors.' },
  { question: 'Emergency Power Off (EPO)', answer: 'Immediate physical and remote emergency shutdown controls for instant electrical isolation.' },
  { question: '24/7 Cloud Telemetry & SCADA', answer: 'Real-time cloud monitoring with automated alerts and predictive diagnostics.' },
];

export const BessPage: React.FC = () => {
  return (
    <>
      {/* ========================== Features / Hero Section with Background Image & Smoky Glass Card =========================== */}
      <section className="relative overflow-hidden bg-[#05101E] pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 xl:pt-48 xl:pb-36">
        {/* Background Image Container with Gradient Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={asset('/images/img-12.jpg')}
            alt="Battery Energy Storage System BESS"
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
                <span>BESS Solutions</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 md:text-it-heading-1 xl:text-[54px] xl:leading-[1.15] font-semibold text-white tracking-[-0.03em] drop-shadow-md"
              style={{ color: '#ffffff' }}
            >
              Store Energy. Shift Power. Control Your Energy.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-2 md:text-tagline-1 text-white font-inter-tight max-w-[720px] font-normal mx-auto leading-relaxed drop-shadow"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              Advanced Battery Energy Storage Systems (BESS) for Commercial, Industrial &amp; Renewable Energy Applications. BESS enables you to store electricity when abundant and dispatch it when it delivers the greatest economic and operational value.
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
                      Consult a BESS Specialist
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
          {/* BESS Applications - Feature Cards */}
          <div>
            <h2 className="text-center font-inter-tight text-it-heading-4 md:text-it-heading-3 font-normal text-black mb-8">
              BESS Applications
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl border border-black/5 shadow-sm">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Peak Shaving</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Reduce power drawn from the grid during high-demand windows. Charge when rates are low; discharge when peak demand charges trigger.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Load Shifting & Arbitrage</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Store low-cost off-peak energy and discharge during expensive peak-tariff periods to maximize time-of-day billing savings.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Solar Energy Storage</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Capture 100% of daytime solar generation to eliminate curtailment and power your facility through the night.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.4" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Renewable Integration</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Smooth renewable generation curves, buffer against solar intermittency, and ensure stable grid injection.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.1" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Backup & Resilience</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Instantaneous UPS-grade power response provides emergency backup to mission-critical industrial loads during grid blackouts.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.2" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Microgrid Support</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Form stable microgrid architectures integrating solar, diesel generators, and grid supply with dynamic frequency control.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.3" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">EV Charging Support</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Buffer against sharp electrical demand spikes from fast-charging EV stations without triggering costly grid upgrades.
                    </p>
                  </div>
                </div>
              </div>

              <div data-block-reveal data-delay="0.4" className="bg-background-3 flex min-h-[240px] flex-col justify-between p-7 md:p-8 rounded-3xl">
                <div>
                  <div className="space-y-1">
                    <h3 className="text-it-heading-5 font-inter-tight font-normal text-black">Diesel Generator Offset</h3>
                    <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                      Substantially cut diesel consumption, fuel transport costs, and generator run-hours with silent battery storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Footprint / Impact Section (How BESS Works) =========================== */}
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
                  <span> How BESS Works</span>
                </div>
              </div>

              <h2
                data-text-reveal
                data-reveal-delay="0.2"
                className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
              >
                Solar Generates When the Sun Shines. Your Business Doesn't Stop When the Sun Sets.
              </h2>

              <p
                data-text-reveal
                data-reveal-delay="0.3"
                className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mt-2 font-normal"
              >
                Solar generation and facility electricity consumption don't always align. BESS bridges this gap with microsecond responsiveness.
              </p>

              <div className="divide-stroke-1/25 mt-8 divide-y">
                <div data-block-reveal data-delay="0.1" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">01. Charge</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Energy from solar or low-tariff grid electricity enters the BESS through a bidirectional Power Conversion System (PCS).
                  </p>
                </div>
                <div data-block-reveal data-delay="0.2" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">02. Store</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Tier-1 Lithium Iron Phosphate (LFP) modules store the electrical energy while the BMS monitors state-of-charge, cell balance, and temperature.
                  </p>
                </div>
                <div data-block-reveal data-delay="0.3" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">03. Manage</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    The intelligent Energy Management System (EMS) calculates optimal dispatch algorithms based on real-time load demand and utility tariff schedules.
                  </p>
                </div>
                <div data-block-reveal data-delay="0.4" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">04. Discharge</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Stored DC power is inverted into clean AC power through the PCS and supplied directly to your facility loads or grid.
                  </p>
                </div>
                <div data-block-reveal data-delay="0.5" className="space-y-2 py-5">
                  <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">05. Protect</h3>
                  <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                    Multi-tier BMS, precision HVAC cooling, automated aerosol suppression, and deflagration venting maintain total system safety.
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
              <img src={asset('/images/img-3.jpg')} alt="Battery Energy Storage System Installation" className="size-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* ========================== BESS Architecture & Components Section =========================== */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="main-container space-y-12">
          <div className="mx-auto max-w-[760px] space-y-3 text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_sd_comp)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_sd_comp">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> System Architecture</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
            >
              Engineered BESS Components
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              Every storage container is built with Tier-1 industrial-grade hardware, active thermal conditioning, and multi-tier digital controllers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">01. Core Storage</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Battery System (LFP)</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  High-cycle Lithium Iron Phosphate (LiFePO4) prismatic cells, modular rack architectures, and 6,000+ cycle life.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">02. Power Conversion</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">PCS (Inverter)</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Bidirectional Power Conversion System converting AC to DC (charge) and DC to AC (discharge) with 4-quadrant support.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">03. Cell Protection</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Multi-Tier BMS</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Multi-tiered Battery Management System monitoring individual cell voltages, currents, internal resistance, and state-of-charge.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.4" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">04. Smart Brain</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">EMS Controller</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Smart Energy Management System automating tariff arbitrage, peak shaving algorithms, solar matching, and dispatch logic.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.1" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">05. Temperature Control</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Thermal Management</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Precision HVAC and liquid cooling maintain optimal cell temperatures (15°C - 35°C), preventing degradation and hotspot formation.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.2" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">06. Active Safety</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Safety & Protection</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Class-leading aerosol fire suppression systems, deflagration pressure relief vents, fast-acting DC fuses, and isolation breakers.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.3" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">07. Remote Insights</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Cloud SCADA Telemetry</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  24/7 remote cloud monitoring, real-time SoC telemetry, predictive maintenance alerts, and historical performance reporting.
                </p>
              </div>
            </div>

            <div data-block-reveal data-delay="0.4" className="bg-background-3 flex flex-col justify-between p-7 rounded-3xl border border-black/5 shadow-sm">
              <div className="space-y-2">
                <span className="font-pt-mono text-xs font-semibold text-[#1855B6]">08. Dispatch Modes</span>
                <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">Operating Strategies</h3>
                <p className="text-tagline-3 text-background-4/60 font-inter-tight font-normal">
                  Solar self-consumption, peak demand shaving, ToD tariff arbitrage, emergency UPS backup mode, and microgrid islanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Solution Design Process Section =========================== */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 xl:gap-x-14">
            {/* Left Content Column */}
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-3 sticky top-28">
                <div data-block-reveal data-delay="0.1" className="inline-block">
                  <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_sd_proc)">
                          <path
                            d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_sd_proc">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span> Engineering Methodology</span>
                  </div>
                </div>

                <h2
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
                >
                  Solution Design Process
                </h2>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
                >
                  We don't size batteries by guesswork. We engineer the exact power (kW) and energy capacity (kWh) tailored to your operational profile and maximum financial ROI.
                </p>

                <div data-block-reveal data-delay="0.4" className="pt-8">
                  <Link to="/contact">
                    <div className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                      <div className="relative z-4 overflow-hidden whitespace-nowrap">
                        <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                          Design My BESS Solution
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Accordion Column */}
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-4">
                <h3 className="font-inter-tight text-it-heading-4 font-normal text-black">The 8-Step Engineering Process</h3>
                <FaqAccordion items={designProcessItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== Safety & Protection Section =========================== */}
      <section className="bg-background-1 overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 xl:gap-x-14">
            {/* Left Content Column */}
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-3 sticky top-28">
                <div data-block-reveal data-delay="0.1" className="inline-block">
                  <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_sd_safe)">
                          <path
                            d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_sd_safe">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span> Safety & Compliance</span>
                  </div>
                </div>

                <h2
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
                >
                  Multi-Layered BESS Safety Systems
                </h2>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
                >
                  Storage performance starts with safety. Our systems are engineered with multi-layered fail-safes including cell-level thermal barriers, precision cooling, and automated aerosol suppression.
                </p>

                <div data-block-reveal data-delay="0.4" className="pt-8">
                  <Link to="/contact">
                    <div className="group/button max-md:flex! max-md:w-[80%] after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                      <div className="relative z-4 overflow-hidden whitespace-nowrap">
                        <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                          Review Safety Specifications
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Accordion Column */}
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-4">
                <h3 className="font-inter-tight text-it-heading-4 font-normal text-black">Fail-Safe Protection Standards</h3>
                <FaqAccordion items={safetyItems} />
              </div>
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
                Your Energy Doesn't Have to Follow the Grid.
              </h2>
              <p
                data-text-reveal
                data-reveal-delay="0.2"
                className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
              >
                Store it. Shift it. Optimize it. Talk to our energy-storage specialists about custom designing a BESS system around your facility's power profile.
              </p>
            </div>

            <div data-block-reveal data-delay="0.3" className="shrink-0 lg:self-center">
              <Link to="/contact">
                <div className="group/button before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                  <div className="relative z-4 overflow-hidden whitespace-nowrap">
                    <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                      Get a BESS Proposal
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

export default BessPage;
