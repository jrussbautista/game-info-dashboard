'use client';

import { useEffect, useState } from 'react';
import { Game } from '@/types';
import { getGames } from '@/services/games';
import GameList from '@/components/games/GameList';
import SearchBar from '@/components/SearchBar';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
        console.error('error', error);
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
      <div className="mb-10 md:flex items-center justify-between">
        <div className="mb-2 lg:mb-0">
          <a href="/" className="text-3xl">
            Games
          </a>
        </div>
        <SearchBar
          onSubmit={handleSearchSubmit}
          value={search}
          submitButtonProps={{ isLoading, disabled: isLoading }}
        />
      </div>

      {isLoading ? (
        <p className="text-center">loading...</p>
      ) : (
        <GameList games={games} />
      )}
    </>
  );
}
