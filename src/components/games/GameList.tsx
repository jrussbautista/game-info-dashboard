import { Game } from '@/types';
import React from 'react';
import GameCard from './GameCard';
import EmptyGamesResult from './EmptyGamesResult';

type Props = {
  games: Game[];
};

function GameList({ games }: Props) {
  if (!games.length) {
    return <EmptyGamesResult />;
  }

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
