import React from 'react';
import FaqAccordion from '../components/common/FaqAccordion';
import CtaSection from '../components/common/CtaSection';

const leftFaqItems = [
  {
    question: 'How do you verify recycling percentages in your reports?',
    answer:
      'We combine bin-level sensor data, facility weighbridge records, material recovery tickets, and third-party audit samples so every reported percentage is traceable.',
    defaultOpen: true,
  },
  {
    question: 'Can you handle hazardous or medical waste?',
    answer:
      'Yes. We separate regulated streams from standard recycling and route them through certified partners with documented chain-of-custody at every step.',
  },
  {
    question: "What happens to materials that can't be mechanically recycled?",
    answer:
      'Difficult materials are directed to chemical recycling, waste-to-resource partners, or compliant recovery pathways before landfill is considered.',
  },
  {
    question: "Does your system integrate with my company's ERP?",
    answer:
      'Yes. We support API-based integration with ERP, procurement, ESG reporting, and facilities management platforms.',
  },
];

const rightFaqItems = [
  {
    question: 'How quickly can your system be deployed?',
    answer:
      'Most sites can launch a pilot in two to four weeks after audit approval, with full deployment planned around facility access and equipment scope.',
  },
  {
    question: 'How do you help reduce operational costs?',
    answer:
      'We reduce unnecessary pickups, improve sorting accuracy, recover resale value, and give teams clear data to prevent waste handling inefficiencies.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve manufacturing, healthcare, hospitality, construction, municipal government, and commercial real estate — any sector generating significant waste streams.',
  },
  {
    question: 'Do you provide ESG compliance reporting?',
    answer:
      'Yes. Our platform generates audit-ready ESG reports aligned with GRI, SASB, and CDP frameworks, with automated data collection across all your waste streams.',
  },
];

export const FaqPage: React.FC = () => {
  return (
    <>
      {/* ========================== FAQ Section =========================== */}
      <section className="bg-background-1 overflow-hidden pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48 xl:pb-39">
        <div className="main-container">
          <div className="grid grid-cols-1 gap-x-14 gap-y-2 lg:grid-cols-2">
            {/* Left column heading */}
            <div className="col-span-1 mb-10 lg:col-span-2 lg:mb-14">
              <div className="space-y-3">
                <div data-block-reveal data-delay="0.1" className="inline-block">
                  <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_faq_page)">
                          <path
                            d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_faq_page">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span> FAQ</span>
                  </div>
                </div>

                <h2
                  data-text-reveal
                  data-reveal-delay="0.2"
                  className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal text-black"
                >
                  Got questions? We've got answers.
                </h2>
              </div>
            </div>

            {/* Left column: items 1-4 */}
            <div data-block-reveal data-delay="0.1">
              <FaqAccordion items={leftFaqItems} />
            </div>

            {/* Right column: items 5-8 */}
            <div data-block-reveal data-delay="0.2">
              <FaqAccordion items={rightFaqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ========================== CTA Section =========================== */}
      <CtaSection />
    </>
  );
};

export default FaqPage;
