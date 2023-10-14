import { CardImg as Image } from './Card.styles';
import { CardImageProps } from './Card.types';

const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/original';

function CardImage({
  aspectRatioMobile,
  aspectRatioDesktop,
  isPriority,
  minHeight,
  posterUrl,
  posterAlt,
}: CardImageProps) {
  return (
    <Image
      src={posterUrl ? `${POSTER_BASE_PATH}/${posterUrl}` : 'http://placekitten.com/g/400/600'}
      alt={posterAlt}
      $aspectRatioMobile={aspectRatioMobile}
      $aspectRatioDesktop={aspectRatioDesktop}
      $minHeight={minHeight?.mobile}
      $minHeightTablet={minHeight?.tablet}
      $minHeightDesktop={minHeight?.desktop}
      width="470"
      height="230"
      priority={isPriority}
    />
  );
}
export default CardImage;