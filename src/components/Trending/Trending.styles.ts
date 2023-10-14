'use client';

import styled from 'styled-components';

export const TrendingContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 1.5rem;
    grid-template-columns: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 1.5rem;
    grid-template-columns: 100%;
  }
`;
