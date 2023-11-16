import { ReactNode, createContext, useState, useContext } from 'react';

import type { DataItem } from '@type/data.types';
import { supabase } from 'app/supabase';

interface BookmarkProviderType {
  children: ReactNode;
}

interface BookmarkContextData {
  bookmarks: DataItem[];
  toggleBookmark(media: DataItem, userId?: string): void;
  getBookmarksFromDB(userId: string): void;
}

export const BookmarkContext = createContext({} as BookmarkContextData);

export const useBookmarkContext = () => useContext(BookmarkContext);

export function BookmarkProvider({ children }: BookmarkProviderType) {
  const [bookmarks, setBookmarks] = useState<DataItem[]>([]);

  const toggleBookmark = async (media: DataItem, userId?: string) => {
    const bookmarksHasThisItem = bookmarks.some(bookmark => {
      return bookmark.id === media.id;
    });

    const removeMediaFromBookmarks = bookmarks.filter(bookmark => bookmark.id !== media.id);

    if (bookmarksHasThisItem) {
      setBookmarks(removeMediaFromBookmarks);

      await supabase
        .from('users')
        .update({ bookmarks: [...removeMediaFromBookmarks] })
        .eq('id', userId ?? '');

      return;
    }

    await supabase
      .from('users')
      .update({ bookmarks: [...bookmarks, media] })
      .eq('id', userId ?? '');

    setBookmarks([...bookmarks, media]);
  };

  const getBookmarksFromDB = async (userId: string) => {
    const { data, error } = await supabase.from('users').select('bookmarks').eq('id', userId);

    if (data?.[0].bookmarks && bookmarks.length === 0) {
      data?.forEach(data => {
        setBookmarks([...bookmarks, ...data.bookmarks!]);
      });
      return;
    }

    if (error) {
      console.error('There is no bookmarks', error);
      return;
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, getBookmarksFromDB }}>
      {children}
    </BookmarkContext.Provider>
  );
}
