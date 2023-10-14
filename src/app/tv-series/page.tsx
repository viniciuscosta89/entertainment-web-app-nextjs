import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar';
import SearchResults from '@components/SearchResults';
import PageContent from '@components/PageContent';

export const metadata: Metadata = {
  title: 'TV Series - Entertainment Web App | Frontend Mentor Challenge',
  description: 'TV Series page',
};

export default function TVSeries({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Main>
      <Searchbar placeholder="Search for TV series" mediaType="tv" />

      {searchParams.query ? (
        <SearchResults mediaType="tv" />
      ) : (
        <>
          <PageContent mediaType="tv" />
        </>
      )}
    </Main>
  );
}
