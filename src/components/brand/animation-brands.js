const itemLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.7,
    },
  },
};
const itemRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
};
const itemCenter = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.7,
    },
  },
};
const container = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: 0.7,
  },
};

export { itemLeft, itemRight, itemCenter, container };
