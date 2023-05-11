import React from 'react';
import { Feature } from '../../components'
import { FeaturesData } from './FeaturesData'
import { motion } from 'framer-motion'
import './features.css';
import { featuresH1, featuresP, hover, featuresContainer } from './animations-features'
const Features = () => {
  return (
    <div className='gpt3__features section__margin' id='features'>
      <div className='gpt3__features-heading'>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={featuresH1} className='gradient__text'>Unlock the Power of<br/> <strong>GPT-7</strong> Today and Build the Future of Language Processing.</motion.h1>
        <motion.p  initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={featuresP} whileHover={hover}>Request Early Access to Get Started</motion.p>
      </div>
      <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={featuresContainer}  className='gpt3__features-container'>
        {FeaturesData.map((item,index) => (
             <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))} 
      </motion.div>
    </div>
  )
}

export default Features