import { Game } from '@/types';
import React from 'react';
import GameCard from './GameCard';

type Props = {
  games: Game[];
};

function GameList({ games }: Props) {
  return (
    <div
      className="grid gap-6"
      style={{ gridTemplateColumns: 'repeat(4, minmax(0px, 1fr))' }}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
