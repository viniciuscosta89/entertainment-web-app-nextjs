import { CardPicture as Picture } from './Card.styles';
import { CardPictureProps } from './Card.types';

function CardPicture({ children }: CardPictureProps) {
  return <Picture>{children}</Picture>;
}
export default CardPicture;
