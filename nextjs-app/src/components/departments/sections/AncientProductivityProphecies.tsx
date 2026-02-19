import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function AncientProductivityProphecies() {
    const [prophecy, setProphecy] = useState<string | null>(null);

    const prophecies = [
        'You will begin at 2:00 PM.',
        '2:00 PM will become 2:17 PM.',
        '2:17 PM will become tomorrow.',
        'The task shall wait until the stars align.',
        'Your motivation peaks at midnight.',
        'Tomorrow holds infinite potential.',
        'The perfect moment is always five minutes away.',
        'You will research productivity instead of being productive.',
        'The deadline approaches, yet time stands still.',
        'Your focus will arrive after one more video.'
    ];

    const generateProphecy = () => {
        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
        setProphecy(randomProphecy);
    };

    return (
        <DepartmentSectionShell id="prophecies" title="Ancient Productivity Prophecies" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "Fake predictions that always foretell delay."
                </p>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/60">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark mb-6">
                        The Prophecy Generator
                    </h3>
                    <Button
                        onClick={generateProphecy}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl px-12 py-6"
                    >
                        Reveal Your Destiny
                    </Button>
                </div>

                {prophecy && (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-purple-100 to-indigo-100 shadow-2xl">
                        <p className="text-sm font-serif text-temple-dark/60 mb-4 uppercase tracking-widest">
                            It is written:
                        </p>
                        <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark leading-relaxed">
                            "{prophecy}"
                        </p>
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/60">
                        <p className="text-lg font-serif text-temple-dark">
                            "You will begin at 2:00 PM."
                        </p>
                    </div>
                    <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/60">
                        <p className="text-lg font-serif text-temple-dark">
                            "2:00 PM will become 2:17 PM."
                        </p>
                    </div>
                    <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/60">
                        <p className="text-lg font-serif text-temple-dark">
                            "2:17 PM will become tomorrow."
                        </p>
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
