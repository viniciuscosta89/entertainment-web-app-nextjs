import type { MediaTextType } from '@type/media.types';
import { ChangeEvent, ReactNode } from 'react';

export interface SearchbarProps {
  mediaType?: MediaTextType | 'bookmark';
  placeholder?: string;
}

export interface SearchbarRootProps {
  children: ReactNode;
}

export interface SearchbarInputProps {
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
