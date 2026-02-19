import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TimeTravelDepartment() {
    return (
        <DepartmentSectionShell id="time-travel" title="The Time Travel Department" variant="sacred">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "The Physics of 'I'll Do It Later'"
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-blue-50 to-purple-100 shadow-inner">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark text-center mb-8">
                        How Deadlines Move Through Time
                    </h3>
                    
                    <div className="flex items-center justify-center gap-4 flex-wrap text-center">
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80">
                            <p className="text-3xl font-serif font-bold text-temple-dark">
                                Today
                            </p>
                        </div>
                        <p className="text-4xl text-temple-gold">→</p>
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80">
                            <p className="text-3xl font-serif font-bold text-temple-dark">
                                Tomorrow
                            </p>
                        </div>
                        <p className="text-4xl text-temple-gold">→</p>
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80">
                            <p className="text-3xl font-serif font-bold text-temple-dark">
                                Next Week
                            </p>
                        </div>
                        <p className="text-4xl text-temple-gold">→</p>
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80">
                            <p className="text-3xl font-serif font-bold text-temple-dark">
                                "Soon"
                            </p>
                        </div>
                    </div>

                    <p className="text-2xl font-serif text-temple-red text-center mt-12 font-bold">
                        There is no arrow back.
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
