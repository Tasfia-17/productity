import { ReactNode } from 'react';

interface MicroModuleShellProps {
    title: string;
    children: ReactNode;
    emoji?: string;
}

export default function MicroModuleShell({ title, emoji, children }: MicroModuleShellProps) {
    return (
        <div className="relative my-8">
            {/* Ornate micro border */}
            <div className="relative border-4 border-temple-gold/60 rounded-md shadow-lg bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6">
                {/* Ancient pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-10 pointer-events-none rounded-md"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '48px 48px'
                    }}
                />
                
                {/* Title */}
                <h3 className="relative text-xl md:text-2xl font-ancient text-temple-dark mb-4 tracking-wide">
                    {emoji && <span className="mr-2">{emoji}</span>}
                    {title}
                </h3>
                
                {/* Content */}
                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    );
}
