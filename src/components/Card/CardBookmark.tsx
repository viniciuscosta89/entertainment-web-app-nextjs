import { CardBookmark as Bookmark } from './Card.styles';
import Icons from '@components/icons';
import { CardBookmarkProps } from './Card.types';
import { DataItem } from '@type/data.types';
import { useBookmarkStore } from 'store/bookmark';
import { useCallback } from 'react';

function CardBookmark({ item }: CardBookmarkProps) {
  const { bookmarks, toggleBookmark } = useBookmarkStore();

  const handleClick = useCallback((media: DataItem) => {
    toggleBookmark(media);
  }, []);

  return (
    <Bookmark onClick={() => handleClick(item)}>
      <Icons.Bookmark hasFill={bookmarks.some(bookmark => bookmark.id === item.id)} />
    </Bookmark>
  );
}

export default CardBookmark;
