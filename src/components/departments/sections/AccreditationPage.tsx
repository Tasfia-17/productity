import { Badge } from '@/components/ui/badge';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function AccreditationPage() {
    const badges = [
        { title: 'Certified Level 4 Procrastinator', desc: 'Restarted timer 10+ times' },
        { title: 'Tutorial Watcher', desc: 'Watched tutorials instead of starting' },
        { title: 'Frequent Visitor', desc: 'Opened this site twice in one day' },
        { title: 'Tab Collector', desc: 'Maintained 20+ open tabs' },
        { title: 'Tomorrow Believer', desc: 'Postponed tasks 5+ times' },
        { title: 'Snack Blessed', desc: 'Blessed 10+ snacks' }
    ];

    return (
        <DepartmentSectionShell id="accreditation" title="Official Accreditation Center" variant="bureaucracy">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "Earn badges for procrastination achievements."
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="border-4 border-temple-gold/40 rounded-lg p-8 bg-gradient-to-br from-amber-50 to-yellow-100 text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="text-6xl mb-4">🏆</div>
                            <Badge className="mb-4 bg-temple-gold text-temple-dark font-serif text-sm px-4 py-1">
                                CERTIFIED
                            </Badge>
                            <h3 className="text-xl font-serif font-bold text-temple-dark mb-2">
                                {badge.title}
                            </h3>
                            <p className="text-sm font-serif text-temple-dark/70">
                                {badge.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
