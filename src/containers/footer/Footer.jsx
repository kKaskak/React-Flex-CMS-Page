import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import logoImage from '../../assets/logo1.png'

const Footer = () => {
  return (
    <div className='gpt3__footer-background'>
      <div className='gpt3__footer'>
        <div className='gpt3__footer-header'>
          <h1 className='gradient__text'>Do you want to step in to the<br></br> future before others?</h1>
          <button>Request early access</button>
        </div>
        <div className='gpt3__footer-sections'>
          <div>
            <img src={logo} alt="logo" />
            <img src={logoImage} alt="logo" />
          </div>
          <div>
            <h4>Additional Links</h4>
            <p>GPT-3 Model</p>
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
            <p>Varna 9003, Bulgaria</p>
            <p>+359 878245823</p>
            <p>tzimostrad@gmail.com</p>
          </div>
        </div>
        <div className='gpt3__footer_lastdiv'>
          <p>© 2023 kKaskak GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer