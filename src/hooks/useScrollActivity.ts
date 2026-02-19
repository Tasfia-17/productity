import { useEffect, useState, useRef } from 'react';

/**
 * Hook that tracks whether the user is actively scrolling.
 * Returns true while scrolling, false after a brief inactivity timeout.
 */
export function useScrollActivity(inactivityDelay: number = 150) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      // Clear existing timeout
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout to mark as inactive
      timeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, inactivityDelay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inactivityDelay]);

  return isScrolling;
}
