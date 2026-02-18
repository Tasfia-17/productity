import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TempleOfMindfulAvoidance() {
    const [step, setStep] = useState(0);

    const steps = [
        'Inhale…',
        'Exhale…',
        'Open another tab.'
    ];

    const nextStep = () => {
        if (step < steps.length - 1) {
            setStep(prev => prev + 1);
        } else {
            setStep(0);
        }
    };

    return (
        <DepartmentSectionShell id="mindful-avoidance" title="The Temple of Mindful Avoidance" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A meditation page with unexpected instructions."
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-16 bg-gradient-to-br from-green-50 to-teal-100 shadow-inner">
                    <p className="text-5xl md:text-6xl font-serif font-bold text-temple-dark mb-12">
                        {steps[step]}
                    </p>
                    
                    <Button
                        onClick={nextStep}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl px-16 py-8"
                    >
                        {step < steps.length - 1 ? 'Continue' : 'Begin Again'}
                    </Button>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
