import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function MicroHumor() {
    const [progress, setProgress] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setShowResult(true), 300);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-12">
            {/* Corner note */}
            <div className="flex justify-end">
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-temple-gold/30 blur-xl rounded-full animate-pulse" />
                    <div className="relative bg-gradient-to-r from-temple-gold to-yellow-400 text-temple-dark px-6 py-3 rounded-full shadow-lg border-2 border-temple-gold-light">
                        <p className="text-sm md:text-base font-serif font-semibold">
                            ✨ Focus Mode Coming Soon (Since 2016)
                        </p>
                    </div>
                </div>
            </div>

            {/* Fake loading bar */}
            <div className="max-w-2xl mx-auto space-y-4 bg-white/60 border-2 border-temple-gold/30 rounded-lg p-6 shadow-lg">
                <p className="text-center text-lg font-serif text-temple-dark">
                    Assessing your productivity…
                </p>
                <Progress value={progress} className="h-3" />
                {showResult && (
                    <p className="text-center text-xl font-serif font-bold text-temple-red animate-pulse">
                        Result: Concerning.
                    </p>
                )}
            </div>

            {/* Disclaimer */}
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm md:text-base text-temple-dark/70 font-serif italic border-t-2 border-temple-gold/20 pt-6">
                    ⚠️ Side effects may include sudden awareness that you are procrastinating.
                </p>
            </div>
        </div>
    );
}
