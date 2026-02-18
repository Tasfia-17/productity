import { useState, useEffect } from 'react';

interface CurtainIntroOverlayProps {
  onDismiss: () => void;
}

export default function CurtainIntroOverlay({ onDismiss }: CurtainIntroOverlayProps) {
  const [isEntering, setIsEntering] = useState(true);
  const [isRevealing, setIsRevealing] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    // Prevent body scroll while curtain is mounted
    document.body.classList.add('curtain-no-scroll');
    
    // Complete entrance animation after 1.2s
    const entranceTimer = setTimeout(() => {
      setIsEntering(false);
    }, 1200);
    
    return () => {
      // Always remove scroll lock on unmount
      document.body.classList.remove('curtain-no-scroll');
      clearTimeout(entranceTimer);
    };
  }, []);

  const handleReveal = () => {
    if (isRevealing) return;
    
    setIsRevealing(true);
    
    // Remove scroll lock immediately when revealing starts
    document.body.classList.remove('curtain-no-scroll');
    
    // Wait for reveal animation to complete, then unmount
    setTimeout(() => {
      setShouldUnmount(true);
      onDismiss();
    }, 2000);
  };

  if (shouldUnmount) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] cursor-pointer ${isEntering ? 'curtain-entering' : ''} ${isRevealing ? 'curtain-revealing' : ''}`}
      onClick={handleReveal}
      style={{ perspective: '1200px' }}
    >
      {/* Blood-red curtain with 3D effect */}
      <div className={`curtain-container ${isEntering ? 'entering' : ''} ${isRevealing ? 'revealing' : ''}`}>
        {/* Left curtain panel */}
        <div className="curtain-panel curtain-left">
          {/* Base blood-red fabric texture with gold filigree */}
          <div 
            className="curtain-texture-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-texture-tile-bloodred-gold.dim_2048x2048.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '512px 512px'
            }}
          />
          
          {/* Folds and shadows overlay for 3D depth */}
          <div 
            className="curtain-folds-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-folds-shadows.dim_1920x1080.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Gold filigree ornamental overlay */}
          <div 
            className="curtain-filigree-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-gold-filigree-overlay.dim_1920x1080.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Right curtain panel */}
        <div className="curtain-panel curtain-right">
          {/* Base blood-red fabric texture with gold filigree */}
          <div 
            className="curtain-texture-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-texture-tile-bloodred-gold.dim_2048x2048.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: '512px 512px'
            }}
          />
          
          {/* Folds and shadows overlay for 3D depth */}
          <div 
            className="curtain-folds-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-folds-shadows.dim_1920x1080.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Gold filigree ornamental overlay */}
          <div 
            className="curtain-filigree-layer"
            style={{
              backgroundImage: 'url(/assets/generated/curtain-gold-filigree-overlay.dim_1920x1080.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Tap/Click instruction overlay */}
      {!isRevealing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[10001]">
          <div className="text-center space-y-4 animate-pulse">
            <p className="text-4xl md:text-6xl font-serif text-temple-gold-light drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
              Touch to Enter
            </p>
            <p className="text-xl md:text-2xl font-serif text-temple-gold/80">
              The Temple Awaits
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
