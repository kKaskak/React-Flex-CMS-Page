import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';
import { h1 } from './animations-blog'
import { motion } from 'framer-motion'


const Blog = () => {
  return (
    <div className='gpt3___blog section__margin' style={{marginBottom: 0, paddingBottom: 100}} id='blog'>
      <div className='gpt3__blog-header'>
        <motion.h1 initial={'hidden'} whileInView={'show'} viewport={{ once: true }} variants={h1} className='gradient__text'>A lot is happening,<br></br> We are blogging about it.</motion.h1>
      </div>
      <div className='gpt3__blog-articles'>
        <div className='gpt3__blog-articles__A'>
          <Article imgURl={blog01} alt={'Artificial woman made by numbers. Desorted reality.'} date='Apr 3, 2023' heading='GPT-7 and the Future of Human-AI Interaction' desc='As AI becomes more integrated into our daily lives, we explore how GPT-7 ability to understand and respond to human language is paving the way for new forms of communication and collaboration.'/>
        </div>
        <div className='gpt3__blog-articles__B'>
          <Article imgURl={blog02} alt={'Images of a drawn head with a lines mind.'} date='Apr 1, 2023' heading='The Future of AI: How GPT-7 is Changing the Game' desc='We dive into the potential applications of GPT-7 and how it is poised to revolutionize industries such as healthcare, finance, and entertainment.'/>
          <Article imgURl={blog03} alt={'GPT-4 purple text'} date='Mar 23, 2023' heading='GPT-7 vs. GPT-4: A Comparative Analysis' desc='This post compares the latest GPT-7 model with its predecessor, GPT-4, and highlights the major improvements and differences between the two.'/>
          <Article imgURl={blog04} alt={'Human face created by squares'} date='Mar 11, 2023' heading=' Behind the Scenes of GPT-7' desc='We take a look at the development process of GPT-7 and the engineering challenges that had to be overcome to create such a powerful AI system.'/>
          <Article imgURl={blog05} alt={'Human head created by lines and hexagonals.'} date='Mar 2, 2023' heading='GPT-7: The Next Evolution in AI Language Models' desc='In this article, we explore the latest advancements in natural language processing and the new features and capabilities of the GPT-7 language model.'/>
        </div>
      </div>
    </div>
  )
}

export default Blog