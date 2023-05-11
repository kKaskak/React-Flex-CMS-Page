import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components'
import { motion } from 'framer-motion';
import { item, itemFirst, container, h1Anim, pAnim, hover } from './animation-whatGPT7'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <motion.div initial={'hidden'} whileInView={'show'}  viewport={{ once: true }} variants={itemFirst} className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-7" text="GPT-7 is an advanced natural language processing model developed by kKaskak. It is capable of generating human-like language and performing a variety of language tasks. Its capabilities have made it a popular tool among developers and businesses."/>
      </motion.div>
      <div className='gpt3__whatgpt3-heading'>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={h1Anim} className='gradient__text'>The possibilities are beyond your imagination</motion.h1>
        <motion.p initial={'hidden'} whileInView={'show'} viewport={{ once: true }} whileHover={hover} variants={pAnim}>Explore The Library</motion.p>
      </div>
        <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={container} className='gpt3__whatgpt3-container'>
            <motion.span viewport={{ once: true }} variants={item}><Feature title="Chatbots" text="Chatbots simulate human-like conversations with users and are used in customer service, marketing, and other industries."/></motion.span>
            <motion.span viewport={{ once: true }} variants={item}><Feature title="Knowledgebase" text="The ChatGPT knowledgebase is a repository of information about a wide range of topics, accessible through natural language conversation. "/></motion.span>
            <motion.span viewport={{ once: true }} variants={item}><Feature title="Education" text="ChatGPT can support education by providing quick answers and explanations, personalized learning, and language practice opportunities."/></motion.span>
        </motion.div>
    </div>
  )
}

export default WhatGPT3