import DepartmentSectionShell from '../DepartmentSectionShell';

export default function ArchiveOfAlmostStarted() {
    const timeline = [
        { time: '9:02 AM', event: 'Opened laptop confidently.' },
        { time: '9:04 AM', event: 'Checked one notification.' },
        { time: '9:41 AM', event: 'Research spiral initiated.' },
        { time: '11:13 AM', event: 'Rewatched productivity reel.' },
        { time: '1:26 PM', event: 'Spiritually exhausted.' }
    ];

    return (
        <DepartmentSectionShell id="archive" title='The Archive of "Almost Started"' variant="default">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "A timeline that reads like a war documentary."
                </p>

                <div className="max-w-3xl mx-auto space-y-6">
                    {timeline.map((entry, index) => (
                        <div
                            key={index}
                            className="border-l-8 border-temple-gold pl-8 py-4 bg-white/60 rounded-r-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <p className="text-2xl font-serif font-bold text-temple-gold mb-2">
                                {entry.time}
                            </p>
                            <p className="text-xl font-serif text-temple-dark">
                                {entry.event}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border-4 border-temple-red/40 rounded-lg p-8 bg-temple-red/10 text-center">
                    <p className="text-2xl font-serif font-bold text-temple-red">
                        Status: Mission Failed Successfully
                    </p>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
