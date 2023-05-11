import React from 'react';
import './article.css';
import { motion } from 'framer-motion'
import { container } from './animations-article'

const Article = ({imgURl, date, heading, desc, alt})  => {
  return (
    <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once: true, amount: 0.2 }} variants={container} className='gpt3__blog-articles__article'>
      <div className='gpt3__blog-articles__article-image'>
        <img src={imgURl} alt={alt} />
      </div>
      <div className='gpt3__blog-articles__article-components'>
        <div>
          <p>{date}</p>
          <h3>{heading}</h3>
          <p className='gpt3__blog-articles__article-desc' style={{lineHeight: 2, paddingBottom: 10}}>{desc}</p>
        </div>
          <p>Read Full article</p>
      </div>
    </motion.div>
  )
}

export default Article