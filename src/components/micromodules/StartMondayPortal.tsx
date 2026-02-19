import MicroModuleShell from './MicroModuleShell';

export default function StartMondayPortal() {
    const today = new Date().getDay();
    const isMonday = today === 1;

    return (
        <MicroModuleShell title='The "Start Monday" Portal' emoji="🕰">
            <div className="p-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg border-4 border-temple-gold text-center">
                <p className="font-serif text-temple-dark text-lg mb-4">
                    Every plan begins next Monday.
                </p>
                {isMonday && (
                    <p className="font-serif text-sm text-muted-foreground mb-4 italic">
                        (Today is Monday)
                    </p>
                )}
                <p className="font-classical text-temple-red text-3xl tracking-widest">
                    Next Monday.
                </p>
            </div>
        </MicroModuleShell>
    );
}
