import { useState, useEffect, useCallback } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    return {
      width
    };
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow, getWindowDimensions]);

  return windowDimensions;
}

