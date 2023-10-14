import styled from 'styled-components';
import Link from 'next/link';

export const SidebarStyle = styled.aside`
  background: ${({ theme }) => theme.colors.darkBlue['800']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    border-radius: 0.625rem;
    margin-inline: 1.5rem;
    top: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    border-radius: 1.25rem;
    flex-direction: column;
    gap: 4.7rem;
    height: calc(100vh - 4.5rem);
    justify-content: flex-start;
    padding: 2.25rem 2rem;
    top: 2.25rem;
    left: 2rem;
  }
`;

export const SidebarContent = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;
    gap: 2.5rem;
    width: 1.25rem;
  }
`;

export const SidebarLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => (props.$active ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.darkBlue[400])};
  display: flex;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  text-decoration: none;
  transform: ${props => (props.$active ? 'scale(1.25)' : 'scale(1)')};
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.red[400]};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
