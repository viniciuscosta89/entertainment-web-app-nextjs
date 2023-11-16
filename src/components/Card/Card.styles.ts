import { RoundedStar } from '@smastrom/react-rating';
import styled, { DefaultTheme } from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardStyleProps } from './Card.types';

export const Card = styled(motion.article)<{ $contentOver: boolean; $minHeight?: string }>`
  border-radius: ${props => (props.$contentOver ? '0.5rem' : '0.5rem 0.5rem 0 0')};
  position: relative;
  overflow: hidden;

  &::after {
    content: ${props => props.$contentOver && '""'};
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    min-height: ${props => props.$minHeight};
  }
`;

export const CardContent = styled.div<{ $contentOver: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: ${props => (props.$contentOver ? 'absolute' : 'relative')};
  padding: ${props => (props.$contentOver ? '1rem' : '0.5rem 0 0')};
  bottom: 0;
  left: 0;
  z-index: 5;
`;

export const CardPicture = styled(motion.picture)`
  overflow: hidden;
  position: relative;
`;

export const CardImg = styled(Image || motion.img)<{
  $aspectRatioMobile?: string;
  $aspectRatioDesktop?: string;
  $minHeight?: string;
  $minHeightTablet?: string;
  $minHeightDesktop?: string;
}>`
  aspect-ratio: ${props => props.$aspectRatioMobile};
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: center;
  min-height: ${props => props.$minHeight || '14.625rem'};
  height: auto;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tabletAndDesktop} {
    aspect-ratio: ${props => props.$aspectRatioDesktop};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    min-height: ${props => props.$minHeightTablet || '20.5rem'};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    min-height: ${props => props.$minHeightDesktop || '25rem'};
  }
`;

export const CardInfo = styled.div<{ $contentOver: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${props => (props.$contentOver ? 'var(--fs-300)' : 'var(--fs-200)')};
  font-weight: var(--fw-light);
  opacity: 0.75;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  line-height: normal;

  @media ${({ theme }) => theme.breakpoints.tabletAndDesktop} {
    font-size: ${props => (props.$contentOver ? 'var(--fs-400)' : 'var(--fs-350)')};
  }
`;

export const CardType = styled.div`
  display: flex;
  gap: 0.35em;
  align-items: center;
`;

export const CardTitle = styled.h3<CardStyleProps>`
  color: ${({ theme }) => theme.colors.white};
  display: -webkit-box;
  font-size: ${props => (props.$contentOver ? 'var(--fs-400)' : 'var(--fs-375)')};
  font-weight: var(--fw-medium);
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media ${({ theme }) => theme.breakpoints.tabletAndDesktop} {
    font-size: ${props => (props.$contentOver ? 'var(--fs-600)' : 'var(--fs-500)')};
  }
`;

export const CardBookmark = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBlue[850]};
  border: none;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  top: 0.5rem;
  right: 0.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 15;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue[900]};
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    top: 1rem;
    right: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: 1rem;
    right: 1.5rem;
  }
`;

export const CardHover = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  #{Card}:hover > & {
    opacity: 1;
  }
`;

export const CardPlayButton = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 1.78125rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: var(--fs-500);
  font-weight: var(--fw-medium);
  padding: 0.5rem;
  min-width: 7.3125rem;
  min-height: 3rem;
`;

export const CardPlayIcon = styled.span`
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.875rem;
  height: 1.875rem;
`;

export const cardRatingStyles = (theme: DefaultTheme) => ({
  itemShapes: RoundedStar,
  activeFillColor: theme.colors.red[400],
  inactiveFillColor: theme.colors.white,
});

export const CardRatingWrapper = styled.div`
  max-width: 1.75rem;

  @media ${({ theme }) => theme.breakpoints.tabletAndDesktop} {
    max-width: 5rem;
  }
`;
