import MicroModuleShell from './MicroModuleShell';

export default function SacredRefrigeratorCam() {
    return (
        <MicroModuleShell title="The Sacred Refrigerator Cam" emoji="🧃">
            <div className="space-y-3">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center border-4 border-temple-gold/50">
                    <div className="text-center">
                        <p className="text-6xl mb-2">🚪</p>
                        <p className="text-xs text-muted-foreground font-serif">
                            [Live Stream]
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-temple-gold/10 rounded text-center">
                    <p className="font-serif text-temple-dark text-lg">
                        "You already checked. It's still the same."
                    </p>
                </div>
            </div>
        </MicroModuleShell>
    );
}
