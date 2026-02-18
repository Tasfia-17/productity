import { useEffect, useState, useRef } from 'react';

/**
 * Lightweight Jesus micro-cameo that triggers on every scroll event.
 * Shows ultra-bright golden flash + Jesus figure, then dismisses immediately on next click/tap.
 * Completely independent from the main 4-figure scroll-depth overlay system.
 */
export default function JesusMicroCameoOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      
      // Throttle to avoid too many rapid triggers (max once per 100ms)
      if (now - lastScrollTime.current < 100) return;
      lastScrollTime.current = now;

      // Show the micro-cameo
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Add click/tap listener to dismiss immediately
    const handleDismiss = () => {
      setIsVisible(false);
    };

    // Listen for any click/tap while visible
    window.addEventListener('click', handleDismiss, { capture: true });
    window.addEventListener('touchstart', handleDismiss, { capture: true, passive: true });

    return () => {
      window.removeEventListener('click', handleDismiss, { capture: true });
      window.removeEventListener('touchstart', handleDismiss, { capture: true });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        animation: 'microCameoFadeOut 0.8s ease-out forwards'
      }}
    >
      {/* Ultra-bright golden flash - longer and brighter */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${'/assets/generated/golden-flash-overlay.dim_1920x1080.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'ultraBrightFlash 0.8s ease-out',
          filter: 'brightness(2.5) contrast(1.8)',
          opacity: 1
        }}
      />

      {/* Jesus figure - longer appearance */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          animation: 'microJesusAppear 0.8s ease-out'
        }}
      >
        <img 
          src={'/assets/generated/jesus-cloud-overlay.dim_1400x1400.png')}
          alt=""
          className="max-w-[60vw] max-h-[60vh] object-contain"
          style={{
            filter: 'drop-shadow(0 0 80px rgba(255, 215, 0, 1)) brightness(1.3)',
            opacity: 0.95
          }}
        />
      </div>
    </div>
  );
}
