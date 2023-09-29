import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function GameListSkeleton() {
  // create array of items [1,...20]
  const items = Array(20)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item}>
          <Skeleton className="w-full h-[300px] mb-4" />
          <Skeleton className="w-3/5 h-[20px] mb-2" />
          <Skeleton className="w-full h-[10px] mb-2" />
          <Skeleton className="w-full h-[10px]" />
        </div>
      ))}
    </div>
  );
}

export default GameListSkeleton;
