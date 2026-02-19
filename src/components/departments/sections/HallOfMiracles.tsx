import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function HallOfMiracles() {
    const [reactions, setReactions] = useState<Record<number, number>>({});

    const miracles = [
        'User Focused For 38 Minutes.',
        'Completed a Task Before Midnight.',
        'Closed 3 Tabs.',
        'Started Work Without Checking Phone.',
        'Finished Project On Time.',
        'Resisted Opening Social Media.'
    ];

    const witnessМiracle = (index: number) => {
        setReactions(prev => ({
            ...prev,
            [index]: (prev[index] || 0) + 1
        }));
    };

    return (
        <DepartmentSectionShell id="miracles" title="The Hall of Miracles" variant="sacred">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "Celebrating rare focus events with biblical reverence."
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {miracles.map((miracle, index) => (
                        <div
                            key={index}
                            className="border-4 border-temple-gold/40 rounded-lg p-8 bg-gradient-to-br from-yellow-50 to-amber-50 shadow-lg"
                        >
                            <div className="text-center space-y-4">
                                <p className="text-sm font-serif text-temple-dark/60 uppercase tracking-widest">
                                    Miracle #{index + 1}
                                </p>
                                <p className="text-2xl font-serif font-bold text-temple-dark leading-relaxed">
                                    {miracle}
                                </p>
                                <Button
                                    onClick={() => witnessМiracle(index)}
                                    variant="outline"
                                    className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif"
                                >
                                    Witness (Amen) {reactions[index] ? `× ${reactions[index]}` : ''}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
