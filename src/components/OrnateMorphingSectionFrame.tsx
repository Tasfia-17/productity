import { ReactNode } from 'react';
import { useScrollOrnateBorderMorph } from '@/hooks/useScrollOrnateBorderMorph';

interface OrnateMorphingSectionFrameProps {
  children: ReactNode;
  id?: string;
}

export default function OrnateMorphingSectionFrame({ children, id }: OrnateMorphingSectionFrameProps) {
  const { currentShape } = useScrollOrnateBorderMorph();

  const getClipPath = (shape: string) => {
    switch (shape) {
      case 'triangle':
        return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      case 'pentagon':
        return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
      case 'hexagon':
        return 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
      case 'octagon':
        return 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
      case 'circle':
        return 'circle(50% at 50% 50%)';
      default:
        return 'none';
    }
  };

  return (
    <div id={id} className="relative my-12">
      {/* Morphing border frame - FIX: ensure scrolling works */}
      <div 
        className="relative p-1 transition-all duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(45deg, oklch(var(--temple-gold)), oklch(var(--temple-gold-light)), oklch(var(--temple-red)))',
          clipPath: getClipPath(currentShape),
          touchAction: 'pan-y', // Allow vertical scrolling on touch devices
        }}
      >
        {/* Ancient pattern border overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            clipPath: getClipPath(currentShape)
          }}
        />

        {/* Corner ornaments */}
        <div 
          className="absolute -top-6 -left-6 w-24 h-24 opacity-70 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
            backgroundSize: '400% 400%',
            backgroundPosition: '0% 0%'
          }}
        />
        <div 
          className="absolute -top-6 -right-6 w-24 h-24 opacity-70 pointer-events-none transition-all duration-700"
          style={{
            backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
            backgroundSize: '400% 400%',
            backgroundPosition: '100% 0%',
            transform: 'scaleX(-1)'
          }}
        />

        {/* Inner content with standard shape - FIX: ensure child interactions work */}
        <div 
          className="bg-parchment"
          style={{
            clipPath: getClipPath(currentShape),
            touchAction: 'auto', // Allow all interactions inside content
            pointerEvents: 'auto', // Ensure child elements receive pointer events
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
