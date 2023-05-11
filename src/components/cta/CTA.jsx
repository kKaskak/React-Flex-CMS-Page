import React from 'react';
import './cta.css';
import { motion } from 'framer-motion'
import { cta } from './animation.cta'

const CTA = () => {
  return (
    <motion.div initial={'hidden'} whileInView={'show'} variants={cta} viewport={{ once: true }} className='gpt3__cta section__margin'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possiblities.</h4>
      </div>
      <div className='gpt3__cta-button'>
        <motion.button whileHover={{scale: 1.05, transition: 0.5}}>Get Started</motion.button>
      </div>
    </motion.div>
  )
}

export default CTA