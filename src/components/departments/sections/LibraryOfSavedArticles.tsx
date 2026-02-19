import DepartmentSectionShell from '../DepartmentSectionShell';

export default function LibraryOfSavedArticles() {
    const articles = [
        {
            title: 'How to Wake Up at 5AM',
            estimatedTime: '8 minutes',
            category: 'Morning Routines'
        },
        {
            title: '10 Habits of Highly Successful People',
            estimatedTime: '12 minutes',
            category: 'Success'
        },
        {
            title: 'Why You\'re Tired All The Time',
            estimatedTime: '6 minutes',
            category: 'Health'
        },
        {
            title: 'The Ultimate Guide to Productivity',
            estimatedTime: '45 minutes',
            category: 'Productivity'
        },
        {
            title: 'How to Stop Procrastinating',
            estimatedTime: '10 minutes',
            category: 'Self-Help'
        },
        {
            title: 'The Science of Motivation',
            estimatedTime: '15 minutes',
            category: 'Psychology'
        }
    ];

    return (
        <DepartmentSectionShell id="library" title="The Library of Saved Articles" variant="default">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "Articles You Saved But Will Never Read"
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80 hover:bg-white/90 transition-all hover:shadow-xl"
                        >
                            <div className="space-y-3">
                                <p className="text-sm font-serif text-temple-gold uppercase tracking-wide">
                                    {article.category}
                                </p>
                                <h3 className="text-xl font-serif font-bold text-temple-dark">
                                    {article.title}
                                </h3>
                                <div className="flex justify-between items-center text-temple-dark/70 font-serif">
                                    <p>
                                        Estimated read time: <span className="line-through">{article.estimatedTime}</span>
                                    </p>
                                </div>
                                <p className="text-lg font-serif text-temple-red font-bold">
                                    Actual read time: spiritually infinite.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
