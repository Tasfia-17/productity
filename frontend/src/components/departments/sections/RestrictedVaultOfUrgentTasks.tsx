import { useState } from 'react';
import { Button } from '@/components/ui/button';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function RestrictedVaultOfUrgentTasks() {
    const [attempted, setAttempted] = useState(false);

    const attemptAccess = () => {
        setAttempted(true);
    };

    return (
        <DepartmentSectionShell id="vault" title="The Restricted Vault of Urgent Tasks" variant="bureaucracy">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A vault that never grants access."
                </p>

                {!attempted ? (
                    <div className="border-8 border-temple-gold rounded-lg p-16 bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
                        <p className="text-3xl font-serif font-bold text-temple-dark mb-12">
                            Are you emotionally ready?
                        </p>
                        <Button
                            onClick={attemptAccess}
                            className="bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-2xl px-16 py-8"
                        >
                            Yes, I'm Ready
                        </Button>
                    </div>
                ) : (
                    <div className="border-8 border-temple-red rounded-lg p-16 bg-gradient-to-br from-red-100 to-red-200 shadow-2xl">
                        <p className="text-5xl md:text-6xl font-serif font-bold text-temple-red mb-8">
                            Access denied.
                        </p>
                        <p className="text-2xl font-serif text-temple-dark">
                            You were not emotionally ready.
                        </p>
                        <Button
                            onClick={() => setAttempted(false)}
                            variant="outline"
                            className="mt-8 border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-4"
                        >
                            Try Again (Same Result)
                        </Button>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
