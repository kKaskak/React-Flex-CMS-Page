import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
import logoImage from '../../assets/logo1.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { RiMailFill } from 'react-icons/ri';

const Footer = () => {
  const ScrollTop = () => {
      window.scrollTo(0, 0)
  }
  return (
    <div className='gpt3__footer-background'>
      <div className='gpt3__footer'>
        <div className='gpt3__footer-header'>
          <h1 className='gradient__text'>Do you want your startup to break<br></br>the charts?</h1>
          <Link to={'/contact'}><motion.button whileHover={{ scale: 1.05, transition: 0.5}}>Get in touch</motion.button></Link>
        </div>
        <div className='gpt3__footer-sections'>
          <div>
            <img className='gpt7__footer-sections__logo-1' src={logo} alt="logo" />
            {/* <img src={logoImage} alt="logo" /> */}
          </div>
          <div>
          <h4>Company</h4>
            <p><Link onClick={ScrollTop} to={'/privacy'}>Terms & Conditions</Link></p>            
            <p><Link onClick={ScrollTop} to={'/privacy'}>Privacy policy</Link></p>     
          </div>
          <div>
            <h4>Socials</h4>
            <p><Link onClick={ScrollTop} to={'/contact'}>Contact</Link></p>
            <p><Link onClick={ScrollTop} to={'/contact'}>Social media</Link></p>       
          </div>
          <div>
            <h4>Get in touch</h4>
            <a style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} href='mailto:gpt7connect@gmail.com'><RiMailFill  size={20} style={{marginRight: 10}}/> gpt7connect@gmail.com</a>
          </div>
        </div>
        <div className='gpt3__footer_lastdiv' style={{paddingTop: '3rem'}}>
          <p>© 2023 <strong>GPT7 Connect</strong> All rights reserved.</p>
          <p style={{padding: '1rem', lineHeight: '1.2rem'}}>We are an online marketing agency that helps startups get recognised.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer