import { FaShoppingCart } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

const Menu = ({ closeMenu }) => {
	const { setShowCart } = useStateContext();

	const handleCartClick = () => {
		setShowCart(true);
		closeMenu();
	};

	const handleLinkClick = () => {
		setShowCart(false);
		closeMenu();
	};

	const links = [
		{ to: '/', text: 'Home', id: 1 },
		{ to: '/pricing', text: 'Pricing', id: 2 },
		{ to: '/contact', text: 'Contact', id: 3 },
		{ to: '/privacy', text: 'Privacy policy', id: 4 }
	];

	return (
		<>
			{links.map((link) => (
				<Link key={link.id} to={link.to} onClick={handleLinkClick}>
					<p>{link.text}</p>
				</Link>
			))}
			<FaShoppingCart className='cart' size={25} style={{ cursor: 'pointer' }} onClick={handleCartClick} />
		</>
	);
};

export default Menu;

Menu.propTypes = {
	closeMenu: PropTypes.func
};

