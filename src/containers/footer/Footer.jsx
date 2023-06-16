import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import logoImage from '../../assets/logo1.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='gpt3__footer-background'>
      <div className='gpt3__footer'>
        <div className='gpt3__footer-header'>
          <h1 className='gradient__text'>Do you want to step in to the<br></br> future before others?</h1>
          <motion.button whileHover={{ scale: 1.05, transition: 0.5}}>Request early access</motion.button>
        </div>
        <div className='gpt3__footer-sections'>
          <div>
            <img className='gpt7__footer-sections__logo-1' src={logo} alt="logo" />
            <img src={logoImage} alt="logo" />
          </div>
          <div>
            <h4>Additional Links</h4>
            <p>GPT-7 Model</p>
            <p>Counters</p>
            <p>Social Media</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Terms & Conditions</p>            
            <p>Privacy Policy</p>            
            <p>Contact</p>            
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href="http://kkaskak.com"><strong>kkaskak.com</strong></a>
            <p>tzimostrad@gmail.com</p>
          </div>
        </div>
        <div className='gpt3__footer_lastdiv'>
          <p>© 2023 <strong>kKaskak | GPT-7 AI.</strong> All rights reserved.</p>
          <p style={{padding: '1rem', lineHeight: '1.2rem'}}>This is a promotional website made to be showcased on my personal portfolio as a React JS developer. OpenAI and GPT are trademarks of OpenAI. GPT-7 is a fixional GPT model. I do not have any connection with OpenAI.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer