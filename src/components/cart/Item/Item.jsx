import { Box, Slider } from '@mui/material';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css';
import classNames from 'classnames';
import { useBinaryState } from '../..//../common';
import { overlay } from './animations/animations';

const Item = ({ itemMarks, valueLabelFormat, valueText, handleChange, itemTitle, defaultSliderValue, minSliderValue, maxSliderValue, sliderWidth, onClick }) => {

	const [isItemOpen, openItem, closeItem] = useBinaryState(false);

	return (
		<div className='wrapper' onClick={onClick}>
			<motion.div className={classNames('item-container', isItemOpen ? 'open' : '', 'gradient__bg')} layout onClick={openItem}>
				<img className='item-image' src='https://i.postimg.cc/y6P3vCKY/currenvy.png' alt='item' />
				<div className='subtitle'>{itemTitle}</div>
				{
					isItemOpen &&
					<Box sx={{ width: sliderWidth, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<Slider
							aria-label='Restricted values'
							defaultValue={defaultSliderValue}
							valueLabelFormat={valueLabelFormat}
							getAriaValueText={valueText}
							step={null}
							min={minSliderValue}
							max={maxSliderValue}
							marks={itemMarks}
							onChange={handleChange}
							valueLabelDisplay='on'
						/>
					</Box>
				}
			</motion.div>
			<AnimatePresence>
				{
					isItemOpen &&
					<motion.div className='overlay' animate={overlay.visible} initial={overlay.hidden} exit={overlay.hidden} onClick={closeItem} />
				}
			</AnimatePresence>
		</div>

	);
};

export default Item;

Item.propTypes = {
	marks: PropTypes.array,
	valueLabelFormat: PropTypes.func,
	valueText: PropTypes.func,
	handleChange: PropTypes.func,
	itemTitle: PropTypes.string.isRequired,
	defaultSliderValue: PropTypes.number,
	minSliderValue: PropTypes.number,
	maxSliderValue: PropTypes.number,
	itemMarks: PropTypes.array,
	sliderWidth: PropTypes.number,
	onClick: PropTypes.func,
};
