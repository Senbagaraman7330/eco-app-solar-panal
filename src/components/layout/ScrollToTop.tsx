import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    initAllThemeAnimations?: () => void;
  }
}

const revealContentWithoutAnimations = () => {
  document.querySelectorAll<HTMLElement>('[data-block-reveal], [data-text-reveal]').forEach((element) => {
    element.style.opacity = '1';
    element.style.visibility = 'visible';
  });
};

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let isCancelled = false;
    const initializeAnimations = async () => {
      try {
        if (window.themeScriptsReady) {
          await window.themeScriptsReady;
        }

        // Fast font check with a 100ms cap so slow networks don't freeze the page
        await Promise.race([
          document.fonts ? document.fonts.ready : Promise.resolve(),
          new Promise((resolve) => setTimeout(resolve, 100)),
        ]);

        await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

        if (isCancelled) return;
        if (typeof window.initAllThemeAnimations === 'function') {
          window.initAllThemeAnimations();
        } else {
          revealContentWithoutAnimations();
        }
      } catch {
        if (!isCancelled) revealContentWithoutAnimations();
      }
    };

    initializeAnimations();

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
