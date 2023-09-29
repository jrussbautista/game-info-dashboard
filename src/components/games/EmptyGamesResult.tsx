import Image from 'next/image';

function EmptyGamesResult() {
  return (
    <div className="my-20 flex flex-col items-center text-center">
      <p className="mb-2 text-xl font-light">Ooops!</p>
      <p className="mb-4 text-lg font-semibold">No games found.</p>
      <Image
        src="/images/empty.svg"
        width={300}
        height={300}
        alt="empty games results"
        objectFit="cover"
      />
    </div>
  );
}

export default EmptyGamesResult;
