import React from 'react';
import CtaSection from '../components/common/CtaSection';
import { asset } from '../lib/asset';

export const BlogDetailsPage: React.FC = () => {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-34 md:pb-11 lg:pt-40 lg:pb-16 xl:pt-44 xl:pb-20.5">
        <div className="main-container space-y-8 md:space-y-10 lg:space-y-14">
          {/* Hero Image */}
          <figure
            data-block-reveal
            data-delay="0.2"
            className="h-[400px] w-full overflow-hidden rounded-4xl md:h-[550px] lg:h-[650px]"
          >
            <img
              src={asset('/images/img-4.jpg')}
              alt="Waste recovery and circular economy facility"
              className="size-full object-cover object-center"
            />
          </figure>

          {/* Article Header */}
          <div className="mx-auto max-w-[850px] space-y-6 md:space-y-8 lg:space-y-10">
            <div data-block-reveal data-delay="0.3">
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
                <span> Blog</span>
              </div>
            </div>

            <h1
              data-text-reveal
              data-reveal-delay="0.4"
              className="font-inter-tight text-it-heading-4 lg:text-it-heading-2 font-normal text-black"
            >
              The future of waste recovery: why 2026 is the year to go circular
            </h1>

            <div data-block-reveal data-delay="0.5" className="flex flex-wrap items-center gap-4">
              <div className="bg-background-4 text-tagline-3 inline-flex items-center gap-2 rounded-sm px-5 py-1.5 font-normal text-white">
                <span>07.19.2026</span>
                <span className="text-background-5"> • </span>
                <span>7 min read</span>
              </div>
              <span className="text-tagline-2 text-background-4/80 font-normal">Elena Marchetti</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="blog-details mx-auto max-w-[850px] space-y-8 md:space-y-10">
            {/* Section 1 */}
            <div data-block-reveal data-delay="0.2" className="space-y-5">
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">
                Why Circular Models Are Replacing Linear Waste
              </h2>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                The traditional &quot;take, make, dispose&quot; model is rapidly losing relevance as resource scarcity intensifies and regulatory pressure mounts. By 2026, cities and corporations worldwide have committed to circular frameworks that treat waste not as an endpoint but as a feedstock for new production cycles. The Ellen MacArthur Foundation&apos;s latest report estimates that circular economy strategies could unlock $4.5 trillion in global economic value by 2030, with waste recovery sitting at the heart of that transformation.
              </p>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                For businesses still operating linear supply chains, the window to pivot is narrowing. Extended producer responsibility laws now cover over 60% of OECD markets, and consumers increasingly reward brands that demonstrate genuine closed-loop practices over those offering surface-level sustainability claims.
              </p>
            </div>

            {/* Section 2 */}
            <div data-block-reveal data-delay="0.3" className="space-y-5">
              <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                Technology Accelerating Recovery Rates
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                AI-powered sorting facilities have become the backbone of modern recovery operations. Optical sensors, robotic arms, and machine learning algorithms can now identify and separate materials at speeds and accuracies that manual sorting simply cannot match. Facilities using these systems report material recovery rates above 95%, compared to the global average of 32% for mixed municipal waste.
              </p>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                Digital product passports, mandated across the EU from 2027, are forcing manufacturers to embed traceability into every item they produce. This data layer enables downstream processors to instantly understand material composition, disassembly instructions, and recyclability scores — dramatically reducing contamination and increasing the value of recovered feedstock.
              </p>
            </div>

            {/* Section 3 */}
            <div data-block-reveal data-delay="0.4" className="space-y-5">
              <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                Urban Mining: The Hidden Resource Beneath Our Cities
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                E-waste remains one of the fastest-growing waste streams on the planet, with over 62 million tonnes generated in 2025 alone. Yet embedded within discarded electronics are recoverable quantities of gold, copper, lithium, and rare earth elements that exceed concentrations found in traditional mining. Urban mining operations are scaling rapidly, with dedicated facilities in Singapore, Belgium, and Canada demonstrating that recovering metals from circuit boards produces up to 80% fewer carbon emissions than virgin extraction.
              </p>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                The economics have shifted decisively. As commodity prices remain volatile and geopolitical tensions disrupt supply chains for critical minerals, the strategic case for domestic urban mining has never been stronger. Governments are now subsidizing collection infrastructure and offering tax incentives to processors who meet minimum recovery thresholds.
              </p>
            </div>

            {/* Section 4 */}
            <div data-block-reveal data-delay="0.5" className="space-y-5">
              <h3 className="text-it-heading-6 font-inter-tight font-normal text-black">
                Policy Shifts Driving Industry Adoption
              </h3>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                2026 marks a turning point in waste policy. The EU&apos;s revised Waste Framework Directive introduces binding recycling targets of 65% for municipal waste and 75% for packaging, with financial penalties for member states that fall short. Similar frameworks are advancing in Australia, Japan, and several US states, creating a predictable regulatory environment that attracts long-term investment into recovery infrastructure.
              </p>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                At the corporate level, ESG reporting standards now require companies to disclose waste diversion rates and circularity metrics alongside carbon emissions. This transparency is reshaping capital allocation — investors are channeling funds toward businesses with demonstrable circular practices, while companies with opaque or linear waste strategies face growing scrutiny and higher borrowing costs.
              </p>
            </div>

            {/* Section 5 */}
            <div data-block-reveal data-delay="0.6" className="space-y-5">
              <h2 className="text-it-heading-4 font-inter-tight font-normal text-black">
                What Comes Next: Building the Circular Decade
              </h2>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                The convergence of technology, policy, and market demand is creating a self-reinforcing cycle that makes circular waste management not just viable but inevitable. Organizations that invest now in closed-loop design, recovery partnerships, and transparent reporting will define the competitive landscape of the next decade. Those that wait risk regulatory fines, supply chain fragility, and irrelevance to a generation of consumers who expect more than greenwash.
              </p>
              <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                2026 is not the finish line — it is the launchpad. The infrastructure, the data frameworks, and the political will are in place. The question is no longer whether the circular economy will scale, but which organizations will lead it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default BlogDetailsPage;
