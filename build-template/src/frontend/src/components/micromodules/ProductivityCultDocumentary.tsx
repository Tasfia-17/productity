import MicroModuleShell from './MicroModuleShell';

export default function ProductivityCultDocumentary() {
    return (
        <MicroModuleShell title="The Productivity Cult Documentary" emoji="🛸">
            <div className="space-y-4">
                <div className="p-6 bg-black/90 rounded-lg">
                    <p className="font-classical text-white text-2xl text-center mb-4 tracking-widest">
                        Inside the Church of Delay
                    </p>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                        <p className="text-white/50 font-serif text-sm">
                            [Dramatic B-roll footage]
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-white/70 rounded border-l-4 border-temple-gold">
                    <p className="font-serif text-temple-dark italic text-lg leading-relaxed">
                        Serious narration:
                    </p>
                    <p className="font-serif text-temple-dark mt-2">
                        "Experts say members often begin tasks at 2:03 PM."
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 font-serif italic">
                        Dramatic music.
                    </p>
                </div>
            </div>
        </MicroModuleShell>
    );
}
