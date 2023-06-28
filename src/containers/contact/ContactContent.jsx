import React, { useState } from 'react'
import { client } from '../../client';
import "./Contact.css"
import { AiFillPhone, AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
const ContactContent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact', 
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <div className='ct__contact'>
    <div className='gpt7__contact section__padding'>
      <h1 className='gradient__text gpt7__contact-heading'><AiFillPhone style={{marginRight: '1rem', color: '#fff'}}/> Contact us now</h1>
    </div>
      <div className='ct__contact-contact'>
        <div className='ct__contact-card'>
          <MdEmail className='mdemail' size={25} />
          <a href="mailto:gpt7connect@gmail.com" className="">gpt7connect@gmail.com</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="ct__contact-form">
          <div className="">
            <input className="" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="">
            <input className="" type="email" placeholder={"Your Email"} name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className=""
              placeholder={"Your Message"}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div className='ct__contact-response'>
          <h3 id='message' className="ct__contact-h3">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <hr className='hr-contact'></hr>
     <div className='ct__contact-waves'>
        <a className='ct__contact-waves__twitter-in' href="https://www.instagram.com/gpt7_connect" rel="noreferrer" target='_blank'><AiFillInstagram style={{ color: '#fff'}} size={60}/></a>
     </div>
     <div className='ct__contact-waves__rights'> 
        <h6 style={{color: '#fff'}}>© 2023 GPT7 Connect • All rights reserved.</h6>
     </div>
    </div>
    </>
  )
}

export default ContactContent