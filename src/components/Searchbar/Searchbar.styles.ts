import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchbarStyle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    gap: 1.5rem;
    padding-inline: 0 2.25rem;
  }
`;

export const SearchbarInputContainer = styled(motion.div)`
  position: relative;
  width: 100%;
`;

export const SearchbarInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: none;
  caret-color: ${({ theme }) => theme.colors.red[400]};
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: var(--fw-light);
  line-height: 1;
  padding: 0;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:not(:placeholder-shown) {
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
    outline-color: ${({ theme }) => theme.colors.red[400]};

    &::after {
      transform: scaleX(1);
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: var(--fs-600);
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: var(--fs-600);
  }
`;

export const SearchbarInputLine = styled.span`
  display: block;
  position: absolute;
  bottom: -1rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.darkBlue[400]};
  height: 0.0625rem;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  transition: all 0.3s ease-in-out;

  #{SearchbarInput}:focus + & {
    background-color: ${({ theme }) => theme.colors.white};
    transform: scaleX(1);
  }

  #{SearchbarInput}:not(:placeholder-shown) + & {
    transform: scaleX(1);
  }
`;
