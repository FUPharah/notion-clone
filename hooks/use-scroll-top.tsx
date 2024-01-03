import { useState, useEffect } from 'react';

export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /* const onScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }; */

    const onScroll = () => {
     if (window.scrollY > threshold) {
       setScrolled(true);
     } else {
       setScrolled(false);
     }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
