import styled from 'styled-components';
import type { IconStyleProps } from '@type/icon.types';

export const IconStyle = styled.svg<IconStyleProps>`
  color: ${props => props.$color};
  line-height: 1;
  width: ${props => props.$width};
  height: ${props => props.$height};
  transition: fill 0.3s ease-in-out;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: ${props => props.$tabletWidth};
    height: ${props => props.$tabletHeight};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: ${props => props.$desktopWidth};
    height: ${props => props.$desktopHeight};
  }
`;
