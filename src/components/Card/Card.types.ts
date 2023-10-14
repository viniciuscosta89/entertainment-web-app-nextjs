import { DataItem } from '@type/data.types';
import { MediaTextType } from '@type/media.types';
import type { ReactNode, MouseEvent } from 'react';

export interface CardRootProps {
  children: ReactNode;
  contentOver: boolean;
  minHeight?: string;
}

export interface CardBookmarkProps {
  item: DataItem;
}

export interface CardInfoProps {
  contentOver: boolean;
  date: string;
  mediaType: MediaTextType;
  votes: number;
}

export interface CardContentProps {
  contentOver: boolean;
  children: ReactNode;
}

export interface CardPictureProps {
  children: ReactNode;
}

export interface CardImageProps {
  aspectRatioMobile?: string;
  aspectRatioDesktop?: string;
  isPriority?: boolean;
  minHeight?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  posterAlt: string;
  posterUrl: string;
}

export interface CardTitleProps {
  contentOver: boolean;
  title: string;
}

export interface CardStyleProps {
  $contentOver: boolean;
}
