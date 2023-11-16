import { Variants, AnimationProps } from 'framer-motion';

export interface MotionProps {
  animate?: string;
  exit?: AnimationProps;
  initial?: string;
  variants?: Variants;
  transition?: {
    delay?: number;
    type?: string;
    stiffness?: number;
  };
}
