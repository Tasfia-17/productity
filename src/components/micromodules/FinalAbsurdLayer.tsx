import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(200);

const calendar = Array.from({ length: 31 }, (_, i) => i + 1);

export default function FinalAbsurdLayer() {
    const [contactResponse, setContactResponse] = useState('');

    const handleContact = () => {
        setContactResponse("We'll respond eventually.");
    };

    return (
        <MicroModuleShell title="Final Absurd Layer" emoji="🧨">
            <Tabs defaultValue="terms" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="terms" className="text-xs">T&C</TabsTrigger>
                    <TabsTrigger value="glossary" className="text-xs">Glossary</TabsTrigger>
                    <TabsTrigger value="myth" className="text-xs">Origin</TabsTrigger>
                    <TabsTrigger value="calendar" className="text-xs">Calendar</TabsTrigger>
                    <TabsTrigger value="contact" className="text-xs">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="terms" className="mt-4">
                    <div className="p-4 bg-white/70 rounded border border-temple-gold/30">
                        <p className="font-bold font-serif text-temple-dark mb-2">
                            Terms & Conditions (8,000 words)
                        </p>
                        <ScrollArea className="h-64">
                            <p className="font-serif text-xs text-temple-dark leading-relaxed">
                                {loremIpsum}
                            </p>
                        </ScrollArea>
                    </div>
                </TabsContent>

                <TabsContent value="glossary" className="mt-4">
                    <div className="p-6 bg-white/70 rounded border border-temple-gold/30">
                        <p className="font-bold font-serif text-temple-dark mb-4">
                            Glossary
                        </p>
                        <div className="space-y-3">
                            <div>
                                <p className="font-bold font-classical text-temple-dark">Soon</p>
                                <p className="font-serif text-sm text-muted-foreground italic">
                                    /so͞on/ (adverb): An indeterminate period of time ranging from 5 minutes to never. Often used interchangeably with "later," "eventually," and "when I feel like it."
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="myth" className="mt-4">
                    <div className="p-6 bg-white/70 rounded border border-temple-gold/30">
                        <p className="font-bold font-classical text-temple-dark text-xl mb-4 text-center">
                            The Origin Myth of the First Procrastinator
                        </p>
                        <ScrollArea className="h-64">
                            <div className="space-y-4 font-serif text-temple-dark text-sm leading-relaxed">
                                <p className="font-bold">Page 1 of 5</p>
                                <p>In the beginning, there was a task. And the task was good. But the First Procrastinator looked upon the task and said, "I shall do this tomorrow."</p>
                                <p>And tomorrow came, and the First Procrastinator said again, "I shall do this tomorrow."</p>
                                <p>And this pattern continued for forty days and forty nights, until the task became legend, spoken of only in whispers...</p>
                                <p className="italic text-muted-foreground">[Continues for 4 more pages...]</p>
                            </div>
                        </ScrollArea>
                    </div>
                </TabsContent>

                <TabsContent value="calendar" className="mt-4">
                    <div className="p-6 bg-white/70 rounded border border-temple-gold/30">
                        <p className="font-bold font-serif text-temple-dark mb-4 text-center">
                            Calendar
                        </p>
                        <div className="grid grid-cols-7 gap-2">
                            {calendar.map((day) => (
                                <div
                                    key={day}
                                    className="aspect-square bg-temple-gold/10 rounded flex items-center justify-center border border-temple-gold/30"
                                >
                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">{day}</p>
                                        <p className="font-serif text-xs text-temple-dark font-bold">
                                            Tomorrow
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-4">
                    <div className="p-6 bg-white/70 rounded border border-temple-gold/30 text-center">
                        <p className="font-serif text-temple-dark mb-4">
                            Contact Us
                        </p>
                        <Button
                            onClick={handleContact}
                            className="bg-temple-gold hover:bg-temple-gold-light"
                        >
                            Send Message
                        </Button>
                        {contactResponse && (
                            <p className="font-serif text-temple-red mt-4 italic">
                                {contactResponse}
                            </p>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </MicroModuleShell>
    );
}
