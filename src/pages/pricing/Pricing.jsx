import React from 'react';
import { PiMoney } from 'react-icons/pi';
import Item from '../../components/cart/Item/Item';
import './pricing.css';
import { AnimatePresence } from 'framer-motion';

const Pricing = () => {
	const [activeProduct, setActiveProduct] = React.useState(null);

	const handleClick = (product) => {
		setActiveProduct(product);
	};

	const createValueLabelFormat = (marks) => {
		return function returnValue(value) {
			const mark = marks.find((mark) => mark.value === value);
			return mark ? mark.value : '';
		};
	};

	const createSliderProps = (min, max, defaultValue, sliderWidth, marks) => {
		return {
			min,
			max,
			default: defaultValue,
			marks,
			width: sliderWidth,
			valueLabelFormat: createValueLabelFormat(marks),
			valueText: function (value) {
				return `${value}`;
			}
		};
	};

	const products = [
		{
			id: 1,
			itemTitle: 'Credits',
			sliderProps: createSliderProps(
				500, 6500, 500, 400, [
					{ value: 500, label: '4.99$' },
					{ value: 1100, label: '9.99$' },
					{ value: 3000, label: '24.99$' },
					{ value: 6500, label: '49.99$' }
				]
			),
		},
		{
			id: 2,
			itemTitle: 'Keys',
			sliderProps: createSliderProps(
				1, 10, 1, 300, [
					{ value: 1, label: '4.99$' },
					{ value: 3, label: '9.99$' },
					{ value: 7, label: '24.99$' },
					{ value: 10, label: '49.99$' }
				]
			),
		},
		{
			id: 3,
			itemTitle: 'Variables',
			sliderProps: createSliderProps(
				1, 10, 1, 300, [
					{ value: 1, label: '4.99$' },
					{ value: 3, label: '9.99$' },
					{ value: 7, label: '24.99$' },
					{ value: 10, label: '49.99$' }
				]
			),
		}
	];

	return (
		<div className='pricing-wrapper section__padding'>
			<h1 className='gradient__text heading'><PiMoney className='social' style={{ marginRight: '1rem' }}/>Order now</h1>
			<h3 className='subheading'>Click, select product & amount and add to card.</h3>
			<div className='items-wrapper'>
				<AnimatePresence>
					{
						products.map((product) => {
							return (
								<Item
									active={activeProduct === product.id}
									itemMarks={product.sliderProps.marks}
									valueLabelFormat={product.sliderProps.valueLabelFormat}
									valueText={product.sliderProps.valueText}
									minSliderValue={product.sliderProps.min}
									maxSliderValue={product.sliderProps.max}
									defaultSliderValue={product.sliderProps.default}
									itemTitle={product.itemTitle}
									key={product.id}
									sliderWidth={product.sliderProps.width}
									onClick={() => handleClick(product)}
								/>
							);
						})
					}
				</AnimatePresence>
			</div>
			<div className='footer__privacy'>
				<p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
			</div>
		</div>
	);
};

export default Pricing;
