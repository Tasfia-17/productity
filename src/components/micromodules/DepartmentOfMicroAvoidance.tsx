import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const microAvoidances = [
    "Adjusted sitting posture",
    "Checked weather for no reason",
    "Looked at fridge. Closed fridge.",
    "Researched optimal lighting for productivity"
];

export default function DepartmentOfMicroAvoidance() {
    const [clicked, setClicked] = useState<Record<number, number>>({});

    const handleClick = (index: number) => {
        setClicked(prev => ({
            ...prev,
            [index]: (prev[index] || 0) + 1
        }));
    };

    return (
        <MicroModuleShell title="The Department of Micro-Avoidance">
            <div className="space-y-3">
                {microAvoidances.map((action, index) => (
                    <div key={index} className="flex items-center justify-between gap-4 p-3 bg-white/50 rounded border border-temple-gold/30">
                        <span className="font-serif text-temple-dark">{action}</span>
                        <div className="flex items-center gap-2">
                            {clicked[index] > 0 && (
                                <Badge variant="outline" className="text-xs">
                                    {clicked[index]}x
                                </Badge>
                            )}
                            <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleClick(index)}
                                className="text-xs"
                            >
                                Record
                            </Button>
                        </div>
                    </div>
                ))}
                
                <div className="mt-4 p-4 bg-temple-gold/10 rounded border-2 border-temple-gold/40 text-center">
                    <p className="font-ornate text-temple-dark text-lg">
                        +0 XP toward doing the actual task
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Total XP: 0 (always)
                    </p>
                </div>
            </div>
        </MicroModuleShell>
    );
}
