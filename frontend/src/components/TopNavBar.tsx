export default function TopNavBar() {
    const navItems = [
        { label: 'Home', target: 'home' },
        { label: 'Prophe-LOL-cies', target: 'prophecies' },
        { label: 'The Snack Torah', target: 'gospel' },
        { label: 'Holy Feasts (Snacks)', target: 'snack-blessings' },
        { label: 'Ancient Names We Mispronounce', target: 'tribunal' },
        { label: 'Knowledge-ish', target: 'library' },
        { label: 'Media', target: 'museum' },
        { label: 'Salivation', target: 'help' },
        { label: 'Info', target: 'council-tomorrow' }
    ];

    const scrollToSection = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav 
            className="relative z-30 w-full h-[80px] md:h-[100px] flex items-center justify-center shadow-lg"
            style={{
                backgroundImage: 'url(/assets/generated/topbar-bg.dim_1920x260.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4">
                <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => scrollToSection(item.target)}
                                className="text-xs md:text-sm lg:text-base font-serif text-temple-dark hover:text-temple-gold transition-colors duration-200 hover:scale-105 whitespace-nowrap px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-temple-gold focus:ring-offset-2"
                                aria-label={item.label}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
