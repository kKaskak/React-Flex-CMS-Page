let delay = 0.8;
window.innerWidth >= 1000 ? (delay = 0.8) : (delay = 0.3);
const img = {
  hidden: {
    rotate: 100,
    opacity: 0,
    scale: 0.5,
  },
  show: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};
const h4 = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};
const h1 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
};
const h4_2 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};
const p = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: delay + 0.5,
    },
  },
};
const hover = {
  scale: 1.05,
  transition: 0.5,
};

export { img, h4, h4_2, h1, p, hover };
