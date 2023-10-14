'use client';

import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { useBookmarkStore } from 'store/bookmark';
import { PageContainer } from '@styles/PageContainer';
import { MediaGrid } from '@styles/MediaGrid';
import {
  SearchbarInput,
  SearchbarInputContainer,
  SearchbarInputLine,
  SearchbarStyle,
} from '@components/Searchbar/Searchbar.styles';
import Icons from '@components/icons';
import { ChangeEvent, useCallback, useState } from 'react';

export default function Bookmarks() {
  const { bookmarks, filteredBookmarks, filterBookmarks } = useBookmarkStore();

  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  console.log({ bookmarks });

  return (
    <>
      <Container $paddingInline="1rem" $desktopPaddingInline="0">
        <SearchbarStyle>
          <Icons.Magnify width="1.5rem" desktopWidth="2rem" tabletWidth="2rem" />
          <SearchbarInputContainer>
            <SearchbarInput
              placeholder="Search for bookmarked shows"
              onChange={e => handleChange(e)}
              value={inputValue}
            />
            <SearchbarInputLine />
          </SearchbarInputContainer>
        </SearchbarStyle>
      </Container>

      <PageContainer>
        <Container $paddingInline="1rem" $desktopPaddingInline="0">
          <SectionTitle>Bookmarked Shows</SectionTitle>
        </Container>

        <MediaGrid>
          {bookmarks
            .filter(bookmark =>
              bookmark.title
                ? bookmark.title.toLowerCase().includes(inputValue)
                : bookmark.name.toLowerCase().includes(inputValue),
            )
            .map(item => (
              <Card.Root contentOver={false} key={item.id}>
                <Card.Picture>
                  <Card.Image
                    posterUrl={item.poster_path}
                    posterAlt={item.title || item.name}
                    aspectRatioMobile="auto"
                    aspectRatioDesktop="auto"
                  />
                  <Card.Bookmark item={item} />
                  <Card.Hover />
                </Card.Picture>
                <Card.Content contentOver={false}>
                  <Card.Info
                    contentOver={false}
                    date={item.release_date || item.first_air_date}
                    mediaType={item.media_type}
                    votes={item.vote_average}
                  />
                  <Card.Title contentOver={false} title={item.title || item.name} />
                </Card.Content>
              </Card.Root>
            ))}

          {bookmarks.some(bookmark =>
            bookmark.title
              ? bookmark.title.toLowerCase().includes(inputValue)
              : bookmark.name.toLowerCase().includes(inputValue),
          )
            ? null
            : 'No results'}
        </MediaGrid>
      </PageContainer>
    </>
  );
}
