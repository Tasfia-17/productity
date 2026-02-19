import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function SnackBlessingsPortal() {
    const [blessings, setBlessings] = useState(0);

    return (
        <DepartmentSectionShell id="snack-blessings" title="The Snack Blessings Portal" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "Every snack deserves a blessing."
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-16 bg-gradient-to-br from-orange-50 to-yellow-100 shadow-inner">
                    <Button
                        onClick={() => setBlessings(prev => prev + 1)}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-3xl px-20 py-12 shadow-2xl"
                    >
                        Bless Snack
                    </Button>
                </div>

                {blessings > 0 && (
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80">
                        <p className="text-2xl font-serif text-temple-dark mb-4">
                            Snack Confirmed.
                        </p>
                        <p className="text-6xl">✨</p>
                        <p className="text-lg font-serif text-temple-dark/70 mt-4">
                            Total blessings: {blessings}
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
