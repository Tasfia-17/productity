import { useMicrofeatureEvents } from '@/hooks/useMicrofeatureEvents';

export default function DigitalChoirSting() {
    const { emit } = useMicrofeatureEvents();

    const playChoir = () => {
        emit({ type: 'audio', sound: 'choir-just-one-more-scroll' });
    };

    return { playChoir };
}
