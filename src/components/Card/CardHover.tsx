import Icons from '@components/icons';
import { CardPlayButton, CardPlayIcon, CardHover as Hover } from './Card.styles';

function CardHover() {
  return (
    <Hover>
      <CardPlayButton>
        <CardPlayIcon>
          <Icons.Play />
        </CardPlayIcon>
        <span>Play</span>
      </CardPlayButton>
    </Hover>
  );
}

export default CardHover;
