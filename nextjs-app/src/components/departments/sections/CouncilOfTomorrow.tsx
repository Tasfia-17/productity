import DepartmentSectionShell from '../DepartmentSectionShell';

export default function CouncilOfTomorrow() {
    return (
        <DepartmentSectionShell id="council-tomorrow" title="The Council of Tomorrow" variant="sacred">
            <div className="space-y-8 text-center">
                <p className="text-xl md:text-2xl font-serif text-temple-dark leading-relaxed italic">
                    "A page that only says one thing."
                </p>

                <div className="border-8 border-temple-gold rounded-lg p-20 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-inner">
                    <p className="text-4xl md:text-5xl font-serif font-bold text-temple-dark">
                        Let's reconvene tomorrow.
                    </p>
                </div>

                <p className="text-lg font-serif text-temple-dark/70 italic">
                    Refresh = same message.
                </p>
            </div>
        </DepartmentSectionShell>
    );
}
