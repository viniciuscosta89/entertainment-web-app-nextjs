import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar/Searchbar';
import SearchResults from '@components/SearchResults';
import PageContent from '@components/PageContent';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'Movies - Entertainment Web App | Frontend Mentor Challenge',
  description: 'Movies page',
};

export default async function Movies({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  return (
    <Main>
      <Searchbar placeholder="Search for movies" mediaType="movie" />

      {searchParams.query ? (
        <SearchResults mediaType="movie" />
      ) : (
        <>
          <PageContent mediaType="movie" userId={session?.user.id || ''} />
        </>
      )}
    </Main>
  );
}
