import React from 'react';
import './article.css';

const Article = ({imgURl, date, heading})  => {
  return (
    <div className='gpt3__blog-articles__article'>
      <div className='gpt3__blog-articles__article-image'>
        <img src={imgURl} alt="blog" />
      </div>
      <div className='gpt3__blog-articles__article-components'>
        <div>
          <p>{date}</p>
          <h3>{heading}</h3>
        </div>
          <p>Read Full article</p>
      </div>
    </div>
  )
}

export default Article