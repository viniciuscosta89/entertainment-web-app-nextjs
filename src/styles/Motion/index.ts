import { Variants } from 'framer-motion';

const listVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: 'spring',
      },
    },
  },
};

const slideFromLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        type: 'spring',
      },
    },
  },
};

const slideFromRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        type: 'spring',
      },
    },
  },
};

export { listVariants, itemVariants, slideFromLeft, slideFromRight };
