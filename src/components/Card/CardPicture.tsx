import { Variants } from 'framer-motion';
import { CardPicture as Picture } from './Card.styles';
import { CardPictureProps } from './Card.types';

const imgVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

function CardPicture({ children }: CardPictureProps) {
  return (
    <Picture variants={imgVariants} initial="hidden" animate="show">
      {children}
    </Picture>
  );
}
export default CardPicture;
