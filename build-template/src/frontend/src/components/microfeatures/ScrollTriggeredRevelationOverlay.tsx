import { useEffect, useState } from 'react';
import { CameoFigure } from '@/hooks/useScrollTriggeredRevelation';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

interface ScrollTriggeredRevelationOverlayProps {
  isRevealing: boolean;
  currentFigure: CameoFigure | null;
  isFadingOut: boolean;
}

const productivityLessonsByFigure: Record<CameoFigure, string[]> = {
  jesus: [
    "Procrastination is merely preparation in disguise.",
    "The best time to start was yesterday. The second best time is also yesterday.",
    "Blessed are the distracted, for they shall inherit seventeen browser tabs.",
    "Ask and it shall be postponed. Seek and ye shall find excuses.",
    "For what shall it profit a man, if he schedules the whole world, and completes nothing?",
    "Let he who is without unfinished projects cast the first stone.",
  ],
  satan: [
    "Embrace the chaos. Productivity is overrated anyway.",
    "Why do today what you can blame on circumstances tomorrow?",
    "Your potential is infinite. Your follow-through is... negotiable.",
    "The path to hell is paved with good intentions and empty to-do lists.",
    "Temptation is just opportunity wearing a more honest face.",
    "Multitasking: Because doing nothing wasn't ambitious enough.",
  ],
  kanye: [
    "I'ma let you finish, but procrastination is the greatest productivity hack of all time.",
    "You ain't got the answers, but you got seventeen open tabs.",
    "I'm not a businessman, I'm a business, man... who'll start tomorrow.",
    "Name one genius that ain't crazy about postponing everything.",
    "I feel like Pablo when I reschedule my entire week.",
    "My greatest pain in life is that I will never be able to finish my to-do list.",
  ],
  trump: [
    "Nobody procrastinates better than me. Believe me. Tremendous delays.",
    "I know procrastination. I have the best procrastination. Everyone says so.",
    "We're gonna build a to-do list, and we're gonna make Tomorrow pay for it.",
    "Fake news says I should be productive. Wrong! Strategic postponement!",
    "I've accomplished more by doing nothing than most people do by doing something.",
    "My productivity is yuuuge. The biggest. But also, let's start next week.",
  ],
};

const figureImages: Record<CameoFigure, string> = {
  jesus: publicAssetUrl('assets/generated/jesus-cloud-overlay.dim_1400x1400.png'),
  satan: publicAssetUrl('assets/generated/satan-cloud-overlay.dim_1400x1400.png'),
  kanye: publicAssetUrl('assets/generated/kanye-cloud-overlay.dim_1400x1400.png'),
  trump: publicAssetUrl('assets/generated/trump-cloud-overlay.dim_1400x1400.png'),
};

const figureAnimations: Record<CameoFigure, string> = {
  jesus: 'jesusEmerge',
  satan: 'satanRise',
  kanye: 'kanyeSlide',
  trump: 'trumpDescend',
};

export default function ScrollTriggeredRevelationOverlay({ 
  isRevealing, 
  currentFigure,
  isFadingOut 
}: ScrollTriggeredRevelationOverlayProps) {
  const [currentLesson, setCurrentLesson] = useState(0);

  useEffect(() => {
    if (isRevealing && currentFigure && !isFadingOut) {
      const lessons = productivityLessonsByFigure[currentFigure];
      setCurrentLesson(Math.floor(Math.random() * lessons.length));
    }
  }, [isRevealing, currentFigure, isFadingOut]);

  if (!isRevealing || !currentFigure) return null;

  const lessons = productivityLessonsByFigure[currentFigure];
  const figureImage = figureImages[currentFigure];
  const figureAnimation = figureAnimations[currentFigure];

  return (
    <div 
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-1000 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Golden flash layer - different intensity per figure */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${publicAssetUrl('assets/generated/golden-flash-overlay.dim_1920x1080.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: currentFigure === 'satan' ? 0.6 : currentFigure === 'trump' ? 0.8 : 1,
          animation: `goldenFlash-${currentFigure} 0.8s ease-in-out`,
          filter: currentFigure === 'satan' ? 'hue-rotate(180deg)' : 'none'
        }}
      />

      {/* Figure cloud overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          animation: `${figureAnimation} 1.2s ease-in-out`
        }}
      >
        <img 
          src={figureImage}
          alt=""
          className="max-w-[90vw] max-h-[90vh] object-contain"
          style={{
            filter: currentFigure === 'satan' 
              ? 'drop-shadow(0 0 40px rgba(255, 0, 0, 0.8))'
              : currentFigure === 'kanye'
              ? 'drop-shadow(0 0 40px rgba(255, 105, 180, 0.8))'
              : currentFigure === 'trump'
              ? 'drop-shadow(0 0 40px rgba(255, 165, 0, 0.8))'
              : 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))',
            animation: `${currentFigure}Float 3s ease-in-out infinite`
          }}
        />
      </div>

      {/* Productivity lesson text */}
      <div 
        className="absolute inset-0 flex items-end justify-center pb-24"
        style={{
          animation: 'lessonReveal 1.5s ease-in-out'
        }}
      >
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p 
            className="text-2xl md:text-4xl font-serif font-bold"
            style={{
              color: currentFigure === 'satan' 
                ? 'oklch(0.65 0.25 25)'
                : currentFigure === 'kanye'
                ? 'oklch(0.70 0.20 330)'
                : currentFigure === 'trump'
                ? 'oklch(0.75 0.22 40)'
                : 'oklch(var(--temple-gold-light))',
              textShadow: currentFigure === 'satan'
                ? '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 0, 0, 0.6)'
                : currentFigure === 'kanye'
                ? '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 105, 180, 0.6)'
                : currentFigure === 'trump'
                ? '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 165, 0, 0.6)'
                : '0 0 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.6)',
              letterSpacing: '0.05em'
            }}
          >
            {lessons[currentLesson]}
          </p>
        </div>
      </div>
    </div>
  );
}
