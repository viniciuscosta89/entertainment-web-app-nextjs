import styled from 'styled-components';

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-inline: 1rem;
  padding-block-end: 3.8rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem 1.8rem;
    padding-inline: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(auto-fill, minmax(16.5625rem, 1fr));
    gap: 2rem 2.5rem;
    padding-inline: 0 2.25rem;
  }
`;
