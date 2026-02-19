import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function OfficialExcuseGenerator() {
    const [excuse, setExcuse] = useState<string | null>(null);
    const [showStamp, setShowStamp] = useState(false);

    const excuses = [
        'My creative energy is in retrograde.',
        'The vibes were off.',
        'I\'m waiting for clarity.',
        'The font wasn\'t inspiring.',
        'Mercury is in retrograde.',
        'I need to align my chakras first.',
        'The moon phase isn\'t optimal.',
        'My productivity aura needs cleansing.'
    ];

    const generateExcuse = () => {
        const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
        setExcuse(randomExcuse);
        setShowStamp(false);
        
        setTimeout(() => {
            setShowStamp(true);
        }, 500);
    };

    return (
        <DepartmentSectionShell id="excuse-generator" title="The Official Excuse Generator" variant="bureaucracy">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "Click to generate certified excuses."
                </p>

                <div className="border-4 border-temple-gold/40 rounded-lg p-12 bg-white/80">
                    <Button
                        onClick={generateExcuse}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-2xl px-16 py-8"
                    >
                        Generate Excuse
                    </Button>
                </div>

                {excuse && (
                    <div className="relative border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-amber-50 to-yellow-100 shadow-2xl">
                        <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark mb-8">
                            "{excuse}"
                        </p>
                        
                        {showStamp && (
                            <div className="flex justify-center">
                                <div className="relative animate-pulse">
                                    <img 
                                        src="/assets/generated/wax-seal-approval.dim_800x800.png"
                                        alt="Approved"
                                        className="w-32 h-32 md:w-40 md:h-40"
                                    />
                                    <p className="absolute inset-0 flex items-center justify-center text-2xl font-serif font-bold text-white">
                                        APPROVED
                                    </p>
                                </div>
                            </div>
                        )}
                        
                        <p className="text-lg font-serif text-temple-dark/70 mt-6 italic">
                            APPROVED BY THE COUNCIL
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
