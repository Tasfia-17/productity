import MicroModuleShell from './MicroModuleShell';

const poses = [
    "Downward-Facing Deadline",
    "Seated Avoidance",
    "Corpse Pose (but awake and scrolling)"
];

export default function ProductivityYogaSection() {
    return (
        <MicroModuleShell title="The Productivity Yoga Section" emoji="🧘">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {poses.map((pose, index) => (
                    <div
                        key={index}
                        className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border-2 border-temple-gold/40 text-center"
                    >
                        <p className="text-4xl mb-3">🧘</p>
                        <p className="font-serif text-temple-dark">
                            {pose}
                        </p>
                    </div>
                ))}
            </div>
        </MicroModuleShell>
    );
}
