import { IconStyle } from '@styles/Icon';
import type { IconProps } from '@type/icon.types';

export default function LogoIcon({
  color,
  width,
  height,
  tabletHeight,
  tabletWidth,
  desktopHeight,
  desktopWidth,
}: IconProps) {
  return (
    <IconStyle
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 33 27"
      $width={width}
      $height={height}
      $tabletWidth={tabletWidth}
      $tabletHeight={tabletHeight}
      $desktopWidth={desktopWidth}
      $desktopHeight={desktopHeight}
      $color={color}
    >
      <path
        fill="currentColor"
        d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
      />
    </IconStyle>
  );
}
