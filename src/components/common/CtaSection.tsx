import React from 'react';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready to Build a Smarter Energy System?',
  description = 'Tell us your connected load, monthly consumption and energy requirements. Our team will help identify the right combination of solar, storage and backup power.',
  buttonText = 'Get Your Energy Assessment',
  buttonLink = '/contact',
}) => {
  return (
    <section className="bg-background-1 overflow-hidden pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20">
      <div className="main-container">
        <div className="bg-background-3 mx-auto flex flex-col items-center justify-between gap-6 rounded-3xl p-6 text-center sm:p-8 md:p-10 lg:flex-row lg:px-12 lg:py-10 lg:text-left xl:px-14 xl:py-12">
          <div className="space-y-3 lg:max-w-[560px]">
            <h2
              data-text-reveal
              data-reveal-delay="0.1"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 font-normal text-black"
            >
              {title}
            </h2>
            <p
              data-text-reveal
              data-reveal-delay="0.2"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 font-normal"
            >
              {description}
            </p>
          </div>

          <div data-block-reveal data-delay="0.3" className="shrink-0 lg:self-center">
            <Link to={buttonLink}>
              <div className="group/button before:bg-light-green after:bg-background-4 text-tagline-2 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-black backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:transition-all before:duration-500 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-500 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span className="ease-button relative inline-block transition-all duration-300 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-white">
                    {buttonText}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
