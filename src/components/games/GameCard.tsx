import { Game } from '@/types';
import Image from 'next/image';

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <div className="group transition-all hover:scale-105 cursor-pointer rounded-xl hover:bg-slate-900">
      <div className="relative aspect-[2/2] overflow-hidden rounded-t-xl rounded-b-xl group-hover:rounded-b-none">
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={400}
            height={400}
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{game.name}</p>
        <div className="flex justify-between mb-1">
          <p className="mr-4 text-xs text-slate-400">Released Date:</p>
          <p className="text-xs">{game.released}</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-4 text-xs text-slate-400">Genres:</p>
          <ul className="flex flex-wrap justify-end">
            {game.genres.map((genre, index) => (
              <li key={genre.id}>
                <span className="text-xs">{genre.name}</span>
                {index < game.genres.length - 1 && (
                  <span className="mr-1">,</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
