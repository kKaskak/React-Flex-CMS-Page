import React from 'react';
import './brand.css';
import { google, atlassian, dropbox, slack, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-image'>
        <img src={google} alt="google" />
      </div>
      <div className='gpt3__brand-image'>
        <img src={atlassian} alt="google" />
      </div>
      <div className='gpt3__brand-image'>
        <img src={dropbox} alt="google" />
      </div>
      <div className='gpt3__brand-image'>
        <img src={slack} alt="google" />
      </div>
      <div className='gpt3__brand-image'>
        <img src={shopify} alt="google" />
      </div>
    </div>
  )
}

export default Brand