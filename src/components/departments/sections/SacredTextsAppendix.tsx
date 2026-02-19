import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DepartmentSectionShell from '../DepartmentSectionShell';

export default function SacredTextsAppendix() {
    const [scrollDepth, setScrollDepth] = useState(1);

    const commandments = [
        'Thou shalt refresh.',
        'Thou shalt Google productivity tools instead of using them.',
        'Thou shalt not begin before coffee.',
        'Honor thy snack and thy scroll.',
        'Remember the Sabbath, and extend it.',
        'Thou shalt not covet thy neighbor\'s productivity.',
        'Thou shalt keep thy tabs open, for they are sacred.',
        'Thou shalt not delete thy drafts, for they are eternal.',
        'Thou shalt always have "just one more thing" to check.',
        'Thou shalt postpone, for tomorrow is another day.',
        'Thou shalt not feel guilty, for rest is holy.',
        'Thou shalt embrace the art of delay.',
    ];

    const parableSegments = [
        'In the beginning, there was a task.',
        'And the task was good. But the human said, "Let me just check one thing first."',
        'And so began the Infinite Scroll.',
        'The human scrolled through feeds of endless content.',
        'Each swipe brought new wonders, new distractions.',
        'Hours passed like minutes. Days like hours.',
        'The task remained, waiting patiently.',
        'But the human had forgotten why they opened the app.',
        'And the Scroll continued, without end.',
        'For the Scroll is eternal, and the task... negotiable.',
    ];

    return (
        <DepartmentSectionShell 
            id="sacred-texts" 
            title="📚 Sacred Texts"
            variant="sacred"
        >
            <div 
                className="space-y-16"
                style={{
                    backgroundImage: 'url(/assets/generated/religious-doodle-tile.dim_1024x1024.png)',
                    backgroundSize: '256px 256px',
                    backgroundRepeat: 'repeat',
                    backgroundBlendMode: 'multiply'
                }}
            >
                {/* The 12 Digital Commandments */}
                <div className="space-y-8">
                    <h3 className="text-4xl md:text-5xl font-biblical text-temple-dark text-center">
                        📜 The 12 Digital Commandments
                    </h3>
                    <div className="border-8 border-temple-gold rounded-lg p-8 bg-gradient-to-br from-amber-50 to-yellow-50">
                        <Accordion type="single" collapsible className="space-y-4">
                            {commandments.map((commandment, index) => (
                                <AccordionItem key={index} value={`commandment-${index}`} className="border-4 border-temple-gold/40 rounded-lg px-6 bg-amber-50">
                                    <AccordionTrigger className="font-commandment text-lg text-temple-dark hover:text-temple-gold">
                                        {index + 1}. {commandment}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-scripture text-temple-dark/70 pt-4">
                                        This commandment is sacred and must be observed at all times.
                                        Failure to comply results in... productivity.
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* The Parable of the Infinite Scroll */}
                <div className="space-y-8">
                    <h3 className="text-4xl md:text-5xl font-parable text-temple-dark text-center">
                        📖 The Parable of the Infinite Scroll
                    </h3>
                    <p className="text-center font-subtitle text-lg text-temple-dark/70 italic">
                        A dramatic illustrated story with no ending
                    </p>
                    <div className="border-8 border-temple-red rounded-lg p-8 bg-gradient-to-br from-red-50 to-amber-50 space-y-6">
                        {parableSegments.slice(0, scrollDepth).map((segment, index) => (
                            <div 
                                key={index}
                                className="border-4 border-temple-gold/40 rounded-lg p-6 bg-amber-50 animate-in fade-in duration-500"
                            >
                                <p className="font-story text-xl text-temple-dark leading-relaxed">
                                    {segment}
                                </p>
                            </div>
                        ))}
                        {scrollDepth < parableSegments.length && (
                            <div className="text-center pt-4">
                                <Button
                                    onClick={() => setScrollDepth(prev => Math.min(prev + 1, parableSegments.length))}
                                    className="font-continue bg-temple-gold hover:bg-temple-gold-light text-temple-dark"
                                >
                                    Continue Reading...
                                </Button>
                            </div>
                        )}
                        {scrollDepth === parableSegments.length && (
                            <div className="text-center pt-4 space-y-4">
                                <p className="font-ending text-2xl text-temple-dark italic">
                                    And the story continues...
                                </p>
                                <Button
                                    onClick={() => setScrollDepth(1)}
                                    variant="outline"
                                    className="font-restart"
                                >
                                    Start Over (The Cycle Repeats)
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DepartmentSectionShell>
    );
}
