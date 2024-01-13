let delay = 0.6;
let xValue = 100;
let delayContainer = 1;
let durationP = 0.3;
let staggerChildren = 0.5;
window.innerWidth >= 1000 ? (delay = 0.4) : (delay = 0);
window.innerWidth >= 1000 ? (xValue = 100) : (xValue = 0);
window.innerWidth >= 1000 ? (delayContainer = 1) : (delayContainer = 0.1);
window.innerWidth >= 1000 ? (durationP = 0.3) : (durationP = 0.6);
window.innerWidth >= 1000 ? (staggerChildren = 0.5) : (staggerChildren = 0.7);

const item = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: delayContainer,
			delayChildren: delayContainer,
			staggerChildren: staggerChildren,
		},
	},
};

const itemFirst = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			delay: 0.1,
			type: 'tween',
			bounce: 0.2,
		},
	},
};

const h1Anim = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.4,
			duration: 0.5,
		},
	},
};

const pAnim = {
	hidden: {
		opacity: 0,
		x: xValue,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delay: delay,
			duration: durationP,
		},
	},
};
const hover = {
	scale: 1.05,
	transition: 0.5,
};
export { h1Anim, item, itemFirst, container, pAnim, hover };
