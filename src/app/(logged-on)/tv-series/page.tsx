import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar/Searchbar';
import SearchResults from '@components/SearchResults';
import PageContent from '@components/PageContent';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'TV Series - Entertainment Web App | Frontend Mentor Challenge',
  description: 'TV Series page',
};

export default async function TVSeries({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  return (
    <Main>
      <Searchbar placeholder="Search for TV series" mediaType="tv" />

      {searchParams.query ? (
        <SearchResults mediaType="tv" />
      ) : (
        <>
          <PageContent mediaType="tv" userId={session?.user.id || ''} />
        </>
      )}
    </Main>
  );
}
