import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function PomodoroResetShrine() {
    const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(prev => {
                    const newTime = prev - 1;
                    
                    // Reset at 00:12 remaining
                    if (newTime === 12) {
                        setShowMessage(true);
                        setTimeout(() => setShowMessage(false), 3000);
                        return 25 * 60; // Reset to 25 minutes
                    }
                    
                    return newTime;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timeRemaining]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const startTimer = () => {
        setIsRunning(true);
        setShowMessage(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeRemaining(25 * 60);
        setShowMessage(false);
    };

    return (
        <DepartmentSectionShell id="pomodoro" title="The Pomodoro Reset Shrine" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A sacred place where timers restart themselves."
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-red-50 to-orange-100 shadow-inner">
                    <p className="text-8xl md:text-9xl font-serif font-bold text-temple-gold mb-8">
                        {formatTime(timeRemaining)}
                    </p>
                    
                    {showMessage && (
                        <div className="mb-8 p-6 bg-temple-red/20 border-4 border-temple-red rounded-lg animate-pulse">
                            <p className="text-3xl font-serif font-bold text-temple-red">
                                Not today.
                            </p>
                        </div>
                    )}

                    <div className="flex gap-4 justify-center">
                        <Button
                            onClick={startTimer}
                            disabled={isRunning}
                            className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl px-12 py-6"
                        >
                            {isRunning ? 'Running...' : 'Start Timer'}
                        </Button>
                        <Button
                            onClick={resetTimer}
                            variant="outline"
                            className="border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-xl px-12 py-6"
                        >
                            Reset
                        </Button>
                    </div>
                </div>

                <p className="text-lg font-serif text-temple-dark/70 italic">
                    There's no actual productivity feature.
                </p>
            </div>
        </DepartmentSectionShell>
    );
}
