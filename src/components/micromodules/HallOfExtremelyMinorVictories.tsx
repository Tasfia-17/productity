import MicroModuleShell from './MicroModuleShell';
import { Badge } from '@/components/ui/badge';

const victories = [
    "Opened the document.",
    "Thought about starting.",
    "Sat upright briefly.",
    "Closed one tab accidentally."
];

export default function HallOfExtremelyMinorVictories() {
    return (
        <MicroModuleShell title="The Hall of Extremely Minor Victories" emoji="🏆">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {victories.map((victory, index) => (
                    <div
                        key={index}
                        className="relative p-6 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg border-4 border-temple-gold shadow-lg"
                    >
                        <div className="absolute -top-3 -right-3">
                            <Badge className="bg-temple-gold text-white text-xs">
                                🥇 GOLD
                            </Badge>
                        </div>
                        <p className="font-classical text-temple-dark text-center text-lg tracking-wide">
                            {victory}
                        </p>
                        <div className="mt-3 text-center">
                            <span className="text-4xl">🏅</span>
                        </div>
                    </div>
                ))}
            </div>
        </MicroModuleShell>
    );
}
