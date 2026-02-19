import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default function ProductivityChoir() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <MicroModuleShell title="The Productivity Choir" emoji="🎤">
            <HoverCard open={isHovering} onOpenChange={setIsHovering}>
                <HoverCardTrigger asChild>
                    <div
                        className="p-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg border-4 border-temple-gold cursor-pointer text-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <p className="text-6xl mb-4">👼👼👼</p>
                        <p className="font-serif text-temple-dark text-sm">
                            Hover over the page...
                        </p>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-temple-gold">
                    <div className="text-center py-4">
                        <p className="font-classical text-temple-dark text-3xl tracking-[0.3em] animate-pulse">
                            Staaaaart tomorroooooow…
                        </p>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </MicroModuleShell>
    );
}
