let delay = 0.7;

window.innerWidth >= 1000 ? (delay = 0.7) : (delay = 0.3);
const featuresH1 = {
  hidden: {
    opacity: 0,
    y: -50,
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
const featuresP = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};
const featuresContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
};
const hover = {
  scale: 1.05,
  transition: 0.5,
};
export { featuresH1, featuresP, hover, featuresContainer };
