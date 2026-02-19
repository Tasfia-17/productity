import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function CalculusOfDelay() {
    const [motivation, setMotivation] = useState([50]);
    const [wifiSpeed, setWifiSpeed] = useState([50]);
    const [snackAvailability, setSnackAvailability] = useState([50]);
    const [calculated, setCalculated] = useState(false);

    return (
        <DepartmentSectionShell 
            id="calculus-delay" 
            title="🧮 The Calculus of Delay"
            variant="bureaucracy"
        >
            <div className="space-y-8">
                <p className="text-center font-mathematical text-2xl text-temple-dark italic">
                    "An interactive formula for understanding your delay constant."
                </p>

                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="border-8 border-temple-gold rounded-lg p-8 bg-amber-50 space-y-6">
                        <div className="space-y-4">
                            <label className="block font-variable text-lg text-temple-dark">
                                Motivation Level: {motivation[0]}%
                            </label>
                            <Slider
                                value={motivation}
                                onValueChange={setMotivation}
                                max={100}
                                step={1}
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block font-variable text-lg text-temple-dark">
                                Wi-Fi Speed: {wifiSpeed[0]} Mbps
                            </label>
                            <Slider
                                value={wifiSpeed}
                                onValueChange={setWifiSpeed}
                                max={100}
                                step={1}
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block font-variable text-lg text-temple-dark">
                                Snack Availability: {snackAvailability[0]}%
                            </label>
                            <Slider
                                value={snackAvailability}
                                onValueChange={setSnackAvailability}
                                max={100}
                                step={1}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-6">
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-yellow-50">
                            <p className="font-equation text-2xl text-temple-dark">
                                Delay Constant = Motivation ÷ Wi-Fi Speed × Snack Availability
                            </p>
                        </div>

                        <Button
                            onClick={() => setCalculated(true)}
                            className="font-compute bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl px-12 py-6"
                        >
                            Calculate
                        </Button>

                        {calculated && (
                            <div className="border-8 border-temple-red rounded-lg p-12 bg-gradient-to-br from-red-50 to-amber-50 animate-in fade-in duration-500">
                                <div className="text-center space-y-4">
                                    <h3 className="text-3xl font-bold font-output text-temple-dark">
                                        Result:
                                    </h3>
                                    <div className="text-9xl font-bold text-temple-red">
                                        ∞
                                    </div>
                                    <p className="font-mono text-lg text-temple-dark/70 italic">
                                        (Delay approaches infinity regardless of input)
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
