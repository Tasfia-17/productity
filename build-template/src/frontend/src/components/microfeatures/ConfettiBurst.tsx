import { useEffect, useState } from 'react';

interface ConfettiBurstProps {
    x: number;
    y: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    rotation: number;
}

export default function ConfettiBurst({ x, y }: ConfettiBurstProps) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const colors = ['#D4AF37', '#FFD700', '#B8860B', '#DAA520', '#8B4513'];
        const newParticles: Particle[] = [];

        for (let i = 0; i < 30; i++) {
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 3 + Math.random() * 3;
            newParticles.push({
                id: i,
                x,
                y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity - 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
            });
        }

        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles(prev =>
                prev.map(p => ({
                    ...p,
                    x: p.x + p.vx,
                    y: p.y + p.vy,
                    vy: p.vy + 0.2,
                    rotation: p.rotation + 5,
                }))
            );
        }, 16);

        setTimeout(() => {
            clearInterval(interval);
            setParticles([]);
        }, 2000);

        return () => clearInterval(interval);
    }, [x, y]);

    return (
        <>
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="fixed pointer-events-none z-[9999]"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: '10px',
                        height: '10px',
                        backgroundColor: particle.color,
                        transform: `rotate(${particle.rotation}deg)`,
                        transition: 'opacity 0.5s',
                        opacity: 1,
                    }}
                />
            ))}
        </>
    );
}
