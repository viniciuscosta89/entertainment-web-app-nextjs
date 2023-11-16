import { Variants } from 'framer-motion';

export interface IconProps {
  color?: string;
  hasFill?: boolean;

  height?: string;
  width?: string;

  tabletHeight?: string;
  tabletWidth?: string;

  desktopHeight?: string;
  desktopWidth?: string;

  animate?: string;
  initial?: string;
  variants?: Variants;
  transition?: {
    delay?: number;
    type?: string;
    stiffness?: number;
  };
}

export interface IconStyleProps {
  $color?: string;

  $height?: string;
  $width?: string;

  $tabletHeight?: string;
  $tabletWidth?: string;

  $desktopHeight?: string;
  $desktopWidth?: string;
}
