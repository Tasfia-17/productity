import DepartmentSectionShell from '../DepartmentSectionShell';

export default function ReincarnationPage() {
    return (
        <DepartmentSectionShell 
            id="reincarnation" 
            title="🧬 The Reincarnation Page"
            variant="sacred"
        >
            <div className="space-y-8 text-center">
                <div className="text-8xl mb-8">🔄</div>
                
                <p className="font-mystic text-3xl text-temple-dark leading-relaxed">
                    In your next life, you might start earlier.
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-purple-50 to-amber-50 space-y-6 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold font-spiritual text-temple-dark">
                        The Cycle of Procrastination
                    </h3>
                    <div className="space-y-4 font-wisdom text-lg text-temple-dark/80 text-left">
                        <p>
                            • <strong>Current Life:</strong> You are reading this instead of working.
                        </p>
                        <p>
                            • <strong>Next Life:</strong> You will be born with the intention to start on time.
                        </p>
                        <p>
                            • <strong>Reality:</strong> You will discover the internet again.
                        </p>
                        <p>
                            • <strong>Outcome:</strong> The cycle repeats.
                        </p>
                    </div>
                </div>

                <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-amber-50 max-w-2xl mx-auto">
                    <p className="font-philosophy text-xl text-temple-dark italic leading-relaxed">
                        "Perhaps in the next incarnation, you will be a morning person.<br />
                        But probably not."
                    </p>
                </div>

                <p className="font-mono text-sm text-temple-dark/60">
                    Estimated reincarnations until productivity: ∞
                </p>
            </div>
        </DepartmentSectionShell>
    );
}
