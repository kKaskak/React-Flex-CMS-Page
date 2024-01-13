import './possibility.css';
import vr from '../../assets/vr.png';
import { motion } from 'framer-motion';
import { img, h4, h1, h4_2, p, hover } from './animation-possibility';
import { Link } from 'react-router-dom';
const Possibility = () => {
	return (
		<div className='gpt3__possibility section__margin' id='possibility'>
			<div className='gpt3__possibility-image'>
				<motion.img initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={img} src={vr} alt="A woman wearing a VR headset, using GPT7-AI." />
			</div>
			<motion.div className='gpt3__possibility-container'>
				<Link to={'/contact'}><motion.h4 initial={'hidden'} whileInView={'show'} whileHover={hover} viewport={{ once: true }} variants={h4}>Request a quote to Get Started</motion.h4></Link>
				<motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={h1} className="gradient__text">Discover Limitless Potential</motion.h1>
				<motion.p initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={p}>Unleash your creativity and push the boundaries of your brand. Join us today.</motion.p>
				<Link to={'/contact'}><motion.h4 initial={'hidden'} whileInView={'show'} whileHover={hover} viewport={{ once: true }} variants={h4_2}>Get ahead of the game - Request Access Today!</motion.h4></Link>
			</motion.div>
		</div>
	);
};

export default Possibility;
