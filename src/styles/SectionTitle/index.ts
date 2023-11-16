'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionTitle = styled(motion.h2)<{ $marginBottom?: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  font-size: var(--fs-500);
  font-weight: var(--fw-light);
  letter-spacing: -0.0195rem;
  line-height: normal;
  margin-block-end: ${props => props.$marginBottom && '1.5rem'};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: var(--fs-700);
    letter-spacing: -0.03125rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: var(--fs-700);
    letter-spacing: -0.03125rem;
    margin-block-end: ${props => props.$marginBottom && '2rem'};
  }
`;
