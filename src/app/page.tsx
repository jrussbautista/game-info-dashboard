'use client';

import { useEffect, useState } from 'react';
import { Game } from '@/types';
import { getGames } from '@/services/games';
import GameList from '@/components/games/GameList';
import ErrorMessage from '@/components/ErrorMessage';
import GameListSkeleton from '@/components/games/GameListSkeleton';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [games, setGames] = useState<Game[]>([]);

  const searchParams = useSearchParams();
  const search = searchParams.get('search') || undefined;

  useEffect(() => {
    async function fetchGames() {
      try {
        setIsLoading(true);
        const { results } = await getGames({ search });
        setGames(results);
        setIsLoading(false);
      } catch (error) {
        let err = error as Error;
        setError(err.message);
        setIsLoading(false);
      }
    }

    fetchGames();
  }, [search]);

  if (isLoading) {
    return <GameListSkeleton />;
  }

  if (error) {
    return <ErrorMessage description={error} />;
  }

  return <GameList games={games} />;
}
