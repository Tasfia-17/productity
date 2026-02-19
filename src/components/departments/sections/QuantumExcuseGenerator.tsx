import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function QuantumExcuseGenerator() {
    const [deadline, setDeadline] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleCalculate = () => {
        if (deadline) {
            setShowResult(true);
        }
    };

    return (
        <DepartmentSectionShell 
            id="quantum-excuse" 
            title="🔮 The Quantum Excuse Generator"
            variant="sacred"
        >
            <div className="space-y-8">
                <p className="text-center font-quantum text-2xl text-temple-dark italic">
                    "Where physics meets procrastination."
                </p>

                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="space-y-4">
                        <label className="block font-science text-lg text-temple-dark">
                            Enter your deadline:
                        </label>
                        <Input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="font-mono text-lg"
                        />
                    </div>

                    <Button
                        onClick={handleCalculate}
                        disabled={!deadline}
                        className="w-full font-calculate bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl py-6"
                    >
                        Calculate Quantum State
                    </Button>

                    {showResult && (
                        <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-purple-50 to-amber-50 space-y-6 animate-in fade-in duration-500">
                            <div className="text-center space-y-4">
                                <div className="text-6xl">⚛️</div>
                                <h3 className="text-2xl font-bold font-result text-temple-dark">
                                    Quantum Analysis Complete
                                </h3>
                                <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50">
                                    <p className="text-xl font-physics text-temple-dark leading-relaxed">
                                        "Based on quantum uncertainty, you technically still have time."
                                    </p>
                                </div>
                                <p className="font-mono text-sm text-temple-dark/60">
                                    Deadline entered: {new Date(deadline).toLocaleDateString()}
                                </p>
                                <p className="font-formula text-temple-dark/70 italic">
                                    Time remaining = ∞ (in the right reference frame)
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
