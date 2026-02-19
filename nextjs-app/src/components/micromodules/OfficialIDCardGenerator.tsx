import { useState } from 'react';
import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';

export default function OfficialIDCardGenerator() {
    const [showCard, setShowCard] = useState(false);

    return (
        <MicroModuleShell title="Official ID Card Generator" emoji="🪪">
            <div className="space-y-4">
                {!showCard ? (
                    <div className="text-center p-6">
                        <Button
                            onClick={() => setShowCard(true)}
                            className="bg-temple-gold hover:bg-temple-gold-light"
                        >
                            Generate ID Card
                        </Button>
                    </div>
                ) : (
                    <div className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg border-4 border-temple-gold">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <div className="flex gap-4">
                                <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-4xl">👤</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-temple-dark text-lg">
                                        Certified Level IV
                                    </p>
                                    <p className="font-classical text-temple-red text-xl tracking-wide">
                                        Delay Practitioner
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2 font-serif">
                                        ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-300">
                                <div className="flex justify-center">
                                    <svg width="120" height="40" className="opacity-70">
                                        <rect x="0" y="0" width="4" height="40" fill="black" />
                                        <rect x="8" y="0" width="2" height="40" fill="black" />
                                        <rect x="14" y="0" width="4" height="40" fill="black" />
                                        <rect x="22" y="0" width="2" height="40" fill="black" />
                                        <rect x="28" y="0" width="6" height="40" fill="black" />
                                        <rect x="38" y="0" width="2" height="40" fill="black" />
                                        <rect x="44" y="0" width="4" height="40" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MicroModuleShell>
    );
}
