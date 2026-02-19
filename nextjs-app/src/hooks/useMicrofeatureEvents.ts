import { useCallback } from 'react';

export type MicrofeatureEvent = 
    | { type: 'confetti'; x: number; y: number }
    | { type: 'toast'; message: string }
    | { type: 'achievement'; id: string }
    | { type: 'loading'; show: boolean; message?: string }
    | { type: 'captcha'; show: boolean }
    | { type: 'audio'; sound: string };

type EventListener = (event: MicrofeatureEvent) => void;

const listeners: EventListener[] = [];

export function useMicrofeatureEvents() {
    const subscribe = useCallback((listener: EventListener) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);

    const emit = useCallback((event: MicrofeatureEvent) => {
        listeners.forEach(listener => listener(event));
    }, []);

    return { subscribe, emit };
}
