export const fadeUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    type: "spring",
  },
};

export const fadeIn = {
  initial: {
    x: -700,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 1,
    type: "spring",
  },
};

export const buttonUp = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 0, 0.3, 0.8, 1] },
  transition: {
    delay: 0.8,
    type: "spring",
    duration: 2,
  },
};
export const fadeInHr = {
  initial: { opacity: 0, x: -5000 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: 2,
    type: "tween",
  },
};
