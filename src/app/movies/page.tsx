import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar';
import SearchResults from '@components/SearchResults';
import PageContent from '@components/PageContent';

export const metadata: Metadata = {
  title: 'Movies - Entertainment Web App | Frontend Mentor Challenge',
  description: 'Movies page',
};

export default function Movies({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Main>
      <Searchbar placeholder="Search for movies" mediaType="movie" />

      {searchParams.query ? (
        <SearchResults mediaType="movie" />
      ) : (
        <>
          <PageContent mediaType="movie" />
        </>
      )}
    </Main>
  );
}
