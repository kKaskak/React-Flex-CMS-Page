import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components'
import { motion } from 'framer-motion';
import { item, itemFirst, container, h1Anim, pAnim, hover } from './animation-whatGPT7'
import { Link } from 'react-router-dom';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <motion.div initial={'hidden'} whileInView={'show'}  viewport={{ once: true }} variants={itemFirst} className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-7 Connect" text="GPT-7 Connect is an online marketing agency that helps brands 
        in finding creators who are willing to promote their services."/>
      </motion.div>
      <div className='gpt3__whatgpt3-heading'>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={h1Anim} className='gradient__text'>The possibilities are beyond your imagination</motion.h1>
       <Link to={'/contact'}> <motion.p initial={'hidden'} whileInView={'show'} viewport={{ once: true }} whileHover={hover} variants={pAnim}>Start now</motion.p></Link>
      </div>
        <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={container} className='gpt3__whatgpt3-container'>
        < motion.span viewport={{ once: true }} variants={item}>
        <Feature title="Influencer Marketing" text="We facilitate collaborations between brands and creators, leveraging their influence to reach a wider audience and drive brand awareness."/>
        </motion.span>

        < motion.span viewport={{ once: true }} variants={item}>
        <Feature title="Social Media Reach" text="Our agency taps into the power of social media platforms, helping brands harness the potential of influencers to connect with their target customers effectively."/>
        </motion.span>

        < motion.span viewport={{ once: true }} variants={item}>
        <Feature title="Targeted Promotions" text="We ensure that brands services are promoted to the most relevant and engaged audiences, maximizing the impact of their marketing campaigns."/>
        </motion.span>
        </motion.div>
    </div>
  )
}

export default WhatGPT3