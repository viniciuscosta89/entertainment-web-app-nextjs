import Icons from '@components/icons';
import { CardRatingWrapper, CardType, CardInfo as Info, cardRatingStyles } from './Card.styles';
import { Rating as ReactRating } from '@smastrom/react-rating';
import { useTheme } from 'styled-components';
import { MediaIconType, MediaTextType } from '@type/media.types';
import { CardInfoProps } from './Card.types';

function CardInfo({ contentOver, date, mediaType, votes }: CardInfoProps) {
  const theme = useTheme();

  function mediaTypeIcon(type: MediaTextType) {
    const mediaTypes: MediaIconType = {
      movie: <Icons.Movie width="0.75rem" />,
      tv: <Icons.TV width="0.75rem" />,
    };

    return mediaTypes[type as keyof MediaIconType] || '';
  }

  function mediaTypeText(media: MediaTextType) {
    const medias = {
      movie: 'Movie',
      tv: 'TV Series',
    };

    return medias[media as MediaTextType] || '';
  }

  const CUSTOM_RATING_LABELS = ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'];

  const year = new Date(date).getFullYear();

  return (
    <Info $contentOver={contentOver}>
      <span>{year || 'N/A'}</span>•
      <CardType>
        {mediaTypeIcon(mediaType)}
        <span>{mediaTypeText(mediaType)}</span>
      </CardType>
      •
      <CardRatingWrapper>
        <ReactRating
          value={votes / 2}
          readOnly
          itemStyles={cardRatingStyles(theme)}
          visibleItemLabelIds={CUSTOM_RATING_LABELS}
          invisibleItemLabels={CUSTOM_RATING_LABELS}
        />
      </CardRatingWrapper>
    </Info>
  );
}

export default CardInfo;
