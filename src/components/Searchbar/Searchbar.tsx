'use client';

import type { SearchbarProps } from './Searchbar.types';
import { useSearch } from 'hooks/useSearch';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from 'hooks/useDebounce';
import { Searchbar as Search } from './';

export default function Searchbar({ placeholder, mediaType }: SearchbarProps) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query');
  const pageParam = searchParams.get('pageParam');
  const WAIT_INTERVAL = 2000;

  const [inputValue, setInputValue] = useState(queryParam || '');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const debouncedResults = useDebounce(inputValue, WAIT_INTERVAL);

  if (mediaType !== 'bookmark') {
    useSearch(Number(pageParam) || 1, debouncedResults, mediaType);
  }

  return (
    <Search.Root>
      <Search.Input placeholder={placeholder} value={inputValue} handleChange={handleChange} />
    </Search.Root>
  );
}
