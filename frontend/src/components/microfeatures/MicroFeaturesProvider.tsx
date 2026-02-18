import { ReactNode, useEffect, useState } from 'react';
import { useMicrofeatureEvents, MicrofeatureEvent } from '@/hooks/useMicrofeatureEvents';
import { useAchievements } from '@/hooks/useAchievements';
import HaloCursor from './HaloCursor';
import CursorSigh from './CursorSigh';
import AchievementPanel from './AchievementPanel';
import FakeCaptchaModal from './FakeCaptchaModal';
import ApologyLoadingOverlay from './ApologyLoadingOverlay';
import ConfettiBurst from './ConfettiBurst';
import { toast } from 'sonner';

interface MicroFeaturesProviderProps {
    children: ReactNode;
}

export default function MicroFeaturesProvider({ children }: MicroFeaturesProviderProps) {
    const { subscribe } = useMicrofeatureEvents();
    const { unlockAchievement } = useAchievements();
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [confettiTrigger, setConfettiTrigger] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const unsubscribe = subscribe((event: MicrofeatureEvent) => {
            switch (event.type) {
                case 'confetti':
                    setConfettiTrigger({ x: event.x, y: event.y });
                    setTimeout(() => setConfettiTrigger(null), 100);
                    break;
                case 'toast':
                    toast(event.message);
                    break;
                case 'achievement':
                    unlockAchievement(event.id);
                    toast.success(`Achievement Unlocked!`);
                    break;
                case 'loading':
                    setShowLoading(event.show);
                    setLoadingMessage(event.message || '');
                    break;
                case 'captcha':
                    setShowCaptcha(event.show);
                    break;
                case 'audio':
                    // Play audio
                    const audio = new Audio(`/assets/generated/${event.sound}.mp3`);
                    audio.play().catch(() => {});
                    break;
            }
        });

        return unsubscribe;
    }, [subscribe, unlockAchievement]);

    return (
        <>
            <HaloCursor />
            <CursorSigh />
            <AchievementPanel />
            {showCaptcha && <FakeCaptchaModal onClose={() => setShowCaptcha(false)} />}
            {showLoading && <ApologyLoadingOverlay message={loadingMessage} />}
            {confettiTrigger && <ConfettiBurst x={confettiTrigger.x} y={confettiTrigger.y} />}
            {children}
        </>
    );
}
