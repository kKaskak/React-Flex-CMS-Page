import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { AnimatePresence } from 'framer-motion';
import { Cart } from '../../components';

const Root = () => {
	const { showCart } = useStateContext();
	return (
		<React.Fragment>
			<Navbar />
			<AnimatePresence>
				{
					showCart &&
						<Cart />
				}
			</AnimatePresence>
			<Outlet />
		</React.Fragment>
	);
};

export default Root;
