import { IconStyle } from '@styles/Icon';
import type { IconProps } from '@type/icon.types';

export default function MovieIcon({
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
      viewBox="0 0 20 20"
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
        fillRule="evenodd"
        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.045 3.045 0 0 0 20 16.956V3.044A3.045 3.045 0 0 0 16.956 0ZM4 9H2V7h2v2Zm0 2H2v2h2v-2Zm14-2h-2V7h2v2Zm0 2h-2v2h2v-2Zm0-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM4 2H2.74a.74.74 0 0 0-.74.74V4h2V2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm15.26.74a.74.74 0 0 0 .74-.74V16h-2v2h1.26Z"
        clipRule="evenodd"
      />
    </IconStyle>
  );
}
