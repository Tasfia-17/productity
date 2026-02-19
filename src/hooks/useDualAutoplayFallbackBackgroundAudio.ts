import { useEffect, useRef } from 'react';

interface DualAudioConfig {
  primarySrc: string;
  primaryVolume?: number;
  underlyingSrc: string;
  underlyingVolume?: number;
}

export function useDualAutoplayFallbackBackgroundAudio({
  primarySrc,
  primaryVolume = 0.5,
  underlyingSrc,
  underlyingVolume = 0.15,
}: DualAudioConfig) {
  const primaryAudioRef = useRef<HTMLAudioElement | null>(null);
  const underlyingAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    // Create both audio elements
    const primaryAudio = new Audio(primarySrc);
    primaryAudio.loop = true;
    primaryAudio.volume = primaryVolume;
    primaryAudioRef.current = primaryAudio;

    const underlyingAudio = new Audio(underlyingSrc);
    underlyingAudio.loop = true;
    underlyingAudio.volume = underlyingVolume;
    underlyingAudioRef.current = underlyingAudio;

    // Attempt autoplay for both tracks
    const tryAutoplay = async () => {
      if (hasStarted.current) return;
      
      try {
        // Start both tracks simultaneously
        await Promise.all([
          primaryAudio.play(),
          underlyingAudio.play()
        ]);
        hasStarted.current = true;
      } catch (err) {
        // Autoplay blocked, set up fallback listeners
        const startOnInteraction = async () => {
          if (hasStarted.current) return;
          
          try {
            await Promise.all([
              primaryAudio.play(),
              underlyingAudio.play()
            ]);
            hasStarted.current = true;
            
            // Remove listeners after successful start
            window.removeEventListener('scroll', startOnInteraction);
            window.removeEventListener('click', startOnInteraction);
          } catch (e) {
            // Still blocked, keep listeners
          }
        };

        window.addEventListener('scroll', startOnInteraction, { once: true, passive: true });
        window.addEventListener('click', startOnInteraction, { once: true });
      }
    };

    tryAutoplay();

    return () => {
      if (primaryAudioRef.current) {
        primaryAudioRef.current.pause();
        primaryAudioRef.current = null;
      }
      if (underlyingAudioRef.current) {
        underlyingAudioRef.current.pause();
        underlyingAudioRef.current = null;
      }
    };
  }, [primarySrc, primaryVolume, underlyingSrc, underlyingVolume]);

  return null;
}
