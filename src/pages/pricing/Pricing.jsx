import React from 'react';
import { PiMoney } from 'react-icons/pi';
import Item from '../../components/cart/Item/Item';
import { client } from '../../client';
import './pricing.css';

const Pricing = () => {
	const [activeProduct, setActiveProduct] = React.useState(null);
	const [products, setProducts] = React.useState([]);

	const handleClick = (product) => {
		setActiveProduct(product);
	};

	React.useEffect(() => {
		const query = '*[_type == "product"]';
		client.fetch(query).then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<div className='pricing-wrapper section__padding'>
			<h1 className='gradient__text heading'><PiMoney className='social' style={{ marginRight: '1rem' }}/>Order now</h1>
			<h3 className='subheading'>Click, select product & amount and add to card.</h3>
			<div className='items-wrapper'>
				{
					products.map((product) => {
						return (
							<Item
								active={activeProduct === product._id}
								product={product}
								key={product._id}
								onClick={() => handleClick(product)}
							/>
						);
					})
				}
			</div>
			<div className='footer__privacy'>
				<p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
			</div>
		</div>
	);
};

export default Pricing;
