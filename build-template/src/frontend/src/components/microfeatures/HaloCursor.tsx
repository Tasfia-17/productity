import { useEffect, useState } from 'react';

export default function HaloCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        const rotationInterval = setInterval(() => {
            setRotation(prev => (prev + 2) % 360);
        }, 50);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(rotationInterval);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-[9999] transition-transform duration-100"
            style={{
                left: position.x,
                top: position.y,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            }}
        >
            <img
                src={'/assets/generated/halo-cursor-ring.dim_512x512.png'}
                alt=""
                className="w-16 h-16 opacity-60"
            />
        </div>
    );
}
