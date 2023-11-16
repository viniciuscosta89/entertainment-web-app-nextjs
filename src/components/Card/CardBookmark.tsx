import { CardBookmark as Bookmark } from './Card.styles';
import Icons from '@components/icons';
import { CardBookmarkProps } from './Card.types';
import { useSession } from 'next-auth/react';
import { useBookmarkContext } from '@contexts/BookmarkContext';

function CardBookmark({ item }: CardBookmarkProps) {
  const { data: session } = useSession({ required: true });
  const { bookmarks, toggleBookmark } = useBookmarkContext();

  const userId = session?.user.id;

  const hasMediaInBookmarks = bookmarks.some(bookmark => bookmark.id === item.id);

  return (
    <Bookmark onClick={() => toggleBookmark(item, userId)}>
      <Icons.Bookmark hasFill={hasMediaInBookmarks} />
    </Bookmark>
  );
}

export default CardBookmark;
