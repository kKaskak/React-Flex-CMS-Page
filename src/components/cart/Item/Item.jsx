import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css';
import classNames from 'classnames';
import { useBinaryState } from '../../../common';
import { itemHover, overlay } from './animations/animations';
import { useStateContext } from '../../../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { urlFor } from '../../../client';

const Item = ({ product, onClick }) => {

	const [isItemOpen, openItem, closeItem] = useBinaryState(false);

	// eslint-disable-next-line no-unused-vars
	const { decQty, incQty, qty, onAdd } = useStateContext();

	return (
		<div className='wrapper' onClick={onClick}>
			<motion.div className={classNames('item-container', isItemOpen ? 'open' : '', 'gradient__bg')} layout whileHover={!isItemOpen ? itemHover : ''} onClick={openItem}>
				{
					product.image &&
						<img className='item-image' src={urlFor(product.image[0]).url()} alt='item' />
				}
				<div className='subtitle'>{product.title}</div>
				{
					isItemOpen &&
					<div className='item-details'>
						<div className='title'>{product.title}</div>
						<div className='price'>${product.price}</div>
						<div className='details'>{product.details}</div>
						<div className='categories'>
							{
								product.categories.map((category) => {
									return (
										<div className='category' key={category._id}>{category.title}</div>
									);
								})
							}
						</div>
						<div className='quantity'>
							<h3>Quantity:</h3>
							<p className='quantity-desc'>
								<span className='minus' onClick={decQty}>
									<AiOutlineMinus />
								</span>
								<span className='num'>{qty}</span>
								<span className='plus' onClick={incQty}>
									<AiOutlinePlus />
								</span>
							</p>
						</div>
						<button className='btn' onClick={() => onAdd(product, qty)}>Add to cart</button>
					</div>
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
	onClick: PropTypes.func.isRequired,
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		image: PropTypes.array.isRequired,
		price: PropTypes.number.isRequired,
		categories: PropTypes.array.isRequired,
		details: PropTypes.string.isRequired,
	}).isRequired,
};

