import React from 'react';
import { Feature } from '../../components'
import { FeaturesData } from './FeaturesData'
import { motion } from 'framer-motion'
import './features.css';
import { featuresH1, featuresP, hover, featuresContainer } from './animations-features'
import { Link } from 'react-router-dom';
const Features = () => {
  return (
    <div className='gpt3__features section__margin' id='features'>
      <div className='gpt3__features-heading'>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={featuresH1} className='gradient__text'>Bring the power of<br/> <strong>social media marketing</strong> to your startup</motion.h1>
        <Link to={'/contact'}><motion.p  initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={featuresP} whileHover={hover}>Don't wait! Contact us now.</motion.p></Link>
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