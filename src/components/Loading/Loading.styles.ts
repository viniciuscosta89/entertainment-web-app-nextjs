import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingIcon = styled(motion.div)`
  animation: rotation 1s linear infinite;
  background: linear-gradient(0deg, transparent 33%, ${({ theme }) => theme.colors.red[400]} 100%);
  border-radius: 50%;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  position: relative;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.darkBlue[900]};
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
`;
