import { Card } from './Card.styles';
import { CardRootProps } from './Card.types';

function CardRoot({ children, contentOver, minHeight }: CardRootProps) {
  return (
    <Card $contentOver={contentOver} $minHeight={minHeight}>
      {children}
    </Card>
  );
}

export default CardRoot;
