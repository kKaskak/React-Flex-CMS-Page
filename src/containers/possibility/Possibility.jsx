import React from 'react';
import './possibility.css';
import vr from '../../assets/vr.png'
import { motion } from 'framer-motion'
import { img, h4, h1, h4_2, p, hover } from './animation-possibility'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__margin' id='possibility'>
      <div className='gpt3__possibility-image'>
        <motion.img initial={'hidden'} whileInView={'show'} viewport={{ once: true }}  variants={img} src={vr} alt="A woman wearing a VR headset, using GPT7-AI." />
      </div>
      <motion.div className='gpt3__possibility-container'>
        <motion.h4 initial={'hidden'} whileInView={'show'} whileHover={hover} viewport={{ once: true }}  variants={h4}>Request Early Access to Get Started</motion.h4>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }}  variants={h1} className="gradient__text">Discover Limitless Potential <br /> with Early Access</motion.h1>
        <motion.p initial={'hidden'} whileInView={'show'} viewport={{ once: true }}  variants={p}>Unleash your creativity and push the boundaries with our powerful AI technology. Join us today and experience the endless possibilities of GPT-7 AI. Request early access to get started.</motion.p>
        <motion.h4 initial={'hidden'} whileInView={'show'} whileHover={hover} viewport={{ once: true }}  variants={h4_2}>Get ahead of the game - Request Access Today!</motion.h4>
      </motion.div>
    </div>
  )
}

export default Possibility