import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import DepartmentSectionShell from '../departments/DepartmentSectionShell';

export default function AIConfessionBooth() {
    const [confession, setConfession] = useState('');
    const [showResponse, setShowResponse] = useState(false);

    const handleConfess = () => {
        if (confession.trim()) {
            setShowResponse(true);
        }
    };

    return (
        <DepartmentSectionShell 
            id="ai-confession" 
            title="🤖 AI Confession Booth"
            variant="sacred"
        >
            <div className="space-y-8 max-w-2xl mx-auto">
                <p className="text-center font-ai text-2xl text-temple-dark italic">
                    "Tell us what you're avoiding. We understand."
                </p>

                <div className="space-y-4">
                    <label className="block font-prompt text-lg text-temple-dark">
                        What are you procrastinating on?
                    </label>
                    <Textarea
                        value={confession}
                        onChange={(e) => setConfession(e.target.value)}
                        placeholder="Type your confession here..."
                        className="min-h-[150px] font-input text-lg"
                    />
                </div>

                <Button
                    onClick={handleConfess}
                    disabled={!confession.trim()}
                    className="w-full font-confess bg-temple-gold hover:bg-temple-gold-light text-temple-dark text-xl py-6"
                >
                    Confess
                </Button>

                {showResponse && (
                    <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-purple-50 to-amber-50 space-y-4 animate-in fade-in duration-500">
                        <div className="text-center text-5xl mb-4">🤖</div>
                        <div className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50">
                            <p className="font-response text-xl text-temple-dark leading-relaxed">
                                "I understand. That sounds difficult. Would you like to delay it together?"
                            </p>
                        </div>
                        <p className="text-center font-mono text-sm text-temple-dark/60 italic">
                            (This is a canned response. No AI was harmed in the making of this feature.)
                        </p>
                    </div>
                )}
            </div>
        </DepartmentSectionShell>
    );
}
