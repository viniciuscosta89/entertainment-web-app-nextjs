'use client';

import Icons from '@components/icons';
import { SearchbarInput, SearchbarStyle, SearchbarInputLine, SearchbarInputContainer } from './Searchbar.styles';
import type { SearchbarProps } from './Searchbar.types';
import { Container } from '@components/Container';
import { useSearch } from 'hooks/useSearch';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from 'hooks/useDebounce';

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
    <Container $paddingInline="1rem" $desktopPaddingInline="0">
      <SearchbarStyle>
        <Icons.Magnify width="1.5rem" desktopWidth="2rem" tabletWidth="2rem" />
        <SearchbarInputContainer>
          <SearchbarInput placeholder={placeholder} onChange={e => handleChange(e)} value={inputValue} />
          <SearchbarInputLine />
        </SearchbarInputContainer>
      </SearchbarStyle>
    </Container>
  );
}
