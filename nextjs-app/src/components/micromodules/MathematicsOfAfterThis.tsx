import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MathematicsOfAfterThis() {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <MicroModuleShell title='The Mathematics of "After This"' emoji="🧮">
            <div className="space-y-4">
                <div className="p-4 bg-white/70 rounded border border-temple-gold/30">
                    <p className="font-serif text-temple-dark mb-4">
                        If one video = 10 minutes<br />
                        And "just one more" = 6 times<br />
                        How long before regret?
                    </p>

                    <div className="space-y-3">
                        <div>
                            <Label className="font-serif text-sm">Video length (minutes):</Label>
                            <Input type="number" defaultValue={10} className="font-serif" />
                        </div>
                        <div>
                            <Label className="font-serif text-sm">"Just one more" count:</Label>
                            <Input type="number" defaultValue={6} className="font-serif" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button
                        onClick={() => setShowAnswer(true)}
                        className="bg-temple-gold hover:bg-temple-gold-light"
                    >
                        Calculate
                    </Button>
                </div>

                {showAnswer && (
                    <div className="p-6 bg-temple-red/10 rounded-lg border-2 border-temple-red/40 text-center">
                        <p className="font-serif text-temple-dark text-lg mb-2">
                            Answer:
                        </p>
                        <p className="font-classical text-temple-red text-4xl tracking-widest">
                            Yes.
                        </p>
                    </div>
                )}
            </div>
        </MicroModuleShell>
    );
}
