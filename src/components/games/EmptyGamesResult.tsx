import Image from 'next/image';

function EmptyGamesResult() {
  return (
    <div className="text-center flex flex-col items-center">
      <p className="text-xl font-light mb-2">Ooops!</p>
      <p className="text-lg font-semibold mb-4">No games found.</p>
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
