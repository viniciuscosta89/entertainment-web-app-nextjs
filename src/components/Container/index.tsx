'use client';

import styled from 'styled-components';

export const Container = styled.div<{ $paddingInline?: string; $desktopPaddingInline?: string }>`
  padding-inline: ${props => props.$paddingInline};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-inline: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding-inline: ${props => props.$desktopPaddingInline || '2rem'};
  }
`;
