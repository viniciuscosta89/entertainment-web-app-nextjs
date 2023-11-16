import 'styled-components';
import { theme } from '@styles/Theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    breakpoints: {
      tabletAndDesktop: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      red: {
        350: string;
        400: string;
      };
      darkBlue: {
        900: string;
        850: string;
        800: string;
        400: string;
      };
      gray: {
        900: string;
        100: string;
        50: string;
      };
      white: string;
    };
    fonts: {
      family: string;
      weight?: number;
      style?: string;
    };
  }
}
