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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 100;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          return true;
        }
        return false;
      };

      // Try immediately, then after DOM rendering / animations
      if (!scrollToElement()) {
        const timeout = setTimeout(scrollToElement, 250);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
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
