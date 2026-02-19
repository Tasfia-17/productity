import { useEffect, useState, useRef } from 'react';

export type CameoFigure = 'jesus' | 'satan' | 'kanye' | 'trump';

interface RevelationState {
  isRevealing: boolean;
  currentFigure: CameoFigure | null;
  isFadingOut: boolean;
}

export function useScrollTriggeredRevelation() {
  const [state, setState] = useState<RevelationState>({
    isRevealing: false,
    currentFigure: null,
    isFadingOut: false
  });
  
  const triggeredFigures = useRef<Set<CameoFigure>>(new Set());
  const isWaitingForDismissal = useRef(false);

  // Define scroll thresholds for each figure (in pixels)
  const scrollThresholds: Record<CameoFigure, number> = {
    jesus: 800,
    satan: 2400,
    kanye: 4200,
    trump: 6000
  };

  useEffect(() => {
    const handleScroll = () => {
      // If we're waiting for dismissal, don't trigger new cameos
      if (isWaitingForDismissal.current) return;

      const scrollY = window.scrollY;

      // Check which figure should be triggered based on scroll position
      const figureOrder: CameoFigure[] = ['jesus', 'satan', 'kanye', 'trump'];
      
      for (const figure of figureOrder) {
        if (scrollY >= scrollThresholds[figure] && !triggeredFigures.current.has(figure)) {
          // Trigger this figure
          triggeredFigures.current.add(figure);
          setState({
            isRevealing: true,
            currentFigure: figure,
            isFadingOut: false
          });
          isWaitingForDismissal.current = true;
          break;
        }
      }
    };

    const handleDismissal = () => {
      if (isWaitingForDismissal.current && state.isRevealing) {
        // Start fade out
        setState(prev => ({
          ...prev,
          isFadingOut: true
        }));

        // Complete dismissal after fade animation
        setTimeout(() => {
          setState({
            isRevealing: false,
            currentFigure: null,
            isFadingOut: false
          });
          isWaitingForDismissal.current = false;
        }, 1000); // 1 second fade out
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleDismissal, { passive: true });
    window.addEventListener('click', handleDismissal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleDismissal);
      window.removeEventListener('click', handleDismissal);
    };
  }, [state.isRevealing]);

  return state;
}
