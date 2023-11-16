import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const SidebarStyle = styled(motion.aside)`
  background: ${({ theme }) => theme.colors.darkBlue['800']};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
    display: flex;
    flex-direction: column;
    gap: 4.7rem;
    min-height: calc(100vh - 4.5rem);
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

export const SidebarSession = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-block-start: auto;
  align-items: center;
  justify-self: flex-end;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: column;
    justify-self: center;
  }
`;

export const SidebarButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red['400']};
  border: none;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-200);
  padding: 0.25rem 0.35rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue[900]};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: var(--fs-200);
    padding: 0.5rem;
  }
`;

export const SidebarName = styled.p`
  display: none;
  font-size: var(--fs-200);
  line-height: normal;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
  }
`;

export const SidebarUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
