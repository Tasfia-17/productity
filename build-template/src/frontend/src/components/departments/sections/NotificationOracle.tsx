import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function NotificationOracle() {
    const [prophecy, setProphecy] = useState<string | null>(null);

    const prophecies = [
        'A message may arrive soon.',
        'Check again in 30 seconds.',
        'Something important might be happening.',
        'Your attention is required elsewhere.',
        'The notification you seek is near.',
        'Distraction approaches from the east.'
    ];

    const consult = () => {
        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
        setProphecy(randomProphecy);
    };

    return (
        <DepartmentSectionShell id="oracle" title="The Notification Oracle" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A prophetic machine that generates distractions."
                </p>

                <div className="border-4 border-temple-gold/40 rounded-lg p-12 bg-white/80">
                    <Button
                        onClick={consult}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-2xl px-16 py-8"
                    >
                        Should I Focus?
                    </Button>
                </div>

                {prophecy && (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl">
                        <p className="text-sm font-serif text-temple-dark/60 mb-4 uppercase tracking-widest">
                            The Oracle Speaks:
                        </p>
                        <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark">
                            "{prophecy}"
                        </p>
                        <p className="text-lg font-serif text-temple-dark/70 mt-6 italic">
                            It is never specific.
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
