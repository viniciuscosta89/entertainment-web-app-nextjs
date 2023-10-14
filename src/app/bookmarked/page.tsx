import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar';
import SearchResults from '@components/SearchResults';
import Bookmarks from './Bookmarks';

export const metadata: Metadata = {
  title: 'Bookmarked - Entertainment Web App | Frontend Mentor Challenge',
  description: 'Bookmarks page',
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
      {searchParams.query ? (
        <SearchResults isBookmark />
      ) : (
        <>
          <Bookmarks />
        </>
      )}
    </Main>
  );
}
