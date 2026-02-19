import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface FakeCaptchaModalProps {
    onClose: () => void;
}

export default function FakeCaptchaModal({ onClose }: FakeCaptchaModalProps) {
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [attempted, setAttempted] = useState(false);

    const images = [
        { id: 1, label: 'Scrolling', emoji: '📱' },
        { id: 2, label: 'Snacking', emoji: '🍿' },
        { id: 3, label: 'Napping', emoji: '😴' },
        { id: 4, label: 'Daydreaming', emoji: '💭' },
        { id: 5, label: 'Procrastinating', emoji: '⏰' },
        { id: 6, label: 'Avoiding', emoji: '🙈' },
        { id: 7, label: 'Postponing', emoji: '📅' },
        { id: 8, label: 'Delaying', emoji: '⏸️' },
        { id: 9, label: 'Resting', emoji: '🛋️' },
    ];

    const toggleImage = (id: number) => {
        setSelected(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleVerify = () => {
        setAttempted(true);
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-parchment border-8 border-temple-gold">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-temple-dark text-center">
                        CAPTCHA Verification
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    <p className="text-center font-mono text-lg text-temple-dark">
                        Select all images where you are productive.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        {images.map(image => (
                            <div
                                key={image.id}
                                onClick={() => toggleImage(image.id)}
                                className={`border-4 rounded-lg p-6 cursor-pointer transition-all ${
                                    selected.has(image.id)
                                        ? 'border-temple-gold bg-amber-100 shadow-lg'
                                        : 'border-temple-gold/40 bg-amber-50 hover:border-temple-gold/70'
                                }`}
                            >
                                <div className="text-center space-y-2">
                                    <div className="text-5xl">{image.emoji}</div>
                                    <p className="font-mono text-sm text-temple-dark/70">
                                        {image.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={handleVerify}
                        className="w-full bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-bold text-lg py-6"
                    >
                        Verify
                    </Button>
                    {attempted && (
                        <div className="border-4 border-temple-red rounded-lg p-6 bg-red-50 text-center animate-in fade-in duration-500">
                            <p className="font-bold text-xl text-temple-red mb-2">
                                ❌ Verification Failed
                            </p>
                            <p className="font-mono text-sm text-temple-dark/70">
                                There are no images where you are productive.
                            </p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
