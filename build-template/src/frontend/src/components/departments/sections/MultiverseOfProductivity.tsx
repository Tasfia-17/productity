import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function MultiverseOfProductivity() {
    const [selectedUniverse, setSelectedUniverse] = useState<string | null>(null);

    const universes = [
        { id: 'A', name: 'Universe A', status: 'Already finished', color: 'from-green-50 to-emerald-50', border: 'border-green-500' },
        { id: 'B', name: 'Universe B', status: 'Gym at 6AM', color: 'from-blue-50 to-cyan-50', border: 'border-blue-500' },
        { id: 'C', name: 'Universe C', status: 'Currently scrolling', color: 'from-red-50 to-amber-50', border: 'border-red-500' },
    ];

    const selectUniverse = () => {
        setSelectedUniverse('C');
    };

    return (
        <DepartmentSectionShell 
            id="multiverse" 
            title="🪐 The Multiverse of Productivity"
            variant="sacred"
        >
            <div className="space-y-8">
                <p className="text-center font-cosmic text-2xl text-temple-dark italic">
                    "Parallel versions of you across infinite realities."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {universes.map((universe) => (
                        <div
                            key={universe.id}
                            className={`border-8 ${universe.border} rounded-lg p-8 bg-gradient-to-br ${universe.color} space-y-4 transition-all ${
                                selectedUniverse === universe.id ? 'ring-4 ring-temple-gold shadow-2xl scale-105' : ''
                            }`}
                        >
                            <div className="text-center">
                                <div className="text-5xl mb-4">
                                    {universe.id === 'A' && '✅'}
                                    {universe.id === 'B' && '💪'}
                                    {universe.id === 'C' && '📱'}
                                </div>
                                <h3 className="text-2xl font-bold font-universe text-temple-dark mb-2">
                                    {universe.name}
                                </h3>
                                <p className="font-status text-lg text-temple-dark/80">
                                    {universe.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-6">
                    <Button
                        onClick={selectUniverse}
                        className="font-detect bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl px-12 py-6"
                    >
                        Detect Your Universe
                    </Button>

                    {selectedUniverse && (
                        <div className="border-8 border-temple-red rounded-lg p-12 bg-gradient-to-br from-red-50 to-amber-50 max-w-2xl mx-auto animate-in fade-in duration-500">
                            <div className="text-6xl mb-6">📱</div>
                            <h3 className="text-3xl font-bold font-result text-temple-dark mb-4">
                                You are in Universe C
                            </h3>
                            <p className="font-reality text-xl text-temple-dark/80 italic">
                                Guess which one you are.
                            </p>
                            <p className="font-mono text-sm text-temple-dark/60 mt-6">
                                (Hint: You're reading this right now)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
