import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: grid;
  gap: 3.65rem;
  justify-items: center;
  padding-block: 3rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 5.5rem 11.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 5rem 11.5rem;
  }
`;

export const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue[800]};
  border-radius: 0.625rem;
  display: grid;
  padding: 1.5rem 1.5rem 2rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tabletAndDesktop} {
    max-width: 25rem;
    padding: 2rem;
  }
`;

export const LoginTitle = styled.h1`
  font-size: var(--fs-700);
  font-weight: var(--fw-light);
  line-height: normal;
  letter-spacing: -0.03125rem;
  margin-block-end: 2.5rem;
`;

export const LoginButtons = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red[400]};
  border: none;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-size: var(--fs-400);
  font-weight: var(--fw-light);
  padding: 1rem 3rem;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBlue[400]};
  }
`;
