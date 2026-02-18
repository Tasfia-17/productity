import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TimeManipulationOffice() {
    const [countdown, setCountdown] = useState(10);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [roundTime, setRoundTime] = useState('');

    useEffect(() => {
        if (isCountingDown && countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCountdown(10);
        }
    }, [countdown, isCountingDown]);

    const calculateRoundTime = () => {
        const now = new Date();
        const currentMinutes = now.getMinutes();
        const nextRoundMinute = Math.ceil((currentMinutes + 1) / 15) * 15;
        const nextRoundTime = new Date(now);
        nextRoundTime.setMinutes(nextRoundMinute);
        nextRoundTime.setSeconds(0);
        
        const hours = nextRoundTime.getHours();
        const minutes = nextRoundTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        
        setRoundTime(`${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`);
    };

    return (
        <DepartmentSectionShell 
            id="time-manipulation" 
            title="🕰️ Time Manipulation Features"
            variant="sacred"
        >
            <div className="space-y-16">
                {/* Start at a Round Time */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-timekeeper text-temple-dark text-center">
                        The "Start at a Round Time" Button
                    </h3>
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <Button
                            onClick={calculateRoundTime}
                            className="font-round bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-2xl px-12 py-8"
                        >
                            Calculate Optimal Start Time
                        </Button>
                        {roundTime && (
                            <div className="border-8 border-temple-red rounded-lg p-8 bg-gradient-to-br from-red-50 to-amber-50 animate-in fade-in duration-500">
                                <p className="font-optimal text-xl text-temple-dark mb-4">
                                    Next optimal start time:
                                </p>
                                <p className="text-6xl font-bold text-temple-red">
                                    {roundTime}
                                </p>
                                <p className="font-mono text-sm text-temple-dark/60 mt-6 italic">
                                    (It is currently {new Date().toLocaleTimeString()})
                                </p>
                                <p className="font-missed text-lg text-temple-dark/70 mt-4">
                                    You just missed it. Try again later.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* The Sacred Countdown */}
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-countdown text-temple-dark text-center">
                        The Sacred Countdown
                    </h3>
                    <p className="text-center font-promise text-lg text-temple-dark/70 italic">
                        Counting down to "New Life Begins"
                    </p>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-yellow-100 to-amber-100 text-center">
                            <div className="text-9xl font-bold text-temple-gold mb-6">
                                {countdown}
                            </div>
                            <p className="font-label text-2xl text-temple-dark">
                                seconds until transformation
                            </p>
                        </div>
                        <Button
                            onClick={() => setIsCountingDown(!isCountingDown)}
                            className="w-full font-start bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl py-6"
                        >
                            {isCountingDown ? 'Pause Countdown' : 'Start Countdown'}
                        </Button>
                        {countdown === 0 && (
                            <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50 text-center animate-in fade-in duration-500">
                                <p className="font-restart text-2xl text-temple-dark italic">
                                    Time's up! Restarting countdown...
                                </p>
                                <p className="font-mono text-sm text-temple-dark/60 mt-2">
                                    (The cycle continues forever)
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
