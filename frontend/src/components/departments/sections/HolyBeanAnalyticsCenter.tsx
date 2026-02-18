import DepartmentSectionShell from '../DepartmentSectionShell';

export default function HolyBeanAnalyticsCenter() {
    return (
        <DepartmentSectionShell id="analytics" title="The Holy Bean Analytics Center" variant="default">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "Tracks fake caffeine data with serious charts."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80 text-center">
                        <p className="text-lg font-serif text-temple-dark/70 mb-2">
                            Cups consumed today:
                        </p>
                        <p className="text-6xl font-serif font-bold text-temple-gold">
                            3
                        </p>
                    </div>
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80 text-center">
                        <p className="text-lg font-serif text-temple-dark/70 mb-2">
                            Tasks completed:
                        </p>
                        <p className="text-6xl font-serif font-bold text-temple-red">
                            0
                        </p>
                    </div>
                    <div className="border-4 border-temple-gold/40 rounded-lg p-8 bg-white/80 text-center">
                        <p className="text-lg font-serif text-temple-dark/70 mb-2">
                            Motivation:
                        </p>
                        <p className="text-3xl font-serif font-bold text-temple-dark/50">
                            buffering…
                        </p>
                    </div>
                </div>

                <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-amber-50 to-yellow-100 shadow-inner">
                    <h3 className="text-2xl font-serif font-bold text-temple-dark text-center mb-8">
                        Caffeine vs. Actual Output
                    </h3>
                    <div className="relative h-64 border-4 border-temple-gold/40 rounded-lg bg-white/60 p-4">
                        {/* Fake chart */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between h-48">
                            <div className="w-1/6 bg-temple-gold h-full rounded-t-lg" />
                            <div className="w-1/6 bg-temple-gold h-5/6 rounded-t-lg" />
                            <div className="w-1/6 bg-temple-gold h-4/6 rounded-t-lg" />
                            <div className="w-1/6 bg-temple-red h-2 rounded-t-lg" />
                            <div className="w-1/6 bg-temple-red h-2 rounded-t-lg" />
                            <div className="w-1/6 bg-temple-red h-2 rounded-t-lg" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs font-serif text-temple-dark/70 pb-2">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                        </div>
                    </div>
                    <p className="text-center text-lg font-serif text-temple-dark/70 mt-6 italic">
                        The line never crosses.
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
