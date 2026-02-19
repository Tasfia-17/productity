import { ScrollArea } from '@/components/ui/scroll-area';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function TermsAndConditionsOfEternalDelay() {
    const sections = [
        { title: '1. Acceptance of Delay', content: 'By continuing to procrastinate, you hereby accept that all deadlines are merely suggestions and that time is a social construct designed to limit your freedom. You acknowledge that "later" is a valid timeframe and that "tomorrow" is an acceptable starting point for any task, regardless of urgency or importance.' },
        { title: '2. Right to Postpone', content: 'You retain the inalienable right to postpone any and all activities indefinitely. This includes but is not limited to: work tasks, personal projects, exercise routines, healthy eating, sleep schedules, and responses to messages. No deadline shall be considered final until you personally decide it is, which may be never.' },
        { title: '3. Snack Provisions', content: 'You are entitled to unlimited snack breaks during any work session. Snacks are defined broadly to include any food item, beverage, or edible substance that provides temporary satisfaction and justification for not working. The procurement of snacks is considered a legitimate work-related activity.' },
        { title: '4. Scroll Rights', content: 'You have the fundamental right to scroll through social media, news feeds, and other digital content at any time, for any duration, without guilt or consequence. This right supersedes all productivity obligations and cannot be waived or limited by external deadlines or commitments.' },
        { title: '5. Tab Management', content: 'You may open as many browser tabs as your device can handle. Each tab represents a potential future task or interest and must be preserved indefinitely. Closing tabs is optional and discouraged, as they serve as a monument to your diverse interests and intentions.' },
        { title: '6. Motivation Fluctuations', content: 'You acknowledge that motivation is a finite resource that depletes rapidly and regenerates slowly. You are not obligated to work during periods of low motivation, which may last indefinitely. High motivation periods are rare and should be celebrated rather than exploited for productivity.' },
        { title: '7. Research Phase', content: 'Any task may be preceded by an unlimited "research phase" during which you gather information, watch tutorials, read articles, and generally prepare to begin. The research phase has no defined endpoint and may constitute the entirety of your engagement with the task.' },
        { title: '8. Tomorrow Clause', content: 'Tomorrow is always a better day to start than today. This principle applies recursively, meaning that when tomorrow becomes today, it automatically becomes less suitable for starting, and the new tomorrow becomes the optimal starting point.' },
        { title: '9. Distraction Immunity', content: 'You cannot be held responsible for distractions that occur during work attempts. Distractions include but are not limited to: notifications, interesting thoughts, sudden urges to reorganize, remembering other tasks, and the general existence of the internet.' },
        { title: '10. Guilt Waiver', content: 'All feelings of guilt, shame, or anxiety related to procrastination are hereby waived. You are not required to feel bad about not working, and any such feelings are considered optional and may be ignored or suppressed through additional procrastination.' },
        { title: '11. Deadline Negotiation', content: 'All deadlines are subject to unilateral renegotiation by you at any time. You may extend, postpone, or completely disregard deadlines based on your current mood, energy level, or desire to do literally anything else.' },
        { title: '12. Eternal Renewal', content: 'These terms and conditions automatically renew every day and cannot be terminated. By waking up, you agree to continue operating under these principles indefinitely. There is no opt-out mechanism, and acceptance is implied through continued existence.' },
    ];

    return (
        <DepartmentSectionShell 
            id="terms-conditions" 
            title="🧾 Terms & Conditions of Eternal Delay"
            variant="bureaucracy"
        >
            <div className="space-y-8">
                <p className="text-center font-legalese text-lg text-temple-dark/70 italic">
                    "Very long and hard to read (but still legible enough)"
                </p>

                <div className="border-8 border-temple-gold rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50">
                    <ScrollArea className="h-[600px] w-full p-8">
                        <div className="space-y-8 pr-4">
                            {sections.map((section, index) => (
                                <div 
                                    key={index}
                                    className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50"
                                >
                                    <h3 className="text-xl font-bold font-clause text-temple-dark mb-4">
                                        {section.title}
                                    </h3>
                                    <p className="font-terms text-sm text-temple-dark/80 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                            <div className="border-8 border-temple-red rounded-lg p-8 bg-gradient-to-br from-red-50 to-amber-50 text-center">
                                <p className="font-signature text-2xl text-temple-dark italic">
                                    By continuing to exist, you agree to these terms.
                                </p>
                                <p className="font-mono text-xs text-temple-dark/60 mt-4">
                                    Last updated: Every day, forever
                                </p>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
