import { useEffect, useState, useRef } from 'react';
import { useScrollActivity } from '@/hooks/useScrollActivity';

/**
 * Displays ultra-bright random golden flash bursts (no figure) at randomized intervals
 * while the user is actively scrolling. Stops when scrolling becomes idle.
 * Enhanced with brighter, longer flashes and more frequent bursts.
 */
export default function RandomGoldenFlashBurstOverlay() {
  const isScrolling = useScrollActivity(200);
  const [flashKey, setFlashKey] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isScrolling) {
      // Stop scheduling when not scrolling
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsFlashing(false);
      return;
    }

    // Schedule random flashes while scrolling - more aggressive timing
    const scheduleNextFlash = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      // More frequent: random interval between 150ms and 800ms (was 300-1200ms)
      const randomDelay = Math.random() * 650 + 150;

      timeoutRef.current = window.setTimeout(() => {
        // Trigger flash
        setIsFlashing(true);
        setFlashKey(prev => prev + 1);

        // Longer flash duration: 700ms (was 300ms)
        setTimeout(() => {
          setIsFlashing(false);
        }, 700);

        // Schedule next flash
        scheduleNextFlash();
      }, randomDelay);
    };

    scheduleNextFlash();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isScrolling]);

  if (!isFlashing) return null;

  return (
    <div 
      key={flashKey}
      className="fixed inset-0 z-[9997] pointer-events-none"
      style={{
        animation: 'randomBurstFlash 0.7s ease-out'
      }}
    >
      {/* Ultra-bright golden flash burst - brighter and longer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/generated/golden-flash-overlay.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(3) contrast(2) saturate(1.5)',
          opacity: 1
        }}
      />
    </div>
  );
}
