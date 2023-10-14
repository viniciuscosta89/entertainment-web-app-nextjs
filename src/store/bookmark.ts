import { DataItem } from '@type/data.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreProps {
  bookmarks: DataItem[];
  filteredBookmarks: DataItem[];
  filterBookmarks: (params: string) => void;
  toggleBookmark: (media: DataItem) => void;
}

export const useBookmarkStore = create<StoreProps>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      filteredBookmarks: [],
      filterBookmarks: searchParams =>
        set({
          filteredBookmarks: get().bookmarks.filter(bookmark =>
            bookmark.title
              ? bookmark.title.toLowerCase().includes(searchParams)
              : bookmark.name.toLowerCase().includes(searchParams),
          ),
        }),
      toggleBookmark: media =>
        set(state =>
          state.bookmarks.some(bookmark => bookmark.id === media.id)
            ? { bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== media.id) }
            : {
                bookmarks: [...state.bookmarks, media],
              },
        ),
    }),
    {
      name: 'bookmarks-storage', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
