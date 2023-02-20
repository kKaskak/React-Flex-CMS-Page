import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';


const Blog = () => {
  return (
    <div className='gpt3___blog section__margin' id='blog'>
      <div className='gpt3__blog-header'>
        <h1 className='gradient__text'>A lot is happening,<br></br> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-articles'>
        <div className='gpt3__blog-articles__A'>
          <Article imgURl={blog01} date='Sep 26, 2022' heading='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className='gpt3__blog-articles__B'>
          <Article imgURl={blog02} date='Sep 25, 2022' heading='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURl={blog03} date='Sep 24, 2022' heading='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURl={blog04} date='Sep 23, 2022' heading='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgURl={blog05} date='Sep 22, 2022' heading='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog