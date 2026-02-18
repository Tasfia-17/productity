import { useEffect, useState } from 'react';
import { POPUP_MEME_IMAGES } from '@/assets/popupMemeImages';

interface PopupMeme {
  id: string;
  src: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export default function RandomBackgroundPopupMemes() {
  const [popups, setPopups] = useState<PopupMeme[]>([]);

  useEffect(() => {
    const spawnPopup = () => {
      const randomImage = POPUP_MEME_IMAGES[Math.floor(Math.random() * POPUP_MEME_IMAGES.length)];
      const id = `popup-${Date.now()}-${Math.random()}`;
      
      const newPopup: PopupMeme = {
        id,
        src: randomImage,
        x: Math.random() * 80 + 10, // 10-90% of viewport width
        y: Math.random() * 80 + 10, // 10-90% of viewport height
        scale: Math.random() * 0.4 + 0.6, // 0.6-1.0 scale
        rotation: Math.random() * 30 - 15, // -15 to +15 degrees
      };

      setPopups(prev => [...prev, newPopup]);

      // Auto-remove after animation completes
      setTimeout(() => {
        setPopups(prev => prev.filter(p => p.id !== id));
      }, 4000); // 4s total (1s fade-in + 2s visible + 1s fade-out)
    };

    // Spawn first popup after short delay
    const initialTimeout = setTimeout(spawnPopup, 2000);

    // Then spawn at random intervals
    const interval = setInterval(() => {
      spawnPopup();
    }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {popups.map(popup => (
        <div
          key={popup.id}
          className="absolute popup-meme-float"
          style={{
            left: `${popup.x}%`,
            top: `${popup.y}%`,
            transform: `translate(-50%, -50%) scale(${popup.scale}) rotate(${popup.rotation}deg)`,
          }}
        >
          <img
            src={popup.src}
            alt=""
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
