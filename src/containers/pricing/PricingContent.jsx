import { PiMoney } from 'react-icons/pi';
const PricingContent = () => {
	return (
		<>
			<div className='gpt7__pricing section__padding'>
				<h1 className='gradient__text gpt7__pricing-heading'><PiMoney className='social' style={{marginRight: '1rem'}}/>Pricing</h1>
				<h3>Try for free (No credit card required). Cancel anytime.</h3>
			</div>
			<div className='footer__privacy' style={{paddingTop: '3rem'}}>
				<p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
			</div>
		</>
	);
};

export default PricingContent;
