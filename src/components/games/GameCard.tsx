import { Game } from '@/types';
import Image from 'next/image';

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <div className="group cursor-pointer rounded-xl transition-all hover:scale-105 hover:bg-slate-900">
      <div className="relative aspect-[2/2] overflow-hidden rounded-b-xl rounded-t-xl group-hover:rounded-b-none">
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            className="absolute left-0 top-0 h-full w-full object-cover"
            width={400}
            height={400}
          />
        )}
      </div>
      <div className="p-4">
        <p className="mb-2 text-lg font-semibold">{game.name}</p>
        <div className="mb-1 flex justify-between">
          <p className="mr-4 text-xs text-slate-400">Released Date:</p>
          <p className="text-xs">{game.released}</p>
        </div>
        <div className="flex justify-between">
          <p className="mr-4 text-xs text-slate-400">Genres:</p>
          <ul className="flex flex-wrap justify-end ">
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
