import { useState, useEffect } from 'react';
import MicroModuleShell from './MicroModuleShell';

interface Stock {
    name: string;
    emoji: string;
    trend: 'up' | 'down';
    value: number;
}

export default function EmotionalStockMarket() {
    const [stocks, setStocks] = useState<Stock[]>([
        { name: 'MOTIVATION', emoji: '📉', trend: 'down', value: 12.5 },
        { name: 'DISCIPLINE', emoji: '📉', trend: 'down', value: 8.3 },
        { name: 'SNACK FUTURES', emoji: '📈', trend: 'up', value: 156.7 },
        { name: 'RANDOM YOUTUBE SPIKE', emoji: '📈', trend: 'up', value: 289.4 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prev => prev.map(stock => ({
                ...stock,
                value: stock.trend === 'up'
                    ? stock.value + Math.random() * 5
                    : Math.max(1, stock.value - Math.random() * 2)
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <MicroModuleShell title="The Emotional Stock Market" emoji="📊">
            <div className="space-y-3">
                {stocks.map((stock, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/70 rounded border border-temple-gold/30"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{stock.emoji}</span>
                            <span className="font-classical text-temple-dark font-bold tracking-wide">
                                {stock.name}
                            </span>
                        </div>
                        <div className="text-right">
                            <p className={`font-bold text-lg ${
                                stock.trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {stock.value.toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground font-serif">
                                Live updates
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </MicroModuleShell>
    );
}
