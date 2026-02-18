import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const irrelevantContent = [
    "Did you know that honey never spoils? Archaeologists have found 3000-year-old honey in Egyptian tombs that's still edible.",
    "The shortest war in history lasted 38 minutes between Britain and Zanzibar on August 27, 1896.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "The inventor of the Pringles can is now buried in one.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe."
];

export default function HolySpiritJustASecondTooltip() {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState('');

    useEffect(() => {
        const showTooltip = () => {
            // Random position
            setPosition({
                x: Math.random() * 80 + 10, // 10-90%
                y: Math.random() * 80 + 10
            });
            setIsVisible(true);

            // Hide after 5 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        // Show at random intervals (10-30 seconds)
        const scheduleNext = () => {
            const delay = Math.random() * 20000 + 10000;
            setTimeout(() => {
                showTooltip();
                scheduleNext();
            }, delay);
        };

        scheduleNext();
    }, []);

    const handleClick = () => {
        setCurrentContent(irrelevantContent[Math.floor(Math.random() * irrelevantContent.length)]);
        setIsDialogOpen(true);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div
                className="fixed z-[100] cursor-pointer animate-pulse"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                }}
                onClick={handleClick}
            >
                <div className="bg-temple-gold text-white px-4 py-2 rounded-lg shadow-2xl border-2 border-temple-gold-light">
                    <p className="font-serif text-sm whitespace-nowrap">
                        Wait… one more thing.
                    </p>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-gradient-to-br from-amber-50 to-yellow-100">
                    <DialogHeader>
                        <DialogTitle className="font-ancient text-temple-dark">
                            🕊 The Holy Spirit Has Spoken
                        </DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                        <p className="font-serif text-temple-dark leading-relaxed">
                            {currentContent}
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
