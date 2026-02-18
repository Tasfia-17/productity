import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TribunalOfDeadlines() {
    return (
        <DepartmentSectionShell id="tribunal" title="The Tribunal of Deadlines" variant="bureaucracy">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "A courtroom scene where deadlines are always postponed."
                </p>

                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80">
                        <p className="text-sm font-serif text-temple-dark/60 uppercase tracking-wide mb-2">
                            The Deadline:
                        </p>
                        <p className="text-2xl font-serif text-temple-dark mb-6">
                            "You said you'd start yesterday."
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-4xl text-temple-gold">⚖️</p>
                    </div>

                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80">
                        <p className="text-sm font-serif text-temple-dark/60 uppercase tracking-wide mb-2">
                            You:
                        </p>
                        <p className="text-2xl font-serif text-temple-dark mb-6">
                            "Technically, yesterday was today in another timezone."
                        </p>
                    </div>

                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-green-100 to-emerald-100 shadow-2xl text-center">
                        <p className="text-sm font-serif text-temple-dark/60 uppercase tracking-widest mb-4">
                            Verdict:
                        </p>
                        <p className="text-5xl font-serif font-bold text-temple-dark">
                            Postponed.
                        </p>
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
