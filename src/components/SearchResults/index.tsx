'use client';

import { SearchResultsContainer, SearchResultsGrid } from './SearchResults.styles';
import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { Card } from '@components/Card';
import { useSearchParams } from 'next/navigation';
import { useSearch } from 'hooks/useSearch';
import { useBookmarkStore } from 'store/bookmark';
import { Fragment, useEffect, useMemo } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import type { MediaTextType } from '@type/media.types';
import { useDebounce } from 'hooks/useDebounce';
import Loading from '@components/Loading';
import { LoadButton } from '@components/Loading/Loading.styles';

export default function SearchResults({ mediaType, isBookmark }: { mediaType?: MediaTextType; isBookmark?: boolean }) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query');
  const pageParam = searchParams.get('pageParam');
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useSearch(
    Number(pageParam) || 1,
    queryParam || undefined,
    mediaType,
  );
  console.log({ status });
  const { bookmarks } = useBookmarkStore();

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
              Found {isBookmark ? bookmarks.length : dataFromSearch?.pages[0].total_results} results for ‘{queryParam}’
            </SectionTitle>
          </Container>

          <>
            {(isFetching && !bookmarks) || (isFetching && !dataFromSearch && <Loading />)}
            {isBookmark ? (
              <InView>
                <SearchResultsGrid>
                  {bookmarks.map(bookmark => (
                    <Card.Root contentOver={false} key={bookmark.id} minHeight="28rem">
                      <Card.Picture>
                        <Card.Image posterUrl={bookmark.poster_path} posterAlt={bookmark.title || bookmark.name} />
                        <Card.Bookmark item={bookmark} />
                        <Card.Hover />
                      </Card.Picture>
                      <Card.Content contentOver={false}>
                        <Card.Info
                          contentOver={false}
                          date={bookmark.release_date || bookmark.first_air_date}
                          mediaType={bookmark.media_type || mediaType}
                          votes={bookmark.vote_average}
                        />
                        <Card.Title contentOver={false} title={bookmark.title || bookmark.name} />
                      </Card.Content>
                    </Card.Root>
                  ))}
                </SearchResultsGrid>
              </InView>
            ) : null}

            {!isBookmark ? (
              <InView>
                <SearchResultsGrid>
                  {dataFromSearch?.pages.map((group, i) => (
                    <Fragment key={i}>
                      {group.results.map((item, i) => (
                        <Card.Root contentOver={false} key={i}>
                          <Card.Picture>
                            <Card.Image
                              posterUrl={item.poster_path}
                              posterAlt={item.title || item.name}
                              aspectRatioDesktop="auto"
                              aspectRatioMobile="auto"
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
            ) : null}
          </>
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
    </SearchResultsContainer>
  );
}
