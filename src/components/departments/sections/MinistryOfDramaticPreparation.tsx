import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function MinistryOfDramaticPreparation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const steps = [
        'Lighting Optimization Ritual',
        'Desk Alignment Certification',
        'Water Bottle Refill Ceremony',
        'Playlist Curation (3 hours minimum)'
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setIsComplete(false);
    };

    return (
        <DepartmentSectionShell id="preparation" title="The Ministry of Dramatic Preparation" variant="bureaucracy">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "A page dedicated to things you do before starting."
                </p>

                {!isComplete ? (
                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80">
                            <h3 className="text-2xl font-serif font-bold text-temple-dark text-center mb-6">
                                Current Ritual:
                            </h3>
                            <p className="text-3xl font-serif text-temple-gold text-center mb-8">
                                {steps[currentStep]}
                            </p>
                            <Progress value={((currentStep + 1) / steps.length) * 100} className="h-4 mb-6" />
                            <p className="text-center text-temple-dark/70 font-serif mb-6">
                                Step {currentStep + 1} of {steps.length}
                            </p>
                            <Button
                                onClick={nextStep}
                                className="w-full bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl py-6"
                            >
                                Complete Ritual
                            </Button>
                        </div>

                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/60">
                            <h4 className="text-xl font-serif font-bold text-temple-dark mb-4">
                                All Preparation Rituals:
                            </h4>
                            <ul className="space-y-2">
                                {steps.map((step, index) => (
                                    <li
                                        key={index}
                                        className={`text-lg font-serif ${
                                            index <= currentStep ? 'text-temple-gold font-bold' : 'text-temple-dark/50'
                                        }`}
                                    >
                                        {index <= currentStep ? '✓' : '○'} {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-green-100 to-emerald-100 shadow-2xl text-center">
                        <p className="text-4xl md:text-5xl font-serif font-bold text-temple-dark mb-6">
                            Preparation complete.
                        </p>
                        <p className="text-3xl font-serif text-temple-dark mb-8">
                            Beginning tomorrow.
                        </p>
                        <Button
                            onClick={reset}
                            variant="outline"
                            className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-4"
                        >
                            Prepare Again
                        </Button>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
