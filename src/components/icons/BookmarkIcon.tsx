import { IconStyle } from '@styles/Icon';
import type { IconProps } from '@type/icon.types';

export default function BookmarkIcon({
  color,
  width,
  height,
  tabletHeight,
  tabletWidth,
  desktopHeight,
  desktopWidth,
  hasFill,
}: IconProps) {
  return (
    <IconStyle
      xmlns="http://www.w3.org/2000/svg"
      fill={hasFill ? 'currentColor' : 'transparent'}
      viewBox="0 0 12 14"
      $width={width}
      $height={height}
      $tabletWidth={tabletWidth}
      $tabletHeight={tabletHeight}
      $desktopWidth={desktopWidth}
      $desktopHeight={desktopHeight}
      $color={color}
    >
      <path
        fill="inherit"
        stroke="currentColor"
        strokeWidth="1.5"
        d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014c-.1 0-.17-.027-.24-.091L6.357 9.235l-.524-.512-.524.512-4.011 3.915a.328.328 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z"
      />
    </IconStyle>
  );
}
