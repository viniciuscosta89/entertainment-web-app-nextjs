'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SearchResultsContainer = styled.section`
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

export const SearchResultsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-inline: 1rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem 1.8rem;
    padding-inline: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(16.5625rem, 1fr));
    gap: 2rem 2.5rem;
    padding-inline: 0 2.25rem;
  }
`;
