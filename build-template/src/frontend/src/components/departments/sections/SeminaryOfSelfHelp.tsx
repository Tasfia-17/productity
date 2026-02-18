import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function SeminaryOfSelfHelp() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [graduateName, setGraduateName] = useState('');
    const [showDiploma, setShowDiploma] = useState(false);

    const courses = [
        { id: 1, title: 'Mastering the Art of Looking Busy', duration: '6 weeks' },
        { id: 2, title: 'Advanced Tab Management', duration: '4 weeks' },
        { id: 3, title: 'How to Say "Research Phase" With Confidence', duration: '8 weeks' },
        { id: 4, title: 'Procrastination as a Lifestyle', duration: '12 weeks (ongoing)' },
    ];

    const handleGraduate = () => {
        if (graduateName.trim()) {
            setShowDiploma(true);
        }
    };

    return (
        <DepartmentSectionShell 
            id="seminary-self-help" 
            title="🧑🎓 The Seminary of Self-Help"
            variant="sacred"
        >
            <div className="space-y-12">
                <p className="text-center font-academic text-2xl text-temple-dark italic">
                    "Where knowledge is acquired, but never applied."
                </p>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-course text-temple-dark text-center">
                        Available Courses
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className={`border-6 rounded-lg p-6 cursor-pointer transition-all ${
                                    selectedCourse === course.title
                                        ? 'border-temple-gold bg-amber-100 shadow-xl'
                                        : 'border-temple-gold/40 bg-amber-50 hover:border-temple-gold/70'
                                }`}
                                onClick={() => setSelectedCourse(course.title)}
                            >
                                <h4 className="font-semibold text-lg font-syllabus text-temple-dark mb-2">
                                    {course.title}
                                </h4>
                                <p className="font-mono text-sm text-temple-dark/60">
                                    Duration: {course.duration}
                                </p>
                                {selectedCourse === course.title && (
                                    <p className="mt-4 font-italic text-temple-gold">
                                        ✓ Enrolled (will start tomorrow)
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-yellow-100 to-amber-100 space-y-6">
                    <h3 className="text-3xl font-bold font-ceremony text-temple-dark text-center">
                        🎓 Graduation Ceremony
                    </h3>
                    <p className="text-center font-formal text-temple-dark/70">
                        Complete your journey (symbolically)
                    </p>
                    <div className="max-w-md mx-auto space-y-4">
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            value={graduateName}
                            onChange={(e) => setGraduateName(e.target.value)}
                            className="font-handwriting text-lg"
                        />
                        <Button
                            onClick={handleGraduate}
                            disabled={!graduateName.trim()}
                            className="w-full font-diploma bg-temple-gold hover:bg-temple-gold-light text-temple-dark"
                        >
                            Generate Diploma
                        </Button>
                    </div>

                    {showDiploma && (
                        <div className="mt-8 border-8 border-temple-gold rounded-lg p-8 bg-amber-50 text-center space-y-4">
                            <div className="text-6xl">🎓</div>
                            <h4 className="text-3xl font-fancy text-temple-dark">
                                Certificate of Completion
                            </h4>
                            <p className="text-xl font-calligraphy text-temple-dark">
                                This certifies that
                            </p>
                            <p className="text-4xl font-bold font-signature text-temple-gold">
                                {graduateName}
                            </p>
                            <p className="text-lg font-formal text-temple-dark">
                                has successfully contemplated completing<br />
                                the Seminary of Self-Help curriculum
                            </p>
                            <p className="text-sm font-mono text-temple-dark/60 mt-8">
                                Issued: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
