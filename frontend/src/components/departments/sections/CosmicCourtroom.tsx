import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function CosmicCourtroom() {
    const [trialStage, setTrialStage] = useState(0);

    const witnesses = [
        { name: 'Your Alarm', testimony: 'The defendant snoozed me 7 times this morning.' },
        { name: 'Your Calendar', testimony: 'I have been ignored for 3 consecutive weeks.' },
        { name: 'Your Last Burst of Motivation', testimony: '...' },
    ];

    const stages = [
        { title: 'Opening Statement', content: 'The case of Deadline vs. You begins now.' },
        { title: 'Witness Testimonies', content: 'Hear from those who have witnessed your procrastination.' },
        { title: 'Defense', content: 'You attempt to explain yourself...' },
        { title: 'Verdict', content: 'The judge delivers the final ruling.' },
    ];

    const advanceStage = () => {
        if (trialStage < stages.length - 1) {
            setTrialStage(prev => prev + 1);
        }
    };

    return (
        <DepartmentSectionShell 
            id="cosmic-courtroom" 
            title="🧑‍⚖️ THE COSMIC COURTROOM"
            variant="bureaucracy"
        >
            <div className="space-y-8">
                <p className="text-center font-legal text-2xl text-temple-dark italic">
                    "Deadline vs. You — A full trial simulation"
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-amber-50 to-yellow-50 space-y-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold font-case text-temple-dark mb-2">
                            {stages[trialStage].title}
                        </h3>
                        <p className="font-stage text-lg text-temple-dark/70">
                            Stage {trialStage + 1} of {stages.length}
                        </p>
                    </div>

                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 min-h-[200px] flex items-center justify-center">
                        <p className="font-testimony text-xl text-temple-dark text-center leading-relaxed">
                            {stages[trialStage].content}
                        </p>
                    </div>

                    {trialStage === 1 && (
                        <div className="space-y-4">
                            <h4 className="font-bold text-xl font-witness text-temple-dark text-center">
                                Witnesses:
                            </h4>
                            {witnesses.map((witness, index) => (
                                <div 
                                    key={index}
                                    className="border-4 border-temple-gold/40 rounded-lg p-6 bg-yellow-50"
                                >
                                    <p className="font-bold font-name text-lg text-temple-dark mb-2">
                                        {witness.name}
                                        {witness.name === 'Your Last Burst of Motivation' && ' (ghostly)'}
                                    </p>
                                    <p className="font-quote text-temple-dark/80 italic">
                                        "{witness.testimony}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {trialStage === stages.length - 1 ? (
                        <div className="border-8 border-temple-red rounded-lg p-12 bg-gradient-to-br from-red-50 to-amber-50 text-center space-y-6 animate-in fade-in duration-500">
                            <div className="text-6xl">⚖️</div>
                            <h4 className="text-4xl font-bold font-verdict text-temple-dark">
                                VERDICT
                            </h4>
                            <p className="text-3xl font-judge text-temple-red">
                                "Case adjourned until tomorrow."
                            </p>
                            <p className="font-mono text-sm text-temple-dark/60 mt-6">
                                (The trial will resume... eventually)
                            </p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <Button
                                onClick={advanceStage}
                                className="font-proceed bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl px-12 py-6"
                            >
                                Proceed to Next Stage
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
