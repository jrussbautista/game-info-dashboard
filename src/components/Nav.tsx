'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchBar from './SearchBar';

function Nav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || undefined;

  function handleSearchSubmit(searchValue: string) {
    const url = searchValue ? `/?search=${searchValue}` : '/';
    router.push(url);
  }

  return (
    <nav className="dark:bg sticky top-0 z-10 py-6 dark:bg-background">
      <div className="container items-center justify-between lg:flex">
        <div className="mb-2 lg:mb-0">
          <Link href="/" className="text-3xl">
            Games Library
          </Link>
        </div>
        <SearchBar onSubmit={handleSearchSubmit} value={search} />
      </div>
    </nav>
  );
}

export default Nav;
