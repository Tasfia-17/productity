import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAchievements } from '@/hooks/useAchievements';

export default function AchievementPanel() {
    const { achievements, unlockedCount, totalCount } = useAchievements();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    className="fixed bottom-4 right-4 z-50 bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-bold shadow-2xl"
                    size="lg"
                >
                    🏆 Achievements ({unlockedCount}/{totalCount})
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-parchment border-l-8 border-temple-gold">
                <SheetHeader>
                    <SheetTitle className="text-3xl font-serif text-temple-dark">
                        Achievement System
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                    {achievements.map(achievement => (
                        <div
                            key={achievement.id}
                            className={`border-4 rounded-lg p-4 transition-all ${
                                achievement.unlocked
                                    ? 'border-temple-gold bg-amber-50 shadow-lg'
                                    : 'border-temple-gold/30 bg-gray-100 opacity-60'
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-3xl">
                                    {achievement.unlocked ? '🏆' : '🔒'}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-temple-dark">
                                        {achievement.name}
                                    </h3>
                                    <p className="text-sm text-temple-dark/70 mt-1">
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
