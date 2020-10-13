export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 1,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { type: 'tween', ease: 'circOut', duration: 0.75 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'tween', ease: 'circOut', duration: 1, delay: 0.25 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'circOut',
      duration: 1,
      delay: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
};
