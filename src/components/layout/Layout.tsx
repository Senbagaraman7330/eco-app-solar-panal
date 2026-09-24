import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import VideoModal from '../common/VideoModal';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-[#B4E50D] selection:text-black">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <VideoModal />
    </div>
  );
};

export default Layout;
