import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function GameListSkeleton() {
  // create array of items [1,...20]
  const items = Array(20)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item}>
          <Skeleton className="mb-4 h-[300px] w-full" />
          <Skeleton className="mb-2 h-[20px] w-3/5" />
          <Skeleton className="mb-2 h-[10px] w-full" />
          <Skeleton className="h-[10px] w-full" />
        </div>
      ))}
    </div>
  );
}

export default GameListSkeleton;
