import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ImpactSection from '../components/home/ImpactSection';
import ServicesSection from '../components/home/ServicesSection';
// import FeaturesSection from '../components/home/FeaturesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import FaqSection from '../components/home/FaqSection';
import BlogSection from '../components/home/BlogSection';
import CtaSection from '../components/common/CtaSection';

export const HomePage: React.FC = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ServicesSection />
      {/* <FeaturesSection /> */}
      <ProcessSection />
      <ProjectsSection />
      <TestimonialSection />
      {/* <FaqSection /> */}
      {/* <BlogSection /> */}
      <CtaSection />
    </main>
  );
};

export default HomePage;
