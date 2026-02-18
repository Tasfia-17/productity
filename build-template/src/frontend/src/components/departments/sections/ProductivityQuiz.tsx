import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function ProductivityQuiz() {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            id: 'q1',
            question: 'How do you start tasks?',
            options: [
                'A) Immediately',
                'B) After preparation',
                'C) After snacks',
                'D) After researching productivity'
            ]
        },
        {
            id: 'q2',
            question: 'When is the best time to work?',
            options: [
                'A) Morning',
                'B) Afternoon',
                'C) Evening',
                'D) Tomorrow'
            ]
        },
        {
            id: 'q3',
            question: 'How many tabs do you have open?',
            options: [
                'A) 1-5',
                'B) 6-15',
                'C) 16-30',
                'D) I stopped counting'
            ]
        }
    ];

    const handleSubmit = () => {
        setShowResult(true);
    };

    return (
        <DepartmentSectionShell id="quiz" title="The Productivity Quiz (Rigged)" variant="bureaucracy">
            <div className="space-y-8 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "No matter what you choose, the result is predetermined."
                </p>

                {!showResult ? (
                    <div className="space-y-8">
                        {questions.map((q) => (
                            <div key={q.id} className="border-4 border-temple-gold/40 rounded-lg p-6 bg-white/80">
                                <h3 className="text-xl font-serif font-bold text-temple-dark mb-4">
                                    {q.question}
                                </h3>
                                <RadioGroup
                                    value={answers[q.id]}
                                    onValueChange={(value) => setAnswers({ ...answers, [q.id]: value })}
                                >
                                    <div className="space-y-3">
                                        {q.options.map((option, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <RadioGroupItem value={option} id={`${q.id}-${idx}`} />
                                                <Label
                                                    htmlFor={`${q.id}-${idx}`}
                                                    className="text-lg font-serif text-temple-dark cursor-pointer"
                                                >
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        ))}

                        <Button
                            onClick={handleSubmit}
                            className="w-full bg-temple-gold hover:bg-temple-gold-light text-temple-dark font-serif text-xl py-6"
                        >
                            Submit Quiz
                        </Button>
                    </div>
                ) : (
                    <div className="border-8 border-temple-gold rounded-lg p-12 bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl text-center">
                        <p className="text-sm font-serif text-temple-dark/60 mb-4 uppercase tracking-widest">
                            Your Result:
                        </p>
                        <p className="text-4xl md:text-5xl font-serif font-bold text-temple-dark">
                            Spiritually Distracted.
                        </p>
                        <Button
                            onClick={() => {
                                setShowResult(false);
                                setAnswers({});
                            }}
                            variant="outline"
                            className="mt-8 border-2 border-temple-gold text-temple-dark hover:bg-temple-gold/10 font-serif text-lg px-8 py-4"
                        >
                            Take Quiz Again (Same Result)
                        </Button>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
