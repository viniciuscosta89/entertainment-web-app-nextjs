'use client';

import Cookie from '@components/Cookies';
import Recommended from '@components/Recommended';
import Trending from '@components/Trending';
import { useBookmarkContext } from '@contexts/BookmarkContext';
import { useEffect } from 'react';

export default function Home({ userId }: { userId: string }) {
  const { getBookmarksFromDB } = useBookmarkContext();

  useEffect(() => {
    getBookmarksFromDB(userId);
  }, []);

  return (
    <>
      <Trending />

      <Recommended />

      <Cookie />
    </>
  );
}
