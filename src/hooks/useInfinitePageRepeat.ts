import { useState, useEffect, useRef, useCallback } from 'react';

const MAX_BLOCKS = 3; // Limit to 3 blocks to prevent runaway DOM growth

export function useInfinitePageRepeat() {
  const [blockCount, setBlockCount] = useState(1);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const appendBlock = useCallback(() => {
    setBlockCount((prev) => {
      if (prev >= MAX_BLOCKS) {
        // Cap at MAX_BLOCKS - when user scrolls to bottom of last block,
        // we could remove the first block and adjust scroll position,
        // but for simplicity we just cap it here
        return prev;
      }
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    // Create intersection observer to detect when sentinel approaches viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            appendBlock();
          }
        });
      },
      {
        rootMargin: '500px', // Trigger 500px before sentinel enters viewport
      }
    );

    observerRef.current.observe(sentinelRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [appendBlock]);

  return {
    blockCount,
    sentinelRef,
  };
}
