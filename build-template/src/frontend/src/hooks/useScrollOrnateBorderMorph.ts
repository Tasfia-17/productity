import { useEffect, useState } from 'react';

type BorderShape = 'triangle' | 'pentagon' | 'hexagon' | 'octagon' | 'circle';

export function useScrollOrnateBorderMorph() {
  const [scrollPhase, setScrollPhase] = useState(0);
  const [currentShape, setCurrentShape] = useState<BorderShape>('hexagon');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      
      // Map scroll to phase (0-1 continuous)
      setScrollPhase(scrollPercent);

      // Determine shape based on scroll position
      const shapeIndex = Math.floor(scrollPercent * 5) % 5;
      const shapes: BorderShape[] = ['triangle', 'pentagon', 'hexagon', 'octagon', 'circle'];
      setCurrentShape(shapes[shapeIndex]);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollPhase, currentShape };
}
