import { useEffect, useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { toast } from 'sonner';

const notifications = [
    "Someone may have texted.",
    "You forgot something.",
    "Check your email. Just in case."
];

export default function NotificationSimulator() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        const showNotification = () => {
            const notification = notifications[Math.floor(Math.random() * notifications.length)];
            toast(notification, {
                duration: 3000,
                className: 'font-serif'
            });
        };

        const interval = setInterval(() => {
            if (Math.random() > 0.5) {
                showNotification();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <MicroModuleShell title="The Notification Simulator" emoji="📡">
            <div className="space-y-4">
                <div className="p-6 bg-white/70 rounded text-center">
                    <p className="font-serif text-temple-dark mb-4">
                        Random popups:
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground font-serif">
                        {notifications.map((notif, index) => (
                            <p key={index}>"{notif}"</p>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={`px-6 py-3 rounded-lg font-serif transition-colors ${
                            isActive
                                ? 'bg-temple-red text-white'
                                : 'bg-temple-gold text-white'
                        }`}
                    >
                        {isActive ? 'Stop Notifications' : 'Start Simulator'}
                    </button>
                </div>
            </div>
        </MicroModuleShell>
    );
}
