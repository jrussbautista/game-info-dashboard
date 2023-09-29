import Image from 'next/image';

function EmptyGamesResult() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-2 text-xl font-light">Ooops!</p>
      <p className="mb-4 text-lg font-semibold">No games found.</p>
      <Image
        src="/images/empty.svg"
        width={400}
        height={400}
        alt="empty games results"
      />
    </div>
  );
}

export default EmptyGamesResult;
