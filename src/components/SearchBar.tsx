'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Icons } from './ui/icons';

type Props = {
  value?: string;
  onSubmit: (searchValue: string) => void;
  submitButtonProps?: { disabled?: boolean; isLoading?: boolean };
};

function SearchBar({
  onSubmit,
  value,
  submitButtonProps = { disabled: false, isLoading: false },
}: Props) {
  const [searchText, setSearchText] = useState(value || '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(searchText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          className="px-3 py-2 w-full lg:w-80"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Button
          className="px-3 py-2"
          type="submit"
          disabled={submitButtonProps.disabled}
        >
          {submitButtonProps.isLoading ? (
            <Icons.spinner />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          )}
        </Button>
      </div>
    </form>
  );
}

export default SearchBar;
