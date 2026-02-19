import { useState, useEffect } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Progress } from '@/components/ui/progress';

export default function GeneticAnalysisPage() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => {
                setProgress(progress + 2);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
        }
    }, [progress]);

    return (
        <MicroModuleShell title="The Genetic Analysis Page" emoji="🧬">
            <div className="space-y-4">
                <p className="font-serif text-temple-dark text-center text-lg">
                    Analyzing your DNA for productivity genes…
                </p>

                <Progress value={progress} className="h-3" />

                {isComplete && (
                    <div className="mt-6 p-6 bg-temple-red/10 rounded-lg border-2 border-temple-red/40">
                        <p className="font-ornate text-temple-dark text-center text-xl leading-relaxed">
                            Results:
                        </p>
                        <p className="font-classical text-temple-red text-center text-lg mt-3 tracking-wide">
                            "Strong ancestral history of 'I'll do it later.'"
                        </p>
                    </div>
                )}
            </div>
        </MicroModuleShell>
    );
}
