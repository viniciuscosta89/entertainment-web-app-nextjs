import { CardTitle as Title } from './Card.styles';
import { CardTitleProps } from './Card.types';

function CardTitle({ title, contentOver }: CardTitleProps) {
  return <Title $contentOver={contentOver}>{title}</Title>;
}

export default CardTitle;
