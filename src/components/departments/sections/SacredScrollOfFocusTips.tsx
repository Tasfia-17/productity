import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function SacredScrollOfFocusTips() {
    const tips = [
        {
            title: 'Turn off notifications',
            content: 'But first, check them one last time. You never know what might be important. Actually, check again just to be sure.'
        },
        {
            title: 'Close unnecessary tabs',
            content: 'But which tabs are truly unnecessary? Better keep them all open, just in case. You might need that article from 2019.'
        },
        {
            title: 'Leave this website',
            content: 'This is the most important tip. Seriously. Close this tab. We mean it. Why are you still reading this?'
        },
        {
            title: 'Create a to-do list',
            content: 'Spend 3 hours making the perfect to-do list. Color-code it. Reorganize it. Never actually do the tasks.'
        },
        {
            title: 'Take regular breaks',
            content: 'Define "regular." Define "break." Actually, just take a break now. You deserve it. You opened this accordion.'
        },
        {
            title: 'Find your optimal work environment',
            content: 'Rearrange your desk. Adjust the lighting. Change rooms. Try a coffee shop. Return home. Repeat daily.'
        }
    ];

    return (
        <DepartmentSectionShell id="focus-tips" title="The Sacred Scroll of Focus Tips" variant="sacred">
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif text-temple-dark text-center leading-relaxed italic">
                    "A long list of tips, each hidden behind dropdowns."
                </p>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {tips.map((tip, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-4 border-temple-gold/40 rounded-lg bg-white/60 px-6"
                            >
                                <AccordionTrigger className="text-xl font-serif font-bold text-temple-dark hover:text-temple-gold">
                                    Tip #{index + 1}: {tip.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-lg font-serif text-temple-dark/80 leading-relaxed pt-4">
                                    {tip.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
