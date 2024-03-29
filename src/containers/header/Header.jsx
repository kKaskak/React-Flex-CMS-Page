import './header.css';
import ai from '../../assets/image.png';
import { motion } from 'framer-motion';
import { container, container1, item, headerImg, headerH1, headerP } from './animations-header';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<div className='gpt3__header section__margin' id='home'>
			<div className='gpt3__header-content'>
				<motion.h1 animate={headerH1} className='gradient__text' style={{ opacity: 0 }}>
          We connect people
				</motion.h1>
				<motion.p animate={headerP} style={{ opacity: 0 }}>
          Our online agency <strong>GPT-7 Connect</strong> can help you with marketing <b>your brand.</b>
				</motion.p>

				<motion.div variants={container} className='gpt3__header-content__input' initial='hidden' animate='show'>
					<input
						className='email-header'
						name='email'
						type='email'
						placeholder='Your Email Address'
						required
					/>
					<Link to='/contact'>
						<motion.button variants={item} type='button'>Get Started</motion.button>
					</Link>
				</motion.div>
				<motion.div initial='hidden' animate='show' variants={container1} className='gpt3__header-content__people'>
					{/* <motion.img variants={item1} src={ people } alt="people" />
         			 <motion.p variants={item1}>11 startups requested our help in last 24 hours</motion.p> */}
				</motion.div>
			</div>
			<div className='gpt3__header-image'>
				<motion.img style={{ opacity: 0 }} animate={headerImg} src={ai} alt='GPT7-AI generated photo of a woman.' />
			</div>
		</div>
	);
};

export default Header;

