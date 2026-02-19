import { useState, useEffect } from 'react';

export interface Achievement {
    id: string;
    name: string;
    description: string;
    unlocked: boolean;
}

const ACHIEVEMENTS_KEY = 'temple-achievements';

const defaultAchievements: Achievement[] = [
    { id: 'five-more', name: '5 More Minutes Master', description: 'Clicked "5 More Minutes" at least once', unlocked: false },
    { id: 'tab-hoarder', name: 'Tab Hoarder Level III', description: 'Opened 10+ tabs in the Temple', unlocked: false },
    { id: 'deadline-dancer', name: 'Deadline Dancer', description: 'Postponed something successfully', unlocked: false },
    { id: 'snack-disciple', name: 'Snack Disciple', description: 'Blessed your snacks', unlocked: false },
];

export function useAchievements() {
    const [achievements, setAchievements] = useState<Achievement[]>(() => {
        if (typeof window === 'undefined') return defaultAchievements;
        const stored = localStorage.getItem(ACHIEVEMENTS_KEY);
        return stored ? JSON.parse(stored) : defaultAchievements;
    });

    useEffect(() => {
        localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    }, [achievements]);

    const unlockAchievement = (id: string) => {
        setAchievements(prev =>
            prev.map(achievement =>
                achievement.id === id ? { ...achievement, unlocked: true } : achievement
            )
        );
    };

    const resetAchievements = () => {
        setAchievements(defaultAchievements);
        localStorage.removeItem(ACHIEVEMENTS_KEY);
    };

    return {
        achievements,
        unlockAchievement,
        resetAchievements,
        unlockedCount: achievements.filter(a => a.unlocked).length,
        totalCount: achievements.length,
    };
}
