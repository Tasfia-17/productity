import { ReactNode } from 'react';
import { useScrollOrnateBorderMorph } from '@/hooks/useScrollOrnateBorderMorph';

interface DepartmentSectionShellProps {
    id?: string;
    title: string;
    children: ReactNode;
    variant?: 'default' | 'bureaucracy' | 'sacred';
}

export default function DepartmentSectionShell({ 
    id, 
    title, 
    children, 
    variant = 'default' 
}: DepartmentSectionShellProps) {
    const { currentShape, scrollPhase } = useScrollOrnateBorderMorph();

    const bgStyle = variant === 'bureaucracy' 
        ? {
            backgroundImage: 'url(/assets/generated/bureaucracy-form-bg.dim_1800x1200.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        : {};

    const getClipPath = (shape: string) => {
        switch (shape) {
            case 'triangle':
                return 'polygon(50% 2%, 2% 98%, 98% 98%)';
            case 'pentagon':
                return 'polygon(50% 2%, 98% 38%, 82% 98%, 18% 98%, 2% 38%)';
            case 'hexagon':
                return 'polygon(25% 2%, 75% 2%, 98% 50%, 75% 98%, 25% 98%, 2% 50%)';
            case 'octagon':
                return 'polygon(30% 2%, 70% 2%, 98% 30%, 98% 70%, 70% 98%, 30% 98%, 2% 70%, 2% 30%)';
            case 'circle':
                return 'circle(48% at 50% 50%)';
            default:
                return 'none';
        }
    };

    // Vary typography per section based on scroll phase
    const getTitleFontStack = () => {
        const phase = Math.floor(scrollPhase * 10) % 4;
        switch (phase) {
            case 0: return 'Georgia, serif';
            case 1: return 'Garamond, Baskerville, serif';
            case 2: return 'Times New Roman, Times, serif';
            case 3: return 'Palatino, Book Antiqua, serif';
            default: return 'Georgia, serif';
        }
    };

    const getTitleLetterSpacing = () => {
        const phase = Math.floor(scrollPhase * 10) % 3;
        switch (phase) {
            case 0: return '0.05em';
            case 1: return '0.15em';
            case 2: return '0.02em';
            default: return '0.05em';
        }
    };

    return (
        <section id={id} className="scroll-mt-24">
            {/* Ornate section divider with extra patterns */}
            <div className="flex justify-center my-12 relative">
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '64px 64px'
                    }}
                />
                <img 
                    src="/assets/generated/ornate-section-divider.dim_2400x300.png"
                    alt=""
                    className="w-full max-w-4xl h-auto opacity-80 relative z-10"
                />
            </div>

            {/* Main section container with morphing border */}
            <div className="relative">
                {/* Enhanced floral corner decorations with ancient patterns */}
                <div 
                    className="absolute -top-12 -left-12 w-40 h-40 opacity-70 pointer-events-none transition-all duration-700"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
                        backgroundSize: '400% 400%',
                        backgroundPosition: '0% 0%'
                    }}
                />
                <div 
                    className="absolute -top-12 -right-12 w-40 h-40 opacity-70 pointer-events-none transition-all duration-700"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
                        backgroundSize: '400% 400%',
                        backgroundPosition: '100% 0%',
                        transform: 'scaleX(-1)'
                    }}
                />
                <div 
                    className="absolute -bottom-12 -left-12 w-40 h-40 opacity-70 pointer-events-none transition-all duration-700"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
                        backgroundSize: '400% 400%',
                        backgroundPosition: '0% 100%',
                        transform: 'scaleY(-1)'
                    }}
                />
                <div 
                    className="absolute -bottom-12 -right-12 w-40 h-40 opacity-70 pointer-events-none transition-all duration-700"
                    style={{
                        backgroundImage: 'url(/assets/generated/ancient-border-corners-set.dim_2048x2048.png)',
                        backgroundSize: '400% 400%',
                        backgroundPosition: '100% 100%',
                        transform: 'scale(-1)'
                    }}
                />

                {/* Morphing border wrapper - FIX: ensure scrolling works */}
                <div 
                    className="relative p-1 transition-all duration-700 ease-in-out"
                    style={{
                        background: 'linear-gradient(45deg, oklch(var(--temple-gold)), oklch(var(--temple-gold-light)), oklch(var(--temple-red)))',
                        clipPath: getClipPath(currentShape),
                        touchAction: 'pan-y', // Allow vertical scrolling on touch devices
                    }}
                >
                    {/* Ancient pattern border overlay */}
                    <div 
                        className="absolute inset-0 opacity-50 pointer-events-none"
                        style={{
                            backgroundImage: 'url(/assets/generated/ancient-border-pattern-tile.dim_1024x1024.png)',
                            backgroundRepeat: 'repeat',
                            backgroundSize: '128px 128px',
                            clipPath: getClipPath(currentShape)
                        }}
                    />

                    {/* Inner content with standard shape - FIX: ensure child interactions work */}
                    <div 
                        className="bg-parchment relative"
                        style={{
                            clipPath: getClipPath(currentShape),
                            touchAction: 'auto', // Allow all interactions inside content
                        }}
                    >
                        {/* Parchment texture overlay */}
                        <div 
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: 'url(/assets/generated/parchment-overlay-tile.dim_1024x1024.png)',
                                backgroundRepeat: 'repeat',
                                backgroundSize: '256px 256px'
                            }}
                        />

                        {/* Content wrapper with padding and pointer events enabled */}
                        <div className="relative p-8 md:p-12" style={{ pointerEvents: 'auto' }}>
                            {/* Section title with varied typography */}
                            <h2 
                                className="text-3xl md:text-4xl font-bold text-temple-red-dark mb-8 text-center"
                                style={{
                                    fontFamily: getTitleFontStack(),
                                    letterSpacing: getTitleLetterSpacing()
                                }}
                            >
                                {title}
                            </h2>

                            {/* Section content with background variant */}
                            <div 
                                className="relative"
                                style={bgStyle}
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
