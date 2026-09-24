import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
  defaultOpenIndex?: number;
}

export const defaultFaqList: FaqItem[] = [
  {
    question: 'How do you verify recycling percentages in your reports?',
    answer:
      'We combine bin-level sensor data, facility weighbridge records, material recovery tickets, and third-party audit samples so every reported percentage is traceable.',
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

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items = defaultFaqList,
  defaultOpenIndex = 0,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([defaultOpenIndex]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const leftItems = items.slice(0, Math.ceil(items.length / 2));
  const rightItems = items.slice(Math.ceil(items.length / 2));

  return (
    <div className="grid grid-cols-1 gap-x-14 gap-y-2 lg:grid-cols-2">
      {/* Left Column */}
      <div data-block-reveal data-delay="0.1" className="accordion space-y-2">
        {leftItems.map((item, idx) => {
          const actualIndex = idx;
          const isOpen = openIndexes.includes(actualIndex);
          return (
            <div
              key={actualIndex}
              data-state={isOpen ? 'open' : 'closed'}
              className={`accordion-item w-full overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'bg-background-3' : 'bg-white'
              }`}
            >
              <h3
                onClick={() => toggleItem(actualIndex)}
                className={`accordion-action flex w-full cursor-pointer items-start justify-between gap-6 p-7 text-left transition-all duration-300 ease-in-out md:p-10.5 ${
                  isOpen ? 'pb-0' : ''
                }`}
              >
                <button
                  type="button"
                  className="text-it-heading-6 font-inter-tight max-w-[460px] text-left font-normal text-black cursor-pointer"
                >
                  {item.question}
                </button>
                <span
                  data-state={isOpen ? 'open' : 'closed'}
                  className={`accordion-icon group shadow-6 relative flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${
                    isOpen ? 'bg-background-3 text-background-5' : 'bg-background-5 text-white'
                  }`}
                >
                  <span
                    className={`before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-3 before:-translate-1/2 before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-3 after:-translate-1/2 after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:content-[''] ${
                      isOpen ? 'after:rotate-0' : 'after:rotate-90'
                    }`}
                  ></span>
                </span>
              </h3>
              {isOpen && (
                <div className="accordion-content w-full">
                  <p className="accordion-content-text text-tagline-3 sm:text-tagline-2 font-inter-tight w-full px-7 pb-7 text-black/60 md:px-10.5 md:pb-10.5 cursor-text text-left transition-all duration-300 ease-in-out pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column */}
      <div data-block-reveal data-delay="0.2" className="accordion space-y-2">
        {rightItems.map((item, idx) => {
          const actualIndex = leftItems.length + idx;
          const isOpen = openIndexes.includes(actualIndex);
          return (
            <div
              key={actualIndex}
              data-state={isOpen ? 'open' : 'closed'}
              className={`accordion-item w-full overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'bg-background-3' : 'bg-white'
              }`}
            >
              <h3
                onClick={() => toggleItem(actualIndex)}
                className={`accordion-action flex w-full cursor-pointer items-start justify-between gap-6 p-7 text-left transition-all duration-300 ease-in-out md:p-10.5 ${
                  isOpen ? 'pb-0' : ''
                }`}
              >
                <button
                  type="button"
                  className="text-it-heading-6 font-inter-tight max-w-[460px] text-left font-normal text-black cursor-pointer"
                >
                  {item.question}
                </button>
                <span
                  data-state={isOpen ? 'open' : 'closed'}
                  className={`accordion-icon group shadow-6 relative flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${
                    isOpen ? 'bg-background-3 text-background-5' : 'bg-background-5 text-white'
                  }`}
                >
                  <span
                    className={`before:absolute before:top-1/2 before:left-1/2 before:h-px before:w-3 before:-translate-1/2 before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-px after:w-3 after:-translate-1/2 after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:content-[''] ${
                      isOpen ? 'after:rotate-0' : 'after:rotate-90'
                    }`}
                  ></span>
                </span>
              </h3>
              {isOpen && (
                <div className="accordion-content w-full">
                  <p className="accordion-content-text text-tagline-3 sm:text-tagline-2 font-inter-tight w-full px-7 pb-7 text-black/60 md:px-10.5 md:pb-10.5 cursor-text text-left transition-all duration-300 ease-in-out pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
