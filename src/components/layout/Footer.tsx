import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden bg-[#05101E] pt-14 pb-8 md:pt-18 md:pb-8 lg:pt-20 lg:pb-8">
      <div className="main-container">
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
            <div data-block-reveal data-delay="0.1" className="col-span-12 lg:col-span-6">
              <h2 className="text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 font-inter-tight font-normal text-white">
                Powering businesses with smarter solar & energy storage.
              </h2>

              <div className="mt-8">
                <Link to="/services">
                  <div className="group/button after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                    <div className="relative z-4 overflow-hidden whitespace-nowrap">
                      <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                        Explore solutions
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-6">
              <div data-block-reveal data-delay="0.2" className="space-y-3">
                <p className="font-inter-tight text-tagline-2 font-normal text-white">Solar Solutions</p>
                <ul className="space-y-2">
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/services#on-grid">
                      On-Grid Solar
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/services#off-grid">
                      Off-Grid Solar
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/services#hybrid">
                      Hybrid Solar
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/services#bess">
                      BESS / Energy Storage
                    </Link>
                  </li>
                </ul>
              </div>

              <div data-block-reveal data-delay="0.3" className="space-y-3">
                <p className="font-inter-tight text-tagline-2 font-normal text-white">Company</p>
                <ul className="space-y-2">
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/services">
                      Solar Solutions
                    </Link>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <Link className="footer-link transition-colors hover:text-white" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div data-block-reveal data-delay="0.4" className="space-y-3">
                <p className="font-inter-tight text-tagline-2 font-normal text-white">Contact Us</p>
                <ul className="space-y-2">
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <span>1234 Recovery Way, Suite 100</span>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <span>Austin, TX 78701</span>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <a className="footer-link transition-colors hover:text-white" href="tel:8005550199">
                      (800) 555-0199
                    </a>
                  </li>
                  <li className="font-inter-tight text-tagline-2 font-normal text-white/60">
                    <a className="footer-link transition-colors hover:text-white" href="mailto:contact@ecoapps.com">
                      contact@ecoapps.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-2" data-block-reveal data-delay="0.4" data-start="top 100%">
            <h2
              data-footer-title
              className="font-inter-tight footer-title text-center text-[50px] leading-[1.1] font-normal tracking-[0.8rem] select-none min-[420px]:text-[60px] sm:text-[100px] md:text-[130px] lg:tracking-[2.2rem] xl:text-[14vw] 2xl:text-[clamp(4.5rem,16vw,18rem)] transition-all duration-300 hover:tracking-[2.5rem]"
            >
              Eco Apps
            </h2>

            <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
              <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                @copyright 2026 Eco Apps Solutions. All rights reserved.
              </p>

              <div className="flex items-center justify-center">
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 px-4 py-2.5 transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                      stroke="#B4E50D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M11.25 10.5V16.5" stroke="#B4E50D" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.25 10.5V16.5" stroke="#B4E50D" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5"
                      stroke="#B4E50D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z"
                      fill="#B4E50D"
                    />
                  </svg>
                  <span className="font-inter-tight text-tagline-2 font-normal text-white">LinkedIn</span>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 px-4 py-2.5 transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#B4E50D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.3703C16.1234 12.2025 15.9813 13.0525 15.5938 13.7993C15.2063 14.5461 14.5932 15.1517 13.8416 15.53C13.0901 15.9082 12.2385 16.0399 11.4078 15.9062C10.5771 15.7726 9.80977 15.3804 9.21485 14.7855C8.61993 14.1905 8.22774 13.4232 8.09408 12.5925C7.96042 11.7619 8.09208 10.9102 8.47034 10.1587C8.8486 9.40716 9.4542 8.79404 10.201 8.40654C10.9478 8.01904 11.7978 7.87689 12.63 8.0003C13.4789 8.12619 14.2649 8.52176 14.8717 9.12861C15.4785 9.73545 15.8741 10.5214 16 11.3703Z"
                      stroke="#B4E50D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M17.5 6.5H17.51" stroke="#B4E50D" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-inter-tight text-tagline-2 font-normal text-white">Instagram</span>
                </a>

                {/* facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 px-4 py-2.5 transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#B4E50D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-inter-tight text-tagline-2 font-normal text-white">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
