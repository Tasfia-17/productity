import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function DepartmentOfTaskRescheduling() {
    const [submitted, setSubmitted] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [excuse, setExcuse] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setTaskName('');
            setExcuse('');
        }, 5000);
    };

    return (
        <DepartmentSectionShell id="rescheduling" title="The Department of Task Rescheduling" variant="bureaucracy">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed">
                    Official forms for postponing tasks.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80 space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-temple-dark text-center border-b-2 border-temple-gold pb-4">
                            Application for Tomorrow Extension
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="task" className="text-lg font-serif text-temple-dark">
                                    Task Name (Optional)
                                </Label>
                                <Input
                                    id="task"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    placeholder="The thing you're avoiding..."
                                    className="font-serif text-lg border-2 border-temple-gold/40"
                                />
                            </div>

                            <div>
                                <Label htmlFor="excuse" className="text-lg font-serif text-temple-dark">
                                    Select Your Excuse
                                </Label>
                                <Textarea
                                    id="excuse"
                                    value={excuse}
                                    onChange={(e) => setExcuse(e.target.value)}
                                    placeholder="My Dog Needed Emotional Support"
                                    className="font-serif text-lg border-2 border-temple-gold/40 min-h-32"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl py-6"
                        >
                            Submit Application
                        </Button>
                    </div>
                </form>

                {submitted && (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-green-100 to-emerald-100 shadow-2xl text-center">
                        <p className="text-3xl md:text-4xl font-serif font-bold text-temple-dark mb-4">
                            ✓ APPROVED
                        </p>
                        <p className="text-2xl font-serif text-temple-dark">
                            Try again next week.
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
