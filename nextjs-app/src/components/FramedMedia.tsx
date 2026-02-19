import { useEffect, useState } from 'react';

export default function FramedMedia() {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    const commandments = [
        'Thou shalt open new tabs before completing old ones.',
        'Blessed are the distracted, for their Wi-Fi is strong.',
        'A task postponed is a task spiritually extended.',
        'He who refreshes the inbox invites enlightenment.'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines(prev => {
                if (prev < commandments.length) {
                    return prev + 1;
                }
                return prev;
            });
        }, 1200);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Ornate frame */}
            <div className="relative border-8 border-temple-gold rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100 p-8 md:p-12">
                {/* Scroll background */}
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: 'url(/assets/generated/scroll-bg.dim_1400x900.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-8">
                    {/* Silver pointer */}
                    <div className="flex justify-center mb-8">
                        <img 
                            src="/assets/generated/silver-pointer.dim_1200x300.png"
                            alt="Sacred pointer"
                            className="w-full max-w-md h-auto animate-pulse"
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-temple-dark mb-8 border-b-2 border-temple-gold pb-4">
                        The First Scroll: Acceptance of Distraction
                    </h3>

                    {/* Commandments */}
                    <div className="space-y-6 text-center">
                        {commandments.map((commandment, index) => (
                            <p
                                key={index}
                                className={`text-lg md:text-xl font-serif text-temple-dark leading-relaxed transition-all duration-700 ${
                                    index < visibleLines 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}
                            >
                                {commandment}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
