import { ReactNode } from 'react';

interface MicroModuleShellProps {
    title: string;
    emoji?: string;
    children: ReactNode;
}

export default function MicroModuleShell({ title, emoji, children }: MicroModuleShellProps) {
    return (
        <div className="border-8 border-temple-gold/60 rounded-lg p-8 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl my-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-temple-dark text-center mb-6">
                {emoji && <span className="mr-3">{emoji}</span>}
                {title}
            </h3>
            {children}
        </div>
    );
}
