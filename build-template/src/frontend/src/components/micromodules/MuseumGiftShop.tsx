import MicroModuleShell from './MicroModuleShell';
import { Button } from '@/components/ui/button';

const merchandise = [
    { name: '"I\'ll Do It Later" hoodie', price: '$42.00' },
    { name: '"Focus Is a Myth" mug', price: '$18.00' },
    { name: '"Tab Collector" badge', price: '$12.00' }
];

export default function MuseumGiftShop() {
    return (
        <MicroModuleShell title="The Museum Gift Shop" emoji="🏛">
            <div className="space-y-4">
                {merchandise.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/70 rounded border border-temple-gold/30"
                    >
                        <div>
                            <p className="font-serif text-temple-dark">{item.name}</p>
                            <p className="text-sm text-muted-foreground font-serif">{item.price}</p>
                        </div>
                        <Button size="sm" variant="outline">
                            Add to Cart
                        </Button>
                    </div>
                ))}

                <div className="pt-4 text-center">
                    <Button className="bg-temple-gold hover:bg-temple-gold-light">
                        Complete Purchase Later
                    </Button>
                </div>
            </div>
        </MicroModuleShell>
    );
}
