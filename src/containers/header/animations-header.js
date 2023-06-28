let x = -400;
let delayHeaderImg = 1.7;
window.innerWidth >= 800 ? (delayHeaderImg = 1.7) : (delayHeaderImg = 1.5);
window.innerWidth >= 800 ? (x = -400) : (x = -200);
// -> First container
const container = {
  hidden: { opacity: 0, x: 400 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.9,
      delay: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// -> 2nd container
const container1 = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1.2,
      delay: 1.2,
    },
  },
};
const item1 = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const headerImg = {
  opacity: [0, 1],
  scale: [0, 1.3, 1],
  transition: { duration: 1, delay: delayHeaderImg, type: "tween" },
};
const headerH1 = {
  opacity: [0, 1],
  x: [x, 0],
  transition: { type: "spring", duration: 0.5, delay: 0.2, bounce: 0.5 },
};

const headerP = { opacity: [0, 1], transition: { duration: 0.8, delay: 0.7 } };

export { container, item, container1, item1, headerImg, headerH1, headerP };
