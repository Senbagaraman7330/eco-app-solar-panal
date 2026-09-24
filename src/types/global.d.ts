import 'react';

declare global {
  interface ImportMetaEnv {
    readonly BASE_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  namespace JSX {
    interface IntrinsicElements {
      'number-flow': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-counter-number'?: boolean | string;
        value?: number | string;
      };
    }
  }

  interface Window {
    initAllThemeAnimations?: () => void;
    themeScriptsReady?: Promise<void>;
    lucide?: any;
    gsap?: any;
    ScrollTrigger?: any;
    SplitText?: any;
    Swiper?: any;
    Lenis?: any;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'number-flow': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-counter-number'?: boolean | string;
        value?: number | string;
      };
    }
  }
}
