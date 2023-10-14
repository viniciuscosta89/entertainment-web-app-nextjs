import { IconStyle } from '@styles/Icon';
import { IconProps } from '@type/icon.types';

export default function TVIcon({
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
        d="M9.08 4.481H20V20H0V4.481h4.92l-2.7-3.278L3.78.029 7 3.91 10.22 0l1.56 1.203-2.7 3.278ZM2 6.421v11.64h10V6.42H2Zm15 7.76h-2v-1.94h2v1.94Zm-2-3.88h2V8.36h-2v1.94Z"
        clipRule="evenodd"
      />
    </IconStyle>
  );
}
