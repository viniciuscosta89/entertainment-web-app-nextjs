'use client';

import { SearchResultsContainer, SearchResultsGrid } from './SearchResults.styles';
import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { useSearchParams } from 'next/navigation';
import { useSearch } from 'hooks/useSearch';
import { Fragment, useEffect, useMemo } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import type { MediaTextType } from '@type/media.types';
import Loading from '@components/Loading';
import { LoadButton } from '@components/Loading/Loading.styles';
import { itemVariants, listVariants } from '@styles/Motion';
import { AnimatePresence } from 'framer-motion';
import { GoUp } from '@styles/GoUp';

export default function SearchResults({ mediaType }: { mediaType?: MediaTextType; isBookmark?: boolean }) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query');
  const pageParam = searchParams.get('pageParam');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useSearch(
    Number(pageParam) || 1,
    queryParam || undefined,
    mediaType,
  );

  const { ref, inView } = useInView();

  const dataFromSearch = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <SearchResultsContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container $paddingInline="1rem" $desktopPaddingInline="0">
            <SectionTitle>
              Found {dataFromSearch?.pages[0].total_results} results for ‘{queryParam}’
            </SectionTitle>
          </Container>

          <AnimatePresence>
            {isFetching || (isFetching && !dataFromSearch && <Loading />)}

            {
              <InView>
                <SearchResultsGrid variants={listVariants} initial="hidden" animate="show">
                  {dataFromSearch?.pages.map((group, i) => (
                    <Fragment key={i}>
                      {group.results.map((item, i) => (
                        <Card.Root contentOver={false} key={i} minHeight="28rem" variants={itemVariants}>
                          <Card.Picture>
                            <Card.Image
                              posterUrl={item.poster_path}
                              posterAlt={item.title || item.name}
                              posterSize="w500"
                              minHeight={{
                                mobile: '14.625rem',
                                tablet: '20.5rem',
                                desktop: '25rem',
                              }}
                            />
                            <Card.Bookmark item={item} />
                            <Card.Hover />
                          </Card.Picture>
                          <Card.Content contentOver={false}>
                            <Card.Info
                              contentOver={false}
                              date={item.release_date || item.first_air_date}
                              mediaType={item.media_type || mediaType}
                              votes={item.vote_average}
                            />
                            <Card.Title contentOver={false} title={item.title || item.name} />
                          </Card.Content>
                        </Card.Root>
                      ))}
                    </Fragment>
                  ))}
                </SearchResultsGrid>
              </InView>
            }
          </AnimatePresence>
        </>
      )}

      {!isLoading && !isFetching && (
        <>
          <div>
            <LoadButton ref={ref} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetchingNextPage ? <Loading /> : hasNextPage ? 'Load More' : ''}
            </LoadButton>
          </div>

          <div>{isFetching && !isFetchingNextPage ? <Loading /> : null}</div>
        </>
      )}

      <GoUp onClick={() => window.scrollTo(0, 0)} title="Scroll top" aria-label="Scroll top">
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </GoUp>
    </SearchResultsContainer>
  );
}
