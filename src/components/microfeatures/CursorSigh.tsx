import { useEffect, useState } from 'react';

interface Sigh {
    id: number;
    x: number;
    y: number;
    text: string;
}

export default function CursorSigh() {
    const [sighs, setSighs] = useState<Sigh[]>([]);
    const [nextId, setNextId] = useState(0);

    const sighTexts = ['*sigh*', '...', 'really?', 'again?', 'okay...'];

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every 3 seconds
                const text = sighTexts[Math.floor(Math.random() * sighTexts.length)];
                const newSigh: Sigh = {
                    id: nextId,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    text,
                };
                setSighs(prev => [...prev, newSigh]);
                setNextId(prev => prev + 1);

                setTimeout(() => {
                    setSighs(prev => prev.filter(s => s.id !== newSigh.id));
                }, 3000);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [nextId]);

    return (
        <>
            {sighs.map(sigh => (
                <div
                    key={sigh.id}
                    className="fixed pointer-events-none z-[9998] animate-in fade-in duration-500"
                    style={{
                        left: sigh.x,
                        top: sigh.y,
                        animation: 'fadeOut 3s ease-out forwards',
                    }}
                >
                    <span className="font-mono text-sm text-temple-dark/60 italic">
                        {sigh.text}
                    </span>
                </div>
            ))}
        </>
    );
}
