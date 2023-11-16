import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import Searchbar from '@components/Searchbar/Searchbar';
import SearchResults from '@components/SearchResults';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from 'app/api/auth/[...nextauth]/route';
import Home from './Home';

export const metadata: Metadata = {
  title: 'Entertainment Web App | Frontend Mentor Challenge',
  description: 'Created for a Frontend Mentor Challenge by Vinicius Costa',
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    redirect('/signin');
  }

  return (
    <Main>
      <Searchbar placeholder="Search for movies or TV series" />

      {searchParams.query ? <SearchResults /> : <Home userId={session.user.id} />}
    </Main>
  );
}
