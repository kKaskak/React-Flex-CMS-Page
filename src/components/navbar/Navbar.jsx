import { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
const Menu = () => (
	<>
		<Link to={'/'}> <p>Home</p></Link>
		<p><a href='#wgpt3'>What is GPT-7 Connect?</a></p>
		{/* <p><a href='#possibility'>Possibilities</a></p> */}
		{/* <p><a href='#features'>Case Studies</a></p> */}
		{/* <Link to={'/pricing'}> <p>Pricing</p></Link> */}
		<Link to={'/contact'}> <p>Contact</p></Link>
		<Link to={'/privacy'}> <p>Privacy policy</p></Link>
	</>
);
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	// const navbarContainer = document.querySelector('.gpt3__navbar-menu_container');
	const setScaleUp = () => {
		setToggleMenu(true);
	};
	const setScaleDown = () => {
		setToggleMenu(false);
	};

	return (
		<div className='gpt3__navbar'>
			<div className='gpt3__navbar-links'>
				<div className='gpt3__navbar-links_logo'>
					<Link to={'/'}><img src={logo} alt="alt" /></Link>
				</div>
				<div className='gpt3__navbar-links_container'>
					<Menu />
				</div>
			</div>
			<div className='gpt3__navbar-sign'>
				{/* <p>Sign in</p>
        <button type='button'>Sign up</button> */}
			</div>
			<div className='gpt3__navbar-menu'>
				{toggleMenu
					? <RiCloseLine color='#fff' size={27} onClick={() => setScaleDown()} />
					: <RiMenu3Line color='#fff' size={27} onClick={() => setScaleUp()} />
				}
				{toggleMenu && (
					<div className='gpt3__navbar-menu_container scale-up-center'>
						<div className='gpt3__navbar-links_container-links'>
							<Menu />
							<div className='gpt3__navbar-menu_container-links-sign'>
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
