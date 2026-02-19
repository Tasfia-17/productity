import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function FocusSimulatorBeta() {
    const [isInFocus, setIsInFocus] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    const enterFocus = () => {
        setIsInFocus(true);
        setShowPrompt(false);
        
        setTimeout(() => {
            setShowPrompt(true);
        }, 4000);
    };

    const handleDistraction = () => {
        setIsInFocus(false);
        setShowPrompt(false);
        
        // Scroll to another section
        const element = document.getElementById('tabs');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <DepartmentSectionShell id="focus-simulator" title="The Focus Simulator (Beta)" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A fake interactive experience that never lets you focus."
                </p>

                {!isInFocus ? (
                    <div className="border-4 border-temple-gold/40 rounded-lg p-12 bg-white/80">
                        <Button
                            onClick={enterFocus}
                            className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-2xl px-16 py-8"
                        >
                            Enter Deep Focus
                        </Button>
                    </div>
                ) : (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl">
                        {!showPrompt ? (
                            <div className="space-y-6">
                                <p className="text-3xl font-serif text-temple-dark">
                                    Deep Focus Mode Activated
                                </p>
                                <div className="flex justify-center">
                                    <div className="w-16 h-16 border-4 border-temple-gold border-t-transparent rounded-full animate-spin" />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <p className="text-2xl font-serif text-temple-dark mb-6">
                                    Have you considered checking something real quick?
                                </p>
                                <Button
                                    onClick={handleDistraction}
                                    className="bg-temple-red hover:bg-temple-red/80 text-white font-serif text-xl px-12 py-6"
                                >
                                    Yes, Actually
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
