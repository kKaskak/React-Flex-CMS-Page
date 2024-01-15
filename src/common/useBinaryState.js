import React from 'react';

const useBinaryState = (initialValue) => {
	const [value, setValue] = React.useState(!!initialValue);
	const on = React.useCallback(() => {
		setValue(true);
	}, []);
	const off = React.useCallback(() => {
		setValue(false);
	}, []);
	const toggle = React.useCallback(() => {
		setValue(!value);
	}, [value]);
	return [value, on, off, toggle];
};

export default useBinaryState;
