import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/image.png'
import { motion } from "framer-motion"
import { container, container1, item, item1, headerImg, headerH1, headerP } from './animations-header';
const Header = () => {
  return (
      <div className='gpt3__header section__margin' id='home'>
      <div className='gpt3__header-content'>
        <motion.h1 animate={headerH1} className='gradient__text' style={{opacity: 0}}>Discover GPT-7 AI: kKaskak's Powerful Language Model</motion.h1>
        <motion.p animate={headerP} style={{opacity: 0}}>Experience the power of <strong>GPT-7</strong> with our case studies, tools, and articles. Join us now to learn more.</motion.p>

        <motion.div variants={container} className='gpt3__header-content__input' initial="hidden" animate="show">
          <motion.input variants={item} type="email" placeholder="Your Email Address"></motion.input>
          <motion.button variants={item} type='button'>Get Started</motion.button>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={container1} className='gpt3__header-content__people'>
          <motion.img variants={item1} src={ people } alt="people" />
          <motion.p variants={item1}>1,600 people requested access a visit in last 24 hours</motion.p>
        </motion.div>
      </div>
      <div className='gpt3__header-image'>
          <motion.img style={{opacity: 0}} animate={headerImg} src={ ai } alt="GPT7-AI generated photo of a woman." />
      </div>
    </div>
    )
}

export default Header