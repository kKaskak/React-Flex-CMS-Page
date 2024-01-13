let delay = 0;
window.innerWidth <= 1000 ? (delay = 0.4) : (delay = 0);
const cta = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: 'spring',
			bounce: 0.3,
			delay: delay,
		},
	},
};

export { cta };
