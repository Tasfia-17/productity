interface ApologyLoadingOverlayProps {
    message?: string;
}

export default function ApologyLoadingOverlay({ message = 'Apologizing for your ambition...' }: ApologyLoadingOverlayProps) {
    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
            <div className="border-8 border-temple-gold rounded-lg p-12 bg-parchment text-center space-y-6 max-w-md">
                <div className="text-6xl animate-spin">⏳</div>
                <h3 className="text-3xl font-serif text-temple-dark">
                    Loading...
                </h3>
                <p className="text-xl font-mono text-temple-dark/70 italic">
                    {message}
                </p>
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-temple-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-3 bg-temple-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-3 h-3 bg-temple-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}
