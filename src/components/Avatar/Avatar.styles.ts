'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const AvatarStyle = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  overflow: hidden;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-block-start: auto;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const AvatarImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  max-width: 100%;
`;
