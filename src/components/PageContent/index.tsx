'use client';

import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { useMovies } from 'hooks/useMovies';
import { PageContentProps } from './PageContent.types';
import { useTVSeries } from 'hooks/useTVSeries';
import { useCallback } from 'react';
import { DataItem } from '@type/data.types';
import { useBookmarkStore } from 'store/bookmark';
import { PageContainer } from '@styles/PageContainer';
import { MediaGrid } from '@styles/MediaGrid';
import Loading from '@components/Loading';

export default function PageContent({ mediaType }: PageContentProps) {
  const movieHook = () => useMovies();
  const tvHook = () => useTVSeries();

  const mediaTypeObject = (mediaType?: string) => {
    return {
      movie: {
        hook: movieHook,
        title: 'Movies',
      },
      tv: {
        hook: tvHook,
        title: 'TV Series',
      },
    }[mediaType || ''];
  };

  const { data, isLoading } = mediaTypeObject(mediaType)?.hook()!;

  const { bookmarks, toggleBookmark } = useBookmarkStore();

  const handleClick = useCallback((media: DataItem) => {
    toggleBookmark(media);
  }, []);

  return (
    <PageContainer>
      <>
        <Container $paddingInline="1rem" $desktopPaddingInline="0">
          <SectionTitle>{mediaTypeObject(mediaType)?.title}</SectionTitle>
        </Container>

        {isLoading ? (
          <Loading />
        ) : (
          <MediaGrid>
            {data?.results.map(item => (
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
                    mediaType={mediaType}
                    votes={item.vote_average}
                  />
                  <Card.Title contentOver={false} title={item.title || item.name} />
                </Card.Content>
              </Card.Root>
            ))}
          </MediaGrid>
        )}
      </>
    </PageContainer>
  );
}
