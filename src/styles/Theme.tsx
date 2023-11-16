import { Outfit } from 'next/font/google';

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const theme = {
  breakpoints: {
    tabletAndDesktop: '(width >= 768px)',
    tablet: '(width >= 768px) and (width < 1280px)',
    desktop: '(width >= 1280px)',
  },
  colors: {
    red: {
      350: 'hsla(0, 97%, 63%, 0.35)',
      400: 'hsl(0, 97%, 63%)',
    },
    darkBlue: {
      900: 'hsl(223, 30%, 9%)',
      850: 'hsla(223, 30%, 9%, 50%)',
      800: 'hsl(223, 36%, 14%)',
      400: 'hsl(223, 23%, 46%)',
    },
    gray: {
      900: 'hsla(0, 0%, 0%, 0.5)',
      100: 'hsla(0, 0%, 100%, 0.5)',
      50: 'hsla(0, 0%, 100%, 0.25)',
    },
    white: 'hsl(0, 0%, 100%)',
  },
  fonts: {
    family: outfit.style.fontFamily,
    weight: outfit.style.fontWeight,
    style: outfit.style.fontStyle,
    sizes: {
      small: '1em',
      medium: '2em',
      large: '3em',
    },
  },
};
