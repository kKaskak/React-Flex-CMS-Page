import React from 'react';
import './brand.css';
import { motion } from 'framer-motion';
import { google, atlassian, dropbox, slack, shopify } from './imports';
import { itemLeft, itemRight, itemCenter, container } from './animation-brands'

const Brand = () => {
  return (
    <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.4 }} variants={container} className='gpt3__brand section__padding'>
      <motion.div className='gpt3__brand-image'>
        <img initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.1 }} variants={itemLeft} src={google} alt="google" />
      </motion.div>
      <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.1 }} variants={itemLeft} className='gpt3__brand-image'>
        <img src={atlassian} alt="google" />
      </motion.div>
      <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.1 }} variants={itemCenter} className='gpt3__brand-image'>
        <img src={dropbox} alt="google" />
      </motion.div>
      <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.1 }} variants={itemRight} className='gpt3__brand-image'>
        <img src={slack} alt="google" />
      </motion.div>
      <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true,  amount: 0.1 }} variants={itemRight} className='gpt3__brand-image'>
        <img src={shopify} alt="google" />
      </motion.div>
    </motion.div>
  )
}

export default Brand