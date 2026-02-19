import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';

const benefits = [
    "Extended Delays",
    "Advanced Excuse Pack",
    "Early Access to Tomorrow"
];

export default function PremiumMembershipTier() {
    return (
        <MicroModuleShell title="The Premium Membership Tier" emoji="📦">
            <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg border-4 border-temple-gold">
                    <p className="font-classical text-temple-dark text-2xl text-center mb-6 tracking-widest">
                        Procrastination Pro+
                    </p>

                    <div className="space-y-3">
                        <p className="font-serif text-temple-dark font-bold mb-3">
                            Benefits:
                        </p>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-white/50 rounded"
                            >
                                <span className="text-temple-gold text-xl">✓</span>
                                <span className="font-serif text-temple-dark">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <Button className="bg-temple-gold hover:bg-temple-gold-light">
                            Upgrade Now (Eventually)
                        </Button>
                    </div>
                </div>
            </div>
        </MicroModuleShell>
    );
}
