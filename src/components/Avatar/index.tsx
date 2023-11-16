import { AvatarStyle, AvatarImage } from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export default function Avatar({ image }: AvatarProps) {
  return (
    <AvatarStyle>
      <AvatarImage src={image || 'http://placekitten.com/g/40'} width="40" height="40" alt="Picture of the author" />
    </AvatarStyle>
  );
}
