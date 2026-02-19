import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const steps = [
    { label: "Step 1: Confirm you want to start.", field: null },
    { label: "Step 2: Provide reason.", field: "text" },
    { label: "Step 3: Verify identity.", field: "text" },
    { label: "Step 4: Emotional readiness questionnaire.", field: "select" },
    { label: "Step 5: System busy. Try tomorrow.", field: null }
];

export default function BureaucracyOfStarting() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const currentStepData = steps[currentStep];

    return (
        <MicroModuleShell title="The Bureaucracy of Starting" emoji="🧾">
            <div className="space-y-4">
                <div className="p-4 bg-white/70 rounded border-2 border-temple-gold/50">
                    <p className="font-ornate text-temple-dark text-lg mb-4">
                        {currentStepData.label}
                    </p>

                    {currentStepData.field === 'text' && (
                        <div className="space-y-2">
                            <Label className="font-serif">
                                {currentStep === 1 ? "Reason for starting:" : "Full legal name:"}
                            </Label>
                            <Input
                                value={formData[`step${currentStep}`] || ''}
                                onChange={(e) => setFormData({ ...formData, [`step${currentStep}`]: e.target.value })}
                                placeholder="Type here..."
                                className="font-serif"
                            />
                        </div>
                    )}

                    {currentStepData.field === 'select' && (
                        <div className="space-y-3">
                            <Label className="font-serif">Are you emotionally ready?</Label>
                            <div className="space-y-2">
                                {['Yes', 'No', 'Maybe', 'I need more time'].map((option) => (
                                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="readiness"
                                            value={option}
                                            className="text-temple-gold"
                                        />
                                        <span className="font-serif text-sm">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === steps.length - 1 && (
                        <div className="text-center py-4">
                            <p className="font-classical text-temple-red text-xl tracking-wide">
                                System busy. Try tomorrow.
                            </p>
                        </div>
                    )}
                </div>

                {currentStep < steps.length - 1 && (
                    <div className="flex justify-center">
                        <Button onClick={handleNext} className="bg-temple-gold hover:bg-temple-gold-light">
                            {currentStep === 0 ? 'Begin Application' : 'Next Step'}
                        </Button>
                    </div>
                )}

                <div className="flex justify-center gap-2 pt-2">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                                index === currentStep ? 'bg-temple-gold' : 'bg-temple-gold/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </MicroModuleShell>
    );
}
