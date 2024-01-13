let x = -400;
window.innerWidth >= 1000 ? (x = -400) : (x = -150);
const h1 = {
	hidden: {
		opacity: 0,
		x: x,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 0.5,
		},
	},
};

export { h1 };
