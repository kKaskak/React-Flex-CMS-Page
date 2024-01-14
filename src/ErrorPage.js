import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import { hover } from './containers/features/animations-features';

const ErrorPage = () => {
	return (
		<div className='error-wrapper'>
			<h4 className='subheading gradient__text'>Oops! Seems like 404 Not Found error occured...</h4>
			<motion.div whileHover={hover}>
				<Link className='btn-redirect' to={'/'}>Back home</Link>
			</motion.div>
		</div>
	);
};

export default ErrorPage;
