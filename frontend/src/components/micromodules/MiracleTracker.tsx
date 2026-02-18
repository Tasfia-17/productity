import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Checkbox } from '@/components/ui/checkbox';

const miracles = [
    "Closed social media before midnight.",
    "Finished a task without Googling something unrelated.",
    "Didn't touch phone during loading screen."
];

export default function MiracleTracker() {
    const [witnessed, setWitnessed] = useState<Record<number, boolean>>({});

    const handleToggle = (index: number) => {
        setWitnessed(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <MicroModuleShell title="The Miracle Tracker" emoji="🧿">
            <div className="space-y-4">
                {miracles.map((miracle, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded border border-temple-gold/30">
                        <Checkbox
                            checked={witnessed[index] || false}
                            onCheckedChange={() => handleToggle(index)}
                            className="mt-1"
                        />
                        <span className="font-serif text-temple-dark flex-1">
                            {miracle}
                        </span>
                    </div>
                ))}

                <div className="mt-4 p-4 bg-temple-red/10 rounded border-2 border-temple-red/40 text-center">
                    <p className="font-classical text-temple-dark text-lg tracking-widest">
                        Miracle probability:
                    </p>
                    <p className="font-bold text-3xl text-temple-red mt-1">
                        0.003%
                    </p>
                </div>
            </div>
        </MicroModuleShell>
    );
}
