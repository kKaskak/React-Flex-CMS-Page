export const overlay = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		backdropFilter: 'blur(2px)',
		transition: {
			duration: 0.3,
			ease: [0, 0.55, 0.45, 1]
		},
	}
};

export const itemHover = {
	scale: 1.05,
	transition: {
		duration: 0.3,
		ease: [0, 0.55, 0.45, 1]
	},
};
