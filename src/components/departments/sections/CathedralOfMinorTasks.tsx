import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function CathedralOfMinorTasks() {
    const [admired, setAdmired] = useState<Set<number>>(new Set());

    const minorTasks = [
        { id: 1, task: 'Cleaned keyboard', time: '47 minutes' },
        { id: 2, task: 'Reorganized files', time: '1.5 hours' },
        { id: 3, task: 'Adjusted chair height', time: '23 minutes' },
        { id: 4, task: 'Researched best chairs', time: '2 hours' },
        { id: 5, task: 'Sharpened pencils', time: '31 minutes' },
        { id: 6, task: 'Cleaned desktop icons', time: '54 minutes' },
    ];

    const toggleAdmire = (id: number) => {
        setAdmired(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <DepartmentSectionShell 
            id="cathedral-minor-tasks" 
            title="⛪ The Cathedral of Minor Tasks"
            variant="sacred"
        >
            <div className="space-y-8">
                <p className="text-center font-scripture text-2xl text-temple-dark italic leading-relaxed">
                    "Each tiny task completed to avoid the major ones,<br />
                    framed like a masterpiece."
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {minorTasks.map((item) => (
                        <div 
                            key={item.id}
                            className="relative border-8 border-temple-gold rounded-lg p-6 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-2xl"
                            style={{
                                backgroundImage: 'url(/assets/generated/religious-doodle-tile.dim_1024x1024.png)',
                                backgroundSize: '128px 128px',
                                backgroundBlendMode: 'multiply'
                            }}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center text-2xl border-4 border-amber-50">
                                🏆
                            </div>
                            <div className="relative bg-amber-50/90 rounded-lg p-4 space-y-3">
                                <h4 className="font-masterpiece text-xl text-temple-dark text-center">
                                    {item.task}
                                </h4>
                                <p className="font-mono text-sm text-temple-dark/60 text-center">
                                    Time invested: {item.time}
                                </p>
                                <Button
                                    onClick={() => toggleAdmire(item.id)}
                                    variant={admired.has(item.id) ? "default" : "outline"}
                                    className="w-full font-elegant"
                                >
                                    {admired.has(item.id) ? '✨ Admired' : 'Admire'}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50">
                    <p className="font-italic text-lg text-temple-dark/70">
                        Total admiration count: {admired.size}
                    </p>
                    <p className="font-mono text-sm text-temple-dark/50 mt-2">
                        Major tasks completed: 0
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
