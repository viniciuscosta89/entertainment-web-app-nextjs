'use client';

import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 100%;
  margin-inline: auto;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 2rem;
    grid-template-columns: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 2.25rem;
    grid-template-columns: 100%;
    padding-block: 2.25rem;
  }
`;
