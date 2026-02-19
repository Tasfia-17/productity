import MicroModuleShell from './MicroModuleShell';

export default function ExistentialPage() {
    return (
        <MicroModuleShell title="The Existential Page" emoji="🧠">
            <div className="p-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-4 border-temple-gold text-center">
                <p className="font-classical text-temple-dark text-3xl leading-relaxed tracking-wide">
                    "If you finish your tasks… who are you?"
                </p>
                <p className="text-xs text-muted-foreground font-serif mt-6 italic">
                    Very dramatic.
                </p>
            </div>
        </MicroModuleShell>
    );
}
