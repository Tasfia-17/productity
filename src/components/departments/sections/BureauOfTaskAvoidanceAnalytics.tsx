import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function BureauOfTaskAvoidanceAnalytics() {
    const [refreshCount, setRefreshCount] = useState(0);

    const peakHours = ['9:00 AM', '2:00 PM', '11:00 PM'];
    const snackRatio = (Math.random() * 10 + 5).toFixed(1);
    const excuseDiversity = Math.floor(Math.random() * 30 + 70);

    return (
        <DepartmentSectionShell 
            id="task-avoidance-analytics" 
            title="🏢 The Bureau of Task Avoidance Analytics"
            variant="bureaucracy"
        >
            <div className="space-y-8">
                <p className="text-center font-bureaucratic text-xl text-temple-dark/80 italic">
                    "Measuring what matters: Everything but productivity."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-8 border-temple-gold/60 rounded-lg p-6 bg-amber-50 space-y-4">
                        <h4 className="font-bold text-2xl font-data text-temple-dark text-center">
                            Peak Avoidance Hours
                        </h4>
                        <div className="space-y-2">
                            {peakHours.map((hour, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-full bg-temple-gold/30 rounded-full h-8 relative overflow-hidden">
                                        <div 
                                            className="bg-temple-gold h-full rounded-full transition-all"
                                            style={{ width: `${100 - i * 15}%` }}
                                        />
                                    </div>
                                    <span className="font-mono text-sm whitespace-nowrap">{hour}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-8 border-temple-red/60 rounded-lg p-6 bg-red-50 space-y-4">
                        <h4 className="font-bold text-2xl font-data text-temple-dark text-center">
                            Snack-to-Work Ratio
                        </h4>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-temple-red">
                                {snackRatio}:1
                            </div>
                            <p className="text-sm font-mono text-temple-dark/60 mt-4">
                                Snacks consumed per task completed
                            </p>
                        </div>
                    </div>

                    <div className="border-8 border-temple-gold-light/60 rounded-lg p-6 bg-yellow-50 space-y-4">
                        <h4 className="font-bold text-2xl font-data text-temple-dark text-center">
                            Excuse Diversity Index
                        </h4>
                        <div className="text-center">
                            <div className="relative w-32 h-32 mx-auto">
                                <svg className="transform -rotate-90 w-32 h-32">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        fill="transparent"
                                        className="text-temple-gold/30"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="56"
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        fill="transparent"
                                        strokeDasharray={`${excuseDiversity * 3.51} 351`}
                                        className="text-temple-gold"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-3xl font-bold text-temple-dark">{excuseDiversity}%</span>
                                </div>
                            </div>
                            <p className="text-sm font-mono text-temple-dark/60 mt-4">
                                Unique excuses deployed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        onClick={() => setRefreshCount(prev => prev + 1)}
                        className="font-official bg-temple-gold hover:bg-temple-gold-light text-temple-dark"
                    >
                        Refresh Analytics (Avoid Work)
                    </Button>
                    {refreshCount > 0 && (
                        <p className="mt-4 font-mono text-sm text-temple-dark/60">
                            Analytics refreshed {refreshCount} time{refreshCount > 1 ? 's' : ''} instead of working
                        </p>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
