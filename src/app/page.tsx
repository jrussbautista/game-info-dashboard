'use client';

import { useEffect, useState } from 'react';
import { Game } from '@/types';
import { getGames } from '@/services/games';
import GameList from '@/components/games/GameList';
import SearchBar from '@/components/SearchBar';
import ErrorMessage from '@/components/ErrorMessage';
import GameListSkeleton from '@/components/games/GameListSkeleton';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [games, setGames] = useState<Game[]>([]);

  const router = useRouter();
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

  function handleSearchSubmit(searchValue: string) {
    const url = searchValue ? `/?search=${searchValue}` : '/';
    router.push(url);
  }

  return (
    <>
      <div className="mb-10 lg:flex items-center justify-between">
        <div className="mb-2 lg:mb-0">
          <Link href="/" className="text-3xl">
            Games
          </Link>
        </div>
        <SearchBar
          onSubmit={handleSearchSubmit}
          value={search}
          submitButtonProps={{ isLoading, disabled: isLoading }}
        />
      </div>
      {isLoading && <GameListSkeleton />}

      {error && <ErrorMessage description={error} />}

      {!isLoading && !error && <GameList games={games} />}
    </>
  );
}
