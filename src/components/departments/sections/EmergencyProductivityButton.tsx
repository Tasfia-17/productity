import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function EmergencyProductivityButton() {
    const [step, setStep] = useState(0);

    const steps = [
        { question: 'Are you absolutely certain?', action: 'Yes, Start Now' },
        { question: 'Maybe hydrate first?', action: 'No, Start Working' },
        { question: 'You deserve rest.', action: 'Actually, Let Me Work' },
        { question: '', action: '' }
    ];

    const handleClick = () => {
        if (step < steps.length - 1) {
            setStep(prev => prev + 1);
        }
    };

    const reset = () => {
        setStep(0);
    };

    return (
        <DepartmentSectionShell id="emergency-button" title="The Emergency Productivity Button" variant="bureaucracy">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "Multiple escalating confirmations that lead nowhere."
                </p>

                {step < steps.length - 1 ? (
                    <div className="space-y-8">
                        <div className="border-8 border-temple-red rounded-lg p-16 bg-gradient-to-br from-red-50 to-orange-100 shadow-inner">
                            <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark mb-12">
                                {step === 0 ? 'Start Working Now.' : steps[step].question}
                            </p>
                            <Button
                                onClick={handleClick}
                                className="bg-temple-red hover:bg-temple-red/80 text-white font-serif text-2xl px-16 py-8 shadow-2xl"
                            >
                                {step === 0 ? 'START NOW' : steps[step].action}
                            </Button>
                        </div>
                        <p className="text-lg font-serif text-temple-dark/70">
                            Confirmation {step + 1} of {steps.length - 1}
                        </p>
                    </div>
                ) : (
                    <div className="border-8 border-temple-gold rounded-lg p-16 bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
                        <p className="text-5xl md:text-6xl font-serif font-bold text-temple-dark mb-8">
                            ...
                        </p>
                        <p className="text-2xl font-serif text-temple-dark/70 mb-8">
                            Nothing happens.
                        </p>
                        <Button
                            onClick={reset}
                            variant="outline"
                            className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-4"
                        >
                            Try Again
                        </Button>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
