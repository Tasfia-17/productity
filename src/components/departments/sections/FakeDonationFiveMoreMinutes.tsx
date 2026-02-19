import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function FakeDonationFiveMoreMinutes() {
    const [minutes, setMinutes] = useState('5');
    const [donated, setDonated] = useState(false);
    const [totalDonated, setTotalDonated] = useState(0);

    const handleDonate = () => {
        const amount = parseInt(minutes) || 5;
        setTotalDonated(prev => prev + amount);
        setDonated(true);
        setTimeout(() => setDonated(false), 3000);
    };

    return (
        <DepartmentSectionShell 
            id="fake-donation" 
            title="🛸 Donate 5 More Minutes"
            variant="sacred"
        >
            <div className="space-y-8">
                <p className="text-center font-charity text-2xl text-temple-dark italic">
                    "Support the cause of eternal delay."
                </p>

                <div className="max-w-2xl mx-auto border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-yellow-100 to-amber-100 space-y-8">
                    <div className="text-center space-y-4">
                        <div className="text-7xl">⏰</div>
                        <h3 className="text-3xl font-bold font-campaign text-temple-dark">
                            Every Minute Counts
                        </h3>
                        <p className="font-pitch text-lg text-temple-dark/80">
                            Your donation of time helps us continue our mission of<br />
                            helping people avoid productivity worldwide.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <label className="block font-form text-lg text-temple-dark">
                            How many minutes would you like to donate?
                        </label>
                        <Input
                            type="number"
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}
                            min="1"
                            max="999"
                            className="font-amount text-2xl text-center"
                        />
                    </div>

                    <Button
                        onClick={handleDonate}
                        className="w-full font-donate bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-2xl py-8"
                    >
                        Donate {minutes} More Minutes
                    </Button>

                    {donated && (
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50 text-center animate-in fade-in duration-500">
                            <p className="font-thanks text-2xl text-temple-gold mb-2">
                                Thank you! 🎉
                            </p>
                            <p className="font-confirmation text-lg text-temple-dark/80">
                                Your {minutes} minutes have been added to the collective delay.
                            </p>
                        </div>
                    )}

                    <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50 text-center">
                        <p className="font-total text-lg text-temple-dark/70">
                            Total minutes donated today:
                        </p>
                        <p className="text-5xl font-bold text-temple-gold mt-2">
                            {totalDonated}
                        </p>
                        <p className="font-mono text-xs text-temple-dark/60 mt-4">
                            (No actual payments processed — this is purely symbolic)
                        </p>
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
