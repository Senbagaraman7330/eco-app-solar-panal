import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center pt-28 pb-16 md:pt-35 md:pb-20 lg:pt-48 lg:pb-24">
      <div className="main-container">
        <div className="text-center">
          <div className="relative">
            <h1
              data-text-reveal
              className="font-satoshi text-[150px] font-medium text-[#323A44] md:text-[270px] xl:text-[308px] xl:leading-[112.338%] xl:tracking-[-8.664px]"
            >
              404
            </h1>
            {/* ghost icon */}
            <div
              data-block-reveal
              data-delay="0.2"
              className="shadow-9 ghost-icon bg-etc-green absolute top-[25%] left-[3%] flex size-20 rounded-xl"
            >
              <img
                src={asset('/images/icons/ghost.svg')}
                alt="Ghost"
                className="block size-full object-cover object-center"
              />
            </div>
            {/* prohibited icon */}
            <div
              data-block-reveal
              data-delay="0.3"
              className="shadow-9 prohibited-icon bg-etc-green absolute top-[38%] right-[3%] size-16 rounded-xl"
            >
              <img
                src={asset('/images/icons/prohibited.svg')}
                alt="Prohibited"
                className="block size-full object-cover object-center"
              />
            </div>
            {/* close icon */}
            <div
              data-block-reveal
              data-delay="0.4"
              className="shadow-9 close-icon bg-etc-green absolute top-[15%] left-[48%] size-12 rounded-xl"
            >
              <img
                src={asset('/images/icons/close.svg')}
                alt="Close"
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mx-auto max-w-[590px] space-y-1.5" data-block-reveal data-delay="0.4">
            <h2 className="text-it-heading-1 text-background-4 text-center">
              &ldquo;It&rsquo;s a work in progress&rdquo;
            </h2>
            <p className="text-tagline-1 text-background-4/60 text-center font-normal">
              It looks like the link you followed has been moved or the page no longer exists. Don&apos;t worry, your event journey doesn&apos;t have to stop here. Our most popular pages are still live and ready to help you plan your next show.
            </p>
          </div>
          <div className="mt-10 inline-flex justify-center" data-block-reveal data-delay="0.4">
            <Link to="/">
              <div className="group/button after:bg-light-green text-tagline-2 shadow-7 hover:shadow-1 before:ease-button after:ease-button relative z-3 inline-flex items-center justify-center overflow-hidden rounded px-5.5 py-3 font-normal text-white backdrop-blur-[20px] before:absolute before:inset-0 before:z-1 before:origin-[50%_90%] before:rounded before:bg-(image:--color-gradient-1) before:transition-all before:duration-600 before:content-[''] after:absolute after:inset-0 after:z-2 after:translate-y-full after:rounded after:transition-all after:duration-600 after:content-[''] hover:before:scale-88 hover:after:translate-y-0 active:scale-1">
                <div className="relative z-4 overflow-hidden whitespace-nowrap">
                  <span className="ease-button relative inline-block transition-all duration-400 [text-shadow:0_-2em_0_currentColor] group-hover/button:translate-y-[2em] group-hover/button:text-black">
                    Back to home
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

export default NotFoundPage;
