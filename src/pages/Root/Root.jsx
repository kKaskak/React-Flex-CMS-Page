import React from 'react';
import { Outlet } from 'react-router';
import { Navbar } from '../../components';
import { useStateContext } from '../../context/StateContext';
import Cart from '../../components/cart/Cart';

const Root = () => {
	const { showCart } = useStateContext();
	return (
		<React.Fragment>
			<Navbar />
			{
				showCart &&
					<Cart />
			}
			<Outlet />
		</React.Fragment>
	);
};

export default Root;
