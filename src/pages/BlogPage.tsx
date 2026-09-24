import React from 'react';
import { Link } from 'react-router-dom';
import CtaSection from '../components/common/CtaSection';

const blogArticles = [
  {
    image: 'images/img-17.jpg',
    height: 'h-[300px] 2xl:h-[490px]',
    readTime: '5 min',
    title: 'Scaling commercial composting with smart sensor networks.',
    description:
      'How IoT-connected temperature and moisture sensors are helping commercial composters cut processing time by 40% while improving output quality.',
    delay: '0.1',
  },
  {
    image: 'images/img-18.jpg',
    height: 'h-[336px]',
    readTime: '7 min',
    title: 'The economics of urban mining: e-waste as a resource.',
    description:
      'Why forward-thinking municipalities are treating discarded electronics not as landfill liabilities but as high-value material deposits.',
    delay: '0.2',
  },
  {
    image: 'images/img-19.jpg',
    height: 'h-[300px]',
    readTime: '6 min',
    title: 'Zero-waste construction: designing buildings for disassembly.',
    description:
      'How modular construction and material passports are enabling architects to plan for end-of-life recovery before ground is even broken.',
    delay: '0.3',
  },
  {
    image: 'images/img-7.jpg',
    height: 'h-[300px] 2xl:h-[490px]',
    readTime: '4 min',
    title: 'Plastic credits and the new corporate accountability era.',
    description:
      'A look at how extended producer responsibility legislation is forcing brands to fund the recovery infrastructure their packaging depends on.',
    delay: '0.4',
  },
  {
    image: 'images/img-8.jpg',
    height: 'h-[336px]',
    readTime: '8 min',
    title: 'Fleet electrification for waste haulers: a cost model.',
    description:
      'We compare total cost of ownership between diesel and electric refuse trucks across 50-unit fleet operations with real route data.',
    delay: '0.5',
  },
  {
    image: 'images/img-9.jpg',
    height: 'h-[316px]',
    readTime: '5 min',
    title: 'Textile recycling at scale: breaking the fast fashion loop.',
    description:
      'Chemical and mechanical recycling startups are racing to close the loop on garments — but feedstock collection remains the bottleneck.',
    delay: '0.6',
  },
];

export const BlogPage: React.FC = () => {
  return (
    <>
      {/* ========================== Blog Hero Section =========================== */}
      <section className="bg-background-1 pt-35 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-20 xl:pt-48 xl:pb-39">
        <div className="main-container">
          <div className="mx-auto max-w-[920px] text-center">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_bp_1)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_bp_1">
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
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-2 xl:text-it-heading-1 mt-5 font-normal text-black"
            >
              Latest insights from our team.
            </h1>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 font-inter-tight md:text-tagline-2 mx-auto mt-2 font-normal md:mt-4"
            >
              Deep dives into waste recovery, recycling innovation, and the technologies reshaping the circular economy — written by the people building it.
            </p>
          </div>
        </div>
      </section>

      {/* ========================== Featured Article Section =========================== */}
      <section className="pb-10 md:pb-14 lg:pb-16">
        <div className="main-container space-y-8">
          <div data-block-reveal data-delay="0.1" className="inline-block">
            <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_bp_2)">
                    <path
                      d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_bp_2">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> Featured blog</span>
            </div>
          </div>

          <h2
            data-text-reveal
            data-reveal-delay="0.2"
            className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 font-normal tracking-[-0.04em] text-black"
          >
            Featured blog
          </h2>

          <Link to="/blog-details" className="group block space-y-10.5" data-block-reveal data-delay="0.3">
            <figure className="h-[480px] w-full overflow-hidden rounded-4xl md:h-[500px] lg:h-[620px]">
              <img
                src="images/img-4.jpg"
                alt="Aerial view of a recycling facility"
                className="ease-1 size-full object-cover object-center transition-transform duration-400 group-hover:scale-103"
              />
            </figure>

            <div className="max-w-[900px] space-y-3">
              <h3
                data-text-reveal
                data-reveal-delay="0.4"
                className="font-inter-tight group-hover:text-background-4/80 text-2xl leading-[1.3] font-normal text-black transition-colors duration-300 md:text-3xl xl:text-[32px]"
              >
                How AI-powered sorting is revolutionizing material recovery facilities
              </h3>
              <p
                data-text-reveal
                data-reveal-delay="0.5"
                className="text-tagline-2 text-background-4/60 font-inter-tight font-normal"
              >
                From near-infrared sensors to robotic picking arms, the next generation of MRFs are using machine learning to separate waste streams faster and more accurately than ever before — driving recovery rates above 95%.
              </p>

              <div data-block-reveal data-delay="0.6" className="flex flex-wrap items-center gap-4 pt-5">
                <div className="bg-background-4 text-tagline-3 font-inter-tight inline-flex items-center gap-2 rounded-sm px-5 py-1.5 font-normal text-white">
                  <span>07.15.2026</span>
                  <span className="text-background-5"> • </span>
                  <span>9 min read</span>
                </div>
                <span className="text-tagline-2 text-background-4/80 font-inter-tight font-normal">Marcus Chen</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================== All Articles Section =========================== */}
      <section className="overflow-hidden py-16 md:py-20 lg:py-24 xl:py-30">
        <div className="main-container space-y-12 md:space-y-14 lg:space-y-18">
          <div className="max-w-[550px] space-y-3">
            <div data-block-reveal data-delay="0.1" className="inline-block">
              <div className="shadow-4 font-pt-mono inline-flex items-center gap-x-1.5 rounded-sm bg-white px-3 py-1.5 text-xs leading-[150%] font-normal text-black">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_bp_3)">
                      <path
                        d="M14 2V3.33333C14 9.75133 10.418 12.6667 6 12.6667H3.49533C3.38667 13.2747 3.33333 13.938 3.33333 14.6667H2C2 13.758 2.07733 12.9333 2.23067 12.1787C2.07733 11.316 2 10.1453 2 8.66667C2 4.98467 4.98467 2 8.66667 2C10 2 11.3333 2.66667 14 2ZM8.66667 3.33333C5.72133 3.33333 3.33333 5.72133 3.33333 8.66667C3.33333 8.908 3.33533 9.14067 3.34 9.364C4.176 8.04533 5.40067 7.00333 7.00267 6.088L7.664 7.24533C5.76067 8.33333 4.498 9.56933 3.85067 11.3333H6C10.01 11.3333 12.5807 8.68467 12.6647 3.592C11.75 3.68067 10.9 3.624 9.85133 3.46667C9.08467 3.35133 8.934 3.33333 8.66667 3.33333Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_bp_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span> Blog</span>
              </div>
            </div>

            <h2
              data-text-reveal
              data-reveal-delay="0.2"
              className="font-inter-tight text-it-heading-4 md:text-it-heading-3 lg:text-it-heading-2 mt-2 font-normal tracking-[-0.04em] text-black"
            >
              All blog
            </h2>

            <p
              data-text-reveal
              data-reveal-delay="0.3"
              className="text-tagline-3 text-background-4/60 md:text-tagline-2 font-inter-tight font-normal"
            >
              Explore our latest coverage of waste management innovation, recycling breakthroughs, and circular economy strategy.
            </p>
          </div>

          {/* Blog Grid – Masonry */}
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {blogArticles.map((article, index) => (
              <article
                key={index}
                data-block-reveal
                data-delay={article.delay}
                className="group break-inside-avoid mb-5 bg-background-3 underline-hover-effect h-max"
              >
                <Link to="/blog-details" className="block">
                  <figure className={`${article.height} relative overflow-hidden`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="ease-default size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 z-2 size-full bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                    <div className="shadow-1 bg-background-4/10 absolute top-1/2 left-1/2 z-4 flex size-15 -translate-x-1/2 translate-y-[57%] items-center justify-center rounded opacity-0 backdrop-blur-[32px] transition-all duration-500 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100 lg:size-18">
                      <span className="relative flex size-8 items-center justify-center overflow-hidden">
                        <svg
                          className="absolute -translate-x-12 translate-y-10.5 opacity-0 transition-all duration-700 group-hover:-translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M9.3335 22.6668L22.6668 9.3335"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.3335 9.3335H22.6668V22.6668"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </figure>

                  <div className="space-y-4 px-10.5 pt-6 pb-10.5">
                    <div className="flex items-center gap-3">
                      <span className="font-inter-tight text-tagline-3 bg-background-4/5 rounded-full px-5 py-1.5 text-black">
                        Blog
                      </span>
                      <span className="font-inter-tight text-tagline-3 text-background-4/60">
                        Read : {article.readTime}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-it-heading-6 font-inter-tight blog-title font-normal text-black">
                        {article.title}
                      </h3>
                      <p className="text-tagline-2 text-background-4/60 font-inter-tight font-normal">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== CTA Section =========================== */}
      <CtaSection />
    </>
  );
};

export default BlogPage;
