import React from 'react';
import { PiMoney } from 'react-icons/pi';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './pricing.css';

const Pricing = () => {
	const [value, setValue] = React.useState(0);
	const [visible, setVisible] = React.useState(false);

	const handleChange = (event) => {
		setValue(event.target.value);
		setVisible(true);
	};
	const appearAnimation = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } }
	};
	const hoverAnimation = {
		scale: 1.1,
		transition: {
			duration: 0.3
		}
	};

	const marks = [
		{
			value: 340,
			label: '12.99$'
		},
		{
			value: 550,
			label: '19.99$'
		},
		{
			value: 760,
			label: '29.99$'
		},
		{
			value: 1000,
			label: '39.99$'
		},
	];

	const valueLabelFormat = (value) => {
		return marks.map((mark) => mark.value === value) ? `${value}` : '';
	};

	const valueText = (value) => {
		return value;
	};
	return (
		<div className='pricing-wrapper'>
			<div className='content section__padding'>
				<h1 className='gradient__text heading'><PiMoney className='social' style={{ marginRight: '1rem' }}/>Pricing</h1>
				<h3 className='subheading'>Select your amount of credits.</h3>
				<div className='content-wrapper'>
					<div className='slider'>
						<Box sx={{ width: 350, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<Slider
								aria-label='Restricted values'
								defaultValue={340}
								valueLabelFormat={valueLabelFormat}
								getAriaValueText={valueText}
								step={null}
								min={340}
								max={1000}
								marks={marks}
								onChange={handleChange}
								valueLabelDisplay='auto'
							/>
						</Box>
					</div>
					<div className='btn-container'>
						{
							visible && value > 0 &&
								<motion.div animate={appearAnimation.visible} exit={appearAnimation.hidden} initial={appearAnimation.hidden} whileHover={hoverAnimation}>
									<Link className='btn-redirect'>To checkout</Link>
								</motion.div>
						}
					</div>
				</div>
			</div>
			<div className='footer__privacy'>
				<p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
			</div>
		</div>
	);
};

export default Pricing;
