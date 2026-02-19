import { ReactNode } from 'react';
import { useInfinitePageRepeat } from '@/hooks/useInfinitePageRepeat';

interface InfiniteRepeatBlocksProps {
  children: ReactNode;
}

export default function InfiniteRepeatBlocks({ children }: InfiniteRepeatBlocksProps) {
  const { blockCount, sentinelRef } = useInfinitePageRepeat();

  return (
    <>
      {Array.from({ length: blockCount }).map((_, index) => (
        <div key={index} className="space-y-12">
          {children}
        </div>
      ))}
      
      {/* Sentinel element to trigger next block append */}
      <div ref={sentinelRef} className="h-4" aria-hidden="true" />
    </>
  );
}
