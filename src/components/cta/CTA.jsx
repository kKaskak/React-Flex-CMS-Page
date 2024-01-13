import './cta.css';
import { motion } from 'framer-motion';
import { cta } from './animation.cta';
import { Link } from 'react-router-dom';

const CTA = () => {
	return (
		<motion.div initial={'hidden'} whileInView={'show'} variants={cta} viewport={{ once: true }} className='gpt3__cta section__margin'>
			<div className='gpt3__cta-content'>
				<Link to={'/contact'}><p>Request our help to Get Started</p></Link>
				<h4>Try our services now and get amazed by the results.</h4>
			</div>
			<div className='gpt3__cta-button'>
				<Link to={'/contact'}><motion.button whileHover={{ scale: 1.05, transition: 0.5 }}>Try now</motion.button></Link>
			</div>
		</motion.div>
	);
};

export default CTA;

