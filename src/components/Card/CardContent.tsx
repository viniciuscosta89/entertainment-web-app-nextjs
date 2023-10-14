import { CardContent as Content } from './Card.styles';
import { CardContentProps } from './Card.types';

function CardContent({ contentOver, children }: CardContentProps) {
  return <Content $contentOver={contentOver}>{children}</Content>;
}

export default CardContent;
