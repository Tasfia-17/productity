import MicroModuleShell from './MicroModuleShell';

const episodes = [
    "The Theory of Relative Deadlines",
    "The Paradox of Planning",
    "Blessed Are Those Who Reschedule",
    "Energy Cannot Be Destroyed, Only Converted Into Scrolling"
];

export default function JesusSelfHelpEinsteinVoiceSeries() {
    return (
        <MicroModuleShell title="Jesus Teaching Self-Help in Einstein Voice (Extended Series)" emoji="🧑🏫">
            <div className="space-y-3">
                <p className="font-serif text-temple-dark text-center italic mb-4">
                    Extremely calm delivery.
                </p>
                {episodes.map((episode, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white/70 rounded border-l-4 border-temple-gold"
                    >
                        <p className="font-classical text-temple-dark">
                            <span className="font-bold">Episode {index + 1}:</span> {episode}
                        </p>
                    </div>
                ))}
            </div>
        </MicroModuleShell>
    );
}
