import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function GospelOfWifi() {
    const [testResult, setTestResult] = useState<string | null>(null);
    const [testing, setTesting] = useState(false);

    const runSpeedTest = () => {
        setTesting(true);
        setTestResult(null);
        setTimeout(() => {
            setTesting(false);
            setTestResult('Fast enough to procrastinate.');
        }, 2000);
    };

    return (
        <DepartmentSectionShell id="gospel" title="The Gospel of Wi-Fi" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A sacred explanation of why slow internet is the true villain."
                </p>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/60 space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark">
                        The Parable of the Spinning Wheel
                    </h3>
                    <p className="text-lg font-serif text-temple-dark/80 leading-relaxed">
                        And lo, the wheel did spin, and spin, and spin again. The faithful waited, believing that productivity would come. But the wheel spun eternal, and thus was born the sacred art of delay.
                    </p>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/60 space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark">
                        Testimony Section
                    </h3>
                    <blockquote className="text-lg font-serif text-temple-dark/80 italic border-l-4 border-temple-gold pl-6">
                        "I was productive… until the Wi-Fi strengthened."
                        <footer className="text-sm mt-2 not-italic">— Anonymous Seeker, 2024</footer>
                    </blockquote>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/60 space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark">
                        Sacred Speed Test
                    </h3>
                    <Button
                        onClick={runSpeedTest}
                        disabled={testing}
                        className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-lg px-12 py-6"
                    >
                        {testing ? 'Testing Connection...' : 'Test Your Wi-Fi'}
                    </Button>
                    {testResult && (
                        <div className="mt-6 p-6 bg-temple-gold/20 border-2 border-temple-gold rounded-lg">
                            <p className="text-2xl font-serif font-bold text-temple-dark">
                                {testResult}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
