'use client';

import { useEffect, useState } from 'react';
import { Game, Status } from '@/types';
import { getGames } from '@/services/games';
import GameList from '@/components/games/GameList';

export default function Home() {
  const [gamesStatus, setGamesStatus] = useState<Status>(Status.LOADING);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        setGamesStatus(Status.LOADING);
        const { results } = await getGames();
        setGames(results);
        setGamesStatus(Status.SUCCESS);
      } catch (error) {
        console.error('error', error);
        setGamesStatus(Status.ERROR);
      }
    }

    fetchGames();
  }, []);

  if (gamesStatus === Status.LOADING) {
    return <div className="text-center">loading...</div>;
  }

  return (
    <div>
      <h1>Games</h1>
      <GameList games={games} />
    </div>
  );
}
