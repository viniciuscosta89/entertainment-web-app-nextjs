'use client';

import styled from 'styled-components';

export const Wrapper = styled.div<{ $isSignInPage?: boolean }>`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 100%;
  justify-items: ${props => (props.$isSignInPage ? 'center' : 'initial')};
  margin-inline: auto;
  height: ${props => (props.$isSignInPage ? '100vh' : 'auto')};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 2rem;
    grid-template-columns: 100%;
    padding-block: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    align-items: flex-start;
    gap: 2.25rem;
    grid-template-columns: ${props => (props.$isSignInPage ? '1fr' : '6rem 1fr')};
    padding-block: 2rem;
    padding-inline: ${props => (props.$isSignInPage ? '2rem' : '2rem 0')};
  }
`;
