import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TempleOfNewTabs() {
    const [tabCount, setTabCount] = useState(17);

    return (
        <DepartmentSectionShell id="tabs" title="The Temple of New Tabs" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A page that counts imaginary tabs."
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-yellow-100 to-amber-100 shadow-inner">
                    <p className="text-lg font-serif text-temple-dark/70 mb-4">
                        You currently have:
                    </p>
                    <p className="text-7xl md:text-8xl font-serif font-bold text-temple-gold mb-4">
                        {tabCount}
                    </p>
                    <p className="text-2xl font-serif text-temple-dark">
                        emotional tabs open.
                    </p>
                </div>

                <Button
                    onClick={() => setTabCount(prev => prev + 1)}
                    className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl px-16 py-8 shadow-xl"
                >
                    Open Another Tab
                </Button>

                <div className="mt-8 p-6 bg-temple-red/10 border-2 border-temple-red/30 rounded-lg">
                    <p className="text-lg font-serif text-temple-dark italic">
                        Hidden lore: "Each tab is a dream postponed."
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
