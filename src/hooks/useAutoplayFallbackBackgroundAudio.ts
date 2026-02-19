import { useEffect, useRef } from 'react';

export function useAutoplayFallbackBackgroundAudio(audioSrc: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.3; // Keep it subtle
    audioRef.current = audio;

    // Attempt autoplay
    const tryAutoplay = async () => {
      if (hasStarted.current) return;
      
      try {
        await audio.play();
        hasStarted.current = true;
      } catch (err) {
        // Autoplay blocked, set up fallback listeners
        const startOnInteraction = async () => {
          if (hasStarted.current) return;
          
          try {
            await audio.play();
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
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  return null;
}
