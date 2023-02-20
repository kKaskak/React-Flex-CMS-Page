import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__margin' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Discover GPT-3: OpenAI's Powerful Language Model</h1>
        <p>With its advanced language processing capabilities, GPT-3 has become a go-to tool for developers and businesses. Our website provides case studies, tools, and informative articles that showcase the potential of GPT-3. Join us to explore how GPT-3 can help you build something amazing.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address"></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={ people } alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ ai } alt="ai" />
      </div>
    </div>
  )
}

export default Header