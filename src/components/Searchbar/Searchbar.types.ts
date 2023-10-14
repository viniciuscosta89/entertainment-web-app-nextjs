import type { MediaTextType } from '@type/media.types';

export interface SearchbarProps {
  mediaType?: MediaTextType | 'bookmark';
  placeholder?: string;
}
