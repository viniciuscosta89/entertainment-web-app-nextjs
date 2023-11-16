import type { Metadata } from 'next';
import { Main } from '@styles/Main';
import SearchResults from '@components/SearchResults';
import Bookmarks from './Bookmarks';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'Bookmarked - Entertainment Web App | Frontend Mentor Challenge',
  description: 'Bookmarks page',
};

export default async function Bookmarked({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);

  return (
    <Main>{searchParams.query ? <SearchResults isBookmark /> : <Bookmarks userId={session?.user.id || ''} />}</Main>
  );
}
