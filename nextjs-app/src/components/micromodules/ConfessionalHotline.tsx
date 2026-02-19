import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';

const transcript = [
    { speaker: 'You', text: "I'm avoiding writing my essay." },
    { speaker: 'Bot', text: "That's understandable. Have you considered reorganizing your desktop instead?" },
    { speaker: 'You', text: "Yes." },
    { speaker: 'Bot', text: "Excellent progress." }
];

export default function ConfessionalHotline() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < transcript.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <MicroModuleShell title="The Confessional Hotline" emoji="📞">
            <div className="space-y-3">
                {transcript.slice(0, currentStep + 1).map((line, index) => (
                    <div
                        key={index}
                        className={`p-3 rounded-lg ${
                            line.speaker === 'You'
                                ? 'bg-temple-gold/20 ml-8'
                                : 'bg-white/70 mr-8'
                        }`}
                    >
                        <p className="text-xs font-bold text-temple-dark mb-1">
                            {line.speaker}:
                        </p>
                        <p className="font-serif text-temple-dark">
                            {line.text}
                        </p>
                    </div>
                ))}

                {currentStep < transcript.length - 1 && (
                    <div className="flex justify-center pt-2">
                        <Button onClick={handleNext} variant="outline">
                            Continue Chat
                        </Button>
                    </div>
                )}

                {currentStep === transcript.length - 1 && (
                    <div className="text-center pt-2">
                        <p className="text-xs text-muted-foreground font-serif italic">
                            Session complete. You may now continue avoiding.
                        </p>
                    </div>
                )}
            </div>
        </MicroModuleShell>
    );
}
