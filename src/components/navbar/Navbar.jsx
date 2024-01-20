import { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const setScaleUp = () => {
		setToggleMenu(true);
	};
	const setScaleDown = (e) => {
		e.preventDefault();
		setToggleMenu(false);
	};

	return (
		<div className='navbar'>
			<div className='navbar-content'>
				<div className='logo-container'>
					<Link to={'/'}><img src={logo} alt="alt" /></Link>
				</div>
				<div className='links-container'>
					<Menu />
				</div>
			</div>
			<div className='sign-in-container'>
				{/* <p>Sign in</p>
				<button type='button'>Sign up</button> */}
			</div>
			<div className='mobile-menu'>
				{toggleMenu
					? <RiCloseLine color='#fff' size={27} onClick={setScaleDown} />
					: <RiMenu3Line color='#fff' size={27} onClick={setScaleUp} />
				}
				{toggleMenu && (
					<div className='mobile-menu-container scale-up-center'>
						<div className='mobile-content'>
							<Menu onMenuItemClick={setScaleDown} />
							<div className='mobile-sign-in-content'>
								{/* <p>Sign in</p>
								<button type='button'>Sign up</button> */}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
