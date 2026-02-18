import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function OnboardingPrompt() {
    const [selectedConfession, setSelectedConfession] = useState<string>('');
    const [showResult, setShowResult] = useState(false);

    const confessions = [
        'I have 17 tabs open right now.',
        'I clicked this instead of working.',
        'I will start after one small snack.',
        'I do not recall the task I fled from.'
    ];

    const handleButtonClick = (buttonText: string) => {
        if (!selectedConfession) {
            alert('Please confess your distraction first, Seeker.');
            return;
        }
        setShowResult(true);
        setTimeout(() => setShowResult(false), 5000);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-4 border-temple-gold rounded-lg p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-temple-dark mb-8">
                Before entering the Temple, confess…
            </h3>

            <RadioGroup value={selectedConfession} onValueChange={setSelectedConfession}>
                <div className="space-y-4">
                    {confessions.map((confession, index) => (
                        <div 
                            key={index}
                            className="flex items-center space-x-3 p-4 rounded-lg bg-white/60 border-2 border-temple-gold/30 hover:border-temple-gold hover:bg-white/80 transition-all cursor-pointer"
                        >
                            <RadioGroupItem value={confession} id={`confession-${index}`} />
                            <Label 
                                htmlFor={`confession-${index}`}
                                className="text-base md:text-lg font-serif text-temple-dark cursor-pointer flex-1"
                            >
                                {confession}
                            </Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                    onClick={() => handleButtonClick('accept')}
                    className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                    I Accept My Distraction
                </Button>
                <Button
                    onClick={() => handleButtonClick('ritual')}
                    variant="outline"
                    className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                    Begin the Ritual
                </Button>
                <Button
                    onClick={() => handleButtonClick('join')}
                    variant="outline"
                    className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                    Fine, I'll Join
                </Button>
            </div>

            {showResult && (
                <Alert className="bg-temple-gold/20 border-temple-gold">
                    <AlertDescription className="text-center text-lg font-serif text-temple-dark">
                        🎉 Welcome to the Order of Holy Delay. Your procrastination has been blessed.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
}
