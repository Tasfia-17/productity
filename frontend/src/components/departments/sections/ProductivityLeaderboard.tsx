import DepartmentSectionShell from '../DepartmentSectionShell';

export default function ProductivityLeaderboard() {
    const rankings = [
        { rank: 1, name: 'Guy Who Closed 2 Tabs', score: '2 points' },
        { rank: 2, name: 'Person Who Started a Timer', score: '1 point' },
        { rank: 3, name: 'You (Considering It)', score: '0 points' },
        { rank: 4, name: 'Everyone else', score: '-' },
        { rank: 5, name: 'Watching One More Video', score: '-∞ points' }
    ];

    return (
        <DepartmentSectionShell id="leaderboard" title="The Productivity Leaderboard" variant="default">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "Fake ranking system celebrating minimal achievements."
                </p>

                <div className="max-w-3xl mx-auto space-y-4">
                    {rankings.map((entry) => (
                        <div
                            key={entry.rank}
                            className={`border-4 rounded-lg p-6 flex items-center justify-between ${
                                entry.rank === 3
                                    ? 'border-temple-gold bg-temple-gold/20 shadow-xl'
                                    : 'border-temple-gold/40 bg-white/80'
                            }`}
                        >
                            <div className="flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-serif font-bold ${
                                    entry.rank === 1 ? 'bg-yellow-400 text-temple-dark' :
                                    entry.rank === 2 ? 'bg-gray-300 text-temple-dark' :
                                    entry.rank === 3 ? 'bg-orange-400 text-temple-dark' :
                                    'bg-temple-gold/20 text-temple-dark/50'
                                }`}>
                                    {entry.rank}
                                </div>
                                <div>
                                    <p className="text-xl font-serif font-bold text-temple-dark">
                                        {entry.name}
                                    </p>
                                    <p className="text-lg font-serif text-temple-dark/70">
                                        {entry.score}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
