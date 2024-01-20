import { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineRight } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './cart.css';
import { overlay } from './Item/animations/animations';
import classNames from 'classnames';
// import { toast } from 'react-hot-toast';
// import getStripe from '../lib/getStripe';

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

	// const handleCheckout = async () => {
	// 	// const stripe = await getStripe();

	// 	const response = await fetch('/api/stripe', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(cartItems),
	// 	});

	// 	if (response.statusCode === 500) return;

	// 	const data = await response.json();

	// 	toast.loading('Redirecting...');

	// 	// stripe.redirectToCheckout({ sessionId: data.id });
	// };

	const handleCheckout = 'fdds';

	const handleOverlayClick = (e) => {
		if (e.target === cartRef.current) setShowCart(false);
	};

	const animation1 = {
		hidden:  {
			x: '80%',
		},
		visible: {
			x: '0%',
			transition: {
				duration: 0.3,
				ease: [0, 0.55, 0.45, 1]
			},
		},
	};

	return (
		<motion.div
			className='overlay'
			ref={cartRef}
			animate={overlay.visible}
			initial={overlay.hidden}
			exit={overlay.hidden}
			onClick={handleOverlayClick}
		>
			<motion.div
				className={classNames('cart-container', 'gradient__bg')}
				layout animate={animation1.visible} exit={animation1.hidden}
				initial={animation1.hidden}
			>
				<button
					type='button'
					className='cart-heading'
					onClick={() => setShowCart(false)}
				>
					<AiOutlineRight className='back-arrow' size={25} />
				</button>
				<div className='heading gradient__text'>Your Cart</div>
				<div className='subheading'>({totalQuantities} items)</div>
				{cartItems.length < 1 &&
					<div className='empty-cart'>
						<AiOutlineShopping size={100} className='bag-icon' />
						<h3 className='subheading'>Your shopping bag is empty</h3>
						<Link to='/pricing'><button type='button' onClick={() => setShowCart(false)} className='btn-redirect cart-button'>Continue Shopping</button></Link>
					</div>
				}
				<div className='product-container'>
					{cartItems.length >= 1 &&
						cartItems.map((item) => (
							<div className='product' key={item._id}>
								<img src={urlFor(item?.image[0])} className='cart-product-image'/>
								<div className='item-desc'>
									<div className='flex top'>
										<h5>{item.name}</h5>
										<h4>${item.price}</h4>
									</div>
									<div className='flex bottom'>
										<div>
											<p className='quantity-desc'>
												<span
													className='minus'
													onClick={() =>
														toggleCartItemQuantity(item._id, 'dec')
													}
												>
													<AiOutlineMinus />
												</span>
												<span className='num' onClick=''>
													{item.quantity}
												</span>
												<span
													className='plus'
													onClick={() =>
														toggleCartItemQuantity(item._id, 'inc')
													}
												>
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button
											type='button'
											className='remove-item'
											onClick={() => onRemove(item)}
										>
											<TiDeleteOutline />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className='cart-bottom'>
						<div className='total'>
							<h3>Subtotal:</h3>
							<h3>${totalPrice.toFixed(2)}</h3>
						</div>
						<button type='button' className='btn-redirect' onClick={handleCheckout}>Pay with Stripe</button>
					</div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default Cart;
