'use client';

import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { PageContainer } from '@styles/PageContainer';
import { MediaGrid } from '@styles/MediaGrid';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useBookmarkContext } from '@contexts/BookmarkContext';
import { Searchbar } from '@components/Searchbar';
import { itemVariants, listVariants } from '@styles/Motion';

export default function Bookmarks({ userId }: { userId: string }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const { bookmarks, getBookmarksFromDB } = useBookmarkContext();

  useEffect(() => {
    getBookmarksFromDB(userId);
  }, []);

  return (
    <>
      <Searchbar.Root>
        <Searchbar.Input placeholder="Search for bookmarked shows" value={inputValue} handleChange={handleChange} />
      </Searchbar.Root>

      <PageContainer>
        <Container $paddingInline="1rem" $desktopPaddingInline="0">
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
          >
            Bookmarked Shows
          </SectionTitle>
        </Container>

        <MediaGrid variants={listVariants} initial="hidden" animate="show">
          {bookmarks
            .filter(bookmark =>
              bookmark.title
                ? bookmark.title.toLowerCase().includes(inputValue)
                : bookmark.name.toLowerCase().includes(inputValue),
            )
            .map(item => (
              <Card.Root contentOver={false} key={item.id} variants={itemVariants}>
                <Card.Picture>
                  <Card.Image posterUrl={item.poster_path} posterAlt={item.title || item.name} />
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
