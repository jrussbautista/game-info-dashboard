import { Game } from '@/types';
import React from 'react';

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden mb-4 aspect-[2/2]">
        <img
          src={game.background_image}
          alt={game.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">{game.name}</p>
        <p>{game.rating}</p>
      </div>
    </div>
  );
}

export default GameCard;
