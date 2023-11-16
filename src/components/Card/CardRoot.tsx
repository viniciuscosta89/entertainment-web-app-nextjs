import { Card } from './Card.styles';
import { CardRootProps } from './Card.types';

function CardRoot({ children, contentOver, minHeight, animate, initial, variants, transition }: CardRootProps) {
  return (
    <Card
      $contentOver={contentOver}
      $minHeight={minHeight}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </Card>
  );
}

export default CardRoot;
