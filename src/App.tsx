import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import OnGridPage from './pages/OnGridPage';
import OffGridPage from './pages/OffGridPage';
import HybridPage from './pages/HybridPage';
import BessPage from './pages/BessPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import TeamPage from './pages/TeamPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const basename = import.meta.env.BASE_URL === './' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router basename={basename}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/about.html" element={<AboutPage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services.html" element={<ServicesPage />} />

            <Route path="/service-details" element={<ServiceDetailsPage />} />
            <Route path="/service-details.html" element={<ServiceDetailsPage />} />

            <Route path="/on-grid" element={<OnGridPage />} />
            <Route path="/on-grid.html" element={<OnGridPage />} />

            <Route path="/off-grid" element={<OffGridPage />} />
            <Route path="/off-grid.html" element={<OffGridPage />} />

            <Route path="/hybrid" element={<HybridPage />} />
            <Route path="/hybrid.html" element={<HybridPage />} />

            <Route path="/bess" element={<BessPage />} />
            <Route path="/bess.html" element={<BessPage />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects.html" element={<ProjectsPage />} />

            <Route path="/project-details" element={<ProjectDetailsPage />} />
            <Route path="/project-details.html" element={<ProjectDetailsPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog.html" element={<BlogPage />} />

            <Route path="/blog-details" element={<BlogDetailsPage />} />
            <Route path="/blog-details.html" element={<BlogDetailsPage />} />

            <Route path="/team" element={<TeamPage />} />
            <Route path="/team.html" element={<TeamPage />} />

            <Route path="/team-details" element={<TeamDetailsPage />} />
            <Route path="/team-details.html" element={<TeamDetailsPage />} />

            <Route path="/faq" element={<FaqPage />} />
            <Route path="/faq.html" element={<FaqPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact.html" element={<ContactPage />} />

            <Route path="/404.html" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ModalProvider>
  );
};

export default App;
