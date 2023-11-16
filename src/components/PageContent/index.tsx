'use client';

import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { useMovies } from 'hooks/useMovies';
import { PageContentProps } from './PageContent.types';
import { useTVSeries } from 'hooks/useTVSeries';
import { PageContainer } from '@styles/PageContainer';
import { MediaGrid } from '@styles/MediaGrid';
import Loading from '@components/Loading';
import { AnimatePresence } from 'framer-motion';
import { itemVariants, listVariants } from '@styles/Motion';
import { useBookmarkContext } from '@contexts/BookmarkContext';
import { useEffect } from 'react';

export default function PageContent({ mediaType, userId }: PageContentProps) {
  const { getBookmarksFromDB } = useBookmarkContext();
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

  useEffect(() => {
    getBookmarksFromDB(userId);
  }, []);

  return (
    <PageContainer>
      <>
        <Container $paddingInline="1rem" $desktopPaddingInline="0">
          <SectionTitle
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
          >
            {mediaTypeObject(mediaType)?.title}
          </SectionTitle>
        </Container>

        <AnimatePresence>
          {isLoading ? (
            <Loading />
          ) : (
            <MediaGrid variants={listVariants} initial="hidden" animate="show">
              {data?.results.map(item => (
                <Card.Root contentOver={false} minHeight="28rem" key={item.id} variants={itemVariants}>
                  <Card.Picture>
                    <Card.Image
                      posterUrl={item.poster_path}
                      posterAlt={item.title || item.name}
                      posterSize="w500"
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
        </AnimatePresence>
      </>
    </PageContainer>
  );
}
