import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMicrofeatureEvents } from '@/hooks/useMicrofeatureEvents';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function CouncilOfFiveMoreMinutes() {
    const [ascensions, setAscensions] = useState(0);
    const [isDimmed, setIsDimmed] = useState(false);
    const { emit } = useMicrofeatureEvents();

    const handleFiveMoreMinutes = (e: React.MouseEvent) => {
        setIsDimmed(true);
        setAscensions(prev => prev + 1);
        
        // Trigger confetti
        emit({ type: 'confetti', x: e.clientX, y: e.clientY });
        
        // Unlock achievement
        if (ascensions === 0) {
            emit({ type: 'achievement', id: 'five-more' });
        }
        
        setTimeout(() => {
            setIsDimmed(false);
        }, 2000);
    };

    return (
        <DepartmentSectionShell id="five-more" title="The Council of 5 More Minutes" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "Where time bends to your will."
                </p>

                <div className={`transition-all duration-1000 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}>
                    <Button
                        onClick={handleFiveMoreMinutes}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-4xl px-24 py-16 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                    >
                        5 More Minutes
                    </Button>
                </div>

                {ascensions > 0 && (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-yellow-100 to-amber-100 shadow-2xl">
                        <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark mb-4">
                            You have ascended.
                        </p>
                        <p className="text-xl font-serif text-temple-dark/70">
                            Ascension count: {ascensions}
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
