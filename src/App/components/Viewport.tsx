import { PropsWithChildren, useEffect } from 'react';

import { useMediaQuery } from '../../lib/media-query/useMediaQuery';

const useFixViewport = () => {
  useEffect(() => {
    const updateCssViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateCssViewportHeight();
    window.addEventListener('resize', updateCssViewportHeight);

    return () => {
      window.removeEventListener('resize', updateCssViewportHeight);
    };
  }, []);
};

export const Viewport = ({ children }: PropsWithChildren) => {
  const isStandalone = useMediaQuery('(display-mode: standalone)');
  useFixViewport();

  return (
    <div
      className="flex flex-col overflow-x-auto min-h-screen w-full max-w-[100vw]"
      style={
        !isStandalone
          ? {
              minHeight: 'calc(var(--vh, 1vh) * 100)',
            }
          : {}
      }
    >
      {children}
    </div>
  );
};
