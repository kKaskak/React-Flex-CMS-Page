import { FaShoppingCart } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

const Menu = ({ onMenuItemClick }) => {
	const { setShowCart } = useStateContext();

	const handleCartClick = () => {
		setShowCart(true);
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
				<Link key={link.id} to={link.to} onClick={onMenuItemClick}>
					<p>{link.text}</p>
				</Link>
			))}
			<FaShoppingCart fill='#fff' className='cart' style={{ cursor: 'pointer' }} onClick={handleCartClick} />
		</>
	);
};

export default Menu;

Menu.propTypes = {
	onMenuItemClick: PropTypes.func.isRequired,
};
