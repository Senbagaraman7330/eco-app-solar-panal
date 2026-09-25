import React, { useState } from 'react';
import { asset } from '../lib/asset';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    load: '',
    consumption: '',
    solarRequirement: '',
    bessRequirement: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        location: '',
        load: '',
        consumption: '',
        solarRequirement: '',
        bessRequirement: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section className="pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48 xl:pb-39">
        <div className="main-container">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-6" data-block-reveal data-delay="0.1">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1629_31646_cnt)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1629_31646_cnt">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Contact Us</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-3 md:text-it-heading-2 xl:text-it-heading-1 mt-4 mb-5 font-normal text-black"
            >
              Let&apos;s Design Your Energy Solution.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-2 text-background-4/60 font-inter-tight mx-auto max-w-[640px] font-normal"
            >
              Whether you&apos;re planning a new solar installation, expanding an existing system, or implementing battery energy storage, our technical team will help engineer the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 md:pb-24 lg:pb-28 xl:pb-32">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-y-10 md:gap-y-14 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-19">
            {/* Left: Heading + Form */}
            <div className="space-y-8 md:space-y-12">
              {/* <div>
                <div className="mb-5" data-block-reveal data-delay="0.2">
                  <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_1629_31646_gi)">
                          <path
                            d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1629_31646_gi">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span> Get in Touch</span>
                  </div>
                </div>

                <h2
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 xl:text-it-heading-2 font-normal text-black"
                >
                  Ready to power your facility with clean solar?
                </h2>

                <p
                  data-text-reveal
                  data-reveal-delay="0.3"
                  className="text-tagline-2 text-background-4/60 font-inter-tight mt-3 max-w-[460px] font-normal"
                >
                  Tell us about your connected load and energy requirements. Our technical team will get back to you within 24 hours with a custom engineering plan.
                </p>
              </div> */}

              <div data-block-reveal data-delay="0.3" className="rounded-4xl bg-white px-8 py-10 sm:px-10.5 sm:py-14 shadow-sm border border-black/5">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="size-14 mx-auto rounded-full bg-[#B4E50D]/20 text-black flex items-center justify-center font-bold text-2xl">
                      ✓
                    </div>
                    <h3 className="text-it-heading-5 font-normal text-black">Thank you!</h3>
                    <p className="text-tagline-2 text-background-4/60">
                      Your inquiry has been received. A solar technical engineer will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Full Name</label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Company / Facility Name</label>
                        <input
                          type="text" required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Contact Phone Number</label>
                        <input
                          type="tel" required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Business Email Address</label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Project Location (City, State)</label>
                        <input
                          type="text" required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="City, State"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Sanctioned Connected Load</label>
                        <input
                          type="text"
                          value={formData.load}
                          onChange={(e) => setFormData({ ...formData, load: e.target.value })}
                          placeholder="e.g. 250 kW / 500 kVA"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Monthly Consumption (Units / kWh)</label>
                        <input
                          type="text"
                          value={formData.consumption}
                          onChange={(e) => setFormData({ ...formData, consumption: e.target.value })}
                          placeholder="e.g. 45,000 kWh / Month"
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Solar Requirement</label>
                        <div className="group relative">
                          <select
                            value={formData.solarRequirement}
                            onChange={(e) => setFormData({ ...formData, solarRequirement: e.target.value })}
                            className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full appearance-none rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                          >
                            <option value="" disabled>Select Requirement</option>
                            <option value="On-Grid Solar">On-Grid Solar</option>
                            <option value="Off-Grid Solar">Off-Grid Solar</option>
                            <option value="Hybrid Solar">Hybrid Solar</option>
                            <option value="MW Ground Mount Solar">MW Ground Mount Solar</option>
                            <option value="Exploring Options">Exploring Options</option>
                          </select>
                          <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 group-focus-within:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-background-4 size-5" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">BESS / Storage Requirement</label>
                      <div className="group relative">
                        <select
                          value={formData.bessRequirement}
                          onChange={(e) => setFormData({ ...formData, bessRequirement: e.target.value })}
                          className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 h-12 w-full appearance-none rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                        >
                          <option value="" disabled>Select BESS Option</option>
                          <option value="Peak Shaving & Tariff Arbitrage">Peak Shaving &amp; Tariff Arbitrage</option>
                          <option value="Diesel Generator (DG) Offset">Diesel Generator (DG) Offset</option>
                          <option value="Critical UPS Emergency Backup">Critical UPS Emergency Backup</option>
                          <option value="Microgrid Power Balancing">Microgrid Power Balancing</option>
                          <option value="No BESS Needed">No BESS Needed</option>
                          <option value="Need Technical Recommendation">Need Technical Recommendation</option>
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 transition-transform duration-300 group-focus-within:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" className="text-background-4 size-5" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-inter-tight text-tagline-1 inline-block font-normal text-black">Project Details / Available Rooftop Area</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your rooftop area (sq. ft.), power tariffs, or specific operational requirements..."
                        className="text-tagline-2 font-inter-tight bg-background-1 text-background-4 placeholder:text-background-4/60 min-h-[120px] w-full resize-none rounded-lg px-5 py-3 font-normal focus:ring-2 focus:ring-[#B4E50D] focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="group/button after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-6 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1 cursor-pointer"
                      >
                        <div className="relative z-4 overflow-hidden whitespace-nowrap">
                          <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                            Request a Consultation
                          </span>
                        </div>
                      </button>

                      <p className="font-inter-tight text-tagline-3 text-background-4/60 max-w-[240px] font-normal sm:text-right">
                        Clicking Submit means you agree to our Terms of Service.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Image + Contact Info Cards */}
            <div>
              <figure data-block-reveal data-delay="0.2" className="h-[320px] overflow-hidden rounded-4xl md:h-[420px] lg:h-[480px]">
                <img
                  src={asset('/images/img-19.jpg')}
                  alt="Solar engineering team on site"
                  className="size-full object-cover object-center"
                />
              </figure>

              <div className="space-y-1 p-8">
                {/* Email */}
                <div data-block-reveal data-delay="0.3" className="flex items-start gap-3 py-2">
                  <div className="shadow-8 relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-(image:--color-gradient-2) p-2.5">
                    <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                    <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                    <div className="relative z-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6L12 13L2 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <p className="font-inter-tight text-it-heading-6 font-normal text-black">Email Us</p>
                    <a href="mailto:info@ecoapps.in" className="text-tagline-2 text-background-4/60 hover:text-background-4 block font-normal transition-colors">
                      info@ecoapps.in
                    </a>
                    <a href="mailto:support@ecoapps.in" className="text-tagline-2 text-background-4/60 hover:text-background-4 block font-normal transition-colors">
                      support@ecoapps.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div data-block-reveal data-delay="0.4" className="flex items-start gap-3 py-2">
                  <div className="shadow-8 relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-(image:--color-gradient-2) p-2.5">
                    <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                    <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                    <div className="relative z-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.9453 3.75C16.2167 4.09194 17.376 4.76196 18.307 5.69294C19.238 6.62392 19.908 7.78319 20.2499 9.05462" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.168 6.64844C14.9308 6.8536 15.6264 7.25561 16.185 7.8142C16.7436 8.37279 17.1456 9.06835 17.3507 9.83121" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4252 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.6139 15.7594 13.6025C15.8837 13.5911 16.0088 13.6109 16.1235 13.66L20.5144 15.5419C20.6636 15.6052 20.7881 15.7154 20.8693 15.8556C20.9504 15.9959 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1273C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.49997C3.75006 6.40513 4.14918 5.34786 4.87264 4.5261C5.5961 3.70435 6.59428 3.17448 7.68028 3.03569C7.84117 3.01622 8.00403 3.04956 8.14432 3.1307C8.28461 3.21183 8.39473 3.33636 8.4581 3.48552L10.3416 7.88032C10.3903 7.994 10.4101 8.11796 10.3994 8.24116C10.3886 8.36436 10.3475 8.48299 10.2798 8.58647L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3288C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <p className="font-inter-tight text-it-heading-6 font-normal text-black">Direct Line</p>
                    <a href="tel:+919876543210" className="text-tagline-2 text-background-4/60 hover:text-background-4 block font-normal transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-tagline-2 text-background-4/60 font-normal">24/7 Operations &amp; Maintenance Support</p>
                  </div>
                </div>

                {/* Location */}
                <div data-block-reveal data-delay="0.5" className="flex items-start gap-3 py-2">
                  <div className="shadow-8 relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-(image:--color-gradient-2) p-2.5">
                    <div className="absolute -top-3 -left-5 z-2 h-8 w-15 rounded-[60px] bg-[#A6DAFF] blur-[17px]"></div>
                    <div className="absolute -top-7 -left-4 z-1 h-11.5 w-15 rounded-[60px] bg-[#A6DAFF] opacity-40 mix-blend-plus-lighter blur-[17px]"></div>
                    <div className="relative z-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <p className="font-inter-tight text-it-heading-6 font-normal text-black">Headquarters</p>
                    <p className="text-tagline-2 text-background-4/60 font-normal">
                      Eco Apps Solutions Pvt. Ltd.<br />India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
