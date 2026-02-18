import { useState } from 'react';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function MuseumOfUnfinishedProjects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            title: 'Half-written novel',
            progress: '3%',
            lastAccessed: 'Emotionally, never.'
        },
        {
            title: 'Business idea from 2022',
            progress: '12%',
            lastAccessed: 'Emotionally, never.'
        },
        {
            title: 'Workout plan',
            progress: '1%',
            lastAccessed: 'Emotionally, never.'
        },
        {
            title: 'Online course',
            progress: '3%',
            lastAccessed: 'Emotionally, never.'
        },
        {
            title: 'Side project',
            progress: '7%',
            lastAccessed: 'Emotionally, never.'
        },
        {
            title: 'Learning a new language',
            progress: '2%',
            lastAccessed: 'Emotionally, never.'
        }
    ];

    return (
        <DepartmentSectionShell id="museum" title="The Museum of Unfinished Projects" variant="default">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "A gallery of dreams deferred."
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/60 hover:bg-white/90 transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-xl font-serif font-bold text-temple-dark mb-4">
                                {project.title}
                            </h3>
                            <div className="space-y-2 text-temple-dark/70 font-serif">
                                <p>
                                    <span className="font-semibold">Progress:</span> {project.progress} complete
                                </p>
                                <p className={`transition-all ${hoveredIndex === index ? 'text-temple-red font-bold' : ''}`}>
                                    <span className="font-semibold">Last accessed:</span> {project.lastAccessed}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
