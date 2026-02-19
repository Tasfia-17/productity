import MicroModuleShell from './MicroModuleShell';
import { Progress } from '@/components/ui/progress';

export default function NationalReferendum() {
    return (
        <MicroModuleShell title="The National Referendum" emoji="🗳">
            <div className="space-y-4">
                <div className="p-6 bg-white/70 rounded-lg border-2 border-temple-gold/50 text-center">
                    <p className="font-classical text-temple-dark text-2xl mb-6 tracking-wide">
                        "Should I Start Now?"
                    </p>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-serif text-temple-dark">Yes</span>
                                <span className="font-bold text-green-600">3%</span>
                            </div>
                            <Progress value={3} className="h-3" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-serif text-temple-dark">No</span>
                                <span className="font-bold text-red-600">97%</span>
                            </div>
                            <Progress value={97} className="h-3" />
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground font-serif mt-4 italic">
                        Results are final and unchangeable.
                    </p>
                </div>
            </div>
        </MicroModuleShell>
    );
}
