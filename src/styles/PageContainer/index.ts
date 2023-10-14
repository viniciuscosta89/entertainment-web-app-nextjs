import styled from 'styled-components';

export const PageContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 2rem;
  }
`;
