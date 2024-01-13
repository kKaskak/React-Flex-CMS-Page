import { useState } from 'react';
import { client } from '../../client';
import { AiFillPhone, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Contact.css';

const ContactContent = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { username, message, MMR, email } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === '' || message === '' || MMR === '' || email === '') {
			setError('Please fill in all the fields');
			setTimeout(() => {
				setError(null);
			}, 3000);
			return;
		}
		setLoading(true);
		setError(null);

		const contact = {
			_type: 'contact',
			name: formData.username,
			email: formData.email || '',
			message: formData.message,
			MMR: formData.MMR
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		}).catch((err) => {
			// eslint-disable-next-line no-console
			console.log(err);
		});
	};

	return (
		<div className='ct__contact'>
			<div className='gpt7__contact section__padding' style={{ paddingBottom: '1rem' }}>
				<h1 className='gradient__text gpt7__contact-heading'><AiFillPhone className='social' style={{marginRight: '1rem'}}/> Contact us now</h1>
			</div>
			<div className='ct__contact-contact'>
				<div className='ct__contact-card'>
					<MdEmail className='mdemail' size={25} />
					<a href='mailto:gpt7connect@gmail.com'>gpt7connect@gmail.com</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className='ct__contact-form'>
					<div>
						<input required type='text' placeholder='Your Name' name='username' value={username} onChange={handleChangeInput} />
					</div>
					<div>
						<input required className='email-data' type='email' placeholder={'Your Email'} name='email' value={email || '' } onChange={handleChangeInput} />
					</div>
					<div>
						<input required type='text' placeholder={'Describe your brand (type of content)'} name='MMR' value={MMR} onChange={handleChangeInput} />
					</div>
					<div>
						<textarea
							required
							placeholder={'Your Message'}
							value={message}
							name='message'
							onChange={handleChangeInput}
						/>
					</div>
					{error && <div className='error-message'>{error}!</div>}
					<button type='submit' onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
				</div>
			) : (
				<div className='ct__contact-response'>
					<h3 id='message' className='ct__contact-h3'>
						Thank you for getting in touch!<br></br>You will get a message from us soon.
					</h3>
				</div>
			)}
			<hr className='hr-contact'></hr>
			<div className='ct__contact-waves'>
				<a className='ct__contact-waves__twitter-in' href='https://www.instagram.com/gpt7_connect' rel='noreferrer' target='_blank'><AiFillInstagram className='social' size={60}/></a>
				<a className='ct__contact-waves__twitter-in' href='https://www.twitter.com/gpt7_connect' rel='noreferrer' target='_blank'><AiFillTwitterSquare className='social' size={60}/></a>
			</div>
			<div className='ct__contact-waves__rights'>
				<h6 style={{color: '#fff'}}>© 2023 GPT7 Connect • All rights reserved.</h6>
			</div>
		</div>
	);
};

export default ContactContent;

ContactContent.propTypes = {
	inputValue: PropTypes.string,
};
