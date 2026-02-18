import { useState } from 'react';

const CURTAIN_DISMISSED_KEY = 'temple-curtain-dismissed';

export function useCurtainIntroFlag() {
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Use sessionStorage instead of localStorage so curtain shows on each new visit
    return sessionStorage.getItem(CURTAIN_DISMISSED_KEY) === 'true';
  });

  const dismiss = () => {
    sessionStorage.setItem(CURTAIN_DISMISSED_KEY, 'true');
    setIsDismissed(true);
  };

  return { isDismissed, dismiss };
}
