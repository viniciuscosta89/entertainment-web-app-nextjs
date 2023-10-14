'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 100%;
  margin-inline: auto;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 2rem;
    grid-template-columns: 100%;
    padding-block: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    align-items: flex-start;
    gap: 2.25rem;
    grid-template-columns: 6rem 1fr;
    padding-block: 2rem;
    padding-inline: 2rem 0;
  }
`;
