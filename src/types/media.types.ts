export interface MediaIconType {
  movie: JSX.Element;
  tv: JSX.Element;
}

export type MediaTextType = 'movie' | 'tv';

export type MediaSearchType = MediaTextType | 'multi';
